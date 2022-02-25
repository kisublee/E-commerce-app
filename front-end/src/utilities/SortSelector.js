import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function SortSelector({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          id="sort"
          value={sort.option}
          label="sort"
          onChange={handleChange}
        >
          <option value="">Sort By</option>

          <option value="high">Price High to Low</option>
          <option value="low">Price Low to High</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
