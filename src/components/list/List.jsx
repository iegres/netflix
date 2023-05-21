import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, useEffect, useMemo } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ listTitle }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const distance = useRef();
  const listRef = useRef();

  const listItems = useMemo(() => Array.from({ length: 15 }).map((_, i) => <ListItem key={i} index={i} />), []);

  useEffect(() => distance.current = listRef.current.getBoundingClientRect().x - 50, []);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      distance.current += 230;
      listRef.current.style.transform = `translateX(${distance.current}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      distance.current -= 230;
      listRef.current.style.transform = `translateX(${distance.current}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{listTitle}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {listItems}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
