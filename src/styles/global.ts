import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backGroundColor: "$gray900",
    color: "$gray900",
    "-webkir-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
