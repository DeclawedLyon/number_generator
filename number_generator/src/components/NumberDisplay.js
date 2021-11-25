import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

import "./NumberDisplay.css";


export default function NumberDisplay(props) {
  // destructured the numbers state variable from props to use inside of renderRow function
  const { numbers } = props;
  console.log(props.numberCount)

  // This function conditionally renders the generated numbers inside of the FixedSizeList component
  function renderRow(props) {
    // renderRow uses the index and style properties to conditionally render the data that is currently
    // being viewed in the list. This makes rendering more efficient since the DOM doesn't need to 
    // potentially render 10,000 elements at once
    const { index, style } = props;
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Generated Number ${index + 1}: ${numbers[index].number}`} />
        </ListItemButton>
      </ListItem>
    )
  }

  return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
        }}
      >
        {/* Use FixedSizeList to display a list the size of the generated numbers array */}
        <FixedSizeList
          height={400}
          width={500}
          itemSize={46}
          itemCount={props.numbers.length}
          overscanCount={5}
          numbers={props.numbers}
        >
          {renderRow}
        </FixedSizeList>
        <div id='count'>
          Numbers Generated: {props.count}
        </div>
      </Box>

  );
}
