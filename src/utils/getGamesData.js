import { getRandomPrice } from "./getRandomPrice";

export const getGamesData = async (url) => {
  const response = await fetch(url, {
    mode: "cors",
  });

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  const games = await response.json();

  return games.results.map((gameObj) => {
    return {
      id: gameObj.id,
      name: gameObj.name,
      image: gameObj.background_image,
      platforms: gameObj.parent_platforms.map(
        (platform) => platform.platform.name
      ),
      rating: gameObj.rating,
      released: gameObj.released,
      genre: gameObj.genres.map((genre) => genre.name)[0],
      added: gameObj.added,
      price: Number(getRandomPrice()),
    };
  });
};
