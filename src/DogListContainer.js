// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectBreed] = useState();

  useEffect(() => {
    const fetchDogBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const result = await response.json();

        // APIレスポンスから犬種リストを生成
        const breedsArray = Object.keys(result.message);
        setBreeds(breedsArray);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchDogBreeds();
  }, []); // 空の配列を渡すことで、このuseEffectはコンポーネントがマウントされたときに一度だけ実行されます

  return (
    <div>
      <h1>Dog Breeds List:</h1>
      <BreedsSelect selectedBreed = {selectedBreed} setSelectedBreed = {setSelectBreed} breeds = {breeds} />
      <h1>selectedBreed is {selectedBreed}</h1>
    </div>
  );
};
