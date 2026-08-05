import en from "./en";
import es from "./es";


export function getLanguage(pathname: string) {
    return pathname.includes("/es/") || pathname.endsWith("/es")
        ? "es"
        : "en";
}

export function getTranslations(lang:string){

    return lang === "es"
        ? es
        : en;

}