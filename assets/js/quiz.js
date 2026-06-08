// ============================================================
//  QUIZ INTERAKTIF — quiz.js
//  90 soal total: 30 Biota | 30 Sampah | 30 Pemeliharaan
// ============================================================

// ── BANK SOAL: BIOTA (30 soal) ────────────────────────────────────────────
const quizBankBiota = [
  {
    kat: "biota",
    text: "Konservasi yang dilakukan langsung di habitat asli satwa disebut ...",
    opts: ["Rehabilitasi", "Konservasi Ex Situ", "Konservasi In Situ", "Penangkaran"],
    ans: 2,
    exp: "Konservasi In Situ dilakukan di habitat asli satwa, seperti taman nasional dan cagar alam."
  },
  {
    kat: "biota",
    text: "Contoh konservasi Ex Situ adalah ...",
    opts: ["Hutan lindung", "Suaka margasatwa", "Kebun binatang", "Taman nasional"],
    ans: 2,
    exp: "Konservasi Ex Situ dilakukan di luar habitat asli, misalnya kebun binatang dan penangkaran."
  },
  {
    kat: "biota",
    text: "Tujuan rehabilitasi satwa adalah ...",
    opts: ["Menjual satwa langka", "Mengembalikan satwa yang telah pulih ke alam", "Menangkap satwa liar", "Mempersempit habitat satwa"],
    ans: 1,
    exp: "Satwa yang sakit atau terluka dirawat agar dapat hidup kembali di habitatnya."
  },
  {
    kat: "biota",
    text: "Perjanjian internasional yang mengatur perdagangan satwa liar adalah ...",
    opts: ["ASEAN", "UNESCO", "CITES", "FIFA"],
    ans: 2,
    exp: "CITES mengendalikan perdagangan satwa dan tumbuhan liar agar tidak terancam punah."
  },
  {
    kat: "biota",
    text: "Mengembalikan ekosistem yang rusak ke kondisi semula disebut ...",
    opts: ["Restorasi habitat", "Rehabilitasi", "Penangkaran", "Edukasi"],
    ans: 0,
    exp: "Restorasi habitat bertujuan memperbaiki ekosistem yang rusak agar dapat kembali berfungsi."
  },
  {
    kat: "biota",
    text: "Gajah termasuk kelompok ...",
    opts: ["Pisces", "Aves", "Mammalia", "Reptilia"],
    ans: 2,
    exp: "Gajah menyusui anaknya sehingga termasuk mamalia."
  },
  {
    kat: "biota",
    text: "Hewan yang termasuk kelompok Aves adalah ...",
    opts: ["Kucing", "Ayam", "Lele", "Katak"],
    ans: 1,
    exp: "Ayam merupakan salah satu jenis burung yang termasuk kelas Aves."
  },
  {
    kat: "biota",
    text: "Hiu termasuk kelompok ...",
    opts: ["Reptilia", "Mammalia", "Pisces", "Mollusca"],
    ans: 2,
    exp: "Hiu adalah ikan yang bernapas dengan insang sehingga termasuk kelas Pisces."
  },
  {
    kat: "biota",
    text: "Buaya termasuk kelompok ...",
    opts: ["Aves", "Reptilia", "Pisces", "Mollusca"],
    ans: 1,
    exp: "Buaya memiliki kulit bersisik dan berkembang biak dengan bertelur, ciri khas reptil."
  },
  {
    kat: "biota",
    text: "Katak termasuk kelompok ...",
    opts: ["Amphibia", "Pisces", "Reptilia", "Insecta"],
    ans: 0,
    exp: "Katak dapat hidup di dua alam, yaitu air dan darat, sehingga termasuk amfibi."
  },
  {
    kat: "biota",
    text: "Semut termasuk kelompok ...",
    opts: ["Mollusca", "Insecta", "Pisces", "Mammalia"],
    ans: 1,
    exp: "Semut memiliki tubuh bersegmen dan enam kaki, ciri khas serangga (Insecta)."
  },
  {
    kat: "biota",
    text: "Cumi-cumi termasuk kelompok ...",
    opts: ["Arthropoda", "Mollusca", "Pisces", "Reptilia"],
    ans: 1,
    exp: "Cumi-cumi merupakan hewan bertubuh lunak yang termasuk kelompok Mollusca."
  },
  {
    kat: "biota",
    text: "Bintang laut termasuk kelompok ...",
    opts: ["Insecta", "Pisces", "Echinodermata", "Mammalia"],
    ans: 2,
    exp: "Echinodermata adalah kelompok hewan berkulit duri, termasuk bintang laut dan bulu babi."
  },
  {
    kat: "biota",
    text: "Kepiting termasuk ...",
    opts: ["Amphibia", "Arthropoda", "Mollusca", "Aves"],
    ans: 1,
    exp: "Kepiting memiliki kaki berbuku-buku dan rangka luar, termasuk kelompok Arthropoda."
  },
  {
    kat: "biota",
    text: "Menanam kembali hutan yang gundul disebut ...",
    opts: ["Aforestasi", "Reboisasi", "Edukasi", "Pemangkasan"],
    ans: 1,
    exp: "Reboisasi dilakukan untuk memulihkan kawasan hutan yang rusak atau gundul."
  },
  {
    kat: "biota",
    text: "Membuat hutan baru di lahan yang sebelumnya tidak berhutan disebut ...",
    opts: ["Aforestasi", "Reboisasi", "Penangkaran", "Pemupukan"],
    ans: 0,
    exp: "Aforestasi adalah pembuatan hutan baru pada lahan yang sebelumnya tidak berhutan."
  },
  {
    kat: "biota",
    text: "Upaya menyimpan dan melestarikan tumbuhan langka dapat dilakukan melalui ...",
    opts: ["Bank benih dan kebun raya", "Akuarium", "Kandang ternak", "Tempat pembuangan akhir"],
    ans: 0,
    exp: "Bank benih dan kebun raya digunakan untuk menjaga kelestarian berbagai jenis tumbuhan langka."
  },
  {
    kat: "biota",
    text: "Hewan yang terancam punah dan dilindungi di Indonesia adalah ...",
    opts: ["Ayam kampung", "Harimau Sumatera", "Sapi", "Kambing"],
    ans: 1,
    exp: "Harimau Sumatera (Panthera tigris sumatrae) termasuk satwa langka yang dilindungi di Indonesia."
  },
  {
    kat: "biota",
    text: "Orangutan adalah satwa endemik yang berasal dari ...",
    opts: ["Afrika", "Australia", "Kalimantan dan Sumatera", "Papua Nugini"],
    ans: 2,
    exp: "Orangutan hanya ditemukan di hutan hujan tropis Kalimantan dan Sumatera."
  },
  {
    kat: "biota",
    text: "Tempat perlindungan satwa liar yang dilindungi oleh negara disebut ...",
    opts: ["Kebun raya", "Suaka margasatwa", "Taman bermain", "Hutan produksi"],
    ans: 1,
    exp: "Suaka margasatwa adalah kawasan konservasi yang khusus diperuntukkan bagi perlindungan satwa liar."
  },
  {
    kat: "biota",
    text: "Proses perpindahan hewan dari satu tempat ke tempat lain untuk tujuan konservasi disebut ...",
    opts: ["Migrasi", "Translokasi", "Hibernasi", "Domestikasi"],
    ans: 1,
    exp: "Translokasi adalah pemindahan hewan ke habitat baru yang lebih aman untuk mendukung kelestariannya."
  },
  {
    kat: "biota",
    text: "Hewan yang hidup di dua alam (air dan darat) disebut ...",
    opts: ["Reptil", "Amfibi", "Mamalia", "Aves"],
    ans: 1,
    exp: "Amfibi berasal dari bahasa Yunani yang berarti 'dua kehidupan', yaitu di air dan darat."
  },
  {
    kat: "biota",
    text: "Salah satu ciri hewan mamalia adalah ...",
    opts: ["Bernapas dengan insang", "Menyusui anaknya", "Berkembang biak dengan bertelur saja", "Berdarah dingin"],
    ans: 1,
    exp: "Ciri utama mamalia adalah menyusui anaknya dengan air susu dari kelenjar susu."
  },
  {
    kat: "biota",
    text: "Komodo merupakan hewan endemik yang hanya ada di ...",
    opts: ["Jawa", "Bali", "Pulau Komodo dan sekitarnya", "Sulawesi"],
    ans: 2,
    exp: "Komodo (Varanus komodoensis) hanya ditemukan di Pulau Komodo, Rinca, dan beberapa pulau kecil sekitarnya."
  },
  {
    kat: "biota",
    text: "Burung Cendrawasih adalah satwa endemik dari ...",
    opts: ["Sumatera", "Kalimantan", "Papua", "Jawa"],
    ans: 2,
    exp: "Burung Cendrawasih dikenal sebagai 'burung surga' dan merupakan fauna khas Papua."
  },
  {
    kat: "biota",
    text: "Organisme yang hanya ditemukan di satu wilayah tertentu di dunia disebut ...",
    opts: ["Parasit", "Endemik", "Simbiosis", "Predator"],
    ans: 1,
    exp: "Endemik berarti organisme tersebut hanya terdapat di daerah geografis tertentu dan tidak ditemukan di tempat lain."
  },
  {
    kat: "biota",
    text: "Status konservasi hewan yang populasinya sangat kritis dan hampir punah adalah ...",
    opts: ["Least Concern", "Vulnerable", "Critically Endangered", "Near Threatened"],
    ans: 2,
    exp: "Critically Endangered (CR) adalah status IUCN untuk spesies yang menghadapi risiko kepunahan sangat tinggi."
  },
  {
    kat: "biota",
    text: "Taman Nasional Komodo berfungsi untuk melindungi ...",
    opts: ["Harimau Sumatera", "Komodo dan ekosistemnya", "Orangutan", "Gajah Sumatera"],
    ans: 1,
    exp: "Taman Nasional Komodo ditetapkan UNESCO sebagai Situs Warisan Dunia untuk melindungi Komodo dan ekosistem sekitarnya."
  },
  {
    kat: "biota",
    text: "Laut Indonesia menyimpan keanekaragaman hayati yang sangat tinggi karena berada di kawasan ...",
    opts: ["Coral Triangle", "Amazon Basin", "Sahara Belt", "Arctic Zone"],
    ans: 0,
    exp: "Indonesia berada di pusat Coral Triangle, kawasan dengan keanekaragaman terumbu karang dan biota laut tertinggi di dunia."
  },
  {
    kat: "biota",
    text: "Hubungan antara dua makhluk hidup yang saling menguntungkan disebut ...",
    opts: ["Parasitisme", "Komensalisme", "Mutualisme", "Predasi"],
    ans: 2,
    exp: "Mutualisme adalah hubungan simbiosis di mana kedua pihak saling mendapatkan manfaat."
  }
];

