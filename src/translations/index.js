import * as es from "./es";
import * as en from "./en";
import * as pt from "./pt";

// Check if the user language is already stored in localStorage
const storedLang = localStorage.getItem("lang");

// Get the navigator language
const userLanguage = navigator.language || navigator.userLanguage;

// Extract the language code (e.g., "en", "es", "pt") from the userLanguage
const languageCode = userLanguage.split("-")[0];

const fallbackLanguage = "es";

// Determine the language to use
const lang = storedLang || languageCode || fallbackLanguage;

// Save the determined language to localStorage
localStorage.setItem("lang", lang);

export { es, en, pt, lang };
