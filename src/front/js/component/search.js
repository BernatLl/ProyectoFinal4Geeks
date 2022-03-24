import React, {useEffect, useContext, useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../../styles/search.css"
import FormCheck from 'react-bootstrap/FormCheck'
import Form from 'react-bootstrap/Form'
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

export const Search = ()=>{
    const { store, actions } = useContext(Context);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
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
                <a key={i} className="dataItem" target="_blank">
                  <p>{value.course_name} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
}