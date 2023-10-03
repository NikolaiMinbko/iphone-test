import { I18n } from "i18n-js";
import en from "../translations/en.json";
import de from "../translations/de.json";
import es from "../translations/es.json";
import fr from "../translations/fr.json";
import ja from "../translations/ja.json";
import pt from "../translations/pt.json";

const i18n = new I18n();

i18n.defaultLocale = "en";
i18n.enableFallback = true;
i18n.locale = "en";

const translates = {en, de, es, fr, ja, pt};

export const loadTranslations = async (locale) => {
  i18n.locale = locale;
  i18n.translations[locale] = translates[locale];
};

export default i18n;