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
        @click="handleMarkerClick(marker)"
      />
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