// ── BANK SOAL: SAMPAH (30 soal) ───────────────────────────────────────────
const quizBankSampah = [
  {
    kat: "sampah",
    text: "Sampah yang mudah terurai secara alami disebut ...",
    opts: ["Sampah anorganik", "Sampah B3", "Sampah organik", "Sampah elektronik"],
    ans: 2,
    exp: "Sampah organik berasal dari makhluk hidup dan mudah membusuk secara alami."
  },
  {
    kat: "sampah",
    text: "Contoh sampah organik adalah ...",
    opts: ["Botol plastik", "Kaleng minuman", "Sisa makanan", "Kaca"],
    ans: 2,
    exp: "Sisa makanan termasuk sampah organik karena dapat terurai secara alami."
  },
  {
    kat: "sampah",
    text: "Contoh sampah anorganik adalah ...",
    opts: ["Daun kering", "Kulit buah", "Botol plastik", "Sisa sayuran"],
    ans: 2,
    exp: "Plastik sulit terurai secara alami sehingga termasuk sampah anorganik."
  },
  {
    kat: "sampah",
    text: "Baterai bekas termasuk ...",
    opts: ["Sampah organik", "Sampah B3", "Sampah rumah tangga biasa", "Sampah kompos"],
    ans: 1,
    exp: "Baterai mengandung bahan berbahaya dan beracun (B3) yang perlu penanganan khusus."
  },
  {
    kat: "sampah",
    text: "Reduce dalam konsep 3R berarti ...",
    opts: ["Mengolah sampah", "Mengurangi penggunaan barang yang menghasilkan sampah", "Mengubur sampah", "Membakar sampah"],
    ans: 1,
    exp: "Reduce bertujuan mengurangi jumlah sampah yang dihasilkan sejak awal."
  },
  {
    kat: "sampah",
    text: "Reuse berarti ...",
    opts: ["Mengurangi penggunaan barang", "Menggunakan kembali barang yang masih layak pakai", "Membakar sampah", "Mengumpulkan sampah"],
    ans: 1,
    exp: "Reuse berarti memanfaatkan kembali barang yang masih layak agar tidak menjadi sampah."
  },
  {
    kat: "sampah",
    text: "Recycle berarti ...",
    opts: ["Mendaur ulang sampah menjadi produk baru", "Menyimpan sampah", "Membuang sampah ke sungai", "Membakar sampah"],
    ans: 0,
    exp: "Recycle mengubah sampah menjadi barang baru yang bermanfaat melalui proses daur ulang."
  },
  {
    kat: "sampah",
    text: "Tempat untuk mengumpulkan sampah yang dapat didaur ulang disebut ...",
    opts: ["TPA", "Bank sampah", "Selokan", "Gudang"],
    ans: 1,
    exp: "Bank sampah membantu pengelolaan sampah daur ulang yang bernilai ekonomis."
  },
  {
    kat: "sampah",
    text: "Pengolahan sampah organik menjadi pupuk disebut ...",
    opts: ["Daur ulang", "Penghancuran", "Komposting", "Pembakaran"],
    ans: 2,
    exp: "Komposting menghasilkan pupuk kompos dari bahan organik yang terurai."
  },
  {
    kat: "sampah",
    text: "Dampak membuang sampah ke sungai adalah ...",
    opts: ["Air menjadi bersih", "Mencegah banjir", "Menyebabkan pencemaran dan banjir", "Menambah ikan"],
    ans: 2,
    exp: "Sampah dapat menyumbat aliran air dan mencemari sungai sehingga menyebabkan banjir."
  },
  {
    kat: "sampah",
    text: "Sampah yang paling lama terurai adalah ...",
    opts: ["Kulit pisang", "Daun kering", "Plastik", "Sisa makanan"],
    ans: 2,
    exp: "Plastik membutuhkan waktu ratusan tahun untuk terurai di alam."
  },
  {
    kat: "sampah",
    text: "Tujuan pemilahan sampah adalah ...",
    opts: ["Memperbanyak sampah", "Memudahkan pengelolaan dan daur ulang", "Menambah pencemaran", "Mengotori lingkungan"],
    ans: 1,
    exp: "Sampah yang dipilah sejak awal lebih mudah diolah dan didaur ulang."
  },
  {
    kat: "sampah",
    text: "Sampah elektronik termasuk ...",
    opts: ["Sampah organik", "Sampah cair", "Sampah anorganik yang perlu penanganan khusus", "Kompos"],
    ans: 2,
    exp: "Perangkat elektronik mengandung bahan berbahaya yang perlu dikelola secara khusus."
  },
  {
    kat: "sampah",
    text: "Salah satu cara mengurangi sampah plastik adalah ...",
    opts: ["Menggunakan kantong plastik sekali pakai", "Membakar plastik", "Membawa tas belanja sendiri", "Membuang plastik ke laut"],
    ans: 2,
    exp: "Tas belanja yang dapat digunakan berulang kali efektif mengurangi sampah plastik."
  },
  {
    kat: "sampah",
    text: "Manfaat pengelolaan sampah yang baik adalah ...",
    opts: ["Lingkungan menjadi kotor", "Menimbulkan penyakit", "Menjaga kebersihan dan kesehatan lingkungan", "Menambah pencemaran"],
    ans: 2,
    exp: "Pengelolaan sampah yang baik menciptakan lingkungan yang sehat dan nyaman untuk semua."
  },
  {
    kat: "sampah",
    text: "Sampah B3 yang berasal dari rumah sakit contohnya adalah ...",
    opts: ["Sisa nasi", "Jarum suntik bekas", "Kardus", "Botol air minum"],
    ans: 1,
    exp: "Jarum suntik bekas termasuk limbah medis yang berbahaya dan harus dikelola secara khusus."
  },
  {
    kat: "sampah",
    text: "Gas metana yang dihasilkan dari tumpukan sampah organik dapat dimanfaatkan sebagai ...",
    opts: ["Bahan bangunan", "Bahan bakar biogas", "Pupuk kimia", "Cat tembok"],
    ans: 1,
    exp: "Gas metana dari dekomposisi sampah organik dapat dikumpulkan dan digunakan sebagai sumber energi biogas."
  },
  {
    kat: "sampah",
    text: "Warna tempat sampah yang digunakan untuk sampah organik umumnya adalah ...",
    opts: ["Merah", "Kuning", "Hijau", "Biru"],
    ans: 2,
    exp: "Tempat sampah hijau umumnya digunakan untuk menampung sampah organik yang mudah terurai."
  },
  {
    kat: "sampah",
    text: "Plastik yang dibuang ke laut mengancam kehidupan ...",
    opts: ["Pohon bakau", "Hewan laut", "Awan", "Tanah pertanian"],
    ans: 1,
    exp: "Plastik di laut dapat termakan oleh hewan laut seperti penyu dan ikan sehingga membahayakan hidupnya."
  },
  {
    kat: "sampah",
    text: "Prinsip zero waste bertujuan untuk ...",
    opts: ["Memproduksi lebih banyak sampah", "Mengurangi sampah hingga seminimal mungkin", "Membakar semua sampah", "Mengimpor sampah dari luar negeri"],
    ans: 1,
    exp: "Zero waste adalah gaya hidup yang berupaya mengurangi jumlah sampah yang dibuang ke lingkungan."
  },
  {
    kat: "sampah",
    text: "Apa yang dimaksud dengan upcycling?",
    opts: ["Membakar sampah", "Mengubur sampah", "Mengubah sampah menjadi produk bernilai lebih tinggi", "Mengangkut sampah ke TPA"],
    ans: 2,
    exp: "Upcycling adalah proses mengubah sampah atau barang bekas menjadi produk baru yang bernilai lebih tinggi."
  },
  {
    kat: "sampah",
    text: "Sampah yang dihasilkan dari kegiatan pertanian disebut ...",
    opts: ["Limbah industri", "Sampah domestik", "Limbah agraris", "Sampah B3"],
    ans: 2,
    exp: "Limbah agraris adalah sampah yang berasal dari kegiatan pertanian seperti sisa panen dan sekam padi."
  },
  {
    kat: "sampah",
    text: "Manfaat pupuk kompos dari sampah organik adalah ...",
    opts: ["Merusak tanah", "Menyuburkan tanah dan tanaman", "Mencemari air tanah", "Mengurangi kadar oksigen"],
    ans: 1,
    exp: "Pupuk kompos meningkatkan kesuburan tanah secara alami dan ramah lingkungan."
  },
  {
    kat: "sampah",
    text: "TPA singkatan dari ...",
    opts: ["Tempat Pembuangan Akhir", "Tempat Penampungan Air", "Taman Pemeliharaan Alam", "Tempat Pengolahan Anorganik"],
    ans: 0,
    exp: "TPA (Tempat Pembuangan Akhir) adalah lokasi akhir pembuangan dan pengolahan sampah."
  },
  {
    kat: "sampah",
    text: "Limbah cair berbahaya dari pabrik yang dibuang ke sungai dapat menyebabkan ...",
    opts: ["Air menjadi lebih bersih", "Pencemaran air dan kematian biota sungai", "Pertumbuhan tanaman lebih subur", "Hujan lebih sering"],
    ans: 1,
    exp: "Limbah cair pabrik mengandung zat kimia berbahaya yang dapat mencemari air dan membunuh makhluk hidup di sungai."
  },
  {
    kat: "sampah",
    text: "Kegiatan membersihkan sampah di pantai secara bersama-sama disebut ...",
    opts: ["Demonstrasi", "Beach cleanup", "Reforestasi", "Komposting"],
    ans: 1,
    exp: "Beach cleanup adalah kegiatan sukarela membersihkan sampah di pantai untuk menjaga kebersihan ekosistem laut."
  },
  {
    kat: "sampah",
    text: "Botol kaca bekas dapat dikurangi dampaknya dengan cara ...",
    opts: ["Dibakar", "Dibuang ke sungai", "Digunakan kembali atau didaur ulang", "Dikubur di tanah"],
    ans: 2,
    exp: "Botol kaca dapat digunakan kembali atau didaur ulang menjadi produk kaca baru sehingga mengurangi limbah."
  },
  {
    kat: "sampah",
    text: "Sampah yang dihasilkan oleh kegiatan rumah tangga sehari-hari disebut ...",
    opts: ["Limbah industri", "Sampah domestik", "Sampah B3", "Limbah nuklir"],
    ans: 1,
    exp: "Sampah domestik adalah sampah yang dihasilkan dari kegiatan sehari-hari di rumah tangga."
  },
  {
    kat: "sampah",
    text: "Cara paling tepat untuk membuang minyak goreng bekas adalah ...",
    opts: ["Dibuang ke saluran air", "Dibakar langsung", "Dikumpulkan dan diserahkan ke pengepul daur ulang", "Dituang ke tanah"],
    ans: 2,
    exp: "Minyak goreng bekas sebaiknya dikumpulkan dan diserahkan ke pengepul yang dapat mendaur ulangnya menjadi biodiesel."
  },
  {
    kat: "sampah",
    text: "Gerakan mengurangi penggunaan sedotan plastik bertujuan untuk ...",
    opts: ["Mengurangi pendapatan pabrik", "Melindungi satwa laut dari bahaya plastik", "Membuat minuman lebih mahal", "Mengurangi jumlah minuman"],
    ans: 1,
    exp: "Sedotan plastik sering berakhir di laut dan dapat melukai atau termakan satwa laut seperti penyu."
  }
];

