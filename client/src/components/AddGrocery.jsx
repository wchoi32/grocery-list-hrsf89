import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      quantity: '', 
    }
  }

  onChange(e) {
    // console.log(e.target.name)
    if(e.target.name === 'description') {
      this.setState({
        description: e.target.value
      })
    } else if (e.target.name === 'quantity') {
      this.setState({
        quantity: e.target.value
      })
    }
  }

  add() {
    var obj = {};

    obj.description = this.state.description;
    obj.quantity = this.state.quantity;

    this.props.handleEntryClick(obj);
  }

  render () {
    return (
      <div>
        <div>Description: <input name="description" value = {this.state.description} onChange={this.onChange.bind(this)} /></div> 
        <div>
          Quantity: <input name="quantity" value = {this.state.quantity} onChange={this.onChange.bind(this)}/>
          <button onClick={this.add.bind(this)}> Add Grocery </button>
        </div>        
      </div>
    );
  }
}

export default AddGrocery;

