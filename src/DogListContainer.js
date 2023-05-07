// DO NOT DELETE
import React, { useEffect, useState } from 'react'

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState([]);

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
      <ul>
        {breeds.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};
