import React from 'react';
import './App.css';
import Keyboard from 'react-simple-keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display1: '',
      display2: '',
      display3: '',
      focusedFieldName: '',
      initialValueOfFocusedField: null,
      layout: {
        default: ['{bksp}', '7 8 9', '4 5 6', '1 2 3', '0  .'],
      },
    };
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handlePhysicalKeyboardPress);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePhysicalKeyboardPress);
  };

  designateInputField = event => {
    if (this.state.initialValueOfFocusedField !== null) {
      this.resetValueOfFocusedField();
    }
    this.setFocusedFieldStates(event);
  };

  setFocusedFieldStates(event) {
    this.setState({
      focusedFieldName: event.target.name,
      initialValueOfFocusedField: event.target.value
    }, function () {
      console.log('focusedFieldName: ' + this.state.focusedFieldName);
      console.log('initialValueOfFocusedField: ' + this.state.initialValueOfFocusedField);
    });
  };

  handleOnScreenKeyboardPress = (theKey, keyCode) => {
    theKey = (keyCode === 110) ? '.' : theKey;
    keyCode = (keyCode === undefined) ? '' : keyCode;
    console.log('key pressed: ' + theKey + ', entered in: ' + this.state.focusedFieldName);
    if (theKey === '.' && this.state[this.state.focusedFieldName].includes('.')) { return };
    if (theKey === '{bksp}' || keyCode === 8) { // 8 === 'Backspace', 110 === '.'
      this.setState({
        [this.state.focusedFieldName]: this.state[this.state.focusedFieldName].substring(0, this.state[this.state.focusedFieldName].length - 1)
      });
    } else {
      this.setState({
        [this.state.focusedFieldName]: this.state[this.state.focusedFieldName] + theKey
      });
    }
  };

  handlePhysicalKeyboardPress = (key) => {
    let theKey = String.fromCharCode(key.which);
    let keyCode = key.keyCode;
    console.log(keyCode);
    if ('0123456789.'.includes(theKey) || keyCode === 8 || keyCode === 110) { // 8 === 'Backspace', 110 === '.'
      this.handleOnScreenKeyboardPress(theKey, keyCode);
      console.log('Number typed: ' + theKey);
    };
  };

  saveValueOfFocusedField = () => {
    console.log('saveValueOfFocusedField')
    this.setState({
      focusedFieldName: '',
      initialValueOfFocusedField: null
    }, function () {
      console.log('focusedFieldName: ' + this.state.focusedFieldName);
      console.log('initialValueOfFocusedField: ' + this.state.initialValueOfFocusedField);
    });
  };

  resetValueOfFocusedField = () => {
    console.log('resetValueOfFocusedField');
    this.setState({
      [this.state.focusedFieldName]: this.state.initialValueOfFocusedField,
      focusedFieldName: '',
      initialValueOfFocusedField: null
    });
  };

  render() {
    return (
      <>
        keypad test<br /><br />
        <input type='text' name='display1' value={this.state.display1} readOnly onClick={this.designateInputField} /><br />
        <input type='text' name='display2' value={this.state.display2} readOnly onClick={this.designateInputField} /><br />
        <input type='text' name='display3' value={this.state.display3} readOnly onClick={this.designateInputField} /><br />
        <button onClick={this.saveValueOfFocusedField}>Save</button> <button onClick={this.resetValueOfFocusedField}>Cancel</button><br />
        <br />
        <Keyboard
          layout={this.state.layout}
          onKeyPress={key =>
            this.handleOnScreenKeyboardPress(key)}
        />
      </>
    );
  };
};

export default App;
