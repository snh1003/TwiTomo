//색은 미정 테마 칼라 정하고 수정, 아무거나해둠
const  size = {
  mobile: "767px",
  desktop: "1281px"
}

const theme = {
  main: {
    base: "#ebecf0",
    bright: "#fff",
    dark: "#c8ccd6",
  },
  Nav: {
    base: "#cf2042",
    bright: "#c46476",
    dark: "#600e1e",
  },
  Platform: {
    mobile: `(max-width: ${size.mobile}`
  }
};

export default theme;
