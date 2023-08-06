
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const greetingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div className="item-list-container" style={containerStyle}>
      <p style={greetingStyle}>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;

