import React from "react";

function Card(props) {
  return (
    <div>
      <a href={`/homepage/${props.id}`}>
        <div key={props.id}>
          {props.image ? (
            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} />
          ) : (
            <img
              className="default"
              src={
                "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"
              }
            />
          )}
        </div>
      </a>
    </div>
  );
}

export default Card;
