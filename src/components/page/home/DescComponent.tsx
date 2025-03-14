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
import graphqlIcon from "@/assets/icons/graphql_icon.png";
import redisIcon from "@/assets/icons/redis_icon.png";
import mongoDBIcon from "@/assets/icons/mongodb_icon.png";
import sqlIcon from "@/assets/icons/sql_icon.png";
import ButtonCV from "./ButtonCVComponent";

const techStackIcons = [
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: jsIcon, alt: "JavaScript" },
  { src: reactIcon, alt: "React" },
  { src: nodejsIcon, alt: "Node.js" },
  { src: nextIcon, alt: "Next.js" },
  { src: tailwindIcon, alt: "Tailwind CSS" },
  { src: scssIcon, alt: "Sass" },
  { src: flutterIcon, alt: "Flutter" },
  { src: githubIcon, alt: "GitHub" },
  { src: mongoDBIcon, alt: "MongoDB" },
  { src: dockerIcon, alt: "Docker" },
  { src: graphqlIcon, alt: "Graphql" },
  { src: redisIcon, alt: "Redis" },
  { src: sqlIcon, alt: "SQL" },
  { src: firebaseIcon, alt: "Firebase" },
];

const socialLinks = [
  { href: "https://github.com/huypham0508", icon: githubIcon, label: "GitHub" },
  { href: "mailto:phammanhhhuy1107@gmail.com", icon: mailIcon, label: "Email" },
];

function DescComponent() {
  const renderTechStack = (
    <div className="md:max-w-[25vw]">
      <span className="font-bold text-2xl">Tech stack |</span>
      <div className="flex transform-animation flex-wrap mt-3 items-center justify-center md:justify-start gap-3">
        {techStackIcons.map(({ src, alt }) => (
          <Image
            key={alt}
            height={40}
            width={40}
            alt={`${alt} icon`}
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

  return (
    <div>
      <h1 className="text-5xl inline-block font-bold md:mt-32 sm:mt-20 mb-2">
        Software Developer
      </h1>
      <p className="mb-5 text-gray-500  ">
        Hi, I&apos;m Pham Manh Huy. A passionate Software Developer <br /> based
        in HCM, Viet Nam. 🇻🇳 🌸
      </p>

      {renderSocialLinks}
      {renderTechStack}
      <ButtonCV className="block md:hidden" />
    </div>
  );
}

export default DescComponent;
