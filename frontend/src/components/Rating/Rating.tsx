import React from "react";
import Pet from "../../model/Pet";
import { Rating } from "../../model/Rating";

interface Props {
  pet: Pet;
}

const RatingIcon = () => (<span><img src="/star-empty.png" /></span>)
const RatingIconFilled = () => (<span><img src="/star-filled.png" /></span>)


export default function (props: Props) {
  const ratings = props.pet.ratings;
  const ratingCount = ratings.length;
  const average = parseFloat((ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length).toFixed(1));

  return (
    <>
      <div className="stars-container">
        <div className="stars-empty">
        </div>
        <div className="stars-full" style={{ width: `${(average * 20)}%` }}>
        </div>
      </div>
      <span id="rating-span">{`${((average))} (${ratingCount} ratings)`}</span>
    </>
  );

  // return (
  //   <span id="rating-span">{`${Math.floor(parseFloat(average))} * <img ref="frontend/public/star-filled.png" /> (${ratingCount} ratings)`}</span>
  // );
}


