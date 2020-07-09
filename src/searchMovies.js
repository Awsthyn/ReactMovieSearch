import React, { useState } from "react";
import Card from "./card.js";

export default function SearchMovie(){
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const searchMovies = async (e) => {
        e.preventDefault();
        
        

        const url = "https://www.omdbapi.com/?t=" + encodeURI(query) + "&apikey=608f663f";

        try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(oldMovies => [...oldMovies, data]);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="Movie..." value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie["Poster"]).map(movie => <Card key={movie["imdbID"]} title={movie["Title"]} poster={movie["Poster"]} year={movie["Year"]} rating={movie["imdbRating"]} plot={movie["Plot"]} />)}
        </div>
        </div> 
        
        
        )

    }