// ============================================================
//  QUIZ INTERAKTIF — quiz.js
//  90 soal sesuai materi TeraNusa
//  30 Biota | 30 Sampah | 30 Pemeliharaan
// ============================================================

// ── BANK SOAL: BIOTA (30 soal) ────────────────────────────────────────────
const quizBankBiota = [
  // --- KONSERVASI ---
  {
    kat: "biota",
    text: "IUCN adalah singkatan dari ...",
    opts: ["International Union for Conservation of Nature", "Indonesian Union for Conservation of Nature", "International Unit for Climate and Nature", "Indonesian Unit for Climate Network"],
    ans: 0,
    exp: "IUCN (International Union for Conservation of Nature) adalah organisasi internasional yang menjadi otoritas global dalam bidang konservasi alam dan keanekaragaman hayati."
  },
  {
    kat: "biota",
    text: "Konservasi yang dilakukan langsung di habitat asli satwa disebut ...",
    opts: ["Konservasi Ex Situ", "Rehabilitasi", "Konservasi In Situ", "Penangkaran"],
    ans: 2,
    exp: "Konservasi In Situ dilakukan di habitat asli satwa, seperti taman nasional, cagar alam, dan suaka margasatwa."
  },
  {
    kat: "biota",
    text: "Contoh konservasi Ex Situ adalah ...",
    opts: ["Taman nasional", "Suaka margasatwa", "Kebun binatang dan penangkaran", "Cagar alam"],
    ans: 2,
    exp: "Konservasi Ex Situ dilakukan di luar habitat asli, misalnya di kebun binatang, penangkaran, dan kebun botani."
  },
  {
    kat: "biota",
    text: "Perjanjian internasional untuk mengendalikan perdagangan satwa dan tumbuhan liar adalah ...",
    opts: ["UNESCO", "CITES", "ASEAN", "WWF"],
    ans: 1,
    exp: "CITES adalah kerja sama internasional yang mengatur perdagangan satwa dan tumbuhan liar agar tidak terancam punah."
  },
  {
    kat: "biota",
    text: "Status konservasi IUCN yang paling kritis dan hampir punah adalah ...",
    opts: ["Vulnerable", "Near Threatened", "Critically Endangered", "Least Concern"],
    ans: 2,
    exp: "Critically Endangered (Kritis) adalah status IUCN untuk spesies yang menghadapi risiko kepunahan sangat tinggi dalam waktu dekat."
  },
  {
    kat: "biota",
    text: "Rehabilitasi satwa bertujuan untuk ...",
    opts: ["Menjual satwa langka", "Merawat satwa sakit agar bisa kembali ke alam", "Menangkap satwa liar", "Memindahkan satwa ke kebun binatang"],
    ans: 1,
    exp: "Rehabilitasi merawat satwa yang sakit atau terluka agar pulih dan dapat hidup kembali di habitatnya."
  },
  {
    kat: "biota",
    text: "Restorasi habitat bertujuan untuk ...",
    opts: ["Memburu satwa liar", "Mengembalikan ekosistem yang rusak ke kondisi semula", "Mendirikan kebun binatang", "Mengekspor satwa langka"],
    ans: 1,
    exp: "Restorasi habitat memperbaiki ekosistem yang rusak agar satwa punya tempat hidup yang layak kembali."
  },
  // --- FAUNA SUMATERA ---
  {
    kat: "biota",
    text: "Harimau Sumatera (Panthera tigris sumatrae) memiliki status konservasi ...",
    opts: ["Rentan (Vulnerable)", "Hampir Terancam (Near Threatened)", "Kritis (Critically Endangered)", "Tidak Terancam (Least Concern)"],
    ans: 2,
    exp: "Harimau Sumatera berstatus Kritis (Critically Endangered) menurut IUCN akibat perburuan dan deforestasi."
  },
  {
    kat: "biota",
    text: "Orang Utan Sumatera memiliki nama ilmiah ...",
    opts: ["Pongo pygmaeus", "Pongo abelii", "Panthera tigris sumatrae", "Elephas maximus sumatranus"],
    ans: 1,
    exp: "Orang Utan Sumatera bernama ilmiah Pongo abelii, berbeda dengan Orang Utan Kalimantan (Pongo pygmaeus)."
  },
  {
    kat: "biota",
    text: "Badak Sumatera adalah satu-satunya badak di dunia yang memiliki ...",
    opts: ["Satu cula besar", "Dua cula dan tubuh berbulu", "Kulit berlipat seperti perisai", "Warna putih di seluruh tubuh"],
    ans: 1,
    exp: "Badak Sumatera (Dicerorhinus sumatrensis) memiliki dua cula kecil dan tubuh ditutupi rambut kasar, menjadikannya unik di antara spesies badak."
  },
  {
    kat: "biota",
    text: "Gajah Sumatera (Elephas maximus sumatranus) berperan penting dalam ekosistem sebagai ...",
    opts: ["Predator puncak", "Penyebar biji dan pembuka jalur hutan", "Pengendali populasi serangga", "Penyaring air sungai"],
    ans: 1,
    exp: "Gajah Sumatera menyebarkan biji melalui kotorannya dan membuka jalur di hutan, sehingga membantu regenerasi vegetasi hutan."
  },
  {
    kat: "biota",
    text: "Monyet Kedih (Presbytis thomasi) endemik dari wilayah ...",
    opts: ["Kalimantan Timur", "Papua Barat", "Sulawesi Utara", "Aceh dan Sumatera Utara"],
    ans: 3,
    exp: "Monyet Kedih adalah primata endemik Sumatra bagian utara, terutama di wilayah Aceh dan Sumatera Utara."
  },
  // --- FLORA SUMATERA ---
  {
    kat: "biota",
    text: "Rafflesia dikenal sebagai tanaman parasit karena ...",
    opts: ["Memiliki daun sangat lebar", "Hidup menempel pada akar inang tanpa daun, batang, atau akar sendiri", "Tumbuh di air", "Menghasilkan racun mematikan"],
    ans: 1,
    exp: "Rafflesia tidak memiliki daun, batang, atau akar yang jelas dan sepenuhnya bergantung pada inang Tetrastigma untuk bertahan hidup."
  },
  {
    kat: "biota",
    text: "Anggrek Tien tumbuh dengan cara menempel pada pohon menggunakan ...",
    opts: ["Sulur panjang", "Akar udara", "Benang sari", "Rambut akar bawah tanah"],
    ans: 1,
    exp: "Anggrek Tien adalah tanaman epifit yang menggunakan akar udara untuk menempel pada pohon inang di hutan tropis Sumatera."
  },
  // --- FAUNA KALIMANTAN ---
  {
    kat: "biota",
    text: "Pesut Mahakam (Orcaella brevirostris) adalah mamalia air yang hidup di ...",
    opts: ["Laut Selatan Jawa", "Sungai Mahakam, Kalimantan Timur", "Danau Toba, Sumatera Utara", "Selat Sunda"],
    ans: 1,
    exp: "Pesut Mahakam adalah lumba-lumba air tawar yang hanya ditemukan di Sungai Mahakam, Kalimantan Timur, dan berstatus Kritis (Critically Endangered)."
  },
  {
    kat: "biota",
    text: "Bekantan (Nasalis larvatus) dikenal dengan ciri fisik yang sangat khas yaitu ...",
    opts: ["Bulu hitam pekat dan jambul di kepala", "Hidung panjang pada jantan dewasa", "Tanduk melengkung di kepala", "Mata besar seperti piring"],
    ans: 1,
    exp: "Bekantan dikenal dengan hidung panjang khas yang dimiliki jantan dewasa, menjadikannya primata yang mudah dikenali."
  },
  {
    kat: "biota",
    text: "Kucing Merah Kalimantan (Catopuma badia) berstatus ...",
    opts: ["Least Concern", "Vulnerable", "Endangered (Terancam Punah)", "Near Threatened"],
    ans: 2,
    exp: "Kucing Merah Kalimantan berstatus Endangered (Terancam Punah) menurut IUCN karena populasinya sangat kecil dan habitatnya terus berkurang."
  },
  // --- FLORA KALIMANTAN ---
  {
    kat: "biota",
    text: "Kantong Semar (Nepenthes) mendapatkan nutrisi dengan cara ...",
    opts: ["Berfotosintesis sangat cepat", "Menyerap mineral dari tanah subur", "Mencerna serangga yang terperangkap dalam kantongnya", "Menyerap air hujan lewat daun"],
    ans: 2,
    exp: "Kantong Semar adalah tanaman karnivora yang menggunakan cairan enzim dalam kantongnya untuk mencerna serangga sebagai sumber nitrogen."
  },
  {
    kat: "biota",
    text: "Pohon Tengkawang (Shorea spp.) khas Kalimantan menghasilkan ...",
    opts: ["Kayu hitam ebony", "Minyak nabati bernilai tinggi dari bijinya", "Getah karet alam", "Buah durian hutan"],
    ans: 1,
    exp: "Tengkawang menghasilkan minyak nabati (minyak tengkawang) dari bijinya yang memiliki nilai ekonomi dan ekologis tinggi."
  },
  // --- FAUNA JAWA ---
  {
    kat: "biota",
    text: "Badak Jawa (Rhinoceros sondaicus) berbeda dari Badak Sumatera karena ...",
    opts: ["Memiliki dua cula dan tubuh berbulu", "Hanya memiliki satu cula kecil dan tidak berbulu", "Hidup di hutan pegunungan tinggi", "Berwarna putih dan sangat besar"],
    ans: 1,
    exp: "Badak Jawa hanya memiliki satu cula kecil dan kulit berlipat menyerupai perisai, berbeda dari Badak Sumatera yang memiliki dua cula dan berbulu."
  },
  {
    kat: "biota",
    text: "Elang Jawa (Nisaetus bartelsi) dikenal sebagai simbol nasional karena ...",
    opts: ["Merupakan burung terbesar di dunia", "Dijadikan inspirasi lambang negara Garuda Pancasila", "Dapat terbang paling cepat di Indonesia", "Merupakan satu-satunya elang di Asia"],
    ans: 1,
    exp: "Elang Jawa diyakini menjadi inspirasi lambang negara Indonesia, Garuda Pancasila, dan menjadi satwa identitas nasional."
  },
  {
    kat: "biota",
    text: "Owa Jawa (Hylobates moloch) bergerak di antara pepohonan menggunakan ...",
    opts: ["Sayap yang kuat", "Lengan panjang untuk bergelantungan", "Ekor prehensil yang kuat", "Kaki belakang yang sangat kuat"],
    ans: 1,
    exp: "Owa Jawa memiliki lengan sangat panjang yang memungkinkannya bergelantungan dan bergerak lincah dari satu cabang ke cabang lain."
  },
  // --- FLORA JAWA ---
  {
    kat: "biota",
    text: "Edelweis Jawa (Anaphalis javanica) tumbuh di ketinggian ...",
    opts: ["0–500 meter di daerah pantai", "500–1.000 meter di lereng bawah", "Sekitar 1.800–3.000 meter di pegunungan", "Di bawah laut pada kedalaman tertentu"],
    ans: 2,
    exp: "Edelweis Jawa tumbuh di pegunungan Jawa pada ketinggian sekitar 1.800–3.000 meter dengan tanah berpasir atau berbatu dan suhu sejuk."
  },
  {
    kat: "biota",
    text: "Kokoleceran adalah flora endemik yang menjadi identitas Provinsi ...",
    opts: ["Jawa Barat", "Jawa Tengah", "Banten", "DI Yogyakarta"],
    ans: 2,
    exp: "Kokoleceran endemik Banten, terutama di Taman Nasional Ujung Kulon, dan dijadikan flora identitas Provinsi Banten."
  },
  // --- FAUNA SULAWESI ---
  {
    kat: "biota",
    text: "Burung Maleo (Macrocephalon maleo) memiliki perilaku unik dalam berkembang biak, yaitu ...",
    opts: ["Mengerami telurnya selama 3 bulan", "Mengubur telurnya di pasir pantai atau tanah vulkanik agar menetas dengan panas alami", "Menitipkan telurnya ke sarang burung lain", "Melahirkan anak seperti mamalia"],
    ans: 1,
    exp: "Burung Maleo mengubur telurnya di pasir pantai atau tanah vulkanik untuk memanfaatkan panas alami, tanpa dierami induknya."
  },
  {
    kat: "biota",
    text: "Tarsius adalah primata yang aktif pada malam hari dan dikenal dengan ...",
    opts: ["Hidung panjang yang khas", "Mata sangat besar yang hampir memenuhi wajah", "Warna bulu hitam pekat", "Tanduk kecil di atas kepala"],
    ans: 1,
    exp: "Tarsius memiliki mata yang sangat besar hampir memenuhi seluruh wajahnya, membantu penglihatannya di malam hari."
  },
  {
    kat: "biota",
    text: "Anoa adalah mamalia endemik Sulawesi yang termasuk keluarga ...",
    opts: ["Kerbau (Bovidae)", "Rusa (Cervidae)", "Babi hutan (Suidae)", "Kuda (Equidae)"],
    ans: 0,
    exp: "Anoa (Bubalus spp.) termasuk keluarga Bovidae seperti kerbau, namun berukuran jauh lebih kecil sehingga disebut 'kerbau mini'."
  },
  // --- FAUNA PAPUA ---
  {
    kat: "biota",
    text: "Burung Cendrawasih dijuluki 'Bird of Paradise' karena ...",
    opts: ["Dapat terbang paling tinggi di dunia", "Bulu indah berwarna cerah dan tarian kawin yang memukau", "Bertelur paling besar di antara semua burung", "Hidup paling lama di antara semua burung"],
    ans: 1,
    exp: "Cendrawasih dijuluki Bird of Paradise karena keindahan bulunya yang berwarna cerah dan tarian kawin yang sangat memukau."
  },
  {
    kat: "biota",
    text: "Kanguru Pohon (Dendrolagus) berbeda dari kanguru darat karena ...",
    opts: ["Tidak memiliki kantung (marsupium)", "Tubuh lebih kompak dengan ekor panjang untuk keseimbangan di pohon", "Berukuran jauh lebih besar", "Hidup di air dan hutan"],
    ans: 1,
    exp: "Kanguru Pohon memiliki tubuh lebih kompak dan ekor panjang untuk keseimbangan di pohon, serta cakar kuat untuk memanjat."
  },
  {
    kat: "biota",
    text: "Organisme yang hanya ditemukan di satu wilayah geografis tertentu di dunia disebut ...",
    opts: ["Parasit", "Endemik", "Invasif", "Migran"],
    ans: 1,
    exp: "Endemik berarti organisme tersebut hanya terdapat di daerah geografis tertentu dan tidak ditemukan secara alami di tempat lain."
  },
  {
    kat: "biota",
    text: "Menanam kembali hutan yang telah gundul disebut ...",
    opts: ["Aforestasi", "Reboisasi", "Domestikasi", "Translokasi"],
    ans: 1,
    exp: "Reboisasi adalah kegiatan menanam kembali pohon di kawasan hutan yang telah gundul untuk memulihkan ekosistem."
  }
];

