import { MdOutlineWhatsapp } from "react-icons/md";

export default function ContactBottom() {
  return (
    <div className="fixed bottom-4 right-4">
      <a href="https://wa.me/6281221779294" target="_blank">
        <div className="bg-primary-100 rounded-full p-4 text-primary-400 z-50">
          <MdOutlineWhatsapp className="text-4xl font-bold" />
        </div>
      </a>
    </div>
  );
}
