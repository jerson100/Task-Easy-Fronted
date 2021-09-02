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
import {
  variantsDescription,
  variantsFooter,
  variantsTask,
  variantsTitle,
} from "./taks.variants";
import TaskDeleteAction from "./components/TaskDeleteAction";

const Task = ({
  id,
  title,
  description,
  color,
  isComplete,
  marginBotom,
  handleDelete,
  handleUpdate,
  isPreview,
}) => {
  return (
    <ArticleStyle
      $color={color}
      marginB={marginBotom}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variantsTask}
    >
      <HeaderStyle>
        <Title variants={variantsTitle} $color={color}>
          {title}
        </Title>
      </HeaderStyle>
      <Space size="md" />
      <BodyStyle variants={variantsDescription}>{description}</BodyStyle>
      <Space size="md" />
      <FooterStyle variants={variantsFooter}>
        <IconGroup alignItems="flex-end" justifyContent="flex-end">
          <Icon
            className="fas fa-trash-alt"
            size="small"
            color={color}
            handleClick={() => !isPreview && handleDelete(id)}
          />
          <TaskDeleteAction
            title={title}
            description={description}
            color={color}
            handleUpdate={handleUpdate}
            id={id}
            isPreview={isPreview}
          />
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
  isPreview: PropTypes.bool,
};

Task.defaultProps = {
  color: "rgba(0,0,0,.2)",
  isComplete: false,
  marginBotom: false,
  isPreview: false,
};

export default React.memo(Task);
