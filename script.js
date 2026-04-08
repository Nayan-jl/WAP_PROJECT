let data = [];

async function getAnime() {
  const container = document.getElementById("container");
  container.innerHTML = "Loading...";

  try {
    const res = await fetch("https://api.jikan.moe/v4/anime");
    const result = await res.json();
    data = result.data;
    showData(data);
  } catch (err) {
    container.innerHTML = "Error";
    console.log(err);
  }
}

function showData(list) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  list.forEach(function(anime) {
    let div = document.createElement("div");

    div.innerHTML = `
      <h3>${anime.title}</h3>
      <img src="${anime.images.jpg.image_url}" width="150">
      <p>Score: ${anime.score}</p>
    `;

    container.appendChild(div);
  });
}

function searchAnime() {
  let text = document.getElementById("search").value.toLowerCase();

  let filtered = data.filter(function(a) {
    return a.title.toLowerCase().includes(text);
  });

  showData(filtered);
}

function filterAnime() {
  let filtered = data.filter(function(a) {
    return a.score > 7;
  });

  showData(filtered);
}

function sortAnime() {
  let sorted = data.slice();

  sorted.sort(function(a, b) {
    return b.score - a.score;
  });

  showData(sorted);
}

getAnime();