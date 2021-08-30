import React from "react";
import { IconGroupStyle, IconItemStyle } from "./iconGroup.style";

const IconGroup = ({
  children: childrenProps,
  alignItems,
  justifyContent,
  column,
  inline,
  style,
}) => {
  const children = React.Children.map(childrenProps, (child) => (
    <IconItemStyle>{child}</IconItemStyle>
  ));
  return (
    <IconGroupStyle
      style={style}
      alignItems={alignItems}
      justifyContent={justifyContent}
      column={column}
      inline={inline}
    >
      {children}
    </IconGroupStyle>
  );
};

IconGroup.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "flex-start",
  column: false,
  inline: false,
};

export default IconGroup;
