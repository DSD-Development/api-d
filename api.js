import { WebComponent } from "https://dsd-development.github.io/api-d/content/WBContent.js";

export class ApiD {
    constructor(apik, siteName, siteId) {
        this.apik = apik;
        this.siteName = siteName;
        this.siteId = siteId;
        this.init();
    }
    async init() {
        console.log('%c' + siteName + ' | Accesso all\'ApiD In Corso... | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        try {
            const url = 'https://apidkey.000webhostapp.com/key.txt';   
            const response = await fetch(url);
            const ApiDOkey = await response.text();
            if (ApiDOkey.toString() == apik.toString() || ApiDOkey.toString().includes(apik.toString())) {
                console.clear();
                console.log('%c' + siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
                this.init(siteName, siteId);
            } else {
                console.clear();
                console.log('%c' + siteName + ' | Accesso all\'ApiD non Riuscito | Blocco Sito Web In Corso', 'font-family: Poppins; font-size: 20px; color: red;');
                this.blockWebSite(siteName, siteId);
            }
        } catch {
            console.log("errore");
        }
    }
    buildWebSite(siteName, siteId) {
        console.clear();
        console.log('%c' + siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        var siteIdString = siteId.toString();
        this.startProtection(siteName); 
        this.createAndSetStyle(siteName, siteIdString);
        this.createAndSetHtmlDiv(siteName, siteIdString);
        console.log('%c' + siteName + ' | Inizializzazione Sito Web Completata | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
    }
    blockWebSite(siteName, siteId) {
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
    startProtection(siteName) {
        document.oncontextmenu = function() {return false;};
        window.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === "s") {event.preventDefault();}
            if (event.ctrlKey && event.shiftKey && event.key === "I") {event.preventDefault();}
            if (event.key === "F12") {event.preventDefault();}
        });
        console.log('%c' + siteName + ' | Protezione Applicata', 'font-family: Poppins; font-size: 12px;');
    }
    createAndSetStyle(siteName, siteId) {
        var Style = WebComponent[siteId].Style;
        var styleElement = document.createElement('style');
        styleElement.textContent = Style;
        document.head.appendChild(styleElement);
        console.log('%c' + siteName + ' | Stile Applicato', 'font-family: Poppins; font-size: 12px;');
    }
    createAndSetHtmlDiv(siteName, siteId) {
        var HtmlText = WebComponent[siteId].Html;
        document.body.innerHTML = HtmlText;
        console.log('%c' + siteName + ' | Struttura Applicata', 'font-family: Poppins; font-size: 12px;');
    }
}
