import { useState, useEffect } from 'react';
import { fetchMovies } from './api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import ReservationCart from './components/ReservationCart';
import SeatPicker from './SeatPicker';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [peliculaParaReservar, setPeliculaParaReservar] = useState(null);

  // Reservas leídas desde el localStorage
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem('cine_reservations');
    return saved ? JSON.parse(saved) : [];
  });

  // Guardado en localStorage automáticamente
  useEffect(() => {
    localStorage.setItem('cine_reservations', JSON.stringify(reservations));
  }, [reservations]);

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleViewDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  const handleBookShowtime = (movie, time) => {
    const newReservation = {
      idReserva: Date.now(),
      title: movie.title,
      price: movie.price || 4500,
      selectedTime: time
    };
    setReservations((prev) => [...prev, newReservation]);
    setSelectedMovie(null);
  };

  const handleRemoveReservation = (idReserva) => {
    setReservations((prev) => prev.filter((item) => item.idReserva !== idReserva));
  };

  const handleCheckout = () => {
    alert('¡Compra confirmada con éxito! Disfruta de tu función 🎬🍿');
    setReservations([]);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie?.title?.toLowerCase().includes(search.toLowerCase());
    const genreMatch = movie?.genre?.toLowerCase().includes(search.toLowerCase());
    return titleMatch || genreMatch;
  });

  return (
    <div
      className="min-vh-100 py-4 text-light"
      data-bs-theme="dark"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 12, 18, 0.55), rgba(10, 12, 18, 0.70)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <header className="mb-4 text-center">
          <h1 className="fw-bold text-danger display-5">CineStar</h1>
          <p className="text-secondary fs-6">Cartelera de estrenos y reserva de entradas</p>
        </header>

        <div className="row">
          <div className="col-lg-8">
            <SearchBar search={search} handleSearch={handleSearch} />
            <h4 className="fw-bold text-light mt-4 mb-3">🎬 Películas en Cartelera</h4>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            ) : (
              <div className="row g-3">
                {filteredMovies.map((movie) => (
                  <div key={movie.id} className="col-md-6">
                    <MovieCard
                      movie={movie}
                      onViewDetail={handleViewDetail}
                      onSelectSeats={(pelicula) => setPeliculaParaReservar(pelicula)}
                    />
                  </div>
                ))}
                {filteredMovies.length === 0 && (
                  <div className="col-12 text-center text-muted py-4">
                    No se encontraron películas que coincidan con la búsqueda.
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <ReservationCart
              reservations={reservations}
              onRemoveReservation={handleRemoveReservation}
              onCheckout={handleCheckout}
            />
          </div>
        </div>

        {/* Sección Próximamente */}
        <section className="mt-5">
          <div className="mb-3">
            <h3 className="fw-bold text-light mb-0">🍿 Próximamente en CineStar</h3>
          </div>

          <div className="row g-4">
            {/* El Corazón de la Bestia */}
            <div className="col-md-6">
              <div className="card bg-dark text-light border-secondary h-100 shadow overflow-hidden">
                <div className="position-relative">
                  <img
                    src="/corazon-bestia.jpg"
                    className="card-img-top"
                    alt="El Corazón de la Bestia"
                    style={{
                      height: '330px',
                      objectFit: 'cover',
                      objectPosition: 'center 25%'
                    }}
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-danger px-3 py-2">
                    PRÓXIMAMENTE
                  </span>
                </div>

                <div className="card-body p-4">
                  <h4 className="fw-bold mb-2">El Corazón de la Bestia</h4>
                  <p className="text-secondary mb-3">Suspenso / Supervivencia</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-secondary">🕒 1h 41min</span>
                    <span className="badge bg-secondary">🔞 MA14</span>
                  </div>
                  <div className="border-top border-secondary pt-3">
                    <span className="text-warning fw-semibold">🎬 Próximamente en cines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resident Evil */}
            <div className="col-md-6">
              <div className="card bg-dark text-light border-secondary h-100 shadow overflow-hidden">
                <div className="position-relative">
                  <img
                    src="/resident-evil.jpg"
                    className="card-img-top"
                    alt="Resident Evil: Noche Cero"
                    style={{
                      height: '330px',
                      objectFit: 'cover',
                      objectPosition: 'center 25%'
                    }}
                  />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-danger px-3 py-2">
                    PRÓXIMAMENTE
                  </span>
                </div>

                <div className="card-body p-4">
                  <h4 className="fw-bold mb-2">Resident Evil: Noche Cero</h4>
                  <p className="text-secondary mb-3">Terror / Supervivencia</p>
                  <div className="d-flex gap-2 flex-wrap mb-3">
                    <span className="badge bg-secondary">🕒 1h 34min</span>
                    <span className="badge bg-secondary">🔞 +14</span>
                  </div>
                  <div className="border-top border-secondary pt-3">
                    <span className="text-warning fw-semibold">🎬 Próximamente en cines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CineStar */}
      <footer
        className="mt-5 pt-4 pb-3 text-center"
        style={{
          borderTop: '2px solid #dc3545',
          background: 'rgba(5, 5, 10, 0.88)',
          width: '100%'
        }}
      >
        <h4 className="fw-bold text-danger mb-2">🎬 CineStar</h4>
        <p className="text-light mb-2">Tu cine, tus historias.</p>
        <p className="text-secondary small mb-3">
          Cartelera &nbsp;•&nbsp; Próximos estrenos &nbsp;•&nbsp; Reserva de entradas
        </p>
        <div
          className="mx-auto mb-3"
          style={{
            width: '60px',
            height: '2px',
            background: '#dc3545'
          }}
        ></div>
        <p className="text-secondary small mb-0">
          © 2026 CineStar · Todos los derechos reservados
        </p>
      </footer>

      {/* Modales */}
      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          closeDetail={handleCloseDetail}
          bookShowtime={handleBookShowtime}
        />
      )}

      {peliculaParaReservar && (
        <SeatPicker
          pelicula={peliculaParaReservar}
          onCancelar={() => setPeliculaParaReservar(null)}
          onConfirmarReserva={(asientos, total) => {
            const nuevaReserva = {
              idReserva: Date.now(),
              title: peliculaParaReservar.title || peliculaParaReservar.titulo,
              pelicula: peliculaParaReservar.title || peliculaParaReservar.titulo,
              price: total,
              total: total,
              asientos: asientos,
              selectedTime: null,
              fecha: new Date().toLocaleDateString('es-CL')
            };
            setReservations((prev) => [...prev, nuevaReserva]);
            setPeliculaParaReservar(null);
            alert(`¡Reserva confirmada con éxito!\nPelícula: ${nuevaReserva.title}\nAsientos: ${asientos.join(', ')}\nTotal: $${total.toLocaleString('es-CL')}`);
          }}
        />
      )}
    </div>
  );
}

export default App;