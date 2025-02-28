import moment from "moment";

export default (_, inject) => {
  inject("moment", {
    formatDate(date) {
      return date ? moment(date).format("DD MMM YYYY") : "-";
    },
    formatStartDate(date) {
      return date ? moment(date).format("YYYY-MM-DD") : "-";
    },
    formatTime(date) {
      return date ? moment(date).format("h:mm a") : "-";
    },
    getEndDate(startDate, days = 30) {
      return startDate
        ? moment(startDate).add(days, "days").format("YYYY-MM-DD")
        : "-";
    },
    isDateRangeAvailable(startDate, endDate, bookedDates) {
      const start = moment(startDate);
      const end = moment(endDate);

      return !bookedDates.some(({ startDate, endDate }) => {
        const bookedStart = moment(startDate);
        const bookedEnd = moment(endDate);

        return (
          start.isBetween(bookedStart, bookedEnd, null, "[]") || // Start falls within booked range
          end.isBetween(bookedStart, bookedEnd, null, "[]") || // End falls within booked range
          (start.isSameOrBefore(bookedStart) && end.isSameOrAfter(bookedEnd)) // New range fully covers booked range
        );
      });
    },
  });
};
