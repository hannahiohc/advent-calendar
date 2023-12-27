// Countdown
const countdown = document.getElementById('countdown');
const christmas = new Date("December 25 2024 00:00:00");

function updateCounter() {
    const now = new Date().getTime();
    const timeDifference = christmas - now;
    const units = ['days', 'hours', 'minutes'];
    const [days, hours, minutes] = units.map(unit =>
        Math.floor(
            unit === 'days' ? timeDifference / (1000 * 60 * 60 * 24) :
            unit === 'hours' ? (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) :
            unit === 'minutes' ? (timeDifference % (1000 * 60 * 60)) / (1000 * 60) : 0
        )
    );

    countdown.textContent = `${days}\xa0Days, ${hours}\xa0Hours and ${minutes}\xa0Minutes`;
}

setInterval(updateCounter, 1000);
updateCounter();

// Cards
const cards = document.querySelectorAll('.card');
document.addEventListener("DOMContentLoaded", function() {
    cards.forEach(function(card) {
        var dayNumber = card.className.match(/\bday-(\d+)\b/);
        if (dayNumber) {
          var frontDiv = card.querySelector('.front');
          frontDiv.style.backgroundImage = 'url(images/cards/card-' + dayNumber[1] + '.png)';
        }
    });
});

const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
    door.addEventListener('click', () => {
        // Modal`
        function showModal(imageUrl, text) {
            const existingModal = document.querySelector('.modal');

            if (existingModal) {
                existingModal.remove();
            }

            const modal = document.createElement('div');
            modal.className = 'modal hidden';
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content zoomIn';

            const image = document.createElement('div');
            image.style.cssText = `width: 100%; height: 211px; background-image: url(${imageUrl});`;
            image.alt = 'Door Image';
        
            const textElement = document.createElement('p');
            textElement.textContent = text;

            modalContent.appendChild(image);
            modalContent.appendChild(textElement);
            modal.appendChild(modalContent);
            modal.addEventListener('click', () => {
                modal.remove(); 
            });

            document.body.appendChild(modal);

            setTimeout(() => modal.classList.remove('hidden'), 0);
        }

        let xmlHttpRequest;
        if (window.XMLHttpRequest) {
            xmlHttpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            return;
        }

        xmlHttpRequest.open('HEAD', window.location.href.toString(), false);
        xmlHttpRequest.setRequestHeader("ContentType", "text/html");
        xmlHttpRequest.send('');

        const serverDate = xmlHttpRequest.getResponseHeader("Date");
        const now = new Date(serverDate);
        const openDate = new Date(2023, 11, index); 

        if (now.getTime() > openDate.getTime()) {
            const getImage = `images/cards/card-${index + 1}.png`;
            const doorDiv = document.querySelector(`.day-${index + 1}`);
            const backDiv = doorDiv.querySelector(`.back`);
            const style = window.getComputedStyle(backDiv);
            const text = modalMessageList[index]['message'];

            showModal(getImage, text);
        } else {
            const daysRemaining = Math.ceil((christmas - now) / (1000 * 60 * 60 * 24)) - (25 - index);
            alert(`You can open this card in ${daysRemaining} days!`);            
        }
    })
})
 
const modalMessageList = [
    { "number": 1, "message": "Celebrate the season of joy and\xa0kindness." },
    { "number": 2, "message": "Spread love like confetti." },
    { "number": 3, "message": "Each day is a gift; open\xa0it\xa0with\xa0gratitude." },
    { "number": 4, "message": "Embrace the magic of Christmas in\xa0every\xa0moment." },
    { "number": 5, "message": "Kindness is the best ornament on\xa0the\xa0tree\xa0of\xa0life." },
    { "number": 6, "message": "Countdown to Christmas: 25\xa0days\xa0of smiles and cheer." },
    { "number": 7, "message": "Light up the world with your\xa0kindness." },
    { "number": 8, "message": "May your days be merry and your\xa0heart be light." },
    { "number": 9, "message": "Wishing you peace, love, and joy\xa0this holiday season." },
    { "number": 10, "message": "This is a time for reflection and\xa0gratitude." },
    { "number": 11, "message": "The best way to spread Christmas cheer is to be kind all year." },
    { "number": 12, "message": "Cherish the moments that make\xa0your heart glow." },
    { "number": 13, "message": "May your days be merry and bright with the spirit of Christmas." },
    { "number": 14, "message": "Let your heart be light as\xa0your\xa0journey." },
    { "number": 15, "message": "Wishing you a season of warmth,\xa0joy, and love." },
    { "number": 16, "message": "Christmas is a season for kindling the fire of hospitality." },
    { "number": 17, "message": "Every act of kindness is a light that brightens the world." },
    { "number": 18, "message": "In the spirit of giving, make\xa0each\xa0day\xa0count." },
    { "number": 19, "message": "May your 2024 be filled with moments that make you smile." },
    { "number": 20, "message": "Spread the magic of the\xa0season with acts of love and generosity." },
    { "number": 21, "message": "A season to believe in miracles and share joy." },
    { "number": 22, "message": "Deck the halls with kindness and good cheer." },
    { "number": 23, "message": "Let the spirit of Christmas fill your\xa0heart\xa0with\xa0love." },
    { "number": 24, "message": "Wishing you a December filled with warmth and wonder." },
    { "number": 25, "message": "Merry Christmas! May\xa0your\xa0heart\xa0be\xa0light, and your\xa0days\xa0be\xa0bright." }
];






















