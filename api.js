import { WebComponent } from "https://dsd-development.github.io/api-d/component/WBComponent.js";
import { ApiDOkey } from "https://dsd-development.github.io/api-d/ApiDOkey.js";

export class ApiD {
    constructor(apik) {
        this.apik = apik;
        this.init();
    }
    init() {
        console.log('%c' + this.siteName + ' | Accesso all\'ApiD In Corso... | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        let foundSiteId = null;
        let foundSiteName = null;
        for (let i = 0; i < ApiDOkey.length; i++) {
            this.getWebSiteIsAuthorized = ApiDOkey[i].key === this.apik.toString();
            if (ApiDOkey[i].key === this.apik.toString()) {
                foundSiteId = ApiDOkey[i].siteId;
                foundSiteName = ApiDOkey[i].siteName;
                this.siteName = foundSiteName;
                this.siteId = foundSiteId;  
                this.getWebSiteIsBlocked = ApiDOkey[i].blockWb;
                if (ApiDOkey[i].blockWb) {
                    console.clear();
                    console.log('%c' + this.siteName + ' | Sito Momentaneamente Bloccato da ApiD', 'font-family: Poppins; font-size: 20px; color: red;');
                    this.blockWebSite();
                    break;
                } else {
                    console.clear();
                    console.log('%c' + this.siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
                    this.buildWebSite();
                    break;
                }
            } else {
                this.siteName = "Sito Web Indefinito";
                console.clear();
                console.log(this.getWebSiteIsAuthorized, ApiDOkey[i].key, ApiDOkey[i], ApiDOkey, this.apik.toString());
                console.log('%c' + this.siteName + ' | Accesso all\'ApiD non Riuscito | Blocco Sito Web In Corso', 'font-family: Poppins; font-size: 20px; color: red;');
                this.accessDeniedWebSite();
                break;
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
                @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
                
                body {
                    background-color: black;
                }
                
                .bi-emoji-angry {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    color: red;
                    font-size: 230px;
                }
                
                .title, .description {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    font-family: 'Poppins', sans-serif;
                    width: 90%; 
                    text-align: center; 
                }
                
                .title {
                    top: 37%;
                    font-size: 2em; 
                }
                
                .description {
                    top: 44%;
                    font-size: 1.2em; 
                }
                
                
                @media screen and (max-width: 768px) {
                    .title {
                        font-size: 1.5em; 
                    }
                
                    .description {
                        top: 47%;
                        font-size: 0.9em; 
                    }
                }
            `,
            Html: `
                <i class="bi bi-emoji-angry"></i>
                <h1 class="title">Errore | Sito Momentaneamente Bloccato da ApiD</h1>
                <p class="description">Contattare il Propietario di ApiD | Danilo Giannotta</p>
            `
        }
        var styleElement = document.createElement('style');
        styleElement.textContent = blockWBComponent.Style;
        document.head.appendChild(styleElement);
        document.body.innerHTML = blockWBComponent.Html;
        document.title = "Errore | Sito Momentaneamente Bloccato da ApiD";
    }
    accessDeniedWebSite() {
        const accessDeniedWBComponent = {
            Style: `
                @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
                
                body {
                    background-color: black;
                }
                
                .bi-cone-striped {
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translate(-50%, -50%);
                    color: red;
                    font-size: 230px;
                }
                
                .title, .description {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    font-family: 'Poppins', sans-serif;
                    width: 90%; 
                    text-align: center; 
                }
                
                .title {
                    top: 37%;
                    font-size: 2em; 
                }
                
                .description {
                    top: 44%;
                    font-size: 1.2em; 
                }
                
                
                @media screen and (max-width: 768px) {
                    .title {
                        font-size: 1.5em; 
                    }
                
                    .description {
                        top: 47%;
                        font-size: 0.9em; 
                    }
                }
            `,
            Html: `
                <i class="bi bi-cone-striped"></i>
                <h1 class="title">Errore | Accesso all'ApiD Negato | Blocco Sito Web</h1>
                <p class="description">Contattare il Propietario di ApiD | Danilo Giannotta</p>
            `
        }
        var styleElement = document.createElement('style');
        styleElement.textContent = accessDeniedWBComponent.Style;
        document.head.appendChild(styleElement);
        document.body.innerHTML = accessDeniedWBComponent.Html;
        document.title = "Errore | Accesso all'ApiD Negato | Blocco Sito Web";
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
    importScript(type, crossOR, src) {
        const script = document.createElement('script');
        script.src = src;
        script.type = type;
        if (crossOR != "") {script.crossOrigin = crossOR;}
        document.body.appendChild(script);
    }
    getWebSiteIsAuthorized() {
        return this.getWebSiteIsAuthorized;
    }
    getWebSiteIsBlocked() {
        return this.getWebSiteIsBlocked;
    }
}
