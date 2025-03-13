import Header from "@/components/header";
import AboutComponent from "@/components/page/home/AboutComponent";
import IntroComponent from "@/components/page/home/IntroComponent";

export default function HomeView() {
  return (
    <>
      <Header />
      <IntroComponent />
      <AboutComponent />
    </>
  );
}
