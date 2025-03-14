import Image from "next/image";
import fakeAvatar from "../../../assets/image/fake_avatar.png";
import ButtonCV from "./ButtonCVComponent";
import DescComponent from "./DescComponent";

function IntroComponent() {
  return (
    <section className="intro flex-col-reverse md:flex-row mx-auto mb-60 flex justify-center items-center max-w-[70vw]">
      <DescComponent />
      <div className="flex-col justify-center items-center">
        <div className="intro-avatar">
          <Image
            className="!w-full !h-auto"
            width="0"
            height="0"
            src={fakeAvatar.src}
            alt="Avatar"
          />
        </div>
        <ButtonCV className="hidden md:block" />
      </div>
    </section>
  );
}

export default IntroComponent;
