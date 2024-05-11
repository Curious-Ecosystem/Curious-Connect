import React from 'react'

const App = () => {
  return (
    <div>
    <header>
    <nav>
      <ul>
        <li><a href="app.jsx">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <h1 class="logo">mbe-dev</h1>
    </nav>
  </header>
  <main>
    <div class="container">
      <img src="./res-img.png" alt=""/>
      <div class="hero-text">
        <h1>Your perfect coffee experience</h1>
        <p>Indulge in artisanal coffee delights. Crafted with passion, brewed with perfection.
          Savor the Flavor!
        </p>
        <button>Order Now</button>
      </div>
    </div>
  </main>
    </div>
    
  )
}

export default App
