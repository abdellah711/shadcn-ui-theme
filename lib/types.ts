export type ColorValue = {
  name: string;
  value: string;
  darkValue: string;
  label: string;
};

export type Color = {
  name: string;
  variables: ColorValue[];
};

export type ThemeState = {
  colors: Color[];
  radius: number;
};
