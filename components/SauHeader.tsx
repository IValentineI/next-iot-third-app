//nf snippet
import Link from "next/link";

export function SauHeader() {
  return (
    <div className="bg-blue-600 text-center p-3">
            {/* ส่วนของ Link ที่จะเปิดไปยังหน้า Page ต่างๆ */}
            <Link href="/"
                  className="text-white hover:text-cyan-100 mx-3">
              Home 🏠
            </Link>
            |
              <Link href="/body/calbmi"
                    className="text-white hover:text-cyan-100 mx-3">
                BMI Calculator 📱
              </Link>
            |
              <Link href="/body/calbmr"
                    className="text-white hover:text-cyan-100 mx-3">
                BMR Calculator 🏋️
              </Link>
              |
              <Link href="/calcarinstallment"
                    className="text-white hover:text-cyan-100 mx-3">
                Car Installment 🚘
              </Link>
            </div>
  );
}
