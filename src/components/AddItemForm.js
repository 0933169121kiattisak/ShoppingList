import React, { useState } from "react";
import "./AddItemForm.css"
function AddItemForm() {
  const [items, setItems] = useState([]);

  const removeItem = (removeItem) => {
    const newItems = items.filter((item) => {
      return item !== removeItem;
    });
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" name="item" required />
        <button className="btn">Add</button>
      </form>
      <div className="list">
        <ul>
          {items.map((item, index) => (
            <Item removeItem={removeItem} key={item + index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );

  function Item({ item, removeItem }) {
    return (
      <li>
        {item}
        <button className="delete" onClick={() => removeItem(item)}>
          x
        </button>
      </li>
    );
  }
}

export default AddItemForm;
