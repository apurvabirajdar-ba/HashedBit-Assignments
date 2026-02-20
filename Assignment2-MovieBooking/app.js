// generate simple SVG poster data URIs that display the movie title and year
// High-resolution unique SVG poster generator
function posterForBig(title, year, seed = 0) {
  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  const palettes = [
    ['#ff7e5f','#feb47b'], ['#667eea','#764ba2'], ['#43cea2','#185a9d'], ['#f7971e','#ffd200'], ['#f54ea2','#ff7676']
  ];
  const p = palettes[Math.abs(seed) % palettes.length];
  const w = 1200, h = 1800;
  const titleEsc = esc(title);
  const yearEsc = esc(year || '');
  const length = Math.max(1, title.length);
  const fontSize = Math.max(48, Math.min(160, Math.floor(900 / Math.sqrt(length))));
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs>
      <linearGradient id='g' x1='0' x2='1'>
        <stop offset='0' stop-color='${p[0]}'/>
        <stop offset='1' stop-color='${p[1]}'/>
      </linearGradient>
      <filter id='grain'>
        <feTurbulence baseFrequency='0.8' numOctaves='1' stitchTiles='stitch' result='noise' />
        <feColorMatrix type='saturate' values='0' />
        <feBlend in='SourceGraphic' in2='noise' mode='overlay' />
      </filter>
    </defs>
    <rect width='100%' height='100%' fill='#06071a'/>
    <rect x='0' y='0' width='100%' height='65%' fill='url(#g)' opacity='0.95'/>
    <g transform='translate(80, ${h * 0.5})'>
      <text x='0' y='0' font-family='"Segoe UI", Roboto, Arial, sans-serif' font-weight='700' font-size='${fontSize}' fill='#ffffff'>${titleEsc}</text>
    </g>
    <text x='90%' y='95%' font-family='Segoe UI, Roboto, Arial, sans-serif' font-size='36' fill='#e6e6e6' text-anchor='end'>${yearEsc}</text>
    <circle cx='90' cy='90' r='60' fill='rgba(255,255,255,0.06)' />
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

const moviesData = [
  { id: 1, name: "Pushpa 2: The Rule", image: posterForBig('Pushpa 2: The Rule','2024',1), rating: "8.5/10", genre: "Action, Drama", duration: "3h 20m", language: "Hindi", description: "The sequel to the blockbuster Pushpa continues the thrilling saga of Pushpa Raj as he climbs higher in the red sanders smuggling empire.", releaseDate: "2024" },
  { id: 2, name: "Article 370", image: posterForBig('Article 370','2024',2), rating: "8.2/10", genre: "Drama, Political", duration: "2h 10m", language: "Hindi", description: "A gripping political thriller that explores the complex issues surrounding constitutional amendments and national security.", releaseDate: "2023" },
  { id: 3, name: "12th Fail", image: posterForBig('12th Fail','2023',3), rating: "8.7/10", genre: "Drama, Biography", duration: "2h 26m", language: "Hindi", description: "Inspired by true events, this film follows a man who achieves impossible success despite his initial failures in education.", releaseDate: "2023" },
  { id: 4, name: "Jawan", image: posterForBig('Jawan','2023',4), rating: "8.0/10", genre: "Action, Thriller", duration: "2h 49m", language: "Hindi", description: "An action-packed thriller with jaw-dropping stunts and a compelling revenge storyline that keeps you on the edge of your seat.", releaseDate: "2023" },
  { id: 5, name: "Pathaan", image: posterForBig('Pathaan','2023',5), rating: "8.1/10", genre: "Action, Spy Thriller", duration: "2h 28m", language: "Hindi", description: "A high-octane spy thriller featuring international action sequences and an intriguing storyline of espionage and betrayal.", releaseDate: "2023" },
  { id: 6, name: "Rocky Aur Rani Kii Prem Kahaani", image: posterForBig('Rocky Aur Rani Kii Prem Kahaani','2023',6), rating: "7.8/10", genre: "Romance, Comedy", duration: "2h 29m", language: "Hindi", description: "A delightful romantic comedy that blends humor, family drama, and contemporary romance in the most entertaining way.", releaseDate: "2023" },
  { id: 7, name: "Gadar 2", image: posterForBig('Gadar 2','2023',7), rating: "8.4/10", genre: "Action, Drama", duration: "2h 47m", language: "Hindi", description: "The epic sequel continues the legendary love story and patriotic saga with breathtaking action and emotional depth.", releaseDate: "2023" },
  { id: 8, name: "Animal", image: posterForBig('Animal','2023',8), rating: "8.3/10", genre: "Action, Thriller", duration: "3h 13m", language: "Hindi", description: "Dark, raw, and intense - this action thriller explores the dangerous world of power, corruption, and revenge.", releaseDate: "2023" }
];

// Function to generate booking ID
function generateBookingId() {
  return "CINE" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Movie List Page Component
function MovieListPage({ onMovieClick }) {
  return (
    <div className="page">
      <div className="movies-grid">
        {moviesData.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-poster">
              <img src={movie.image} alt={movie.name} onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x450?text=Poster+Unavailable'; }} />
              <div className="movie-overlay">
                <button className="view-btn" onClick={() => onMovieClick(movie)}>View Details</button>
              </div>
            </div>
            <h3>{movie.name}</h3>
            <p className="rating">⭐ {movie.rating}</p>
            <p className="genre">{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Movie Details Page Component
function MovieDetailsPage({ movie, onBookSeat, onBack }) {
  const [selectedShowtime, setSelectedShowtime] = React.useState(null);

  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="details-container">
        <div>
          <img src={movie.image} alt={movie.name} className="large-poster" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x600?text=Poster+Unavailable'; }} />
        </div>
        <div>
          <h1>{movie.name}</h1>
          <p className="rating-large">⭐ {movie.rating}</p>
          <div className="info-grid">
            <div><strong>Genre:</strong> {movie.genre}</div>
            <div><strong>Duration:</strong> {movie.duration}</div>
            <div><strong>Language:</strong> {movie.language}</div>
            <div><strong>Release Date:</strong> {movie.releaseDate}</div>
          </div>
          <p className="description">{movie.description}</p>
          
          <h3>Select Showtime:</h3>
          <div className="showtimes">
            {["09:30 AM", "12:45 PM", "04:15 PM", "07:00 PM", "10:30 PM"].map((time) => (
              <button
                key={time}
                type="button"
                className={`showtime-btn ${selectedShowtime === time ? "active" : ""}`}
                onClick={() => setSelectedShowtime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          <button 
            className="book-btn"
            type="button"
            onClick={() => {
              if (!selectedShowtime) {
                alert('Please select a showtime before booking.');
                return;
              }
              onBookSeat(selectedShowtime);
            }}
          >
            Book Seats
          </button>
        </div>
      </div>
    </div>
  );
}

// Booking Form Page Component
function BookingFormPage({ movie, onSubmit, onBack }) {
  // accept selectedShowtime if passed
  const selectedShowtime = arguments[0].selectedShowtime || null;
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Valid email is required";
    }
    
    if (!formData.mobile.match(/^\d{10}$/)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="page">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="booking-form-container">
        <div className="form-info">
          <h2>Booking Summary</h2>
          <p><strong>Movie:</strong> {movie.name}</p>
          <p><strong>Showtime:</strong> {selectedShowtime || 'Not selected'}</p>
          <p><strong>Amount:</strong> ₹500</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>Enter Your Details</h2>
          
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className={errors.mobile ? "error" : ""}
            />
            {errors.mobile && <span className="error-msg">{errors.mobile}</span>}
          </div>

          <button type="submit" className="submit-btn">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
}

// Confirmation Page Component
function ConfirmationPage({ movie, bookingData, onNewBooking }) {
  const bookingId = generateBookingId();

  return (
    <div className="page">
      <div className="confirmation-container">
        <h1>✅ Booking Confirmed!</h1>
        <p>Your tickets have been booked successfully</p>

        <div className="booking-id-section">
          <p className="label">Booking ID:</p>
          <p className="booking-id">{bookingId}</p>
        </div>

        <div className="confirmation-grid">
          <div className="confirmation-box">
            <h3>Movie Details</h3>
            <img src={movie.image} alt={movie.name} className="confirm-poster" onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x450?text=Poster+Unavailable'; }} />
            <p><strong>{movie.name}</strong></p>
            <p className="small-text">{movie.genre} | {movie.duration}</p>
          </div>

          <div className="confirmation-box">
            <h3>Passenger Details</h3>
            <p><strong>Name:</strong> {bookingData.name}</p>
            <p><strong>Email:</strong> {bookingData.email}</p>
            <p><strong>Mobile:</strong> {bookingData.mobile}</p>
          </div>

          <div className="confirmation-box">
            <h3>Booking Information</h3>
            <p><strong>Date:</strong> 22 Feb 2026</p>
            <p><strong>Showtime:</strong> 07:00 PM</p>
            <p><strong>Seats:</strong> F5, F6</p>
            <p><strong>Total Amount:</strong> ₹500</p>
          </div>
        </div>

        <button className="new-booking-btn" onClick={onNewBooking}>Book Another Movie</button>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = React.useState("list");
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [selectedShowtime, setSelectedShowtime] = React.useState(null);
  const [bookingData, setBookingData] = React.useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage("details");
  };

  const handleBookSeat = (showtime) => {
    setSelectedShowtime(showtime || null);
    setCurrentPage("form");
  };

  const handleFormSubmit = (data) => {
    // include showtime in booking data
    setBookingData({ ...data, showtime: selectedShowtime });
    setCurrentPage("confirmation");
  };

  const handleNewBooking = () => {
    setCurrentPage("list");
    setSelectedMovie(null);
    setBookingData(null);
  };

  const handleBack = () => {
    if (currentPage === "details") {
      setCurrentPage("list");
      setSelectedMovie(null);
    } else if (currentPage === "form") {
      setCurrentPage("details");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🎬 CineHub - Movie Booking</h1>
          <p>Book your favorite movies online</p>
        </div>
      </header>

      <div className="container">
        {currentPage === "list" && <MovieListPage onMovieClick={handleMovieClick} />}
        {currentPage === "details" && selectedMovie && (
          <MovieDetailsPage 
            movie={selectedMovie}
            onBookSeat={handleBookSeat}
            onBack={handleBack}
          />
        )}
        {currentPage === "form" && selectedMovie && (
          <BookingFormPage 
            movie={selectedMovie}
            selectedShowtime={selectedShowtime}
            onSubmit={handleFormSubmit}
            onBack={handleBack}
          />
        )}
        {currentPage === "confirmation" && selectedMovie && bookingData && (
          <ConfirmationPage 
            movie={selectedMovie}
            bookingData={bookingData}
            onNewBooking={handleNewBooking}
          />
        )}
      </div>
    </div>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
