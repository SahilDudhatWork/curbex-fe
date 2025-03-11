<template>
  <div class="rounded-[25px] overflow-hidden">
    <GmapMap
      :center="firstMarkerPosition"
      map-type-id="hybrid"
      ref="mapRef"
      :zoom="mapZoom"
      :style="{
        width: '100%',
        height: height + 'px',
      }"
      :options="mapOptions"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="{ lat: marker.lat, lng: marker.lng }"
        :clickable="true"
        :draggable="isMarkerEnabled"
        :icon="marker === activeMarkerData ? redMarker : yellowMarker"
        @click="handleMarkerClick(marker)"
        @mouseover="activeMarkerData = marker"
        @mouseout="activeMarkerData = null"
      />
      <GmapInfoWindow
        v-if="activeMarkerData"
        :position="{ lat: activeMarkerData?.lat, lng: activeMarkerData?.lng }"
        :options="{ pixelOffset: { width: 0, height: -40 } }"
        :opened="activeMarkerData != null ? true : false"
      >
        <div class="bg-[#FCFCFC] rounded-[18px] p-[15px] flex items-end w-fit">
          <img
            :src="heroImage?.imageUrl || '/Images/Product/product-1.png'"
            alt=""
            class="border border-[#F5F5F5] rounded-[14px] w-[114px] h-[114px]"
          />
          <div class="pl-2">
            <p
              class="bg-[#29CC6A] text-[#FFFFFF] text-[10px] w-fit p-[2px_5px] rounded-[20px] mb-1"
            >
              Available
            </p>
            <p class="text-[12px] font-Montserrat-Medium font-bold mb-1">
              {{ activeMarkerData?.product?.name }}
            </p>
            <p class="text-[10px] text-[#3B3B3B] mb-1">
              Rental Cost: ${{ activeMarkerData?.product?.price }}
            </p>
            <p class="text-[10px] text-[#3B3B3B] mb-1">
              Permit Cost: ${{ permit?.price }}
            </p>
            <p class="text-[10px] text-[#3B3B3B] mb-1">
              {{ permit?.duration }} day rental
            </p>
          </div>
        </div>
      </GmapInfoWindow>
    </GmapMap>
  </div>
</template>
<script>
export default {
  layout: "dashboard",
  props: {
    markers: {
      type: Array,
      default: () => [],
    },
    permit: {
      type: Object,
      default: () => null,
    },
    height: {
      type: Number,
      default: 242,
    },
    isMarkerEnabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeMarkerData: null,
      marker: { position: { lat: 44.41015439985794, lng: -79.70788851599121 } }, // Ottawa's coordinates
      mapOptions: {
        disableDefaultUI: true,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: true,
        keyboardShortcuts: false,
        zoomControl: true,
      },
      address: "",
      geocoder: null,
      getMapLocation: { lat: 44.41015439985794, lng: -79.70788851599121 }, // Default location set to Ottawa, Canada
      latLng: { lat: 44.41015439985794, lng: -79.70788851599121 }, // Default latLng for Canada
      yellowMarker: {
        url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        scaledSize: { width: 40, height: 40 }, // Adjust size if needed
      },
      redMarker: {
        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        scaledSize: { width: 40, height: 40 }, // Adjust size if needed
      },
    };
  },
  computed: {
    firstMarkerPosition() {
      return this.markers.length > 0
        ? { lat: this.markers[0].lat, lng: this.markers[0].lng }
        : this.getMapLocation; // Default if no markers
    },
    mapZoom() {
      return this.markers.length > 0 ? 20 : 12; // Set higher zoom when first marker exists
    },
    heroImage() {
      if (!this.activeMarkerData?.product?.images?.length) {
        return null;
      }

      // Find the primary image
      const primaryImage = this.activeMarkerData.product.images.find(
        (image) => image.imageType === "primary"
      );

      // Return the primary image if found, otherwise return the first image
      return primaryImage || this.activeMarkerData.product.images[0];
    },
  },
  watch: {
    //   addressDetails: {
    //     immediate: true,
    //     handler(newValue) {
    //       if (newValue.lat && newValue.long) {
    //         const location = {
    //           lat: parseFloat(newValue.lat),
    //           lng: parseFloat(newValue.long),
    //         };
    //         this.getMapLocation = location;
    //         this.marker.position = location;
    //         this.latLng = this.marker.position;
    //         if (this.$refs.mapRef?.panTo) {
    //           this.$refs.mapRef.panTo(location);
    //         }
    //         this.getAddress();
    //       }
    //     },
    //   },
  },
  mounted() {
    setTimeout(() => {
      this.geocoder = new google.maps.Geocoder();
      this.getAddress();
    }, 1000);
  },
  methods: {
    async handleMapClick(e) {
      console.log("handleMapClick", e);
    },
    getUpdatedLocation(e) {
      this.marker.position = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      };
      this.latLng = this.marker.position;
      this.getAddress();
    },
    async getAddress(setAddress = true) {
      try {
        const resultTypes = [
          { type: "street_address", location_type: "ROOFTOP" },
          { type: "premise", location_type: "ROOFTOP" },
          { type: "street_address", location_type: "RANGE_INTERPOLATED" },
          { type: "route", location_type: "ROOFTOP" },
          { type: "premise", location_type: "RANGE_INTERPOLATED" },
          { type: "route", location_type: "RANGE_INTERPOLATED" },
          { type: "intersection", location_type: "ROOFTOP" },
          { type: "intersection", location_type: "RANGE_INTERPOLATED" },
        ];
        this.geocoder.geocode({ location: this.latLng }, (results, status) => {
          if (status === "OK") {
            let formattedAddress, addressComponents;
            for (let i = 0; i < resultTypes.length; i++) {
              const resultType = resultTypes[i];
              const result = results.find((result) => {
                const addressType = result.types.includes(resultType.type);
                const locationType =
                  result.geometry.location_type === resultType.location_type;
                return addressType && locationType;
              });
              if (result) {
                formattedAddress = result.formatted_address;
                addressComponents = result.address_components;
                break;
              }
            }

            if (!formattedAddress || !addressComponents) {
              formattedAddress = results[0].formatted_address;
              addressComponents = results[0].address_components;
            }

            if (setAddress) {
              // Extract specific address components
              const street =
                addressComponents.find((component) =>
                  component.types.includes("route")
                )?.long_name || "";

              const city =
                addressComponents.find((component) =>
                  component.types.includes("locality")
                )?.long_name || "";

              const province =
                addressComponents.find((component) =>
                  component.types.includes("administrative_area_level_1")
                )?.short_name || "";

              const postalCode =
                addressComponents.find((component) =>
                  component.types.includes("postal_code")
                )?.long_name || "";

              this.address = formattedAddress;
              // Emit the full address details
              this.$emit("updateAddress", {
                street: this.address,
                city: city,
                province: province,
                postal: postalCode,
                // lat: this.marker.position.lat,
                // long: this.marker.position.lng,
              });
            } else {
              this.address = "";
            }
          } else {
            console.log("Geocoder failed due to: " + status);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    },
    handleMarkerClick(marker) {
      this.$emit("markerClick", marker);
    },
  },
};
</script>

<style scoped>
::v-deep .gm-style-iw,
::v-deep .gm-style-iw-c {
  background-color: transparent !important;
  box-shadow: none !important;
}
::v-deep .gm-style-iw-chr {
  display: none !important;
}
::v-deep .gm-style-iw-d {
  overflow: hidden !important;
}
</style>
