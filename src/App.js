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
    document.addEventListener('click', this.handleClickOutsideInputField);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePhysicalKeyboardPress);
  };

  handleClickOutsideInputField = (event) => {
    if (event.target.name === undefined) { this.resetValueOfFocusedField() };
  }

  designateInputField = event => {
    if (this.state.initialValueOfFocusedField !== null) {
      this.resetValueOfFocusedField();
    }
    this.setFocusedFieldStates(event);
    this.setVisibilityOfOnScreenKeyboard(true)
  };

  setVisibilityOfOnScreenKeyboard(visible) {
    this.refs.keyboard.style.visibility = (visible ? 'visible' : 'hidden');
  }

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
    theKey = (keyCode === 110 || keyCode === 190) ? '.' : theKey;
    keyCode = (keyCode === undefined) ? '' : keyCode;
    console.log('key pressed: ' + theKey + ', entered in: ' + this.state.focusedFieldName);
    try {
      if (theKey === '.' && this.state[this.state.focusedFieldName].includes('.')) { return };
    } catch (err) {
      console.log('error detecting second decimal point: ' + err)
    }
    try {
      if (theKey === '.' && this.state[this.state.focusedFieldName].length === 0) { return };
    } catch (err) {
      console.log('error detecting second decimal point: ' + err)
    }
    if (theKey === '{bksp}' || keyCode === 8) { // 8 === 'Backspace', 110 === '.' (on numeric keyboard), 190 === '.' (on alpha keyboard)
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
    if ('0123456789.'.includes(theKey) || keyCode === 8 || keyCode === 110 || keyCode === 190) { // 8 === 'Backspace', 110 === '.' (on numeric keyboard), 190 === '.' (on alpha keyboard)
      this.handleOnScreenKeyboardPress(theKey, keyCode);
      console.log('Number typed: ' + theKey);
    };
  };

  saveValueOfFocusedField = () => {
    console.log('saveValueOfFocusedField');
    this.setVisibilityOfOnScreenKeyboard(false);
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
    this.setVisibilityOfOnScreenKeyboard(false);
    this.setState({
      [this.state.focusedFieldName]: this.state.initialValueOfFocusedField,
      focusedFieldName: '',
      initialValueOfFocusedField: null
    });
  };

  render() {
    return (
      <>
        <h3>keypad test</h3>
        <h4>click in an input field to display on-screen keyboard</h4>
        * user can click in any field and then use any combination of on-screen keypad or physical keyboard/keypad.<br />
        * changes can be saved or cancelled using the appropriate button<br />
        * changes are reverted if user clicks anywhere outside the current input field or the on-screen keypad<br />
        * changes are reverted for the initial input field if a new input field becomes the focus without saving<br />
        * error handling disallows a decimal point without an initial digit<br />
        * error handling disallows a second decimal point if there is already one in the field<br /><br /><br />
        <label>Sample Field 1</label> <input type='text' name='display1' value={this.state.display1} readOnly onClick={this.designateInputField} /><br />
        <label>Sample Field 2</label> <input type='text' name='display2' value={this.state.display2} readOnly onClick={this.designateInputField} /><br />
        <label>Sample Field 3</label> <input type='text' name='display3' value={this.state.display3} readOnly onClick={this.designateInputField} /><br />
        <br />
        <div className='keyboard' ref='keyboard'>
          <button onClick={this.saveValueOfFocusedField}>Save</button> <button onClick={this.resetValueOfFocusedField}>Cancel</button><br />
          <Keyboard
            layout={this.state.layout}
            onKeyPress={key =>
              this.handleOnScreenKeyboardPress(key)}
          />
        </div>
      </>
    );
  };
};

export default App;
