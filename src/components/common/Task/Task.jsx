import React from "react";
import Icon from "../Icon/Icon";
import IconGroup from "../IconGroup/IconGroup";
import Space from "../Space/Space";
import PropTypes from "prop-types";
import {
  HeaderStyle,
  ArticleStyle,
  BodyStyle,
  FooterStyle,
  Title,
} from "./task.style";

const Task = ({
  id,
  title,
  description,
  color,
  isComplete,
  marginBotom,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <ArticleStyle $color={color} marginB={marginBotom}>
      <HeaderStyle>
        <Title $color={color}>{title}</Title>
      </HeaderStyle>
      <Space size="md" />
      <BodyStyle>{description}</BodyStyle>
      <Space size="md" />
      <FooterStyle>
        <IconGroup alignItems="flex-end" justifyContent="flex-end">
          <Icon
            className="fas fa-trash-alt"
            size="small"
            color={color}
            handleClick={() => handleDelete(id)}
          />
          <Icon className="far fa-edit" size="small" color={color} />
        </IconGroup>
      </FooterStyle>
    </ArticleStyle>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  marginBotom: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
  isComplete: PropTypes.bool,
};

Task.defaultProps = {
  color: "rgba(0,0,0,.2)",
  isComplete: false,
  marginBotom: false,
};

export default React.memo(Task);
