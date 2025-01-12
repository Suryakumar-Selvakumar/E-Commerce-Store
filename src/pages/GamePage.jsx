// libs
import styled from "styled-components";

// hooks
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

// utils
import { getAPIURL } from "../utils/getAPIURL";
import { getGamesData } from "../utils/getGamesData";

// components
import Header from "../components/Header";
import { CartContext } from "../components/CartContext";
import SimpleSlider from "../components/Slider";
import { StyledHeader } from "../components/Header";
import getFormattedDate from "../utils/getFormattedDate";

const StyledGamePage = styled.div`
  display: grid;
  background-color: rgb(15, 16, 17);
  width: 100%;
  height: 100dvh !important;
  box-sizing: border-box;
  grid-template-rows: min-content 1fr;

  ${StyledHeader} {
    position: static;
  }

  ${StyledHeader}.visible {
    animation: none;
  }

  ${StyledHeader}.hidden {
    animation: none;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0rem 2.5rem;
  padding-bottom: 2.5rem;
  height: 100% !important;
  width: 100%;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomRow = styled.div`
  display: grid;
  gap: 2rem;
  flex: 1;
  grid-template: 1fr min-content / auto max(26vw, 300px);
  grid-template-areas:
    "image-carousel game-details"
    "image-carousel cart-button";
  box-sizing: border-box;
  height: 100% !important;
`;

const ImageCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 100% !important;
  grid-area: image-carousel;
  width: 100%;
  overflow: hidden;
  cursor: grab;
  border-radius: 30px;
  display: flex;
  align-items: end;

  &:active {
    cursor: grabbing;
  }

  img {
    object-fit: cover;
    height: 100% !important;
    width: 100%;
    pointer-events: none;
  }

  .slick-slider {
    height: 100% !important;
    width: 99.85%;
    display: flex;
    justify-content: center;
  }

  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div,
  .slick-slide > div > div {
    height: 100% !important;
    width: 100%;
  }

  .slick-arrow {
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    bottom: 0;
    margin: auto 0;
    height: min-content;
    z-index: 2;
  }

  .slick-next {
    right: 25px;
  }

  .slick-next::before {
    content: "›";
    font-size: 5rem;
    color: rgb(204, 204, 204);
  }

  .slick-prev {
    left: 20px;
  }

  .slick-prev::before {
    font-size: 5rem;
    content: "‹";
    color: rgb(204, 204, 204);
  }

  .slick-dots {
    bottom: 20px;
    background-color: rgb(15, 16, 17);
    padding: 0.25rem 0.75rem 0rem 0.75rem;
    border-radius: 10px;
    width: max-content;
  }

  .slick-dots > li {
    margin: 0;
  }

  .slick-dots li button:before {
    color: rgb(153, 153, 153);
    font-size: 0.65rem;
    line-height: 1;
    opacity: 1;
    height: min-content;
  }

  .slick-dots li.slick-active button:before {
    color: ${(props) =>
      props.theme.currentTheme === "norse" ? "#46afe8" : "#ff5a5a"};
  }
`;

const WishListIcon = styled.svg`
  min-width: 30px !important;
  height: 30px;
  cursor: pointer;
  position: relative;
  bottom: 15px;
  left: -45px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: rgb(204, 204, 204);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: myFontBold;
  font-size: 1.375rem;
  transition: all 250ms ease;

  svg {
    width: 25px;
    fill: rgb(204, 204, 204);
    transition: all 250ms ease;
  }

  &:hover {
    color: ${(props) =>
      props.theme.currentTheme === "norse" ? "#46afe8" : "#ff5a5a"};
    svg {
      fill: ${(props) =>
        props.theme.currentTheme === "norse" ? "#46afe8" : "#ff5a5a"};
    }
  }
`;

const GameName = styled.span`
  font-family: myFontBlack;
  color: white;
  font-size: 3rem;
`;

const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: game-details;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 0.75rem;
  height: 295px;
  overflow: scroll;
  scrollbar-width: none;
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0) 0%,
    rgb(26, 26, 26) 100%
  );
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  padding: 2rem 1.5rem 1.5rem 1rem;

  span {
    font-family: myFontBold;
    font-size: 1.375rem;
  }

  p {
    text-align: justify;
    color: rgb(204, 204, 204);
  }
