import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaSearch,
  FaCaretDown,
  FaCaretUp,
  FaSortDown,
  FaSortUp,
} from "react-icons/fa";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Header() {
  const [searchIconOpen, setSearchIconOpen] = useState(false);
  const [menuOpen, isMenuOpen] = useState(false);
  const [background, setBackground] = useState(false);

  const handleSearchIconClick = () => {
    setSearchIconOpen(!searchIconOpen);
  };
  const handleMenuOpen = () => {
    isMenuOpen(!menuOpen);
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  let headerClasses = `header ${background ? "header-background" : ""}`;
  return (
    <>
      <div className={headerClasses}>
        <div className="logo">
          <a href="/">
            <img src="https://res.cloudinary.com/dupmrdipa/image/upload/v1640608677/netflix-clone/netflix-logo_c1igmj.png"></img>
          </a>
        </div>
        <div className="header-menu-items">Home</div>
        <div className="header-menu-items">Audio & Subtitles</div>
        <div className="header-menu-items">TV Shows</div>
        <div className="header-menu-items"> Movies</div>
        <div className="header-menu-items">New & Popular</div>
        <div className="header-menu-items"> My List</div>
        <div className="filler"> </div>
        {searchIconOpen && (
          <div className={"header-menu-items" + " " + "search-bar"}>
            <InputGroup size="sm">
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children={<FaSearch />}
              />

              <Input
                placeholder="Tiles, People, Genres"
                colorScheme="white"
                bg="black"
                borderColor="white"
                color="white"
              />
            </InputGroup>
            {/* <input type="text" placeholder="Tiles, People, Genres"></input> */}
          </div>
        )}

        <div
          className={"header-menu-items" + " " + "search-icon"}
          onClick={handleSearchIconClick}
        >
          <FaSearch />
        </div>
        <div
          className={"header-menu-items" + " " + "menu-icon"}
          // style={{ zIndex: "1000" }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{ borderRadius: "10%" }}
                src="https://res.cloudinary.com/dupmrdipa/image/upload/v1640611150/netflix-clone/netflix-menu-icon_ajeioi.png"
              ></img>
            </div>
            <div style={{ marginTop: "5px", marginLeft: "5px" }}>
              <FaSortDown color="white" />
            </div>
          </div>
          <div></div>
          {/* <Menu
            bgColor="black"
            _hover={{ bgColor: "black" }}
            colorScheme="black"
            bg="black"
          >
            <MenuButton
              rightIcon={<ChevronDownIcon color="white" />}
              // bgImage="linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0))"
              bgGradient="linear(to-l, #7928CA00, #FF0080)"
              colorScheme="black"
            >
              <img src="https://res.cloudinary.com/dupmrdipa/image/upload/v1640611150/netflix-clone/netflix-menu-icon_ajeioi.png"></img>
            </MenuButton>
            <MenuList
              bgColor="black"
              borderColor="black"
              _hover={{ bgColor: "black" }}
              _groupHover={{ bgColor: "black" }}
            >
              <MenuItem
                _hover={{ bgColor: "black", textDecoration: "underline" }}
                _groupHover={{ bgColor: "black" }}
              >
                <Text>Account</Text>
              </MenuItem>
              <MenuItem
                _hover={{ bgColor: "black", textDecoration: "underline" }}
              >
                Help Center
              </MenuItem>
              <MenuItem
                _hover={{ bgColor: "black", textDecoration: "underline" }}
              >
                Sign out of Netflix
              </MenuItem>
            </MenuList>
          </Menu> */}
        </div>
      </div>
    </>
  );
}
