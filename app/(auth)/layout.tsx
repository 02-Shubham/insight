// import Image from "next/image";
// import React from "react";

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="w-1/2 h-full flex items-center justify-center">
//         {children}
//       </div>
//       <div className="hidden md:flex w-1/2 h-full relative">
//         <Image
//           src="/onboarding-img.png"
//           width={1000}
//           height={1000}
//           alt="Doctors"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-0 w-full h-full bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center">
//           <h1 className="text-3xl 2xl:text-5xl font-bold text-white">
//             InsightCare
//           </h1>
//           <p className="text-blue-500 text-base">You're welcome</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
import {ClipboardPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="relative flex flex-col">
        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center px-4">
            <Link href="/" className="flex items-center gap-2">
              <ClipboardPlus className="h-6 w-6 text-rose-600" />
              <span className="text-xl font-bold">InsightCare</span>
            </Link>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex flex-1 items-center justify-center px-4 py-24">{children}</div>

        {/* Footer */}
        <div className="border-t bg-white/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between px-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} InsightCare</p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden md:block">
        {/* Background Image */}
        <Image
          src="/onboarding-img.png"
          alt="Healthcare Professionals"
          className="h-full w-full object-cover"
          width={1000}
          height={1000}
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30">
          <div className="flex h-full flex-col items-center justify-center p-8">
            <div className="relative space-y-4 text-center">
              {/* Decorative Element */}
              <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-rose-600/20 blur-2xl" />

              {/* Logo */}
              <ClipboardPlus className="mx-auto h-12 w-12 text-rose-500" />

              {/* Text */}
              <h1 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                InsightCare
              </h1>
              <p className="relative text-lg text-rose-200">Your Health, Our Priority</p>

              {/* Feature List */}
              <div className="relative mt-8 space-y-4 text-left text-sm text-white/80">
                <p className="flex items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-rose-400" />
                  <span>AI-Powered Healthcare Management</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-rose-400" />
                  <span>Secure Patient Records</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-rose-400" />
                  <span>Seamless Appointment Scheduling</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>
    </div>
  )
}

export default AuthLayout



