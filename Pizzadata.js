import React from 'react'
import pizzaData from './Pizza'
import "./Pizza.css"


function Pizzadata() {

  const startinHour = 12
  const lastHour = 22

  const day = new Date()
  const hour = day.getHours()

  return (
    <>
      <header>
        <h1>FAST REACT PIZZA CO.</h1>
        <h3>OUR MENU</h3>
      </header>

      <div className='wrapper'>

        {
          pizzaData.map((pizza, index) => {
            return (

              <div key={index} className={(pizza.soldOut !== false) ? ("gray box") : "box"}>
                <div className='img'>
                  <img src={pizza.photoName} alt={pizza.name} />
                </div>
                <div className='box1'>
                  <h1>{pizza.name}</h1>
                  <p>{pizza.ingredients}</p>
                  <p>{(pizza.soldOut === false) ? ("Price $. " + pizza.price) : "soldOut"}</p>
                </div>

              </div>
 

            )
          })
        }
      </div>

      <footer>
        <p>We'er welcome you between {startinHour}:00 to {lastHour
         }:00</p>

        {(startinHour <= hour && lastHour >= hour) ? <button>Order Now</button> : null}

        <div className='bottom'></div>

      </footer>
    </>

  )
}

export default Pizzadata;