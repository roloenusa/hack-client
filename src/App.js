import Styled from 'styled-components';
import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

const Container = Styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Button = Styled.button`
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  font-size: 20px;
`;

const Text = Styled.p`
  color: blue;
  font-size: 20px;
  margin-left: 20px;
`;

@observer
class App extends React.Component {
  @observable selected = false;

  get isSelected() {
    return this.selected;
  }

  @action select = () => {
    this.selected = true;
  }

  @action deselect = () => {
    this.selected = false;
  }

  render() {
    const result = `<--- ${this.isSelected ? 'selected' : 'not selected'}`;
    return (
      <Container>
        <Button onClick={this.select} onBlur={this.deselect}>
          {'Button'}
        </Button>
        <Text>{result}</Text>
      </Container>
    );
  }
}

export default App;
