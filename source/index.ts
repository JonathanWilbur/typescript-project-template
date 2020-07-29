// import { v4 as uuidv4 } from "uuid";
// import ono from "@jsdevtools/ono";
// import moment from "moment";
// import eol from "eol"
// import i18n from "i18next";
// import osLocale from "os-locale";

export default
async function main (): Promise<void> {
    if (require.main === module) { // This is the main module.
        console.log("It worked!");
    }
}

// i18n
//     .use(I18FileSystemBackend)
//     .init({
//         debug: isDebugging,
//         lng: language,
//         ns: [
//             "index",
//         ],
//         fallbackLng: "en",
//         pluralSeparator: "#",
//         contextSeparator: "@",
//         backend: {
//             loadPath: path.join(__dirname, "../locales/{{lng}}/{{ns}}.json"),
//             addPath: path.join(__dirname, "../locales/{{lng}}/{{ns}}.missing.json"),
//         },
//         initImmediate: false,
//     }).then(main);
