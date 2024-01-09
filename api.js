import { ApiDOkey } from "https://dsd-development.github.io/api-d/ApiDOkey.js";
import { blockWebSite } from "https://dsd-development.github.io/api-d/functions/blockWebSite.js";
import { buildWebSite } from "https://dsd-development.github.io/api-d/functions/buildSiteWeb.js";
import { WBcheckUser } from "https://dsd-development.github.io/api-d/functions/checkUser.js";
import { accessDeniedWebSite } from "https://dsd-development.github.io/api-d/functions/accessDenied.js";
import { getNationIsAuthorized } from "https://dsd-development.github.io/api-d/protection/protection.js";
import { antiAfk } from "https://dsd-development.github.io/api-d/protection/antiAfk.js";

export class ApiD {
    constructor(apik) {
        this.apik = apik;
        this.init();
    }
    async init() {
        console.log('%c' + 'Accesso all\'ApiD In Corso... | By Danilo Giannotta', 'font-family: Poppins; font-size: 20px;');
        const info = this.getInfoByKey(this.apik.toString());
        this.getWebSiteIsAuthorized = info != null ? true : false;
        if (info != null) {
            this.siteName = info.siteName;
            this.siteId = info.siteId;  
            this.getWebSiteIsBlocked = info.blockWb;
            if (info.blockWb) {
                console.clear();
                console.log('%c' + this.siteName + ' | Sito Momentaneamente Bloccato da ApiD', 'font-family: Poppins; font-size: 20px; color: red;');
                blockWebSite()
            } else {
                if (info.notAuthorizedNation === false) {
                    if (!info.loadWbCheckUser) {
                        console.clear();
                        console.log('%c' + this.siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
                        buildWebSite(this.siteName, this.siteId);
                        if (info.antiAFK) {antiAfk();};
                    } else {
                        console.clear();
                        console.log('%c' + this.siteName + ' | Controllo Utente in Corso...', 'font-family: Poppins; font-size: 20px; color: white;');
                        WBcheckUser(this.siteName, this.siteId);
                    }
                } else {
                    var nationIsAuthorized = await getNationIsAuthorized(info.notAuthorizedNation);
                    if (nationIsAuthorized) {
                        console.clear();
                        console.log('%c' + this.siteName + ' | Accesso all\'ApiD Eseguito con Successo', 'font-family: Poppins; font-size: 20px; color: green;');
                        buildWebSite(this.siteName, this.siteId);  
                        if (info.antiAFK) {antiAfk();};
                    } else {
                        document.close();
                    }
                }
            }
        } else {
            this.siteName = "Sito Web Indefinito";
            console.clear();
            console.log('%c' + this.siteName + ' | Accesso all\'ApiD non Riuscito | Blocco Sito Web In Corso', 'font-family: Poppins; font-size: 20px; color: red;');
            accessDeniedWebSite();
        }
    }
    getInfoByKey(keyToFind) {
        const foundKey = ApiDOkey.find(item => item.key === keyToFind);
        return foundKey || null;
    }
    getWebSiteIsAuthorized() {return this.getWebSiteIsAuthorized;}
    getWebSiteIsBlocked() {return this.getWebSiteIsBlocked;}
}
