import React, { useState, useEffect} from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
  // console.log(actorsData);
  return (
    <>
      <div className="searchbox">
             <input
                className="inputbox"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Search by Actors name...."
              />
        </div>
          <div className="actors">
          <div className="showdata2">
            {
              actorsData.map((element) => {
              return (
                <div>
                  <div>
                    <a href={element.person.url} target="#">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="">
          
                        <img
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          alt = "Not Found"
                        />
                      </div>
                    )}
                    </a>
                    <h5 className="">
                      {element.person.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>  
      <div>
        <h3>
        {
            !actorsData.length ? 
           <h3> Plsease Enter a Correct Actor name</h3>:<h3> </h3>
        }
        </h3>
        
      
        </div>       
    </>
  );
}

export default Actor;
