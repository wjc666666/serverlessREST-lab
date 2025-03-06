import { Movie, MovieCast } from "../shared/types";


export const movies: Movie[] = [
  {
    adult: false,
    backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
    genre_ids: [878],
    id: 1234,  
    original_language: "en",
    original_title: "Rebel Moon - Part One: A Child of Fire",
    overview:
      "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
    popularity: 2136.3,
    poster_path: "/6epeijccmJlnfvFitfGyfT7njav.jpg",
    release_date: "2023-12-15",
    title: "Rebel Moon - Part One: A Child of Fire",
    video: false,
    vote_average: 6.4,
    vote_count: 750,
  },
  {
    adult: false,
    backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
    genre_ids: [28, 12, 14],
    id: 2345, 
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    popularity: 1605.303,
    poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
    release_date: "2023-12-20",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 6.5,
    vote_count: 299,
  },
];


export const movieCasts: MovieCast[] = [
  {
    movieId: 1234,
    actorName: "Joe Bloggs",
    roleName: "Male Character 1",
    roleDescription: "Main hero of the story",
  },
  {
    movieId: 1234,
    actorName: "Alice Broggs",
    roleName: "Female Character 1",
    roleDescription: "Main heroine",
  },
  {
    movieId: 1234,
    actorName: "Joe Cloggs",
    roleName: "Male Character 2",
    roleDescription: "Supporting character",
  },
  {
    movieId: 2345,
    actorName: "Joe Bloggs",
    roleName: "Male Character 1",
    roleDescription: "Main hero of the story",
  },
]