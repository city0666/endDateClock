import { getTimeDifferenceFormatted } from "./timeUtils";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const BetweendownTimer = ({
  endDateString,
  startDateString,
  styleContainer,
}) => {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    if (!endDateString || !startDateString) {
      // Do nothing if endDateString is not available yet.
      return;
    }

    const interval = setInterval(() => {
      const saleEndDate = new Date(endDateString);
      const now = new Date(startDateString);
      const timeDiff = saleEndDate - now;

      if (isNaN(timeDiff) || timeDiff <= 0) {
        clearInterval(interval);
        setTimeDifference("Sale has ended");
      } else {
        const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);

        setTimeDifference(`${days} Days, ${hours}:${minutes}:${seconds} Left`);
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [endDateString, startDateString]);

  if (!endDateString || !startDateString) {
    // Return null or a loading indicator if endDateString is not available yet.
    return null;
  }

  return (
    <>
      {timeDifference ? (
        <Text
          style={[
            {
              color: "#000",
              marginHorizontal: 10,
            },
            styleContainer,
          ]}
        >
          {timeDifference}
        </Text>
      ) : (
        <Text
          style={[
            {
              color: "#000",
              marginHorizontal: 10,
            },
            styleContainer,
          ]}
        >
          {getTimeDifferenceFormatted(endDateString)}
        </Text>
        // <ActivityIndicator size="small" color="#0000ff" />
      )}
    </>
  );
};

// // Calculate the default endDateString for tomorrow
// const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);

// BetweendownTimer.defaultProps = {
//   endDateString: tomorrow.toISOString(), // Set tomorrow as the default end date/time
// };

export default BetweendownTimer;
