// DO NOT DELETE
import React from 'react';
import { DogImage } from './DogImage';
import { useState } from 'react';

export const Description = () => {
    const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/pointer-german/n02100236_2542.jpg");
    const handleButtonClick = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(dogUrl => setDogUrl(dogUrl.message))
            .catch(error => console.log(error))
    };
    return (
        <>  
            <p className='p'>This is for people who love dogs.</p>
            < DogImage url = {dogUrl}/>
            < br />
            <button onClick={handleButtonClick}>更新</button>
        </>
    )
}