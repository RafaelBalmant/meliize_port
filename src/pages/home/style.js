import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
  }
`;
