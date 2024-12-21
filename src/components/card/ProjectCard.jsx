import Image from "next/image";

export default function ProjectCard({ company, name, imageUrl }) {
  return (
    <div className="border border-gray-300 rounded-2xl flex flex-col h-full">
      <div className="flex flex-col h-full py-[3%] px-[3%]">
        <Image src={imageUrl} className="rounded-2xl w-full h-auto object-cover" width={500} height={500} alt={company} priority />
        <div className="px-[2%] flex flex-col justify-between flex-grow">
          <h4 className="text-primary-400 pt-[6%] pb-[1%]">{company}</h4>

          <h1 className="font-semibold text-2xl py-[5%] leading-tight flex-grow">{name}</h1>

          {/* <div className="py-[10%]">
            <button className="py-2 px-6 border text-primary-400 border-primary-400 rounded-full hover:text-primary-50 hover:bg-primary-600 hover:border-primary-800 transition-all duration-500 ease-in-out">See More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
