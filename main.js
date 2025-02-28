const pins = [
{ id: 1, imageUrl: './images/adamjee_27.png', title: '', description: '' },
    { id: 2, imageUrl: './images/basketball_logo.png', title: '', description: '' },
    { id: 3, imageUrl: './images/batman (1).png.png', title: '', description: '' },
    { id: 4, imageUrl: './images/bisc_27.jpg.png', title: '', description: '' },
    { id: 5, imageUrl: './images/chill-guy (1).png.png', title: '', description: '' },
    { id: 6, imageUrl: './images/fwaeh.png', title: '', description: '' },
    { id: 7, imageUrl: './images/narcissist_orange.jpg.png', title: '', description: '' },
    { id: 8, imageUrl: './images/narcissist_purple.png', title: '', description: '' },
    { id: 9, imageUrl: './images/porsche.jpg.png', title: '', description: '' },
    { id: 10, imageUrl: './images/porsche-928 (1).png.png', title: '', description: '' },
];

// Create pin element
function createPin(pin) {
    const pinElement = document.createElement('div');
    pinElement.className = 'pin';

    const img = document.createElement('img');
    img.src = pin.imageUrl;
    img.alt = pin.title;
    img.loading = 'lazy';
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
    };

    pinElement.innerHTML = `
        <div class="pin-content">
            <div class="pin-title">${pin.title}</div>
            <div class="pin-description">${pin.description}</div>
        </div>
    `;

    pinElement.insertBefore(img, pinElement.firstChild);
    pinElement.addEventListener('click', () => {
        alert(`You clicked on: ${pin.title}`);
    });

    return pinElement;
}


function displayPins(pinsToShow) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    if (pinsToShow.length === 0) {
        imageGrid.innerHTML = '<p>No pins found</p>';
        return;
    }

    pinsToShow.forEach((pin) => {
        imageGrid.appendChild(createPin(pin));
    });
}


function shufflePins() {
    const shuffled = [...pins].sort(() => Math.random() - 0.5);
    displayPins(shuffled);
}


function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPins = pins.filter(
            (pin) =>
                pin.title.toLowerCase().includes(searchTerm) ||
                pin.description.toLowerCase().includes(searchTerm)
        );
        displayPins(filteredPins);
    });
}


function setupCreatePin() {
    document.getElementById('createBtn').addEventListener('click', () => {
        const imageUrl = prompt('Enter image URL:');
        const title = prompt('Enter title:');
        const description = prompt('Enter description:');

        if (imageUrl && title && description) {
            const newPin = { id: Date.now(), imageUrl, title, description };
            pins.push(newPin);
            displayPins(pins);
        } else {
            alert('Please fill in all fields to create a pin.');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    displayPins(pins);
    setupSearch();
    setupCreatePin();

    
    document.getElementById('shuffleBtn').addEventListener('click', shufflePins);
});
