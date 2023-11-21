"use client";
import Countdown from "react-countdown";
// import { useCountdown } from "@/hooks/useCountDown";
import React from "react";

const CountdownUi = () => {
  // const DISCOUNT_DAYS = new Date("2023-12-31");
  // const [hours, minutes, seconds] = useCountdown<Date>(DISCOUNT_DAYS);
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <Countdown date={Date.now() + 43200000} renderer={renderer} />;
    } else {
      // Render a countdown
      return (
        <span className="text-xl">
          <span className="bg-black p-2 rounded-md">{hours}</span> :{" "}
          <span className="bg-black p-2 rounded-md">{minutes}</span> :{" "}
          <span className="bg-black p-2 rounded-md">{seconds}</span>
        </span>
      );
    }
  };

  return (
    <div className="absolute bottom-[30%] right-[5%] text-sm md:bottom-[15%] md:right-[20%] md:text-xl text-white font-bold">
      <span className="text-md">Thời hạn ưu đãi còn: </span>
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
