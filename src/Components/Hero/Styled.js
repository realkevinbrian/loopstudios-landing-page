import styled from "styled-components";
import bg from "../../Assets/images/desktop/image-hero.jpg";
import Mobilebg from "../../Assets/images/mobile/image-hero.jpg";

export const HeroWrapper = styled.main`
  height: 80vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;

  @media (max-width: 600px) {
    padding: 0;
    height: 90vh;
    background-image: url(${Mobilebg});
  }
`;

export const HeroContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: flex-start;
`;
export const HeroContentText = styled.div`
  margin: 2rem;
  padding: 2rem;
  max-width: 350px;
  text-transform: uppercase;
  color: white;
  font-size: 1.5rem;
  border: 1px solid white;
`;
