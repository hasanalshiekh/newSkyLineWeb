// Accessibility Pack - CSS and JavaScript functionality for the accessibility panel

// Add accessibility panel styles
const accessibilityStyles = document.createElement('style');
accessibilityStyles.textContent = `
    .accessibility-panel-overlay {
        position: fixed;
        bottom: 20px;
        right: -320px;
        width: 300px;
        height: 300px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        z-index: 10001;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        overflow-y: auto;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .accessibility-panel-overlay.active {
        right: 20px;
    }

    .accessibility-panel-content {
        background: transparent;
        border-radius: 0;
        width: 100%;
        max-width: none;
        max-height: 100%;
        overflow-y: auto;
        position: relative;
        animation: none;
        box-shadow: none;
        border: none;
    }

    .accessibility-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem;
        border-bottom: 1px solid #eee;
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        position: sticky;
        top: 0;
        z-index: 100;
        border-radius: 12px 12px 0 0;
    }

    .accessibility-panel-header h3 {
        margin: 0;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .accessibility-panel-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .accessibility-panel-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(90deg);
    }

    .accessibility-panel-body {
        padding: 0;
    }

    .accessibility-tabs {
        display: flex;
        background: #f8f9fa;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 65px;
        z-index: 99;
    }

    .tab-btn {
        flex: 1;
        padding: 0.5rem 0.3rem;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 500;
        color: #666;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
    }

    .tab-btn.active {
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        box-shadow: 0 2px 8px rgba(220, 20, 60, 0.3);
    }

    .tab-btn:hover:not(.active) {
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        color: #DC143C;
    }

    .tab-content {
        display: none;
        padding: 0.6rem;
    }
    
    .tab-content.active {
        display: block;
    }
    
    .accessibility-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.3rem;
    }

    .accessibility-tool {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 0.4rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .accessibility-tool:hover {
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        border-color: #DC143C;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(220, 20, 60, 0.3);
    }

    .accessibility-tool.active {
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        border-color: #DC143C;
        box-shadow: 0 2px 8px rgba(220, 20, 60, 0.3);
    }

    .tool-icon {
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }

    .tool-title {
        font-size: 0.6rem;
        font-weight: 600;
        line-height: 1.2;
        color: #333333;
    }

    .profiles-list, .language-list {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .profile-item, .language-item {
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 0.4rem 0.6rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .profile-item:hover, .language-item:hover {
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        border-color: #DC143C;
        transform: translateX(5px);
        box-shadow: 0 3px 12px rgba(220, 20, 60, 0.3);
    }

    .language-item.active {
        background: linear-gradient(135deg, #DC143C, #B22222);
        color: white;
        border-color: #DC143C;
        box-shadow: 0 2px 8px rgba(220, 20, 60, 0.3);
    }

    .profile-icon, .language-flag {
        font-size: 1rem;
    }

    .profile-title, .language-title {
        font-size: 0.7rem;
        font-weight: 600;
        color: #333333;
    }

    @keyframes slideInFromRight {
        from { 
            transform: translateX(100%);
            opacity: 0.8;
        }
        to { 
            transform: translateX(0);
            opacity: 1;
        }
    }

        /* Responsive design */
        @media (max-width: 768px) {
            .accessibility-panel-overlay {
                bottom: 10px;
                right: -100%;
                width: calc(100vw - 20px);
                height: 280px;
                border-radius: 12px;
            }
            
            .accessibility-panel-overlay.active {
                right: 10px;
            }
            
            /* Add backdrop for mobile */
            .accessibility-panel-overlay.active::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                z-index: -1;
            }
            
            .accessibility-panel-content {
                width: 100%;
                max-height: 100%;
            }

            .accessibility-panel-header {
                padding: 0.6rem 0.8rem;
            }

            .accessibility-panel-header h3 {
                font-size: 0.9rem;
            }

            .tab-content {
                padding: 0.8rem;
            }

            .accessibility-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 0.4rem;
            }

            .accessibility-tool {
                padding: 0.5rem;
            }

            .tool-icon {
                font-size: 1.1rem;
            }

            .tool-title {
                font-size: 0.65rem;
            }

            .tab-btn {
                padding: 0.5rem;
                font-size: 0.7rem;
            }

            .profile-item, .language-item {
                padding: 0.5rem 0.8rem;
            }

            .profile-title, .language-title {
                font-size: 0.8rem;
            }
        }
`;

