import React from 'react';

const GroceryList = (props) => (
  <div className="groceries">
    <ul>
      {props.list.map((grocery) => 
        <div key = {grocery.description}> {grocery.description + ' ' + grocery.quantity}</div>
      )}
    </ul>
  </div>
)

export default GroceryList;