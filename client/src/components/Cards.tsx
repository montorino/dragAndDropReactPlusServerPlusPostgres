import { useEffect, useState } from "react";
import { words } from "../words";
import Tooltip from "./Tooltip/Tooltip";

const Cards = () => {
  const [cardList, setCardList] = useState(words);
  const [currentCard, setCurrentCard] = useState(cardList[0]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [infoText, setInfoText] = useState("");

  const dragStartHandler = (e, card) => {
    setCurrentCard(card);
  };
  const dragEndHandler = (e) => {
    e.target.style.background = "transparent";
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "gold";
  };
  const dropHandler = (e, card) => {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );

    e.target.style.background = "transparent";
  };

  const displayTooltip = (e, card) => {
    e.preventDefault();
    setCurrentCard(card);
    setInfoText(card.translation);
    setShowTooltip(true);

    if (card.id === parseInt(e.target.getAttribute("id"))) {
      // console.log(e.target.clientWidth);
      setTimeout(() => {
        const tooltip = document.getElementById(`tooltip-${card.id}`);
        tooltip.style.display = "flex";
        const tooltipWidth = tooltip?.offsetWidth;
        const cardWidth = e.target.offsetWidth;
        tooltip.style.left = `${
          Math.abs(tooltipWidth / 2 - e.target.clientWidth / 2) -
          Math.abs((tooltipWidth - e.target.clientWidth)/3)
        }px`;
      }, 2);
    }
  };

  const hideTooltip = (e, card) => {
    e.preventDefault();
    const tooltip = document.getElementById(`tooltip-${card.id}`);
    tooltip.style.display = "none";
    setShowTooltip(false);
  };

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  cardList.sort(sortCards);

  const wordsArr = cardList.map((word) => word.text);
  const sentence = wordsArr.join(" ");

  return (
    <div className="app">
      {cardList.sort(sortCards).map((card) => (
        <div className="wrapper" key={card.id}>
          <div
            key={card.id}
            className="card"
            id={card.id.toString()}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
            onMouseOver={(e) => displayTooltip(e, card)}
            // onMouseEnter={(e) => displayTooltip(e, card)}
            onMouseLeave={(e) => hideTooltip(e, card)}
          >
            {card.text}
            <span>&nbsp;</span>
          </div>

          {showTooltip && (
            <Tooltip infoText={infoText} id={`tooltip-${card.id}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
