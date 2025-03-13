import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/assets/icons/github.svg";
import firebaseIcon from "@/assets/icons/firebase_icon.png";
import mailIcon from "@/assets/icons/mail.svg";
import cssIcon from "@/assets/icons/css_icon.png";
import flutterIcon from "@/assets/icons/flutter_icon.png";
import htmlIcon from "@/assets/icons/html_icon.png";
import jsIcon from "@/assets/icons/javascript_icon.png";
import nextIcon from "@/assets/icons/nextjs_icon.png";
import reactIcon from "@/assets/icons/react_icon.png";
import scssIcon from "@/assets/icons/sass_icon.png";
import tailwindIcon from "@/assets/icons/tailwind_icon.png";
import nodejsIcon from "@/assets/icons/nodejs_icon.png";
import dockerIcon from "@/assets/icons/docker_icon.png";

const techStackIcons = [
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: jsIcon, alt: "JavaScript" },
  { src: nodejsIcon, alt: "Node.js" },
  { src: flutterIcon, alt: "Flutter" },
  { src: reactIcon, alt: "React" },
  { src: nextIcon, alt: "Next.js" },
  { src: tailwindIcon, alt: "Tailwind CSS" },
  { src: scssIcon, alt: "Sass" },
  { src: dockerIcon, alt: "Docker" },
  { src: githubIcon, alt: "GitHub" },
  { src: firebaseIcon, alt: "Firebase" },
];

const socialLinks = [
  { href: "https://github.com/huypham0508", icon: githubIcon, label: "GitHub" },
  { href: "mailto:phammanhhhuy1107@gmail.com", icon: mailIcon, label: "Email" },
];

function DescComponent() {
  const renderTechStack = (
    <div>
      <span className="font-bold text-2xl">Tech stack |</span>
      <div className="flex flex-wrap mt-3 items-center justify-center md:justify-start gap-3">
        {techStackIcons.map(({ src, alt }) => (
          <Image
            key={alt}
            height={40}
            width={40}
            alt={`${alt} icon`}
            className="transform-animation"
            src={src}
          />
        ))}
      </div>
    </div>
  );

  const renderSocialLinks = (
    <div className="flex items-center gap-5 mb-3">
      {socialLinks.map(({ href, icon, label }) => (
        <Link
          key={label}
          target="_blank"
          href={href}
          aria-label={`My ${label}`}
        >
          <Image alt={label} src={icon} className="w-8" />
        </Link>
      ))}
    </div>
  );

  const downloadButton = (
    <Link
      className="cv-info mx-auto md:mx-0 block w-auto max-w-fit mt-5"
      href="/files/CV_Flutter_Developer_Pham_Manh_Huy_EN_Ver2.pdf"
      target="_blank"
      download="CV_Flutter_Developer_Pham_Manh_Huy_EN_Ver2.pdf"
    >
      Download my CV
    </Link>
  );

  return (
    <div>
      <h1 className="text-5xl font-bold md:mt-32 sm:mt-20 mb-2">
        Software Developer
      </h1>
      <p className="mb-5 text-gray-500 max-w-full md:max-w-[30vw]">
        Hi, I&apos;m Pham Manh Huy. A passionate Software Developer based in
        HCM, Viet Nam. 🇻🇳 🌸
      </p>

      {renderSocialLinks}
      {renderTechStack}
      {downloadButton}
    </div>
  );
}

export default DescComponent;
