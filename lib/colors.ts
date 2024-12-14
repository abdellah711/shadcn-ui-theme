export const calculateContrast = (foreground: string, background: string) => {
  const hexToRgb = function (
    hex: string
  ): { r: number; g: number; b: number } | false {
    // Expand shorthand form (e.g. '03F') to full form (e.g. '0033FF')
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : false;
  };

  const luminance = function (rgbColor: {
    r: number;
    g: number;
    b: number;
  }): number {
    const a = [rgbColor.r, rgbColor.g, rgbColor.b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const rgb1 = hexToRgb(foreground);
  const rgb2 = hexToRgb(background);
  if (rgb1 && rgb2) {
    const lum1 = luminance(rgb1);
    const lum2 = luminance(rgb2);
    const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);

    return Math.round(ratio * 100) / 100;
  } else {
    return null;
  }
};

export function hexToHSL(hex: string, valuesOnly = true) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = +("0x" + hex[1] + hex[1]);
    g = +("0x" + hex[2] + hex[2]);
    b = +("0x" + hex[3] + hex[3]);
  } else if (hex.length == 7) {
    r = +("0x" + hex[1] + hex[2]);
    g = +("0x" + hex[3] + hex[4]);
    b = +("0x" + hex[5] + hex[6]);
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  const values = `${h} ${s}% ${l}%`;

  return valuesOnly ? values : `hsl(${values})`;
}

export function hslToHex(hslValues: string) {
  const [hRaw, sRaw, lRaw] = hslValues.trim().split(" ");
  const h = +hRaw;
  const s = +sRaw.replace("%", "") / 100;
  const l = +lRaw.replace("%", "") / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  const hexR = Math.round((r + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexG = Math.round((g + m) * 255)
    .toString(16)
    .padStart(2, "0");
  const hexB = Math.round((b + m) * 255)
    .toString(16)
    .padStart(2, "0");

  return "#" + hexR + hexG + hexB;
}
