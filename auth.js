function login() {
  const nama = document.getElementById("nama").value.trim();
  const umur = document.getElementById("umur").value.trim();
  const lahir = document.getElementById("lahir").value.trim();
  const error = document.getElementById("error");

  if (!nama || !umur || !lahir) {
    error.textContent = "Isi Dulu Princess.";
    return;
  }

  localStorage.setItem("authNama", nama);
  localStorage.setItem("authUmur", umur);
  localStorage.setItem("authLahir", lahir);

  window.location.href = "index.html";
}
