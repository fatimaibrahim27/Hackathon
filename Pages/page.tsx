import React from 'react'
import Signup from '../Signup/page'
import Checkout from '../Checkout/page'
import Homepage from '../Homepage/page'
import Signin from '../Signin/page'
import Ourchefs from '../Our chefs/page'
const page = () => {
  return (
    <div>
      <Homepage/>
      <Signup/>
      <Signin/>
      <Checkout/>
      <Ourchefs/>
      
    </div>
  )
}

export default page
