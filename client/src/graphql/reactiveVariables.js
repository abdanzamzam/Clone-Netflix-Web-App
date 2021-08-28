import { makeVar } from "@apollo/client";

export const favoritesVar = makeVar([
  {
    _id: { $oid: "611aac8f70279053e6b640f6" },
    title: "Raya and the Last Dragon (2021)",
    overview:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    poster_path:
      "https://image.tmdb.org/t/p/w185/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    popularity: 5,
    taqs: ["Action", "Adventure", "Animation", "Drama", "Family", "Fantasy"],
  },
]);
