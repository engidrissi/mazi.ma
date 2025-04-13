// loader.js - لتحميل الهيدر والفوتر ديناميكيًا
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الهيدر
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Initialize any header-specific scripts here
        })
        .catch(error => console.error('Error loading header:', error));

    // تحميل الفوتر
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});