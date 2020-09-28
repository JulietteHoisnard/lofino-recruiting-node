import React from "react";
import Pet from "../../model/Pet";
import { Rating } from "../../model/Rating";

interface Props {
  pet: Pet;
}

export default function (props: Props) {
  const ratings = props.pet.ratings;
  
  const ratingCount = ratings.length;
  const average = ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length;
  
  return (
    <span id="rating-span">{`${average.toFixed(1)} / 5 (${ratingCount} ratings)`}</span>
  );
}
