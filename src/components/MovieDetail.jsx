function MovieDetail({ movie, closeDetail, bookShowtime }) {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">{movie.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeDetail}
            ></button>
          </div>
          <div className="modal-body">
            <span className="badge bg-secondary mb-2">{movie.genre}</span>
            <p className="text-muted mt-2">{movie.synopsis}</p>
            <h6 className="fw-bold mt-4 mb-2">Selecciona un Horario:</h6>
            <div className="d-flex flex-wrap gap-2">
              {movie.showtimes.map((time, index) => (
                <button
                  key={index}
                  className="btn btn-sm btn-outline-success"
                  onClick={() => bookShowtime(movie, time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeDetail}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;