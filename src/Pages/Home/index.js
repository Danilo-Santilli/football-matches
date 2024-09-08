import apiFootball from "../../Services/api";
import { useEffect, useState} from 'react';

export default function Home(){

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    async function getUpcomingMatches(){
      try{
        const response = await apiFootball.get('fixtures', {
          params: {
            league: '1',
            season: '2022'
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
    <div>
      {matches.map((match)=>{
        return(
          <div className="match">
            
          </div>
        )
      })}
    </div>
  )
}