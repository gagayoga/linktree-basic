function linkMaintance() {
  alert(
    "Mohon maaf, link belum tersedia🙏🏻🙏🏻, masih dalam pengembangan, Terima kasih."
  );
}

function linkGithub() {
  window.location.href = "https://github.com/gagayoga";
}

function linkSosmed() {
  window.location.href = "https://twitter.com/yogairgii";
}

function linkYoutube() {
  window.location.href =
    "https://www.youtube.com/channel/UCSTkVRR9oJO-3l8UW4M8neg";
}

function linkInstagram() {
  window.location.href = "https://instagram.com/yogaairgi";
}

function linkDiscord() {
  window.location.href = "";
}

function linkEmainl() {
  window.location.href = "https://yoghakurniawan35@gmail.com";
}

function linkFigma() {
  window.location.href =
    "https://www.figma.com/proto/msEPEA4ywubmVmkGLSU1s5/Prototipe-aplikasi-Koperasi-Smakma?type=design&node-id=650-3676&t=Q4BVKVBcWrsPg7tX-1&scaling=min-zoom&page-id=646%3A2793&starting-point-node-id=650%3A3676&show-proto-sidebar=1&mode=design";
}

// Belajar JavaScript

function hitungPersegi(sisi) {
  var luasPersegi = sisi * sisi;
  console.log("Luas Persegi : " + luasPersegi);
}

function hitungLingkaran(jari2) {
  var luasLingkaran = Math.PI * jari2 * jari2;
  console.log("Luas Lingkaran : " + luasLingkaran);
}

function hitungPersegiPanjnag(panjang, lebar) {
  var luasPersegiPanjang = panjang * lebar;
  console.log("Luas Persegi Panjang : " + luasPersegiPanjang);
}

function hitungGajiKaryawan(username, gaji, jumlahMasuk) {
  var hitungGaji = gaji * jumlahMasuk;
  console.log("Nama Karyawan : " + username);
  console.log("Jumlah Hari Masuk Karyawan : " + jumlahMasuk);
  console.log("Total Gaji Karyawan : " + hitungGaji);

  if (hitungGaji > 20000000) {
    console.log("Selamat gaji anda melebihi batas");
  }
}

hitungPersegi(500);

hitungLingkaran(14);

hitungPersegiPanjnag(100, 900);

hitungGajiKaryawan("Raden Ki Tama", 1500000, 25);

// End Belajar JavaScript
