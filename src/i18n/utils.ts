import en from "./en";
import es from "./es";


export function getLanguage(pathname:string){

    if(pathname.startsWith("/es")){
        return "es";
    }

    return "en";
}

export function getTranslations(lang:string){

    return lang === "es"
        ? es
        : en;

}