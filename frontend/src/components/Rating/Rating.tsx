import React from "react";
import Pet from "../../model/Pet";
import { Rating } from "../../model/Rating";

interface Props {
  pet: Pet;
}

const RatingIcon = () => (<img src="/star-empty.png" />)
const RatingIconFilled = ({show}) => (<img style={{visibility: show ? 'visible' : 'hidden'}} src="/star-filled.png" />)


export default function (props: Props) {
  const ratings = props.pet.ratings;
  const ratingCount = ratings.length;
  const average = parseFloat((ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length).toFixed(1));

  return (
    <>
      <div className="stars-container">
        <div className="stars-empty">
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </div>
        <div className="stars-full">
          <RatingIconFilled show={average >= 1.0}/>
          <RatingIconFilled show={average >= 2.0}/>
          <RatingIconFilled show={average >= 3.0}/>
          <RatingIconFilled show={average >= 4.0}/>
          <RatingIconFilled show={average >= 5.0}/>
        </div>
      </div>
      <span id="rating-span">{`${(average)} (${ratingCount} ratings)`}</span>
    </>
  );

  // return (
  //   <span id="rating-span">{`${Math.floor(parseFloat(average))} * <img ref="frontend/public/star-filled.png" /> (${ratingCount} ratings)`}</span>
  // );
}


