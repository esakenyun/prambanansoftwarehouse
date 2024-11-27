import ProductSlider from "./ProductSlider";

export default function OurProductSection() {
  return (
    <div className="px-[5%] md:px-[3%] lg:px-[8%] py-[7%]">
      <p className="text-right text-2xl text-primary-600 font-medium">Our Product</p>
      <div className="flex justify-center w-full pt-[3%]">
        {/* <div
          className="relative w-full max-w-5xl md:p-8 p-4 bg-cover bg-center md:rounded-3xl shadow-lg"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div> */}
        <ProductSlider />
      </div>
    </div>
  );
}
