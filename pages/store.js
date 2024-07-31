document.addEventListener('DOMContentLoaded', () => {
    const xpBalanceElement = document.getElementById('xp-balance');
    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    const themeButtons = document.querySelectorAll('.theme-btn');

    // Function to update the XP balance display
    const updateXPBalance = () => {
        xpBalanceElement.textContent = xpBalance;
    };

    // Function to set theme
    const setTheme = (themeName) => {
        const themeLink = document.getElementById('theme-link');
        themeLink.href = `${themeName}.css`;
        localStorage.setItem('selectedTheme', themeName);
    };

    // Function to handle theme purchase
    const handlePurchase = (button) => {
        const cost = parseInt(button.dataset.cost);
        const theme = button.dataset.theme;

        if (xpBalance >= cost) {
            xpBalance -= cost;
            updateXPBalance();
            localStorage.setItem(`purchased-${theme}`, true);
            alert(`Theme purchased successfully!`);

            button.disabled = true;
            button.nextElementSibling.disabled = false;
        } else {
            alert('Not enough XP to purchase this theme.');
        }
    };

    // Initialize the XP balance and purchased themes
    const initialize = () => {
        updateXPBalance();
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`).disabled = false;
        }

        purchaseButtons.forEach(button => {
            const theme = button.dataset.theme;
            if (localStorage.getItem(`purchased-${theme}`)) {
                button.disabled = true;
                button.nextElementSibling.disabled = false;
            }
        });
    };

    // Add event listeners to purchase buttons
    purchaseButtons.forEach(button => {
        button.addEventListener('click', () => handlePurchase(button));
    });

    // Add event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => setTheme(button.dataset.theme));
    });

    // Initialize on page load
    initialize();
});
