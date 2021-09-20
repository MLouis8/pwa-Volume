import React from 'react'

class NumberForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
  
    render() {
      return (
        <form>
            <label>
            Number of destination points 
            <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
        </form>
      );
    }
  }

export default NumberForm;