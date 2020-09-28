import React, { useState, useEffect } from "react";
import Pet from "../model/Pet";
import { fetchPet } from "../service/petService";
import Rating from "../components/Rating/Rating";
import { Attribution } from "../components/Attribution/Attribution";

interface Props {
  match: any;
}

export default function Home(props: Props) {
  const petId = props.match.params.id;

  const [pet, setPet] = useState<Pet | undefined>(undefined);


  async function fetchPetFromProps() {
    const fetchedPet = await fetchPet(petId);
    setPet(fetchedPet);
  }

  useEffect(() => {
    fetchPetFromProps();
  }, [petId]);

  if (!pet) {
    return <>Loading...</>;
  }
  const { name, species, imageUrl, id } = pet;

  const submitRating = () => {
    const value = (document.querySelector('#ratinginput') as HTMLInputElement).value
    fetch(`http://localhost:8080/pets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value}),
    })
      .then(() => {
        fetchPetFromProps()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <article>
        <h2>
          {name}
          <Rating pet={pet} />
        </h2>
        <div>
          <label>
            Give your rate:
            <input type="number" id="ratinginput" name="ratinginput" min="0" max="5"/>
          </label>
          <input type="submit" value="Submit" onClick={submitRating} />
        </div>
        <img src={imageUrl} alt={`${name} the ${species}`} />
      </article>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
