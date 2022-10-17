import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .StateButtons {
    display: none;
  }

  @media (max-width: 600px) {
    .StateButtons.openMenu {
      display: flex;
      position: relative;
      z-index: 10;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #logo {
    max-width: 100%;
    min-width: 130px;
    width: 140px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    position: relative;
    padding: 1.5rem;
    z-index: 10;
    justify-content: space-between;
    flex: 1;
  }
`;

export const ListWrapper = styled.div`
  color: white;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  text-transform: capitalize;
  transition: all 0.5s linear;
  display: flex;

  @media (max-width: 600px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: fixed;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 5;
    flex-direction: column;
    place-content: center;
    align-items: start;
    text-transform: uppercase;
    padding: 0 2rem;
  }
`;

export const StateButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
