const pins = [
    { id: 1, imageUrl: './images/100_layers_of_shova.jpg', title: '100_layers_of_shova', description: '' },
    { id: 2, imageUrl: './images/adeeb_own_bully.jpg', title: 'adeeb_own_bully', description: '' },
    { id: 3, imageUrl: './images/afsheen_retard.jpg', title: 'afsheen_retard', description: '' },
    { id: 4, imageUrl: './images/ahyan_sigma_korbe.jpg', title: 'ahyan_sigma_korbe', description: '' },
    { id: 5, imageUrl: './images/araf_takku.jpg', title: 'araf_takku', description: '' },
    { id: 6, imageUrl: './images/ariyan_own_bully.jpg', title: 'ariyan_own_bully', description: '' },
    { id: 7, imageUrl: './images/arko_own_bully.jpg', title: 'arko_own_bully', description: '' },
    { id: 8, imageUrl: './images/atif_own_bully.jpg', title: 'atif_own_bully', description: '' },
    { id: 9, imageUrl: './images/ayaz_own_bully.jpg', title: 'ayaz_own_bully', description: '' },
    { id: 10, imageUrl: './images/ayman_default_pose.jpg', title: 'ayman_default_pose', description: '' },
    { id: 11, imageUrl: './images/ayman_gelo_palay.jpg', title: 'ayman_gelo_palay', description: '' },
    { id: 12, imageUrl: './images/ayman_own_bully.jpg', title: 'ayman_own_bully', description: '' },
    { id: 13, imageUrl: './images/baby_ruwayed.jpg', title: 'baby_ruwayed', description: '' },
    { id: 14, imageUrl: './images/boshir_own_bully.jpg', title: 'boshir_own_bully', description: '' },
    { id: 15, imageUrl: './images/chud_gaye_guru.jpg', title: 'chud_gaye_guru', description: '' },
    { id: 16, imageUrl: './images/elham_own_bully.jpg', title: 'elham_own_bully', description: '' },
    { id: 17, imageUrl: './images/enan_happy.jpg', title: 'enan_happy', description: '' },
    { id: 18, imageUrl: './images/faiyaz_own_bully.jpg', title: 'faiyaz_own_bully', description: '' },
    { id: 19, imageUrl: './images/hassan_emoji.jpg', title: 'hassan_emoji', description: '' },
    { id: 20, imageUrl: './images/ibrahim_own_bully.jpg', title: 'ibrahim_own_bully', description: '' },
    { id: 21, imageUrl: './images/ishmam_pookie.jpg', title: 'ishmam_pookie', description: '' },
    { id: 22, imageUrl: './images/ishtimam_own_bully.jpg', title: 'ishtimam_own_bully', description: '' },
    { id: 23, imageUrl: './images/jafran_own_bully.jpg', title: 'jafran_own_bully', description: '' },
    { id: 24, imageUrl: './images/khaled_own_bully.jpg', title: 'khaled_own_bully', description: '' },
    { id: 25, imageUrl: './images/lame_reaction.jpg', title: 'lame_reaction', description: '' },
    { id: 26, imageUrl: './images/mustaeen_own_bully.jpg', title: 'mustaeen_own_bully', description: '' },
    { id: 27, imageUrl: './images/nahi_dance.jpg', title: 'nahi_dance', description: '' },
    { id: 28, imageUrl: './images/nasif_bday_come.jpg', title: 'nasif_bday_come', description: '' },
    { id: 29, imageUrl: './images/nibir_own_bully.jpg', title: 'nibir_own_bully', description: '' },
    { id: 30, imageUrl: './images/nuraj_gyatt_to_be_kidding.jpg', title: 'nuraj_gyatt_to_be_kidding', description: '' },
    { id: 31, imageUrl: './images/nuraj_police_pookie.jpg', title: 'nuraj_police_pookie', description: '' },
    { id: 32, imageUrl: './images/nuraj_pookie_behaviour.jpg', title: 'nuraj_pookie_behaviour', description: '' },
    { id: 33, imageUrl: './images/raita_reaction.jpg', title: 'raita_reaction', description: '' },
    { id: 34, imageUrl: './images/raita_sigma.jpg', title: 'raita_sigma', description: '' },
    { id: 35, imageUrl: './images/rayyan_not_like_swim.jpg', title: 'rayyan_not_like_swim', description: '' },
    { id: 36, imageUrl: './images/ridman_high_on_air.jpg', title: 'ridman_high_on_air', description: '' },
    { id: 37, imageUrl: './images/ruwayed_baby_class_kore.jpg', title: 'ruwayed_baby_class_kore', description: '' },
    { id: 38, imageUrl: './images/ruwayed_own_bully.jpg', title: 'ruwayed_own_bully', description: '' },
    { id: 39, imageUrl: './images/safwan_gelo_palay.jpg', title: 'safwan_gelo_palay', description: '' },
    { id: 40, imageUrl: './images/tahia_goggle.jpg', title: 'tahia_goggle', description: '' },
    { id: 41, imageUrl: './images/tawqirun_checking_out.jpg', title: 'tawqirun_checking_out', description: '' },
    { id: 42, imageUrl: './images/tawqirun_gelo_palay.jpg', title: 'tawqirun_gelo_palay', description: '' },
    { id: 43, imageUrl: './images/tawqirun_own_bully.jpg', title: 'tawqirun_own_bully', description: '' },
    { id: 44, imageUrl: './images/zabid_gelo_palay.jpg', title: 'zabid_gelo_palay', description: '' },
    { id: 45, imageUrl: './images/zabid_not_lit.jpg', title: 'zabid_not_lit', description: '' },
    { id: 46, imageUrl: './images/zabid_own_bully.jpg', title: 'zabid_own_bully', description: '' },
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
                <h2>Important Notice</h2>
                <div class="disclaimer-text">
                    <h3>Ownership Disclaimer:</h3>
                    <p>All images featured on this website are not owned by the platform itself. Ownership and responsibility for uploaded images remain with the users.</p>
                    
                    <h3>User Responsibility:</h3>
                    <ul>
                        <li>Users must own the rights to any image they upload to the website.</li>
                        <li>If the image includes other individuals or belongs to someone else, users must obtain explicit consent and permission from the person(s) or rightful owner before uploading.</li>
                    </ul>
                    
                    <h3>Takedown Requests:</h3>
                    <p>If you believe an image infringes on your rights or was uploaded without proper consent, please reach out via Instagram at @ayman_brr11 to request its removal.</p>
                </div>
                <button class="accept-btn">Okay, I understand</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        popup.querySelector('.accept-btn').addEventListener('click', () => {
            popup.remove();
            localStorage.setItem('disclaimerAccepted', 'true');
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