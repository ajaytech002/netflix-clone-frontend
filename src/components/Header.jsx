import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaSearch, FaCaretDown, FaCaretUp } from "react-icons/fa";
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
  const handleSearchIconClick = () => {
    setSearchIconOpen(!searchIconOpen);
  };
  const handleMenuOpen = () => {
    isMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="header">
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
              {/* <InputLeftAddon
                children={
                  <Box color="black">
                    <FaSearch />
                  </Box>
                }
                size="sm"
              /> */}
              <Input type="tel" placeholder="Tiles, People, Genres" />
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
          style={{ zIndex: "1000" }}
        >
          {/* <div style={{ display: "flex", flexWrap: "no-wrap" }}>
            <div onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuOpen}>
              <img src="https://res.cloudinary.com/dupmrdipa/image/upload/v1640611150/netflix-clone/netflix-menu-icon_ajeioi.png"></img>
            </div>
            <div style={{ marginTop: "7px", marginLeft: "5px" }}>
              {!menuOpen && <FaCaretDown />}
              {menuOpen && <FaCaretUp />}
            </div>
          </div> */}
          <Menu
            bgColor="black"
            _hover={{ bgColor: "black" }}
            colorScheme="black"
          >
            <MenuButton rightIcon={<ChevronDownIcon color="white" />}>
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
          </Menu>
        </div>
      </div>
    </>
  );
}
