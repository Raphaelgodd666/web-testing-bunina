const slides = [
  {
    title: "Profil",
    text: "Nama saya Adi. Siswa SMK kelas 11 RPL."
  },
  {
    title: "Tujuan PKL",
    text: "Menambah pengalaman kerja nyata dan skill coding."
  },
  {
    title: "Galeri Foto",
    text: "📷 Foto-foto dokumentasi selama PKL."
  },
  {
    title: "Kesimpulan",
    text: "PKL sangat bermanfaat dan menambah ilmu baru!"
  }
];

function showSlide(index) {
  const title = document.getElementById("slide-title");
  const text = document.getElementById("slide-text");

  title.textContent = slides[index].title;
  text.textContent = slides[index].text;
}