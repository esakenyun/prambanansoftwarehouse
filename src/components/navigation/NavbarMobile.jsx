import { motion } from "framer-motion";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export default function NavbarMobile({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : "100%",
      }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 md:hidden">
      <div className="bg-primary-400 w-full h-full px-[5%] py-5 text-white">
        <div className="flex justify-between items-center">
          <div className="w-16 logo px-3 cursor-pointer p-2">
            <Image src="/logo/logo.png" className="w-auto h-auto shadow-lg" alt="Logo Prambanan" width={100} height={100} priority />
          </div>
          <button onClick={onClose}>
            <RxCross2 className="text-4xl" />
          </button>
        </div>

        {/* Parent motion.div for the nav menu items */}
        <motion.nav
          className="flex flex-col gap-14 p-3 py-[23%]"
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}>
          {/* Each motion.ul is now animated individually */}
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}>
            <li className="text-4xl">Home</li>
          </motion.ul>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}>
            <li className="text-4xl">Services</li>
          </motion.ul>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}>
            <li className="text-4xl">About Us</li>
          </motion.ul>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}>
            <li className="text-4xl">Contact</li>
          </motion.ul>
        </motion.nav>

        {/* Bottom text */}
        <div className="fixed bottom-7 left-0 right-0 flex justify-center items-center">
          <div className="text-xl font-bold italic">Prambanan Software House</div>
        </div>
      </div>
    </motion.div>
  );
}
