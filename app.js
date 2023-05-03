// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const playIcon = document.querySelector(".play-btn");
const videoLayerClose = document.querySelector(".close-window_player");
const videoLayer = document.querySelector(".info-content_video");
const featuredGuests = document.querySelector(".featured-guests");
const menuLinks = document.querySelectorAll(".nav-list li a");

// Data
const guests = [
  {
    name: "Brain Katrek",
    whois: "Tournament Commentator And Host Of PGA TOUR Radio",
    img: "http://theworldputtingleague.com/assets/img/club/katrek.png",
    link: "https://www.siriusxm.com/channels/siriusxm-pga-tour-radio",
  },
  {
    name: "Rob Pizzola",
    whois: "Featured Guest",
    img: "http://theworldputtingleague.com/assets/img/club/RobPizzolo.png",
    link: "https://twitter.com/robpizzola",
  },
  {
    name: "Kaz Brown",
    whois: "On-Air Host From Pro League Network",
    img: "http://theworldputtingleague.com/assets/img/club/kaz.png",
    link: "http://theworldputtingleague.com/",
  },
];

const scoreboards = {
  "round-1": [
    {
      name: "Dylan Evans",
      score: 24,
    },
    {
      name: "Gary Hester",
      score: 25,
    },
    {
      name: "Mia Johnson",
      score: 26,
    },
    {
      name: "Trevor Lee",
      score: 28,
    },
    {
      name: "Avery Hernandez",
      score: 29,
    },
  ],
  "round-2": [
    {
      name: "Dylan Evans",
      score: 21,
    },
    {
      name: "Gary Hester",
      score: 23,
    },
    {
      name: "Mia Johnson",
      score: 24,
    },
    {
      name: "Trevor Lee",
      score: 26,
    },
    {
      name: "Avery Hernandez",
      score: 27,
    },
  ],
  "round-3": [
    {
      name: "Dylan Evans",
      score: 20,
    },
    {
      name: "Gary Hester",
      score: 22,
    },
    {
      name: "Mia Johnson",
      score: 24,
    },
    {
      name: "Trevor Lee",
      score: 25,
    },
    {
      name: "Avery Hernandez",
      score: 27,
    },
  ],
  "round-4": [
    {
      name: "Dylan Evans",
      score: 19,
    },
    {
      name: "Gary Hester",
      score: 21,
    },
    {
      name: "Mia Johnson",
      score: 23,
    },
    {
      name: "Trevor Lee",
      score: 25,
    },
    {
      name: "Avery Hernandez",
      score: 26,
    },
  ],
};

const winner = {
  name: "Dylan Evans",
  origin: "North Carolina",
  info: "Teeing off his Mini Golf career in 1969, Gary has over 50 years of experience in the sport. He started at the Arnold Palmer Mini Golf course in High Point, NC, where he took home four straight championships. In the USPMGA Masters, he has won multiple senior divisions and has registered 11 top ten and two second place finishes in the main draw. Gary has also represented the US National Mini Golf Team at the World Mini Golf Championships for the last few years. In Sweden he finished as the top American and finished third overall.",
  img: "http://theworldputtingleague.com/assets/img/Hester-NC.png",
};

