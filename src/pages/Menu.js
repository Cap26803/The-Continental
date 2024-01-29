export default function Menu() {
  const containerStyle = {
    background: 'rgba(255, 255, 255, 0.5) url("/images/menu.jpg")',
    backgroundColor: '#fff',
    marginTop: '0px',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#000',
    fontSize: '1.6em',
    textAlign: 'center',
  }

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    color: '#000',
    fontSize: '1em',
    textAlign: 'left',
    marginLeft: '2rem',
    listStyleType: 'none',
  }

  const titleStyle = {
    fontSize: '1.3em',
    fontWeight: 'bold',
    marginBottom: '1rem',
  }

  const vegTitle = {
    ...titleStyle,
    color: 'green',
    marginRight: '1rem',
  }

  const nonVegTitle = {
    ...titleStyle,
    color: '#D00000',
  }

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'darkred',
    border: 'none',
    borderRadius: '8.5px',
    padding: '5px 10px',
    textDecoration: 'none',
    fontSize: '0.9em',
    marginRight:'20px',
    marginLeft: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={containerStyle}>
      <h1>Special Menu</h1>
      <br/>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={listStyle}>
          <div style={vegTitle}>Veg</div>
          <ul>
            <li>Tomato Soup - @ 95/-</li>
            <li>Roti / Paratha - @ 75/- </li>
            <li>Veg Kolhapuri - @ 125/- </li>
            <li>Jeera Rice - @ 185/- </li>
          </ul>
        </div>
        <div style={listStyle}>
          <div style={nonVegTitle}>Non-Veg Menu</div>
          <ul>
            <li>Chicken Nuggets - @ 99/-</li>
            <li>Fish Fry - @ 79/-</li>
            <li>Tandoori Roti - @ 89/- </li>
            <li>Chicken Biryani - @ 135/- </li>
          </ul>
        </div>
      </div>
      <br/>
      <br/>
      <div>
          <a href="/Diwali">
            <button style={buttonStyle}>For Diwali Special Offers. Click here!</button>
          </a>
        </div>
    </div>
  )
}