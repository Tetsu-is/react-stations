// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/pointer-german/n02100236_2542.jpg");
  const handleButtonClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(dogUrl => setDogUrl(dogUrl.message))
      .catch(error => console.log(error))
  };
  return (
    <div>
      <header className='header'>Dogアプリ</header>
      <p className='p'>This is for people who love dogs.</p>
      <img src={dogUrl} />
      <br></br>
      <button onClick={handleButtonClick}>更新</button>
    </div>
  )
}
