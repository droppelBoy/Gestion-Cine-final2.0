function MovieCard({ movie, onViewDetail }) {
  return (
    <div className="card h-100 shadow border-secondary bg-dark text-light">
      <img
        src={movie.image}
        className="card-img-top"
        alt={movie.title}
        style={{
  height: '280px',
  objectFit: 'cover',
  objectPosition:
    movie.title === 'Spider-Man: Un Nuevo Día' ? 'center 35%' :
    movie.title === 'Avengers: Endgame (Encore)' ? 'center 30%' :
    movie.title === 'Interstellar' ? 'center 15%' :
    movie.title === 'Pinocho: La Película' ? 'center 25%' :
    'center'
}}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x400?text=Sin+Imagen';
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-truncate">{movie.title}</h5>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-secondary">{movie.genre}</span>
          <span className="fw-bold text-warning fs-5">${movie.price?.toLocaleString('es-CL')}</span>
        </div>
        <button
          className="btn btn-outline-danger mt-auto w-100 fw-semibold"
          onClick={() => onViewDetail(movie)}
        >
          Ver Detalles y Horarios
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
