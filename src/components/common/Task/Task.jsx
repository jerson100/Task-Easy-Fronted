import React from "react";
import Icon from "../Icon/Icon";
import IconGroup from "../IconGroup/IconGroup";
import Space from "../Space/Space";
import {
  HeaderStyle,
  ArticleStyle,
  BodyStyle,
  FooterStyle,
  Title,
} from "./task.style";

const Task = ({ title, description, color, isComplete, marginBotom }) => {
  return (
    <ArticleStyle gColor={color} marginB={marginBotom}>
      <HeaderStyle>
        <Title gColor={color}>{title}</Title>
      </HeaderStyle>
      <Space size="md" />
      <BodyStyle>{description}</BodyStyle>
      <Space size="md" />
      <FooterStyle>
        <IconGroup alignItems="flex-end" justifyContent="flex-end">
          <Icon className="fas fa-trash-alt" size="small" color={color} />
          <Icon className="far fa-edit" size="small" color={color} />
        </IconGroup>
      </FooterStyle>
    </ArticleStyle>
  );
};

export default Task;
