import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const GenericList = (props: { listItems: any[] }) => {
  const listItems = props.listItems;
  return (
    <>
      <List>
        {listItems.map((item, idx) => {
          return (
            <ListItem key={idx}>
              <ListItemIcon sx={{ minWidth: "25px" }}>
                <CircleIcon sx={{ color: "white", fontSize: "10px" }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenericList;
