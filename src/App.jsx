import React, { useEffect, useState } from 'react'

export function App() {
  const [hue, setMaxHueColor] = useState(Math.floor(Math.random() * 360))
  const [saturation, setMaxSatColor] = useState(Math.floor(Math.random() * 100))
  const [lightness, setMaxLightColor] = useState(
    Math.floor(Math.random() * 100)
  )

  function updateMaxHueColor(event) {
    setMaxHueColor(event.target.value)
  }
  function updateMaxSatColor(event) {
    setMaxSatColor(event.target.value)
  }

  function updateMaxLightColor(event) {
    setMaxLightColor(event.target.value)
  }

  function handleNewColorButton() {
    setMaxHueColor(Math.floor(Math.random() * 360))
    setMaxSatColor(Math.floor(Math.random() * 100))
    setMaxLightColor(Math.floor(Math.random() * 100))
  }

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Overpass:wght@100&display=swap');
      </style>
      <header>
        <h1> color picker </h1>
      </header>

      <section className="h">
        H: {hue}
        <input
          type="range"
          min="0"
          max="360"
          list="tickmarks"
          value={hue}
          onChange={updateMaxHueColor}
        ></input>
      </section>
      <section className="s">
        H: {hue}
        <input
          type="range"
          min="0"
          max="100"
          list="tickmarks"
          value={saturation}
          onChange={updateMaxSatColor}
        ></input>
      </section>
      <section className="l">
        H: {hue}
        <input
          type="range"
          min="0"
          max="360"
          list="tickmarks"
          value={lightness}
          onChange={updateMaxLightColor}
        ></input>
      </section>
      <datalist id="tickmarks">
        <option value="0" label="0"></option>
        <option value="180" label="180"></option>
        <option value="360" label="360"></option>
      </datalist>
      <datalist id="tickmarks100">
        <option value="0" label="0"></option>
        <option value="50" label="50"></option>
        <option value="100" label="100"></option>
      </datalist>

      <div className="color">
        {' '}
        hsl {hue}, {saturation}, {lightness}
      </div>

      <section>
        <div
          className="colorBox"
          style={{
            backgroundColor: `hsl(${hue} ${saturation}% ${lightness}%) `,
          }}
        ></div>
      </section>
      <h2>
        <button onClick={handleNewColorButton}>give me a random color</button>
      </h2>
      <footer>
        <p>made by mary 2021</p>
      </footer>
    </div>
  )
}
