import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

import "./NumberDisplay.css";


export default function NumberDisplay(props) {
  const { numbers } = props;

  function renderRow(props) {
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
      </Box>

  );
}
