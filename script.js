const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

const openButton = document.getElementById("openButton");

const envelope = document.getElementById("envelope");

const opening = document.getElementById("opening");

const mainContent = document.getElementById("mainContent");

/* =========================
   BUKA AMPLOP
========================= */

openButton.addEventListener("click", function () {
  envelope.classList.add("open");

  /*
        Musik mulai setelah user
        menekan tombol.
    */

  music
    .play()
    .then(function () {
      musicButton.textContent = "🔊";
    })
    .catch(function () {
      console.log("Musik belum bisa dimainkan.");
    });

  setTimeout(function () {
    opening.style.display = "none";

    mainContent.style.display = "block";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1200);
});

/* =========================
   MUSIC ON / OFF
========================= */

let musicPlaying = true;

musicButton.addEventListener("click", function () {
  if (music.paused) {
    music.play();

    musicButton.textContent = "🔊";

    musicPlaying = true;
  } else {
    music.pause();

    musicButton.textContent = "🔇";

    musicPlaying = false;
  }
});

/* =========================
   SCROLL KE CAKE
========================= */

const toCake = document.getElementById("toCake");

const cakeSection = document.getElementById("cakeSection");

toCake.addEventListener("click", function () {
  cakeSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================
   TIUP LILIN
========================= */

const blowButton = document.getElementById("blowButton");

const flames = document.querySelectorAll(".flame");

const wishMessage = document.getElementById("wishMessage");

blowButton.addEventListener("click", function () {
  /*
        Hilangkan semua api
    */

  flames.forEach(function (flame) {
    flame.style.display = "none";
  });

  blowButton.textContent = "✨ Lilinnya sudah padam!";

  blowButton.classList.add("blown");

  /*
        Tampilkan Make A Wish
    */

  setTimeout(function () {
    wishMessage.classList.add("show");

    wishMessage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 800);
});

/* =========================
   MAKE A WISH
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
   KE FOTO
========================= */

const toPhotos = document.getElementById("toPhotos");

const photosSection = document.querySelector(".photos-section");

toPhotos.addEventListener("click", function () {
  photosSection.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================
   KE FINAL
========================= */

const toFinal = document.getElementById("toFinal");

const finalSection = document.querySelector(".final-section");

toFinal.addEventListener("click", function () {
  finalSection.scrollIntoView({
    behavior: "smooth",
  });
});
