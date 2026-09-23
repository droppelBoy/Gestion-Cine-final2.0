import React from 'react';

function MovieCard({ movie, onViewDetail, onSelectSeats }) {
  return (
    <div className="card h-100 shadow border-secondary bg-dark text-light overflow-hidden">
      {/* Portada de la Película */}
      <div className="position-relative" style={{ height: '280px', overflow: 'hidden' }}>
        <img
          src={movie.image}
          className="card-img-top w-100 h-100"
          alt={movie.title}
          style={{
            objectFit: 'cover',
            objectPosition:
              movie.title === 'Spider-Man: Un Nuevo Día' ? 'center 35%' :
              movie.title === 'Avengers: Endgame (Encore)' ? 'center 30%' :
              movie.title === 'Interstellar' ? 'center 15%' :
              movie.title === 'Pinocho: La Película' ? 'center 25%' :
              'center',
            transition: 'transform 0.3s ease'
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300x400?text=Sin+Imagen';
          }}
        />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="card-body d-flex flex-column p-3">
        <h5 className="card-title fw-bold text-truncate mb-2" title={movie.title}>
          {movie.title}
        </h5>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-secondary">
            {movie.genre}
          </span>
          <span className="fw-bold text-warning fs-5">
            ${movie.price ? movie.price.toLocaleString('es-CL') : '4.500'}
          </span>
        </div>

        <div className="d-flex gap-2 flex-wrap mb-3">
          <span className="badge bg-secondary">
            🕒 {movie.duration}
          </span>
          <span className="badge bg-secondary">
            🔞 {movie.rating}
          </span>
        </div>

        {/* Acciones */}
        <div className="mt-auto d-flex flex-column gap-2">
          <button
            type="button"
            className="btn btn-outline-light w-100 fw-semibold"
            onClick={() => onViewDetail && onViewDetail(movie)}
          >
            Ver Detalles y Horarios
          </button>

          <button 
            type="button" 
            className="btn btn-danger w-100 fw-bold shadow-sm"
            onClick={() => onSelectSeats && onSelectSeats(movie)}
          >
            🎟️ Seleccionar Asientos
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;