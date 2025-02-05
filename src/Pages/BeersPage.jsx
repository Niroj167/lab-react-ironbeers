import React, { useState, useEffect } from "react";
import Header from "../Components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function BeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
    setBeers(response.data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <Header />
      <div className="beersOverflow">
        {beers &&
          beers.map((beer) => {
            return (
              <Link to={`/${beer._id}`} className="link">
                <div className="beerCard">
                  <div className="beerImg">
                    <img src={beer.image_url} alt={beer.name} />
                  </div>
                  <div className="beerText">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p>Contributed by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default BeersPage;