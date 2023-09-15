export function getTimeDifferenceFormatted(endDateString) {
  const sale_end_date = new Date(endDateString); // Replace '-' with '/' for cross-browser compatibility
  const today = new Date();
  const timeDifference = sale_end_date - today;

  if (isNaN(timeDifference)) {
    console.log('invalid', endDateString);
    return 'Invalid date format';
  }

  const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
  );
  const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

  return `${days} Days,${hours}:${minutes}:${seconds} Left`;
}
