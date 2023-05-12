// DO NOT DELETE
import React from "react";

export const BreedsSelect = ({selectedBreed, setSelectedBreed, breeds}) => {
    const listBreeds = breeds.map((breed) =>
        <option key={breed.toString()}> {breed} </option>
    );
    const handleChange = (event) => {
        setSelectedBreed(event.target.value);
    }
    /* console.log(listBreeds); */


    return (
        <>
            <select value = {selectedBreed} onChange={handleChange}>
                {listBreeds}
            </select>
        </>
    );
}