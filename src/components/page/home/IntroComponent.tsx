import Link from "next/link";
import fakeAvatar from "../../../assets/image/fake_avatar.png";
import DescComponent from "./DescComponent";

function IntroComponent() {
  return (
    <section className="intro flex-col-reverse md:flex-row mx-auto mb-60 flex justify-center items-center max-w-[70%]">
      <DescComponent />
      <div className="intro-avatar ml-5">
        <img className="w-full" src={fakeAvatar.src} alt="" />
        <button type="button" className="popup-info">
          <Link
            href="../../../assets/files/CV_Flutter_Developer_Pham_Manh_Huy_EN_Ver2.pdf"
            target="_blank"
            download
          >
            Download my CV
          </Link>
        </button>
      </div>
    </section>
  );
}

export default IntroComponent;
