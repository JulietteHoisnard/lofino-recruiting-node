import React from "react";
import Pet from "../../model/Pet";

import "./PetCard.css";
import Rating from "../Rating/Rating";

interface Props {
  pet: Pet;
}

export default function PetCard(props: Props) {
  const { name, imageUrl, birthdate } = props.pet;
  const today: Date = new Date();
  let age: number = today.getFullYear() - new Date(birthdate).getFullYear();
  const m: number = today.getMonth() - new Date(birthdate).getMonth();
  if (m < 0 || (m === 0 && today.getDate() < new Date(birthdate).getDate())) {
    age--;
  }
 
  return (
    <section className="pet-card">
      <h2>
        {name}, {age} years old <Rating pet={props.pet} />
      </h2>
      <img className="pet-card--img" src={imageUrl} alt="The pet" />
    </section>
  );
}
