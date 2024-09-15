import apiFootball from "../../Services/api";
import "./home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);

  const getUpcomingMatches = async () => {
    try {
      const response = await apiFootball.get("fixtures", {
        params: {
          live: "39-140-135-78-61-71-2-13",
        },
      });

      setMatches(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.error("Não foi possível buscar a partida", error);
    }
  };

  useEffect(() => {
    getUpcomingMatches();

    const intervalId = setInterval(() => {
      getUpcomingMatches();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="matches-list">
        {matches.map((match) => {
          return (
            <div key={match.fixture.id} className="match">

              <div className="league">
                <h2 className="league-name">{match.league.name}</h2>

                <img
                  src={match.league.flag}
                  alt="flag"
                  className="league-flag"
                />
              </div>

              <div className="status">
                <p>{match.fixture.status.long}</p>
                <p>{match.fixture.status.elapsed}</p>
              </div>

              <div className="teams">
                <div className="team-home">
                  <img src={match.teams.home.logo} alt="logo" />
                  <h4 className="name">{match.teams.home.name}</h4>
                </div>

                <div className="team-away">
                  <img src={match.teams.away.logo} alt="logo" />
                  <h4 className="name">{match.teams.away.name}</h4>
                </div>
              </div>

              <div className="goals">
                <h1 className="goals-home">{match.goals.home}</h1>

                <h1 className="goals-away">{match.goals.away}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
