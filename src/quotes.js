const quotes = [{
    quote: 'End is not the end if fact E.N.D. Means Efforts Never Dies.',
    writer: 'Dr. A.P.J. Abdul Kalam'
}, {
    quote: 'A person who never made a mistake never tried anything new.',
    writer: 'Albet Einstein'
}, {
    quote: 'There are plenty of difficult obstacles in your path. Do not allow yourself to become one of them.',
    writer: 'Ralph Marston'
}, {
    quote: 'Only I can change my life. No one can do it for me.',
    writer: 'Carol Burnett'
}, {
    quote: 'I think I can. I know I can.',
    writer: 'Jennifer Wittwer'
}, {
    quote: 'You must be the change you wish to see in the world.',
    writer: 'Mahatma Gandhi'
}, {
    quote: 'Do not wait for the opportunity. Create it.',
    writer: 'George Bernard Shaw'
}, {
    quote: 'Self-belief and hard work will always earn you success.',
    writer: 'Virat Kohli'
}, {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    writer: 'Franklin D. Roosevelt'
},{
    quote: 'If you get tired, learn to rest not to quit.',
    writer: 'Banksy'
}
]

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#Qbtn");
    let quote = document.querySelector(".quote");
    let writer = document.querySelector(".writer");

    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = quotes[random].quote;
        writer.innerHTML = quotes[random].writer;
    });
});