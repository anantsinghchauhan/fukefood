import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SingleRecipe from "./SingleRecipe/SingleRecipe";

function CardRecipe(props) {
  const [state, setstate] = useState(null);

  useEffect(() => {
    setstate({ recipies: props.recipies });
  }, [props.recipies]);

  let recipelist = "";
  if (state) {
    recipelist = state.recipies.map((r) => (
      <SingleRecipe key={r.id} recipe={r} />
    ));
  }

  return <>{recipelist}</>;
}

const mapStateToProps = (state) => {
  return {
    recipies: [...state.RecipeReducer.recipies],
  };
};

export default connect(mapStateToProps)(CardRecipe);
