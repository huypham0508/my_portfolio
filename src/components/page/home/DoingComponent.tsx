import mobileIcon from "@/assets/icons/mobile_icon.svg";
import webIcon from "@/assets/icons/web_icon.svg";
import designIcon from "@/assets/icons/design_icon.svg";
import backendIcon from "@/assets/icons/backend_icon.svg";

const services = [
  {
    title: "Mobile Apps",
    text: "Professional development of applications for Android and iOS.",
    icon: mobileIcon,
  },
  {
    title: "Web Development",
    text: "High-quality development of sites at the professional level.",
    icon: webIcon,
  },
  {
    title: "UI/UX Design",
    text: "The most modern and high-quality design made at a professional level.",
    icon: designIcon,
  },
  {
    title: "Backend Development",
    text: "High-performance backend services designed for scalability and seamless user experience.",
    icon: backendIcon,
  },
];
function Doing() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {services.map((service, index) => (
        <li
          key={index}
          className="flex items-center gap-4 p-6 bg-[#111] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src={service.icon.src}
              alt={`${service.title} icon`}
              className="w-10 h-10"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{service.title}</h4>
            <p className="text-gray-400">{service.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Doing;
