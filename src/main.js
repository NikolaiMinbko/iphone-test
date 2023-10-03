import "./scripts/translationsHandler.js";
import "./scripts/textReplace.js";
import { getElements } from "./scripts/helpers/getElements.js";
import { adaptiveFontSize } from "./scripts/adaptiveFontSize.js";
import {offersSubmitHandler} from "./scripts/offersSubmitHandler.js";

offersSubmitHandler(".offers");

getElements(".banner-links__list").forEach(adaptiveFontSize);
getElements(".offers__label").forEach(adaptiveFontSize);
getElements(".offers__col").forEach((element) => {
    adaptiveFontSize(element, getElements(".offers")[0]);
});
