import React, { useState } from 'react';

const AddressInput = (props) => {
  const [address, setAddress] = useState('');
  // const [latitude, setLatitude] = useState(18.603344);
  // const [longitude, setLongitude] = useState(73.90591789999999);

  const handlePlaceSelect = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('address-input')
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        console.error('No location data for the selected address.');
        return;
      }

      const { lat, lng } = place.geometry.location;      
      props.onLocationUpdate(lat(), lng());
    });
  };

  return (
    <div>
      <h2>Enter your Address</h2>
      <input
        id="address-input"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onFocus={handlePlaceSelect}
        placeholder="Enter your address"
        className='address-input'
      />

    </div>
  );
};

export default AddressInput;
