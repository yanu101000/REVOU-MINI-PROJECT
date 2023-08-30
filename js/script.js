let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // berubah setiap 2 detik
}

document.getElementById("data-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // get field value
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggal_lahir").value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
  const pesan = document.getElementById("pesan").value;

  if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
    alert("Semua field harus diisi!");
    return;
  }

  // format current datetime
  const currentDatetime = new Date();
  const formattedDatetime = currentDatetime.toString();
  document.getElementById("output-datetime").textContent = formattedDatetime;

  // display field output
  document.getElementById("output-nama").textContent = nama;
  document.getElementById("output-tanggal_lahir").textContent = tanggalLahir;
  document.getElementById("output-jenis_kelamin").textContent = jenisKelamin.value;
  document.getElementById("output-pesan").textContent = pesan;

  // display box
  document.querySelector(".output-box").style.display = "block";
});

document.getElementById("field-name").addEventListener("submit", function (event) {
  event.preventDefault();

  //get field value
  const name = document.getElementById("welcomename").value;

  //  display name
  document.getElementById("output-welcomename").textContent = name;

  // hide input name
  document.querySelector(".welcome-name").style.display = "none";

  // display the content
  document.querySelector(".welcome-page").style.display = "block";
});