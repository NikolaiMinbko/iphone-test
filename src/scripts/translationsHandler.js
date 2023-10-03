import { loadTranslations } from "./i18n";

const availableTranslations = ["de", "en", "es", "fr", "ja", "pt"],
  OSLanguage = Intl.DateTimeFormat().resolvedOptions().locale,
  searchParams = new URLSearchParams(location.search),
  searchParamsLanguage = searchParams.get("lang"),
  defaultLanguage = availableTranslations.includes(OSLanguage)
    ? OSLanguage
    : "en";

loadTranslations(availableTranslations.includes(searchParamsLanguage) ? searchParamsLanguage : defaultLanguage);
