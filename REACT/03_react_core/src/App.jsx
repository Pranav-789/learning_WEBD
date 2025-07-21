import React from 'react'
import PantryTracker from './Kitchen_Chronicles/PantryTracker'
import OrderSheet from './Kitchen_Chronicles/OrderSheet'
import CookingTimer from './Kitchen_Chronicles/CookingTimer'
import KitchenChaos from './Kitchen_Chronicles/KitchenChaos'
import Menu from './Kitchen_Chronicles/Menu'
import CustomerReview from './Kitchen_Chronicles/Customer_Review'
import CustomeCollect from './Kitchen_Chronicles/CustomeCollect'

const App = () => {
  return (
    <div>
      <PantryTracker/>
      <OrderSheet/>
      <CookingTimer/>
      <KitchenChaos/>
      <Menu/>
      <CustomeCollect/>
    </div>
  )
}

export default App
