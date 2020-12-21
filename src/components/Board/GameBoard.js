import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Square from './Square';
import RandomWordsBoard, { dontReapeatNumber } from './functions';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(5, 120px);
`;
const sequenceTeamBoard = dontReapeatNumber(25, 25);
export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: RandomWordsBoard(),
      red: sequenceTeamBoard.slice(0, 8),
      blue: sequenceTeamBoard.slice(8, 17),
      black: sequenceTeamBoard.slice(19, 20),
    };
  }

  render() {
    const { words, red, blue, black } = this.state;
    return (
      <Board>
        {words.map((word, b) => (
          <Square
            key={word.id}
            red={red.includes(b)}
            blue={blue.includes(b)}
            black={black.includes(b)}
            word={word.text.toLocaleUpperCase()}
          />
        ))}
      </Board>
    );
  }
}
