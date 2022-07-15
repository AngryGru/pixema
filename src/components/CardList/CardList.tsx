import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./CardList.scss";
import { MovieCardType } from "../../common/types";
import Card from "../Card";

type CardListProps = {
  data: MovieCardType[];
  isTrends?: boolean;
};

const CardList: FC<CardListProps> = ({ data, isTrends }) => {
  const navigate = useNavigate();

  const onCardClick = (id: string) => {
    navigate(`/cards-list/${id}`);
  };

  const listCards = data.map((item: MovieCardType) => {
    return (
      <div key={item.id} onClick={() => onCardClick(item.id.toString())}>
        <Card
          id={item.id}
          key={item.id}
          poster={item.poster}
          name={item.name}
          tagline={item.tagline}
          rating={item.rating}
          isTrends={isTrends}
        />
      </div>
    );
  });
  return <div className="cardListContainer">{listCards}</div>;
};

export default CardList;
