import { formatDistance, parseISO, differenceInDays } from "date-fns";

export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(dateStr1), parseISO(dateStr2));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), { addSuffix: true })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = (options = { end: false }) => {
  const today = new Date();
  if (options.end)
    today.setUTCHours(23, 59, 59, 999); // Set to the last second of the day
  else today.setUTCHours(0, 0, 0, 0); // Set to the first second of the day
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
