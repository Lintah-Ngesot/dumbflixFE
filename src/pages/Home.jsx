import React, {useState, useEffect} from "react";
import MovieContainer from "../components/MovieContainer";
import SeriesContainer from "../components/SeriesContainer";


function Home() {
  return (
    <>
      <div>
        <div className="background-hero-home container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
            <h1 className="text-size text-start">Money Heist</h1>
            <p className="">
            Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. 'The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó). The narrative is told in a real-time-like fashion and relies on flashbacks, time-jumps, hidden character motivations, and an unreliable narrator for complexity.
            </p>
            <div className="mb-4">
              <span>2013</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                TV Series
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
        <MovieContainer/>
        <SeriesContainer/>
    </>
  );
}

export default Home;
