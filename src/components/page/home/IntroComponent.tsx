import fakeAvatar from "../../../assets/image/fake_avatar.png";

import DescComponent from "./DescComponent";

function IntroComponent() {
  return (
    <section className="intro mx-auto mb-60 flex justify-center items-center max-w-[70%]">
      <DescComponent />
      <div className="intro-avatar ml-5">
        <img className="w-full" src={fakeAvatar.src} alt="" />
      </div>
    </section>
  );
}

export default IntroComponent;