// ── BANK SOAL: PEMELIHARAAN (30 soal) ─────────────────────────────────────
const quizBankPemeliharaan = [
  {
    kat: "pemeliharaan",
    text: "Makanan hewan peliharaan harus diberikan sesuai ...",
    opts: ["Warna bulu", "Bentuk kandang", "Usia, ras, dan kesehatan", "Ukuran rumah"],
    ans: 2,
    exp: "Kebutuhan nutrisi hewan berbeda sesuai usia, ras, dan kondisi kesehatannya."
  },
  {
    kat: "pemeliharaan",
    text: "Vaksinasi pada hewan peliharaan dilakukan untuk ...",
    opts: ["Menambah warna bulu", "Menjaga kesehatan dan mencegah penyakit", "Memperbesar tubuh", "Mengubah perilaku"],
    ans: 1,
    exp: "Vaksin membantu melindungi hewan dari berbagai penyakit menular."
  },
  {
    kat: "pemeliharaan",
    text: "Filter pada akuarium harus bekerja selama ...",
    opts: ["2 jam", "6 jam", "12 jam", "24 jam"],
    ans: 3,
    exp: "Filter membantu menjaga kualitas air dan menyaring amonia sepanjang waktu."
  },
  {
    kat: "pemeliharaan",
    text: "Fungsi aerasi pada akuarium adalah ...",
    opts: ["Mengurangi cahaya", "Menambah oksigen dalam air", "Mengurangi makanan", "Mengganti warna air"],
    ans: 1,
    exp: "Aerasi membantu menyediakan oksigen yang cukup bagi hewan akuatik."
  },
  {
    kat: "pemeliharaan",
    text: "Makanan pokok yang umum diberikan pada unggas adalah ...",
    opts: ["Daging mentah", "Rumput", "Biji-bijian", "Lumut"],
    ans: 2,
    exp: "Biji-bijian merupakan sumber nutrisi utama bagi banyak jenis unggas."
  },
  {
    kat: "pemeliharaan",
    text: "Burung perlu dijemur untuk mendapatkan ...",
    opts: ["Vitamin dan kesehatan tubuh", "Warna baru", "Suara keras", "Berat badan turun"],
    ans: 0,
    exp: "Sinar matahari membantu menjaga kesehatan unggas dan memperkuat tulang."
  },
  {
    kat: "pemeliharaan",
    text: "Pemeliharaan utama hewan eksotik adalah ...",
    opts: ["Habitat sesuai suhu dan kelembapan", "Air hujan setiap hari", "Makanan manusia", "Kandang terbuka"],
    ans: 0,
    exp: "Hewan eksotik membutuhkan kondisi lingkungan yang mirip habitat aslinya."
  },
  {
    kat: "pemeliharaan",
    text: "Jarak tanam yang baik untuk pohon adalah ...",
    opts: ["10 cm", "50 cm", "1 meter", "3–5 meter"],
    ans: 3,
    exp: "Jarak tanam yang cukup memberi ruang tumbuh yang optimal bagi pohon."
  },
  {
    kat: "pemeliharaan",
    text: "Pemangkasan pada pohon bertujuan untuk ...",
    opts: ["Menghilangkan akar", "Memotong cabang kering dan mati", "Mengurangi tanah", "Menambah air"],
    ans: 1,
    exp: "Pemangkasan cabang kering dan mati membantu pertumbuhan yang lebih sehat."
  },
  {
    kat: "pemeliharaan",
    text: "Perawatan utama tanaman semak adalah ...",
    opts: ["Penggantian air", "Pemangkasan rutin", "Penjemuran akar", "Pembakaran daun"],
    ans: 1,
    exp: "Pemangkasan rutin menjaga bentuk dan kesehatan tanaman semak."
  },
  {
    kat: "pemeliharaan",
    text: "Media tanam yang baik untuk tanaman herba adalah ...",
    opts: ["Tanah keras", "Pasir saja", "Media gembur kaya bahan organik", "Batu kerikil"],
    ans: 2,
    exp: "Herba tumbuh optimal pada media yang subur, gembur, dan kaya bahan organik."
  },
  {
    kat: "pemeliharaan",
    text: "Salah satu cara merawat tumbuhan air adalah ...",
    opts: ["Mengeringkan kolam", "Menjaga kualitas air", "Mengurangi cahaya sepenuhnya", "Memotong akar setiap hari"],
    ans: 1,
    exp: "Air yang bersih dan berkualitas mendukung pertumbuhan tumbuhan air dengan baik."
  },
  {
    kat: "pemeliharaan",
    text: "Pupuk yang membantu pertumbuhan daun adalah pupuk yang kaya unsur ...",
    opts: ["Fosfor", "Kalium", "Nitrogen", "Besi"],
    ans: 2,
    exp: "Nitrogen berperan penting dalam pertumbuhan daun dan batang tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Frekuensi pemberian makan anak kucing yang ideal adalah ...",
    opts: ["Sekali sehari", "Dua kali sehari", "Tiga hingga empat kali sehari", "Seminggu sekali"],
    ans: 2,
    exp: "Anak kucing membutuhkan lebih banyak nutrisi untuk tumbuh sehingga diberi makan 3–4 kali sehari."
  },
  {
    kat: "pemeliharaan",
    text: "Kandang hewan peliharaan harus dibersihkan secara ...",
    opts: ["Setahun sekali", "Sebulan sekali", "Rutin agar terhindar dari kuman dan penyakit", "Tidak perlu dibersihkan"],
    ans: 2,
    exp: "Kebersihan kandang sangat penting untuk mencegah pertumbuhan bakteri dan penyakit pada hewan peliharaan."
  },
  {
    kat: "pemeliharaan",
    text: "Penyakit rabies pada anjing dapat dicegah dengan ...",
    opts: ["Pemberian vitamin C", "Vaksinasi anti-rabies", "Pemberian susu", "Mandi rutin"],
    ans: 1,
    exp: "Vaksinasi anti-rabies adalah cara paling efektif mencegah penyakit rabies pada anjing dan hewan peliharaan lainnya."
  },
  {
    kat: "pemeliharaan",
    text: "Penggantian air akuarium sebaiknya dilakukan sebanyak ...",
    opts: ["100% sekaligus", "10–20% secara berkala", "Tidak perlu diganti", "50% setiap hari"],
    ans: 1,
    exp: "Mengganti 10–20% air secara berkala menjaga kualitas air tanpa mengganggu keseimbangan ekosistem akuarium."
  },
  {
    kat: "pemeliharaan",
    text: "Tanaman yang membutuhkan sedikit air dan cocok ditanam di daerah kering adalah ...",
    opts: ["Teratai", "Kaktus", "Padi", "Kangkung"],
    ans: 1,
    exp: "Kaktus menyimpan air di batangnya sehingga dapat bertahan di lingkungan kering dengan sedikit penyiraman."
  },
  {
    kat: "pemeliharaan",
    text: "Penyiraman tanaman sebaiknya dilakukan pada waktu ...",
    opts: ["Tengah hari saat matahari terik", "Pagi atau sore hari", "Tengah malam", "Tidak ada waktu khusus"],
    ans: 1,
    exp: "Penyiraman pagi atau sore hari mencegah penguapan berlebihan dan mencegah daun terbakar sinar matahari."
  },
  {
    kat: "pemeliharaan",
    text: "Fungsi pemupukan pada tanaman adalah ...",
    opts: ["Mengurangi pertumbuhan", "Memenuhi kebutuhan nutrisi dan menyuburkan tanaman", "Mengurangi air tanah", "Membunuh hama"],
    ans: 1,
    exp: "Pupuk memberikan unsur hara yang dibutuhkan tanaman untuk tumbuh subur dan sehat."
  },
  {
    kat: "pemeliharaan",
    text: "Hama yang sering menyerang tanaman hias dan cara membasminya adalah ...",
    opts: ["Cacing tanah dengan pestisida", "Kutu daun dengan insektisida atau semprotan air sabun", "Lebah dengan herbisida", "Burung dengan fungisida"],
    ans: 1,
    exp: "Kutu daun (Aphid) adalah hama umum tanaman hias yang dapat dibasmi dengan insektisida ringan atau semprotan air sabun."
  },
  {
    kat: "pemeliharaan",
    text: "Tanda tanaman kekurangan air adalah ...",
    opts: ["Daun berwarna hijau cerah", "Batang membesar", "Daun layu dan menggulung", "Bunga bermekaran"],
    ans: 2,
    exp: "Daun yang layu dan menggulung adalah tanda tanaman kekurangan air dan memerlukan penyiraman segera."
  },
  {
    kat: "pemeliharaan",
    text: "Sterilisasi hewan peliharaan bertujuan untuk ...",
    opts: ["Menambah berat badan", "Mengendalikan populasi dan mencegah penyakit tertentu", "Membuat hewan lebih agresif", "Mengurangi nafsu makan"],
    ans: 1,
    exp: "Sterilisasi membantu mengendalikan populasi hewan peliharaan dan mengurangi risiko penyakit tertentu."
  },
  {
    kat: "pemeliharaan",
    text: "Tanaman yang dapat tumbuh di dalam ruangan dengan cahaya minimal disebut ...",
    opts: ["Tanaman gurun", "Tanaman hias indoor", "Tanaman pangan", "Tanaman air"],
    ans: 1,
    exp: "Tanaman hias indoor seperti lidah mertua dan pothos dapat tumbuh dengan cahaya minimal di dalam ruangan."
  },
  {
    kat: "pemeliharaan",
    text: "Makanan yang TIDAK boleh diberikan kepada kucing adalah ...",
    opts: ["Daging ayam rebus", "Ikan kukus", "Cokelat dan bawang", "Makanan khusus kucing"],
    ans: 2,
    exp: "Cokelat dan bawang mengandung zat yang beracun bagi kucing dan dapat menyebabkan gangguan kesehatan serius."
  },
  {
    kat: "pemeliharaan",
    text: "Cara tepat merawat ikan koi di kolam adalah ...",
    opts: ["Memberi makan berlebihan setiap jam", "Menjaga kualitas air dan memberi makan secukupnya", "Mengisi kolam dengan air laut", "Menutup kolam agar tidak terkena sinar matahari"],
    ans: 1,
    exp: "Ikan koi membutuhkan air yang bersih, oksigen cukup, dan pemberian makan yang teratur dan tidak berlebihan."
  },
  {
    kat: "pemeliharaan",
    text: "Proses pemindahan tanaman dari pot kecil ke pot lebih besar disebut ...",
    opts: ["Stek", "Repotting", "Okulasi", "Cangkok"],
    ans: 1,
    exp: "Repotting adalah proses memindahkan tanaman ke pot yang lebih besar agar akarnya dapat berkembang dengan leluasa."
  },
  {
    kat: "pemeliharaan",
    text: "Tanaman anggrek membutuhkan media tanam berupa ...",
    opts: ["Tanah liat padat", "Pasir halus", "Akar pakis atau kulit kayu", "Batu bata"],
    ans: 2,
    exp: "Anggrek tumbuh baik pada media akar pakis, kulit kayu, atau arang karena membutuhkan sirkulasi udara yang baik di akar."
  },
  {
    kat: "pemeliharaan",
    text: "Tanda hewan peliharaan sedang sakit yang perlu diwaspadai adalah ...",
    opts: ["Aktif bergerak dan nafsu makan baik", "Lesu, tidak nafsu makan, dan perubahan perilaku", "Tidur lebih awal dari biasanya", "Minum air lebih banyak saat cuaca panas"],
    ans: 1,
    exp: "Hewan yang lesu, tidak mau makan, dan berubah perilaku biasanya menunjukkan tanda-tanda sakit dan perlu dibawa ke dokter hewan."
  },
  {
    kat: "pemeliharaan",
    text: "Pemberian pupuk berlebihan pada tanaman dapat menyebabkan ...",
    opts: ["Tanaman tumbuh lebih subur", "Keracunan pupuk dan kematian tanaman", "Bunga lebih banyak", "Akar semakin kuat"],
    ans: 1,
    exp: "Pemberian pupuk berlebihan menyebabkan penumpukan garam mineral yang merusak akar dan dapat mematikan tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Cara perbanyakan tanaman dengan menggunakan potongan batang disebut ...",
    opts: ["Cangkok", "Okulasi", "Stek batang", "Merunduk"],
    ans: 2,
    exp: "Stek batang adalah cara memperbanyak tanaman dengan menanam potongan batang hingga tumbuh akar baru."
  }
];

