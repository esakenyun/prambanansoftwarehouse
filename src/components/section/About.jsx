import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

export default function AboutSection() {
  return (
    <div className=" bg-primary-200" id="about">
      <div className="px-[5%] md:px-[3%] lg:px-[8%] py-[7%]">
        <div className="grid md:grid-cols-2 gap-6 md:gap-[6%]">
          {/* Teks */}
          <div className="order-2 md:order-1">
            <h1 className="font-bold uppercase text-primary-950 text-3xl italic">About Us</h1>
            <p className="text-white pt-2">
              Prambanan Software House is a software development company dedicated to bringing your vision to life with precision price. We offer a pay-as-you-go model, allowing you to invest only in the features you need, saving time and
              resources by avoiding unnecessary development.
            </p>
            <div className="pt-3 text-primary-500 flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <HiOutlineMail className="text-3xl" />
                <p>prambanansoftware@gmail.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <HiPhone className="text-3xl" />
                <p>(+62)-812-2177-9294 (Fauzan)</p>
              </div>
            </div>
          </div>

          {/* Gambar */}
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src={"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt="About Us"
              className="rounded-3xl object-cover w-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
