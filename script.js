/* =========================================
   ELEMENT
========================================= */

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

const openButton = document.getElementById("openButton");
const envelope = document.getElementById("envelope");

const letterOverlay = document.getElementById("letterOverlay");

/* =========================================
   OPEN LETTER
========================================= */

openButton.addEventListener("click", function (event) {
  event.stopPropagation();

  console.log("Tombol buka surat diklik");

  /* Buka amplop */
  envelope.classList.add("open");

  /* Putar musik */

  music
    .play()
    .then(function () {
      musicButton.textContent = "🔊";
    })
    .catch(function (error) {
      console.log("Musik tidak bisa otomatis dimainkan:", error);
    });

  /*
        Tunggu animasi amplop selesai,
        kemudian tampilkan surat besar
    */

  setTimeout(function () {
    console.log("Menampilkan letter overlay");

    letterOverlay.classList.add("show");
  }, 900);
});

/* =========================================
   CLOSE LETTER
========================================= */

letterOverlay.addEventListener("click", function () {
  console.log("Letter ditutup");

  letterOverlay.classList.remove("show");

  /*
        Setelah overlay hilang,
        tutup kembali amplop
    */

  setTimeout(function () {
    envelope.classList.remove("open");
  }, 300);
});

/* =========================================
   MUSIC BUTTON
========================================= */

musicButton.addEventListener("click", function (event) {
  event.stopPropagation();

  if (music.paused) {
    music.play();

    musicButton.textContent = "🔊";
  } else {
    music.pause();

    musicButton.textContent = "🔇";
  }
});

/* =========================================
   GO TO CAKE
========================================= */

const toCake = document.getElementById("toCake");
const cakeSection = document.getElementById("cakeSection");

toCake.addEventListener("click", function () {
  cakeSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================================
   BLOW CANDLE
========================================= */

const blowButton = document.getElementById("blowButton");
const flames = document.querySelectorAll(".flame");
const wishMessage = document.getElementById("wishMessage");

blowButton.addEventListener("click", function () {
  /* Matikan semua api */

  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  /* Ubah tombol */

  blowButton.textContent = "✨ Lilinnya sudah padam!";

  /* Tampilkan wish */

  setTimeout(function () {
    wishMessage.classList.add("show");

    wishMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 800);
});

/* =========================================
   WISH BUTTON
========================================= */

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

/* =========================================
   GO TO PHOTOS
========================================= */

const toPhotos = document.getElementById("toPhotos");
const photosSection = document.querySelector(".photos-section");

toPhotos.addEventListener("click", function () {
  photosSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================================
   GO TO FINAL
========================================= */

const toFinal = document.getElementById("toFinal");
const finalSection = document.querySelector(".final-section");

toFinal.addEventListener("click", function () {
  finalSection.scrollIntoView({
    behavior: "smooth",
  });
});
