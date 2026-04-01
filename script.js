async function getAnime() {
  const container = document.getElementById("container");
  container.innerHTML = "Loading...";

  try {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    const result = await response.json();

    displayAnime(result.data);
  } catch (error) {
    container.innerHTML = "Error fetching data";
    console.log(error);
  }
}

function displayAnime(animeList) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  animeList.forEach(anime => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />
      <h3>${anime.title}</h3>
      <p>⭐ Rating: ${anime.score || "N/A"}</p>
    `;

    container.appendChild(div);
  });
}