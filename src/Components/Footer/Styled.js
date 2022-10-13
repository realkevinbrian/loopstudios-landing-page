import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.Colors.Black};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 6rem;
  flex-wrap: wrap;
`;
export const FooterAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
export const FooterList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
export const FooterPrivacy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
export const FooterMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

`;
