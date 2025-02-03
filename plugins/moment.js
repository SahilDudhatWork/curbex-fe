import moment from "moment";

export default (_, inject) => {
  inject("moment", {
    formatDate(date) {
      return date ? moment(date).format("DD MMM YYYY") : "-";
    },
    formatTime(date) {
      return date ? moment(date).format("h:mm a") : "-";
    },
  });
};
