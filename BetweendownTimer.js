import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const BetweendownTimer = ({
  endDateString,
  startDateString,
  styleContainer,
}) => {
  const initialStartDate = new Date(startDateString);
  const [startDate01, setStartDate01] = useState(initialStartDate);

  const calculateTimeDifference = () => {
    const startDate = new Date(startDate01);
    const endDate = new Date(endDateString);
    const timeDiffInMilliseconds = endDate - startDate;

    if (timeDiffInMilliseconds <= 0) {
      return "Sale has ended";
    }

    const totalSeconds = Math.floor(timeDiffInMilliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeDifference, setTimeDifference] = useState(
    calculateTimeDifference()
  );

  useEffect(() => {
    if (!endDateString || !startDateString) {
      // Do nothing if endDateString is not available yet.
      return;
    }

    const intervalId = setInterval(() => {
      const timeDiff = calculateTimeDifference();

      if (timeDiff === "Sale has ended") {
        clearInterval(intervalId);
      } else {
        const update = new Date(startDate01);
        update.setSeconds(update.getSeconds() + 1);
        setStartDate01(update);
        setTimeDifference(timeDiff);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDateString, startDateString, startDate01]);

  if (!endDateString || !startDateString) {
    // Return null or a loading indicator if endDateString is not available yet.
    return null;
  }

  return (
    <Text
      style={[
        {
          color: "#000",
          marginHorizontal: 10,
        },
        styleContainer,
      ]}
    >
      {timeDifference.days} days, {timeDifference.hours} hours,{" "}
      {timeDifference.minutes} minutes, {timeDifference.seconds} seconds
    </Text>
  );
};

export default BetweendownTimer;
