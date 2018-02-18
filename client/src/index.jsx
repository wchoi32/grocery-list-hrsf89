import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.fetch();
  }

  handleEntryClick (item) {
    console.log(item)
    $.ajax({
      url: '/list',
      method: 'POST',
      contentType: 'application/json', 
      data: JSON.stringify(item),
      success: (data) => {
        console.log('sent');
        this.fetch();
      },
      error: function(err) {
        console.log('Failed to Send', err)
      }
    });
  }

  fetch() {
    $.ajax({
      url: '/list',
      method: 'GET',
      contentType: 'application/json',
      success: (received) => {
        console.log('fetching')
        var receivedData = JSON.parse(received);
        console.log(receivedData)
        //received = JSON.parse(data);
        this.setState({
          list: receivedData
        })
      },
      error: function(err) {
        console.log('Failed to Send', err)
      }
    });
  }
  
  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <div>
          <AddGrocery handleEntryClick = {this.handleEntryClick.bind(this)} />
        </div>
        <div>
          <GroceryList list = {this.state.list} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));