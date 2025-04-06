// Import komponen yang dibutuhkan dari react-router-dom untuk mengatur navigasi halaman
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import komponen-komponen utama yang akan digunakan dalam aplikasi
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReviewList from "./pages/ReviewList";
import ReviewDetail from "./pages/ReviewDetail";
import GameDetail from "./pages/GameDetail";

// Komponen utama App yang akan dirender di index.js
const App = () => {
  return (
    // Router membungkus seluruh aplikasi agar bisa menggunakan sistem routing/navigasi
    <Router>
      {/* Container utama aplikasi, pakai warna latar belakang abu gelap dan tinggi minimum satu layar penuh */}
      <div className="bg-gray-900 min-h-screen">
        
        {/* Navbar akan selalu tampil di bagian atas setiap halaman */}
        <Navbar />

        {/* Routes berisi semua jalur (URL path) yang bisa diakses dalam aplikasi */}
        <Routes>
          {/* Halaman utama (beranda), muncul saat akses ke "/" */}
          <Route path="/" element={<Home />} />
          
          {/* Halaman daftar review game */}
          <Route path="/reviews" element={<ReviewList />} />
          
          {/* Halaman detail untuk satu review, dengan :id sebagai parameter URL */}
          <Route path="/review/:id" element={<ReviewDetail />} />
          
          {/* Halaman detail untuk satu game, juga menggunakan parameter :id */}
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

// Mengekspor komponen App agar bisa digunakan di file lain (biasanya di index.js)
export default App;