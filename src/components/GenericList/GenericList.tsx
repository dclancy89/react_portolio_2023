import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const GenericList = (props: { listItems: any[] }) => {
  const listItems = props.listItems;
  return (
    <>
      <List>
        {listItems.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              sx={{
                paddingTop: "4px !important",
                paddingBottom: "4px !important",
              }}
            >
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
