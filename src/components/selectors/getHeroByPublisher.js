import {heroes} from '../data/heroes';

export const getHeroByPublisher = (publisher) =>{

  const validPublishers = ['DC Comics','Marvel Comics'];

  if ( !validPublishers.includes(publisher) ) {
    throw new Error( `$ {publisher} No es válido ` );
  }


  return heroes.filter( hero => hero.publisher === publisher);


}