const players = [
  {
    name: "Bob Howards",
    origin: "New York",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "John Smith",
    origin: "California",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Anna Lee",
    origin: "Texas",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Max Johnson",
    origin: "Florida",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Samantha Davis",
    origin: "Washington",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Tyler Brown",
    origin: "Ohio",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Emily Martinez",
    origin: "Arizona",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Alex Hernandez",
    origin: "Illinois",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Sophia Nguyen",
    origin: "Virginia",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "William Kim",
    origin: "Georgia",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Emma Adams",
    origin: "North Carolina",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "James Baker",
    origin: "Michigan",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Olivia Taylor",
    origin: "Pennsylvania",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Daniel Rodriguez",
    origin: "New Jersey",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
  {
    name: "Avery Wilson",
    origin: "Tennessee",
    img: "http://theworldputtingleague.com/assets/img/team/Jay%20Klapper%20-%20Georgia.png",
  },
];

const pastEvents = [
  {
    name: "Event 1",
    location: "Los Angeles, CA",
    date: "2022-04-10",
    winner: "John Smith",
    runnerUp: "Emily Martinez",
    scores: [
      { player: "John Smith", score: 67 },
      { player: "Emily Martinez", score: 70 },
      { player: "Max Johnson", score: 72 },
      { player: "Anna Lee", score: 73 },
    ],
  },
  {
    name: "Event 2",
    location: "Orlando, FL",
    date: "2022-05-15",
    winner: "Max Johnson",
    runnerUp: "Sophia Nguyen",
    scores: [
      { player: "Max Johnson", score: 69 },
      { player: "Sophia Nguyen", score: 70 },
      { player: "James Baker", score: 72 },
      { player: "Daniel Rodriguez", score: 73 },
    ],
  },
];

// Add event listener
menuToggle.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navList.classList.toggle("menu-open");
});

if (window.location.pathname === "/") {
  playIcon.addEventListener("click", function () {
    videoLayer.style.display = "flex";
  });
  videoLayerClose.addEventListener("click", function () {
    videoLayer.style.display = "none";
  });
  guests.forEach((guest) => {
    const guestCard = document.createElement("div");
    guestCard.classList.add("guest-card");

    guestCard.innerHTML = `
    <img src="${guest.img}" alt="${guest.name}">
    <h3>${guest.name}</h3>
    <p>${guest.whois}</p>
    <a href="${guest.link}" target="_blank">Learn More</a>
  `;

    featuredGuests.appendChild(guestCard);
  });
}

if (window.location.pathname === "/events/") {
  const table = document.getElementById("scoreboards-table");
  const tbody = table.querySelector("tbody");

  // Generate table rows for each player
  for (const player of Object.keys(scoreboards["round-1"])) {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = scoreboards["round-1"][player].name;
    tr.appendChild(nameTd);

    for (const round of Object.keys(scoreboards)) {
      const td = document.createElement("td");
      td.textContent = scoreboards[round][player].score;
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
}

if (window.location.pathname === "/players/") {
  const playersList = document.querySelector(".players-list");

  players.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");

    const playerImg = document.createElement("img");
    playerImg.classList.add("player-img");
    playerImg.src = player.img;
    playerImg.alt = `${player.name} profile picture`;
    playerCard.appendChild(playerImg);

    const playerName = document.createElement("h2");
    playerName.classList.add("player-name");
    playerName.textContent = player.name;
    playerCard.appendChild(playerName);

    const playerOrigin = document.createElement("p");
    playerOrigin.classList.add("player-origin");
    playerOrigin.textContent = `Origin: ${player.origin}`;
    playerCard.appendChild(playerOrigin);

    playersList.appendChild(playerCard);
  });
}

if (window.location.pathname === "/past/") {
  const accordion = document.querySelector(".accordion");

  pastEvents.forEach((event) => {
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const header = document.createElement("h3");
    header.textContent = `${event.name} - ${event.date}`;
    item.appendChild(header);

    const subheader = document.createElement("p");
    subheader.textContent = `Winner: ${event.winner} | Runner-up: ${event.runnerUp}`;
    item.appendChild(subheader);

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    const scoresList = document.createElement("ul");
    event.scores.forEach((score) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${score.player}: ${score.score}`;
      scoresList.appendChild(listItem);
    });
    content.appendChild(scoresList);
    item.appendChild(content);

    accordion.appendChild(item);

    item.addEventListener("click", () => {
      content.classList.toggle("active");
    });
  });
}

menuLinks.forEach((link) => {
  link.getAttribute("href") + "/" === window.location.pathname
    ? link.classList.add("active")
    : link.classList.remove("active");
});
