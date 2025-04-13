function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update the button to show current language
    const currentFlag = document.querySelector('.current-flag');
    const currentLangText = document.querySelector('.current-language');
    
    // Update flag
    currentFlag.src = `${lang}.png`;
    
    // Update text
    const langNames = {
        'ar': 'العربية',
        'en': 'English',
        'fr': 'Français',
        'de': 'Deutsch',
        'es': 'Español'
    };
    currentLangText.textContent = langNames[lang];
    
    // Apply translations
    applyTranslations();
    
    // Optional: Close the dropdown
    document.querySelector('.dropdown-content').style.display = 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language from localStorage or default
    const savedLang = localStorage.getItem('language') || 'ar';
    changeLanguage(savedLang);
});