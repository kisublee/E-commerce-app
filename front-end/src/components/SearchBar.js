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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      color: "white",
    },
  },
}));

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
        <FormControl sx={{ m: 1 }} variant="standard">
          {isSearched && (
            <NativeSelect
              id="price"
              // value={input.camera}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option value="">Sort by</option>
              <option value="high">Price High to Low</option>
              <option value="low">Price Low to High</option>
              <option value="distance">Distance</option>
              <option value="newly">Newly Listed </option>
            </NativeSelect>
          )}
        </FormControl>
      </form>
    </>
  );
}
