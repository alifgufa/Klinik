import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DataPasien = () => {
  const pasienData = [
    {
      no: 1,
      id: "P001",
      nomor: "123456",
      jenisKelamin: "Laki-laki",
      nik: "1234567890123456",
      namaPasien: "Alip Gufa Oktovian",
      tempatLahir: "Jakarta",
      tanggalLahir: "1990-01-01",
      usia: 34,
      noHp: "08123456789",
      alamat: "Jl. Merdeka No. 1, Jakarta",
      namaIbu: "Siti Aminah",
      pendaftaran: "2024-01-01",
    },
    {
      no: 2,
      id: "P002",
      nomor: "234567",
      jenisKelamin: "Perempuan",
      nik: "2345678901234567",
      namaPasien: "Labib Ardiansyah",
      tempatLahir: "Bandung",
      tanggalLahir: "1992-02-02",
      usia: 32,
      noHp: "08223456789",
      alamat: "Jl. Sudirman No. 2, Bandung",
      namaIbu: "Ayu Lestari",
      pendaftaran: "2024-02-02",
    },
    {
      no: 3,
      id: "P001",
      nomor: "123456",
      jenisKelamin: "Laki-laki",
      nik: "1234567890123456",
      namaPasien: "Alip Gufa Oktovian",
      tempatLahir: "Jakarta",
      tanggalLahir: "1990-01-01",
      usia: 34,
      noHp: "08123456789",
      alamat: "Jl. Merdeka No. 1, Jakarta",
      namaIbu: "Siti Aminah",
      pendaftaran: "2024-01-01",
    },
    {
      no: 4,
      id: "P001",
      nomor: "123456",
      jenisKelamin: "Laki-laki",
      nik: "1234567890123456",
      namaPasien: "Alip Gufa Oktovian",
      tempatLahir: "Jakarta",
      tanggalLahir: "1990-01-01",
      usia: 34,
      noHp: "08123456789",
      alamat: "Jl. Merdeka No. 1, Jakarta",
      namaIbu: "Siti Aminah",
      pendaftaran: "2024-01-01",
    },
    {
      no: 5,
      id: "P001",
      nomor: "123456",
      jenisKelamin: "Laki-laki",
      nik: "1234567890123456",
      namaPasien: "Alip Gufa Oktovian",
      tempatLahir: "Jakarta",
      tanggalLahir: "1990-01-01",
      usia: 34,
      noHp: "08123456789",
      alamat: "Jl. Merdeka No. 1, Jakarta",
      namaIbu: "Siti Aminah",
      pendaftaran: "2024-01-01",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-min mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Data Pasien
          </h1>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 border-b">No</th>
                <th className="py-3 px-4 border-b">ID Pasien</th>
                <th className="py-3 px-4 border-b">Nomor</th>
                <th className="py-3 px-4 border-b">Jenis Kelamin</th>
                <th className="py-3 px-4 border-b">NIK</th>
                <th className="py-3 px-4 border-b">Nama Pasien</th>
                <th className="py-3 px-4 border-b">Tempat Lahir</th>
                <th className="py-3 px-4 border-b">Tanggal Lahir</th>
                <th className="py-3 px-4 border-b">Usia</th>
                <th className="py-3 px-4 border-b">No HP</th>
                <th className="py-3 px-4 border-b">Alamat</th>
                <th className="py-3 px-4 border-b">Nama Ibu</th>
                <th className="py-3 px-4 border-b">Pendaftaran</th>
                <th className="py-3 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {pasienData.map((pasien, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4 border">{pasien.no}</td>
                  <td className="py-2 px-4 border">{pasien.id}</td>
                  <td className="py-2 px-4 border">{pasien.nomor}</td>
                  <td className="py-2 px-4 border">{pasien.jenisKelamin}</td>
                  <td className="py-2 px-4 border">{pasien.nik}</td>
                  <td className="py-2 px-4 border">{pasien.namaPasien}</td>
                  <td className="py-2 px-4 border">{pasien.tempatLahir}</td>
                  <td className="py-2 px-4 border">{pasien.tanggalLahir}</td>
                  <td className="py-2 px-4 border">{pasien.usia}</td>
                  <td className="py-2 px-4 border">{pasien.noHp}</td>
                  <td className="py-2 px-4 border">{pasien.alamat}</td>
                  <td className="py-2 px-4 border">{pasien.namaIbu}</td>
                  <td className="py-2 px-4 border">{pasien.pendaftaran}</td>
                  <td className="py-2 px-4 border">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition duration-200">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataPasien;
