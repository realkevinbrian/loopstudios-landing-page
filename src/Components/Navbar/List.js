import React from "react";
import { ListWrapper } from "./Styled";

function List() {
  const items = ["About", "careers", "event", "products", "support"];
  return (
    <ListWrapper className="hoverEffect">
      {items.map((item) => (
        <div>
          <a href="/" key={item}>
            {item}
          </a>
          <span></span>
        </div>
      ))}
    </ListWrapper>
  );
}

export default List;