`;

const DetailsDropDown = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
  background: linear-gradient(
    90deg,
    rgba(38, 38, 38, 0) 0%,
    rgb(38, 38, 38) 100%
  );
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: 0px -10px 25px rgb(15, 15, 15);
  overflow: hidden;
  position: relative;
  z-index: 1;
  clip-path: inset(-25px 0px 0px 0px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s ease-in-out;

  &.closed {
    padding-top: 0rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 500px;
  overflow: hidden;
  opacity: 1;
  transition: all 0.4s ease-in-out;

  &.closed {
    max-height: 0;
    opacity: 0;
  }
`;

const DetailPair = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  span {
    color: white;
    font-family: myFontBold;
  }

  div > span,
  div {
    color: rgb(204, 204, 204);
    font-family: myFontRegular;
  }

  a {
    color: rgb(204, 204, 204);
    text-decoration: none;
  }
`;

const Opener = styled.div`
  display: flex;
  color: rgb(204, 204, 204);
  transition: all 250ms ease;
  align-items: center;
  gap: 0.25rem;
  justify-content: end;
  cursor: pointer;

  svg {
    width: 20px;
    fill: rgb(204, 204, 204);
    transition: all 250ms ease;
  }

  &:hover {
    color: white;

    svg {
      fill: white;
    }
  }

  svg.open {
    transform: rotate(180deg);
  }
