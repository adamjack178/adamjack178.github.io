import React from "react";
import Typewriter from "typewriter-effect";

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
            <Typewriter
              options={{
                strings: [
                  "Creating a vibrant ecosystem for game creators on Avalanche",
                  "Empowering indie game creators on Avalanche: one game at a time.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 40,
              }}
            />
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
          Welcome to STATION3, the premier destination for all things NFT in the
          world of video games! We are excited to announce that we will offer a
          variety of NFT video game consoles and NFT video games for our users
          to enjoy. Our very first console, the Bag Boy, is now available for
          purchase and is sure to provide endless hours of entertainment. But we
          don't just want to provide our users with the best gaming experience
          possible - we also want to create a community of like-minded
          individuals who are passionate about the intersection of gaming and
          NFTs. That's why we're dedicated to connecting project creators,
          users, and game developers in our project, fostering a vibrant and
          engaged community. So if you're looking for the ultimate destination
          for NFT gaming, look no further than STATION3. We can't wait to
          welcome you to the community and see what the future holds for NFT
          gaming together!
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Publish in any category</h3>
        <p>
          In the STATION3, we will offer a wide variety of NFT video games for
          our users to enjoy. We believe that everyone should have access to the
          types of games they love, which is why we will offer a diverse
          selection of genres to choose from. Whether you're a fan of
          action-packed adventures, strategy-based gameplay, or immersive
          role-playing experiences, we've got something for everyone. Some of
          the genres we offer include: Action games, RPG games, Puzzle games,
          Sports games, Strategy games, Simulation games. And if you're a game
          developer looking to publish your own NFT game, you'll be pleased to
          know that you can publish in any category you like. We believe in
          supporting and promoting the creativity and passion of our community,
          and we're excited to see what amazing games you'll bring to the table.
          So why wait? Join us at STATION3 and discover the endless
          possibilities of NFT gaming today!
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Fee system</h3>
        <p>
          At STATION3, we are dedicated to building a thriving ecosystem for
          independent game creators on Avalanche. As such, we have implemented a
          fee system to support our project and ensure its continued success.
          This fee system will serve as our main revenue source and will allow
          us to invest in the development and growth of STATION3. A percentage
          of each video game sale or video game published on our platform will
          be used to support the project, and we believe this is a fair and
          reasonable way to ensure the sustainability of our community. We
          understand that fees can sometimes be a point of concern for creators,
          which is why we are committed to keeping them as low as possible while
          still enabling us to provide the best possible experience for our
          users. We believe that by working together and supporting one another,
          we can create a vibrant and successful ecosystem for independent game
          creators on Avalanche.
        </p>
      </div>
      <div className={publisherStyles.infoContent}>
        <h3>Become a well-known game author</h3>
        <p>
          Are you an aspiring game developer looking to make a name for yourself
          in the world of NFT gaming? Look no further than STATION3! Our
          platform is dedicated to supporting and promoting the creativity and
          passion of independent game creators. By publishing your game on our
          platform, you'll have access to a thriving community of like-minded
          individuals who are passionate about NFT gaming. But that's not all -
          by joining the STATION3 ecosystem, you'll also have the opportunity to
          showcase your talent to a wider audience. Our platform is dedicated to
          helping emerging game developers achieve success and recognition, and
          we'll do everything in our power to help you get your game in front of
          as many players as possible. So why wait? Take the first step towards
          becoming a well-known game author and publish your game on STATION3
          today. Together, we can build a brighter future for independent game
          developers on Avalanche!
        </p>
      </div>
    </div>
  );
}
