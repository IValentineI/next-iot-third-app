import Image from "next/image";
import cal1 from "./../assets/images/cal1.png";
import { SauFooter } from "@/components/SauFooter";
import Link from "next/link";

export default function Page() {
  return (
    <div
      className="p-10 w-3/4 mx-auto mt-20 border border-gray-100 rounded-xl 
                    flex flex-col justify-center items-center
                    shadow-xl"
    >
      {/* ส่วนแสดงรูปจาก Internet */}
      <Image
        src="https://images.pexels.com/photos/5466794/pexels-photo-5466794.jpeg?_gl=1*vyktnc*_ga*MjA5MzI1MzA2MC4xNzY5NDg1ODgz*_ga_8JE65Q40S6*czE3Njk0ODU4ODMkbzEkZzEkdDE3Njk0ODU5MTUkajI4JGwwJGgw"
        alt="เครื่องคำนวณ"
        width={380}
        height={37}
        priority
        className="mb-10 rounded-xl"
      />

      {/* ส่วนแสดงรูปจากในโปรเจ็กต์ (asset/images) */}
      <Image
        src={cal1}
        alt="เครื่องคำนวณ"
        width={100}
        height={20}
        priority
        className="mb-10 rounded-xl"
      />

      {/* ส่วนแสดงชื่อโปรแกรม */}
      <h1 className="text-3xl text-center text-blue-600 font-bold">
        Calculator Variety
        <br />
        โปรแกรมคำนวณหลากหลายแบบ
      </h1>

      {/* ส่วนของ Link ที่จะเปิดไปยังหน้า Page ต่างๆ */}
      <div className="mt-10 flex">
        <Link href="/body/calbmi"
              className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          BMI Calculator
        </Link>
        |
        <Link href="/body/calbmr"
              className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          BMR Calculator
        </Link>
        |
        <Link href="/calcarinstallment"
              className="text-cyan-500 hover:text-cyan-700 mx-3 hover:underline">
          Car Installment
        </Link>
      </div>

      {/* ส่วนแสดง Footer */}
      <SauFooter />
    </div>
  );
}
