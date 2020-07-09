import React from "react";

export default function Card(props){
return (
<div className="card">
<img className="card--image" src={props.poster} alt={props.title + "poster"}/>
<div className="car--content">
<h3 className="card--title">{props.title}</h3>
<p>{props.plot}</p>
<p><small>RELEASE DATE: {props.year}</small></p>
<p><small>RATING: {props.rating}</small></p>
</div>
</div>
)
}