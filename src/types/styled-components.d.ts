import theme from "../assets/styles/theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
