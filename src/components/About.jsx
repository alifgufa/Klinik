import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
            Tentang Klinik
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Selamat datang di Klinik, tempat di mana kami berdedikasi untuk
            memberikan pelayanan kesehatan terbaik bagi Anda dan keluarga.
            Dengan tim profesional medis yang berpengalaman dan fasilitas yang
            lengkap, kami berkomitmen untuk menjaga kesehatan Anda dengan penuh
            kasih sayang dan perhatian.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
