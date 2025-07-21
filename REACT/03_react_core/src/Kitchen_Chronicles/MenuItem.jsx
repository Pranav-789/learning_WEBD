import React from 'react'

const MenuItem = ({name, price}) => {
  return (
    <div>
      <div className="p-3 bg-yellow-100 rounded-md shadow-md">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p>💰 Price: ₹{price}</p>
      </div>
    </div>
  );
}

export default MenuItem
