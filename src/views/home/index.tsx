"use client";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/header";
import IntroComponent from "@/components/page/home/IntroComponent";
import AboutComponent from "@/components/page/home/AboutComponent";
import ScrollButton from "@/components/button/ScrollButton";

export default function HomeView() {
  const components = [
    { name: "Intro", component: <IntroComponent /> },
    { name: "About", component: <AboutComponent /> },
  ];

  const sections = components.map(() => useRef<HTMLDivElement | null>(null));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let newIndex = 0;
      sections.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            newIndex = index;
          }
        }
      });
      setCurrentIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    sections[nextIndex].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      {components.map((item, index) => (
        <div key={item.name} ref={sections[index]}>
          {item.component}
        </div>
      ))}

      <ScrollButton
        onClick={scrollToNext}
        title={`Go to ${
          components[(currentIndex + 1) % components.length].name
        }`}
      />
    </>
  );
}
