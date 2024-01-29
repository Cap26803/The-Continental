export default function Home() {
  const containerStyle = {
    background: 'rgba(255, 255, 255, 0.5) url("/images/background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'absoulte',
    height: '90vh',
    display: 'flex',
    width: '197vh',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', 
    fontSize: '2em',
    textAlign: 'center',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '8.5px',
    padding: '5px 10px',
    textDecoration: 'none',
    fontSize: '0.9em',
    marginRight:'20px',
    marginLeft: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textShadow: '2px 2px 4px rgba(1, 1, 1, 0.5)',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={{ textShadow: '2px 2px 4px rgba(1, 1, 1, 9)' }}>Welcome to The Continental</h1>
        <div>
          <a href="/Menu">
            <button style={buttonStyle}>View Menu</button>
          </a>
          <a href="/Rooms">
            <button style={buttonStyle}>Book Rooms</button>
          </a>
        </div>
      </div>
    </div>
  );
}