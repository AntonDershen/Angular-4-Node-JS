"use strict";
class LanguageService {
    constructor() {
        this.supported_languages = ["en", "ru"];
    }
    getSupportedLanguage(language) {
        if (this.supported_languages.indexOf(language) > -1) {
            return language;
        }
        return this.supported_languages[0];
    }
}
exports.LanguageService = LanguageService;
//# sourceMappingURL=language_service.js.map