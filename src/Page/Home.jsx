import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgberanda from "../../public/Image/bgberanda.jpg";
import Card from "../Layout/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen bg-white flex items-center justify-center text-center text-white">
        < Card />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgberanda})`,
            filter: "blur(4px)",
          }}
        >
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight mb-4">
            Selamat Datang di Web Klinik
          </h1>
          <p className="text-lg md:text-xl mb-6 ">
            Temukan berbagai layanan kesehatan terbaik untuk Anda dan keluarga
            di klinik kami.
          </p>
          <a
            href="/About"
            className="inline-block bg-green-100 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-2xl hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
