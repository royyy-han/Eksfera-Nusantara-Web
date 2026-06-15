// ============================================================
//  QUIZ INTERAKTIF — quiz.js
//  150 soal total: 50 Biota | 50 Sampah | 50 Pemeliharaan
//  Didesain agar jawaban tidak mudah ditebak dari panjang teks
// ============================================================

// ── BANK SOAL: BIOTA (50 soal) ────────────────────────────────────────────
const quizBankBiota = [
  // --- IUCN & KONSERVASI ---
  {
    kat: "biota",
    text: "IUCN adalah organisasi internasional yang berfokus pada ...",
    opts: ["Perdagangan satwa dan tumbuhan antar negara", "Konservasi alam dan keanekaragaman hayati global", "Penelitian iklim dan perubahan cuaca dunia", "Pengelolaan sumber daya laut internasional"],
    ans: 1,
    exp: "IUCN (International Union for Conservation of Nature) adalah otoritas global di bidang konservasi alam dan keanekaragaman hayati."
  },
  {
    kat: "biota",
    text: "Perjanjian internasional CITES bertujuan untuk ...",
    opts: ["Mengatur ekspor kayu tropis antar negara", "Menetapkan kawasan taman nasional baru", "Mengendalikan perdagangan satwa dan tumbuhan liar", "Mendanai penelitian satwa langka di Asia"],
    ans: 2,
    exp: "CITES adalah perjanjian internasional yang mengendalikan perdagangan satwa dan tumbuhan liar agar spesies tidak terancam punah akibat perdagangan berlebihan."
  },
  {
    kat: "biota",
    text: "Konservasi In Situ berbeda dari Ex Situ karena ...",
    opts: ["Dilakukan oleh pemerintah, bukan swasta", "Melibatkan lebih banyak dana internasional", "Perlindungan dilakukan langsung di habitat asli satwa", "Satwa dipindahkan ke fasilitas khusus di luar habitat"],
    ans: 2,
    exp: "Konservasi In Situ melindungi satwa langsung di habitat aslinya seperti taman nasional dan cagar alam."
  },
  {
    kat: "biota",
    text: "Rehabilitasi satwa dilakukan ketika ...",
    opts: ["Satwa akan diperdagangkan ke luar negeri", "Satwa sakit atau terluka dan perlu dirawat agar bisa kembali ke alam", "Habitat satwa dipindahkan ke lokasi baru", "Satwa dianggap terlalu banyak di suatu kawasan"],
    ans: 1,
    exp: "Rehabilitasi satwa merawat satwa yang sakit atau terluka hingga pulih dan siap dikembalikan ke habitatnya."
  },
  {
    kat: "biota",
    text: "Status konservasi IUCN 'Critically Endangered' berarti ...",
    opts: ["Spesies sudah punah di alam liar", "Spesies menghadapi risiko kepunahan sangat tinggi dalam waktu dekat", "Spesies masih aman tapi perlu dipantau", "Spesies rentan tapi populasinya stabil"],
    ans: 1,
    exp: "Critically Endangered (Kritis) adalah status IUCN untuk spesies yang menghadapi risiko kepunahan sangat tinggi dalam waktu dekat jika ancaman tidak dihentikan."
  },
  {
    kat: "biota",
    text: "Restorasi habitat bertujuan untuk ...",
    opts: ["Memindahkan satwa ke kebun binatang yang lebih modern", "Mendirikan pusat penelitian di dalam hutan", "Mengembalikan ekosistem yang rusak agar satwa punya tempat hidup", "Memperluas wilayah pertanian di sekitar hutan"],
    ans: 2,
    exp: "Restorasi habitat memperbaiki ekosistem yang rusak agar dapat kembali mendukung kehidupan satwa dan tumbuhan."
  },
  // --- FLORA SUMATERA ---
  {
    kat: "biota",
    text: "Rafflesia disebut tanaman parasit karena ...",
    opts: ["Menghasilkan racun yang mematikan inangnya", "Tumbuh sangat cepat melebihi pohon sekitarnya", "Tidak memiliki daun, batang, atau akar dan bergantung sepenuhnya pada inang", "Menyerap semua cahaya matahari dari tumbuhan di sekitarnya"],
    ans: 2,
    exp: "Rafflesia tidak memiliki daun, batang, atau akar yang jelas dan sepenuhnya bergantung pada inang Tetrastigma untuk bertahan hidup."
  },
  {
    kat: "biota",
    text: "Rafflesia menarik penyerbuknya dengan cara ...",
    opts: ["Menghasilkan nectar manis dalam jumlah besar", "Menampilkan warna cerah seperti ungu dan biru", "Mengeluarkan bau busuk untuk menarik lalat sebagai penyerbuk", "Bergetar mengikuti arah angin untuk menyebarkan serbuk sari"],
    ans: 2,
    exp: "Rafflesia mengeluarkan bau busuk menyerupai daging membusuk untuk menarik lalat dan serangga sebagai penyerbuknya."
  },
  {
    kat: "biota",
    text: "Anggrek Tien termasuk jenis tumbuhan epifit, artinya ...",
    opts: ["Tumbuh di dalam air sungai yang mengalir deras", "Menempel pada pohon inang menggunakan akar udara tanpa merugikan inang", "Menyerap nutrisi langsung dari akar pohon yang ditumbuhinya", "Tumbuh di tanah dengan akar yang sangat dalam"],
    ans: 1,
    exp: "Anggrek Tien adalah epifit yang menempel pada pohon menggunakan akar udara untuk menyerap kelembapan, tanpa merugikan pohon inangnya."
  },
  {
    kat: "biota",
    text: "Bunga Kenanga (Cananga odorata) bernilai ekonomi tinggi karena ...",
    opts: ["Kayunya sangat keras dan tahan rayap", "Buahnya dapat dijadikan bahan makanan bergizi", "Menghasilkan minyak atsiri harum yang digunakan untuk parfum", "Daunnya mengandung obat antikanker yang langka"],
    ans: 2,
    exp: "Kenanga menghasilkan minyak atsiri harum yang dimanfaatkan untuk industri parfum, obat tradisional, dan upacara adat."
  },
  // --- FAUNA SUMATERA ---
  {
    kat: "biota",
    text: "Harimau Sumatera disebut harimau terkecil karena ...",
    opts: ["Memiliki loreng yang lebih sedikit dari harimau lain", "Ukuran tubuhnya lebih kecil dibanding semua subspesies harimau lainnya", "Hanya memangsa hewan kecil seperti tikus dan burung", "Tinggal di wilayah yang lebih sempit dari harimau Bengal"],
    ans: 1,
    exp: "Harimau Sumatera adalah subspesies harimau terkecil di dunia dibandingkan subspesies harimau lainnya seperti Harimau Bengal dan Siberia."
  },
  {
    kat: "biota",
    text: "Ciri khas fisik Harimau Sumatera yang membedakannya dari harimau lain adalah ...",
    opts: ["Warna bulu seluruhnya hitam tanpa loreng", "Loreng hitam lebih rapat dan tebal serta surai pendek di wajah", "Ukuran kaki belakang yang sangat besar", "Memiliki dua ekor sebagai ciri endemik Sumatera"],
    ans: 1,
    exp: "Harimau Sumatera memiliki corak loreng hitam yang lebih rapat dan tebal serta surai pendek di sekitar wajah yang memberi kesan garang."
  },
  {
    kat: "biota",
    text: "Nama ilmiah Orang Utan Sumatera adalah ...",
    opts: ["Pongo pygmaeus", "Pongo abelii", "Panthera tigris sumatrae", "Macaca nigra"],
    ans: 1,
    exp: "Orang Utan Sumatera bernama ilmiah Pongo abelii, berbeda dari Orang Utan Kalimantan yang bernama Pongo pygmaeus."
  },
  {
    kat: "biota",
    text: "Badak Sumatera (Dicerorhinus sumatrensis) memiliki keunikan dibanding badak lain yaitu ...",
    opts: ["Bercula satu dan bertubuh paling besar", "Bercula dua kecil dan tubuhnya ditutupi rambut kasar", "Hidup di daerah gurun dan padang rumput", "Memiliki tanduk yang bisa dilepas dan tumbuh kembali"],
    ans: 1,
    exp: "Badak Sumatera memiliki dua cula kecil dan tubuh ditutupi rambut kasar, menjadikannya satu-satunya badak berbulu di dunia."
  },
  {
    kat: "biota",
    text: "Peran ekologis Gajah Sumatera dalam ekosistem hutan adalah ...",
    opts: ["Sebagai predator puncak yang mengendalikan populasi rusa", "Menyebarkan biji dan membuka jalur di hutan untuk regenerasi vegetasi", "Menguraikan pohon mati menjadi pupuk alami", "Menjaga populasi serangga agar tidak meledak"],
    ans: 1,
    exp: "Gajah Sumatera menyebarkan biji melalui kotorannya dan membuka jalur di hutan, sehingga membantu regenerasi vegetasi hutan."
  },
  {
    kat: "biota",
    text: "Monyet Kedih (Presbytis thomasi) berstatus Rentan (Vulnerable) menurut IUCN akibat ...",
    opts: ["Populasinya terlalu besar sehingga merusak hutan", "Deforestasi, pembalakan liar, dan perburuan", "Penyakit menular yang menyebar dari primata lain", "Invasi spesies asing yang memangsa anak-anaknya"],
    ans: 1,
    exp: "Monyet Kedih berstatus Rentan (Vulnerable) akibat deforestasi, pembalakan liar, dan perburuan yang menyebabkan penurunan populasinya."
  },
  // --- FLORA KALIMANTAN ---
  {
    kat: "biota",
    text: "Cara Kantong Semar (Nepenthes) mendapatkan nitrogen adalah ...",
    opts: ["Menyerap nitrogen dari udara seperti tanaman legum", "Mengambil nitrogen dari tanah subur melalui akar dalam", "Mencerna serangga menggunakan cairan enzim di dalam kantongnya", "Bersimbiosis dengan jamur di akarnya untuk mendapat mineral"],
    ans: 2,
    exp: "Kantong Semar adalah tanaman karnivora yang mendapatkan nitrogen dengan mencerna serangga menggunakan cairan enzim di dalam kantongnya."
  },
  {
    kat: "biota",
    text: "Tenggaring (Nepenthes ampullaria) berbeda dari kantong semar lain karena ...",
    opts: ["Memiliki kantong yang sangat besar hingga 5 liter", "Tidak memakan serangga sama sekali", "Juga menampung daun gugur sebagai sumber nutrisi tambahan", "Hanya tumbuh di puncak gunung tertinggi Kalimantan"],
    ans: 2,
    exp: "Tenggaring unik karena selain menangkap serangga, kantongnya juga menampung daun gugur sebagai sumber nutrisi organik tambahan."
  },
  {
    kat: "biota",
    text: "Tengkawang (Shorea spp.) dikenal sebagai pohon bernilai ekonomi tinggi karena ...",
    opts: ["Kayunya paling keras di antara semua pohon tropis", "Bunganya menghasilkan parfum mahal yang langka", "Bijinya menghasilkan minyak nabati bernilai tinggi", "Daunnya digunakan sebagai obat penyakit tropis"],
    ans: 2,
    exp: "Tengkawang menghasilkan minyak nabati (minyak tengkawang) dari bijinya yang memiliki nilai ekonomi dan ekologis tinggi."
  },
  // --- FAUNA KALIMANTAN ---
  {
    kat: "biota",
    text: "Orangutan Kalimantan (Pongo pygmaeus) berbeda dari Orangutan Sumatera dalam hal ...",
    opts: ["Warna rambutnya lebih gelap kehitaman", "Nama ilmiah dan wilayah distribusinya", "Tidak bisa memanjat pohon setinggi Orang Utan Sumatera", "Memiliki empat lengan alih-alih dua lengan"],
    ans: 1,
    exp: "Orangutan Kalimantan (Pongo pygmaeus) dan Orangutan Sumatera (Pongo abelii) berbeda nama ilmiah dan distribusi wilayahnya meski tampak serupa."
  },
  {
    kat: "biota",
    text: "Pesut Mahakam adalah mamalia luar biasa langka karena merupakan ...",
    opts: ["Lumba-lumba laut yang hidup di estuari sungai Mahakam", "Salah satu populasi lumba-lumba air tawar paling langka di dunia", "Ikan lumba-lumba yang bermigrasi dari laut ke sungai", "Mamalia darat yang bisa berenang di Sungai Mahakam"],
    ans: 1,
    exp: "Pesut Mahakam (Orcaella brevirostris) adalah salah satu populasi lumba-lumba air tawar paling langka di dunia yang hidup di Sungai Mahakam."
  },
  {
    kat: "biota",
    text: "Bekantan menjadi maskot fauna Provinsi Kalimantan Selatan karena ...",
    opts: ["Merupakan primata paling besar di Kalimantan", "Sudah hampir punah sehingga perlu simbol khusus", "Menjadi simbol identitas lokal Kalimantan Selatan", "Menghasilkan suara paling keras di antara primata"],
    ans: 2,
    exp: "Bekantan dijadikan maskot fauna Provinsi Kalimantan Selatan sebagai simbol identitas lokal dan upaya pelestarian alam."
  },
  {
    kat: "biota",
    text: "Kucing Merah Kalimantan (Catopuma badia) disebut 'misterius' karena ...",
    opts: ["Aktif di malam hari dan tidak pernah terlihat manusia", "Sangat langka sehingga jarang sekali teramati dan diteliti", "Memiliki kemampuan berkamuflase sempurna di hutan", "Hidup di dalam gua dan tidak pernah keluar siang hari"],
    ans: 1,
    exp: "Kucing Merah Kalimantan disebut misterius karena sangat langka dan jarang sekali teramati oleh peneliti maupun manusia di alam liar."
  },
  {
    kat: "biota",
    text: "Status konservasi Gajah Kalimantan (Elephas maximus borneensis) menurut IUCN adalah ...",
    opts: ["Least Concern karena populasinya stabil", "Near Threatened karena mulai berkurang", "Endangered (Terancam Punah) akibat deforestasi dan konflik dengan manusia", "Critically Endangered karena hampir punah total"],
    ans: 2,
    exp: "Gajah Kalimantan berstatus Endangered (Terancam Punah) akibat deforestasi, fragmentasi habitat, dan konflik dengan manusia terutama dari perkebunan kelapa sawit."
  },
  // --- FLORA JAWA ---
  {
    kat: "biota",
    text: "Edelweis Jawa (Anaphalis javanica) disebut 'bunga abadi' karena ...",
    opts: ["Dapat bertahan hidup selama lebih dari 100 tahun", "Bunganya tampak tidak layu meski sudah dipetik", "Tumbuh sepanjang tahun tanpa musim berbunga", "Dapat beregenerasi dari biji dalam waktu sangat cepat"],
    ans: 1,
    exp: "Edelweis Jawa dijuluki bunga abadi karena bunganya tampak tidak layu bahkan setelah dipetik, berkat struktur bunganya yang kering dan tahan lama."
  },
  {
    kat: "biota",
    text: "Edelweis Jawa tumbuh di habitat dengan kondisi ...",
    opts: ["Pesisir pantai dengan angin laut dan pasir", "Rawa gambut dataran rendah yang selalu tergenang", "Pegunungan pada ketinggian 1.800–3.000 meter dengan tanah berpasir", "Hutan mangrove di tepi sungai yang payau"],
    ans: 2,
    exp: "Edelweis Jawa tumbuh di pegunungan Jawa pada ketinggian 1.800–3.000 meter, di tanah berpasir atau berbatu dengan suhu sejuk."
  },
  {
    kat: "biota",
    text: "Kokoleceran adalah flora endemik yang menjadi identitas Provinsi Banten, terancam akibat ...",
    opts: ["Dipakai secara berlebihan untuk obat tradisional", "Terlalu banyak ditanam sehingga menyebabkan monokultur", "Deforestasi, perambahan hutan, dan kurangnya kesadaran masyarakat", "Serangan hama dari spesies invasif asing"],
    ans: 2,
    exp: "Kokoleceran terancam punah akibat deforestasi, perambahan hutan, dan kurangnya kesadaran masyarakat untuk melindunginya."
  },
  {
    kat: "biota",
    text: "Cempaka Putih (Magnolia alba) memiliki nilai budaya yang tinggi karena ...",
    opts: ["Kayunya digunakan untuk membangun candi-candi di Jawa", "Bunganya digunakan dalam upacara adat dan diolah menjadi parfum", "Buahnya menjadi makanan pokok masyarakat Jawa kuno", "Daunnya dijadikan bahan baku batik tradisional Jawa"],
    ans: 1,
    exp: "Cempaka Putih bernilai budaya tinggi karena bunganya digunakan dalam upacara adat dan dimanfaatkan dalam industri parfum dan obat tradisional."
  },
  // --- FAUNA JAWA ---
  {
    kat: "biota",
    text: "Badak Jawa (Rhinoceros sondaicus) berbeda dari Badak Sumatera karena ...",
    opts: ["Memiliki dua cula besar dan tubuh berbulu", "Hanya memiliki satu cula kecil dan kulit berlipat tanpa bulu", "Lebih besar dan lebih agresif dari Badak Sumatera", "Hidup di hutan pegunungan di atas 2.000 meter"],
    ans: 1,
    exp: "Badak Jawa hanya memiliki satu cula kecil dan kulit berlipat menyerupai perisai, tanpa bulu, berbeda dari Badak Sumatera yang bercula dua dan berbulu."
  },
  {
    kat: "biota",
    text: "Populasi Badak Jawa saat ini diperkirakan ...",
    opts: ["Lebih dari 500 ekor di Taman Nasional Ujung Kulon", "Kurang dari 80 ekor, hanya di Taman Nasional Ujung Kulon", "Sekitar 200 ekor yang tersebar di beberapa pulau kecil", "Sudah punah total dan hanya ada di penangkaran"],
    ans: 1,
    exp: "Populasi Badak Jawa saat ini hanya kurang dari 80 ekor yang hidup di Taman Nasional Ujung Kulon, menjadikannya salah satu mamalia paling langka di dunia."
  },
  {
    kat: "biota",
    text: "Elang Jawa (Nisaetus bartelsi) dikenal sebagai simbol nasional Indonesia karena ...",
    opts: ["Merupakan burung terbesar yang pernah hidup di Indonesia", "Diyakini menjadi inspirasi lambang negara Garuda Pancasila", "Hanya hidup di Pulau Jawa dan tidak ditemukan di pulau lain", "Menjadi satwa pertama yang dilindungi undang-undang Indonesia"],
    ans: 1,
    exp: "Elang Jawa diyakini menjadi inspirasi lambang negara Indonesia, Garuda Pancasila, dan menjadi satwa identitas nasional."
  },
  {
    kat: "biota",
    text: "Macan Tutul Jawa (Panthera pardus melas) berstatus Kritis akibat ...",
    opts: ["Terlalu sering berinteraksi dengan manusia sehingga kehilangan insting berburu", "Deforestasi, perburuan, dan konflik dengan manusia", "Penyakit genetik akibat perkawinan sedarah dalam populasi kecil", "Kalah bersaing dengan Harimau Sumatera yang masuk ke Jawa"],
    ans: 1,
    exp: "Macan Tutul Jawa berstatus Kritis akibat deforestasi, fragmentasi habitat, perburuan, serta konflik dengan manusia yang terus berlanjut."
  },
  {
    kat: "biota",
    text: "Owa Jawa (Hylobates moloch) bergerak di antara pohon dengan cara ...",
    opts: ["Melompat jauh menggunakan kaki belakang yang kuat", "Bergelantungan menggunakan lengan panjangnya dari cabang ke cabang", "Meluncur menggunakan selaput kulit di sisi tubuhnya", "Berjalan di atas dahan secara bipedal seperti manusia"],
    ans: 1,
    exp: "Owa Jawa bergerak dengan bergelantungan menggunakan lengannya yang sangat panjang, berpindah dengan cepat dari satu cabang ke cabang lainnya."
  },
  {
    kat: "biota",
    text: "Banteng Jawa (Bos javanicus) memiliki ciri khas berupa ...",
    opts: ["Tubuh selalu berwarna coklat pucat sepanjang hidupnya", "Jantan muda berwarna coklat kemerahan yang berubah hitam pekat saat dewasa", "Memiliki punuk besar seperti sapi zebu", "Ukuran tubuh yang jauh lebih kecil dari sapi biasa"],
    ans: 1,
    exp: "Banteng Jawa jantan muda berwarna coklat kemerahan yang secara bertahap berubah menjadi hitam pekat saat dewasa, sementara betina tetap berwarna coklat."
  },
  // --- FLORA & FAUNA SULAWESI ---
  {
    kat: "biota",
    text: "Kayu hitam (ebony) dihasilkan oleh pohon ...",
    opts: ["Tengkawang (Shorea spp.) dari Kalimantan", "Diospyros celebica yang endemik Sulawesi", "Kokoleceran dari Taman Nasional Ujung Kulon", "Bintangur yang tumbuh di pesisir Papua"],
    ans: 1,
    exp: "Kayu hitam ebony yang keras dan bernilai tinggi dihasilkan oleh Diospyros celebica, pohon endemik Sulawesi dari famili Ebenaceae."
  },
  {
    kat: "biota",
    text: "Burung Maleo bertelur dengan cara yang unik, yaitu ...",
    opts: ["Mengerami telurnya selama tiga bulan di sarang pohon tinggi", "Mengubur telurnya di pasir pantai atau tanah vulkanik agar menetas dengan panas alami", "Menitipkan telurnya ke sarang burung lain agar dierami", "Menetaskan telurnya dalam kantong perut seperti kanguru"],
    ans: 1,
    exp: "Maleo mengubur telurnya di pasir pantai atau tanah vulkanik untuk memanfaatkan panas alami sebagai pengganti pengeraman oleh induknya."
  },
  {
    kat: "biota",
    text: "Babirusa (Babyrousa spp.) terkenal karena ...",
    opts: ["Mampu berenang menyeberangi selat antar pulau dengan mudah", "Gigi taring jantan yang tumbuh menembus kulit hidung melengkung ke atas", "Memiliki tanduk di kepala seperti rusa yang rontok setiap tahun", "Bulu tubuhnya berwarna merah cerah sebagai tanda peringatan"],
    ans: 1,
    exp: "Babirusa terkenal dengan gigi taring jantan yang tumbuh panjang menembus kulit hidung dan melengkung ke atas, memberi penampilan yang sangat unik."
  },
  {
    kat: "biota",
    text: "Yaki (Macaca nigra) endemik Sulawesi Utara mudah dikenali karena ...",
    opts: ["Memiliki hidung merah yang sangat mencolok", "Bulu hitam pekat, jambul di kepala, dan ekor sangat pendek", "Wajahnya berwarna biru cerah seperti mandrill", "Ukurannya sangat besar melebihi gorila Asia"],
    ans: 1,
    exp: "Yaki mudah dikenali dari bulunya yang hitam pekat, jambul rambut di kepala, dan ekornya yang sangat pendek hampir tidak terlihat."
  },
  {
    kat: "biota",
    text: "Anoa (Bubalus spp.) sering disebut 'kerbau mini' karena ...",
    opts: ["Dipelihara masyarakat Sulawesi sebagai hewan ternak kecil", "Termasuk keluarga kerbau (Bovidae) namun berukuran jauh lebih kecil", "Merupakan hasil persilangan kerbau dan rusa di alam liar", "Memiliki tanduk kerbau tetapi berkaki seperti rusa"],
    ans: 1,
    exp: "Anoa termasuk keluarga Bovidae seperti kerbau, namun ukurannya jauh lebih kecil sehingga dijuluki kerbau mini endemik Sulawesi."
  },
  {
    kat: "biota",
    text: "Tarsius beradaptasi untuk aktif di malam hari dengan memiliki ...",
    opts: ["Kulit tubuh yang bersinar dalam gelap", "Hidung sangat sensitif untuk mencium mangsa", "Mata sangat besar yang hampir memenuhi seluruh wajahnya", "Telinga yang dapat berputar 360 derajat"],
    ans: 2,
    exp: "Tarsius memiliki mata yang sangat besar hampir memenuhi seluruh wajahnya, memberikan penglihatan luar biasa di malam hari untuk mendeteksi mangsa."
  },
  {
    kat: "biota",
    text: "Nepenthes hamata yang endemik Sulawesi dikenal dengan ciri khas ...",
    opts: ["Kantong berbentuk bola dengan tutup berwarna merah menyala", "Kantong bergigi tajam di bibir yang memberi tampilan unik", "Ukuran kantong paling besar di antara semua Nepenthes", "Aroma harum yang sangat kuat untuk menarik serangga"],
    ans: 1,
    exp: "Nepenthes hamata dikenal dengan struktur 'gigi' tajam di bibir kantongnya yang memberi tampilan unik dan menakutkan di antara sesama kantong semar."
  },
  // --- FLORA & FAUNA PAPUA ---
  {
    kat: "biota",
    text: "Burung Cendrawasih dijuluki 'Bird of Paradise' karena ...",
    opts: ["Hidup paling lama di antara semua jenis burung", "Bulu indah berwarna cerah dan tarian kawin yang sangat memukau", "Dapat terbang paling tinggi di antara burung tropis", "Bertelur paling besar di antara semua burung di Asia"],
    ans: 1,
    exp: "Cendrawasih dijuluki Bird of Paradise karena keindahan bulunya yang luar biasa berwarna cerah dan tarian kawin jantannya yang sangat memukau."
  },
  {
    kat: "biota",
    text: "Kasuari Gelambir Tunggal berbeda dari kasuari lain karena ...",
    opts: ["Dapat terbang pendek menggunakan sayapnya", "Hanya memiliki satu gelambir di leher sebagai ciri khasnya", "Ukurannya paling kecil di antara semua jenis kasuari", "Berwarna putih seluruh tubuh tanpa warna biru"],
    ans: 1,
    exp: "Kasuari Gelambir Tunggal (Casuarius unappendiculatus) memiliki satu gelambir tunggal di leher sebagai ciri pembeda dari jenis kasuari lainnya."
  },
  {
    kat: "biota",
    text: "Kanguru Pohon (Dendrolagus) berbeda dari kanguru darat karena ...",
    opts: ["Tidak memiliki kantung marsupium untuk menyimpan anak", "Tubuh lebih kompak dengan ekor panjang untuk keseimbangan di pohon", "Berukuran jauh lebih besar dari kanguru darat", "Aktif di siang hari dan tidur di malam hari"],
    ans: 1,
    exp: "Kanguru Pohon memiliki tubuh lebih kompak dan ekor panjang untuk keseimbangan di pohon, serta cakar kuat untuk memanjat, berbeda dari kanguru darat."
  },
  {
    kat: "biota",
    text: "Kuskus Waigeo (Spilocuscus papuensis) memiliki ciri khas berupa ...",
    opts: ["Bulu hitam pekat tanpa corak apapun", "Tubuh putih keabu-abuan dengan tutul hitam dan mata kuning-oranye", "Ukuran sangat kecil seperti tikus pohon", "Ekor yang sangat panjang melebihi panjang tubuhnya"],
    ans: 1,
    exp: "Kuskus Waigeo memiliki tubuh putih keabu-abuan dengan tutul hitam khas serta mata kuning-oranye yang mencolok, menjadikannya mudah dikenali."
  },
  {
    kat: "biota",
    text: "Hiu Karpet Berbintik (Stegostoma tigrinum) terancam oleh ...",
    opts: ["Serangan dari predator puncak di laut dalam", "Perubahan arus laut akibat El Nino", "Penangkapan berlebihan dan degradasi habitat laut dangkal", "Penyakit dari parasit yang menyerang insang"],
    ans: 2,
    exp: "Hiu Karpet Berbintik terancam oleh penangkapan ikan berlebihan dan degradasi ekosistem pesisir dangkal tempat mereka hidup."
  },
  // --- KLASIFIKASI HEWAN ---
  {
    kat: "biota",
    text: "Hewan yang termasuk kelas Mammalia memiliki ciri utama ...",
    opts: ["Bertelur dan mengerami telurnya", "Bernapas dengan insang sepanjang hidupnya", "Menyusui anaknya dengan air susu", "Memiliki sisik di seluruh permukaan tubuh"],
    ans: 2,
    exp: "Ciri utama Mammalia adalah menyusui anaknya dengan air susu yang dihasilkan kelenjar susu, serta umumnya berdarah panas."
  },
  {
    kat: "biota",
    text: "Katak termasuk kelas Amphibia karena ...",
    opts: ["Memiliki kulit bersisik dan bertelur di darat", "Dapat hidup di dua alam yaitu air dan darat", "Bernapas dengan insang sepanjang hidupnya", "Berdarah panas dan menyusui anaknya"],
    ans: 1,
    exp: "Katak termasuk Amphibia karena dapat hidup di dua alam (air dan darat), bernapas dengan insang saat larva dan paru-paru saat dewasa."
  },
  {
    kat: "biota",
    text: "Cumi-cumi termasuk kelompok Mollusca yang berarti ...",
    opts: ["Hewan berkulit duri yang keras", "Hewan berkaki berbuku-buku", "Hewan bertubuh lunak", "Hewan berdarah dingin bertulang belakang"],
    ans: 2,
    exp: "Mollusca berarti hewan bertubuh lunak. Cumi-cumi, kerang, dan siput adalah contoh Mollusca."
  },
  {
    kat: "biota",
    text: "Bintang laut termasuk kelas Echinodermata yang artinya ...",
    opts: ["Hewan berbuku-buku dengan cangkang keras", "Hewan berkulit duri", "Hewan bertubuh lunak tanpa cangkang", "Hewan berkaki enam seperti serangga"],
    ans: 1,
    exp: "Echinodermata berasal dari bahasa Yunani yang berarti 'kulit berduri'. Bintang laut dan bulu babi termasuk kelompok ini."
  },
  {
    kat: "biota",
    text: "Makhluk hidup disebut endemik jika ...",
    opts: ["Populasinya sangat besar dan tersebar luas", "Hanya ditemukan di satu wilayah geografis tertentu di dunia", "Dapat bertahan hidup di berbagai kondisi iklim", "Sudah ada sejak zaman dinosaurus"],
    ans: 1,
    exp: "Endemik berarti organisme hanya terdapat secara alami di satu daerah geografis tertentu dan tidak ditemukan di tempat lain di dunia."
  }
];

