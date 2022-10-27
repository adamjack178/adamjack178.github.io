import React from "react";

import publisherStyles from "./styles/publishers.module.scss";

export default function Publishers() {
  return (
    <div className={publisherStyles.container}>
      <div className={publisherStyles.mainContent}>
        <div>
          <h1>
            Get your game{" "}
            <span className={publisherStyles.underline}>published</span>
          </h1>
          <p>
            Our goal is to create a vibrant ecosystem for independent game
            creators on Avalanche
          </p>
        </div>

        <button>
          {" "}
          <span>Launch on STATION3</span>{" "}
        </button>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>What do we offer?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis repudiandae natus doloribus optio, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perferendis veritatis repudiandae
          natus doloribus optio
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Publish in any category</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis repudiandae natus doloribus optio, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perferendis veritatis repudiandae
          natus doloribus optio
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Fee system</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis repudiandae natus doloribus optio, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perferendis veritatis repudiandae
          natus doloribus optio
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Become a well-known game author</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis repudiandae natus doloribus optio, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perferendis veritatis repudiandae
          natus doloribus optio
        </p>
      </div>
    </div>
  );
}
