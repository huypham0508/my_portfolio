import Doing from "./DoingComponent";

function AboutComponent() {
  return (
    <section className="bg-white/30 max-w-[95vw] md:max-w-[70vw] text-black p-7 rounded-xl shadow-lg shadow-black/40 transition-opacity duration-300 mx-auto mb-60 flex justify-center items-center">
      <div>
        <h2 className="text-5xl font-bold mb-2 flip-animation">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>m</span>
          <span>e</span>
        </h2>
        <p className="text-gray-500 max-w-full mb-7">
          Flutter Developer with over 2 years of hands-on experience in
          cross-platform development, performance optimization, and scalable
          architecture. Strong problem-solving skills with expertise in both
          mobile and backend integration.
          <br />
          <span className="font-bold">
            🌱 I&#39;m currently working on a chat app
          </span>
          <br />
          <span className="font-bold">
            💞️ I&#39;m looking to collaborate on anywhere
          </span>
        </p>
        <h3 className="text-3xl font-bold mb-4">What I&#39;m doing</h3>
        <Doing />
      </div>
    </section>
  );
}

export default AboutComponent;