// ── CONFIG ────────────────────────────────────────────────────────────────
const TOTAL_SOAL = 10;

const LABEL_KATEGORI = {
  biota: "🌿 Biota",
  sampah: "♻️ Sampah",
  pemeliharaan: "🐾 Pemeliharaan",
  semua: "🎯 Semua Kategori"
};

const TAG_CLASS = {
  biota: "quiz-tag-biota",
  sampah: "quiz-tag-sampah",
  pemeliharaan: "quiz-tag-pemeliharaan"
};

// ── STATE ─────────────────────────────────────────────────────────────────
let quizData = [];
let quizKategoriAktif = "";
let quizCur = 0, quizCorrect = 0, quizWrong = 0;
let quizStreak = 0, quizMaxStreak = 0, quizAnswered = false;
let quizAnsweredState = [];

// ── STREAK HELPERS ────────────────────────────────────────────────────────
function quizGetStreakLevel(s) {
  if (s >= 10) return 5;
  if (s >= 8) return 4;
  if (s >= 6) return 3;
  if (s >= 4) return 2;
  if (s >= 2) return 1;
  return 0;
}
function quizGetStreakLabel(s) {
  if (s >= 10) return "ULTRA!";
  if (s >= 8) return "STREAK!";
  return "streak!";
}
function quizApplyStreakLevel(sb, level) {
  sb.classList.remove("quiz-lv1", "quiz-lv2", "quiz-lv3", "quiz-lv4", "quiz-lv5");
  if (level > 0) sb.classList.add("quiz-lv" + level);
}

