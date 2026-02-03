"use client";

import { SauHeader } from "@/components/SauHeader";
import { SauFooter } from "@/components/SauFooter";
import Image from "next/image";
import car2 from "@/assets/images/car2.png";
import { useState } from "react";

export default function Page() {
  // state สำหรับรับค่า input
  const [carPrice, setCarPrice] = useState("");
  const [downPercent, setDownPercent] = useState("10");
  const [interestRate, setInterestRate] = useState("");
  const [installmentPeriod, setInstallmentPeriod] = useState("");

  // state สำหรับแสดงผลลัพธ์
  const [financeAmount, setFinanceAmount] = useState("0.00");
  const [totalInterest, setTotalInterest] = useState("0.00");
  const [monthlyPayment, setMonthlyPayment] = useState("0.00");

  // ฟังก์ชันคำนวณ
  const handleCarCalculateClick = () => {
    // Validate
    if (
      carPrice === "" ||
      downPercent === "" ||
      interestRate === "" ||
      installmentPeriod === ""
    ) {
      alert("กรุณาป้อนข้อมูลให้ครบถ้วน");
      return;
    }

    if (interestRate === "0") {
      alert("อัตราดอกเบี้ยต้องมากกว่า 0");
      return;
    }

    if (installmentPeriod === "0") {
      alert("จำนวนเดือนต้องมากกว่า 0");
      return;
    }

    const carPriceValue = parseFloat(carPrice);
    const downPercentValue = parseFloat(downPercent);
    const interestRateValue = parseFloat(interestRate);
    const monthValue = parseInt(installmentPeriod);

    // แปลงเดือน → ปี สำหรับคิดดอกเบี้ย
    const yearValue = monthValue / 12;

    //  ยอดจัด
    const finance = carPriceValue - (carPriceValue * downPercentValue) / 100;

    // ดอกเบี้ยทั้งหมด
    const interest =
      ((finance * interestRateValue) / 100) * yearValue;

    // จำนวนงวด = จำนวนเดือน
    const totalInstallment = monthValue;

    // ค่างวดต่อเดือน
    const monthly = (finance + interest) / totalInstallment;

    setFinanceAmount(finance.toFixed(2));
    setTotalInterest(interest.toFixed(2));
    setMonthlyPayment(monthly.toFixed(2));
  };

  // ฟังก์ชันล้างข้อมูล
  const handleClearClick = () => {
    setCarPrice("");
    setDownPercent("");
    setInterestRate("");
    setInstallmentPeriod("");
    setFinanceAmount("0.00");
    setTotalInterest("0.00");
    setMonthlyPayment("0.00");
  };

  return (
    <>
      {/* ส่วนของการแสดง SauHeader */}
      <SauHeader />

      <div
        className="p-10 w-3/5 mx-auto mt-20 border border-gray-100 rounded-xl
                    flex flex-col justify-center items-center
                    shadow-xl"
      >
        {/* ส่วนแสดงรูปจาก Internet */}
        <Image
          src={car2}
          alt="Car"
          width={80}
          height={37}
          className="rounded-xl mb-10"
        />

        {/* ส่วนแสดงชื่อการคำนวณ */}
        <h1 className="text-xl text-center text-blue-600 font-bold">
          CAR Installment Calculator
          <br />
          โปรแกรมคำนวณ การผ่อนชำระรถ
        </h1>

        {/* ส่วนของการป้อนข้อมูล */}
        <div className="w-3/5 mt-5">
          <label htmlFor="carPrice">ราคารถ (บาท)</label>
          <input
            type="number"
            name="carPrice"
            id="carPrice"
            placeholder="500000"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            className="bg-amber-50 p-2 w-full mt-2 mb-3 rounded"
          />

          <label className="block mb-2">เงินดาวน์ (%)</label>

          <div className="flex gap-6 mb-3">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPercent"
                value="10"
                checked={downPercent === "10"}
                onChange={(e) => setDownPercent(e.target.value)}
              />
              10%
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPercent"
                value="20"
                checked={downPercent === "20"}
                onChange={(e) => setDownPercent(e.target.value)}
              />
              20%
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPercent"
                value="30"
                checked={downPercent === "30"}
                onChange={(e) => setDownPercent(e.target.value)}
              />
              30%
            </label>

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPercent"
                value="40"
                checked={downPercent === "40"}
                onChange={(e) => setDownPercent(e.target.value)}
              />
              40%
            </label>
          </div>
          <label htmlFor="interestRate">อัตราดอกเบี้ย (% ต่อปี)</label>
          <input
            type="number"
            name="interestRate"
            id="interestRate"
            placeholder="20"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="bg-amber-50 p-2 w-full mt-2 rounded"
          />

          <label htmlFor="installmentPeriod">ระยะเวลาผ่อนชำระ (เดือน)</label>
          <input
            type="number"
            id="installmentPeriod"
            placeholder="24"
            value={installmentPeriod}
            onChange={(e) => setInstallmentPeriod(e.target.value)}
            className="bg-amber-50 p-2 w-full mt-2 rounded"
          />

          <button
            onClick={handleCarCalculateClick}
            className="w-full bg-blue-500 hover:bg-blue-700
                          text-white font-bold p-2 mt-5 rounded"
          >
            คำนวณ Car Installment
          </button>
          <button
            onClick={handleClearClick}
            className="w-full bg-orange-500 hover:bg-orange-700
                          text-white font-bold p-2 mt-2 rounded"
          >
            ล้างข้อมูล
          </button>
        </div>

        {/* ส่วนของการแสดงผล Car Installment */}
        <div className="w-3/5 mt-5 bg-gray-300 p-5 rounded">
          <p className="text-lg text-center font-bold mb-1 text-gray-600">
            ยอดจัด: {financeAmount} บาท
          </p>
          <p className="text-lg text-center font-bold mb-1 text-gray-600">
            ดอกเบี้ยทั้งหมด: {totalInterest} บาท
          </p>
          <h2 className="text-3xl text-center font-bold mb-1 text-red-600">
            {monthlyPayment} บาท / เดือน
          </h2>
        </div>

        {/* ส่วนของการแสดง SauFooter */}
        <SauFooter />
      </div>
    </>
  );
}