// ── BANK SOAL: SAMPAH (50 soal) ───────────────────────────────────────────
const quizBankSampah = [
  // --- JENIS SAMPAH ---
  {
    kat: "sampah",
    text: "Menurut materi TeraNusa, jenis sampah yang 'mudah terurai' adalah ...",
    opts: ["Plastik dan kaca", "Baterai dan limbah medis", "Sisa makanan, ranting, dan kotoran hewan", "Popok sekali pakai dan puntung rokok"],
    ans: 2,
    exp: "Sampah organik seperti sisa makanan, ranting, dan kotoran hewan adalah jenis sampah yang paling mudah terurai secara alami."
  },
  {
    kat: "sampah",
    text: "Sampah kertas seperti buku dan kardus dikategorikan sebagai sampah yang ...",
    opts: ["Berbahaya dan perlu penanganan khusus", "Tidak bisa terurai dalam kondisi apapun", "Mudah didaur ulang dan dapat terurai secara alami", "Masuk kategori B3 karena mengandung tinta"],
    ans: 2,
    exp: "Sampah kertas (buku, karton, kardus) mudah didaur ulang dan dapat terurai secara alami, sehingga termasuk sampah yang relatif ramah lingkungan."
  },
  {
    kat: "sampah",
    text: "Yang membedakan sampah anorganik dari sampah organik adalah ...",
    opts: ["Anorganik lebih ringan dan mudah dibawa", "Anorganik berasal dari bahan sintetis dan sulit terurai di alam", "Anorganik selalu berbau tidak sedap", "Anorganik berwarna gelap dan organik berwarna cerah"],
    ans: 1,
    exp: "Sampah anorganik seperti plastik dan kaca sulit terurai di alam karena berasal dari bahan sintetis yang tidak dapat diurai oleh mikroorganisme."
  },
  {
    kat: "sampah",
    text: "Limbah medis seperti jarum suntik bekas termasuk sampah B3 karena ...",
    opts: ["Ukurannya kecil sehingga sulit didaur ulang", "Berasal dari fasilitas kesehatan pemerintah", "Mengandung bahan berbahaya dan beracun bagi lingkungan", "Volumenya sangat besar dan sulit diangkut"],
    ans: 2,
    exp: "Limbah medis termasuk B3 karena mengandung bahan berbahaya dan beracun yang dapat mencemari lingkungan dan membahayakan kesehatan."
  },
  {
    kat: "sampah",
    text: "Popok sekali pakai dan puntung rokok dikategorikan sebagai sampah residu karena ...",
    opts: ["Mengandung bahan kimia berbahaya seperti B3", "Tidak dapat didaur ulang menjadi produk baru", "Berasal dari kegiatan industri besar", "Terurai sangat cepat dalam waktu 1–2 minggu"],
    ans: 1,
    exp: "Sampah residu adalah sampah yang tidak dapat didaur ulang, termasuk popok sekali pakai dan puntung rokok yang tidak bisa diproses menjadi produk baru."
  },
  // --- WAKTU TERURAI ---
  {
    kat: "sampah",
    text: "Sisa makanan dan daun kering membutuhkan waktu terurai selama ...",
    opts: ["2–4 hari", "2–4 minggu", "2–4 bulan", "2–4 tahun"],
    ans: 1,
    exp: "Sampah organik seperti sisa makanan dan daun kering terurai dalam 2–4 minggu karena mudah diurai oleh mikroorganisme alami."
  },
  {
    kat: "sampah",
    text: "Koran dan kardus membutuhkan waktu terurai sekitar ...",
    opts: ["2–4 minggu", "2–5 bulan", "10–50 tahun", "Tidak bisa terurai sama sekali"],
    ans: 1,
    exp: "Sampah kertas seperti koran dan kardus membutuhkan sekitar 2–5 bulan untuk terurai secara alami di lingkungan."
  },
  {
    kat: "sampah",
    text: "Potongan kayu dan ranting membutuhkan waktu terurai selama ...",
    opts: ["2–5 bulan", "1–3 tahun", "10–50 tahun", "100–1.000 tahun"],
    ans: 1,
    exp: "Potongan kayu dan ranting membutuhkan waktu 1–3 tahun untuk terurai karena mengandung selulosa dan lignin yang lebih tahan terhadap penguraian."
  },
  {
    kat: "sampah",
    text: "Kain katun membutuhkan waktu terurai sekitar ...",
    opts: ["2–5 bulan", "1–3 tahun", "5–10 tahun", "80–200 tahun"],
    ans: 2,
    exp: "Tekstil berbahan kain katun membutuhkan sekitar 5–10 tahun untuk terurai karena seratnya lebih padat dari kertas namun lebih lunak dari plastik."
  },
  {
    kat: "sampah",
    text: "Kantong plastik sangat berbahaya karena membutuhkan waktu terurai selama ...",
    opts: ["5–10 tahun", "50–80 tahun", "100–1.000 tahun", "Hanya 2–3 bulan"],
    ans: 2,
    exp: "Kantong plastik membutuhkan 100–1.000 tahun untuk terurai karena polimer sintetisnya sangat resisten terhadap penguraian biologis."
  },
  {
    kat: "sampah",
    text: "Kaleng aluminium membutuhkan waktu terurai ...",
    opts: ["1–3 tahun", "5–10 tahun", "80–200 tahun", "Tidak terurai sama sekali"],
    ans: 2,
    exp: "Kaleng aluminium membutuhkan 80–200 tahun untuk terurai di alam, namun dapat didaur ulang sepenuhnya tanpa kehilangan kualitasnya."
  },
  {
    kat: "sampah",
    text: "Botol kaca jika dibuang ke lingkungan akan ...",
    opts: ["Terurai dalam 50–100 tahun menjadi pasir", "Tidak terurai dan hanya pecah menjadi serpihan lebih kecil", "Terurai dalam 5–10 tahun seperti plastik", "Larut dalam air hujan dalam waktu 20–30 tahun"],
    ans: 1,
    exp: "Kaca praktis tidak dapat terurai di alam dan hanya akan pecah menjadi serpihan lebih kecil, yang tetap bertahan selama ratusan tahun."
  },
  {
    kat: "sampah",
    text: "Popok sekali pakai sangat sulit diolah karena membutuhkan waktu terurai sekitar ...",
    opts: ["50–80 tahun", "100–200 tahun", "±500 tahun", "1.000–2.000 tahun"],
    ans: 2,
    exp: "Popok sekali pakai membutuhkan sekitar 500 tahun untuk terurai karena mengandung campuran plastik, bahan penyerap sintetis, dan berbagai bahan non-organik."
  },
  {
    kat: "sampah",
    text: "Styrofoam disebut 'praktis abadi' dalam konteks lingkungan karena ...",
    opts: ["Bisa terbakar sendiri sehingga volumenya berkurang", "Larut dalam air laut dan tidak berbahaya", "Tidak terurai secara biologis dan bertahan hampir selamanya", "Bisa dimakan hewan sehingga hilang dari lingkungan"],
    ans: 2,
    exp: "Styrofoam tidak dapat terurai secara biologis dan bertahan hampir selamanya di lingkungan, meski pecah menjadi partikel kecil yang mencemari tanah dan air."
  },
  // --- DAMPAK SAMPAH ---
  {
    kat: "sampah",
    text: "Sampah organik yang menumpuk bisa menjadi sarang penyakit karena ...",
    opts: ["Menghasilkan radiasi berbahaya saat membusuk", "Menjadi tempat berkembang biak lalat, tikus, dan nyamuk pembawa penyakit", "Meracuni air tanah dengan logam berat", "Menghasilkan gas beracun yang langsung mematikan"],
    ans: 1,
    exp: "Sampah organik yang membusuk menjadi tempat berkembang biak lalat, tikus, dan nyamuk yang dapat memicu penyakit diare, malaria, dan leptospirosis."
  },
  {
    kat: "sampah",
    text: "Gas metana yang dihasilkan dari sampah organik berbahaya karena ...",
    opts: ["Mematikan semua tanaman yang ada di dekatnya", "Berkontribusi pada efek rumah kaca dan berpotensi menimbulkan ledakan", "Mengubah warna tanah menjadi hitam pekat", "Langsung meracuni hewan yang menghirupnya"],
    ans: 1,
    exp: "Gas metana dari sampah organik yang membusuk berkontribusi pada efek rumah kaca yang memperparah perubahan iklim, dan pada konsentrasi tinggi berpotensi menyebabkan ledakan."
  },
  {
    kat: "sampah",
    text: "Mikroplastik membahayakan kesehatan manusia karena ...",
    opts: ["Menyumbat saluran air bersih sehingga air tidak mengalir", "Masuk ke rantai makanan dan berisiko mengganggu sistem hormon", "Menyebabkan rasa tidak enak pada makanan", "Meracuni tanaman sehingga pangan tidak aman dikonsumsi"],
    ans: 1,
    exp: "Mikroplastik masuk ke rantai makanan melalui ikan dan air, dan berisiko mengganggu sistem hormon serta menyebabkan berbagai gangguan kesehatan pada manusia."
  },
  {
    kat: "sampah",
    text: "Dampak lingkungan dari sampah B3 yang paling serius adalah ...",
    opts: ["Membuat tanah menjadi lebih subur jika dalam jumlah kecil", "Mencemari tanah dan air dengan logam berat dan zat kimia beracun", "Mengurangi populasi hama pertanian secara alami", "Menghasilkan panas yang membantu menguraikan sampah lain"],
    ans: 1,
    exp: "Sampah B3 mengandung logam berat dan zat kimia beracun yang dapat mencemari tanah dan air, menyebabkan keracunan, kanker, dan gangguan saraf."
  },
  {
    kat: "sampah",
    text: "Plastik yang dibuang ke laut paling berbahaya bagi ...",
    opts: ["Ombak laut yang menjadi lebih kecil", "Satwa laut seperti penyu, ikan, dan burung yang memakan atau terlilit plastik", "Kapal nelayan yang sulit bergerak", "Bakteri laut yang tidak bisa mengurai sampah"],
    ans: 1,
    exp: "Plastik di laut sangat berbahaya bagi satwa laut seperti penyu, ikan, dan burung yang bisa memakan plastik atau terlilit di dalamnya hingga mati."
  },
  {
    kat: "sampah",
    text: "Dampak ekonomi dari pengelolaan sampah B3 yang buruk adalah ...",
    opts: ["Harga makanan menjadi lebih murah", "Membutuhkan biaya besar untuk penanganan dan berisiko menimbulkan krisis kesehatan", "Mengurangi lapangan kerja di sektor formal", "Mempercepat pertumbuhan industri daur ulang"],
    ans: 1,
    exp: "Pengelolaan sampah B3 yang buruk membutuhkan biaya besar untuk penanganan khusus dan berisiko menimbulkan krisis kesehatan masyarakat yang lebih mahal lagi."
  },
  {
    kat: "sampah",
    text: "Puntung rokok termasuk sampah residu yang berbahaya karena ...",
    opts: ["Ukurannya kecil sehingga mudah tersapu masuk ke saluran air", "Mengandung zat beracun dari tembakau dan filter plastik yang sulit terurai", "Mudah terbakar kembali dan menyebabkan kebakaran", "Warnanya menarik sehingga dimakan oleh hewan"],
    ans: 1,
    exp: "Puntung rokok mengandung zat beracun dari tembakau dan filternya terbuat dari plastik yang sangat sulit terurai, mencemari lingkungan jangka panjang."
  },
  // --- PRINSIP 3R ---
  {
    kat: "sampah",
    text: "Prinsip Reduce dalam pengelolaan sampah berarti kita harus ...",
    opts: ["Mengumpulkan sampah sebanyak mungkin untuk didaur ulang", "Mengurangi penggunaan barang sekali pakai agar sampah tidak dihasilkan", "Mengolah kembali sampah menjadi energi", "Membagi sampah kepada tetangga untuk dikelola"],
    ans: 1,
    exp: "Reduce berarti mengurangi penggunaan barang yang menghasilkan sampah dari sumbernya, misalnya menghindari produk sekali pakai."
  },
  {
    kat: "sampah",
    text: "Contoh penerapan Reuse yang paling tepat dalam kehidupan sehari-hari adalah ...",
    opts: ["Membuang tas plastik lama dan membeli tas baru yang ramah lingkungan", "Membawa tumbler sendiri dan menggunakannya berulang kali alih-alih membeli air kemasan", "Mendaur ulang botol plastik menjadi pot bunga", "Memisahkan sampah organik dan anorganik di rumah"],
    ans: 1,
    exp: "Reuse berarti menggunakan kembali barang yang masih layak seperti membawa tumbler sendiri, sehingga tidak perlu membeli air kemasan plastik baru."
  },
  {
    kat: "sampah",
    text: "Recycle berbeda dari Reuse karena ...",
    opts: ["Recycle hanya untuk sampah organik, Reuse untuk anorganik", "Recycle mengubah sampah melalui proses produksi menjadi produk baru", "Recycle dilakukan di rumah, Reuse di pabrik", "Recycle lebih mudah dilakukan daripada Reuse"],
    ans: 1,
    exp: "Recycle mengubah sampah melalui proses produksi menjadi produk baru (misal botol jadi serat kain), sedangkan Reuse menggunakan barang yang sama tanpa mengubahnya."
  },
  {
    kat: "sampah",
    text: "Composting mengubah sampah organik menjadi pupuk kompos melalui proses ...",
    opts: ["Pembakaran suhu tinggi tanpa oksigen", "Penguraian biologis oleh mikroorganisme", "Pemrosesan kimia dengan larutan asam", "Pemadatan mekanis menggunakan mesin press"],
    ans: 1,
    exp: "Composting menggunakan proses penguraian biologis oleh mikroorganisme (bakteri dan jamur) untuk mengubah sampah organik menjadi pupuk kompos yang menyuburkan tanah."
  },
  {
    kat: "sampah",
    text: "Bank Sampah berbeda dari tempat pembuangan biasa karena ...",
    opts: ["Bank Sampah hanya menerima sampah organik", "Warga bisa menabung sampah anorganik bernilai ekonomis dan mendapat imbalan", "Bank Sampah membakar semua sampah secara terpusat", "Bank Sampah dikelola oleh bank pemerintah"],
    ans: 1,
    exp: "Di Bank Sampah, warga mengumpulkan dan menabung sampah anorganik bernilai ekonomis (plastik, kertas, logam) untuk ditukar dengan uang atau barang kebutuhan."
  },
  // --- METODE PENGELOLAAN ---
  {
    kat: "sampah",
    text: "Waste to Energy adalah metode yang mengubah sampah menjadi ...",
    opts: ["Pupuk kompos untuk pertanian organik", "Bahan baku kertas daur ulang", "Energi listrik atau bahan bakar yang dapat dimanfaatkan", "Air bersih yang aman dikonsumsi"],
    ans: 2,
    exp: "Waste to Energy mengubah sampah menjadi energi listrik atau bahan bakar melalui proses pembakaran atau gasifikasi yang terkontrol."
  },
  {
    kat: "sampah",
    text: "Sanitary Landfill lebih baik dari tempat pembuangan terbuka karena ...",
    opts: ["Tidak menerima sampah B3 dan residu", "Dilengkapi sistem lapisan pelindung agar tidak mencemari air tanah", "Sampah langsung didaur ulang di lokasi", "Tidak mengeluarkan gas metana sama sekali"],
    ans: 1,
    exp: "Sanitary Landfill memiliki sistem lapisan pelindung tanah yang mencegah cairan lindi (leachate) dari sampah mencemari air tanah di sekitarnya."
  },
  {
    kat: "sampah",
    text: "Incinerasi dalam pengelolaan sampah adalah proses ...",
    opts: ["Mengubur sampah dalam lapisan tanah yang berlapis-lapis", "Membakar sampah dengan teknologi tinggi sambil mengendalikan emisi polutan", "Mengolah sampah dengan cairan kimia pelarut", "Menghancurkan sampah dengan gelombang ultrasonik"],
    ans: 1,
    exp: "Incinerasi membakar sampah dengan teknologi tinggi untuk mengurangi volume sampah secara drastis, sambil mengendalikan emisi polutan yang dihasilkan."
  },
  {
    kat: "sampah",
    text: "Pemilahan sampah sejak dari rumah penting karena ...",
    opts: ["Membuat rumah tampak lebih rapi dan bersih", "Memudahkan pengelolaan dan memaksimalkan nilai daur ulang setiap jenis sampah", "Mengurangi frekuensi petugas sampah datang ke rumah", "Diwajibkan oleh undang-undang di semua daerah"],
    ans: 1,
    exp: "Pemilahan sampah dari sumber memudahkan pengelolaan selanjutnya dan memaksimalkan nilai daur ulang karena sampah tidak tercampur dan terkontaminasi."
  },
  // --- PRINSIP DASAR PEMELIHARAAN SAMPAH ---
  {
    kat: "sampah",
    text: "Alasan sampah anorganik harus dibilas dan dikeringkan sebelum dibuang adalah ...",
    opts: ["Agar lebih mudah dibakar saat diproses", "Agar tidak berbau dan tidak mengotori sampah lain di tempat penampungan", "Supaya lebih ringan dan mudah diangkut petugas sampah", "Agar terurai lebih cepat di tempat pembuangan akhir"],
    ans: 1,
    exp: "Sampah anorganik perlu dibilas dan dikeringkan agar tidak berbau busuk dan tidak mengotori atau mencemari jenis sampah lain yang ada di tempat penampungan."
  },
  {
    kat: "sampah",
    text: "Untuk mencegah gas metana berbau di komposter sampah organik, yang harus dilakukan adalah ...",
    opts: ["Menutup rapat komposter tanpa lubang udara apapun", "Memastikan ada aliran udara (aerasi) yang cukup dan sering membalik kompos", "Menambahkan air sebanyak mungkin ke dalam komposter", "Mencampur sampah plastik agar mempercepat proses penguraian"],
    ans: 1,
    exp: "Aerasi yang cukup dan pembalikan rutin pada komposter mencegah pembusukan anaerob yang menghasilkan gas metana berbau, dan mendorong penguraian aerob yang lebih bersih."
  },
  {
    kat: "sampah",
    text: "Tempat sampah harus ditutup rapat untuk ...",
    opts: ["Mencegah hujan masuk yang bisa menyebabkan banjir", "Mencegah lalat, tikus, dan kucing liar yang menyebarkan penyakit", "Menjaga sampah tetap panas agar cepat terurai", "Mencegah warna sampah pudar terkena sinar matahari"],
    ans: 1,
    exp: "Menutup rapat tempat sampah mencegah lalat, tikus, dan kucing liar yang bisa menyebarkan penyakit dan membuat sampah tercecer di sekitarnya."
  },
  {
    kat: "sampah",
    text: "Prinsip Reduce dapat diterapkan dengan cara ...",
    opts: ["Mendaur ulang botol plastik menjadi pot bunga di rumah", "Menabung sampah di bank sampah terdekat setiap minggu", "Membawa kantong belanja sendiri sehingga tidak butuh kantong plastik baru", "Memilah sampah organik dan anorganik sejak di dapur"],
    ans: 2,
    exp: "Membawa kantong belanja sendiri adalah contoh Reduce karena kita mengurangi produksi sampah kantong plastik dari sumbernya sebelum sampah itu tercipta."
  },
  {
    kat: "sampah",
    text: "Gas metana dari penguraian sampah organik dapat dimanfaatkan sebagai ...",
    opts: ["Bahan pewarna alami untuk tekstil", "Sumber energi biogas untuk memasak atau pembangkit listrik", "Pupuk gas yang disemprotkan ke tanaman", "Bahan pengawet alami untuk makanan"],
    ans: 1,
    exp: "Gas metana yang dihasilkan dari penguraian sampah organik dapat dikumpulkan dan dimanfaatkan sebagai biogas untuk memasak atau menghasilkan listrik."
  },
  {
    kat: "sampah",
    text: "Pengelolaan Terpadu dalam pengelolaan sampah melibatkan ...",
    opts: ["Hanya pemerintah daerah sebagai satu-satunya pengelola", "Pemerintah, masyarakat, dan industri dalam sistem pengolahan bersama", "Hanya teknisi dan insinyur lingkungan profesional", "Perusahaan swasta asing yang diberi konsesi pengelolaan"],
    ans: 1,
    exp: "Pengelolaan Terpadu melibatkan sinergi antara pemerintah, masyarakat, dan industri dalam sistem pengolahan sampah yang komprehensif dan berkelanjutan."
  },
  {
    kat: "sampah",
    text: "Dampak negatif sampah residu terhadap lingkungan adalah ...",
    opts: ["Menambah kesuburan tanah karena mengandung nutrisi", "Menumpuk di TPA dan mencemari tanah serta air karena tidak bisa didaur ulang", "Menyebabkan banjir besar di kota karena beratnya", "Menghasilkan racun yang langsung membunuh pohon di sekitarnya"],
    ans: 1,
    exp: "Sampah residu tidak bisa didaur ulang sehingga menumpuk di TPA dan dalam jangka panjang mencemari tanah dan air di sekitarnya."
  },
  {
    kat: "sampah",
    text: "Manfaat kompos dari sampah organik bagi tanaman adalah ...",
    opts: ["Menambah kelembapan tanah saja tanpa nutrisi tambahan", "Menyuburkan tanah secara alami dengan meningkatkan kandungan humus dan nutrisi", "Membuat tanah menjadi lebih keras sehingga tahan erosi", "Mengusir hama tanaman secara kimia"],
    ans: 1,
    exp: "Kompos menyuburkan tanah secara alami dengan meningkatkan kandungan humus, memperbaiki struktur tanah, dan menyediakan nutrisi penting bagi tanaman."
  },
  {
    kat: "sampah",
    text: "Minimum berapa wadah sampah terpisah yang dibutuhkan di rumah menurut prinsip dasar TeraNusa?",
    opts: ["Satu wadah untuk semua jenis sampah", "Dua wadah: basah dan kering saja", "Minimal tiga: Organik, Anorganik, dan B3/Residu", "Lima wadah untuk setiap sub-kategori sampah"],
    ans: 2,
    exp: "Minimal tiga wadah terpisah dibutuhkan: Organik, Anorganik, dan B3/Residu, agar setiap jenis dapat dikelola dengan tepat sesuai karakteristiknya."
  },
  {
    kat: "sampah",
    text: "Sampah dari kegiatan pertanian seperti sisa panen dan sekam disebut ...",
    opts: ["Sampah industri karena diproduksi massal", "Sampah B3 karena mengandung pestisida", "Limbah agraris yang termasuk sampah organik", "Sampah residu yang tidak bisa diolah"],
    ans: 2,
    exp: "Sisa panen dan sekam termasuk limbah agraris yang merupakan bagian dari sampah organik karena berasal dari makhluk hidup dan dapat terurai secara alami."
  },
  {
    kat: "sampah",
    text: "Dari sudut pandang ekonomi, Bank Sampah menguntungkan masyarakat karena ...",
    opts: ["Pemerintah membayar masyarakat untuk membuang sampah", "Warga mendapat uang atau barang dari sampah anorganik bernilai ekonomis", "Masyarakat bisa mengambil barang bekas secara gratis", "Bank memberikan kredit perumahan bagi penabung sampah"],
    ans: 1,
    exp: "Bank Sampah memungkinkan warga menukarkan sampah anorganik bernilai (plastik, kertas, logam) dengan uang atau barang, memberikan nilai ekonomi nyata dari pengelolaan sampah."
  },
  {
    kat: "sampah",
    text: "Penggunaan sedotan plastik sebaiknya dihindari karena ...",
    opts: ["Sedotan plastik mahal dan tidak efisien secara ekonomi", "Plastik sedotan sulit terurai dan sering berakhir di laut membahayakan satwa", "Sedotan mengurangi kualitas rasa minuman", "Produksi sedotan mencemari udara secara langsung"],
    ans: 1,
    exp: "Sedotan plastik sulit terurai dan sering berakhir di laut, di mana dapat termakan atau meluka satwa laut seperti penyu."
  },
  {
    kat: "sampah",
    text: "Minyak goreng bekas sebaiknya dikelola dengan cara ...",
    opts: ["Dibuang ke saluran air agar tidak mencemari lingkungan sekitar rumah", "Dibakar bersama sampah organik di halaman", "Dikumpulkan dan diserahkan ke pengepul untuk didaur ulang menjadi biodiesel", "Dicampur tanah dan dikubur di halaman belakang"],
    ans: 2,
    exp: "Minyak goreng bekas sebaiknya dikumpulkan dan diserahkan ke pengepul yang dapat mendaur ulangnya menjadi biodiesel, bukan dibuang ke saluran air."
  },
  {
    kat: "sampah",
    text: "Kegiatan beach cleanup bermanfaat untuk ...",
    opts: ["Menambah jumlah wisatawan yang datang ke pantai", "Membersihkan sampah di pantai untuk menjaga ekosistem laut", "Melatih kemampuan renang dan fisik masyarakat", "Mengumpulkan cangkang kerang untuk kerajinan tangan"],
    ans: 1,
    exp: "Beach cleanup adalah kegiatan membersihkan sampah di pantai untuk menjaga kebersihan ekosistem laut dan melindungi satwa serta wisata alam."
  },
  {
    kat: "sampah",
    text: "Perbedaan utama antara 'Sampah' dan 'Limbah' dalam konteks pengelolaan lingkungan adalah ...",
    opts: ["Keduanya identik dan tidak ada perbedaan apapun", "Sampah dari aktivitas rumah tangga, limbah dari proses industri atau produksi", "Sampah dari makhluk hidup, limbah dari benda mati", "Sampah berbahaya, limbah tidak berbahaya"],
    ans: 1,
    exp: "Sampah umumnya berasal dari aktivitas sehari-hari rumah tangga, sedangkan limbah dihasilkan dari proses industri atau kegiatan produksi tertentu."
  },
  {
    kat: "sampah",
    text: "Upaya mengurangi sampah elektronik (e-waste) yang paling tepat adalah ...",
    opts: ["Membuang perangkat elektronik lama ke tempat sampah biasa", "Membakar perangkat elektronik rusak di tempat terbuka", "Menyerahkan ke program daur ulang elektronik resmi atau pabriknya", "Mengubur perangkat elektronik dalam tanah di lahan kosong"],
    ans: 2,
    exp: "Perangkat elektronik mengandung bahan berbahaya dan harus diserahkan ke program daur ulang elektronik resmi yang mampu memroses komponen berbahayanya dengan aman."
  }
];

