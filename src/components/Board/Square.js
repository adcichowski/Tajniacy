import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const StyleSquare = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  font-weight: 600;
  background-color: #d26716;
  border: 1px solid black;
`;
const RedSquare = styled(StyleSquare)`
  background-color: #c70000;
`;
const BlueSquare = styled(StyleSquare)`
  background-color: #4d4de0;
`;
const BlackSquare = styled(StyleSquare)`
  background-color: #494848;
`;
export default function Square({ word, red, blue, black }) {
  if (red) {
    return <RedSquare>{word}</RedSquare>;
  }
  if (blue) {
    return <BlueSquare>{word}</BlueSquare>;
  }
  if (black) {
    return <BlackSquare>{word}</BlackSquare>;
  }
  return <StyleSquare>{word}</StyleSquare>;
}
Square.propTypes = {
  word: PropTypes.string.isRequired,
  red: PropTypes.bool.isRequired,
  blue: PropTypes.bool.isRequired,
  black: PropTypes.bool.isRequired,
};
