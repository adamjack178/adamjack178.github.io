/* All the commented code is for the image carousel, if we want to use it on the future */

import React from "react";
// import Slider from "react-slick";

import Game3d from "./game3d";
// import reel1 from "../components/assets/reel1.png";
// import reel2 from "../components/assets/reel2.png";
// import reel3 from "../components/assets/reel3.png";
// import reel4 from "../components/assets/reel4.png";
import xmark from "../components/assets/xmark.svg";
import video from "../components/assets/gf-video.mp4";
import gameInfoStyles from "./styles/gameInfo.module.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={reel1} alt="game shot spot 1" />
//       </div>
//       <div>
//         <img src={reel2} alt="game shot spot 2" />
//       </div>
//       <div>
//         <img src={reel3} alt="game shot spot 3" />
//       </div>
//       <div>
//         <img src={reel4} alt="game shot spot 4" />
//       </div>
//     </Slider>
//   );
// };

export default function GameInfo(props) {
  const { close } = props;
  return (
    <div className={gameInfoStyles.container}>
      <img
        className={gameInfoStyles.closeBtn}
        src={xmark}
        alt="close btn"
        onKeyDown={close}
        onClick={close}
      />
      <div className={gameInfoStyles.middleSection}>
        <div className={gameInfoStyles.gameContainer}>
          <Game3d animate={1} file={"/galaxyInfo.glb"} />
        </div>

        <div className={gameInfoStyles.infoSection}>
          <h3>Game Info</h3>
          <span>Name: Galaxy Frontier</span>
          <span>Publish Date: 31/10/2022</span>
          <span>Publisher: Station</span>
          <span>Developers: Station</span>
          <span>Genre: Action</span>
          <span>Console: Bag Boy</span>
          <span>ID: 1 </span>
        </div>
      </div>

      <video
        className={gameInfoStyles.video}
        src={video}
        type="video/webm"
        autoPlay
        loop
      />

      {/* <div className={gameInfoStyles.carousel}>
        <Carousel />
      </div> */}
    </div>
  );
}
