import { elementTextReplacer } from "./helpers/elementTextReplacer";
import { getElements } from "./helpers/getElements";

const config = [
  { selector: ".banner__title" },

  { selector: ".advantages__art>.advantages__item-text" },
  { selector: ".advantages__styles>.advantages__item-text" },
  { selector: ".advantages__avatars>.advantages__item-text" },

  { selector: ".offers__row--yearly .offers__price", params: {price: "$0.48"} },
  { selector: ".offers__row--yearly .offers__col-price", params: {price: "$39.99"} },
  { selector: ".offers__row--yearly .offers__col-title"},
  { selector: ".offers__row--yearly .offers__label"},

  { selector: ".offers__row--weekly .offers__col-title"},
  { selector: ".offers__row--weekly .offers__price", params: {price: "$6.99"} },
  { selector: ".offers__submit" },

  {selector: ".banner-links__list-item > a"}
];

config.forEach(({selector, params}) => {
  const elements = getElements(selector);

  elementTextReplacer(elements, params);
});
