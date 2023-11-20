"use client";
import { useCountdown } from "@/hooks/useCountDown";
import React from "react";

const CountdownUi = () => {
  const DISCOUNT_DAYS = new Date("2023-12-31");
  const [days, hours, minutes, seconds] = useCountdown<Date>(DISCOUNT_DAYS);
  return (
    <div className="absolute bottom-[27%] right-0 text-sm md:bottom-[15%] md:right-[20%] md:text-xl text-white font-bold">
      <span>Thời hạn ưu đãi còn: </span>
      <span>
        {+days + +hours + +minutes + +seconds >= 0
          ? `${days} ngày:${hours} giờ:${minutes} phút:${seconds} giây`
          : 0}
      </span>
    </div>
  );
};

export default CountdownUi;
