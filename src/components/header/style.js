import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

export const Body = styled.div`
  background-color: #101010;
  width: 100% !important;
  height: 10% !important;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonPrimary = styled(Button)`
  height: 100% !important;
  margin-left: 20px !important;
  margin-right: 10px !important;
  border-radius: 0 !important;
  color: white !important;
  &:hover {
    transition: 0.8s;
    background-color: white !important;
    color: black !important;
  }
`;

export const HamburgeMenu = styled(MenuOutlinedIcon)`
  margin: auto !important;
  cursor: pointer !important;
  height: 90% !important;
`;
