import React from 'react'
import "./numberForm.css"

class NumberForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
    }

    handleChange = (event) => {
      if (event.target.value >= 0 && event.target.value <= 15)
        this.props.parentCallback(event.target.value);
      else
        alert("Value incorrect, integer must be between 0 and 15.");
      event.preventDefault();
    }

    render() {
      return (
        <form>
            <label>
            Number of destination points :
            <input
              type = "number"
              className="Dnumber"
              onChange={this.handleChange}
            />
            </label>
        </form>
      );
    }
  }

export default NumberForm;