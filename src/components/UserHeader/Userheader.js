import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import "./Userheader.css";
import { Cookies } from "react-cookie";
import User from "../../img/user.svg";
import Logo from "../../img/Logo.png";

const cookie = new Cookies();



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const username = cookie.get("Username");
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <a href="./userlandingpage">
        <div className="nav-logo-container">
          <img src={Logo} alt="" height = "200px" width = "200px"/>
        </div>
      </a>
      <div className="navbar-links-container">
        <a href="/UserMessaging">Messages</a>
        <a href="./problemcomposer">Composer</a>
        <a href="/composedproblems">Composed</a>
        <a href="/UserAnalysis">Analysis</a>
        <a href="/AboutUs">About Us</a>
        
        <a href="/UserProfile"><button className="primary-button">
          <div><img src={User} alt="user" height="18px" width = "18px" /></div>
          <div>{username}</div>
        </button></a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
