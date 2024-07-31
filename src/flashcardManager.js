import * as Index from './index';

const auth = Index.auth;
const db = Index.db;

var user;
var deckTemplate;

Index.onAuthStateChanged(auth, (_user) => {
    user = _user;
    displayFlashcards();
});

async function displayFlashcards() {
    const decksPath = `flashcards/${user.uid}/decks/`;
    const collectionRef = Index.collection(db, decksPath);
    
    const querySnapshot = await Index.getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
        let newBox = document.getElementById('container').appendChild(deckTemplate.cloneNode(true));

        newBox.children[1].innerHTML = doc.data().name;
        newBox.children[2].href = Index.generateUrlParams(
            '../pages/review.html',
            {
                'id': doc.id
            }
        );
        newBox.children[3].href = Index.generateUrlParams(
            '../pages/flashcardCreator.html',
            {
                'id': doc.id
            }
        );
        newBox.children[4].addEventListener('click', async () => {
            if (newBox.dataset.confirmed) {
                try {
                    const docRef = Index.doc(db, `${decksPath}${doc.id}`);
                    await Index.deleteDoc(docRef);

                    newBox.remove();
                } catch (error) {
                    console.error('Error deleting document: ', error);
                }
            } else {
                newBox.dataset.confirmed = true;
                newBox.children[4].innerHTML = 'ARE YOU SURE? (CLICK AGAIN)';
                setTimeout(function() {
                    newBox.dataset.confirmed = false;
                    newBox.children[4].innerHTML = 'Delete';
                }, 5000);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    deckTemplate = document.getElementsByClassName('box')[0].cloneNode(true);
    document.getElementsByClassName('box')[0].remove();

    document.getElementById('add-button').addEventListener('click', async () => {
        if (!user) {
            window.location.href = '../pages/home.html';
            return;
        }

        const decksPath = `flashcards/${user.uid}/decks`;
        const cardPath = `${decksPath}/cards/`;

        let deck = await Index.addDoc(Index.collection(db, decksPath), {
            name: 'My Flashcard Deck'
        });

        let card = await Index.doc(deck, `/cards/0`);
        
        let flashcard = await Index.setDoc(card, {
            question: 'Question',
            answer: 'Answer'
        });

        window.location.href = Index.generateUrlParams(
            '../pages/flashcardCreator.html',
            {
                'id': deck.id
            }
        );
    });
});