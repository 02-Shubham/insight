// import Image from "next/image";
// import React from "react";

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex items-center justify-center w-full h-screen">
//       <div className="flex items-center justify-center w-1/2 h-full">
//         {children}
//       </div>
//       <div className="relative hidden w-1/2 h-full md:flex">
//         <Image
//           src="/onboarding-img.png"
//           width={1000}
//           height={1000}
//           alt="Doctors"
//           className="object-cover w-full h-full"
//         />
//         <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-40">
//           <h1 className="text-3xl font-bold text-white 2xl:text-5xl">
//             InsightCare
//           </h1>
//           <p className="text-base text-blue-500">You're welcome</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
import { ClipboardPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Heart } from "lucide-react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="relative flex flex-col">
        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container flex items-center h-16 px-4">
            <Link href="/" className="flex items-center gap-2">
              <ClipboardPlus className="h-6 w-6 text-[#2892D7]" />
              <span className="text-[#2892D7] text-xl font-bold">InsightCare</span>
            </Link>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex items-center justify-center flex-1 px-4 py-24">{children}</div>

        {/* Footer */}
        <div className="border-t bg-white/80 backdrop-blur-sm">
          <div className="container flex items-center justify-between h-16 px-4">
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
          src="/doctorBG.jpg"
          alt="Healthcare Professionals"
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30">
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="relative space-y-4 text-center">
              <div className="absolute w-24 h-24 -translate-x-1/2 rounded-full -top-12 left-1/2 bg-rose-600/20 blur-2xl" />

              {/* Logo */}
              <ClipboardPlus className="mx-auto h-12 w-12 text-[#2892D7]" />

              <h1 className="relative text-6xl text-shadow-md font-bold text-shadow-md tracking-tight text-white sm:text-4xl md:text-5xl">
                InsightCare
              </h1>
              <p className="relative text-3xl text-shadow-md font-bold text-[#2892D7]">Your Health, Our Priority</p>

              <div className="relative mt-8 space-y-4 text-sm text-left text-white/80">
                <p className="flex text-xl items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-[#2892D7]" />
                  <span>AI-Powered Healthcare Management</span>
                </p>
                <p className="flex text-xl items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-[#2892D7]" />
                  <span>Secure Patient Records</span>
                </p>
                <p className="flex text-xl items-center space-x-2">
                  <span className="h-1 w-1 rounded-full bg-[#2892D7]" />
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