// Accessibility functionality
function initializeAccessibilityPanel(panel) {
    document.head.appendChild(accessibilityStyles);

    // Get elements
    const closeBtn = panel.querySelector('.accessibility-panel-close');
    const overlay = panel.querySelector('.accessibility-panel-overlay');
    const tabBtns = panel.querySelectorAll('.tab-btn');
    const tabContents = panel.querySelectorAll('.tab-content');
    const accessibilityTools = panel.querySelectorAll('.accessibility-tool');
    const profileItems = panel.querySelectorAll('.profile-item');
    const languageItems = panel.querySelectorAll('.language-item');

    function closeAccessibilityPanel() {
        panel.classList.remove('active');
        setTimeout(() => {
            panel.remove();
            accessibilityStyles.remove();
        }, 400);
    }

    function switchTab(targetTab) {
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    }

    function activateTool(toolType, toolElement) {
        toolElement.classList.toggle('active');
        
        switch(toolType) {
            case 'sign-language':
                alert('🤟 Sign Language support activated!');
                break;
            case 'screen-reader':
                alert('💬 Screen Reader mode activated!');
                break;
            case 'contrast':
                document.body.style.filter = document.body.style.filter.includes('contrast') ? '' : 'contrast(150%)';
                break;
            case 'cursor':
                document.body.style.cursor = document.body.style.cursor === 'crosshair' ? 'default' : 'crosshair';
                break;
            case 'simple-font':
                document.body.style.fontFamily = document.body.style.fontFamily ? '' : 'Arial, sans-serif';
                break;
            case 'saturation':
                document.body.style.filter = document.body.style.filter.includes('saturate') ? '' : 'saturate(150%)';
                break;
            case 'letter-spacing':
                document.body.style.letterSpacing = document.body.style.letterSpacing ? '' : '2px';
                break;
            case 'word-spacing':
                document.body.style.wordSpacing = document.body.style.wordSpacing ? '' : '5px';
                break;
            case 'line-spacing':
                document.body.style.lineHeight = document.body.style.lineHeight ? '' : '2';
                break;
            case 'bigger-text':
                document.body.style.fontSize = document.body.style.fontSize ? '' : '1.2em';
                break;
            case 'highlight-links':
                const links = document.querySelectorAll('a');
                links.forEach(link => {
                    link.style.backgroundColor = link.style.backgroundColor ? '' : 'yellow';
                });
                break;
            case 'pause-animation':
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    el.style.animationPlayState = el.style.animationPlayState === 'paused' ? 'running' : 'paused';
                });
                break;
            case 'text-align':
                document.body.style.textAlign = document.body.style.textAlign === 'center' ? '' : 'center';
                break;
            case 'page-structure':
                alert('🗂️ Page Structure view activated!');
                break;
            case 'hide-images':
                const images = document.querySelectorAll('img');
                images.forEach(img => {
                    img.style.display = img.style.display === 'none' ? '' : 'none';
                });
                break;
        }
    }

    function activateProfile(profileType) {
        // Reset all styles first
        document.body.style.cssText = '';
        
        switch(profileType) {
            case 'visually-impaired':
                document.body.style.filter = 'contrast(150%) brightness(120%)';
                document.body.style.fontSize = '1.3em';
                alert('👁️ Visually Impaired profile activated!');
                break;
            case 'dyslexia':
                document.body.style.fontFamily = 'Arial, sans-serif';
                document.body.style.letterSpacing = '1px';
                document.body.style.lineHeight = '1.8';
                alert('🧠 Dyslexia-friendly profile activated!');
                break;
            case 'adhd':
                const allElements = document.querySelectorAll('*');
                allElements.forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
                alert('🎯 ADHD-friendly profile activated!');
                break;
            case 'seizure-epilepsy':
                document.body.style.filter = 'saturate(50%)';
                const allElementsSeizure = document.querySelectorAll('*');
                allElementsSeizure.forEach(el => {
                    el.style.animationPlayState = 'paused';
                });
                alert('🧠 Seizure-safe profile activated!');
                break;
            case 'color-blind':
                document.body.style.filter = 'grayscale(100%) contrast(120%)';
                alert('👁️ Color Blind friendly profile activated!');
                break;
            case 'cognitive-education':
                document.body.style.fontSize = '1.2em';
                document.body.style.lineHeight = '2';
                alert('🧩 Cognitive Education profile activated!');
                break;
            case 'impaired-mobility':
                alert('♿ Impaired Mobility profile activated!');
                break;
        }
    }

    function switchLanguage(lang) {
        languageItems.forEach(item => item.classList.remove('active'));
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        if (lang === 'ar') {
            document.body.style.direction = 'rtl';
            alert('🇸🇦 Arabic language activated!');
        } else {
            document.body.style.direction = 'ltr';
            alert('🇺🇸 English language activated!');
        }
    }

    // Event listeners
    closeBtn.addEventListener('click', closeAccessibilityPanel);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAccessibilityPanel();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAccessibilityPanel();
    });

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    accessibilityTools.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolType = tool.getAttribute('data-tool');
            activateTool(toolType, tool);
        });
    });

    profileItems.forEach(profile => {
        profile.addEventListener('click', () => {
            const profileType = profile.getAttribute('data-profile');
            activateProfile(profileType);
        });
    });

    languageItems.forEach(language => {
        language.addEventListener('click', () => {
            const lang = language.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Export the initialization function
window.initializeAccessibilityPanel = initializeAccessibilityPanel;
window.initializeAccessibilityPanel = initializeAccessibilityPanel;