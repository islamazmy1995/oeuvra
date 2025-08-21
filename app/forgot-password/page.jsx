'use client'

import Link from "next/link"

export default function ForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">نسيت كلمة المرور؟</h1>
        <p className="text-gray-600 mb-6">
          من فضلك تواصل مع خدمة العملاء لاسترجاع حسابك.
        </p>

        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          الرجوع إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  )
}