// ── BANK SOAL: PEMELIHARAAN (50 soal) ─────────────────────────────────────
const quizBankPemeliharaan = [
  // --- POHON ---
  {
    kat: "pemeliharaan",
    text: "Jarak tanam minimal antar pohon yang dianjurkan adalah ...",
    opts: ["50 cm agar akarnya saling menopang", "1–2 meter agar bisa ditanam berdekatan", "3–5 meter agar ada ruang tumbuh yang cukup", "10 meter agar tidak saling bersaing cahaya"],
    ans: 2,
    exp: "Pohon wajib diberi jarak minimal 3–5 meter antar pohon agar akar dan tajuknya memiliki ruang tumbuh yang cukup."
  },
  {
    kat: "pemeliharaan",
    text: "Tujuan pemangkasan (pruning) pada pohon adalah ...",
    opts: ["Mengurangi tinggi pohon agar mudah dipanen", "Memotong cabang kering dan mati agar energi fokus ke pertumbuhan sehat", "Membentuk pohon menjadi berbagai model hias", "Mempercepat gugurnya daun di musim kemarau"],
    ans: 1,
    exp: "Pruning bertujuan memotong cabang yang kering dan mati sehingga energi pohon dapat difokuskan ke pertumbuhan bagian yang sehat."
  },
  {
    kat: "pemeliharaan",
    text: "Jenis pupuk yang paling dianjurkan untuk pemeliharaan pohon di lingkungan alami adalah ...",
    opts: ["Pupuk kimia NPK konsentrasi tinggi untuk hasil cepat", "Pupuk organik seperti kompos atau pupuk kandang", "Pupuk urea yang dilarutkan dalam air siram", "Pupuk kimia campuran tiga jenis sekaligus"],
    ans: 1,
    exp: "Pupuk organik seperti kompos atau pupuk kandang lebih dianjurkan karena ramah lingkungan dan tidak merusak ekosistem tanah di sekitar pohon."
  },
  {
    kat: "pemeliharaan",
    text: "Mengapa bibit pohon perlu disiram secara teratur?",
    opts: ["Karena bibit butuh lebih banyak air dari pohon dewasa", "Karena akarnya belum cukup kuat untuk menyerap air dari tanah secara mandiri", "Karena tanpa penyiraman bibit akan menghasilkan buah terlalu dini", "Karena penyiraman mencegah serangga memakan daun muda"],
    ans: 1,
    exp: "Bibit pohon perlu disiram teratur karena sistem akarnya belum berkembang cukup untuk menyerap air sendiri dari dalam tanah."
  },
  // --- SEMAK ---
  {
    kat: "pemeliharaan",
    text: "Kunci utama dalam merawat tanaman semak hias adalah ...",
    opts: ["Pemberian pupuk kimia dua kali sehari", "Penggantian seluruh tanah pot setiap bulan", "Pemangkasan rutin untuk menjaga bentuk dan kesehatan", "Penyimpanan di dalam ruangan tanpa sinar matahari"],
    ans: 2,
    exp: "Pemangkasan rutin adalah kunci utama merawat semak karena menjaga bentuk, mendorong pertumbuhan tunas baru, dan menjaga kesehatan tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Tanaman semak hias umumnya membutuhkan kondisi cahaya berupa ...",
    opts: ["Tempat teduh total tanpa cahaya langsung", "Cahaya lampu buatan 24 jam sehari", "Sinar matahari penuh untuk pertumbuhan optimal", "Cahaya merah inframerah dari lampu khusus"],
    ans: 2,
    exp: "Sebagian besar tanaman semak hias membutuhkan sinar matahari penuh untuk tumbuh optimal dan menghasilkan daun yang berwarna indah."
  },
  {
    kat: "pemeliharaan",
    text: "Frekuensi penyiraman tanaman semak yang dianjurkan adalah ...",
    opts: ["Sekali seminggu sudah cukup untuk semua jenis semak", "Tidak perlu disiram karena semak tahan kering", "1–2 kali sehari disesuaikan dengan kondisi cuaca", "Setiap 2 jam sekali agar tanah selalu basah"],
    ans: 2,
    exp: "Tanaman semak sebaiknya disiram 1–2 kali sehari, disesuaikan dengan cuaca, agar tanah tidak terlalu kering namun tidak tergenang air."
  },
  // --- HERBA ---
  {
    kat: "pemeliharaan",
    text: "Media tanam terbaik untuk tanaman herba adalah ...",
    opts: ["Pasir pantai murni tanpa campuran apapun", "Tanah liat padat yang menahan air dengan baik", "Media gembur yang kaya bahan organik", "Kerikil kecil tanpa tanah agar mudah mengalirkan air"],
    ans: 2,
    exp: "Tanaman herba tumbuh optimal di media tanam yang gembur dan kaya bahan organik, sehingga akar dapat berkembang dan menyerap nutrisi secara maksimal."
  },
  {
    kat: "pemeliharaan",
    text: "Herba konsumsi seperti kemangi atau mint perlu dipetik secara rutin karena ...",
    opts: ["Daun tua mengandung racun yang perlu dibuang segera", "Pemanenan rutin merangsang pertumbuhan tunas dan daun baru", "Daun yang tidak dipetik akan rontok sendiri dan merusak akar", "Pemetikan mencegah serangan hama yang menyukai daun muda"],
    ans: 1,
    exp: "Pemanenan atau pemetikan rutin pada herba konsumsi merangsang pertumbuhan tunas baru sehingga tanaman terus produktif menghasilkan daun segar."
  },
  {
    kat: "pemeliharaan",
    text: "Yang membedakan perawatan herba dengan perawatan semak adalah ...",
    opts: ["Herba tidak butuh cahaya matahari sama sekali", "Herba konsumsi memerlukan pemanenan rutin sebagai perawatan khusus", "Herba harus diganti dengan tanaman baru setiap minggu", "Herba perlu disiram dengan air mineral khusus"],
    ans: 1,
    exp: "Perawatan khusus herba konsumsi adalah pemanenan atau pemetikan rutin yang tidak diperlukan pada tanaman semak biasa."
  },
  // --- TUMBUHAN AIR ---
  {
    kat: "pemeliharaan",
    text: "Hal paling penting dijaga dalam merawat tumbuhan air adalah ...",
    opts: ["Suhu air yang selalu hangat di atas 30 derajat", "Kualitas air yang bebas dari limbah sabun dan zat kimia berbahaya", "Volume air yang sangat banyak melebihi kapasitas kolam", "Pengasinan air dengan garam khusus tumbuhan air"],
    ans: 1,
    exp: "Kualitas air adalah prioritas utama dalam merawat tumbuhan air. Air harus dijaga tetap bersih dan bebas dari limbah sabun atau zat kimia berbahaya."
  },
  {
    kat: "pemeliharaan",
    text: "Daun tumbuhan air yang sudah membusuk harus segera diangkat karena ...",
    opts: ["Daun busuk menjadi pupuk terlalu cepat bagi tanaman", "Akan mencemari kualitas air dan menyebarkan penyakit ke tanaman lain", "Daun busuk menarik burung yang merusak kolam", "Daun busuk membuat air menjadi terlalu asam untuk ikan"],
    ans: 1,
    exp: "Daun dan bunga yang membusuk harus diangkat segera agar tidak mencemari kualitas air dan menyebarkan penyakit ke tanaman lain di kolam."
  },
  {
    kat: "pemeliharaan",
    text: "Eceng gondok sebagai tumbuhan air perlu dikendalikan pertumbuhannya karena ...",
    opts: ["Bunga eceng gondok sangat beracun bagi ikan", "Tumbuh terlalu cepat dan bisa menutup permukaan air menghalangi cahaya", "Akarnya merusak dinding kolam beton", "Menghasilkan bau yang tidak sedap bagi lingkungan sekitar"],
    ans: 1,
    exp: "Eceng gondok tumbuh sangat cepat dan jika tidak dikendalikan bisa menutup seluruh permukaan air sehingga menghalangi cahaya matahari masuk ke dalam air."
  },
  // --- PRINSIP PEMUPUKAN ---
  {
    kat: "pemeliharaan",
    text: "Nitrogen (N) dalam pupuk paling dibutuhkan pada fase ...",
    opts: ["Pembungaan agar bunga lebih lebat", "Vegetatif untuk mendukung pertumbuhan daun dan batang", "Pembuahan agar buah berkembang dengan baik", "Dormansi agar tanaman tidak tumbuh di musim dingin"],
    ans: 1,
    exp: "Nitrogen paling dibutuhkan pada fase vegetatif karena berperan penting dalam pertumbuhan daun dan batang tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Fosfor (P) dalam pupuk berfungsi untuk mendukung ...",
    opts: ["Pertumbuhan daun hijau yang lebat dan segar", "Ketahanan tanaman terhadap suhu ekstrem", "Pertumbuhan akar, bunga, dan biji tanaman", "Penyerapan air oleh daun melalui stomata"],
    ans: 2,
    exp: "Fosfor berperan penting dalam perkembangan sistem perakaran yang kuat serta mendukung pembungaan dan pembijian tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Kalium (K) dalam pupuk berguna terutama untuk ...",
    opts: ["Mempercepat pertumbuhan tinggi batang", "Menghasilkan warna hijau cerah pada daun", "Mendukung pertumbuhan buah dan ketahanan tanaman terhadap penyakit", "Mempercepat pembentukan akar adventif"],
    ans: 2,
    exp: "Kalium berperan dalam pertumbuhan buah dan meningkatkan ketahanan tanaman terhadap penyakit, kekeringan, dan kondisi lingkungan yang tidak menguntungkan."
  },
  {
    kat: "pemeliharaan",
    text: "Tanda tanaman kelebihan pupuk (keracunan pupuk) adalah ...",
    opts: ["Daun menjadi lebih hijau dan mengkilap", "Batang tumbuh sangat cepat melebihi normal", "Ujung daun menguning, layu, dan tanaman tampak terbakar", "Tanaman berbunga lebih awal dari biasanya"],
    ans: 2,
    exp: "Kelebihan pupuk menyebabkan penumpukan garam mineral yang merusak akar melalui osmosis terbalik, ditandai ujung daun menguning seperti terbakar."
  },
  {
    kat: "pemeliharaan",
    text: "Pengendalian hama secara alami yang dianjurkan menggunakan ...",
    opts: ["Pestisida kimia konsentrasi tinggi disemprot tiap hari", "Larutan herbisida yang diencerkan dengan air", "Neem oil atau larutan bawang putih yang ramah lingkungan", "Pupuk kimia berlebih untuk membunuh hama"],
    ans: 2,
    exp: "Pengendalian hama secara alami menggunakan neem oil atau larutan bawang putih lebih aman karena tidak merusak ekosistem dan tidak meninggalkan residu berbahaya."
  },
  {
    kat: "pemeliharaan",
    text: "Media tanam yang baik harus memiliki drainase yang baik artinya ...",
    opts: ["Menyimpan semua air agar tidak ada yang keluar", "Memungkinkan kelebihan air mengalir keluar agar akar tidak membusuk", "Mengandung kadar garam tinggi untuk mencegah bakteri", "Terbuat dari bahan sintetis yang tidak menyerap air"],
    ans: 1,
    exp: "Drainase yang baik memungkinkan kelebihan air mengalir keluar dari media tanam sehingga akar tidak tergenang dan tidak membusuk."
  },
  // --- HEWAN PELIHARAAN ---
  {
    kat: "pemeliharaan",
    text: "Makanan hewan peliharaan harus disesuaikan dengan usia karena ...",
    opts: ["Hewan muda dan tua menyukai warna makanan yang berbeda", "Kebutuhan nutrisi berbeda di setiap tahap kehidupan hewan", "Hewan tua selalu makan lebih banyak dari yang muda", "Hewan muda tidak bisa mencerna makanan padat apapun"],
    ans: 1,
    exp: "Kebutuhan nutrisi hewan berbeda di setiap tahap kehidupan: anak hewan butuh lebih banyak protein untuk tumbuh, hewan tua butuh nutrisi yang mudah dicerna."
  },
  {
    kat: "pemeliharaan",
    text: "Vaksinasi rutin pada hewan peliharaan dijadwalkan ...",
    opts: ["Hanya sekali saat hewan baru dibeli", "Setiap bulan tanpa pengecualian", "Tahunan sesuai jadwal dokter hewan", "Hanya saat hewan menunjukkan gejala sakit"],
    ans: 2,
    exp: "Vaksinasi hewan peliharaan dijadwalkan rutin tahunan untuk memperbarui kekebalan terhadap berbagai penyakit menular."
  },
  {
    kat: "pemeliharaan",
    text: "Mengapa hewan domestik seperti kucing dan anjing butuh stimulasi mental?",
    opts: ["Agar pertumbuhan otaknya lebih cepat dari normal", "Untuk menjaga kesehatan psikologis dan mencegah stres dan perilaku merusak", "Supaya nafsu makannya meningkat dan berat badan naik", "Agar warna bulunya lebih cerah dan mengkilap"],
    ans: 1,
    exp: "Stimulasi mental dan interaksi sosial penting untuk menjaga kesehatan psikologis hewan domestik dan mencegah stres yang dapat menyebabkan perilaku merusak."
  },
  {
    kat: "pemeliharaan",
    text: "Litter box kucing harus dibersihkan setiap hari karena ...",
    opts: ["Kotoran kucing mengandung bahan yang menyebabkan ledakan kimia", "Penumpukan bakteri dapat menyebabkan penyakit bagi kucing dan manusia", "Kucing tidak mau makan jika litter box kotor", "Bau litter box dapat menarik predator ke dalam rumah"],
    ans: 1,
    exp: "Litter box yang tidak dibersihkan menjadi sarang penumpukan bakteri berbahaya yang dapat menyebabkan penyakit bagi kucing maupun pemiliknya."
  },
  // --- HEWAN AKUATIK ---
  {
    kat: "pemeliharaan",
    text: "Filter akuarium harus bekerja 24 jam tanpa henti karena ...",
    opts: ["Ikan tidak bisa tidur jika filter mati di malam hari", "Amonia dari kotoran ikan terus diproduksi dan perlu selalu disaring", "Warna air akan berubah jika filter berhenti beberapa jam", "Filter mengatur suhu air yang berubah setiap saat"],
    ans: 1,
    exp: "Ikan terus menghasilkan amonia dari kotorannya sepanjang waktu, sehingga filter harus bekerja 24 jam untuk menjaga kadar amonia tetap aman."
  },
  {
    kat: "pemeliharaan",
    text: "Aerasi pada akuarium berfungsi untuk ...",
    opts: ["Menghasilkan suara gemericik yang menenangkan ikan", "Memastikan oksigen terlarut cukup tersedia bagi ikan dan organisme akuatik", "Mengaduk makanan agar merata di seluruh akuarium", "Menjaga suhu air tetap stabil di semua bagian"],
    ans: 1,
    exp: "Aerasi memompa oksigen ke dalam air sehingga kadar oksigen terlarut tetap cukup untuk kebutuhan pernapasan ikan dan organisme akuatik lainnya."
  },
  {
    kat: "pemeliharaan",
    text: "Penggantian air akuarium sebaiknya hanya 10–20% saja karena ...",
    opts: ["Mengganti lebih banyak akan terlalu mahal dan membuang-buang air", "Menghindari gangguan pada bakteri baik dan keseimbangan ekosistem akuarium", "Ikan akan stres jika air bersihnya terlalu banyak", "Tidak ada alasan khusus, hanya kebiasaan para peternak ikan"],
    ans: 1,
    exp: "Mengganti hanya 10–20% air mempertahankan bakteri baik (nitrifikasi) dan keseimbangan ekosistem akuarium yang diperlukan untuk kesehatan ikan."
  },
  {
    kat: "pemeliharaan",
    text: "Pakan ikan akuatik harus sesuai dengan ukuran bukaan mulut mereka agar ...",
    opts: ["Makanan terlihat lebih menarik di dalam air", "Ikan bisa mencerna makanan dengan efisien dan tidak ada sisa berlebih", "Biaya pakan bisa dikurangi secara signifikan", "Warna ikan menjadi lebih cerah dan menarik"],
    ans: 1,
    exp: "Pakan yang sesuai ukuran mulut memastikan ikan bisa memakannya dengan efisien, mengurangi sisa makanan yang mencemari air dan menjaga kualitas akuarium."
  },
  // --- HEWAN UNGGAS ---
  {
    kat: "pemeliharaan",
    text: "Makanan pokok bagi hewan unggas yang dianjurkan adalah ...",
    opts: ["Daging mentah cincang sebagai sumber protein utama", "Rumput segar yang dipotong setiap hari", "Biji-bijian berkualitas sebagai makanan utama", "Serangga hidup yang ditangkap dari alam"],
    ans: 2,
    exp: "Biji-bijian berkualitas merupakan makanan pokok yang memberikan nutrisi lengkap bagi sebagian besar jenis unggas peliharaan."
  },
  {
    kat: "pemeliharaan",
    text: "Alas kandang unggas harus dibersihkan dari kotoran setiap hari karena ...",
    opts: ["Kotoran unggas menghasilkan panas yang membahayakan burung", "Mencegah penumpukan amonia dari kotoran yang mengganggu pernapasan burung", "Warna kandang akan memudar jika terkena kotoran terlalu lama", "Kotoran burung menarik predator yang berbahaya"],
    ans: 1,
    exp: "Kotoran unggas menghasilkan amonia yang jika menumpuk dapat mengganggu sistem pernapasan burung dan menyebabkan berbagai penyakit."
  },
  {
    kat: "pemeliharaan",
    text: "Suplemen vitamin untuk burung unggas diberikan dengan cara ...",
    opts: ["Disuntikkan langsung ke bagian dada burung", "Dicampurkan ke dalam air minum mereka", "Dioleskan pada bulu burung setiap minggu", "Dimasukkan ke dalam makanan padat berupa butiran"],
    ans: 1,
    exp: "Suplemen vitamin untuk unggas umumnya diberikan dengan dicampurkan ke dalam air minum agar mudah dikonsumsi secara merata oleh burung."
  },
  {
    kat: "pemeliharaan",
    text: "Pemasteran suara pada burung kicau dilakukan dengan tujuan ...",
    opts: ["Membuat burung tenang agar tidak agresif ke pemilik", "Meningkatkan kualitas dan variasi kicauan burung", "Mengajarkan burung untuk diam saat ada tamu", "Mempercepat pertumbuhan bulu burung"],
    ans: 1,
    exp: "Pemasteran suara (memperdengarkan suara burung lain) dilakukan untuk meningkatkan kualitas, variasi, dan volume kicauan burung kicau peliharaan."
  },
  // --- HEWAN EKSOTIK ---
  {
    kat: "pemeliharaan",
    text: "Mikroklimat dalam kandang hewan eksotik berarti ...",
    opts: ["Ukuran kandang yang sangat kecil agar efisien", "Pengaturan suhu dan kelembapan sesuai habitat asli hewan", "Jenis makanan yang disediakan dalam kandang", "Warna dinding kandang yang menyerupai alam"],
    ans: 1,
    exp: "Mikroklimat berarti memanipulasi suhu dan kelembapan di dalam kandang agar menyerupai kondisi habitat asli hewan eksotik tersebut."
  },
  {
    kat: "pemeliharaan",
    text: "Mayoritas hewan eksotik seperti reptil membutuhkan pakan hidup karena ...",
    opts: ["Pakan mati mengandung bakteri berbahaya bagi reptil", "Sesuai dengan instink berburu alami mereka di alam liar", "Pakan hidup lebih murah dan mudah didapat", "Reptil tidak bisa mencerna makanan yang sudah mati"],
    ans: 1,
    exp: "Hewan eksotik seperti reptil membutuhkan pakan hidup karena sesuai dengan instink berburu alami mereka, dan pakan hidup memberikan stimulasi yang diperlukan."
  },
  {
    kat: "pemeliharaan",
    text: "Sistem penguncian kandang hewan eksotik harus sangat aman karena ...",
    opts: ["Hewan eksotik sering mencoba menjual diri ke tetangga", "Mencegah hewan melarikan diri demi keselamatan hewan dan manusia sekitar", "Pengunci mahal menunjukkan kualitas kandang yang baik", "Hukum mewajibkan kandang dengan kunci berlapis"],
    ans: 1,
    exp: "Kandang hewan eksotik harus memiliki sistem penguncian yang sangat aman untuk mencegah hewan melarikan diri, yang berbahaya bagi hewan itu sendiri maupun manusia di sekitarnya."
  },
  // --- KONSERVASI VEGETASI ---
  {
    kat: "pemeliharaan",
    text: "Perbedaan Reboisasi dan Aforestasi dalam upaya konservasi vegetasi adalah ...",
    opts: ["Reboisasi di darat, Aforestasi di laut", "Reboisasi menanam di hutan gundul, Aforestasi membuat hutan di lahan kosong baru", "Reboisasi menggunakan pohon impor, Aforestasi pohon lokal", "Reboisasi program pemerintah, Aforestasi program swasta"],
    ans: 1,
    exp: "Reboisasi menanam kembali di kawasan hutan yang telah gundul, sedangkan Aforestasi membuat hutan baru di lahan yang sebelumnya tidak berhutan."
  },
  {
    kat: "pemeliharaan",
    text: "Fungsi Kebun Raya dan Bank Benih dalam konservasi adalah ...",
    opts: ["Menjual benih tanaman langka kepada peneliti", "Menyimpan dan membiakkan vegetasi langka agar tidak punah", "Memproduksi pupuk organik dari tanaman langka", "Menghasilkan pendapatan dari wisata tanaman eksotik"],
    ans: 1,
    exp: "Kebun Raya dan Bank Benih adalah fasilitas konservasi ex situ yang berfungsi menyimpan dan membiakkan vegetasi langka untuk mencegah kepunahannya."
  },
  {
    kat: "pemeliharaan",
    text: "Konservasi In Situ untuk vegetasi dilakukan di ...",
    opts: ["Kebun botani dan laboratorium penelitian", "Taman nasional dan cagar alam di habitat asli tumbuhan", "Rumah kaca dan greenhouse yang dikontrol suhu", "Pusat pembibitan yang dikelola pemerintah"],
    ans: 1,
    exp: "Konservasi In Situ vegetasi dilakukan langsung di habitat asli tumbuhan tersebut, seperti di taman nasional dan cagar alam."
  },
  {
    kat: "pemeliharaan",
    text: "Tanda tanaman kekurangan air yang paling mudah dikenali adalah ...",
    opts: ["Bunga bermekaran lebih cepat dari biasanya", "Batang tumbuh sangat tinggi mencari sumber air", "Daun layu, menggulung, dan tampak lesu", "Akar keluar dari permukaan tanah mencari udara"],
    ans: 2,
    exp: "Daun yang layu, menggulung, dan tampak lesu adalah tanda paling umum dan mudah dikenali bahwa tanaman kekurangan air."
  },
  {
    kat: "pemeliharaan",
    text: "Pemangkasan daun atau cabang yang layu bertujuan agar ...",
    opts: ["Tanaman terlihat lebih rapi dan indah secara estetika", "Energi tanaman fokus ke bagian yang sehat dan produktif", "Cabang baru tumbuh lebih cepat dari yang dipangkas", "Mengurangi kebutuhan air tanaman secara keseluruhan"],
    ans: 1,
    exp: "Memangkas daun dan cabang yang layu memungkinkan tanaman memfokuskan energi dan nutrisinya ke bagian yang sehat sehingga tumbuh lebih baik."
  },
  {
    kat: "pemeliharaan",
    text: "Air yang menggenang di sekitar akar tanaman berbahaya karena ...",
    opts: ["Membuat tanah menjadi terlalu dingin bagi akar", "Menyebabkan akar membusuk karena kekurangan oksigen", "Menarik serangga yang memakan akar tanaman", "Mengencerkan pupuk sehingga tidak efektif"],
    ans: 1,
    exp: "Genangan air menyebabkan akar kekurangan oksigen (anaerob) sehingga akar membusuk dan tidak bisa menyerap nutrisi, yang dapat mematikan tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Cahaya matahari untuk tanaman dibagi menjadi tiga kategori, yaitu ...",
    opts: ["Merah, kuning, dan biru sesuai panjang gelombang", "Full sun, partial shade, dan teduh penuh sesuai kebutuhan jenis tanaman", "Pagi, siang, dan sore sesuai waktu penyinaran", "Alami, buatan, dan gabungan sesuai sumbernya"],
    ans: 1,
    exp: "Kebutuhan cahaya tanaman dibagi menjadi full sun (sinar penuh), partial shade (sebagian teduh), dan teduh penuh sesuai karakteristik masing-masing jenis tanaman."
  },
  {
    kat: "pemeliharaan",
    text: "Pemeriksaan rutin pada tanaman untuk pengendalian hama bertujuan untuk ...",
    opts: ["Menghitung jumlah daun yang tumbuh setiap minggu", "Mendeteksi tanda-tanda serangan hama sejak dini sebelum meluas", "Mengukur tinggi tanaman untuk laporan pertumbuhan", "Memotret tanaman untuk dokumentasi koleksi"],
    ans: 1,
    exp: "Pemeriksaan rutin memungkinkan deteksi dini serangan hama sebelum menyebar luas sehingga penanganan bisa dilakukan lebih efektif dan efisien."
  },
  {
    kat: "pemeliharaan",
    text: "Penyiraman tanaman sebaiknya dilakukan pada pagi atau sore hari karena ...",
    opts: ["Aturan adat yang sudah turun-temurun dari petani", "Mencegah penguapan berlebih dan mencegah daun terbakar sinar matahari", "Air lebih bersih dan bebas klorin di waktu tersebut", "Tanaman hanya membuka stomata pada pagi dan sore hari"],
    ans: 1,
    exp: "Penyiraman pagi atau sore hari mencegah penguapan berlebihan (karena suhu rendah) dan mencegah daun terbakar akibat efek lensa air di bawah sinar matahari terik."
  },
  {
    kat: "pemeliharaan",
    text: "Edukasi lingkungan sebagai bagian dari konservasi vegetasi bertujuan untuk ...",
    opts: ["Mewajibkan semua warga menanam 100 pohon per tahun", "Meningkatkan kesadaran masyarakat tentang pentingnya menjaga vegetasi", "Memberikan sanksi kepada yang merusak tanaman", "Membangun lebih banyak kebun raya di seluruh Indonesia"],
    ans: 1,
    exp: "Edukasi lingkungan bertujuan meningkatkan kesadaran dan pemahaman masyarakat tentang pentingnya menjaga vegetasi untuk keseimbangan ekosistem dan kehidupan."
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

// ── RENDER ────────────────────────────────────────────────────────────────
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

// ── HASIL ─────────────────────────────────────────────────────────────────
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
  const count  = isPerfect ? 100 : 60;
  const pieces = [];
  for (let i = 0; i < count; i++) {
    pieces.push({
      x:Math.random()*canvas.width, y:-10-Math.random()*60,
      r:3+Math.random()*5, speed:1.5+Math.random()*2.5,
      color:COLORS[Math.floor(Math.random()*COLORS.length)],
      angle:0, angleSpeed:0.08+Math.random()*0.12,
      drift:(Math.random()-0.5)*1.5, shape:Math.random()>0.5?"rect":"circle"
    });
  }
  let frame = 0;
  const maxFrames = isPerfect ? 260 : 160;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.angle);
      ctx.globalAlpha=Math.max(0,1-frame/maxFrames); ctx.fillStyle=p.color;
      if(p.shape==="rect") ctx.fillRect(-p.r/2,-p.r/2,p.r*1.6,p.r*0.55);
      else{ctx.beginPath();ctx.arc(0,0,p.r/2,0,Math.PI*2);ctx.fill();}
      ctx.restore();
      p.y+=p.speed; p.angle+=p.angleSpeed; p.x+=p.drift+Math.sin(p.angle)*0.8;
      if(p.y>canvas.height+10) p.y=-10;
    });
    frame++;
    if(frame<maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

// ── TOMBOL ────────────────────────────────────────────────────────────────
function quizBackToKategori() {
  window.quizSedangBerjalan = false;
  document.getElementById("quiz-card").style.display            = "block";
  document.getElementById("quiz-result-card").style.display     = "none";
  document.getElementById("quiz-main-screen").style.display     = "none";
  document.getElementById("quiz-kategori-screen").style.display = "block";
}

function quizRestart() {
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = 264;
  ring.classList.remove("quiz-ring-perfect","quiz-ring-low");
  document.getElementById("quiz-card").style.display        = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  quizMulai(quizKategoriAktif);
}

// ── NAVBAR GUARD ──────────────────────────────────────────────────────────
window.quizSedangBerjalan = false;

document.addEventListener("click", function(e) {
  const link = e.target.closest("a");
  if (!link || !window.quizSedangBerjalan) return;
  const href = link.getAttribute("href");
  if (!href || href === "#" || href.startsWith("javascript")) return;
  if (link.closest(".quiz-shell")) return;
  e.preventDefault(); e.stopPropagation();
  const tujuan = link.textContent.trim() || href;
  if (confirm(`Kamu sedang mengerjakan quiz.\nKeluar ke "${tujuan}"?\n\nProgresmu tidak akan tersimpan.`)) {
    window.quizSedangBerjalan = false;
    window.location.href = href;
  }
}, true);