// ── SHUFFLE ───────────────────────────────────────────────────────────────
function quizShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── MULAI QUIZ ────────────────────────────────────────────────────────────
function quizMulai(kategori) {
  quizKategoriAktif = kategori;

  let pool = [];
  if (kategori === "biota") pool = quizBankBiota;
  else if (kategori === "sampah") pool = quizBankSampah;
  else if (kategori === "pemeliharaan") pool = quizBankPemeliharaan;
  else pool = [...quizBankBiota, ...quizBankSampah, ...quizBankPemeliharaan];

  quizData = quizShuffle(pool).slice(0, Math.min(TOTAL_SOAL, pool.length));
  quizCur = 0; quizCorrect = 0; quizWrong = 0;
  quizStreak = 0; quizMaxStreak = 0; quizAnswered = false;
  quizAnsweredState = new Array(quizData.length).fill(null);

  document.getElementById("quiz-title-label").textContent =
    LABEL_KATEGORI[kategori] || "Quiz Interaktif";
  document.getElementById("quiz-kategori-screen").style.display = "none";
  document.getElementById("quiz-main-screen").style.display = "block";

  quizRender();
}

// ── RENDER SOAL ───────────────────────────────────────────────────────────
function quizRender() {
  const q = quizData[quizCur];
  const total = quizData.length;

  document.getElementById("quiz-q-num").textContent = `Soal ${quizCur + 1} dari ${total}`;
  document.getElementById("quiz-prog").style.width = `${((quizCur + 1) / total) * 100}%`;
  document.getElementById("quiz-q-text").textContent = q.text;
  document.getElementById("quiz-score-info").textContent =
    `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;
  document.getElementById("quiz-explanation").style.display = "none";
  document.getElementById("quiz-next-btn").style.display = "none";

  const tag = document.getElementById("quiz-category-tag");
  tag.textContent = LABEL_KATEGORI[q.kat] || q.kat;
  tag.className = "quiz-category-tag " + (TAG_CLASS[q.kat] || "");

  quizAnswered = quizAnsweredState[quizCur] !== null;

  const sb = document.getElementById("quiz-streak-badge");
  const lv = quizGetStreakLevel(quizStreak);
  if (quizStreak >= 2) {
    document.getElementById("quiz-streak-num").textContent = quizStreak;
    document.getElementById("quiz-streak-label").textContent = quizGetStreakLabel(quizStreak);
    quizApplyStreakLevel(sb, lv);
    sb.classList.add("quiz-show");
  } else {
    sb.classList.remove("quiz-show", "quiz-lv1", "quiz-lv2", "quiz-lv3", "quiz-lv4", "quiz-lv5");
  }

  const optDiv = document.getElementById("quiz-options");
  optDiv.innerHTML = "";
  q.opts.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.innerHTML = `<span class="quiz-radio-dot"><span class="quiz-dot-inner"></span></span><span>${o}</span>`;
    if (quizAnswered) {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add("correct");
      else if (i === quizAnsweredState[quizCur]) btn.classList.add("wrong");
    } else {
      btn.onclick = () => quizSelect(i, btn);
    }
    optDiv.appendChild(btn);
  });

  if (quizAnswered) {
    document.getElementById("quiz-explanation").textContent = q.exp;
    document.getElementById("quiz-explanation").style.display = "block";
    document.getElementById("quiz-next-btn").style.display = "block";
    document.getElementById("quiz-next-btn").textContent =
      quizCur === total - 1 ? "Lihat Hasil" : "Next";
  }

  document.getElementById("quiz-back-btn").style.display =
    quizCur > 0 ? "inline-block" : "none";
}

// ── PILIH JAWABAN ─────────────────────────────────────────────────────────
function quizSelect(idx, btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizAnsweredState[quizCur] = idx;

  const q = quizData[quizCur];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => (b.disabled = true));

  if (idx === q.ans) {
    btn.classList.add("correct");
    quizCorrect++; quizStreak++;
    if (quizStreak > quizMaxStreak) quizMaxStreak = quizStreak;
  } else {
    btn.classList.add("wrong");
    quizWrong++; quizStreak = 0;
    allBtns[q.ans].classList.add("reveal");
  }

  document.getElementById("quiz-score-info").textContent =
    `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;

  const sb = document.getElementById("quiz-streak-badge");
  if (quizStreak >= 2) {
    const lv = quizGetStreakLevel(quizStreak);
    document.getElementById("quiz-streak-num").textContent = quizStreak;
    document.getElementById("quiz-streak-label").textContent = quizGetStreakLabel(quizStreak);
    quizApplyStreakLevel(sb, lv);
    if (!sb.classList.contains("quiz-show")) {
      sb.classList.add("quiz-show");
    } else {
      sb.classList.remove("quiz-bump");
      void sb.offsetWidth;
      sb.classList.add("quiz-bump");
    }
  } else {
    sb.classList.remove("quiz-show", "quiz-bump", "quiz-lv1", "quiz-lv2", "quiz-lv3", "quiz-lv4", "quiz-lv5");
  }

  document.getElementById("quiz-explanation").textContent = q.exp;
  document.getElementById("quiz-explanation").style.display = "block";
  document.getElementById("quiz-next-btn").style.display = "block";
  document.getElementById("quiz-next-btn").textContent =
    quizCur === quizData.length - 1 ? "Lihat Hasil" : "Next";
}

