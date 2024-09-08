import apiFootball from "../../Services/api";
import './home.css';
import { useEffect, useState} from 'react';

export default function Home(){

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    async function getUpcomingMatches(){
      try{
        const response = await apiFootball.get('fixtures', {
          params: {
            live: 'all'
          }
        })

        setMatches(response.data.response)
        console.log(response.data.response)
      } catch(error){
        console.error('Não foi possível buscar a partida', error);
      }
    }
  
    getUpcomingMatches();
  }, [])


  return(
    <div className="container">
      <div className="matches-list">
        {matches.map((match)=>{
          return(
            <div key={match.fixture.id} className="match">
              <h2 className="league">
                {match.league.name}
              </h2>
              <h4 className="country">
                {match.league.country}
              </h4>
              <div className="teams">
                <h4 className="home">
                  {match.teams.home.name}
                  {match.goals.home}
                </h4>
                <h4 className="away">
                  {match.teams.away.name}
                  {match.goals.away}
                </h4>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}