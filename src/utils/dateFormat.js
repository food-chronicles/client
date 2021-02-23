export function dateFormatLong(dateString = "01/01/2001") {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  return (new Intl.DateTimeFormat("id-ID", options).format(new Date(dateString))).toString();
}

// console.log(dateFormat("2021-02-22T14:00:53.288Z").toString());
