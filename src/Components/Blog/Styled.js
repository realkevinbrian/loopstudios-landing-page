import styled from "styled-components";

export const BlogWrapper = styled.section`
  padding: 1rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const BlogHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    border: 1px solid ${({ theme }) => theme.Colors.Black};
    padding: 0.3rem 2rem;
  }

  h2 {
    text-transform: uppercase;
  }
`;
export const BlogBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

//Card
export const CardWrapper = styled.div`
  max-height: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    max-width: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: end;
  place-items: center;

  > * {
    padding: 10px;
    color: white;
    text-transform: uppercase;
  }
`;