// ── NAVIGASI ──────────────────────────────────────────────────────────────
function quizGoNext() {
  if (quizCur < quizData.length - 1) { quizCur++; quizRender(); }
  else { quizShowResult(); }
}
function quizGoBack() {
  if (quizCur > 0) { quizCur--; quizRender(); }
}

// ── TAMPILKAN HASIL ───────────────────────────────────────────────────────
function quizShowResult() {
  document.getElementById("quiz-card").style.display = "none";
  document.getElementById("quiz-result-card").style.display = "block";

  const total = quizData.length;
  const pct = quizCorrect / total;
  const circumference = 264;
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = circumference;
  ring.classList.remove("quiz-ring-perfect", "quiz-ring-low");
  if (pct === 1) ring.classList.add("quiz-ring-perfect");
  else if (pct < 0.4) ring.classList.add("quiz-ring-low");
  setTimeout(() => { ring.style.strokeDashoffset = circumference - circumference * pct; }, 150);

  document.getElementById("quiz-ring-score").textContent = `${quizCorrect}/${total}`;
  document.getElementById("quiz-ring-pct").textContent = `${Math.round(pct * 100)}%`;
  document.getElementById("quiz-stat-correct").textContent = quizCorrect;
  document.getElementById("quiz-stat-wrong").textContent = quizWrong;
  document.getElementById("quiz-stat-streak").textContent = quizMaxStreak;

  let emoji, msg, sub;
  if (pct === 1) { emoji = "🏆"; msg = "Sempurna! Luar biasa!"; sub = "Semua jawaban benar. Kamu jenius!"; }
  else if (pct >= 0.8) { emoji = "🎉"; msg = "Bagus sekali!"; sub = "Hampir sempurna, tinggal sedikit lagi!"; }
  else if (pct >= 0.6) { emoji = "👍"; msg = "Lumayan baik!"; sub = "Terus belajar, kamu pasti bisa lebih baik!"; }
  else if (pct >= 0.4) { emoji = "📚"; msg = "Perlu belajar lebih!"; sub = "Masih banyak yang bisa dipelajari, semangat!"; }
  else { emoji = "💪"; msg = "Jangan menyerah!"; sub = "Coba lagi, setiap percobaan membuatmu lebih pintar!"; }

  document.getElementById("quiz-result-emoji").textContent = emoji;
  document.getElementById("quiz-result-msg").textContent = msg;
  document.getElementById("quiz-result-sub").textContent = sub;

  if (pct >= 0.6) quizLaunchConfetti(pct === 1);
}

