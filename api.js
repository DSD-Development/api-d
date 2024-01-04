import { siteList } from "./list/siteList.js";

export class ApiD {
    init(siteName, siteId) {
        console.log('%c' + siteName + ' | Inizializzazione Sito Web | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        this.startProtection(siteName); 
        var siteIdString = siteId.toString();
        window[siteIdString + '_build']();
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
}
