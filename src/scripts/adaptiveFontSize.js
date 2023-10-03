export const adaptiveFontSize = (elem, parent) => {
    const style = getComputedStyle(elem);
    let currentSize = parseFloat(style.fontSize);

    if (elem.scrollWidth > elem.clientWidth || elem.scrollHeight > elem.clientHeight) {
      while (elem.scrollWidth > elem.clientWidth || elem.scrollHeight > elem.clientHeight) {
        currentSize -= 1;

        const elemToSetFontSize  = parent.nodeType ? parent : elem;

        elemToSetFontSize.style.fontSize = currentSize + "px";
      }
    }
  }