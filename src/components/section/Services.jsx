import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <div className="px-[5%] md:px-[3%] lg:px-[8%] min-h-screen py-[6%]" id="services">
      <h1 className="text-xl text-center font-medium uppercase tracking-widest text-primary-600">Our Services</h1>
      <p className="py-[2%] mb-5 font-semibold text-center text-xl md:text-3xl">
        The One-Stop Solution to <br /> Empower Business Towards Success
      </p>

      <div className="flex flex-col gap-5">
        {/* Section 1 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-5 md:gap-[6%] items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <Image src={"/image/tes2.png"} className="md:w-2/5 h-auto" width={1000} height={1000} priority />
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold">Custom Software Development</h1>
            <p>
              CODE.ID specializes in custom software development, encompassing website and mobile application development. Our expertise extends to big data solutions and creating intuitive dashboards for comprehensive business insights.
            </p>
            <button>Learn More</button>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-5 md:gap-[6%] items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="flex flex-col gap-10 order-2 md:order-1">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold">Developer as a Service</h1>
            <p>
              Developer as a Service transforms the way you handle software development projects. By leveraging this innovative solution, you can tap into high-quality developers without the need for in-house recruitment and training,
              ensuring a seamless and efficient process.
            </p>
          </div>
          <Image src={"/image/tes.png"} className="md:w-2/5 order-1 md:order-2" width={1000} height={1000} priority />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-5 md:gap-[6%] items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <Image src={"/image/tes.png"} className="md:w-2/5" width={1000} height={1000} priority />
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold">Principal Product</h1>
            <p>
              Code.id takes pride in offering a diverse range of principal products meticulously crafted to align seamlessly with the unique and intricate requirements of companies, ensuring that each solution is not just a mere offering,
              but a bespoke tool designed to empower businesses in their journey towards success.
            </p>
            <button>Learn More</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