// ── BANK SOAL: SAMPAH (30 soal) ───────────────────────────────────────────
const quizBankSampah = [
  // --- JENIS SAMPAH ---
  {
    kat: "sampah",
    text: "Berdasarkan materi TeraNusa, sampah terbagi menjadi berapa jenis utama?",
    opts: ["2 jenis", "3 jenis", "5 jenis", "7 jenis"],
    ans: 2,
    exp: "Sampah terbagi menjadi 5 jenis utama: organik, kertas, anorganik, B3 (Bahan Berbahaya dan Beracun), dan residu."
  },
  {
    kat: "sampah",
    text: "Yang termasuk sampah organik adalah ...",
    opts: ["Botol plastik dan kaca", "Sisa makanan, ranting, dan kotoran hewan", "Baterai dan pestisida", "Popok sekali pakai dan puntung rokok"],
    ans: 1,
    exp: "Sampah organik adalah sampah yang mudah terurai seperti sisa makanan, ranting, dan kotoran hewan."
  },
  {
    kat: "sampah",
    text: "Sampah kertas seperti buku, karton, dan kardus termasuk jenis sampah yang ...",
    opts: ["Tidak bisa terurai", "Mudah didaur ulang dan terurai", "Termasuk B3", "Tidak bisa didaur ulang"],
    ans: 1,
    exp: "Sampah kertas (buku, karton, kardus) termasuk sampah padat yang mudah didaur ulang dan dapat terurai secara alami."
  },
  {
    kat: "sampah",
    text: "Plastik dan kaca termasuk jenis sampah ...",
    opts: ["Organik", "Kertas", "Anorganik", "Residu"],
    ans: 2,
    exp: "Plastik dan kaca termasuk sampah anorganik yang sulit terurai secara alami di lingkungan."
  },
  {
    kat: "sampah",
    text: "Baterai, pestisida, dan limbah medis termasuk jenis sampah ...",
    opts: ["Organik", "Kertas", "Anorganik", "B3 (Bahan Berbahaya dan Beracun)"],
    ans: 3,
    exp: "Baterai, pestisida, dan limbah medis termasuk sampah B3 karena mengandung bahan berbahaya dan beracun bagi lingkungan."
  },
  {
    kat: "sampah",
    text: "Popok sekali pakai dan puntung rokok termasuk jenis sampah ...",
    opts: ["Organik", "B3", "Residu", "Kertas"],
    ans: 2,
    exp: "Popok sekali pakai dan puntung rokok termasuk sampah residu yang tidak dapat didaur ulang."
  },
  // --- WAKTU TERURAI ---
  {
    kat: "sampah",
    text: "Berapa lama waktu yang dibutuhkan sisa makanan dan daun kering untuk terurai?",
    opts: ["2–4 hari", "2–4 minggu", "2–4 bulan", "2–4 tahun"],
    ans: 1,
    exp: "Sampah organik seperti sisa makanan dan daun kering membutuhkan waktu 2–4 minggu untuk terurai secara alami."
  },
  {
    kat: "sampah",
    text: "Kertas seperti koran dan kardus membutuhkan waktu berapa lama untuk terurai?",
    opts: ["2–4 minggu", "2–5 bulan", "5–10 tahun", "100 tahun lebih"],
    ans: 1,
    exp: "Sampah kertas seperti koran dan kardus membutuhkan waktu sekitar 2–5 bulan untuk terurai."
  },
  {
    kat: "sampah",
    text: "Kantong plastik membutuhkan waktu sangat lama untuk terurai, yaitu ...",
    opts: ["10–50 tahun", "50–100 tahun", "100–1.000 tahun", "Tidak terurai sama sekali"],
    ans: 2,
    exp: "Kantong plastik membutuhkan waktu 100 hingga 1.000 tahun untuk terurai, menjadikannya salah satu sampah paling berbahaya bagi lingkungan."
  },
  {
    kat: "sampah",
    text: "Jenis sampah yang praktis tidak dapat terurai di alam adalah ...",
    opts: ["Daun kering", "Kardus", "Kain katun", "Styrofoam dan kaca"],
    ans: 3,
    exp: "Styrofoam dan kaca praktis tidak dapat terurai di alam. Kaca hanya bisa pecah menjadi serpihan lebih kecil, sedangkan Styrofoam tetap bertahan hampir selamanya."
  },
  {
    kat: "sampah",
    text: "Popok sekali pakai termasuk sampah residu yang membutuhkan waktu terurai sekitar ...",
    opts: ["5–10 tahun", "50 tahun", "±500 tahun", "1.000 tahun"],
    ans: 2,
    exp: "Popok sekali pakai membutuhkan waktu sekitar 500 tahun untuk terurai karena mengandung bahan sintetis yang sangat sulit terurai."
  },
  // --- DAMPAK SAMPAH ---
  {
    kat: "sampah",
    text: "Sampah organik yang membusuk dapat menghasilkan gas berbahaya berupa ...",
    opts: ["Oksigen", "Gas metana", "Karbon dioksida murni", "Nitrogen"],
    ans: 1,
    exp: "Sampah organik yang membusuk menghasilkan gas metana yang berbau dan berbahaya, serta berkontribusi pada efek rumah kaca."
  },
  {
    kat: "sampah",
    text: "Dampak kesehatan dari sampah organik yang tidak dikelola adalah ...",
    opts: ["Menyebabkan kanker secara langsung", "Menjadi sarang lalat dan tikus pemicu penyakit diare, malaria, leptospirosis", "Merusak lapisan ozon", "Menyebabkan gempa bumi"],
    ans: 1,
    exp: "Sampah organik yang menumpuk menjadi sarang lalat, tikus, dan nyamuk yang dapat memicu penyakit diare, malaria, dan leptospirosis."
  },
  {
    kat: "sampah",
    text: "Mikroplastik berbahaya bagi kesehatan manusia karena ...",
    opts: ["Menyebabkan banjir", "Masuk ke rantai makanan dan berisiko mengganggu hormon", "Menghalangi sinar matahari", "Membuat tanah menjadi subur"],
    ans: 1,
    exp: "Mikroplastik dari sampah plastik yang terurai masuk ke rantai makanan melalui air dan makanan, berisiko mengganggu sistem hormon manusia."
  },
  {
    kat: "sampah",
    text: "Sampah B3 seperti baterai dan pestisida berbahaya karena ...",
    opts: ["Beratnya besar sehingga merusak jalan", "Mengandung logam berat dan zat kimia beracun yang mencemari tanah dan air", "Berbau sangat menyengat", "Mudah meledak di udara terbuka"],
    ans: 1,
    exp: "Sampah B3 mengandung logam berat dan zat kimia beracun yang dapat mencemari tanah dan air, serta menyebabkan keracunan dan kanker."
  },
  // --- PRINSIP 3R ---
  {
    kat: "sampah",
    text: "Reduce dalam pengelolaan sampah berarti ...",
    opts: ["Mendaur ulang sampah menjadi produk baru", "Menggunakan kembali barang bekas", "Mengurangi penggunaan barang sekali pakai sejak awal", "Membakar sampah agar volumenya berkurang"],
    ans: 2,
    exp: "Reduce berarti mengurangi penggunaan barang sekali pakai (seperti plastik) sehingga jumlah sampah yang dihasilkan berkurang dari sumbernya."
  },
  {
    kat: "sampah",
    text: "Contoh penerapan Reuse dalam kehidupan sehari-hari adalah ...",
    opts: ["Membakar sampah plastik", "Membuang botol minum setelah dipakai", "Membawa tumbler atau tas belanja sendiri yang bisa dipakai berulang", "Mengubur sampah di halaman"],
    ans: 2,
    exp: "Reuse berarti memanfaatkan kembali barang yang masih layak pakai, seperti membawa tumbler atau tas belanja sendiri untuk mengurangi sampah."
  },
  {
    kat: "sampah",
    text: "Recycle berarti ...",
    opts: ["Mengurangi penggunaan barang", "Menggunakan kembali barang bekas", "Mendaur ulang sampah menjadi produk baru", "Membakar sampah dengan teknologi tinggi"],
    ans: 2,
    exp: "Recycle adalah proses mendaur ulang sampah menjadi produk baru, misalnya botol plastik menjadi serat kain."
  },
  {
    kat: "sampah",
    text: "Composting adalah metode pengelolaan sampah yang mengubah ...",
    opts: ["Plastik menjadi bahan bakar", "Sampah organik seperti sisa makanan dan daun menjadi pupuk kompos", "Kertas bekas menjadi papan kayu", "Logam bekas menjadi perhiasan"],
    ans: 1,
    exp: "Composting mengolah sampah organik (sisa makanan, daun) menjadi pupuk kompos yang menyuburkan tanah."
  },
  {
    kat: "sampah",
    text: "Bank sampah berfungsi untuk ...",
    opts: ["Menyimpan uang milik warga", "Warga menabung sampah anorganik untuk ditukar dengan uang atau barang", "Membakar sampah secara terpusat", "Menyimpan sampah B3 selamanya"],
    ans: 1,
    exp: "Bank sampah adalah sistem di mana warga mengumpulkan sampah anorganik bernilai ekonomis untuk ditabung dan ditukar dengan uang atau barang."
  },
  // --- METODE PENGELOLAAN ---
  {
    kat: "sampah",
    text: "Metode pengelolaan sampah yang mengubah sampah menjadi energi listrik atau bahan bakar disebut ...",
    opts: ["Composting", "Sanitary Landfill", "Waste to Energy", "Bank Sampah"],
    ans: 2,
    exp: "Waste to Energy adalah metode mengubah sampah menjadi energi listrik atau bahan bakar yang dapat dimanfaatkan kembali."
  },
  {
    kat: "sampah",
    text: "Sanitary Landfill berbeda dari tempat pembuangan biasa karena ...",
    opts: ["Sampah dibakar semuanya", "Dilengkapi sistem lapisan tanah agar tidak mencemari air tanah", "Sampah disortir secara otomatis dengan mesin", "Semua sampah langsung didaur ulang"],
    ans: 1,
    exp: "Sanitary Landfill adalah TPA dengan sistem lapisan tanah khusus yang mencegah cairan sampah (lindi) mencemari air tanah di sekitarnya."
  },
  {
    kat: "sampah",
    text: "Incinerasi adalah metode pengelolaan sampah dengan cara ...",
    opts: ["Mengubur sampah dalam tanah", "Membakar sampah dengan teknologi tinggi sambil mengendalikan polusi", "Mendaur ulang plastik menjadi pelet", "Mengomposter semua jenis sampah"],
    ans: 1,
    exp: "Incinerasi membakar sampah dengan teknologi tinggi untuk mengurangi volume sampah, sambil mengendalikan emisi polutan yang dihasilkan."
  },
  {
    kat: "sampah",
    text: "Langkah pertama yang paling penting dalam pengelolaan sampah rumah tangga adalah ...",
    opts: ["Langsung membuang ke TPA", "Membakar di halaman", "Pemilahan sampah sejak dari rumah menjadi organik, anorganik, B3, dan residu", "Mengumpulkan semua jenis sampah dalam satu wadah"],
    ans: 2,
    exp: "Pemilahan sampah sejak dari sumber (rumah tangga) adalah langkah pertama dan paling krusial agar sampah dapat dikelola dengan tepat."
  },
  {
    kat: "sampah",
    text: "Gas metana yang dihasilkan dari penguraian sampah organik dapat dimanfaatkan sebagai ...",
    opts: ["Bahan bangunan", "Sumber energi biogas", "Pupuk kimia", "Pewarna alami"],
    ans: 1,
    exp: "Gas metana dari dekomposisi sampah organik dapat dikumpulkan dan digunakan sebagai sumber energi biogas yang ramah lingkungan."
  },
  {
    kat: "sampah",
    text: "Untuk mencegah sampah organik di dalam komposter menghasilkan gas metana berbau, yang harus dilakukan adalah ...",
    opts: ["Menutup rapat tanpa lubang udara sama sekali", "Memastikan ada aliran udara yang cukup dan sering dibalik", "Menambahkan air sebanyak mungkin", "Mencampurkan plastik ke dalamnya"],
    ans: 1,
    exp: "Komposter harus memiliki aliran udara yang cukup dan rutin dibalik (aerasi) agar proses pembusukan alami berjalan optimal tanpa menghasilkan gas metana berlebih."
  },
  {
    kat: "sampah",
    text: "Puntung rokok termasuk sampah residu yang berbahaya karena ...",
    opts: ["Beratnya sangat besar", "Mengandung zat beracun dan sulit terurai di lingkungan", "Mudah terbakar secara spontan", "Menarik hewan liar ke pemukiman"],
    ans: 1,
    exp: "Puntung rokok mengandung zat beracun dari tembakau dan filter plastik yang sangat sulit terurai, sehingga mencemari lingkungan dalam jangka panjang."
  },
  {
    kat: "sampah",
    text: "Tempat sampah minimal harus dibagi menjadi berapa wadah terpisah menurut prinsip dasar pemeliharaan sampah?",
    opts: ["Satu wadah untuk semua jenis", "Dua wadah: sampah basah dan kering", "Minimal tiga: Organik, Anorganik, dan B3/Residu", "Lima wadah untuk setiap jenis"],
    ans: 2,
    exp: "Prinsip dasar pemeliharaan sampah mengharuskan minimal tiga wadah terpisah: Organik, Anorganik, dan B3/Residu agar pengelolaan lebih efektif."
  },
  {
    kat: "sampah",
    text: "Sampah anorganik seperti botol dan kaleng sebaiknya dibilas dan dikeringkan sebelum dibuang karena ...",
    opts: ["Agar lebih mudah dibakar", "Agar tidak berbau dan tidak mengotori sampah lain", "Supaya lebih berat dan mudah ditimbang", "Agar dapat terurai lebih cepat"],
    ans: 1,
    exp: "Sampah anorganik perlu dibilas dan dikeringkan agar tidak berbau busuk dan tidak mengotori sampah lain di tempat penampungan."
  },
  {
    kat: "sampah",
    text: "Dampak membuang sampah plastik ke laut bagi satwa adalah ...",
    opts: ["Menjadi makanan bergizi bagi ikan", "Plastik termakan satwa laut seperti penyu dan ikan sehingga membahayakan hidupnya", "Membuat laut lebih bersih", "Menjadi tempat berlindung hewan kecil"],
    ans: 1,
    exp: "Plastik yang dibuang ke laut dapat termakan oleh satwa laut seperti penyu, ikan, dan burung laut sehingga menyebabkan kematian atau cedera serius."
  }
];

