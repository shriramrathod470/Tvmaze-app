import React,{useState,useEffect} from 'react'
import style from '../Components/style.css'
import Actor from './Actors';
import Show from './Show';
function Tvmaze(){
   
    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    return(
        <>

<div className="container">  
   <header>
   <h1 className='header' id='header1'>Tvmaze</h1>
    <h2 className='header' id='header2'>Search Your Fave Shows</h2>
   </header>
    
{/* ----------------------Option Section--------------------- */}

    <div className="search">
            <div>
                <h2>Choose your Category</h2>               
                <input type="radio" name="movie" onChange={() => setActorFilter()} /> <strong> BY ACTOR </strong>
                <input type="radio" name="movie" onChange={() => setShowFilter()} className="ms-4" /> <strong> BY SHOWS </strong>
               
                {actor ? <Actor /> :""}
                {show ? <Show /> :""}  
           </div>
                                  
    </div>
            

    </div>          
        </>
    )
}
export default Tvmaze