
import I18n from 'react-native-i18n';

import String_en from "../string/String_en"
import String_hi from "../string/String_hi"

I18n.fallbacks = true;

I18n.translations = {
    hi: String_hi,
    en: String_en,
    
};

export default I18n;