import Slider from "./NetflixSlider";
import React, { Component, useState, useEffect, useRef } from "react";
import "./scroller.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

let initMovies = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    imageBg: "/images/slide1b.webp",
    title: "1983",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    imageBg: "/images/slide2b.webp",
    title: "Russian doll",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    imageBg: "/images/slide3b.webp",
    title: "The rain",
  },
  {
    id: 4,
    image: "/images/slide4.jpg",
    imageBg: "/images/slide4b.webp",
    title: "Sex education",
  },
  {
    id: 5,
    image: "/images/slide5.jpg",
    imageBg: "/images/slide5b.webp",
    title: "Elite",
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror",
  },
];

function Scroller({ items, title }) {
  const [movies, setMovies] = useState(initMovies);
  //   const [moviesLocation, setMoviesLocation] = useRef([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    setMovies(items);
  }, [items]);

  const handleScrollLeft = () => {};
  const handleScrollRight = () => {};
  return (
    <>
      <div className="scroller">
        {typeof movies !== "undefined" && movies.length > 0 && (
          <>
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              {title}
            </div>
            <div className="scroller-reel-shell">
              <div className="scroller-left">
                <div onClick={handleScrollLeft}>
                  <FaChevronLeft className="scroller-left-chevron" />
                </div>
              </div>
              <div className="scroller-reel">
                {movies.map((movie, i) => (
                  <ScrollerItem
                    movie={movie}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    setX={setX}
                    setY={setY}
                  />
                ))}
              </div>
              <div className="scroller-right" onClick={handleScrollRight}>
                <FaChevronRight className="scroller-right-chevron" />
              </div>
            </div>
            {/* <Slider>
            {movies.map((movie) => (
              <div onClick={(e) => handleClickMovie(movie.url)}>
                <Slider.Item movie={movie} key={movie.prefix + movie.id}>
                  item1
                </Slider.Item>
              </div>
            ))}
          </Slider> */}
          </>
        )}
      </div>
      {modalOpen && (
        <div className="modal" style={{ top: y, left: x }}>
          <img src="https://res.cloudinary.com/dupmrdipa/image/upload/v1640340968/netflix-clone/continue-watching-for-user/chefs-table_wg465u.jpg" />
        </div>
      )}
    </>
  );
}

function ScrollerItem({ movie, modalOpen, setModalOpen, setX, setY }) {
  const handleClickMovie = (url) => {
    console.log(url);
  };
  const el = useRef(null);
  return (
    <div
      ref={el}
      key={movie.prefix + movie.id}
      className="scroller-reel-item"
      onClick={() => handleClickMovie(movie.url)}
      onMouseOver={(e) => {
        // console.log("mouse over", movie);
        // console.log(e.pageX);
        let pos = el.current.getBoundingClientRect();
        let y = pos.top + pos.height / 2;
        let x = pos.left + pos.width / 2;
        // let x = pos.left;
        // let y = pos.top;
        console.log("x=", x);
        console.log("y=", y);
        setX(x - 120);
        setY(y - 10);
        // setX(e.pageX);
        // setY(e.pageY);
        setModalOpen(true);
      }}
      onMouseLeave={(e) => {
        console.log("mouse leave", movie);
        setModalOpen(false);
      }}
      //   ref={(el) => {
      //     if (!el) return;
      //     //   let rect = el.getBoundingClientRect();
      //     //   let location = {
      //     //     x: rect.top + rect.width / 2,
      //     //     y: rect.left + rect.width / 2,
      //     //   };
      //     //   let newMoviesLocation = [...moviesLocation];
      //     //   newMoviesLocation[i] = location;
      //     //   setMoviesLocation(newMoviesLocation);
      //   }}
      //   whileHover={{
      //     scale: 1.5,
      //     transition: { duration: 1 },
      //   }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="scroller-reel-item-image"
      />
    </div>
  );
}

export default Scroller;
