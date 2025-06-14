import React, { useState } from "react";
import "../../../styles/components/subcomponents/searchbars/MainSearchbar.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  }
  const handleKeyPress = e => {
    if ((e.key === 'Enter' || e.keyCode === 13) && query) {
      navigate(`/búsqueda/${query}`)
    }
  }

  return (
    <Container id="search-bar">
      <TextField
        id="search-field"
        variant="filled"
        size="small"
        placeholder="Escriba aquí una palabra"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            paddingLeft: "36px"
          }
        }}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <Link className={query? "" : "disabled"} to={`/búsqueda/${query}`} id="search-button">
        <img src="./images/search.svg"/>
      </Link>
    </Container>
  );
}
