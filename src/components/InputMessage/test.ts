export const onKeyup = ({current}: React.RefObject<HTMLDivElement>) => {
    if (current) {
        cleanUp(current.innerHTML);
        const text = emojiToHtml(current.innerHTML);
        if (text !== current.innerHTML) {
            current.innerHTML = text;
            restore(current);
        }
    }
}

export const onPaste = (e: React.ClipboardEvent<HTMLDivElement>, { current }: React.RefObject<HTMLDivElement>) => {
    if (current) {
        e.preventDefault();
        const clp = e.clipboardData;

        if (clp || e.clipboardData) {
            let text = '';

            clp ? text = clp.getData('text/html') || clp.getData('text/plain') || ''
                : text = e.clipboardData.getData('Text') || '';
            
            if (text) {
                text = cleanUp(text);
                text = emojiToHtml(text);
                const el = document.createElement('span');
                el.innerHTML = text;
                el.innerHTML = el.innerHTML.replace(/\n/g, '');
                current.appendChild(el);
                restore(current);
            }
        }
    }
}

const emojiRanges = [
    '(?:\uD83C[\uDDE6-\uDDFF]){2}', // flags
    '[\u0023-\u0039]\u20E3', // numbers
    '(?:[\uD83D\uD83C\uD83E][\uDC00-\uDFFF]|[\u270A-\u270D\u261D\u26F9])\uD83C[\uDFFB-\uDFFF]', // skin color
    '\uD83D[\uDC68\uDC69][\u200D\u200C].+?\uD83D[\uDC66-\uDC69](?![\u200D\u200C])', // family
    '[\uD83D\uD83C\uD83E][\uDC00-\uDFFF]', // surrogate pair
    '[\u3297\u3299\u303D\u2B50\u2B55\u2B1B\u27BF\u27A1\u24C2\u25B6\u25C0\u2600\u2705\u21AA\u21A9]', // simple
    '[\u203C\u2049\u2122\u2328\u2601\u260E\u261d\u2620\u2626\u262A\u2638\u2639\u263a\u267B\u267F\u2702\u2708]',
    '[\u2194-\u2199]',
    '[\u2B05-\u2B07]',
    '[\u2934-\u2935]',
    '[\u2795-\u2797]',
    '[\u2709-\u2764]',
    '[\u2622-\u2623]',
    '[\u262E-\u262F]',
    '[\u231A-\u231B]',
    '[\u23E9-\u23EF]',
    '[\u23F0-\u23F4]',
    '[\u23F8-\u23FA]',
    '[\u25AA-\u25AB]',
    '[\u25FB-\u25FE]',
    '[\u2602-\u2618]',
    '[\u2648-\u2653]',
    '[\u2660-\u2668]',
    '[\u26A0-\u26FA]',
    '[\u2692-\u269C]'
];

const emojiRegex = new RegExp(emojiRanges.join('|'), 'g');

export const emojiToHtml = (str: string) => {
    str = str.replace(/\uFE0F/g, '');
    return str.replace(emojiRegex, buildImgFromEmoji);
}

const tpl = '<img class="emoji emoji--{code} js-smile-insert" src="{src}" srcset="{src} 1x, {src_x2} 2x" unselectable="on">';
const url = 'https://abs-0.twimg.com/emoji/v2/svg/{code}.svg';
const url2 = 'https://abs-0.twimg.com/emoji/v2/svg/{code}.svg';

const buildImgFromEmoji = (emoji: string) => {
    const codePoint = extractEmojiToCodePoint(emoji);
    return $tpl(tpl, {
        code: codePoint,
        src: $tpl(url, {
            code: codePoint
        }),
        src_x2: $tpl(url2, {
            code: codePoint
        })
    });
}

const extractEmojiToCodePoint = (emoji: string) => {
    if (emoji) {
        return emoji
            .split('')
            .map((symbol, index) => {
                return emoji.codePointAt(index)?.toString(16);
            })
            .filter((codePoint) => {
                return !isSurrogatePair(codePoint || '');
            })
            .join('-');
    }
}

const isSurrogatePair = (codePoint: string ) => {
    const codes = parseInt(codePoint, 16);
    return codes >= 0xD800 && codes <= 0xDFFF;
}

const tagRegex = /<[^>]+>/gim;
const styleTagRegex = /<style\b[^>]*>([\s\S]*?)<\/style>/gim;
const validTagsRegex = /<br[\s/]*>|<img\s+class="emoji\semoji[-\w\s]+"\s+((src|srcset|unselectable)="[^"]*"\s*)+>/i;

export const cleanUp = (text: string) => text
        .replace(styleTagRegex, '')
        .replace(tagRegex, (tag) => tag.match(validTagsRegex) ? tag : '')
        .replace(/\n/g, '');


const restore = (current: HTMLDivElement) => {
    const range = document.createRange();
    range.selectNodeContents(current);
    range.collapse(false);
    const sel = window.getSelection();
    if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

const $tpl = (tpl: any, dict: any) => {
    return tpl.replace(/\{([\w-]+)\}/g,
        function (str: any, key: any) {
            return dict[key] || (typeof (dict[key]) == 'number' ? 0 : '');
        }
    );
}