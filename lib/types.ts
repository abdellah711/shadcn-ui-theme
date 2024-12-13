export type Color = {
  name: string;
  variables: {
    name: string;
    value: string;
    label: string;
  }[];
};

export type ThemeState = {
  colors: Color[];
};
