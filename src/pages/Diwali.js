import React from 'react'

const Diwali = () => {
    const containerStyle = {
    background: 'rgba(255, 255, 255, 0.5) url("/images/diwali.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'absoulte',
    height: '90vh',
    display: 'flex',
    width: '197vh',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#fff', 
    fontSize: '2em',
    textAlign: 'center',
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
        <h1>Diwali Special Offers</h1>
        <br/>
        <div>
            <p>Flat 20% off on Veg Items for Diwali</p>
        </div>
        <div>
            <p>Flat 15% off on Non-Veg Items for Diwali</p>
        </div>
        <div>
            <p>Flat 35% off on any type of Hotel Booking in next 2 days.</p>
        </div>
        <br/>
        <br/>
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
  )
}

export default Diwali