
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useMemo } from "react";
import { getHeroById } from "../selectors/getHeroById";


export const HeroScreen = (  ) => {

  const navigate = useNavigate();

  const {heroeId} = useParams();

  const hero = useMemo( () =>
        getHeroById(heroeId), [heroeId] );

  if (!hero) {
    return <Navigate to='/' />
  } 

  const {
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters
  } = hero;

  

  const handleReturn = () => {
    navigate (-1 );
  }

  const imagePath = `./assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={imagePath } 
        alt={superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInDownBig">
        <h3> {hero.superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-items">
            <b> Alter Ego:  </b> {alter_ego}
          </li>

          <li className="list-group-items">
            <b> Editor:  </b> {publisher}
          </li>

          <li className="list-group-items">
            <b> Primera Aparición:  </b> {first_appearance}
          </li>

          <h5 className="mt-3"> Personajes </h5>
          <p> {characters} </p>

          <button 
          className="btn btn-outline-info"
          onClick={handleReturn}
          > 
            Regresar
          </button>

        </ul>
      </div>

    </div>
  )
}
