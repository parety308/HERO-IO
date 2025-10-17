import React from 'react';

const External = () => 
    {
  const handleClick = () => {
    window.location.href = 'https://play.google.com/store';
  };

  return (
    <button onClick={handleClick}>
      Go to Play Store
    </button>
  );
}
export default External;