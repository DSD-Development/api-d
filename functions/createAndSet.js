import { WebComponent } from "https://dsd-development.github.io/api-d/component/WBComponent.js";

export function createAndSetStyle(siteName, siteId) {
    var Style = WebComponent[siteId].Style;
    var styleElement = document.createElement('style');
    styleElement.textContent = Style;
    document.head.appendChild(styleElement);
    console.log('%c' + siteName + ' | Stile Applicato', 'font-family: Poppins; font-size: 12px;');
}

export function createAndSetHtmlDiv(siteName, siteId) {
    var HtmlText = WebComponent[siteId].Html;
    document.body.innerHTML = HtmlText;
    console.log('%c' + siteName + ' | Struttura Applicata', 'font-family: Poppins; font-size: 12px;');
}