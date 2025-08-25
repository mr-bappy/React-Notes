import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard';
import './Netflix.css'

// making of a component
export const NetflixSeries = () => {

  const name = 'Queen of Tears';
  const rating = 8.2 ;
  const summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias obcaecati, dolorem enim maiores velit incidunt nemo similique non quae numquam cupiditate labore fugit quia explicabo amet tenetur totam in optio?' ;

  function returnGenre(){
    return 'RomCom';
  }

  return (
    <div className='container'>
        <h1 className='card-heading'>List of Best Netflix Series</h1>
        <div className='grid grid-three--cols'>
            {
                seriesData.map((item) => 
                    <SeriesCard key={item.id} item={item}/>
                )
            }
        </div>
    </div>
  )
}

// export default NetflixSeries;