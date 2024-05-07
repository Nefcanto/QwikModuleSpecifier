import { camelize } from "Base"
import { t } from "Globalization"

const translateInBatch = (translations, texts, module) => {
    for (const index in texts) {
        const text = texts[index]
        const camelizedText = camelize(text)
        translations[camelizedText] = t(translations, text, module)
    }
}

export default translateInBatch
