import { startProtection } from "https://dsd-development.github.io/api-d/functions/startProtection.js";
import { createAndSetHtmlDiv, createAndSetStyle } from "https://dsd-development.github.io/api-d/functions/createAndSet.js";

export function buildWebSite(siteName, siteId) {
    console.clear();
    console.log('%c' + siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
    startProtection(siteName); 
    createAndSetStyle(siteName, siteId);
    createAndSetHtmlDiv(siteName, siteId);
    console.log('%c' + siteName + ' | Inizializzazione Sito Web Completata | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
}