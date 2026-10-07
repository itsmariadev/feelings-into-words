const words = [
    {
        language: "ARABIC",
        word: "سمر",
        pronunciation: "/samar/",
        humanMeaning: "That time when you are talking with someone for so long that when you check the clock it's already late at night.",
        literalMeaning: "To keep watch, preserve, to stay awake, to speak at night, to speak late at night, to live night-life, to be around at night (of people and animals).",
        colorTag: "joy"
    },
    {
        language: "TAGALOG",
        word: "Kilig",
        pronunciation: "/kilig/",
        humanMeaning: "You are talking with this person and they say or do an unexpected romantic action, and you feel those butterflies in your stomach.",
        literalMeaning: "Excited; thrilled; the feeling of butterflies in one's stomach due to romantic tension.",
        colorTag: "love"
    },
    {
        language: "INDONESIAN",
        word: "JAYUS",
        pronunciation: "/d͡ʒa.jʊs//",
        humanMeaning: "When someone tells a dad joke that is so bad and unfunny that you can't help but laugh.",
        literalMeaning: "A joke that is so unfunny and poorly told, you can't help but laugh.",
        colorTag: "funny",
    },
    {
        language: "DUTCH",
        word: "STRUISVOGELPOLITIEK", 
        pronunciation: "/strœy̯s.fo:.yəl.po:.liˌtik/",
        humanMeaning: "Deeply knowing that an action is not good, but continuing to do it with a willful ignorance and pretending everything is fine.",
        literalMeaning: "An evasive style of politics that fails to address problems by either ignoring them or by creating a false sense of security through (known) ineffective measures; ostrich politics ",
        colorTag: "anxiety"
    },
    {
        language: "GERMAN",
        word: "DRACHENFUTTER", 
        pronunciation: "/dʁaxn̩ˌfʊtɐ/",
        humanMeaning: "When your partner did something that made you angry, and to set a good mood between you, they give you a gift.",
        literalMeaning: "A gift given to placate someone (especially one's wife, mother-in-law, etc.)",
        colorTag: "anger"
    }
];

const colorTags = {
    joy : "eab308",
    love : "fb7185",
    funny : "fb923c",
    anxiety : "d97706",
    anger : "ef4444",
}
const bodyColor = document.querySelector("body");
const languageElem = document.querySelector(".language");
const wordElem = document.querySelector(".word");
const pronunciationElem = document.querySelector(".pronunciation");
const humanMeaningElem = document.querySelector(".human-meaning");
const literalMeaningBtn = document.querySelector(".literal-meaning-btn");
const literalMeaningElem = document.querySelector(".literal-meaning");
const bgButtons = document.querySelectorAll("button");
const nextWordBtn = document.querySelector(".next-word");

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const{ language, word, pronunciation, humanMeaning, literalMeaning, colorTag } = getRandomWord();
    languageElem.textContent = language;
    wordElem.textContent = word;
    pronunciationElem.textContent = pronunciation;
    humanMeaningElem.textContent = humanMeaning;
    literalMeaningElem.textContent = literalMeaning;
    bodyColor.style.backgroundColor = `#${colorTags[colorTag]}`;
    bgButtons.forEach(button => {
        button.style.backgroundColor = `#${colorTags[colorTag]}`;
    });

    literalMeaningElem.classList.remove("ativo");
    humanMeaningElem.classList.remove("ativo");
    literalMeaningBtn.textContent = "Show Literal Meaning";
}

literalMeaningBtn.addEventListener("click", function() {
    literalMeaningElem.classList.toggle("ativo");
    humanMeaningElem.classList.toggle("ativo");

    if(literalMeaningElem.classList.contains("ativo")) {
        literalMeaningBtn.textContent = "Show Human Meaning";
    } else {
        literalMeaningBtn.textContent = "Show Literal Meaning";
    }
});

nextWordBtn.addEventListener("click",displayWord);

displayWord();