import React from 'react';

const GroceryItem = ({grocery, handleItemList}) => (
  <div onClick={() => handleItemList(grocery)}> 
    {grocery.description + ' ' + grocery.quantity}
  </div>
)
// {grocery, handleItemList}
// onClick={() => handleItemList(grocery)
export default GroceryItem;