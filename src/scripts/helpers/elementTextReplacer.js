import i18n from "../i18n";

// Теряется this внутри t() :(
const t = i18n.t.bind(i18n);

export const elementTextReplacer = (elems, params) => {
  elems.forEach((el) => {
    el.innerHTML = t(el.innerHTML, params);
  });
};
