import * as Index from './index';
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
    dangerouslyAllowBrowser: true
});
const auth = Index.auth;
const db = Index.db;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var user;
var rights = 0;
var total;

var cards = [];
var rightAnswer;

var cardElement;
var buttons = [];

const deckId = urlParams.get('id');

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        window.location.href = './protected.html';
        return;
    }

    if (!deckId) {
        window.location.href = './protected.html';
        return;
    }

    getCards().then(() => {generateQuestions()});
});

async function getCards() {
    const querySnapshot = await Index.getDocs(Index.collection(db, `flashcards/${user.uid}/decks/${deckId}/cards`));
    querySnapshot.forEach((doc) => {
        cards.push({
            question: doc.data().question,
            answer: doc.data().answer
        });
    });
    total = cards.length;
}

document.addEventListener("DOMContentLoaded", function() {
    cardElement = document.getElementById('card-element');
    buttons.push(document.getElementById('button-1'));
    buttons.push(document.getElementById('button-2'));
    buttons.push(document.getElementById('button-3'));
    buttons.push(document.getElementById('button-4'));
    buttons[0].addEventListener('click', () => {
        checkForCorrect(buttons[0].innerHTML);
        generateQuestions();
    });
    buttons[1].addEventListener('click', () => {
        checkForCorrect(buttons[1].innerHTML);
        generateQuestions();
    });
    buttons[2].addEventListener('click', () => {
        checkForCorrect(buttons[2].innerHTML);
        generateQuestions();
    });
    buttons[3].addEventListener('click', () => {
        checkForCorrect(buttons[3].innerHTML);
        generateQuestions();
    });
});

function checkForCorrect(text) {
    if (text === rightAnswer) {
        cardElement.classList.toggle('correct', true);
        rights++;
    } else {
        cardElement.classList.toggle('incorrect', true);
    }
    
    setTimeout(() => {
        cardElement.classList.toggle('correct', false);
        cardElement.classList.toggle('incorrect', false);
    }, 1000);
}

function summary() {
    cardElement.innerHTML = String((rights / total) * 100) + "%";
    cardElement.style.fontSize = '50px';
    buttons.forEach((button) => {
        button.remove();
    })
}

export async function generateQuestions() {
    if (cards.length === 0) return summary();

    const chatCompletion = await talkToGroq(cards.shift());
    let strings = chatCompletion.split('|');
    
    cardElement.innerHTML = strings[0];
    strings.shift();
    rightAnswer = strings[0];

    buttons.forEach((button) => {
        let randomValue = Math.floor(Math.random() * strings.length);
        button.innerHTML = strings[randomValue];
        strings.splice(randomValue, 1);
    });
}

export async function talkToGroq(card) {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Rephrase the quiz question and its correct answer, then create three believable incorrect answers. Ensure there are always four answers, and keep all text grammatically correct. Do not label the answers or indicate which is correct. Separate each piece of information with a '|' without spaces. The quiz question is: "${card.question}". The correct answer is: "${card.answer}". Include three additional answers.`,
            },
        ],
        model: "llama3-8b-8192",
        temperature: 0
    });

    return chatCompletion.choices[0].message.content;
}