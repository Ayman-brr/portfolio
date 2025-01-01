// loader
export function createPin(imageUrl, title, description) {
    const pinContainer = document.createElement('div');
    pinContainer.className = 'pin-container';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.loading = 'lazy'; // Add lazy loading for better performance

    const pinContent = document.createElement('div');
    pinContent.className = 'pin-content';

    const pinTitle = document.createElement('div');
    pinTitle.className = 'pin-title';
    pinTitle.textContent = title;

    const pinDescription = document.createElement('div');
    pinDescription.className = 'pin-description';
    pinDescription.textContent = description;

    pinContent.appendChild(pinTitle);
    pinContent.appendChild(pinDescription);
    pinContainer.appendChild(img);
    pinContainer.appendChild(pinContent);

    return pinContainer;
}

// type shi
export function addPin(imageUrl, title, description) {
    const imageGrid = document.getElementById('imageGrid');
    const pin = createPin(imageUrl, title, description);
    imageGrid.appendChild(pin);
}