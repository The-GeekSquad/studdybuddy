
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('loginModal');
    var openBtn = document.getElementById('openLoginBtn');
    var closeBtn = document.getElementById('closeLoginBtn');
    var tabLinks = document.getElementsByClassName('tablinks');
    var tabContents = document.getElementsByClassName('tabcontent');

    // Open modal
    openBtn.onclick = function() {
        modal.style.display = 'block';
    };

    // Close modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Switch between tabs
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', function() {
            for (let j = 0; j < tabContents.length; j++) {
                tabContents[j].classList.remove('active');
                tabLinks[j].classList.remove('active');
            }
            var tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            this.classList.add('active');
        });
    }

    // Set default active tab
    tabLinks[0].click();
});
