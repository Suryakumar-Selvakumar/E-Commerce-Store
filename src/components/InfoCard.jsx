// libs
import { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { QuickNavButton } from "./QuickNavigation";

// assets
import githubIcon from "../assets/icons/github.svg";
import rawgIcon from "../assets/icons/rawg.png";
import media from "../utils/breakpoints";

const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const Info = styled.div`
  background-color: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(10px);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 600px;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  p {
    font-size: 1.25rem;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    font-family: myFontBold;
  }

  @media ${media.mobile} {
    gap: 0.25rem;
    width: 350px;
    padding: 1rem;

    p {
      font-size: 1rem;
    }

    h1 {
      font-size: 3rem;
      -webkit-text-stroke: 0.25px rgb(75, 75, 75);
    }
  }
`;

const InfoLinks = styled.div`
  width: 600px;
  background-color: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media ${media.mobile} {
    width: 350px;
    padding: 0.5rem 0;
    border-radius: 15px;
    gap: 1rem;
  }
`;

export class InfoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledInfoCard>
        <Info>
          <h1>Game Legion</h1>
          <p>
            It's just a personal project. The games cannot be bought and the
            prices are fake, generated to imitate a real shop.
          </p>
          <p>Have fun 😉</p>
        </Info>
        <InfoLinks>
          <QuickNavButton
            to="https://github.com/Suryakumar-Selvakumar"
            target="_blank"
          >
            <div>
              <img src={githubIcon} alt="github icon" />
              <span>suryakumar-selvakumar</span>
            </div>
          </QuickNavButton>
          <QuickNavButton to="https://rawg.io/apidocs" target="_blank">
            <div>
              <img src={rawgIcon} alt="github icon" />
              <span>RAWG API</span>
            </div>
          </QuickNavButton>
        </InfoLinks>
      </StyledInfoCard>
    );
  }
}

export { StyledInfoCard };
