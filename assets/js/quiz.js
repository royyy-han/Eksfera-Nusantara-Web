// ── Bank soal (lebih dari 10, akan diambil acak) ──────────────────────────
const quizBank = [
  {
    text: "Pulau manakah yang terkenal dengan Bunga Rafflesia?",
    opts: ["Sumatera", "Papua", "Jawa", "Sulawesi"],
    ans: 0,
    exp: "Bunga Rafflesia arnoldii pertama kali ditemukan di hutan tropis Sumatera dan menjadi ikon pulau tersebut."
  },
  {
    text: "Apa nama danau terbesar di Indonesia?",
    opts: ["Danau Maninjau", "Danau Toba", "Danau Sentani", "Danau Poso"],
    ans: 1,
    exp: "Danau Toba di Sumatera Utara adalah danau vulkanik terbesar di Indonesia sekaligus danau vulkanik terbesar di dunia."
  },
  {
    text: "Siapakah penulis novel 'Laskar Pelangi'?",
    opts: ["Pramoedya Ananta Toer", "Habiburrahman El Shirazy", "Andrea Hirata", "Dee Lestari"],
    ans: 2,
    exp: "Laskar Pelangi ditulis oleh Andrea Hirata dan pertama kali diterbitkan tahun 2005."
  },
  {
    text: "Berapakah jumlah provinsi di Indonesia saat ini?",
    opts: ["34", "36", "37", "38"],
    ans: 3,
    exp: "Indonesia kini memiliki 38 provinsi setelah pemekaran beberapa daerah termasuk provinsi baru di Papua."
  },
  {
    text: "Apa lambang negara Indonesia?",
    opts: ["Harimau Sumatera", "Komodo", "Garuda Pancasila", "Elang Jawa"],
    ans: 2,
    exp: "Garuda Pancasila adalah lambang negara Indonesia yang diresmikan pada 11 Februari 1950."
  },
  {
    text: "Bahasa resmi negara Indonesia adalah?",
    opts: ["Bahasa Jawa", "Bahasa Melayu", "Bahasa Indonesia", "Bahasa Sunda"],
    ans: 2,
    exp: "Bahasa Indonesia ditetapkan sebagai bahasa resmi dalam Sumpah Pemuda tahun 1928 dan UUD 1945."
  },
  {
    text: "Siapakah Presiden pertama Republik Indonesia?",
    opts: ["Mohammad Hatta", "Soekarno", "Soeharto", "Habibie"],
    ans: 1,
    exp: "Ir. Soekarno adalah Presiden pertama RI yang menjabat sejak proklamasi kemerdekaan 17 Agustus 1945."
  },
  {
    text: "Gunung tertinggi di Indonesia adalah?",
    opts: ["Gunung Rinjani", "Gunung Kerinci", "Puncak Jaya", "Gunung Semeru"],
    ans: 2,
    exp: "Puncak Jaya di Papua adalah gunung tertinggi di Indonesia dengan ketinggian sekitar 4.884 mdpl."
  },
  {
    text: "Apa nama rumah adat dari Minangkabau, Sumatera Barat?",
    opts: ["Joglo", "Gadang", "Honai", "Lamin"],
    ans: 1,
    exp: "Rumah Gadang adalah rumah adat masyarakat Minangkabau yang terkenal dengan atapnya yang melengkung seperti tanduk kerbau."
  },
  {
    text: "Hewan apakah yang menjadi fauna khas Pulau Komodo?",
    opts: ["Harimau Sumatera", "Orangutan", "Komodo", "Anoa"],
    ans: 2,
    exp: "Komodo (Varanus komodoensis) adalah kadal terbesar di dunia yang hanya ditemukan di Pulau Komodo dan sekitarnya."
  },
  {
    text: "Tari Kecak berasal dari provinsi mana?",
    opts: ["Jawa Tengah", "Nusa Tenggara Barat", "Bali", "Lombok"],
    ans: 2,
    exp: "Tari Kecak adalah tari ritual yang berasal dari Bali dan biasanya menggambarkan kisah Ramayana."
  },
  {
    text: "Apa nama bunga nasional Indonesia yang dijuluki 'Puspa Bangsa'?",
    opts: ["Anggrek Bulan", "Melati Putih", "Rafflesia Arnoldii", "Bunga Bangkai"],
    ans: 1,
    exp: "Melati Putih (Jasminum sambac) ditetapkan sebagai Puspa Bangsa, salah satu bunga nasional Indonesia."
  }
];

