export default function Home() {
  return (
    <main className="">
      <video className="w-full h-screen object-cover" autoPlay loop muted playsInline>
        <source src={"/video_hero.mp4"} />
      </video>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center md:gap-[10%] lg:gap-[25%]">
        <div className="">
          <div className="flex flex-col md:flex-row gap-20 lg:gap-40 pt-3">
            <div>
              <button className="font-semibold uppercase py-1 px-6 md:px-5 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">Works</button>
            </div>
            <div>
              <button className="font-semibold uppercase py-1 px-5 md:px-5 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">Contact</button>
            </div>
            <div>
              <button className="font-semibold uppercase py-1 px-8 md:px-5 text-white border-2 border-white hover:bg-white hover:text-primary-black text-sm">About</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
