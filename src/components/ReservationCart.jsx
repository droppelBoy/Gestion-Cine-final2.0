function ReservationCart({ reservations, onRemoveReservation, onCheckout }) {
  const total = reservations.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="card shadow border-secondary bg-dark text-light sticky-top" style={{ top: '20px' }}>
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3 d-flex justify-content-between align-items-center text-warning">
          <span>Tus Reservas 🎟️</span>
          <span className="badge bg-danger">{reservations.length}</span>
        </h5>

        {reservations.length === 0 ? (
          <p className="text-secondary small mb-0">No tienes reservas activas.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush mb-3">
              {reservations.map((item) => (
                <li
                  key={item.idReserva}
                  className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-secondary text-light px-0"
                >
                  <div>
                    <div className="fw-semibold">{item.title}</div>
                    <small className="text-secondary d-block">Horario: {item.selectedTime}</small>
                    <span className="text-warning fw-bold small">
                      ${item.price?.toLocaleString('es-CL')}
                    </span>
                  </div>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    title="Eliminar reserva"
                    onClick={() => onRemoveReservation(item.idReserva)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-top border-secondary pt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold">Total a pagar:</span>
                <span className="fs-5 fw-bold text-warning">
                  ${total.toLocaleString('es-CL')}
                </span>
              </div>
              <button
                className="btn btn-danger w-100 fw-bold py-2 shadow-sm"
                onClick={onCheckout}
              >
                Confirmar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCart;