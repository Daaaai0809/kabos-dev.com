import { globalStyle, style } from '@vanilla-extract/css';
import { colorVars } from '../../../styles/contract.css';
import { vars } from '@/styles/theme.css';

export const indexStyle = {
  main: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto 0 auto",
    lineHeight: "1.5",
  }),
  header: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1440px",
    marginTop: vars.spacing.relative[6],
  }),
}

globalStyle('body', {
    backgroundColor: colorVars.gray[50],
    margin: 0,
    padding: 0,
    color: colorVars.gray[900],
    fontFamily:
      '"sans-serif"',
    minHeight: "100dvh",
    height: "100%",
});

globalStyle('html', {
  scrollPaddingTop: "50dvh",
  scrollBehavior: "smooth",
});

globalStyle('*', {
  margin: 0,
  fontSmooth: "always",
  WebkitFontSmoothing: "antialiased",
});
