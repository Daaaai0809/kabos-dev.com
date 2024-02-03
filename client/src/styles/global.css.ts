import { globalStyle } from '@vanilla-extract/css';
import { colorVars } from './contract.css';

globalStyle("body", {
    backgroundColor: colorVars.gray[50],
    margin: 0,
    padding: 0,
    color: colorVars.gray[900],
    
    fontFamily:
      '"Noto Sans JP", sans-serif',
    minHeight: "100dvh",
    height: "100%",
});

globalStyle("html", {
  scrollPaddingTop: "50dvh",
  scrollBehavior: "smooth",
});

globalStyle("*", {
  margin: 0,
  fontSmooth: "always",
  WebkitFontSmoothing: "antialiased",
});
