// import { Button } from "@/components/ui/button";
// import { getRole } from "@/utils/roles";
// import { auth } from "@clerk/nextjs/server";
// import Link from "next/link";
// import { redirect } from "next/navigation";

// export default async function Home() {
//   const { userId } = await auth();
//   const role = await getRole();

//   if (userId && role) {
//     redirect(`/${role}`);
//   }

//   return (
//     <div className="flex flex-col items-center justify-center h-screen p-6">
//       <div className="flex-1 flex flex-col items-center justify-center">
//         <div className="mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-center">
//             Welcome to <br />
//             <span className="text-blue-700 text-5xl md:text-6xl">
//               InsightCare
//             </span>
//           </h1>
//         </div>

//         <div className="text-center max-w-xl flex flex-col items-center justify-center">
//           <p className="mb-8">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime
//             quae numquam possimus dolor. Illum, ipsam laudantium. Reprehenderit
//           </p>

//           <div className="flex gap-4">
//             {userId ? (
//               <>
//                 <Link href={`/${role}`}>
//                   <Button>View Dashboard</Button>
//                 </Link>
//                 {/* <UserButton /> */}
//               </>
//             ) : (
//               <>
//                 <Link href="/sign-up">
//                   <Button className="md:text-base font-light">
//                     New Patient
//                   </Button>
//                 </Link>

//                 <Link href="/sign-in">
//                   <Button
//                     variant="outline"
//                     className="md:text-base underline hover:text-nlue-600"
//                   >
//                     Login to account
//                   </Button>
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//       <footer className="mt-8">
//         <p className="text-center text-sm">
//           &copy; 2025 Insight Hospital Management System. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }
import { ArrowRight, ClipboardPlus, Shield, Stethoscope, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getRole } from "@/utils/roles"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function Home() {
  const { userId } = await auth()
  const role = await getRole()

  if (userId && role) {
    redirect(`/${role}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#2892D7]" />
            <span className="text-[#2892D7] text-xl font-extrabold text-gray-900">InsightCare</span>
          </div>
          {userId ? (
            <Link href={`/${role}`}>
              <Button>View Dashboard</Button>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <Button variant="ghost" className="hover:text-[#2892D7]">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-[#2892D7] text-white hover:bg-[#2892D7]">Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center px-6 py-24 text-center lg:flex-row lg:text-left">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Your Health, Our Priority at <span className="text-[#2892D7]">InsightCare</span>
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Experience AI-powered healthcare with seamless appointments, instant insights, and personalized care.
            </p>
            {!userId && (
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-[#2892D7] text-white hover:bg-gray-900">
                    Register as Patient <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100">
                    Login to Account
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Image
              src="/onboarding-img.png"
              alt="Medical Illustration"
              width={550}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900">Why Choose InsightCare?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Experience the future of healthcare with AI-driven features designed for your convenience.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[{ icon: Stethoscope, title: "AI Diagnostics", desc: "Get instant health assessments powered by AI." },
              { icon: Users, title: "Easy Appointments", desc: "Schedule & manage appointments with ease." },
              { icon: Shield, title: "Secure Records", desc: "Your medical data is safe & always accessible." }
            ].map(({ icon: Icon, title, desc }, index) => (
              <Card key={index} className="p-6 shadow-md hover:shadow-lg transition">
                <CardHeader>
                  <Icon className="h-10 w-10 text-[#2892D7]" />
                  <CardTitle className="text-lg font-bold text-gray-900">{title}</CardTitle>
                  <CardDescription className="text-gray-600">{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-6 py-20">
          <div className="relative bg-[#2892D7] px-8 py-20 text-white rounded-lg shadow-xl text-center">
            <h2 className="text-4xl font-bold">Ready to Take Control of Your Health?</h2>
            <p className="mt-4 max-w-xl mx-auto text-white/80">
              Join thousands who trust InsightCare for their healthcare needs.
            </p>
            {!userId && (
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/sign-up">
                  <Button className="bg-white text-[#2892D7] hover:bg-gray-100">
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
                    Learn More
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-6 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} InsightCare. All rights reserved.</p>
      </footer>
    </div>
  )
}



