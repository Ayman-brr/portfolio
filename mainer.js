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

const CONFIG = {
    accent: '#00FFFF', 
    placeholderImage: 'https://via.placeholder.com/800x600?text=Image+Not+Available',
    createFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfk-IFm4SOBszLLSMmm4UEc97r2rzVv37rqs-XNDMdimd0Fcw/viewform?usp=header'
};

// cant be gettin sued bro

class PopupManager {
    static createImagePopup() {
        const popup = document.createElement('div');
        popup.className = 'popup-overlay';
        popup.id = 'imagePopup';
        popup.innerHTML = `
            <div class="popup-content">
                <button class="close-popup">×</button>
                <img src="" alt="" class="popup-image">
                <div class="popup-details">
                    <h2 class="popup-title"></h2>
                    <p class="popup-description"></p>
                    <button class="download-btn">
                        <i class="fas fa-download"></i>
                        Download Image
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        this.setupImagePopupHandlers(popup);
        return popup;
    }

   static createDisclaimerPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup-overlay active';
        popup.id = 'disclaimerPopup';
        popup.innerHTML = `
            <div class="popup-content disclaimer">
                <h2>Welcome to My Portfolio</h2>
                <div class="disclaimer-text">
                    <p>Hi there! 👋</p>
                    <p>I'm still early in my graphic design journey, so my portfolio is small, but I'm passionate about creating meaningful and visually appealing designs.</p>
                    <p>I would love the opportunity to work with you and grow my skills further. If you have any projects or collaborations in mind, feel free to reach out!</p>
                </div>
                <button class="accept-btn">Got it!</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        popup.querySelector('.accept-btn').addEventListener('click', () => {
            popup.remove();
            localStorage.setItem('disclaimerAccepted', 'false');
        });
    }

    static setupImagePopupHandlers(popup) {
        popup.querySelector('.close-popup').addEventListener('click', () => 
            popup.classList.remove('active'));
        
        popup.addEventListener('click', (e) => {
            if (e.target === popup) popup.classList.remove('active');
        });
    }

    static showImagePopup(pin) {
        const popup = document.getElementById('imagePopup');
        const popupImage = popup.querySelector('.popup-image');
        const popupTitle = popup.querySelector('.popup-title');
        const popupDescription = popup.querySelector('.popup-description');
        const downloadBtn = popup.querySelector('.download-btn');

        popupImage.src = pin.imageUrl;
        popupTitle.textContent = pin.title;
        popupDescription.textContent = pin.description;
        popup.classList.add('active');

        downloadBtn.onclick = () => ImageUtils.downloadImage(pin);
    }
}


class ImageUtils {
    static async downloadImage(pin) {
        try {
            const response = await fetch(pin.imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${pin.title}.jpg`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download image. Please try again.');
        }
    }
}


class PinManager {
    static createPin(pin) {
        const pinElement = document.createElement('div');
        pinElement.className = 'pin';

        const img = document.createElement('img');
        img.src = pin.imageUrl;
        img.alt = pin.title;
        img.loading = 'lazy';
        img.onerror = () => {
            img.src = CONFIG.placeholderImage;
        };

        pinElement.innerHTML = `
            <div class="pin-content">
                <div class="pin-title">${pin.title}</div>
                <div class="pin-description">${pin.description}</div>
            </div>
        `;

        pinElement.insertBefore(img, pinElement.firstChild);
        pinElement.addEventListener('click', () => PopupManager.showImagePopup(pin));

        return pinElement;
    }

    static displayPins(pinsToShow) {
        const imageGrid = document.getElementById('imageGrid');
        imageGrid.innerHTML = '';

        if (pinsToShow.length === 0) {
            imageGrid.innerHTML = '<p class="no-results">No pins found</p>';
            return;
        }

        pinsToShow.forEach(pin => {
            imageGrid.appendChild(this.createPin(pin));
        });
    }

    static shufflePins() {
        const shuffled = [...pins];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        this.displayPins(shuffled);
    }
}


class EventHandlers {
    static setupSearch() {
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (!searchTerm) {
                PinManager.displayPins(pins);
                return;
            }

            const titleMatches = [];
            const descriptionMatches = [];

            pins.forEach(pin => {
                if (pin.title.toLowerCase().includes(searchTerm)) {
                    titleMatches.push(pin);
                } else if (pin.description.toLowerCase().includes(searchTerm)) {
                    descriptionMatches.push(pin);
                }
            });

            PinManager.displayPins([...titleMatches, ...descriptionMatches]);
        });
    }

    static setupCreateButton() {
        document.getElementById('createBtn').addEventListener('click', () => {
            window.location.href = CONFIG.createFormUrl;
        });
    }

    static setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const popup = document.getElementById('imagePopup');
                if (popup?.classList.contains('active')) {
                    popup.classList.remove('active');
                }
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    if (!localStorage.getItem('disclaimerAccepted')) {
        PopupManager.createDisclaimerPopup();
    }

   
    PopupManager.createImagePopup();

    
    PinManager.displayPins(pins);
    PinManager.shufflePins(); 
    EventHandlers.setupSearch();
    EventHandlers.setupCreateButton();
    EventHandlers.setupKeyboardShortcuts();
});
