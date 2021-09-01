const colors = {
  primary: "#007bff",
  second: "#6c757d",
  succes: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  link: "#007bff",
  purple: "#524df0",
};

const breakpoints = {
  sm: 576, // Small devices (landscape phones, 576px and up)
  md: 768, // Medium devices (tablets, 768px and up)
  lg: 992, // Large devices (desktops, 992px and up)
  xl: 1200, // Extra large devices (large desktops, 1200px and up)
};

const breakpointContainer = (breakpoint) => `
    @media screen and (min-width: ${breakpoint}px) {
        max-width: ${breakpoint - 10}px;
    }
`;

export { colors, breakpoints, breakpointContainer };
