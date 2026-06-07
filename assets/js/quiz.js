// ── Data soal ──────────────────────────────────────────────────────────────
const quizData = [
  {
    text: "Pulau manakah yang terkenal dengan Bunga Raflesia?",
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
  }
];

// ── State ──────────────────────────────────────────────────────────────────
let quizCur = 0;
let quizCorrect = 0;
let quizWrong = 0;
let quizStreak = 0;
let quizAnswered = false;
const quizAnsweredState = new Array(quizData.length).fill(null);

// ── Render soal ────────────────────────────────────────────────────────────
function quizRender() {
  const q = quizData[quizCur];

  document.getElementById("quiz-q-num").textContent = `Soal ${quizCur + 1} dari ${quizData.length}`;
  document.getElementById("quiz-prog").style.width = `${((quizCur + 1) / quizData.length) * 100}%`;
  document.getElementById("quiz-q-text").textContent = q.text;
  document.getElementById("quiz-score-info").textContent = `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;
  document.getElementById("quiz-explanation").style.display = "none";
  document.getElementById("quiz-next-btn").style.display = "none";
  document.getElementById("quiz-kirim-row").style.display = "none";

  quizAnswered = quizAnsweredState[quizCur] !== null;

  // Streak badge
  const streakEl = document.getElementById("quiz-streak-el");
  if (quizStreak >= 2) {
    streakEl.style.display = "inline";
    streakEl.textContent = `Streak: ${quizStreak}`;
  } else {
    streakEl.style.display = "none";
  }

  // Render pilihan jawaban
  const optDiv = document.getElementById("quiz-options");
  optDiv.innerHTML = "";

  q.opts.forEach((o, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.innerHTML = `
      <span class="quiz-radio-dot"><span class="quiz-dot-inner"></span></span>
      <span>${o}</span>
    `;

    if (quizAnswered) {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add("correct");
      else if (i === quizAnsweredState[quizCur]) btn.classList.add("wrong");
    } else {
      btn.onclick = () => quizSelect(i, btn);
    }

    optDiv.appendChild(btn);
  });

  // Tampilkan penjelasan jika sudah dijawab
  if (quizAnswered) {
    document.getElementById("quiz-explanation").textContent = q.exp;
    document.getElementById("quiz-explanation").style.display = "block";

    if (quizCur === quizData.length - 1) {
      document.getElementById("quiz-kirim-row").style.display = "block";
    } else {
      document.getElementById("quiz-next-btn").style.display = "block";
    }
  }

  // Tombol Back
  document.getElementById("quiz-back-btn").style.display = quizCur > 0 ? "inline-block" : "none";
}

// ── Pilih jawaban ──────────────────────────────────────────────────────────
function quizSelect(idx, btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizAnsweredState[quizCur] = idx;

  const q = quizData[quizCur];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btn.classList.add("correct");
    quizCorrect++;
    quizStreak++;
  } else {
    btn.classList.add("wrong");
    quizWrong++;
    quizStreak = 0;
    allBtns[q.ans].classList.add("reveal");
  }

  document.getElementById("quiz-score-info").textContent = `Benar: ${quizCorrect} \u00a0|\u00a0 Salah: ${quizWrong}`;
  document.getElementById("quiz-explanation").textContent = q.exp;
  document.getElementById("quiz-explanation").style.display = "block";

  const streakEl = document.getElementById("quiz-streak-el");
  if (quizStreak >= 2) {
    streakEl.style.display = "inline";
    streakEl.textContent = `Streak: ${quizStreak}`;
  }

  if (quizCur === quizData.length - 1) {
    document.getElementById("quiz-kirim-row").style.display = "block";
  } else {
    document.getElementById("quiz-next-btn").style.display = "block";
  }
}

// ── Navigasi ───────────────────────────────────────────────────────────────
function quizGoNext() {
  if (quizCur < quizData.length - 1) {
    quizCur++;
    quizRender();
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
  document.getElementById("quiz-result-card").style.display = "block";
  document.getElementById("quiz-r-score").textContent = quizCorrect;

  const pct = (quizCorrect / quizData.length) * 100;
  let msg, sub;

  if (pct === 100) {
    msg = "Sempurna! Luar biasa!";
    sub = "Kamu menjawab semua soal dengan benar!";
  } else if (pct >= 80) {
    msg = "Bagus sekali!";
    sub = "Hampir sempurna, terus belajar!";
  } else if (pct >= 60) {
    msg = "Lumayan baik!";
    sub = "Masih ada yang perlu dipelajari lagi.";
  } else {
    msg = "Semangat belajar lagi!";
    sub = "Jangan menyerah, coba ulangi quiz ini.";
  }

  document.getElementById("quiz-r-msg").textContent = msg;
  document.getElementById("quiz-r-sub").textContent = sub;
}

// ── Reset quiz ─────────────────────────────────────────────────────────────
function quizRestart() {
  quizCur = 0;
  quizCorrect = 0;
  quizWrong = 0;
  quizStreak = 0;
  quizAnswered = false;
  quizAnsweredState.fill(null);

  document.getElementById("quiz-card").style.display = "block";
  document.getElementById("quiz-result-card").style.display = "none";
  quizRender();
}

// ── Init ───────────────────────────────────────────────────────────────────
quizRender();