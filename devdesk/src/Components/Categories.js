import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  button: {
    margin: "0 10px"
  },
  selectEmpty: {
    minWidth: 120
  }
});

function Categories(props) {
  const classes = useStyles();

  const categories = props.categories || [];
  const activeCategory = props.activeCategory || "";

  const handleChange = event => {
    const category = event.target.value;
    props.history.push(`${props.match.url}?category=${category}`);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="category-label">Category</InputLabel>
      <Select
        labelId="category-label"
        id="category-select"
        className={classes.selectEmpty}
        value={activeCategory}
        onChange={handleChange}
      >
        {categories.map((category, idx) => (
          <MenuItem key={idx} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <Button
        className={classes.button}
        variant="contained"
        component={RouterLink}
        to={`${props.match.url}`}
      >
        Clear
      </Button>
    </FormControl>
  );
}

export default Categories;
