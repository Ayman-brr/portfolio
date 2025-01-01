export function initializeSidePanel() {
    const panel = document.createElement('div');
    panel.className = 'side-panel';
    panel.innerHTML = `
        <div class="panel-content">
            <div class="panel-item">Create</div>
            <div class="panel-item">About</div>
            <div class="panel-item">Settings</div>
        </div>
    `;
    document.body.appendChild(panel);

    
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && !e.target.closest('.nav-icon')) {
            panel.classList.remove('active');
        }
    });

    return panel;
}

export function togglePanel(panel) {
    panel.classList.toggle('active');
}