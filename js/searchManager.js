// tuff (fyne shi fr)
function sortPinsByRelevance(pins, searchTerm) {
    if (!searchTerm) return pins;
    
    const searchLower = searchTerm.toLowerCase();
    return pins.filter(pin => {
        const titleMatch = pin.title.toLowerCase().includes(searchLower);
        const descMatch = pin.description.toLowerCase().includes(searchLower);
        return titleMatch || descMatch;
    }).sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().includes(searchLower);
        const bTitleMatch = b.title.toLowerCase().includes(searchLower);
        
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
        return 0;
    });
}

export function initializeSearch(searchBar, imageGrid, pins, addPin) {
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        
        
        imageGrid.innerHTML = '';
        
        const sortedPins = sortPinsByRelevance(pins, searchTerm);
        
       
        sortedPins.forEach(pin => {
            addPin(pin.imageUrl, pin.title, pin.description);
        });
    });
}