<template>
  <div class="rounded-[25px] overflow-hidden">
    <GmapMap
      :center="getMapLocation"
      :zoom="12"
      map-style-id="roadmap"
      map-type-id="terrain"
      ref="mapRef"
      :style="{
        width: '100%',
        height: height + 'px',
      }"
      :options="mapOptions"
      @dragend="getAddress"
      @click="handleMapClick"
      @center_changed="checkCenter"
    >
      <GmapMarker
        :position="marker.position"
        :clickable="isMarkerEnabled"
        :draggable="isMarkerEnabled"
        @dragend="getUpdatedLocation"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  layout: "dashboard",
  props: {
    addressDetails: {
      type: Object,
      default: () => ({}),
    },
    height: {
      type: Number,
      default: 242,
    },
    isMarkerEnabled: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      marker: { position: { lat: 45.4215, lng: -75.6972 } }, // Ottawa's coordinates
      mapOptions: {
        disableDefaultUI: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        keyboardShortcuts: false,
        zoomControl: false,
      },
      address: "",
      geocoder: null,
      getMapLocation: { lat: 45.4215, lng: -75.6972 }, // Default location set to Ottawa, Canada
      latLng: { lat: 45.4215, lng: -75.6972 }, // Default latLng for Canada
    };
  },
  watch: {
    addressDetails: {
      immediate: true,
      handler(newValue) {
        if (newValue.lat && newValue.long) {
          const location = {
            lat: parseFloat(newValue.lat),
            lng: parseFloat(newValue.long),
          };
          this.getMapLocation = location;
          this.marker.position = location;
          this.latLng = this.marker.position;
          if (this.$refs.mapRef?.panTo) {
            this.$refs.mapRef.panTo(location);
          }
          this.getAddress();
        }
      },
    },
  },
  mounted() {
    setTimeout(() => {
      this.geocoder = new google.maps.Geocoder();
      this.getAddress();
    }, 1000);
  },
  methods: {
    checkCenter(latLng) {
      if (!this.isMarkerEnabled) return;
      this.latLng = latLng;
      this.marker.position = { lat: latLng.lat(), lng: latLng.lng() };
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
              const streetNumber =
                addressComponents.find((component) =>
                  component.types.includes("street_number")
                )?.long_name || "";

              const streetName =
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

              // Determine the street value
              const street =
                streetNumber && streetName
                  ? `${streetNumber} ${streetName}`
                  : streetName || formattedAddress.split(",")[0] || "";

              this.address = formattedAddress;

              // Emit the full address details
              this.$emit("updateAddress", {
                street: street,
                city: city,
                province: province,
                postal: postalCode,
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
  },
};
</script>
