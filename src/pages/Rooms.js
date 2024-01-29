import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url("/images/homepage1.webp");
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const PurchaseWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const InputWrapper = styled.div`
  margin: 20px 0;

  label {
    display: block;
    margin-bottom: 5px;
    color: #ccc;
    font-size: 14px;
  }

  input,
  select {
    width: calc(100% - 24px);
    padding: 12px;
    font-size: 16px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
  }

  .error {
    color: #ff6464;
    font-size: 14px;
    margin-top: 5px;
  }
`;

const ButtonWrapper = styled.div`
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }
`;

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

const SummaryWrapper = styled.div`
  margin-top: 20px;
  color: #ccc;
  text-align: left;
`;

const Rooms = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [error, setError] = useState('');
  const [price, setPrice] = useState(0);

  const HotelPrices = {
    'Silver': 1500,
    'Gold': 3000,
    'Platinum': 5500,
  };

  const handleBooking = () => {
    let validationError = '';

    if (!name || !phoneNumber || !roomType) {
      validationError = 'Please fill in all fields.';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      validationError = 'Invalid phone number. Please enter a 10-digit number.';
    }

    setError(validationError);

    if (!validationError) {
      const selectedPrice = HotelPrices[roomType];
      setPrice(selectedPrice);
    }
  };

  return (
    <Container>
      <PurchaseWrapper>
        <h1>Room Booking</h1>
        <InputWrapper>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputWrapper>
        <InputWrapper>
          <label>Phone Number:</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label>Room Type:</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Select Room Type</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </InputWrapper>
        {error && <div className="error">{error}</div>}
        <ButtonWrapper>
          <button onClick={handleBooking}>Book</button>
        </ButtonWrapper>
        {price > 0 && (
          <SummaryWrapper>
            <h2>Booking Summary:</h2>
            <p>Name: {name}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Room Type: {roomType}</p>
            <p>Total Price: ${price}</p>
          </SummaryWrapper>
        )}
        <br/>
        <div>
          <a href="/Diwali">
            <button style={buttonStyle}>For Diwali Special Offers. Click here!</button>
          </a>
        </div>
      </PurchaseWrapper>
    </Container>
  );
};

export default Rooms;