// ── BANK SOAL: PEMELIHARAAN (30 soal) ─────────────────────────────────────
const quizBankPemeliharaan = [
  // --- PEMELIHARAAN VEGETASI: POHON ---
  {
    kat: "pemeliharaan",
    text: "Jarak tanam minimal antar pohon yang baik adalah ...",
    opts: ["10–50 cm", "1–2 meter", "3–5 meter", "10 meter ke atas"],
    ans: 2,
    exp: "Pohon wajib diberi jarak minimal 3–5 meter antar pohon agar memiliki ruang tumbuh yang cukup untuk akar dan tajuknya."
  },
  {
    kat: "pemeliharaan",
    text: "Tujuan pemangkasan (pruning) pada pohon adalah ...",
    opts: ["Menghilangkan semua daun agar pohon istirahat", "Memotong cabang yang kering dan mati agar energi fokus ke pertumbuhan sehat", "Mempercepat berbuah dengan memotong batang utama", "Mengurangi tinggi pohon agar tidak terlalu besar"],
    ans: 1,
    exp: "Pemangkasan bertujuan memotong cabang kering dan mati sehingga energi pohon dapat difokuskan ke pertumbuhan bagian yang sehat."
  },
  {
    kat: "pemeliharaan",
    text: "Jenis pupuk yang dianjurkan untuk pemeliharaan pohon adalah ...",
    opts: ["Pupuk kimia sintetis konsentrasi tinggi", "Pupuk organik seperti kompos atau pupuk kandang", "Cairan pestisida yang diencerkan", "Garam dapur yang dilarutkan dalam air"],
    ans: 1,
    exp: "Untuk pohon, disarankan memberikan pupuk organik seperti kompos atau pupuk kandang yang lebih ramah lingkungan dan aman bagi ekosistem sekitar."
  },
  {
    kat: "pemeliharaan",
    text: "Penyiraman pohon yang masih bibit sebaiknya dilakukan ...",
    opts: ["Sekali sebulan saja", "Secara teratur hingga pohon tumbuh cukup kuat", "Tidak perlu disiram karena pohon tahan kering", "Hanya saat musim kemarau"],
    ans: 1,
    exp: "Bibit pohon perlu disiram secara teratur karena akarnya belum cukup kuat untuk menyerap air dari dalam tanah secara mandiri."
  },
  // --- PEMELIHARAAN VEGETASI: SEMAK ---
  {
    kat: "pemeliharaan",
    text: "Perawatan utama dan paling penting untuk tanaman semak hias adalah ...",
    opts: ["Pemberian pupuk kimia setiap hari", "Pemangkasan rutin", "Penggantian tanah setiap minggu", "Penyimpanan di dalam ruangan"],
    ans: 1,
    exp: "Pemangkasan rutin adalah kunci utama merawat semak karena menjaga bentuk, mendorong pertumbuhan tunas baru, dan menjaga kesehatan tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Sebagian besar tanaman semak hias membutuhkan ...",
    opts: ["Tempat gelap tanpa cahaya", "Sinar matahari penuh", "Suhu di bawah 10 derajat Celcius", "Air laut untuk penyiraman"],
    ans: 1,
    exp: "Sebagian besar tanaman semak hias membutuhkan sinar matahari penuh untuk tumbuh optimal dan menghasilkan warna daun yang indah."
  },
  {
    kat: "pemeliharaan",
    text: "Frekuensi penyiraman tanaman semak yang ideal adalah ...",
    opts: ["Sekali sebulan", "Sekali seminggu", "1–2 kali sehari tergantung cuaca", "Setiap 2 jam sekali"],
    ans: 2,
    exp: "Tanaman semak sebaiknya disiram 1–2 kali sehari, disesuaikan dengan kondisi cuaca agar tanah tidak terlalu kering atau terlalu basah."
  },
  // --- PEMELIHARAAN VEGETASI: HERBA ---
  {
    kat: "pemeliharaan",
    text: "Media tanam terbaik untuk tanaman herba adalah ...",
    opts: ["Pasir murni tanpa campuran", "Tanah keras dan padat", "Media gembur yang kaya bahan organik", "Kerikil dan batu bata hancur"],
    ans: 2,
    exp: "Tanaman herba tumbuh optimal di media tanam yang gembur dan kaya bahan organik sehingga akar dapat berkembang dengan baik dan menyerap nutrisi maksimal."
  },
  {
    kat: "pemeliharaan",
    text: "Untuk tanaman herba konsumsi seperti kemangi atau mint, perawatan khusus yang perlu dilakukan adalah ...",
    opts: ["Menyiram dengan air garam", "Pemanenan atau pemetikan rutin untuk merangsang pertumbuhan daun baru", "Dipindahkan ke tempat gelap setelah berbunga", "Diberi pupuk kimia dosis tinggi"],
    ans: 1,
    exp: "Herba konsumsi seperti kemangi perlu dipanen atau dipetik secara rutin agar tanaman terus menghasilkan daun baru yang segar dan segar."
  },
  // --- PEMELIHARAAN VEGETASI: TUMBUHAN AIR ---
  {
    kat: "pemeliharaan",
    text: "Hal paling penting dalam merawat tumbuhan air adalah ...",
    opts: ["Mengasinkan air dengan garam laut", "Menjaga kualitas air tetap bersih dari limbah sabun dan zat kimia", "Menutup kolam agar tidak terkena sinar matahari", "Membiarkan air mengalir deras setiap saat"],
    ans: 1,
    exp: "Kualitas air sangat penting bagi tumbuhan air. Air harus dijaga tetap bersih dan bebas dari limbah sabun atau zat kimia berbahaya."
  },
  {
    kat: "pemeliharaan",
    text: "Daun atau bunga tumbuhan air yang sudah membusuk harus segera ...",
    opts: ["Dibiarkan saja sebagai pupuk alami di dalam air", "Diangkat dan dibersihkan dari kolam", "Ditenggelamkan ke dasar kolam", "Dipindahkan ke pot tanah kering"],
    ans: 1,
    exp: "Daun dan bunga tumbuhan air yang membusuk harus segera diangkat agar tidak mencemari kualitas air dan menyebarkan penyakit ke tanaman lain."
  },
  // --- PRINSIP DASAR PEMELIHARAAN VEGETASI ---
  {
    kat: "pemeliharaan",
    text: "Dalam pemupukan tanaman, nitrogen (N) berperan penting untuk ...",
    opts: ["Pertumbuhan buah dan biji", "Pertumbuhan bunga", "Pertumbuhan daun dan batang", "Pertumbuhan akar dalam"],
    ans: 2,
    exp: "Nitrogen berperan penting dalam pertumbuhan daun dan batang tanaman, sehingga dibutuhkan terutama pada fase vegetatif."
  },
  {
    kat: "pemeliharaan",
    text: "Fosfor (P) dalam pupuk berperan untuk mendukung ...",
    opts: ["Pertumbuhan daun hijau lebat", "Pertumbuhan bunga dan biji", "Penyerapan air oleh batang", "Produksi klorofil tanaman"],
    ans: 1,
    exp: "Fosfor berperan dalam pertumbuhan bunga, biji, dan perkembangan sistem perakaran yang kuat pada tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Kalium (K) dalam pupuk berfungsi untuk mendukung ...",
    opts: ["Pertumbuhan daun", "Pertumbuhan batang cepat", "Pertumbuhan buah dan ketahanan tanaman", "Produksi bau harum bunga"],
    ans: 2,
    exp: "Kalium berperan dalam pertumbuhan buah dan meningkatkan ketahanan tanaman terhadap penyakit dan kondisi lingkungan yang tidak menguntungkan."
  },
  {
    kat: "pemeliharaan",
    text: "Pengendalian hama secara alami yang dianjurkan dalam pemeliharaan vegetasi adalah ...",
    opts: ["Menyiram tanaman dengan herbisida konsentrasi tinggi", "Menggunakan pestisida alami seperti neem oil atau larutan bawang putih", "Memotong semua bagian tanaman yang terserang", "Menaburkan garam di sekitar tanaman"],
    ans: 1,
    exp: "Pengendalian hama secara alami menggunakan neem oil atau larutan bawang putih lebih aman bagi lingkungan dan tidak merusak ekosistem sekitar."
  },
  // --- PEMELIHARAAN HEWAN PELIHARAAN ---
  {
    kat: "pemeliharaan",
    text: "Pemberian makanan hewan peliharaan harus disesuaikan dengan ...",
    opts: ["Warna bulu dan ukuran kandang", "Usia, ras, dan kondisi kesehatan hewan", "Harga makanan yang tersedia", "Selera pemiliknya"],
    ans: 1,
    exp: "Setiap hewan peliharaan memiliki kebutuhan nutrisi berbeda tergantung usia, ras, dan kondisi kesehatannya, sehingga pemberian makan harus disesuaikan."
  },
  {
    kat: "pemeliharaan",
    text: "Vaksinasi pada hewan peliharaan dijadwalkan secara ...",
    opts: ["Hanya sekali seumur hidup", "Setiap bulan tanpa jeda", "Rutin setiap tahun sesuai jadwal dokter hewan", "Hanya saat hewan terlihat sakit"],
    ans: 2,
    exp: "Vaksinasi rutin tahunan penting untuk menjaga kekebalan hewan peliharaan terhadap berbagai penyakit menular."
  },
  {
    kat: "pemeliharaan",
    text: "Hewan domestik seperti kucing dan anjing juga membutuhkan ...",
    opts: ["Dibiarkan menyendiri tanpa interaksi", "Stimulasi mental dan interaksi sosial", "Dikurung di kandang 24 jam penuh", "Diberi makan hanya sekali sehari"],
    ans: 1,
    exp: "Hewan domestik membutuhkan stimulasi mental dan interaksi sosial untuk menjaga kesehatan psikologis dan mencegah stres."
  },
  {
    kat: "pemeliharaan",
    text: "Kebersihan kandang dan litter box hewan peliharaan sebaiknya dibersihkan ...",
    opts: ["Sekali setahun", "Sebulan sekali", "Setiap hari", "Hanya saat terlihat sangat kotor"],
    ans: 2,
    exp: "Kandang dan litter box harus dibersihkan setiap hari untuk mencegah penumpukan bakteri dan menjaga kesehatan hewan peliharaan."
  },
  // --- PEMELIHARAAN HEWAN AKUATIK ---
  {
    kat: "pemeliharaan",
    text: "Filter akuarium harus bekerja selama ...",
    opts: ["6 jam sehari", "12 jam sehari", "24 jam penuh setiap hari", "Hanya saat ikan terlihat sakit"],
    ans: 2,
    exp: "Filter akuarium harus bekerja 24 jam penuh untuk menyaring amonia dari sisa kotoran dan menjaga kualitas air tetap baik bagi ikan."
  },
  {
    kat: "pemeliharaan",
    text: "Filtrasi dan aerasi pada akuarium berfungsi untuk ...",
    opts: ["Menambah warna air agar menarik", "Menyaring amonia dan menambah oksigen dalam air", "Menghangatkan air akuarium", "Memberi cahaya tambahan bagi ikan"],
    ans: 1,
    exp: "Filtrasi menyaring zat berbahaya seperti amonia, sedangkan aerasi memastikan oksigen terlarut cukup untuk kebutuhan hewan akuatik."
  },
  {
    kat: "pemeliharaan",
    text: "Penggantian air akuarium yang baik dilakukan dengan mengganti ...",
    opts: ["100% air sekaligus agar benar-benar bersih", "50% air setiap hari", "10–20% air secara berkala", "Tidak perlu diganti selama filter berjalan"],
    ans: 2,
    exp: "Mengganti 10–20% air secara berkala menjaga kualitas air tanpa mengganggu keseimbangan bakteri baik dan ekosistem di dalam akuarium."
  },
  // --- PEMELIHARAAN HEWAN UNGGAS ---
  {
    kat: "pemeliharaan",
    text: "Makanan pokok yang umum diberikan kepada hewan unggas adalah ...",
    opts: ["Daging mentah dan ikan segar", "Biji-bijian berkualitas sebagai makanan utama", "Rumput laut dan lumut", "Serangga hidup saja"],
    ans: 1,
    exp: "Biji-bijian berkualitas merupakan makanan pokok bagi sebagian besar jenis unggas dan menjadi sumber nutrisi utama mereka."
  },
  {
    kat: "pemeliharaan",
    text: "Burung kicau memerlukan perawatan khusus berupa ...",
    opts: ["Dikurung di tempat gelap agar fokus", "Pemasteran suara dan interaksi rutin", "Diberi makan hanya sekali seminggu", "Dilarang terkena sinar matahari"],
    ans: 1,
    exp: "Burung kicau memerlukan pemasteran suara (diperdengarkan suara burung lain) dan interaksi rutin untuk meningkatkan kualitas kicauannya."
  },
  {
    kat: "pemeliharaan",
    text: "Vitamin dan suplemen untuk unggas sebaiknya diberikan melalui ...",
    opts: ["Disuntikkan langsung ke tubuh burung", "Dicampurkan ke dalam air minum", "Dioleskan ke bulu burung", "Disemprotkan ke kandang"],
    ans: 1,
    exp: "Suplemen vitamin untuk unggas umumnya diberikan dengan mencampurkannya ke dalam air minum agar mudah dikonsumsi oleh burung."
  },
  // --- PEMELIHARAAN HEWAN EKSOTIK ---
  {
    kat: "pemeliharaan",
    text: "Yang dimaksud mikroklimat dalam pemeliharaan hewan eksotik adalah ...",
    opts: ["Ukuran kandang yang sangat kecil", "Manipulasi suhu dan kelembapan di dalam kandang sesuai habitat asli hewan", "Jenis makanan yang diberikan", "Warna kandang yang menyerupai alam"],
    ans: 1,
    exp: "Mikroklimat dalam pemeliharaan hewan eksotik berarti memanipulasi suhu dan kelembapan kandang agar menyerupai kondisi habitat asli hewan tersebut."
  },
  {
    kat: "pemeliharaan",
    text: "Mayoritas hewan eksotik seperti reptil dan tarantula membutuhkan pakan berupa ...",
    opts: ["Makanan kemasan kering seperti pelet", "Pakan hidup sesuai kebiasaan alami di alam", "Buah-buahan segar sebagai satu-satunya makanan", "Dedaunan kering tanpa kandungan protein"],
    ans: 1,
    exp: "Hewan eksotik seperti reptil dan tarantula membutuhkan pakan hidup (seperti jangkrik atau ulat) karena sesuai dengan instink berburu di alam liarnya."
  },
  {
    kat: "pemeliharaan",
    text: "Kandang hewan eksotik harus memiliki ...",
    opts: ["Ukuran sekecil mungkin agar hemat tempat", "Sistem penguncian yang sangat aman agar hewan tidak dapat keluar", "Jendela besar tanpa kunci untuk sirkulasi udara", "Bahan dari kayu lunak yang mudah dikunyah"],
    ans: 1,
    exp: "Kandang hewan eksotik wajib memiliki sistem penguncian yang sangat aman untuk mencegah hewan melarikan diri, demi keselamatan hewan dan manusia di sekitarnya."
  },
  // --- UPAYA KONSERVASI VEGETASI ---
  {
    kat: "pemeliharaan",
    text: "Kebun Raya dan Bank Benih berfungsi untuk ...",
    opts: ["Menjual tanaman langka secara komersial", "Menyimpan dan membiakkan vegetasi langka agar tidak punah", "Menyimpan benih sayuran untuk pertanian", "Mengolah hasil hutan menjadi produk kayu"],
    ans: 1,
    exp: "Kebun Raya dan Bank Benih adalah fasilitas konservasi ex situ yang menyimpan dan membiakkan vegetasi langka untuk mencegah kepunahan."
  },
  {
    kat: "pemeliharaan",
    text: "Tanda bahwa tanaman sedang kekurangan air adalah ...",
    opts: ["Daun berwarna hijau cerah dan segar", "Muncul bunga baru secara tiba-tiba", "Daun layu, menggulung, dan tampak lesu", "Batang semakin membesar dan keras"],
    ans: 2,
    exp: "Daun yang layu, menggulung, dan tampak lesu merupakan tanda jelas bahwa tanaman kekurangan air dan perlu segera disiram."
  },
  {
    kat: "pemeliharaan",
    text: "Pemberian pupuk yang berlebihan pada tanaman dapat menyebabkan ...",
    opts: ["Tanaman tumbuh lebih subur dan cepat", "Penumpukan garam mineral yang merusak akar dan dapat mematikan tanaman", "Bunga bermekaran lebih banyak", "Daun menjadi lebih hijau dan mengkilap"],
    ans: 1,
    exp: "Pemupukan berlebihan menyebabkan penumpukan garam mineral di tanah yang merusak akar tanaman melalui proses osmosis terbalik, bahkan dapat mematikan tanaman."
  }
];

