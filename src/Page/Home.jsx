import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white" id="home">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Sasikumar AKachcheliyan</h1>
        <p className="text-xl mb-6">Frontend Developer | UI/UX Enthusiast</p>
        <a
          href="#projects"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-100 transition"
        >
          View Projects
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="src/Page/images.png"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
