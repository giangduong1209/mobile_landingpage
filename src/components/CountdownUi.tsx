"use client";
import Countdown from "react-countdown";
// import { useCountdown } from "@/hooks/useCountDown";
import React from "react";

const CountdownUi = () => {
  // const DISCOUNT_DAYS = new Date("2023-12-31");
  // const [hours, minutes, seconds] = useCountdown<Date>(DISCOUNT_DAYS);
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    console.log("first");
    if (completed) {
      // Render a completed state
      return <Countdown date={Date.now() + 43200000} renderer={renderer} />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="absolute bottom-[27%] right-0 text-sm md:bottom-[15%] md:right-[20%] md:text-xl text-white font-bold">
      <span>Thời hạn ưu đãi còn: </span>
      <Countdown date={Date.now() + 43200000} renderer={renderer} />
      {/* <span>
        {+hours + +minutes + +seconds >= 0
          ? `${hours} giờ:${minutes} phút:${seconds} giây`
          : 0}
      </span> */}
    </div>
  );
};

export default CountdownUi;
