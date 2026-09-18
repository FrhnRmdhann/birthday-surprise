/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

/* =========================
   ENVELOPE
========================= */

const openButton = document.getElementById("openButton");

const envelope = document.getElementById("envelope");

const letterPaper = document.getElementById("letterPaper");

/* =========================
   OPEN LETTER
========================= */

openButton.addEventListener("click", function (event) {
  event.stopPropagation();

  /* Buka amplop */

  envelope.classList.add("open");

  /* Putar musik */

  music
    .play()
    .then(function () {
      musicButton.textContent = "🔊";
    })
    .catch(function () {
      console.log("Musik belum bisa dimainkan.");
    });

  /*
       Tunggu flap amplop terbuka
    */

  setTimeout(function () {
    letterPaper.classList.add("expanding");

    document.body.classList.add("letter-open");
  }, 900);
});

/* =========================
   KETUK DI MANA SAJA
========================= */

document.addEventListener("click", function () {
  /*
           Kalau surat sedang terbuka,
           klik/tap di mana saja
           akan menutup surat.
        */

  if (document.body.classList.contains("letter-open")) {
    closeLetter();
  }
});

/* =========================
   TOUCH / TAP MOBILE
========================= */

document.addEventListener("touchend", function () {
  if (document.body.classList.contains("letter-open")) {
    closeLetter();
  }
});

/* =========================
   CLOSE LETTER
========================= */

function closeLetter() {
  /*
       Hilangkan surat besar
    */

  letterPaper.classList.remove("expanding");

  document.body.classList.remove("letter-open");

  /*
       Setelah animasi selesai,
       tutup kembali amplop.
    */

  setTimeout(function () {
    envelope.classList.remove("open");
  }, 700);
}

/* =========================
   MUSIC BUTTON
========================= */

musicButton.addEventListener("click", function (event) {
  /*
           Jangan dianggap sebagai
           tap untuk menutup surat.
        */

  event.stopPropagation();

  if (music.paused) {
    music.play();

    musicButton.textContent = "🔊";
  } else {
    music.pause();

    musicButton.textContent = "🔇";
  }
});

/* =========================
   CAKE
========================= */

const toCake = document.getElementById("toCake");

const cakeSection = document.getElementById("cakeSection");

toCake.addEventListener("click", function () {
  cakeSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================
   BLOW CANDLES
========================= */

const blowButton = document.getElementById("blowButton");

const flames = document.querySelectorAll(".flame");

const wishMessage = document.getElementById("wishMessage");

blowButton.addEventListener("click", function () {
  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  blowButton.textContent = "✨ Lilinnya sudah padam!";

  blowButton.classList.add("blown");

  setTimeout(function () {
    wishMessage.classList.add("show");

    wishMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 800);
});

/* =========================
   WISH BUTTON
========================= */

const wishButton = document.getElementById("wishButton");

const letterSection = document.querySelector(".letter-section");

wishButton.addEventListener("click", function () {
  wishButton.textContent = "Wish saved in the universe ✨";

  setTimeout(function () {
    letterSection.scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);
});

/* =========================
   PHOTOS
========================= */

const toPhotos = document.getElementById("toPhotos");

const photosSection = document.querySelector(".photos-section");

toPhotos.addEventListener("click", function () {
  photosSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================
   FINAL
========================= */

const toFinal = document.getElementById("toFinal");

const finalSection = document.querySelector(".final-section");

toFinal.addEventListener("click", function () {
  finalSection.scrollIntoView({
    behavior: "smooth",
  });
});
