import React, { useState, useEffect} from "react";

function Actor() {
    const [inputVal, setInputVal] = useState("");
    const [showData, setshowData] = useState([]);

    let dataUrl = "";
    if (inputVal.length > 0) {
        dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
    } 
  

    const getshowData = async () => {
        try {
            let respone = await fetch(dataUrl);
            let resData = await respone.json();
            setshowData(resData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getshowData();
    },[inputVal]);
  
    return (
        <>
            <div className="searchbox">
                            <input
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                className = "inputbox"
                                placeholder="Search by Show name...."
                            />
               </div>
                <div className="showdata">
                    <div className="showdata2" >
                        {showData.map((element) => {
                            return (
                              <div>
                                <div>
                                  <a href={element.show.url} target="#">
                                  {element.show.image ? (
                                    <img
                                      src={element.show.image.medium}
                                        
                                      alt={
                                        element.show.name != null
                                          ? element.show.name
                                          : "Not found"
                                      }
                                    />
                                  ) : (
                                    <div>
                                      <img
                                        src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
               
                                        alt = {element.show.name}
                                      />
                                    </div>
                                  )}
                            </a>
                                  <div>
                                    <span>
                                      {element.show.rating.average}
                                    </span>
                                  </div>
                    </div> 
                              </div>
                            );
                        })}
                    </div>
                </div>
                
                        <div>
                          <h3>
                          {
                            !showData.length ?
                            <h3> Please Enter a Correct Show Name</h3>:<h3> </h3>
                          }
                          </h3>
                          
                          
                        </div>
        </>
    );
}

export default Actor;