// ── CONFIG ────────────────────────────────────────────────────────────────
const TOTAL_SOAL = 10;

const LABEL_KATEGORI = {
  biota:        "🌿 Biota",
  sampah:       "♻️ Sampah",
  pemeliharaan: "🐾 Pemeliharaan",
  semua:        "🎯 Semua Kategori"
};

const TAG_CLASS = {
  biota:        "quiz-tag-biota",
  sampah:       "quiz-tag-sampah",
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
  if (s >= 8)  return 4;
  if (s >= 6)  return 3;
  if (s >= 4)  return 2;
  if (s >= 2)  return 1;
  return 0;
}
function quizGetStreakLabel(s) {
  if (s >= 10) return "ULTRA!";
  if (s >= 8)  return "STREAK!";
  return "streak!";
}
function quizApplyStreakLevel(sb, level) {
  sb.classList.remove("quiz-lv1","quiz-lv2","quiz-lv3","quiz-lv4","quiz-lv5");
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
  if (kategori === "biota")             pool = quizBankBiota;
  else if (kategori === "sampah")       pool = quizBankSampah;
  else if (kategori === "pemeliharaan") pool = quizBankPemeliharaan;
  else pool = [...quizBankBiota, ...quizBankSampah, ...quizBankPemeliharaan];

  quizData = quizShuffle(pool).slice(0, Math.min(TOTAL_SOAL, pool.length));
  quizCur = 0; quizCorrect = 0; quizWrong = 0;
  quizStreak = 0; quizMaxStreak = 0; quizAnswered = false;
  quizAnsweredState = new Array(quizData.length).fill(null);

  document.getElementById("quiz-title-label").textContent = LABEL_KATEGORI[kategori] || "Quiz Interaktif";
  document.getElementById("quiz-kategori-screen").style.display = "none";
  document.getElementById("quiz-main-screen").style.display     = "block";
  window.quizSedangBerjalan = true;
  quizRender();
}

