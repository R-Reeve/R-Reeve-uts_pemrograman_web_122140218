const reviews = [
  {
    id: 1,
    title: "Final Fantasy PSP",
    game: "Final Fantasy PSP",
    image: "/images/FF_logo.webp",
    rating: 9.5,
    summary: "Final Fantasy PSP adalah remake dengan grafis dan musik yang ditingkatkan, tetapi gameplay dan cerita tetap sederhana seperti versi aslinya.",
    content: `
      <h3 class="font-heading text-xl font-bold text-white mb-2">Masih Klasik, Bukan Game Baru</h3>
      <p class="font-body mb-4">Final Fantasy PSP bukan pengalaman yang benar-benar baru, karena ini adalah remake dari game lama yang sudah berusia 20 tahun. Secara keseluruhan, game ini hampir sama dengan Dawn of Souls di Game Boy Advance, hanya dengan sedikit tambahan.</p>
      <img src="/images/FF1_graphicsevolution.jpg" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Cerita yang Simpel</h3>
      <p class="font-body mb-4">Kisahnya tentang empat pemuda yang ditakdirkan memulihkan cahaya kristal. Petualangan dimulai dengan menyelamatkan seorang putri dari Garland, ksatria yang berkhianat. Sayangnya, karakter utama terasa hambar karena tidak punya dialog, latar belakang, atau kepribadian, membuat ceritanya kurang menarik dibanding RPG modern.</p>
      <img src="/images/FFI_PSP_Crystals.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Gameplay Lama dengan Beberapa Perubahan</h3>
      <p class="mb-4">Sistem pertarungan tetap klasik, dengan enam pilihan kelas: Warrior, Thief, Monk, Red Mage, White Mage, dan Black Mage. Sekarang ada sistem MP, menggantikan batas sihir per level seperti di versi aslinya, membuat permainan lebih mudah. Meski begitu, pertarungannya masih terasa sederhana dan tidak banyak variasi.</p>
      <img src="/images/FF1_starterjob.png" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF1_advancedjob.png" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Tambahan Fitur</h3>
      <p class="font-body mb-4">Versi ini menghadirkan dungeon baru bernama Labyrinth of Time, yang menawarkan tantangan berbasis waktu. Pemain juga bisa menyimpan game hampir di mana saja, tapi tetap harus berhati-hati agar tidak terjebak dalam situasi sulit.</p>
      <img src="/images/FF1_LabyrinthOfTime.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Grafis dan Musik yang Lebih Baik</h3>
      <p class="font-body mb-4">Visualnya kini lebih hidup dengan kota yang lebih detail dan efek lingkungan seperti salju dan debu. Musik klasik Uematsu juga mendapat aransemen ulang, bahkan ada tambahan lagu dari seri Final Fantasy lainnya.</p>
      <img src="/images/FF1_town.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Kesimpulan</h3>
      <p class="font-body mb-4">Final Fantasy PSP adalah versi terbaik bagi yang belum pernah mencoba game ini. Tapi jika sudah memainkan Dawn of Souls, versi ini hanya menawarkan peningkatan grafis dan musik tanpa banyak hal baru.</p>
    `,
  },
  {
    id: 2,
    title: "Final Fantasy II",
    game: "Final Fantasy II",
    image: "/images/FF2_logo.jpg",
    rating: 6.8,
    summary: " Lebih Menarik, Tapi Tidak Lebih Baik.",
    content: `
      <p class="font-body mb-4">Final Fantasy II di PSP memperbaiki beberapa masalah dari game pertamanya. Waktu loading lebih cepat, tingkat kesulitan meningkat, dan ceritanya jauh lebih menarik. Musiknya juga lebih baik.</p>
      <p class="font-body mb-4">Kalau kamu fans berat Final Fantasy dan hanya butuh grafis serta cerita yang lebih bagus, game ini layak dicoba. Tapi kalau kamu lebih peduli dengan gameplay yang seru dan seimbang, FF2 bisa jadi mengecewakan.</p>
      
      <h3 class="text-xl font-bold text-white mb-2">Sistem Leveling yang Unik, Tapi Melelahkan</h3>
      <p class="font-body mb-4">FF2 meninggalkan sistem EXP klasik dan menggantinya dengan sistem keahlian mirip The Elder Scrolls—semakin sering digunakan, semakin kuat. Tapi ada sisi negatifnya: jika terlalu fokus pada satu keahlian, kemampuan lainnya melemah.</p>
      <p class="font-body mb-4">Masalahnya, sistem ini terlalu melelahkan. Untuk meningkatkan HP, pemain harus sengaja menerima banyak serangan. Selain itu, sihir jauh lebih kuat dibanding serangan fisik, jadi pilihan terbaik sudah jelas sejak awal.</p>
      <img src="/images/FF2_weaponlevel.png" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF2_magiclevelmaxed.png" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Cerita Kuat, Tapi Pertarungan Terlalu Sering</h3>
      <p class="mb-4">Walaupun gameplay-nya kurang seimbang, cerita dan produksi FF2 patut diapresiasi. Ada unsur drama dan emosi yang membuatnya lebih hidup. Sayangnya, frekuensi pertempuran terlalu tinggi, mirip game Shin Megami Tensei, yang justru membuat pengalaman bermain terasa repetitif.</p>
      <img src="/images/FF2_battle2.jpeg" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF2_battle1.jpg" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
    `,
  },

  {
    id: 3,
    title: "Final Fantasy IX",
    game: "Final Fantasy IX",
    image: "/images/FF9_logo.webp",
    rating: 8.8,
    summary: "Klasik yang Hidup Kembali.",
    content: `
      <p class="font-body mb-4">membawa kembali nuansa klasik seri FF dengan sentuhan teknologi PlayStation yang lebih modern. Game ini menjadi favorit para penggemar lama karena menghadirkan kembali elemen-elemen khas yang sempat hilang di beberapa seri sebelumnya. Dari segi visual dan eksekusi teknis, Square Enix benar-benar menunjukkan kehebatannya, menciptakan dunia fantasi yang begitu indah hingga rasanya kita bisa terus menatapnya tanpa bosan.</p>
      
      <h3 class="text-xl font-bold text-white mb-2">Grafis yang Memukau</h3>
      <p class="font-body mb-4">Setiap area dalam game ini seperti dunia baru yang penuh detail dan warna. Latar belakangnya merupakan gambar pra-render yang sangat indah, dipenuhi dengan efek pencahayaan, elemen interaktif, dan detail kecil yang membuat dunia ini terasa hidup. Efek sihir dan pertarungan juga terlihat luar biasa, dengan animasi karakter yang lebih halus dibanding game sebelumnya.</p>
      <img src="/images/FF9_town1.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF9_town2.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <p class="font-body mb-4">Cutscene dalam game ini juga luar biasa. Adegan-adegan penting diiringi dengan animasi yang membuat pemain terkesima. Tidak hanya itu, ekspresi wajah dan gestur karakter dibuat lebih ekspresif, sehingga emosi mereka lebih terasa, terutama dalam momen-momen dramatis.</p>
      <img src="/images/FF9_cutscene1.jpg" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF9_cutscene2.jpg" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Karakter yang Berkesan</h3>
      <p class="mb-4">menghadirkan karakter yang lebih unik dan beragam dibanding pendahulunya. Zidane Tribal, sang protagonis, bukanlah pahlawan murung seperti Cloud atau Squall, tetapi sosok pencuri yang ceria dan penuh rasa ingin tahu. Garnet, sang putri kerajaan, memiliki perkembangan karakter yang menarik, dari seorang gadis yang lemah hingga menjadi sosok yang lebih kuat. Steiner, sang ksatria, awalnya terlihat kaku dan konyol, tetapi seiring waktu, ia menjadi salah satu karakter dengan perkembangan terbaik.</p>
      <p class="mb-4">Salah satu karakter yang paling menyentuh adalah Vivi, seorang Black Mage mungil yang berjuang untuk memahami siapa dirinya. Kisahnya penuh dengan dilema eksistensial yang membuat banyak pemain terhubung secara emosional dengannya. Lalu ada Kuja, sang antagonis, yang menjadi salah satu musuh paling menarik dalam seri ini. Ia memiliki kombinasi kefanatikan Kefka dan karisma Sephiroth, membuatnya menjadi musuh yang benar-benar layak untuk dihadapi.</p>

      <h3 class="text-xl font-bold text-white mb-2">Musik yang Menyentuh Hati</h3>
      <p class="mb-4">Nobuo Uematsu kembali menghadirkan musik yang luar biasa. Soundtrack Final Fantasy IX memiliki nuansa klasik yang indah, dengan beberapa lagu yang sangat emosional. "Melodies of Life" menjadi salah satu lagu tema terbaik dalam sejarah Final Fantasy, menggambarkan perjalanan karakter dengan sempurna.</p>
      <p class="mb-4">Setiap area dalam game memiliki musik latar yang khas, dari melodi yang tenang di desa hingga nada dramatis di pertempuran. Musik di cutscene juga memainkan peran besar dalam membangun suasana, menambah kesan epik di setiap momen penting.</p>

      <h3 class="text-xl font-bold text-white mb-2">Kesimpulan</h3>
      <p class="mb-4">Final Fantasy IX adalah perpaduan sempurna antara keindahan grafis, cerita yang kuat, karakter yang berkesan, dan gameplay yang solid. Meskipun memiliki beberapa kelemahan seperti pertempuran acak yang terlalu sering, pesonanya tetap bertahan hingga sekarang. Game ini bukan hanya sekadar nostalgia bagi penggemar lama, tetapi juga pengalaman RPG klasik yang masih relevan untuk dinikmati oleh generasi baru.</p>
    `,
  },

  {
    id: 4,
    title: "Final Fantasy X",
    game: "Final Fantasy X",
    image: "/images/FF10_logo.webp",
    rating: 9.8,
    summary: "Titik Balik Seri Legendaris.",
    content: `
      <p class="font-body mb-4">Final Fantasy X adalah salah satu game paling penting dalam sejarah seri ini. Sebelum ini, setiap game Final Fantasy hadir dengan inovasi besar, tetapi FFX menandai perubahan besar dalam banyak aspek.</p>
      
      <h3 class="text-xl font-bold text-white mb-2">Perubahan Besar dalam Gameplay</h3>
      <p class="font-body mb-4">FFX memperkenalkan sistem pertarungan berbasis giliran murni tanpa Active Time Battle (ATB). Pemain bisa mengganti karakter di tengah pertarungan, membuat strategi lebih fleksibel dan tidak ada lagi karakter yang tertinggal levelnya. Sistem pengembangan karakter juga mengalami perubahan besar melalui Sphere Grid, memungkinkan pemain menyesuaikan kemampuan karakter dengan lebih bebas.</p>
      <img src="/images/FF10_SphereGrid.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FF10_jechtbattle.png" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Grafis dan Suara yang Revolusioner</h3>
      <p class="mb-4">FFX adalah game pertama dalam seri yang menghadirkan voice acting penuh, membawa pengalaman cerita ke level baru. Visualnya juga luar biasa, dengan dunia Spira yang penuh warna dan efek yang memukau.</p>

      <h3 class="text-xl font-bold text-white mb-2">Cerita yang Kuat dan Karakter yang Berkesan</h3>
      <p class="mb-4">Game ini menceritakan perjalanan Tidus, seorang atlet blitzball, yang terlempar ke dunia asing bernama Spira. Bersama Yuna dan timnya, ia menjalani petualangan epik dengan tema pengorbanan dan takdir. Karakter seperti Auron, Lulu, dan Wakka memiliki kepribadian kuat yang membuat cerita semakin hidup.</p>
      <img src="/images/FF10_story.avif" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">

      <h3 class="text-xl font-bold text-white mb-2">Musik yang Berbeda dari Sebelumnya</h3>
      <p class="mb-4">Selain Nobuo Uematsu, dua komposer baru ikut serta dalam proyek ini, menghasilkan soundtrack yang lebih variatif. Dari lagu orkestra hingga musik rock, FFX memiliki nuansa musik yang unik dibandingkan pendahulunya.</p>

      <h3 class="text-xl font-bold text-white mb-2">Kesimpulan</h3>
      <p class="mb-4">Final Fantasy X adalah penutup era klasik Final Fantasy sebelum seri ini bereksperimen dengan konsep baru seperti MMO di Final Fantasy XI. Dengan cerita emosional, gameplay inovatif, dan presentasi yang luar biasa, FFX tetap menjadi salah satu game terbaik dalam sejarah franchise ini.</p>
    `,
  },

  {
    id: 5,
    title: "Final Fantasy XII",
    game: "Final Fantasy XII",
    image: "/images/FF12_logo.png",
    rating: 8.2,
    summary: "Layak Ditunggu, Layak Dimainkan.",
    content: `
      <p class="font-body mb-4">Seberapa sering kita bisa benar-benar berkata, “Penantian ini sepadan”? Kapan kita bisa dengan yakin menyebut sebuah game sebagai salah satu yang terbaik dalam genrenya? Final Fantasy XII adalah jawabannya.</p>
      
      <h3 class="text-xl font-bold text-white mb-2">Cerita yang Gelap dan Mendalam</h3>
      <p class="font-body mb-4">Final Fantasy XII berlatar di dunia Ivalice yang dilanda perang. Kerajaan Dalmasca diduduki oleh Kekaisaran Archadia setelah rajanya dibunuh. Putri kerajaan dikabarkan bunuh diri, dan rakyatnya hidup dalam tekanan. Di tengah kekacauan ini, Vaan, seorang pemuda yatim piatu, bercita-cita menjadi bajak laut langit dan secara tak sengaja terseret dalam konflik besar. Bersama para karakter lain, ia berusaha merebut kembali kebebasan Dalmasca.</p>
      <p class="font-body mb-4">Cerita game ini lebih dewasa dibanding seri Final Fantasy sebelumnya, dengan tema pengkhianatan, perang, dan politik. Tidak ada satu karakter utama yang mendominasi—ini adalah kisah kelompok yang saling terjalin.</p>
      <img src="/images/FFXIIori_idk.jpg" alt="Job Board" class="mb-4 rounded-lg mx-auto">
      
      <h3 class="text-xl font-bold text-white mb-2">Sistem Pertarungan Baru yang Segar</h3>
      <p class="mb-4">FFXII mengubah sistem pertarungan tradisional menjadi lebih dinamis. Tidak ada lagi pertempuran acak; musuh terlihat langsung di dunia permainan. Sistem ini masih berbasis giliran, tetapi dengan aksi yang berlangsung secara real-time.</p>
      <p class="mb-4">Yang membuatnya unik adalah Gambit System, yang memungkinkan pemain mengatur perilaku karakter secara otomatis dalam pertempuran. Ini memberi keleluasaan untuk menyusun strategi tanpa harus selalu memberikan perintah manual.</p>
      <img src="/images/FFXIIori_gameplay.jpg" alt="Job Board" class="mb-4 rounded-lg mx-auto">

      <h3 class="text-xl font-bold text-white mb-2">Lisensi dan Kebebasan Kustomisasi</h3>
      <p class="mb-4">Sistem License Board memungkinkan pemain mengembangkan karakter sesuai keinginan. Semua karakter memulai dari titik yang sama, dan pemain bisa memilih kemampuan serta senjata yang mereka gunakan. Ini membuat setiap playthrough bisa berbeda tergantung gaya bermain.</p>
      <img src="/images/FFXIIori_gambarjobboard.jpg" alt="Job Board" class="mb-4 rounded-lg mx-auto">

      <h3 class="text-xl font-bold text-white mb-2">Presentasi yang Luar Biasa</h3>
      <p class="mb-4">Visualnya termasuk yang terbaik di PS2. Setiap kota dan karakter memiliki detail luar biasa. Suara para karakter diisi oleh aktor berkualitas dengan dialog yang lebih alami dan matang. Soundtracknya cukup baik, meskipun bukan yang terbaik dalam seri ini.</p>

      <h3 class="text-xl font-bold text-white mb-2">Beberapa Kekurangan Kecil</h3>
      <p class="mb-4">Tidak ada game yang sempurna. Beberapa kota terasa terlalu besar, membuat navigasi agak melelahkan. Kamera tidak bisa dikustomisasi dan butuh waktu untuk terbiasa. Selain itu, ada musuh kuat yang muncul tiba-tiba, yang bisa jadi menjengkelkan bagi pemain yang belum siap.</p>
      <img src="/images/FFXIIori_town.jpg" alt="Job Board" class="mb-4 rounded-lg mx-auto">

      <h3 class="text-xl font-bold text-white mb-2">Kesimpulan</h3>
      <p class="mb-4">Final Fantasy XII adalah RPG luar biasa yang wajib dimainkan, terutama bagi penggemar seri ini. Dengan cerita yang matang, pertarungan inovatif, dan dunia yang luas, game ini menjadi salah satu RPG terbaik di PlayStation 2. Jika Anda menyukai petualangan epik dengan kebebasan strategi, jangan lewatkan game ini!</p>
    `,
  },

  {
    id: 6,
    title: "Final Fantasy XII: The Zodiac Age",
    game: "Final Fantasy XII: The Zodiac Age",
    image: "/images/FF12_ZodiacAge.jpg",
    rating: 7,
    summary: "Versi Remaster yang Membawa Banyak Perubahan.",
    content: `
      <h3 class="text-xl font-bold text-white mt-16 mb-2 text-center">Peningkatan Grafis yang Signifikan</h3>
      <p class="font-body mb-4">
        Salah satu aspek utama yang ditingkatkan dalam The Zodiac Age adalah visualnya. Square Enix menghadirkan tekstur resolusi tinggi yang membuat 
        model karakter, latar belakang, dan dunia Ivalice terlihat lebih tajam dan halus dibandingkan versi PS2 yang cenderung terlihat kasar.
      </p>
      <p class="font-body mb-8">
        Selain itu, efek pencahayaan juga mengalami perbaikan. Pantulan cahaya dan bayangan terlihat lebih natural, terutama di area dengan pencahayaan dinamis. 
        Ada juga efek depth of field yang memberikan kesan lebih dramatis dalam cutscene. Namun, beberapa batasan teknis tetap ada, seperti bar hitam di bawah layar 
        saat cutscene berlangsung, meskipun ini membantu menjaga kualitas video agar tidak pecah.
      </p>
      <img src="/images/FFXII_gambar1.webp" alt="Final Fantasy XII Story" class="mb-4 rounded-lg mx-auto">
  
      <h3 class="text-xl font-bold text-white mb-2 text-center">Sistem Job Baru: Lebih Terstruktur dan Strategis</h3>
      <p class="mb-4">
        Versi original Final Fantasy XII memungkinkan setiap karakter mempelajari semua skill yang ada, yang membuat semua karakter terasa seragam tanpa peran khusus. 
        Namun, dalam The Zodiac Age, sistem International Zodiac Job System diperkenalkan, di mana pemain harus memilih dua dari 12 Job yang tersedia untuk setiap karakter.
      </p>
      <p class="mb-4">
        Job yang tersedia mencakup berbagai peran seperti Knight, Black Mage, White Mage, Shikari, dan lainnya. Dengan sistem ini, karakter kini lebih unik dan memiliki 
        spesialisasi masing-masing. Pemain perlu merencanakan kombinasi Job dengan cermat untuk membentuk tim yang seimbang.
      </p>
      <p class="mb-8">
        Misalnya, kombinasi White Mage dan Machinist bisa menjadi penyembuh yang juga bisa menyerang dari jauh, sementara kombinasi Knight dan Bushi dapat menghasilkan 
        karakter dengan serangan fisik yang sangat kuat. Fleksibilitas ini membuat strategi bertarung lebih menarik.
      </p>
      <img src="/images/FFXII_gambarjoblist.webp" alt="Job List" class="mb-4 rounded-lg mx-auto">
      <img src="/images/FFXII_gambarjobboard.webp" alt="Job Board" class="mb-4 rounded-lg mx-auto">
  
      <h3 class="text-xl font-bold text-white mb-2 text-center">Fitur Baru yang Meningkatkan Kenyamanan Bermain</h3>
      <p class="mb-4">
        Selain peningkatan grafis dan perubahan sistem Job, The Zodiac Age juga menghadirkan berbagai fitur baru yang membuat permainan lebih nyaman dan tidak terasa lambat.
      </p>
      <ul class="space-y-4">
        <li class="p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 class="text-lg font-bold text-white mb-2">Turbo Mode</h4>
          <p class="text-gray-300 mb-4">
            Di versi PS2, permainan terasa cukup lambat, terutama saat menjelajahi dunia yang luas atau bertarung dengan musuh lemah. Kini, pemain bisa mengaktifkan 
            Turbo Mode yang mempercepat permainan hingga 2x atau 4x kecepatan normal. Ini sangat membantu saat grinding EXP atau berburu item langka.
          </p>
          <img src="/images/FFXII_gambarturbomode.webp" alt="Turbo Mode" class="rounded-lg mx-auto">
        </li>
      
        <li class="p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 class="text-lg font-bold text-white mb-2">Break Damage Limit</h4>
          <p class="text-gray-300 mb-4">
            Pada versi original, damage yang bisa diberikan karakter dibatasi hingga 9.999, yang membuat serangan terasa kurang kuat di akhir permainan. 
            The Zodiac Age menghapus batas ini, memungkinkan karakter memberikan damage lebih besar, terutama saat menggunakan teknik atau serangan spesial.
          </p>
          <img src="/images/FFXII_gambardamage.webp" alt="Break Damage Limit" class="rounded-lg mx-auto">
        </li>
      
        <li class="p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 class="text-lg font-bold text-white mb-2">Perubahan Lokasi Item dan Magic</h4>
          <p class="text-gray-300">
            Beberapa item dan sihir penting kini tidak lagi bisa dibeli di toko seperti versi lama. Sebagai contoh, Hastega, salah satu buff paling berguna, 
            kini hanya bisa ditemukan di dungeon terakhir, yang membuat permainan lebih menantang.
          </p>
        </li>
      
        <li class="p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 class="text-lg font-bold text-white mb-2">Zodiac Spear Lebih Mudah Didapat</h4>
          <p class="text-gray-300 mb-4">
            Dulu, mendapatkan Zodiac Spear sangat sulit karena pemain tidak boleh membuka beberapa peti tertentu sepanjang permainan, tanpa adanya petunjuk sama sekali. 
            Kini, senjata terkuat ini bisa diperoleh melalui side-quest yang lebih masuk akal, sehingga pemain tidak perlu mengikuti aturan yang membingungkan.
          </p>
          <img src="/images/FFXII_gambarzodiacspear.webp" alt="Zodiac Spear" class="rounded-lg mx-auto">
        </li>
      
        <li class="p-4 bg-gray-800 rounded-lg shadow-md">
          <h4 class="text-lg font-bold text-white mb-2">Skill Wither Bisa Melemahkan Bos</h4>
          <p class="text-gray-300">
            Di versi original, serangan "Wither" yang bisa menurunkan kekuatan musuh tidak bisa digunakan pada bos. Namun, di versi ini, Wither bisa melemahkan 
            bos besar seperti Yiazmat dan Omega XII, membuat pertarungan yang sebelumnya sangat sulit menjadi lebih mudah.
          </p>
        </li>
      </ul>
  
      <h3 class="text-xl font-bold text-white mt-8 mb-2 text-center">Kesimpulan: Lebih dari Sekadar Remaster</h3>
      <p class="mb-4">
        Final Fantasy XII: The Zodiac Age adalah lebih dari sekadar versi lama dengan tampilan baru. Sistem Job yang diperbarui, fitur seperti Turbo Mode, dan 
        berbagai peningkatan gameplay membuat game ini terasa lebih segar dan lebih nyaman dimainkan dibandingkan versi aslinya.
      </p>
      <p class="mb-4">
        Bagi pemain lama, perubahan ini memberikan pengalaman baru tanpa menghilangkan inti dari game aslinya. Sementara itu, bagi pemain yang baru pertama kali mencoba, 
        ini adalah cara terbaik untuk menikmati salah satu game Final Fantasy terbaik dalam format yang lebih modern dan user-friendly.
      </p>
    `,
  }
  
  
];

export default reviews;
