document.getElementById("authForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const umur = document.getElementById("umur").value.trim();
  const lahir = document.getElementById("lahir").value.trim();
  const error = document.getElementById("error");

  const validNama = "Azimas Perwata Saputra";
  const validUmur = "17";
  const validLahir = "2008-02-26";

  const aksesTanggal = new Date("2025-09-16");
  const today = new Date();
  today.setHours(9, 0, 0, 0);

  if (nama === validNama && umur === validUmur && lahir === validLahir) {
    if (today >= aksesTanggal) {
      localStorage.setItem("authNama", nama);
      localStorage.setItem("authUmur", umur);
      localStorage.setItem("authLahir", lahir);

      window.location.href = "index.html";
    } else {
      error.textContent = "SABAR NAPA!, TUNGGU SAMPE TANGGAL " + aksesTanggal.toLocaleDateString("id-ID");
    }
  } else {
    error.textContent = "kit heart sih aq km lupa sama ultah aq 💔";
  }
});