`;

const CartButton = styled.div`
  grid-area: cart-button;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(26, 26, 26, 0) 0%,
    rgb(26, 26, 26) 100%
  );
  border-radius: 12px;
  padding: 0.75rem 1rem;
  height: 55px;
  align-items: center;

  span {
    color: white;
    font-size: 1.125rem;
  }

  button {
    background: linear-gradient(
      90deg,
      rgba(26, 26, 26, 0) 0%,
      rgb(26, 26, 26) 100%
    );
    border: none;
    outline: none;
    color: rgb(153, 153, 153);
    cursor: pointer;
    line-height: 1;
    display: flex;
    align-items: center;
    font-size: 1.375rem;
    font-family: myFontBold;
  }

  button > svg {
    width: 30px;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

function GamePage() {
  // route data
  let params = useParams();
  const { state } = useLocation();

  // states
  const [gameData, setGameData] = useState(null);
  const [screenShotsData, setScreenShotsData] = useState(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // context
  const { cart, setCart, theme, setTheme, wishList, setWishList } =
    useContext(CartContext);

  const fetchGameData = async () => {
    try {
      const fetchedGameData = await getGamesData(
        getAPIURL("Game", "", "", "", params?.gameId),
        null,
        "game"
      );
      const fetchedScreenShotsData = await getGamesData(
        getAPIURL("Screenshots", "", "", "", params?.gameId),
        null,
        "screenshot"
      );

      setGameData(fetchedGameData);

      fetchedScreenShotsData.unshift(fetchedGameData.background_image);
      setScreenShotsData(fetchedScreenShotsData);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Aborted");
        return;
      }
      console.log(err);
      setGameData(null);
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  useEffect(() => {
    fetchGameData();
  }, [params.gameId]);

  const existingItem = (cart) =>
    cart?.find((cartItem) => cartItem.id === gameData?.id);

  function addToCart() {
    const cartGameDetails = {
      id: gameData?.id,
      name: gameData?.name,
      image: gameData?.background_image,
      price: gameData?.price,
    };

    if (!existingItem(cart)) {
      setCart([...cart, cartGameDetails]);
    }
  }

  function updateWishList() {
    console.log(1);

    const wishListGameDetails = {
      id: gameData?.id,
      name: gameData?.name,
      image: gameData?.background_image,
      price: gameData?.price,
      platforms: gameData?.platforms,
    };

    if (!existingItem(wishList)) {
      setWishList([...wishList, wishListGameDetails]);
    } else {
      setWishList(wishList.filter((item) => item.id !== gameData?.id));
    }
  }

  return (
    <StyledGamePage>
      <Header />
      <Body>
        <TopRow>
          <BackButton
            to={"/shop"}
            state={state?.currentPath === "home" && { pageState: "default" }}
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
              </g>
            </svg>
            <span>Legion</span>
          </BackButton>
          <GameName>{gameData?.name}</GameName>
        </TopRow>
        <BottomRow>
          {screenShotsData && (
            <ImageCarousel>
              <SimpleSlider images={screenShotsData} />
              <WishListIcon
                onClick={updateWishList}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                stroke="#ffffff"
                fill={
                  existingItem(wishList)
                    ? theme.currentTheme === "norse"
                      ? "#46afe8"
                      : "#ff5a5a"
                    : "none"
                }
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M51,55.4,32.18,39A1,1,0,0,0,31,39L13,55.34a1,1,0,0,1-1.6-.8V9.41a1,1,0,0,1,1-1H51.56a1,1,0,0,1,1,1V54.58A1,1,0,0,1,51,55.4Z"
                    strokeLinecap="round"
                  ></path>
                </g>
              </WishListIcon>
            </ImageCarousel>
          )}
          <GameDetails>
            <div>
              <Description>
                <span>Description</span>
                <p>
                  {gameData?.description}
                  {gameData?.description &&
                    !gameData?.description.endsWith(".") &&
                    "."}
                </p>
              </Description>
              <DetailsDropDown className={dropDownOpen ? "" : "closed"}>
                <Details className={dropDownOpen ? "" : "closed"}>
                  <DetailPair>
                    <Detail>
                      <span>Platforms</span>
                      <div>
                        {gameData?.platforms.map((platform, index) => (
                          <span key={index}>
                            {platform}
                            {gameData?.platforms.length > 1 &&
                              gameData?.platforms.indexOf(platform) !==
                                gameData?.platforms.length - 1 &&
                              ", "}
                          </span>
                        ))}
                      </div>
                    </Detail>
                    <Detail>
                      <span>Genre</span>
                      <div>
                        {gameData?.genres.map((genre, index) => (
                          <span key={index}>
                            {genre}
                            {gameData?.genres.length > 1 &&
                              gameData?.genres.indexOf(genre) !==
                                gameData?.genres.length - 1 &&
                              ", "}
                          </span>
                        ))}
                      </div>
                    </Detail>
                  </DetailPair>
                  <DetailPair>
                    <Detail>
                      <span>Release date</span>
                      <div>
                        {gameData?.released &&
                          getFormattedDate(gameData?.released)}
                      </div>
                    </Detail>
                    <Detail>
                      <span>Developers</span>
                      <div>
                        {gameData?.developers.map((dev, index) => (
                          <span key={index}>
                            {dev}
                            {gameData?.developers.length > 1 &&
                              gameData?.developers.indexOf(dev) !==
                                gameData?.developers.length - 1 &&
                              ", "}
                          </span>
                        ))}
                      </div>
                    </Detail>
                  </DetailPair>
                  <DetailPair>
                    <Detail>
                      <span>Publishers</span>
                      <div>
                        {gameData?.publishers.map((pub, index) => (
                          <span key={index}>
                            {pub}
                            {gameData?.publishers.length > 1 &&
                              gameData?.publishers.indexOf(pub) !==
                                gameData?.publishers.length - 1 &&
                              ", "}
                          </span>
                        ))}
                      </div>
                    </Detail>
                    <Detail>
                      <span>Age Rating</span>
                      <div>{gameData?.ageRating}</div>
                    </Detail>
                  </DetailPair>
                  <Detail>
                    <span>Website</span>
                    <a href={gameData?.website} target="_blank">
                      {gameData?.website}
                    </a>
                  </Detail>
                </Details>
                <Opener onClick={() => setDropDownOpen(!dropDownOpen)}>
                  More
                  <svg
                    className={dropDownOpen ? "open" : ""}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Opener>
              </DetailsDropDown>
            </div>
          </GameDetails>
          <CartButton>
            <span>${gameData?.price}</span>
            <button
              onClick={addToCart}
              style={{
                color: existingItem(cart)
                  ? theme.currentTheme === "norse"
                    ? "#46afe8"
                    : "#ff5a5a"
                  : "white",
              }}
            >
              {!existingItem(cart) ? (
                "Add to cart +"
              ) : (
                <>
                  Added
                  <svg
                    fill={
                      theme.currentTheme === "norse" ? "#46afe8" : "#ff5a5a"
                    }
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z" />
                    </g>
                  </svg>
                </>
              )}
            </button>
          </CartButton>
        </BottomRow>
      </Body>
    </StyledGamePage>
  );
}

export default GamePage;
