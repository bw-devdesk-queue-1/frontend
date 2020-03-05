import React from "react";
import { Link, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

//<select type="text" name="category" onChange={handleChanges}>
//    <option value="" defaultValue selected>Choose a Category</option>
//    <option value="Git">Git</option>
//    <option value="Express">Express</option>
//    <option value="React">React</option>
//    <option value="HTML">HTML</option>
//    <option value="CSS">CSS</option>
//    <option value="General Javascript">General Javascript</option>
//    <option value="General Computer">General Computer</option>
//    <option value="Other">Other</option>
//</select>

const useStyles = makeStyles({
  category: {
    padding: "1%",
    margin: "5px"
  },
  active: {
    backgroundColor: "blue"
  }
});

function Categories(props) {
  const classes = useStyles();

  const isActive = category =>
    props.activeCategory !== undefined &&
    category.toLowerCase() === props.activeCategory.toLowerCase();

  const activeClass = `${classes.category} ${classes.active}`;
  if (props.categories !== null) {
    return (
      <Grid container justify="center">
        {props.categories.map((category, idx) => (
          <Paper
            key={idx}
            className={isActive(category) ? activeClass : classes.category}
          >
            <Link
              component={RouterLink}
              to={`${props.match.url}?category=${category}`}
            >
              {category}
            </Link>
          </Paper>
        ))}
      </Grid>
    );
  } else {
    return <div></div>;
  }
}

export default Categories;
