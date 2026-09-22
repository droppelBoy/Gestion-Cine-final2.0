const moviesData = [
  {
    id: 1,
    title: "Spider-Man: Un Nuevo Día",
    genre: "Acción / Superhéroes",
    price: 4500,
    synopsis: "Peter Parker inicia una nueva etapa en su vida intentando equilibrar sus responsabilidades cotidianas con la protección de las calles.",
    image: "/spiderman.jpg",
    showtimes: ["14:30", "17:45", "21:00"]
  },
  {
    id: 2,
    title: "Avengers: Endgame (Encore)",
    genre: "Acción / Ciencia Ficción",
    price: 5000,
    synopsis: "El reestreno de la batalla definitiva de los Vengadores contra Thanos para revertir el chasquido y restaurar el orden en el universo.",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    showtimes: ["15:00", "19:00", "22:30"]
  },
  {
    id: 3,
    title: "Avengers: Doomsday",
    genre: "Acción / Aventura",
    price: 5500,
    synopsis: "Los Héroes Más Poderosos de la Tierra enfrentan su mayor amenaza hasta la fecha contra el implacable Doctor Doom a través del multiverso.",
    image: "/doomsday.jpg",
    showtimes: ["16:00", "20:00", "23:00"]
  },
  {
    id: 4,
    title: "Pinocho: La Película",
    genre: "Fantasía / Animación",
    price: 4000,
    synopsis: "La clásica historia del muñeco de madera creado por Geppetto que cobra vida mágicamente y sueña con convertirse en un niño de verdad.",
    image: "/pinocho.webp",
    showtimes: ["13:00", "15:30", "18:00"]
  }
]

export const fetchMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(moviesData);
    }, 500);
  });
};