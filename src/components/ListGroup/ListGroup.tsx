import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  // onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {
  //   let items = ["Newyork", "Chennai", "Texas", "Alaska", "Pennsylvania"];
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              // onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
