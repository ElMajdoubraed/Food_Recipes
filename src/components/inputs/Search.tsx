import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const COLOR = "#228be6";
const PLACEHOLDER_COLOR = "#228be669";

const SearchInput = styled.input`
  width: 40%;
  height: 3rem;
  border-radius: 3rem;
  border: 2px solid ${COLOR};
  padding: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  outline: none;
  color: ${COLOR};
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 2px solid #000;
    cursor: pointer;
    width: 60%;
    transition: all 0.3s ease-in-out;
  }
  &::placeholder {
    color: ${PLACEHOLDER_COLOR};
  }
`;

const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

export default function SearchComponent(props: any) {
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm === " ") return;
      axios
        .get(`${API_URL}${searchTerm}`)
        .then((res) => {
          props.setError({ exist: false, message: "" });
          props.setItems(res.data.meals);
        })
        .catch((err) => props.setError({ exist: true, message: err }));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  return (
    <SearchInput
      onChange={(e) => setSearchTerm(e.target.value)}
      type="search"
      placeholder="Enter an ingredient"
      name="searchMeal"
      id="searchMeal"
    />
  );
}
