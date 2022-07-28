// 学习自 mui-system colorManipulator
export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'color';
export interface ColorObject {
  type: ColorFormat;
  result: [number, number, number] | [number, number, number, number] | any;
  colorSpace?: 'srgb' | 'display-p3' | 'a98-rgb' | 'prophoto-rgb' | 'rec-2020';
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: number, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }

  return Math.min(Math.max(min, value), max);
}

function intToHex(int: number) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(color: string): string {
  const nextColor = color.slice(1);

  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');

  let colors = nextColor.match(re); // colors => ['n', 'n', 'n']

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
        .join(', ')})`
    : '';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
export function decomposeColor(color: string): ColorObject {
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker) as ColorFormat;

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(
      `Unsupported '${color}' color.\n' +
        'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`,
    );
  }

  let valueSubString = color.substring(marker + 1, color.length - 1);
  let result: any;
  let colorSpace;

  if (type === 'color') {
    result = valueSubString.split(' ');
    colorSpace = result.shift();
    if (result.length === 4 && result[3].charAt(0) === '/') {
      result[3] = result[3].slice(1);
    }
    if (
      typeof colorSpace === 'undefined' ||
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1
    ) {
      throw new Error(
        `unsupported '${colorSpace}' color space.\n' +
          'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`,
      );
    }
  } else {
    result = valueSubString.split(',');
  }
  result = result.map((value: string) => parseFloat(value));

  return { type, result, colorSpace };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
export function colorChannel(color: string): string {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.result
    .slice(0, 3)
    .map((val: number, idx: number) =>
      decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val,
    )
    .join(' ');
}

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: ColorObject): string {
  const { type, colorSpace } = color;
  let { result } = color;

  let convertResult = [];
  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 result to int (i.e. not alpha)
    convertResult = result.map((n: string, i: number) => (i < 3 ? parseInt(n, 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    convertResult[1] = `${result[1]}%`;
    convertResult[2] = `${result[2]}%`;
  }

  let nextResult = '';
  if (type.indexOf('color') !== -1) {
    nextResult = `${colorSpace} ${convertResult.join(' ')}`;
  } else {
    nextResult = `${convertResult.join(', ')}`;
  }

  return `${type}(${nextResult})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
export function rgbToHex(color: string): string {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const { result } = decomposeColor(color);
  return `#${result
    .map((n: number, i: number) => intToHex(i === 3 ? Math.round(255 * n) : n))
    .join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
export function hslToRgb(color: string): string {
  const decomposeColorObj = decomposeColor(color);
  const { result } = decomposeColorObj;
  const h = result[0];
  const s = result[1] / 100;
  const l = result[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type: ColorFormat = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (decomposeColorObj.type === 'hsla') {
    type += 'a';
    if (result[3]) {
      rgb.push(result[3]);
    }
  }

  return recomposeColor({ type, result: rgb } as ColorObject);
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance(color: string): number {
  const decomposeColorObj = decomposeColor(color);

  let rgb =
    decomposeColorObj.type === 'hsl'
      ? decomposeColor(hslToRgb(color)).result
      : decomposeColorObj.result;
  const res = rgb.map((val: any) => {
    if (decomposeColorObj.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * res[0] + 0.7152 * res[1] + 0.0722 * res[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
export function getContrastRatio(foreground: string, background: string): number {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function alpha(color: string, value: number): string {
  let decomposeColorObj = decomposeColor(color);
  value = clamp(value);

  if (decomposeColorObj.type === 'rgb' || decomposeColorObj.type === 'hsl') {
    decomposeColorObj.type += 'a';
  }
  if (decomposeColorObj.type === 'decomposeColorObj') {
    decomposeColorObj.result[3] = `/${value}`;
  } else {
    decomposeColorObj.result[3] = value;
  }

  return recomposeColor(decomposeColorObj);
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function darken(color: string, coefficient: number): string {
  let decomposeColorObj = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (decomposeColorObj.type.indexOf('hsl') !== -1) {
    decomposeColorObj.result[2] *= 1 - coefficient;
  } else if (
    decomposeColorObj.type.indexOf('rgb') !== -1 ||
    decomposeColorObj.type.indexOf('color') !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      decomposeColorObj.result[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(decomposeColorObj);
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function lighten(color: string, coefficient: number): string {
  let decomposeColorObj = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (decomposeColorObj.type.indexOf('hsl') !== -1) {
    decomposeColorObj.result[2] += (100 - decomposeColorObj.result[2]) * coefficient;
  } else if (decomposeColorObj.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      decomposeColorObj.result[i] += (255 - decomposeColorObj.result[i]) * coefficient;
    }
  } else if (decomposeColorObj.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      decomposeColorObj.result[i] += (1 - decomposeColorObj.result[i]) * coefficient;
    }
  }

  return recomposeColor(decomposeColorObj);
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function emphasize(color: string, coefficient = 0.15): string {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
