import { MedicalHistoryContainer } from "@/components/medical-history-container";
import { PatientRatingContainer } from "@/components/patient-rating-container";
import { ProfileImage } from "@/components/profile-image";
import { Card } from "@/components/ui/card";
import { getPatientFullDataById } from "@/utils/services/patient";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

interface ParamsProps {
  params: Promise<{ patientId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PatientProfile = async (props: ParamsProps) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  let id = params.patientId;
  let patientId = params.patientId;
  const cat = searchParams?.cat || "medical-history";

  if (patientId === "self") {
    const { userId } = await auth();
    id = userId!;
  } else id = patientId;

  const { data } = await getPatientFullDataById(id);

  const SmallCard = ({ label, value }: { label: string; value: string }) => (
    <div className="w-full md:w-1/3">
      <span className="text-sm text-gray-500">{label}</span>
      <p className="text-sm capitalize md:text-base">{value}</p>
    </div>
  );

  return (
    <div className="flex flex-col h-full gap-6 px-3 py-6 bg-gray-100/60 rounded-xl 2xl:p-6 lg:flex-row">
      <div className="w-full xl:w-3/4">
        <div className="flex flex-col w-full gap-4 lg:flex-row">
          <Card className="bg-white rounded-xl p-4 w-full lg:w-[30%] border-none flex flex-col items-center">
            <ProfileImage
              url={data?.img!}
              name={data?.first_name + " " + data?.last_name}
              className="w-20 h-20 md:flex"
              bgColor={data?.colorCode!}
              textClassName="text-3xl"
            />
            <h1 className="mt-2 text-2xl font-semibold">
              {data?.first_name + " " + data?.last_name}
            </h1>
            <span className="text-sm text-gray-500">{data?.email}</span>

            <div className="flex items-center justify-center w-full gap-2 mt-4">
              <div className="w-1/2 space-y-1 text-center">
                <p className="text-xl font-medium">{data?.totalAppointments}</p>
                <span className="text-xs text-gray-500">Appointments</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white rounded-xl p-6 w-full lg:w-[70%] border-none space-y-6">
            <div className="flex flex-col md:flex-row md:flex-wrap md:items-center xl:justify-between gap-y-4 md:gap-x-0">
              <SmallCard
                label={"Gender"}
                value={data?.gender?.toLowerCase()!}
              />
              <SmallCard
                label="Date of Birth"
                value={format(data?.date_of_birth!, "dd-mm-yyyy")}
              />
              <SmallCard label={"Phone Number"} value={data?.phone!} />
            </div>

            <div className="">
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-center xl:justify-between gap-y-4 md:gap-x-0">
                <div className="bg-blue-200 p-2 w-32 rounded">
                  <SmallCard label="Blood Group" value={data?.blood_group!} />
                </div>
                <div className="bg-green-200 p-2 w-32 rounded">
                  <SmallCard label="Oxygen Saturation" value="97%" />
                </div>
                <div className="bg-yellow-200 p-2 w-32 rounded">
                  <SmallCard label="Respiratory Rate" value="24bpm" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-center pt-2 xl:justify-between gap-y-4 md:gap-x-0">
                <div className="bg-blue-200 p-2 w-32 rounded">
                  <SmallCard label="Heart Rate" value="71bpm" />
                </div>
                <div className="bg-green-200 p-2 w-32 rounded">
                  <SmallCard label="Blood Pressure" value="120/80" />
                </div>
                <div className="bg-yellow-200 p-2 w-32 rounded">
                <SmallCard label="Body Temperature" value="98.6°F" />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap md:items-center xl:justify-between gap-y-4 md:gap-x-0">
              <SmallCard
                label="Contact Person"
                value={data?.emergency_contact_name!}
              />
              <SmallCard
                label="Emergency Contact"
                value={data?.emergency_contact_number!}
              />
              <SmallCard
                label="Last Visit"
                value={
                  data?.lastVisit
                    ? format(data?.lastVisit!, "yyyy-MM-dd")
                    : "No last visit"
                }
              />
            </div>
          </Card>
        </div>

        <div className="mt-10">
          {cat === "medical-history" && (
            <MedicalHistoryContainer patientId={id} />
          )}

          {/* {cat === "payments" && <Payments patientId={id!} />} */}
        </div>
      </div>

      <div className="w-full xl:w-1/3">
        <div className="p-4 mb-8 bg-white rounded-md">
          <h1 className="text-xl font-semibold">Quick Links</h1>

          <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-yellow-50 hover:underline"
              href={`/record/appointments?id=${id}`}
            >
              Patient&apos;s Appointments
            </Link>
            <Link
              className="p-3 rounded-md bg-purple-50 hover:underline"
              href="?cat=medical-history"
            >
              Medical Records
            </Link>
            <Link
              className="p-3 rounded-md bg-violet-100"
              href={`?cat=payments`}
            >
              Medical Bills
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={`/`}>
              Dashboard
            </Link>

            <Link className="p-3 rounded-md bg-rose-100" href={`#`}>
              Lab Test & Result
            </Link>
            {patientId === "self" && (
              <Link
                className="p-3 rounded-md bg-black/10"
                href={`/patient/registration`}
              >
                Edit Information
              </Link>
            )}
          </div>
        </div>

        <PatientRatingContainer id={id!} />
      </div>
    </div>
  );
};

export default PatientProfile;
