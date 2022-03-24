import React, {useEffect, useContext, useState} from "react";
import "../../styles/search.css"
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Search = ()=>{
    const { store, actions } = useContext(Context);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
    useEffect (()=>{
		actions.loadCourses();
	},[])

    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = store.course.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className="search2">
        <div className="searchInputs2">
          <input
            type="text"
            placeholder="Enter your search"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon2">
            {filteredData.length === 0 ? (
              <FontAwesomeIcon icon={faSearchengin} />
            ) : (
                <FontAwesomeIcon icon={faXmarkSquare} onClick={clearInput} />
              
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, i) => {
              return (
                <a id="results" onClick={clearInput} key={i} href={"/courseview/"+ value.id} target="_blank" >
                <h4 className="dataItem">
                  <p>{value.course_name} </p>
                </h4>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
}