import { useMemo } from 'react/cjs/react.development';
import { getHeroByPublisher } from '../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';


  export const HeroList = ({publisher}) => {


    const heroes = useMemo( () =>
    getHeroByPublisher (publisher), [publisher] ); 

  return (
    <div className='rows rows-cols-1 row-cols-md-3 g-3 
    animate__animated animate__fadeIn
    '>
          {
            heroes.map( hero => (
              <HeroCard key={ hero.id }
              {...hero }
              /> 
            ) )
          }
    </div >
  )
}