// ── RENDER SOAL ───────────────────────────────────────────────────────────
function quizRender() {
  const q = quizData[quizCur];
  const total = quizData.length;

  document.getElementById("quiz-q-num").textContent  = `Soal ${quizCur + 1} dari ${total}`;
  document.getElementById("quiz-prog").style.width   = `${((quizCur + 1) / total) * 100}%`;
  document.getElementById("quiz-q-text").textContent = q.text;
  document.getElementById("quiz-score-info").textContent = `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;
  document.getElementById("quiz-explanation").style.display = "none";
  document.getElementById("quiz-next-btn").style.display    = "none";

  const tag = document.getElementById("quiz-category-tag");
  tag.textContent = LABEL_KATEGORI[q.kat] || q.kat;
  tag.className   = "quiz-category-tag " + (TAG_CLASS[q.kat] || "");

  quizAnswered = quizAnsweredState[quizCur] !== null;

  const sb = document.getElementById("quiz-streak-badge");
  const lv = quizGetStreakLevel(quizStreak);
  if (quizStreak >= 2) {
    document.getElementById("quiz-streak-num").textContent   = quizStreak;
    document.getElementById("quiz-streak-label").textContent = quizGetStreakLabel(quizStreak);
    quizApplyStreakLevel(sb, lv);
    sb.classList.add("quiz-show");
  } else {
    sb.classList.remove("quiz-show","quiz-lv1","quiz-lv2","quiz-lv3","quiz-lv4","quiz-lv5");
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
    document.getElementById("quiz-next-btn").style.display    = "block";
    document.getElementById("quiz-next-btn").textContent = quizCur === total - 1 ? "Lihat Hasil" : "Next";
  }
  document.getElementById("quiz-back-btn").style.display = quizCur > 0 ? "inline-block" : "none";
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

  document.getElementById("quiz-score-info").textContent = `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;

  const sb = document.getElementById("quiz-streak-badge");
  if (quizStreak >= 2) {
    const lv = quizGetStreakLevel(quizStreak);
    document.getElementById("quiz-streak-num").textContent   = quizStreak;
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
    sb.classList.remove("quiz-show","quiz-bump","quiz-lv1","quiz-lv2","quiz-lv3","quiz-lv4","quiz-lv5");
  }

  document.getElementById("quiz-explanation").textContent = q.exp;
  document.getElementById("quiz-explanation").style.display = "block";
  document.getElementById("quiz-next-btn").style.display    = "block";
  document.getElementById("quiz-next-btn").textContent = quizCur === quizData.length - 1 ? "Lihat Hasil" : "Next";
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
  window.quizSedangBerjalan = false;
  document.getElementById("quiz-card").style.display        = "none";
  document.getElementById("quiz-result-card").style.display = "block";

  const total = quizData.length;
  const pct   = quizCorrect / total;
  const circumference = 264;
  const ring  = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = circumference;
  ring.classList.remove("quiz-ring-perfect","quiz-ring-low");
  if (pct === 1)      ring.classList.add("quiz-ring-perfect");
  else if (pct < 0.4) ring.classList.add("quiz-ring-low");
  setTimeout(() => { ring.style.strokeDashoffset = circumference - circumference * pct; }, 150);

  document.getElementById("quiz-ring-score").textContent  = `${quizCorrect}/${total}`;
  document.getElementById("quiz-ring-pct").textContent    = `${Math.round(pct * 100)}%`;
  document.getElementById("quiz-stat-correct").textContent = quizCorrect;
  document.getElementById("quiz-stat-wrong").textContent   = quizWrong;
  document.getElementById("quiz-stat-streak").textContent  = quizMaxStreak;

  let emoji, msg, sub;
  if (pct === 1)       { emoji="🏆"; msg="Sempurna! Luar biasa!";  sub="Semua jawaban benar. Kamu jenius!"; }
  else if (pct >= 0.8) { emoji="🎉"; msg="Bagus sekali!";          sub="Hampir sempurna, tinggal sedikit lagi!"; }
  else if (pct >= 0.6) { emoji="👍"; msg="Lumayan baik!";          sub="Terus belajar, kamu pasti bisa lebih baik!"; }
  else if (pct >= 0.4) { emoji="📚"; msg="Perlu belajar lebih!";   sub="Masih banyak yang bisa dipelajari, semangat!"; }
  else                  { emoji="💪"; msg="Jangan menyerah!";       sub="Coba lagi, setiap percobaan membuatmu lebih pintar!"; }

  document.getElementById("quiz-result-emoji").textContent = emoji;
  document.getElementById("quiz-result-msg").textContent   = msg;
  document.getElementById("quiz-result-sub").textContent   = sub;
  if (pct >= 0.6) quizLaunchConfetti(pct === 1);
}

