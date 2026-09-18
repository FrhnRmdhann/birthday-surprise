/* =========================
   ELEMENTS
========================= */

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

const openButton = document.getElementById("openButton");

const envelope = document.getElementById("envelope");

const letterOverlay = document.getElementById("letterOverlay");

/* =========================
   OPEN LETTER
========================= */

openButton.addEventListener("click", function (event) {
  event.stopPropagation();

  /* Buka flap */

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
           Tunggu amplop terbuka
        */

  setTimeout(function () {
    letterOverlay.classList.add("show");
  }, 900);
});

/* =========================
   CLOSE LETTER
========================= */

function closeLetter() {
  letterOverlay.classList.remove("show");

  /*
       Setelah surat mengecil/
       menghilang, tutup amplop
    */

  setTimeout(function () {
    envelope.classList.remove("open");
  }, 700);
}

/* =========================
   TAP ANYWHERE
========================= */

letterOverlay.addEventListener("click", function () {
  closeLetter();
});

/* =========================
   MUSIC
========================= */

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
   BLOW CANDLE
========================= */

const blowButton = document.getElementById("blowButton");

const flames = document.querySelectorAll(".flame");

const wishMessage = document.getElementById("wishMessage");

blowButton.addEventListener("click", function () {
  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  blowButton.textContent = "✨ Lilinnya sudah padam!";

  setTimeout(function () {
    wishMessage.classList.add("show");

    wishMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 800);
});

/* =========================
   WISH
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
