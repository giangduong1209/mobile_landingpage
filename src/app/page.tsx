"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CountdownUi from "@/components/CountdownUi";
import FormPlan from "@/components/FormPlan";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <header className="sticky h-24 md:h-16 inset-x-0 top-0 z-30 w-ful bg-white/75 backdrop-blur-lg transition-all mb-14">
        <div className="flex p-4 justify-between items-center">
          <h1 className="text-2xl">Viễn Thông ZinZin</h1>
          <Button className="sm:text-md tracking-wide">
            Hotline: 0877.358.999
          </Button>
        </div>
      </header>
      <main>
        <div className="mb-4 px-4 2xl:px-96">
          <h1 className="text-4xl text-center font-bold md:text-7xl bg-yellow-400 p-2 rounded-md shadow-lg">
            Gắn gói trực tiếp trên <br />{" "}
            <span className="text-blue-700 font-semibold">
              Sim Mobifone đang dùng
            </span>
          </h1>
        </div>
        {/* Feature */}
        <div className="flex flex-col justify-center items-center px-2 gap-5">
          <div className="w-full flex justify-center gap-x-5">
            <div className="flex w-[250px] md:w-[300px] items-center">
              <CheckCircle className="text-green-600 mr-2 md:w-14 h-20" />
              <span className="text-red-600 text-md md:text-lg uppercase">
                Không cần <br />
                <span className="text-blue-600">mua sim 4G</span>
              </span>
            </div>
            <div className="flex w-[250px] md:w-[300px] items-center">
              <CheckCircle className="text-green-600 mr-2 md:w-14 h-20" />
              <span className="text-red-600 uppercase text-md md:text-lg">
                Gắn trực tiếp trên <br />{" "}
                <span className="text-blue-600">sim đang dùng</span>
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center gap-x-5">
            <div className="flex w-[250px] md:w-[300px] items-center">
              <CheckCircle className="text-green-600 mr-2 md:w-14 h-20" />
              <span className="text-red-600 uppercase text-md md:text-lg">
                Nhanh chóng <br />{" "}
                <span className="text-blue-600">(chỉ 5 phút gắn xong)</span>
              </span>
            </div>
            <div className="flex w-[250px] md:w-[300px] items-center">
              <CheckCircle className="text-green-600 mr-2 md:w-14 h-20" />
              <span className="text-red-600 uppercase text-md md:text-lg">
                Dễ dàng <br />{" "}
                <span className="text-blue-600">(90% sim mobi gắn được)</span>
              </span>
            </div>
          </div>
        </div>
        {/* banner image */}
        <div className="my-14">
          <Image
            src="/banner_1.jpg"
            width={1198}
            height={800}
            alt="banner"
            quality={100}
            className="mx-auto"
          />
          <Link
            href="#register"
            className="block w-full text-center mt-10 font-semibold text-red-600 text-3xl"
          >
            &lt;Gắn ngay&gt;
          </Link>
        </div>
        {/* Price plan */}
        <div>
          <h2 className="text-center font-bold text-5xl">Các gói cước gắn</h2>
          <div className="flex flex-col justify-center items-center gap-5 md:flex-row mt-10 mb-14">
            <Image
              src="/price_plan.jpg"
              width={778}
              height={642}
              alt="price plan"
            />
            <Link
              href="#register"
              className="font-semibold text-red-600 text-3xl"
            >
              &lt;Gắn ngay&gt;
            </Link>
          </div>
        </div>
        {/* Discount */}
        <div className="relative my-14">
          <Image
            src="/banner2-01.jpg"
            width={1198}
            height={800}
            alt="banner 2"
            className="mx-auto"
          />
          {isClient && <CountdownUi />}
          <Link
            href="#register"
            className="block w-full text-center mt-10 font-semibold text-red-600 text-3xl"
          >
            &lt;Gắn ngay&gt;
          </Link>
        </div>

        {/* Contact info */}
        <div id="register">
          <h2 className="text-center font-bold text-5xl">
            Thông tin đăng ký gắn gói
          </h2>
          <FormPlan />
        </div>
      </main>
      <footer>
        <h2 className="text-center font-bold text-5xl">Về chúng tôi</h2>
        <p className="text-center my-5">
          ZinZin Shop chuyên cung cấp dịch vụ viễn thông Viettel, Vinaphone,
          Mobifone.
          <br /> Với phương châm số 1 về bảo hành, chúng tôi mong muốn mang lại
          dịch vụ chất lượng, uy tín nhất.
        </p>
        <Image
          src="/banner_footer.jpg"
          alt="banner footer"
          width={1198}
          height={800}
          className="mx-auto"
        />
        <p className="ml-2 text-center">
          Địa chỉ:{" "}
          <span className="font-bold">
            Số 9 ngõ 79 Mễ Trì Thượng, Nam Từ Liêm, Hà Nội
          </span>
        </p>
        <p className="ml-2 text-center">
          Hotline/zalo:<span className="font-bold"> 0877.358.999</span>
        </p>
      </footer>
    </>
  );
}
