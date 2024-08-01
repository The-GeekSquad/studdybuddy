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
            './review.html',
            {
                'id': doc.id
            }
        );
        newBox.children[3].href = Index.generateUrlParams(
            './flashcardCreator.html',
            {
                'id': doc.id
            }
        );
        newBox.children[4].href = Index.generateUrlParams(
            './flashcardQuiz.html',
            {
                'id': doc.id
            }
        );
        newBox.children[5].addEventListener('click', async () => {
            if (newBox.children[5].innerHTML !== 'Delete') {
                try {
                    const docRef = Index.doc(db, `${decksPath}${doc.id}`);
                    await Index.deleteDoc(docRef);

                    newBox.remove();
                } catch (error) {
                    console.error('Error deleting document: ', error);
                }
            } else {
                newBox.children[5].innerHTML = 'ARE YOU SURE? (CLICK AGAIN)';
                setTimeout(function() {
                    newBox.children[5].innerHTML = 'Delete';
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
            window.location.href = './protected.html';
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
            './flashcardCreator.html',
            {
                'id': deck.id
            }
        );
    });
});