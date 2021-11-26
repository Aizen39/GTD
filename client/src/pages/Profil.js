import React, {useContext} from 'react';
import Log from '../components/log';
import { IdContext } from '../components/AppContext';


const Profil = () => {
    const id = useContext(IdContext);

  return (
    <div className="profil-page">
      { id ? (
          <h1>Update page</h1>
      ): (
      
      <div className="log-container">
        <Log  signin={false} signup={true}/>
        <div className='img-container'>
            <img src="./img/mew.svg" alt="img-log"/>
          
        </div>
      </div>
      )}     
    </div>
  );
};

export default Profil;