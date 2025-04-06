// Mengimpor komponen Link dari react-router-dom
// Link digunakan untuk navigasi antar halaman tanpa me-refresh halaman (Single Page Application)
import { Link } from "react-router-dom";

// Komponen Navbar sebagai navigasi utama yang muncul di atas halaman
const Navbar = () => {
  return (
    // Elemen <nav> sebagai pembungkus navigasi
    // Kelas Tailwind digunakan untuk styling: latar belakang abu gelap, padding, teks putih, dan susunan flex horizontal
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      
      {/* Judul di kiri navbar dengan teks tebal dan ukuran besar */}
      <span className="font-bold text-lg">Game Review</span>

      {/* Container untuk tombol-tombol navigasi, dengan jarak antar tombol */}
      <div className="flex space-x-4">
        
        {/* Menggunakan Link agar navigasi tidak reload halaman */}
        <Link to="/">
          {/* Tombol "Home" dengan warna biru, efek hover, padding, dan sudut yang membulat */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Home
          </button>
        </Link>

      </div>
    </nav>
  );
};

// Mengekspor komponen Navbar agar bisa digunakan di file lain
export default Navbar;