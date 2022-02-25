import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function SearchBar({ isSearched, setSearch}) {

const [tempSearch, setTempSearch] = useState("")

const navigate = useNavigate()

  const handleChange = (e) => {
    setTempSearch(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(tempSearch)  
    navigate("/artists")
  };
  console.log(tempSearch)
  return (
    <>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        align="center"
        sx={{ color: "white", mb: 3, fontFamily: "kanit", ml: 3 }}
      >
        Find artist(s) for your sketchable moments
      </Typography>
      <form onSubmit={handleSubmit} style={{display:"flex"}}>
        <Search onChange={handleChange}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "white" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "white"}}
          />
        </Search>
        <Button variant="contained" onClick={handleSubmit}>Search</Button>
        
      </form>
    </>
  );
}
