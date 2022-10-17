import React from "react";
import { ListWrapper } from "./Styled";

function List({ open }) {
  const items = ["About", "careers", "event", "products", "support"];
  return (
    <ListWrapper className="hoverEffect" open={open}>
      {items.map((item) => (
        <div key={item}>
          <a href="/">{item}</a>
          <span></span>
        </div>
      ))}
    </ListWrapper>
  );
}

export default List;
