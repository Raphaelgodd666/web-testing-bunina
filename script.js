const slides = [
  {
    title: "Profil",
    text: "Perkenalkan Nama Saya Rafael Ali Dari Kelas XI AV SAMSUNG."
  },
  {
    title: "Asal Sekolah",
    text: "Saya Berasal Dari SMKN 2 PEKANBARU."
  },
  {
    title: "Tempat Tinggal",
    text: "Saya Tinggal Di Perumahan Putri Tujuh Jln.HR Soebrantas."
  },
  {
    title: "Tujuan Web Ini?",
    text: "Web ini Dibuat Dengan Tujuan Tugas Yang Diberikan Oleh Bu Nina"
  }
];

function showSlide(index) {
  const title = document.getElementById("slide-title");
  const text = document.getElementById("slide-text");

  title.textContent = slides[index].title;
  text.textContent = slides[index].text;
}
