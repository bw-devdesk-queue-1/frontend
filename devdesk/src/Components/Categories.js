import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  selectEmpty: {
    minWidth: 120
  }
});

function Categories(props) {
  const classes = useStyles();

  const activeCategory = props.activeCategory || "";

  const handleChange = event => {
    const category = event.target.value;
    props.history.push(`${props.match.url}?category=${category}`);
  };

  if (props.categories !== null) {
    return (
      <FormControl>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          className={classes.selectEmpty}
          value={activeCategory}
          onChange={handleChange}
        >
          {props.categories.map((category, idx) => (
            <MenuItem key={idx} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    return <div></div>;
  }
}

export default Categories;
