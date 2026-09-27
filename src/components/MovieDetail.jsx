function MovieDetail({ movie, closeDetail }) {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-light border-secondary shadow-lg overflow-hidden">

          <div className="modal-header border-secondary">
            <h4 className="modal-title fw-bold">
              🎬 {movie.title}
            </h4>

            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeDetail}
            ></button>
          </div>

          <div className="modal-body p-4">
            <div className="row g-4 align-items-stretch">

              {/* Imagen */}
              <div className="col-md-5">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-100 h-100 rounded"
                  style={{
                    objectFit: 'cover',
                    maxHeight: '430px'
                  }}
                />
              </div>

              {/* Información */}
              <div className="col-md-7 d-flex flex-column">

                <div className="mb-3">
                  <span className="badge bg-secondary me-2">
                    {movie.genre}
                  </span>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-secondary">
                    🕒 {movie.duration}
                  </span>

                  <span className="badge bg-secondary">
                    🔞 {movie.rating}
                  </span>
                </div>

                <h5 className="fw-bold mb-2">
                  📖 Sinopsis
                </h5>

                <p className="text-secondary">
                  {movie.synopsis}
                </p>

                <div className="mt-auto pt-3 border-top border-secondary">
                  <small className="text-secondary d-block">
                    Precio por entrada
                  </small>

                  <span className="fs-3 fw-bold text-warning">
                    ${movie.price?.toLocaleString('es-CL')}
                  </span>
                </div>

              </div>
            </div>
          </div>

          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary px-4"
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
