// DO NOT DELETE
import React from "react";

export const BreedsSelect = (props) => {
    const listBreeds = props.breeds.map((breed)=>
        <option key={breed.toString()} value={breed}>{breed}</option>
    );
    console.log(listBreeds);


    return (
        <>
            <h2>BreedsSelect</h2>
            <select>
                {listBreeds}
            </select>
        </>
    );
}