const TOTAL_SOAL = 10;

// ── State ──────────────────────────────────────────────────────────────────
let quizData = [];
let quizCur = 0;
let quizCorrect = 0;
let quizWrong = 0;
let quizStreak = 0;
let quizMaxStreak = 0;
let quizAnswered = false;
let quizAnsweredState = [];

// ── Acak & ambil 10 soal ──────────────────────────────────────────────────
function quizShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function quizInit() {
  quizData = quizShuffle(quizBank).slice(0, TOTAL_SOAL);
  quizCur = 0;
  quizCorrect = 0;
  quizWrong = 0;
  quizStreak = 0;
  quizMaxStreak = 0;
  quizAnswered = false;
  quizAnsweredState = new Array(TOTAL_SOAL).fill(null);
}

// ── Render soal ────────────────────────────────────────────────────────────
function quizRender() {
  const q = quizData[quizCur];

  document.getElementById("quiz-q-num").textContent =
    `Soal ${quizCur + 1} dari ${TOTAL_SOAL}`;
  document.getElementById("quiz-prog").style.width =
    `${((quizCur + 1) / TOTAL_SOAL) * 100}%`;
  document.getElementById("quiz-q-text").textContent = q.text;
  document.getElementById("quiz-score-info").textContent =
    `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;
  document.getElementById("quiz-explanation").style.display = "none";
  document.getElementById("quiz-next-btn").style.display = "none";

  quizAnswered = quizAnsweredState[quizCur] !== null;

  // Streak badge
  const sb = document.getElementById("quiz-streak-badge");
  if (quizStreak >= 2) {
    document.getElementById("quiz-streak-num").textContent = quizStreak;
    sb.classList.add("quiz-show");
  } else {
    sb.classList.remove("quiz-show");
  }

  // Render pilihan
  const optDiv = document.getElementById("quiz-options");
  optDiv.innerHTML = "";
  q.opts.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.innerHTML = `
      <span class="quiz-radio-dot"><span class="quiz-dot-inner"></span></span>
      <span>${o}</span>`;

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
    // Soal terakhir: ganti teks tombol
    document.getElementById("quiz-next-btn").textContent =
      quizCur === TOTAL_SOAL - 1 ? "Lihat Hasil" : "Next";
  }

  document.getElementById("quiz-back-btn").style.display =
    quizCur > 0 ? "inline-block" : "none";
}

// ── Pilih jawaban ──────────────────────────────────────────────────────────
function quizSelect(idx, btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizAnsweredState[quizCur] = idx;

  const q = quizData[quizCur];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => (b.disabled = true));

  if (idx === q.ans) {
    btn.classList.add("correct");
    quizCorrect++;
    quizStreak++;
    if (quizStreak > quizMaxStreak) quizMaxStreak = quizStreak;
  } else {
    btn.classList.add("wrong");
    quizWrong++;
    quizStreak = 0;
    allBtns[q.ans].classList.add("reveal");
  }

  // Update score
  document.getElementById("quiz-score-info").textContent =
    `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;

  // Streak badge animasi
  const sb = document.getElementById("quiz-streak-badge");
  if (quizStreak >= 2) {
    document.getElementById("quiz-streak-num").textContent = quizStreak;
    if (!sb.classList.contains("quiz-show")) {
      sb.classList.add("quiz-show");
    } else {
      sb.classList.remove("quiz-bump");
      void sb.offsetWidth; // reflow untuk trigger ulang animasi
      sb.classList.add("quiz-bump");
    }
  } else {
    sb.classList.remove("quiz-show", "quiz-bump");
  }

  // Tampilkan penjelasan
  document.getElementById("quiz-explanation").textContent = q.exp;
  document.getElementById("quiz-explanation").style.display = "block";
  document.getElementById("quiz-next-btn").style.display = "block";
  document.getElementById("quiz-next-btn").textContent =
    quizCur === TOTAL_SOAL - 1 ? "Lihat Hasil" : "Next";
}

// ── Navigasi ───────────────────────────────────────────────────────────────
function quizGoNext() {
  if (quizCur < TOTAL_SOAL - 1) {
    quizCur++;
    quizRender();
  } else {
    quizShowResult();
  }
}

function quizGoBack() {
  if (quizCur > 0) {
    quizCur--;
    quizRender();
  }
}

