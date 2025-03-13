import Image from "next/image";
import Link from "next/link";

import githubIcon from "@/assets/icons/github.svg";
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
import LineAnimation from "@/components/animations/line";

function DescComponent() {
  return (
    <div className="">
      <h1 className="text-5xl font-bold md:mt-32 mt-20 mb-2">
        Software Developer
      </h1>
      <p className="mb-5 text-gray-500 max-w-full md:max-w-[30vw]">
        Hi, I&apos;m Pham Manh Huy. A passionate Software Developer based in
        HCM, Viet Nam. 🇻🇳 🌸 <br />
      </p>
      <div className="flex items-center gap-5 mb-3">
        <span>
          <Link target="_blank" href="https://github.com/huypham0508">
            <Image alt="my github" src={githubIcon} className="w-8" />
          </Link>
        </span>
        <span>
          <Link href="mailto:phammanhhhuy1107@gmail.com">
            <Image alt="my email" src={mailIcon} className="w-8" />
          </Link>
        </span>
      </div>
      <div>
        <span className="font-bold text-2xl">Tech stack |</span>
        <div className="flex flex-wrap mt-3 items-center justify-center md:justify-start gap-3">
          <Image
            height={40}
            width={40}
            alt="html icon 3D"
            className="transform-animation"
            src={htmlIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="css icon 3D"
            className="transform-animation"
            src={cssIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="js icon 3D"
            src={jsIcon.src}
            className="transform-animation"
          />
          <Image
            height={40}
            width={40}
            alt="nodejs icon 3D"
            className="transform-animation"
            src={nodejsIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="flutter icon 3D"
            className="transform-animation"
            src={flutterIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="reactIcon icon 3D"
            className="transform-animation"
            src={reactIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="nextjs icon 3D"
            className="transform-animation"
            src={nextIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="tailwind icon 3D"
            className="transform-animation"
            src={tailwindIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="sass icon 3D"
            className="transform-animation"
            src={scssIcon.src}
          />
          <Image
            height={40}
            width={40}
            alt="docker icon 3D"
            className="transform-animation"
            src={dockerIcon.src}
          />
        </div>
      </div>
    </div>
  );
}

export default DescComponent;
