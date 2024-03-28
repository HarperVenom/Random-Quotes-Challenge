const quotes = [
    newQuote('To have a great idea, have a lot of them.'
    , '#ffd5d5'
    , 'Thomas A. Edison'
    , 'https://images.saymedia-content.com/.image/t_share/MjAyNDU1NTI5NTIyNDcyMDA0/the-inventor-thomas-alva-edison.jpg'
    , 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg'),
    newQuote('Happiness lies in the joy of achievement and the thrill of creative effort.'
    , '#d7d7ff'
    , 'Franklin D. Roosevelt'
    , 'https://www.whitehouse.gov/wp-content/uploads/2021/01/32_franklin_d_roosevelt.jpg'
    , 'https://media.cnn.com/api/v1/images/stellar/prod/190517091026-07-unusual-landscapes-travel.jpg?q=w_4681,h_2633,x_0,y_0,c_fill/h_618'),
    newQuote('If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where their ideas can connect.'
    , '#fefeb1'
    , 'Steven Johnson'
    , 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Steven_Berlin_Johnson_-_South_by_Southwest_2008_crop.jpg'
    , 'https://i0.wp.com/www.sweetlightphotos.com/wp-content/uploads/2022/08/2022-08-08_Maara-21333-Edit-1.jpg?fit=800%2C533&ssl=1'),
    newQuote('The imagination is a muscle. If it is not exercised, it atrophies.'
    , '#ffe0a8'
    , 'Neil Gaiman'
    , 'https://westportlibrary.org/wp-content/uploads/2023/06/SBA-Speaker-Bio-Gaiman-2022-credit-MasterClass-Square.jpg'
    , 'https://www.explore.com/img/gallery/the-50-most-incredible-landscapes-in-the-whole-entire-world/l-intro-1672072042.jpg'),
    newQuote('Trust that little voice in your head that says ‘Wouldn’t it be interesting if…’; And then do it.'
    , '#d3ffd3'
    , 'Duane Michals'
    , 'https://en.laba.biz/wp-content/uploads/2016/04/DuaneMichals.jpg'
    , 'https://aiprompts.ca/wp-content/uploads/2023/08/40124-img.png'),
];

function newQuote(message, color, author, photo, background) {
    return {
        message: message,
        color: color,
        author: author,
        photo: photo,
        background: background
    }
}

const messageField = document.querySelector('.quote-text');
const authorName = document.querySelector('.author-name');
const authorPhoto = document.querySelector('.author-photo');

const nextQuoteButton = document.getElementById('nextQuoteButton');

let quoteOrder = generateQuoteOrder();
setUpQuote(quotes[quoteOrder[0]]);
quoteOrder.shift();

let lastUsedQuoteIndex;

nextQuoteButton.addEventListener('click', () => {
    if (quoteOrder.length === 0) {
        quoteOrder = generateQuoteOrder();
    }
    if (lastUsedQuoteIndex === quoteOrder[0]) {
        quoteOrder.shift();
    }
    
    setUpQuote(quotes[quoteOrder[0]]);
    lastUsedQuoteIndex = quoteOrder[0];
    quoteOrder.shift();
});

//Generates an array of the same length with indexes in random order
function generateQuoteOrder(array = quotes) {
    let straightOrder = [];
    for (let i = 0; i < array.length; i++){
        straightOrder.push(i);
    }
    let newOrder = [];
    const length = straightOrder.length;
    for (let i = 0; i < length; i++){
        const currentIndex = Math.round(Math.random() * (straightOrder.length-1));
        newOrder.push(straightOrder[currentIndex]);
        straightOrder = straightOrder.filter((element, index) => {
            return index !== currentIndex;
        })
    }
    return newOrder;
}

function setUpQuote(quote) {
    messageField.innerText = quote.message;
    messageField.style.backgroundColor = quote.color;
    authorName.innerText = '- ' + quote.author;
    authorPhoto.setAttribute('src',quote.photo);

    document.body.style.backgroundImage = `url(${quote.background})`;
}