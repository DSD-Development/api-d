import { WebComponent } from "https://dsd-development.github.io/api-d/content/WBContent.js";

export class ApiD {
    init(siteName, siteId) {
        console.clear();
        console.log('%c' + siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        var siteIdString = siteId.toString();
        this.startProtection(siteName); 
        this.createAndSetStyle(siteName, siteIdString);
        this.createAndSetHtmlDiv(siteName, siteIdString);
        console.log('%c' + siteName + ' | Inizializzazione Sito Web Completata | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
    }
    startProtection(siteName) {
        document.oncontextmenu = function() {return false;};
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === "s") {event.preventDefault();}
            if (event.ctrlKey && event.shiftKey && event.key === "I") {event.preventDefault();}
            if (event.key === "F12") {event.preventDefault();}
        });
        console.log('%c' + siteName + ' | Protezione Applicata', 'font-family: Poppins; font-size: 15px;');
    }
    createAndSetStyle(siteName, siteId) {
        var Style = WebComponent[siteId].Style;
        var styleElement = document.createElement('style');
        styleElement.style.cssText = Style;
        document.head.appendChild(styleElement);
        console.log('%c' + siteName + ' | Stile Applicato', 'font-family: Poppins; font-size: 15px;');
    }
    createAndSetHtmlDiv(siteName, siteId) {
        var HtmlText = WebComponent[siteId].Html;
        document.body.innerHTML = HtmlText;
        console.log('%c' + siteName + ' | Struttura Applicata', 'font-family: Poppins; font-size: 15px;');
    }
}
