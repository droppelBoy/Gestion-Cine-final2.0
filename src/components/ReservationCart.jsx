function ReservationCart({ reservations, onRemoveReservation, onCheckout }) {
  const total = reservations.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div
      className="card shadow-lg border-secondary bg-dark text-light sticky-top overflow-hidden"
      style={{ top: '20px' }}
    >
      {/* Encabezado */}
      <div
        className="card-header border-secondary py-3"
        style={{
          background: 'linear-gradient(135deg, #252830, #1a1c22)'
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold text-warning mb-1">
              🎟️ Tus Reservas
            </h5>
            <small className="text-secondary">
              Tu selección de entradas
            </small>
          </div>

          <span className="badge bg-danger rounded-pill px-3 py-2">
            {reservations.length}
          </span>
        </div>
      </div>

      <div className="card-body">

        {reservations.length === 0 ? (
          /* Carrito vacío */
          <div className="text-center py-4">
            <div
              className="d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                background: 'rgba(220, 53, 69, 0.12)',
                border: '1px solid rgba(220, 53, 69, 0.35)',
                fontSize: '28px'
              }}
            >
              🎟️
            </div>

            <h6 className="fw-bold text-light mb-2">
              Aún no tienes reservas
            </h6>

            <p className="text-secondary small mb-0">
              Selecciona una película y elige tu horario favorito.
            </p>
          </div>
        ) : (
          <>
            {/* Reservas */}
            <div className="mb-3">
              {reservations.map((item) => (
                <div
                  key={item.idReserva}
                  className="p-3 mb-2 rounded border border-secondary"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="d-flex justify-content-between gap-2">

                    <div>
                      <div className="fw-bold text-light mb-2">
                        🎬 {item.title}
                      </div>

                      <div className="small text-secondary mb-1">
                        🕒 Horario: {item.selectedTime}
                      </div>

                      <div className="text-warning fw-bold">
                        ${item.price?.toLocaleString('es-CL')}
                      </div>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger align-self-start"
                      title="Eliminar reserva"
                      onClick={() => onRemoveReservation(item.idReserva)}
                    >
                      ✕
                    </button>

                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-top border-secondary pt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <small className="text-secondary d-block">
                    Total
                  </small>
                  <span className="fw-bold text-light">
                    Total a pagar
                  </span>
                </div>

                <span className="fs-4 fw-bold text-warning">
                  ${total.toLocaleString('es-CL')}
                </span>
              </div>

              <button
                className="btn btn-danger w-100 fw-bold py-2 shadow-sm"
                onClick={onCheckout}
              >
                🎟️ Confirmar Compra
              </button>

              <p className="text-secondary text-center small mt-2 mb-0">
                Revisa tus entradas antes de confirmar.
              </p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default ReservationCart;