// ── CONFETTI ──────────────────────────────────────────────────────────────
function quizLaunchConfetti(isPerfect) {
  const canvas = document.getElementById("quiz-confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const COLORS = ["#4a7a38", "#EF9F27", "#D4537E", "#378ADD", "#E24B4A", "#1D9E75"];
  const pieces = [];
  const count = isPerfect ? 100 : 60;
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: Math.random() * canvas.width, y: -10 - Math.random() * 60,
      r: 3 + Math.random() * 5, speed: 1.5 + Math.random() * 2.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      angle: 0, angleSpeed: 0.08 + Math.random() * 0.12,
      drift: (Math.random() - 0.5) * 1.5,
      shape: Math.random() > 0.5 ? "rect" : "circle"
    });
  }
  let frame = 0;
  const maxFrames = isPerfect ? 260 : 160;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.angle);
      ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
      ctx.fillStyle = p.color;
      if (p.shape === "rect") ctx.fillRect(-p.r / 2, -p.r / 2, p.r * 1.6, p.r * 0.55);
      else { ctx.beginPath(); ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
      p.y += p.speed; p.angle += p.angleSpeed;
      p.x += p.drift + Math.sin(p.angle) * 0.8;
      if (p.y > canvas.height + 10) p.y = -10;
    });
    frame++;
    if (frame < maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ── NAVIGASI TOMBOL ───────────────────────────────────────────────────────
function quizKeluar() {
  if (confirm("Yakin ingin keluar dari quiz? Progresmu tidak akan tersimpan.")) {
    window.location.href = "quiz.html";
  }
}

function quizBackToKategori() {
  document.getElementById("quiz-card").style.display = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  document.getElementById("quiz-main-screen").style.display = "none";
  document.getElementById("quiz-kategori-screen").style.display = "block";
}

function quizRestart() {
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = 264;
  ring.classList.remove("quiz-ring-perfect", "quiz-ring-low");
  document.getElementById("quiz-card").style.display = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  quizMulai(quizKategoriAktif);
}

// ============================================================
//  NAVBAR GUARD — tambahkan di bagian PALING BAWAH quiz.js
//  Mencegat klik navbar saat quiz sedang berjalan
// ============================================================

(function () {
  // Tandai apakah quiz sedang aktif (bukan di halaman kategori / hasil)
  // quizSedangBerjalan = true saat soal sedang dikerjakan
  window.quizSedangBerjalan = false;

  // Override quizMulai agar set flag saat quiz dimulai
  const _quizMulaiAsli = window.quizMulai;
  window.quizMulai = function (kategori) {
    window.quizSedangBerjalan = true;
    _quizMulaiAsli(kategori);
  };

  // Set flag false saat tampil hasil atau balik ke kategori
  const _quizShowResultAsli = window.quizShowResult;
  window.quizShowResult = function () {
    window.quizSedangBerjalan = false;
    _quizShowResultAsli();
  };

  const _quizBackToKategoriAsli = window.quizBackToKategori;
  window.quizBackToKategori = function () {
    window.quizSedangBerjalan = false;
    _quizBackToKategoriAsli();
  };

  const _quizRestartAsli = window.quizRestart;
  window.quizRestart = function () {
    window.quizSedangBerjalan = true;
    _quizRestartAsli();
  };

  // Intercept semua link navbar saat quiz aktif
  document.addEventListener("click", function (e) {
    // Cari elemen <a> yang diklik (bisa nested)
    const link = e.target.closest("a");
    if (!link) return;

    // Hanya berlaku jika quiz sedang berjalan
    if (!window.quizSedangBerjalan) return;

    const href = link.getAttribute("href");
    if (!href || href === "#" || href.startsWith("javascript")) return;

    // Jangan intercept link di dalam quiz itu sendiri
    if (link.closest(".quiz-shell")) return;

    // Tampilkan konfirmasi
    e.preventDefault();
    e.stopPropagation();

    const tujuan = link.textContent.trim() || href;
    const yakin = confirm(
      `Kamu sedang mengerjakan quiz.\nKeluar ke "${tujuan}"?\n\nProgresmu tidak akan tersimpan.`
    );
    if (yakin) {
      window.quizSedangBerjalan = false;
      window.location.href = href;
    }
  }, true); // capture phase agar tidak terblokir event lain

})();