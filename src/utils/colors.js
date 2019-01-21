import chroma from 'chroma-js';

export const getContrastYIQ = color => {
  const rgb = chroma(color).rgb();
  const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};
