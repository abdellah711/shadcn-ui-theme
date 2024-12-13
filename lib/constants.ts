import { Color } from "./types";

export const initialColors: Color[] = [
  {
    name: "background",
    variables: [
      {
        name: "background",
        value: "#ffffff", // background: 0 0% 100%
        label: "background",
      },
      {
        name: "foreground",
        value: "#060606", // foreground: 0 0% 3.9%
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
        label: "muted",
      },
      {
        name: "muted-foreground",
        value: "#787878", // muted-foreground: 0 0% 45.1%
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
        label: "card",
      },
      {
        name: "card-foreground",
        value: "#060606", // card-foreground: 0 0% 3.9%
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
        label: "popover",
      },
      {
        name: "popover-foreground",
        value: "#060606", // popover-foreground: 0 0% 3.9%
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
        label: "primary",
      },
      {
        name: "primary-foreground",
        value: "#fafafa", // primary-foreground: 0 0% 98%
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
        label: "secondary",
      },
      {
        name: "secondary-foreground",
        value: "#171717", // secondary-foreground: 0 0% 9%
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
        label: "accent",
      },
      {
        name: "accent-foreground",
        value: "#171717", // accent-foreground: 0 0% 9%
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
        label: "destructive",
      },
      {
        name: "destructive-foreground",
        value: "#fafafa", // destructive-foreground: 0 0% 98%
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
        label: "ring",
      },
    ],
  },
];
