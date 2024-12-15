import { Color } from "./types";
export const initialColors: Color[] = [
  {
    name: "background",
    variables: [
      {
        name: "background",
        value: "#ffffff", // background: 0 0% 100%
        darkValue: "#060606", // background in dark mode: 0 0% 3.9%
        label: "background",
      },
      {
        name: "foreground",
        value: "#060606", // foreground: 0 0% 3.9%
        darkValue: "#fafafa", // foreground in dark mode: 0 0% 98%
        label: "foreground",
      },
    ],
  },
  {
    name: "muted",
    variables: [
      {
        name: "muted",
        value: "#f4f4f4", // muted: 0 0% 96.1%
        darkValue: "#171717", // muted in dark mode: 0 0% 14.9%
        label: "muted",
      },
      {
        name: "muted-foreground",
        value: "#787878", // muted-foreground: 0 0% 45.1%
        darkValue: "#9e9e9e", // muted-foreground in dark mode: 0 0% 63.9%
        label: "muted foreground",
      },
    ],
  },
  {
    name: "card",
    variables: [
      {
        name: "card",
        value: "#ffffff", // card: 0 0% 100%
        darkValue: "#060606", // card in dark mode: 0 0% 3.9%
        label: "card",
      },
      {
        name: "card-foreground",
        value: "#060606", // card-foreground: 0 0% 3.9%
        darkValue: "#fafafa", // card-foreground in dark mode: 0 0% 98%
        label: "card foreground",
      },
    ],
  },
  {
    name: "popover",
    variables: [
      {
        name: "popover",
        value: "#ffffff", // popover: 0 0% 100%
        darkValue: "#060606", // popover in dark mode: 0 0% 3.9%
        label: "popover",
      },
      {
        name: "popover-foreground",
        value: "#060606", // popover-foreground: 0 0% 3.9%
        darkValue: "#fafafa", // popover-foreground in dark mode: 0 0% 98%
        label: "popover foreground",
      },
    ],
  },
  {
    name: "primary",
    variables: [
      {
        name: "primary",
        value: "#171717", // primary: 0 0% 9%
        darkValue: "#fafafa", // primary in dark mode: 0 0% 98%
        label: "primary",
      },
      {
        name: "primary-foreground",
        value: "#fafafa", // primary-foreground: 0 0% 98%
        darkValue: "#171717", // primary-foreground in dark mode: 0 0% 9%
        label: "primary foreground",
      },
    ],
  },
  {
    name: "secondary",
    variables: [
      {
        name: "secondary",
        value: "#f4f4f4", // secondary: 0 0% 96.1%
        darkValue: "#171717", // secondary in dark mode: 0 0% 14.9%
        label: "secondary",
      },
      {
        name: "secondary-foreground",
        value: "#171717", // secondary-foreground: 0 0% 9%
        darkValue: "#fafafa", // secondary-foreground in dark mode: 0 0% 98%
        label: "secondary foreground",
      },
    ],
  },
  {
    name: "accent",
    variables: [
      {
        name: "accent",
        value: "#f4f4f4", // accent: 0 0% 96.1%
        darkValue: "#171717", // accent in dark mode: 0 0% 14.9%
        label: "accent",
      },
      {
        name: "accent-foreground",
        value: "#171717", // accent-foreground: 0 0% 9%
        darkValue: "#fafafa", // accent-foreground in dark mode: 0 0% 98%
        label: "accent foreground",
      },
    ],
  },
  {
    name: "destructive",
    variables: [
      {
        name: "destructive",
        value: "#e40000", // destructive: 0 84.2% 60.2%
        darkValue: "#d82d2d", // destructive in dark mode: 0 62.8% 30.6%
        label: "destructive",
      },
      {
        name: "destructive-foreground",
        value: "#fafafa", // destructive-foreground: 0 0% 98%
        darkValue: "#171717", // destructive-foreground in dark mode: 0 0% 9%
        label: "destructive foreground",
      },
    ],
  },
  {
    name: "input",
    variables: [
      {
        name: "input",
        value: "#e0e0e0", // input: 0 0% 89.8%
        darkValue: "#171717", // input in dark mode: 0 0% 14.9%
        label: "input",
      },
    ],
  },
  {
    name: "border",
    variables: [
      {
        name: "border",
        value: "#e0e0e0", // border: 0 0% 89.8%
        darkValue: "#171717", // border in dark mode: 0 0% 14.9%
        label: "border",
      },
    ],
  },
  {
    name: "ring",
    variables: [
      {
        name: "ring",
        value: "#060606", // ring: 0 0% 3.9%
        darkValue: "#ffffff", // ring in dark mode: 0 0% 83.1%
        label: "ring",
      },
    ],
  },
  {
    name: "sidebar-background",
    variables: [
      {
        name: "sidebar-background",
        value: "#f1f1f1", // sidebar-background: hsl(0, 0%, 98%)
        darkValue: "#3d3d56", // sidebar-background in dark mode: hsl(240, 5.3%, 26.1%)
        label: "sidebar background",
      },
      {
        name: "sidebar-foreground",
        value: "#3d3d56", // sidebar-foreground: hsl(240, 5.3%, 26.1%)
        darkValue: "#f1f1f1", // sidebar-foreground in dark mode: hsl(0, 0%, 98%)
        label: "sidebar foreground",
      },
    ],
  },
  {
    name: "sidebar-primary",
    variables: [
      {
        name: "sidebar-primary",
        value: "#2c2c3d", // sidebar-primary: hsl(240, 5.9%, 10%)
        darkValue: "#f1f1f1", // sidebar-primary in dark mode: hsl(0, 0%, 98%)
        label: "sidebar primary",
      },
      {
        name: "sidebar-primary-foreground",
        value: "#f1f1f1", // sidebar-primary-foreground: hsl(0, 0%, 98%)
        darkValue: "#2c2c3d", // sidebar-primary-foreground in dark mode: hsl(240, 5.9%, 10%)
        label: "sidebar primary foreground",
      },
    ],
  },
  {
    name: "sidebar-accent",
    variables: [
      {
        name: "sidebar-accent",
        value: "#e1e1f1", // sidebar-accent: hsl(240, 4.8%, 95.9%)
        darkValue: "#2c2c3d", // sidebar-accent in dark mode: hsl(240, 5.9%, 10%)
        label: "sidebar accent",
      },
      {
        name: "sidebar-accent-foreground",
        value: "#2c2c3d", // sidebar-accent-foreground: hsl(240, 5.9%, 10%)
        darkValue: "#f1f1f1", // sidebar-accent-foreground in dark mode: hsl(0, 0%, 98%)
        label: "sidebar accent foreground",
      },
    ],
  },
  {
    name: "sidebar-border",
    variables: [
      {
        name: "sidebar-border",
        value: "#d1d1d8", // sidebar-border: hsl(220, 13%, 91%)
        darkValue: "#d1d1d8", // sidebar-border in dark mode: hsl(220, 13%, 91%)
        label: "sidebar border",
      },
    ],
  },
  {
    name: "sidebar-ring",
    variables: [
      {
        name: "sidebar-ring",
        value: "#a4d0e1", // sidebar-ring: hsl(217.2, 91.2%, 59.8%)
        darkValue: "#a4d0e1", // sidebar-ring in dark mode: hsl(217.2, 91.2%, 59.8%)
        label: "sidebar ring",
      },
    ],
  },
];

export const COLORS_VARIABLES = [
  "background",
  "foreground",
  "muted",
  "muted-foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "input",
  "border",
  "ring",
  "sidebar-background",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
];
