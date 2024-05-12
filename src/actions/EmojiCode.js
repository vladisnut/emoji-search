import {parseUnicodes} from "../utils/utils";

export const EmojiCode = Object.freeze({
    CHARACTER: {
        value: 'character',
        label: 'Смайлик',
        fromEmoji: function(e) { return e.character },
    },
    HTML: {
        value: 'html',
        label: 'HTML-код',
        fromEmoji: function(e) { return parseUnicodes(e.codePoint) },
    },
    HEX: {
        value: 'hex',
        label: 'Hex-код',
        fromEmoji: function(e) { return e.codePoint },
    },
});
