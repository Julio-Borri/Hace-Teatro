import styled from 'styled-components';

const ResponsiveTitle = styled.h1`
  font-size: 50px;
  font-weight: 700;
  font-family: 'Caveat', cursive;
  text-transform: capitalize;
  color: ${props => props.inputColor || "rgb(225, 111, 34)"};
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`

export default ResponsiveTitle;

