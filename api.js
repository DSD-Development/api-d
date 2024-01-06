import { WebComponent } from "https://dsd-development.github.io/api-d/content/WBComponent.js";
const ApiDOkey = "ApiDKey-rufp-ebdk-3073";

export class ApiD {
    constructor(apik, siteName, siteId) {
        this.apik = apik;
        this.siteName = siteName;
        this.siteId = siteId.toString();
        this.init();
    }
    init() {
        console.log('%c' + this.siteName + ' | Accesso all\'ApiD In Corso... | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        if (ApiDOkey.toString() == this.apik.toString() || ApiDOkey.toString().includes(this.apik.toString())) {
            console.clear();
            console.log('%c' + this.siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
            this.init(siteName, siteId);
        } else {
            console.clear();
            console.log('%c' + this.siteName + ' | Accesso all\'ApiD non Riuscito | Blocco Sito Web In Corso', 'font-family: Poppins; font-size: 20px; color: red;');
            this.blockWebSite();
        }
    }
    buildWebSite() {
        console.clear();
        console.log('%c' + siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
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
