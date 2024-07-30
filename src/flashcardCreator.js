import * as Index from './index';

const auth = Index.auth;
const db = Index.db;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var user;

var addButton;
var saveButton;
var reviewButton;
var doneButton;
var cardTemplate;
var nameBox;
var cardContainer;

const deckId = urlParams.get('id');

var isSaved = true;

async function initializeFlashcards() {
    const deckPath = `flashcards/${user.uid}/decks/${deckId}`;
    const deck = Index.doc(db, deckPath);
    const deckSnapshot = await Index.getDoc(deck);

    nameBox.value = deckSnapshot.data().name;
    
    const querySnapshot = await Index.getDocs(Index.collection(db, `flashcards/${user.uid}/decks/${deckId}/cards`));
    querySnapshot.forEach((doc) => {
        console.log(doc.data().question, doc.data().answer);
        addCard(doc.data().question, doc.data().answer);
    });
}

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;

    if (!user) {
        window.location.href = '../pages/login.html';
        return;
    }

    if (!deckId) {
        window.location.href = '../pages/menu.html';
        return;
    }

    initializeFlashcards();
});

async function createFlashcard(deckName, cardName, question, answer, isClean) {
    const deckPath = `flashcards/${user.uid}/decks/${deckName}`;
    const deck = Index.doc(db, deckPath);
    const cardPath = `${deckPath}/cards/`;
    const card = Index.doc(deck, `/cards/${cardName}`);
    
    if (isClean) await deleteCollection(cardPath);
    
    let flashcard = Index.setDoc(card, {
        question: question,
        answer: answer
    });

    Index.setDoc(deck, {
        name: document.getElementById('namebox').value
    });

    return flashcard;
}

function save(isClean) {
    let cards = cardContainer.children;

    for (let i = 0; i < cards.length; i++) {
        cards[i].dataset.firebaseId = createFlashcard(
            deckId,
            i,
            cards[i].children[0].value,
            cards[i].children[1].value,
            isClean
        );
    }

    isSaved = true;
}

async function deleteCollection(path) {
    const collectionRef = Index.collection(db, path);
    const querySnapshot = await Index.getDocs(collectionRef);
    
    const batch = Index.writeBatch(db);
    querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });

    await batch.commit();
}

function addCard(question, answer) {
    let newCard = cardContainer.appendChild(cardTemplate.cloneNode(true));
    
    newCard.children[0].value = question;
    newCard.children[1].value = answer;

    newCard.children[0].addEventListener('input', function() {
        isSaved = false;
    }, false);
    newCard.children[1].addEventListener('input', function() {
        isSaved = false;
    }, false);
    newCard.children[2].addEventListener('click', () => {
        newCard.remove();
        save(true);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addButton = document.getElementById('add-card-button');
    doneButton = document.getElementById('done-button');
    saveButton = document.getElementById('save-button');
    reviewButton = document.getElementById('review-button');
    cardTemplate = document.getElementsByClassName('card')[0].cloneNode(true);
    nameBox = document.getElementById('namebox');
    cardContainer = document.getElementById('card-container');

    saveButton.addEventListener('click', function() {
        save(false);
    });

    addButton.addEventListener('click', function() {
        addCard('New Question', 'New Answer');
    });

    doneButton.addEventListener('click', function() {
        window.location.href = '../pages/menu.html'
    });

    reviewButton.addEventListener('click', function() {
        window.location.href = Index.generateUrlParams(
            '../pages/review.html',
            {
                'id': deckId
            }
        );
    });

    document.getElementsByClassName('card')[0].remove();
});

// ARE YOU SURE YOU WANT TO LEAVE
window.addEventListener('beforeunload', function (e) {
    if (!isSaved){
        e.preventDefault();
        e.returnValue = ''; // DON'T REMOVE THIS. IT'S NECESSARY FOR OLD BROWSERS!
    }
});