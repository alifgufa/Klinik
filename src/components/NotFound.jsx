import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          size="6x"
          className="text-yellow-500 animate-bounce mb-4"
        />
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">404</h1>
        <p className="text-xl mb-4 text-center animate-fade-in">
          Halaman yang Anda cari mungkin telah dihapus, ada namanya diubah, atau
          untuk sementara tidak tersedia.
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:underline text-lg animate-fade-in"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
