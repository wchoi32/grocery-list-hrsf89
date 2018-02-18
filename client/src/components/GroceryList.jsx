import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({list, handleItemList}) => (
  <div className="groceries">
    <ul>
      {list.map((grocery) => 
        <GroceryItem 
          key = {grocery.description}
          grocery = {grocery} 
          handleItemList = {handleItemList}
        />
      )}
    </ul>
  </div>
)

export default GroceryList;