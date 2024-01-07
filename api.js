import { WebComponent } from "https://dsd-development.github.io/api-d/component/WBComponent.js";
import { ApiDOkey } from "https://dsd-development.github.io/api-d/ApiDOkey.js";

export class ApiD {
    constructor(apik) {
        this.apik = apik;
        this.init();
    }
    init() {
        console.log('%c' + 'Accesso all\'ApiD In Corso... | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        let foundSiteId = null;
        let foundSiteName = null;
        for (let i = 0; i < ApiDOkey.length; i++) {
            if (ApiDOkey[i].key === this.apik.toString()) {
                foundSiteId = ApiDOkey[i].siteId;
                foundSiteName = ApiDOkey[i].siteName;
                this.siteName = foundSiteName;
                this.siteId = foundSiteId;
                console.clear();
                console.log('%c' + this.siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
                this.buildWebSite();
                break;
            } else {
                this.siteName = "Sito Web Indefinito";
                console.clear();
                console.log('%c' + this.siteName + ' | Accesso all\'ApiD non Riuscito | Blocco Sito Web In Corso', 'font-family: Poppins; font-size: 20px; color: red;');
                this.blockWebSite();
            }
        }
    }
    buildWebSite() {
        console.clear();
        console.log('%c' + this.siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        this.startProtection(); 
        this.createAndSetStyle();
        this.createAndSetHtmlDiv();
        console.log('%c' + this.siteName + ' | Inizializzazione Sito Web Completata | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
    }
    blockWebSite() {
        const blockWBComponent = {
            Style: `

            `,
            Html: `
            
            `
        }
        var styleElement = document.createElement('style');
        styleElement.textContent = blockWBComponent.Style;
        document.head.appendChild(styleElement);
        document.body.innerHTML = blockWBComponent.Html;
    }
    startProtection() {
        document.oncontextmenu = function() {return false;};
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === "s") {event.preventDefault();}
            if (event.ctrlKey && event.shiftKey && event.key === "I") {event.preventDefault();}
            if (event.key === "F12") {event.preventDefault();}
        });
        console.log('%c' + this.siteName + ' | Protezione Applicata', 'font-family: Poppins; font-size: 12px;');
    }
    createAndSetStyle() {
        var Style = WebComponent[this.siteId].Style;
        var styleElement = document.createElement('style');
        styleElement.textContent = Style;
        document.head.appendChild(styleElement);
        console.log('%c' + this.siteName + ' | Stile Applicato', 'font-family: Poppins; font-size: 12px;');
    }
    createAndSetHtmlDiv() {
        var HtmlText = WebComponent[this.siteId].Html;
        document.body.innerHTML = HtmlText;
        console.log('%c' + this.siteName + ' | Struttura Applicata', 'font-family: Poppins; font-size: 12px;');
    }
}
