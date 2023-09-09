// import {COLORS, SIZES} from '@app/constants/themes';
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const CountdownTimer = ({ endDateString }) => {
  const [timeDifference, setTimeDifference] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const saleEndDate = new Date(endDateString);
      const now = new Date();
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
  }, [endDateString]);

  return (
    <Text
      style={{
        alignSelf: "flex-end",
        color: "#000",
        // marginHorizontal: SIZES.base,
      }}
    >
      {timeDifference}
    </Text>
  );
};

export default CountdownTimer;
