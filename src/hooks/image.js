import domtoimage from 'dom-to-image';

export const useImageGeneration = (ref, options = {}) => {
  const generateImage = title => {
    domtoimage.toJpeg(ref.current, options).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `${title}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  return [generateImage];
};
