import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className="flex flex-col gap-4 items-center mt-6">
      <h1 className="text-2xl font-bold mb-4">🍽️ Chef's Specials</h1>
      <MenuItem name={"pizza"} price={"$30"} />
      <MenuItem name={"Pasta"} price={"$45"} />
      <MenuItem name={"Burger"} price={"$15"} />
    </div>
  );
}

export default Menu
