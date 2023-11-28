import styled from "styled-components";

const StyledButton = styled.button`
  /* background-color: #2fc040; */
  background-color: ${(props) => {
    console.log(props);

    return props.bgColor || "#2fc040";
  }};
  /* color: white;
   */

  color: ${(props) => props.color};
  border-radius: 10px;
  padding: 12px 20px;
  outline: none;
  border: none;
  transition: 0.3s;
  &:hover {
    color: yellow;
  }
`;

export default StyledButton;
