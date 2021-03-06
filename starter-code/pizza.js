// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {
    name: 'Pepperonni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(($pep) => {
    $pep.style.visibility = state.pepperonni ? "visible" : "hidden"
  })
}
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(($mushroom) => {
    $mushroom.style.visibility = state.mushrooms ? "visible" : "hidden"
  })
}
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(($greenPepper) => {
    $greenPepper.style.visibility = state.greenPeppers ? "visible" : "hidden"
  })
}
// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  state.whiteSauce ?
    document.querySelector('.sauce').classList.add('sauce-white') :
    document.querySelector('.sauce').classList.remove('sauce-white')
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  state.glutenFreeCrust ?
    document.querySelector('.crust').classList.add('crust-gluten-free') :
    document.querySelector('.crust').classList.remove('crust-gluten-free')
}
// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  state.pepperonni ?
    document.querySelector('.btn.btn-pepperonni').classList.add('active') :
    document.querySelector('.btn.btn-pepperonni').classList.remove('active');
  state.mushrooms ?
    document.querySelector('.btn.btn-mushrooms').classList.add('active') :
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  state.greenPeppers ?
    document.querySelector('.btn.btn-green-peppers').classList.add('active') :
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  state.whiteSauce ?
    document.querySelector('.btn.btn-sauce').classList.add('active') :
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  state.glutenFreeCrust ?
    document.querySelector('.btn.btn-crust').classList.add('active') :
    document.querySelector('.btn.btn-crust').classList.remove('active');
}
// Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
  let total = basePrice,
    lista = document.querySelector('aside.panel.price ul');
  lista.innerHTML = ""
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      total += ingredients[ingredient].price
      lista.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name.toLowerCase()}</li>`
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = "$" + total
}

renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms
  renderEverything()
}
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}