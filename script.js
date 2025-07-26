const slides = [
  {
    title: "Profil",
    text: "Nama saya Rafaelali Dari Kelas XI AV SAMSUNG."
  },
  {
    title: "Asal Sekolah",
    text: "Saya Berasal Dari SMKN 2 PEKANBARU."
  },
  {
    title: "Tempat Tinggal",
    text: "Saya beralamat Di Perumahan Putri Tujuh Jln HR.Soebrantas."
  },
  {
    title: "Tujuan web ini?",
    text: "Tujuan web ini dibuat yaitu Tugas dari bu nina"
  }
];

function showSlide(index) {
  const title = document.getElementById("slide-title");
  const text = document.getElementById("slide-text");

  title.textContent = slides[index].title;
  text.textContent = slides[index].text;
}
