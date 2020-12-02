const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatDateAndTimeToDate = (dateAndTimeString) => {
  const re = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const date = dateAndTimeString.match(re);
  return `${date[3]}-${months[parseInt(date[2]) - 1]} ${date[1]}`;
};
