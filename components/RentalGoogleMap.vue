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
        :icon="generateMarkerIcon(index + 1, marker)"
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
      return this.markers.length > 0 ? 18 : 12; // Set higher zoom when first marker exists
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
    generateMarkerIcon(number, marker) {
      const color =
        this.activeMarkerData?.id == marker?.id ? "#FF364A" : "#FFA900"; // Orange on hover, Yellow by default
      const svg = `
        <svg width="33" height="46" viewBox="0 0 33 46" xmlns="http://www.w3.org/2000/svg">
          <!-- Marker Shape -->
          <path d="M32.6704 16.1126C32.3266 7.60866 25.3419 0.815185 16.7606 0.785254C7.96764 0.754594 0.756599 7.90943 0.720829 16.7024C0.712069 18.9362 1.16103 21.0635 1.9801 22.9966C5.48706 32.494 15.2327 43.8478 16.554 45.1254C16.638 45.2064 16.7701 45.2079 16.8555 45.129C18.3024 43.7989 29.592 31.4245 32.1602 20.8467C32.1864 20.7459 32.2098 20.6445 32.2346 20.5437C32.2573 20.4422 32.2835 20.3408 32.3047 20.2393C32.4675 19.5056 32.5785 18.7537 32.6361 17.9858C32.6383 17.9566 32.6405 17.9266 32.6427 17.8974C32.669 17.5237 32.6865 17.1484 32.6865 16.7681C32.6865 16.5345 32.6799 16.3191 32.6697 16.1118L32.6704 16.1126ZM16.7037 25.0581C12.1272 25.0581 8.41659 21.3482 8.41659 16.771C8.41659 12.1939 12.1265 8.48395 16.7037 8.48395C21.2808 8.48395 24.9907 12.1939 24.9907 16.771C24.9907 21.3482 21.2808 25.0581 16.7037 25.0581Z" fill="${color}"/>
          
          <!-- White Background Circle for the Number -->
          <circle cx="16.7" cy="16.7" r="8" fill="white"/>
          
          <!-- Centered Number -->
          <text x="50%" y="40%" font-family="Arial" font-size="12" fill="black" text-anchor="middle" dominant-baseline="middle" font-weight="bold">${number}</text>
        </svg>
      `;
      return `data:image/svg+xml;base64,${btoa(svg)}`;
    },
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