// ── CONFETTI ──────────────────────────────────────────────────────────────
function quizLaunchConfetti(isPerfect) {
  const canvas = document.getElementById("quiz-confetti");
  const ctx    = canvas.getContext("2d");
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const COLORS = ["#4a7a38","#EF9F27","#D4537E","#378ADD","#E24B4A","#1D9E75"];
  const pieces = [];
  const count  = isPerfect ? 100 : 60;
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
      if (p.shape === "rect") ctx.fillRect(-p.r/2, -p.r/2, p.r*1.6, p.r*0.55);
      else { ctx.beginPath(); ctx.arc(0, 0, p.r/2, 0, Math.PI*2); ctx.fill(); }
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

<<<<<<< HEAD
// ── TOMBOL NAVIGASI ───────────────────────────────────────────────────────
=======
// ── NAVIGASI TOMBOL ───────────────────────────────────────────────────────
function quizKeluar() {
  if (confirm("Yakin ingin keluar dari quiz? Progresmu tidak akan tersimpan.")) {
    window.location.href = "quiz.html";
  }
}

>>>>>>> 09352ce8dbca17630674d5168947c7162200f0d5
function quizBackToKategori() {
  window.quizSedangBerjalan = false;
  document.getElementById("quiz-card").style.display             = "block";
  document.getElementById("quiz-result-card").style.display      = "none";
  document.getElementById("quiz-main-screen").style.display      = "none";
  document.getElementById("quiz-kategori-screen").style.display  = "block";
}

function quizRestart() {
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = 264;
  ring.classList.remove("quiz-ring-perfect", "quiz-ring-low");
  document.getElementById("quiz-card").style.display        = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  quizMulai(quizKategoriAktif);
}

// ── NAVBAR GUARD ──────────────────────────────────────────────────────────
window.quizSedangBerjalan = false;

document.addEventListener("click", function (e) {
  const link = e.target.closest("a");
  if (!link) return;
  if (!window.quizSedangBerjalan) return;
  const href = link.getAttribute("href");
  if (!href || href === "#" || href.startsWith("javascript")) return;
  if (link.closest(".quiz-shell")) return;

  e.preventDefault();
  e.stopPropagation();

  const tujuan = link.textContent.trim() || href;
  const yakin  = confirm(`Kamu sedang mengerjakan quiz.\nKeluar ke "${tujuan}"?\n\nProgresmu tidak akan tersimpan.`);
  if (yakin) {
    window.quizSedangBerjalan = false;
    window.location.href = href;
  }
}, true);t