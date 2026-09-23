import React, { useState } from 'react';

const SeatPicker = ({ pelicula, onConfirmarReserva, onCancelar }) => {
  // Configuración de la sala (filas A-E, 8 asientos por fila)
  const filas = ['A', 'B', 'C', 'D', 'E'];
  const columnas = [1, 2, 3, 4, 5, 6, 7, 8];

  // Simulación de asientos ya ocupados
  const asientosOcupadosIniciales = ['A3', 'A4', 'C5', 'D1', 'D2'];
  const [ocupados] = useState(asientosOcupadosIniciales);
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleAsiento = (id) => {
    if (ocupados.includes(id)) return;

    if (seleccionados.includes(id)) {
      setSeleccionados(seleccionados.filter((s) => s !== id));
    } else {
      setSeleccionados([...seleccionados, id]);
    }
  };

  const tituloPelicula = pelicula?.title || pelicula?.titulo || 'Película';
  const precioUnitario = pelicula?.price || pelicula?.precio || 4500;
  const total = seleccionados.length * precioUnitario;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 9999,
        backdropFilter: 'blur(4px)',
        padding: '1rem'
      }}
    >
      <div
        className="card bg-dark text-light border border-secondary p-4 shadow-lg"
        style={{ maxWidth: '540px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold m-0 text-danger fs-5 text-truncate pe-2">
            Selección de Asientos - {tituloPelicula}
          </h4>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={onCancelar}
            aria-label="Cerrar"
          ></button>
        </div>

        {/* Pantalla de cine */}
        <div className="text-center my-3">
          <div
            className="bg-light mx-auto rounded shadow-sm opacity-75"
            style={{ width: '80%', height: '6px', boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
          ></div>
          <small className="text-secondary text-uppercase tracking-wider">Pantalla</small>
        </div>

        {/* Mapa de asientos */}
        <div className="d-flex flex-column align-items-center gap-2 my-4">
          {filas.map((fila) => (
            <div key={fila} className="d-flex align-items-center gap-2">
              <span className="fw-bold text-secondary text-center" style={{ width: '20px' }}>
                {fila}
              </span>
              {columnas.map((col) => {
                const asientoId = `${fila}${col}`;
                const isOcupado = ocupados.includes(asientoId);
                const isSeleccionado = seleccionados.includes(asientoId);

                let btnClass = 'btn btn-sm ';
                if (isOcupado) {
                  btnClass += 'btn-secondary disabled opacity-25';
                } else if (isSeleccionado) {
                  btnClass += 'btn-danger fw-bold';
                } else {
                  btnClass += 'btn-outline-secondary';
                }

                return (
                  <button
                    key={asientoId}
                    type="button"
                    className={btnClass}
                    style={{ width: '36px', height: '36px', fontSize: '0.75rem', padding: 0, borderRadius: '6px' }}
                    onClick={() => toggleAsiento(asientoId)}
                    disabled={isOcupado}
                  >
                    {col}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Leyenda */}
        <div className="d-flex justify-content-center gap-4 text-secondary small mb-3">
          <div><span className="badge border border-secondary text-light me-1">○</span> Disponible</div>
          <div><span className="badge bg-danger me-1">●</span> Seleccionado</div>
          <div><span className="badge bg-secondary opacity-50 me-1">✕</span> Ocupado</div>
        </div>

        {/* Resumen y confirmación */}
        <div className="border-top border-secondary pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
          <div>
            <div className="small text-secondary">
              Asientos: <strong className="text-info">{seleccionados.join(', ') || 'Ninguno'}</strong>
            </div>
            <div className="fs-5">
              Total: <strong className="text-warning">${total.toLocaleString('es-CL')}</strong>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger px-4 fw-bold"
            disabled={seleccionados.length === 0}
            onClick={() => onConfirmarReserva(seleccionados, total)}
          >
            Confirmar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatPicker;