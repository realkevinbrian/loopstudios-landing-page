import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const AboutMediaWrapper = styled.div`
  display: flex;
  place-content: flex-end;
  padding: 5rem;

  img {
    max-width: 100%;
    width: 600px;
  }
`;
export const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  position: relative;
`;
export const AboutContentText = styled.div`
  position: relative;
  transform: translateX(-10rem) translateY(2rem);
  padding: 2rem;
  background-color: white;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.Colors.DarkGray};
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.Colors.DarkGray};
  }
`;
