import React from "react";
import { ListWrapper } from "./Styled";

function List() {
  const items = ["About", "careers", "event", "products", "support"];
  return (
    <ListWrapper>
      {items.map((item) => (
        <a href="/" key={item}>
          {item}
        </a>
      ))}
    </ListWrapper>
  );
}

export default List;
