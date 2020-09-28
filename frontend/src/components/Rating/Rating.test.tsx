import TestRenderer from "react-test-renderer";
import Rating from "./Rating";
import React from "react";
import Pet from "../../model/Pet";

describe(Rating, () => {
  it("renders average rating and rating count", () => {
    const pet = {
      ratings: [{petId: 1, value: 5},{petId:2, value: 2},{petId:3, value: 3},{petId:4, value: 2}]
    } as Pet;

    const element = TestRenderer.create(<Rating pet={pet} />);

    const span = element.root.findByProps({ id: "rating-span" });
    expect(span!.children[0]).toBe("3.0 / 5 (4 ratings)");
  });
});