// ── Tampilkan hasil ────────────────────────────────────────────────────────
function quizShowResult() {
  document.getElementById("quiz-card").style.display = "none";
  const rc = document.getElementById("quiz-result-card");
  rc.style.display = "block";

  const pct = quizCorrect / TOTAL_SOAL;

  // Ring lingkaran
  const circumference = 264;
  const offset = circumference - circumference * pct;
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = circumference; // reset dulu
  ring.classList.remove("quiz-ring-perfect", "quiz-ring-low");
  if (pct === 1)      ring.classList.add("quiz-ring-perfect");
  else if (pct < 0.4) ring.classList.add("quiz-ring-low");
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 150);

  document.getElementById("quiz-ring-score").textContent =
    `${quizCorrect}/${TOTAL_SOAL}`;
  document.getElementById("quiz-ring-pct").textContent =
    `${Math.round(pct * 100)}%`;

  // Stats
  document.getElementById("quiz-stat-correct").textContent = quizCorrect;
  document.getElementById("quiz-stat-wrong").textContent   = quizWrong;
  document.getElementById("quiz-stat-streak").textContent  = quizMaxStreak;

  // Pesan & emoji
  let emoji, msg, sub;
  if (pct === 1) {
    emoji = "🏆"; msg = "Sempurna! Luar biasa!";
    sub   = "Semua jawaban benar. Kamu jenius!";
  } else if (pct >= 0.8) {
    emoji = "🎉"; msg = "Bagus sekali!";
    sub   = "Hampir sempurna, tinggal sedikit lagi!";
  } else if (pct >= 0.6) {
    emoji = "👍"; msg = "Lumayan baik!";
    sub   = "Terus belajar, kamu pasti bisa lebih baik!";
  } else if (pct >= 0.4) {
    emoji = "📚"; msg = "Perlu belajar lebih!";
    sub   = "Masih banyak yang bisa dipelajari, semangat!";
  } else {
    emoji = "💪"; msg = "Jangan menyerah!";
    sub   = "Coba lagi, setiap percobaan membuatmu lebih pintar!";
  }

  document.getElementById("quiz-result-emoji").textContent = emoji;
  document.getElementById("quiz-result-msg").textContent   = msg;
  document.getElementById("quiz-result-sub").textContent   = sub;

  // Confetti hanya kalau skor >= 60%
  if (pct >= 0.6) quizLaunchConfetti(pct === 1);
}

// ── Confetti ───────────────────────────────────────────────────────────────
function quizLaunchConfetti(isPerfect) {
  const canvas = document.getElementById("quiz-confetti");
  const ctx    = canvas.getContext("2d");
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const COLORS = ["#4a7a38","#EF9F27","#D4537E","#378ADD","#E24B4A","#1D9E75","#EF9F27"];
  const count  = isPerfect ? 100 : 60;
  const pieces = [];

  for (let i = 0; i < count; i++) {
    pieces.push({
      x:          Math.random() * canvas.width,
      y:          -10 - Math.random() * 60,
      r:          3 + Math.random() * 5,
      speed:      1.5 + Math.random() * 2.5,
      color:      COLORS[Math.floor(Math.random() * COLORS.length)],
      angle:      0,
      angleSpeed: 0.08 + Math.random() * 0.12,
      drift:      (Math.random() - 0.5) * 1.5,
      shape:      Math.random() > 0.5 ? "rect" : "circle"
    });
  }

  let frame = 0;
  const maxFrames = isPerfect ? 260 : 160;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = Math.max(0, 1 - frame / maxFrames);
      ctx.fillStyle = p.color;
      if (p.shape === "rect") {
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r * 1.6, p.r * 0.55);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      p.y     += p.speed;
      p.angle += p.angleSpeed;
      p.x     += p.drift + Math.sin(p.angle) * 0.8;
      if (p.y > canvas.height + 10) p.y = -10;
    });
    frame++;
    if (frame < maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}

// ── Keluar → konfirmasi → beranda ─────────────────────────────────────────
function quizKeluar() {
  if (confirm("Yakin ingin keluar dari quiz? Progresmu tidak akan tersimpan.")) {
    window.location.href = "beranda.html";
  }
}

// ── Ulangi quiz ────────────────────────────────────────────────────────────
function quizRestart() {
  const ring = document.getElementById("quiz-ring-fill");
  ring.style.strokeDashoffset = 264;
  ring.classList.remove("quiz-ring-perfect", "quiz-ring-low");
  const canvas = document.getElementById("quiz-confetti");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

  document.getElementById("quiz-card").style.display    = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  quizInit();
  quizRender();
}

// ── Start ──────────────────────────────────────────────────────────────────
quizInit();
quizRender();