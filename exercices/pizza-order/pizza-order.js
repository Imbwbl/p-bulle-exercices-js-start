/// <reference path="./global.d.ts" />
//
// @ts-nocheck

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  switch (pizza) {
    case 'Caprese':
      price += 9
      break;
    case 'Margherita':
      price += 7
      break;
    case 'Formaggio':
      price += 10
      break;
  }

  extras.forEach(e => {
    if (e === "ExtraSauce") {
      price += 1
    }
    if (e === "ExtraToppings"){
      price += 2   
    }
  })

  return price
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let price = 0;
  pizzaOrders.forEach(p => {
    price += pizzaPrice(p.pizza, ...p.extras)
  })
  return price
}
