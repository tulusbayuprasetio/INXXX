// === Daftar Film ===
const movies = [
  {
    id: 1,
    title: "vinamon",
    year: 2015,
    genre: "Action",
    thumb: "img/vinamon.jpg",
    video: "videos/bokep1.mp4"
  },
  {
    id: 2,
    title: "crampie",
    year: 2019,
    genre: "Action",
    thumb: "img/crampie.jpg",
    video: "videos/bokep10.mp4"
  },
  {
    id: 3,
    title: "ten",
    year: 2021,
    genre: "Action",
    thumb: "img/ten.jpg",
    video: "videos/bokep11.mp4"
  },
  {
    id: 4,
    title: "horny",
    year: 2009,
    genre: "Action",
    thumb: "img/horny.jpg",
    video: "videos/bokep12.mp4"
  },
    {
    id: 5,
    title: "crampies",
    year: 2015,
    genre: "Action",
    thumb: "img/crampies.jpg",
    video: "videos/bokep13.mp4"
  },
  {
    id: 6,
    title: "cum shot",
    year: 2019,
    genre: "Action",
    thumb: "img/cumshot.jpg",
    video: "videos/bokep14.mp4"
  },
  {
    id: 7,
    title: "blowjob",
    year: 2021,
    genre: "Action",
    thumb: "img/blowjob.jpg",
    video: "videos/bokep16.mp4"
  },
  {
    id: 8,
    title: "Ask",
    year: 2009,
    genre: "Action",
    thumb: "img/ask.jpg",
    video: "videos/bokep17.mp4"
  },
    {
    id: 9,
    title: "jobs",
    year: 2009,
    genre: "Action",
    thumb: "img/jobs.jpg",
    video: "videos/bokep18.mp4"
  },
    {
    id: 10,
    title: "selingkuhan",
    year: 2009,
    genre: "Action",
    thumb: "img/selingkuhan.jpg",
    video: "videos/bokep19.mp4"
  },
    {
    id: 11,
    title: "boy friend",
    year: 2015,
    genre: "Action",
    thumb: "img/boyfriend.jpg",
    video: "videos/bokep2.mp4"
  },
  {
    id: 12,
    title: "dogy",
    year: 2019,
    genre: "Action",
    thumb: "img/dogy.jpg",
    video: "videos/bokep20.mp4"
  },
  {
    id: 13,
    title: "Sinamoy",
    year: 2021,
    genre: "Action",
    thumb: "img/Sinamoy.jpg",
    video: "videos/bokep21.mp4"
  },
  {
    id: 14,
    title: "ten ten",
    year: 2009,
    genre: "Action",
    thumb: "img/tenten.jpg",
    video: "videos/bokep3.mp4"
  },
    {
    id: 15,
    title: "tenay",
    year: 2015,
    genre: "Action",
    thumb: "img/tenay.jpg",
    video: "videos/bokep4.mp4"
  },
  {
    id: 16,
    title: "thailand",
    year: 2019,
    genre: "Action",
    thumb: "img/thailand.jpg",
    video: "videos/bokep5.mp4"
  },
  {
    id: 17,
    title: "terpaksa",
    year: 2021,
    genre: "Action",
    thumb: "img/terpaksa.jpg",
    video: "videos/bokep6.mp4"
  },
  {
    id: 18,
    title: "milf",
    year: 2009,
    genre: "Action",
    thumb: "img/milf.jpg",
    video: "videos/bokep7.mp4"
  },
    {
    id: 19,
    title: "step sis",
    year: 2009,
    genre: "Action",
    thumb: "img/stepsis.jpg",
    video: "videos/bokep8.mp4"
  },
    {
    id: 20,
    title: "student",
    year: 2009,
    genre: "Action",
    thumb: "img/student.jpg",
    video: "videos/bokep9.mp4"
  },
];

// === Ambil Elemen HTML ===
const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("q");
const searchButton = document.querySelector(".btn");

// === Fungsi Render Film ke Halaman ===
function renderMovies(list) {
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "<p style='color:#aaa; text-align:center;'>Film tidak ditemukan 😢</p>";
    return;
  }

  grid.innerHTML = list.map(m => `
    <a href="player.html?id=${m.id}" class="movie-card">
      <div class="movie-thumb" style="background-image:url('${m.thumb}')"></div>
      <div class="movie-info">
        <div class="title">${m.title}</div>
        <div>${m.genre} • ${m.year}</div>
      </div>
    </a>
  `).join("");
}

// === Tampilkan Semua Film Saat Halaman Dibuka ===
renderMovies(movies);

// === Fungsi Pencarian ===
function doSearch() {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.toLowerCase().includes(q) ||
    String(m.year).includes(q)
  );
  renderMovies(filtered);
}

// === Event Klik & Enter ===
if (searchButton && searchInput) {
  searchButton.addEventListener("click", doSearch);
  searchInput.addEventListener("keyup", e => {
    if (e.key === "Enter") doSearch();
  });
}
