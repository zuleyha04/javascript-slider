var models = [
  {
    name: "Breaking Bad",
    year: 2008,
    image: "images/BreakingBad.jpg",
    link: "https://www.imdb.com/title/tt0903747/",
  },
  {
    name: "Prison Break",
    year: 2005,
    image: "images/PrisonBreak.webp",
    link: "https://www.imdb.com/title/tt0455275/",
  },
  {
    name: "Sherlock",
    year: 2010,
    image: "images/Sherlock.jpg",
    link: "https://www.imdb.com/title/tt1475582/",
  },
  {
    name: "Crash Landing on You",
    year: 2019,
    image: "images/Crash Landing on You.jpg",
    link: "https://www.imdb.com/title/tt10850932/",
  },
  {
    name: "Goblin",
    year: 2016,
    image: "images/Goblin.jpg",
    link: "https://www.imdb.com/title/tt5994364/?ref_=tt_mlt_tt_i_3",
  },
  {
    name: "Vincenzo",
    year: 2021,
    image: "images/Vincenzo.jpg",
    link: "https://www.imdb.com/title/tt13433812/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_Vincenzo",
  },
  {
    name: "Moon Lovers: Scarlet Heart Ryeo",
    year: 2016,
    image: "images/MoonLovers.jpg",
    link: "https://www.imdb.com/title/tt5320412/?ref_=fn_all_ttl_1",
  },
  {
    name: "Mouse",
    year: 2021,
    image: "images/mouse.webp",
    link: "https://www.imdb.com/title/tt13634792/?ref_=fn_all_ttl_1",
  },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
  duration: "1000",
  random: false,
};

init(settings);

//arrow settings
document
  .querySelector(".fas.fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fas.fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settingsAdress) {
  var prev;
  interval = setInterval(function () {
    if (settingsAdress.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //Sequential index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }

    showSlide(index);
  }, settingsAdress.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-date").textContent = models[index].year;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
