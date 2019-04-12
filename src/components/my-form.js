import React from 'react'

const badStyle = {
    display: "none"
  };

const goodStyle = {
    display: "block"
}

export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.isNumber = this.isNumber.bind(this);
  }


  handleChange(evt) {
      //valeur à l'instant t
    this.setState({name: evt.target.value});
    this.isNumber(evt.target.value);
  }

  handleSubmit(evt) {
    console.log(`Votre nom est ${this.state.name}`);
    evt.preventDefault();
  }

  handleReset(){
    this.setState({name: ''});

  }


  isNumber(value){
      var regex=/^[0-9]+$/;
     return regex.test(value)
  }
// X ? X : est une condition ternaire
  render() {
    const badValue = this.isNumber(this.state.name)
    console.log(badValue);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input style={ badValue ? badStyle : null} id="submitBtn" type="submit" value="Soumettre" />
        <p id="errorMsg" style={ badValue ? goodStyle : badStyle}>Vous devez rentrer un nom !</p>
        <button type="reset" value="reset" onClick={this.handleReset}>Reset</button>
      </form>
    );
  }
}