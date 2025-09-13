// Floating Action Button System
// Advanced FAB with WhatsApp, AI, and Widgets buttons

function createFloatingActionButton() {
    console.log('🚀 Creating Floating Action Button...');
 
    // Check if FAB already exists
    if (document.getElementById('fab-container')) {
        console.log('⚠️ FAB already exists, removing old one...');
        document.getElementById('fab-container').remove();
    }
 
    // Create FAB container
    const fabContainer = document.createElement('div');
    fabContainer.id = 'fab-container';
    fabContainer.innerHTML = `
        <div class="fab-main" id="fab-main" data-tooltip="Accessibility">
            <i class="fas fa-universal-access"></i>
        </div>
        <div class="fab-menu" id="fab-menu">
            <div class="fab-item" id="fab-whatsapp" data-tooltip="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </div>
            <div class="fab-item" id="fab-ai" data-tooltip="AI Assistant">
                <i class="fas fa-robot"></i>
            </div>
            <div class="fab-item" id="fab-widgets" data-tooltip="Accessibility Tools">
                <i class="fas fa-universal-access"></i>
            </div>
        </div>
        <div class="fab-overlay" id="fab-overlay"></div>
    `;

    // Add styles
    const fabStyles = document.createElement('style');
    fabStyles.textContent = `
        #fab-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 10000;
            font-family: 'Inter', sans-serif;
        }

        .fab-main {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #DC143C, #B22222);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 10002;
        }

        .fab-main:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(220, 20, 60, 0.6);
        }

        .fab-main i {
            color: white;
            font-size: 24px;
            transition: transform 0.3s ease;
        }

        .fab-main.active i {
            transform: rotate(180deg) scale(1.1);
        }

        .fab-menu {
            position: absolute;
            bottom: 70px;
            right: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 10001;
            pointer-events: none;
        }

        .fab-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
        }

        .fab-item {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            transform: scale(0);
            animation-delay: 0s;
            z-index: 10001;
            pointer-events: auto;
        }

        .fab-menu.active .fab-item {
            transform: scale(1);
            animation: fabItemAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .fab-menu.active .fab-item:nth-child(1) {
            animation-delay: 0.1s;
        }

        .fab-menu.active .fab-item:nth-child(2) {
            animation-delay: 0.2s;
        }

        .fab-menu.active .fab-item:nth-child(3) {
            animation-delay: 0.3s;
        }

        @keyframes fabItemAppear {
            0% {
                transform: scale(0) rotate(180deg);
                opacity: 0;
            }
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
        }

        #fab-whatsapp {
            background: linear-gradient(135deg, #25D366, #128C7E);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        #fab-whatsapp:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
        }

        #fab-ai {
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }

        #fab-ai:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
        }

        #fab-widgets {
            background: linear-gradient(135deg, #DC143C, #B22222);
            box-shadow: 0 6px 20px rgba(220, 20, 60, 0.4);
        }

        #fab-widgets:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(220, 20, 60, 0.6);
        }

        .fab-item i {
            color: white;
            font-size: 20px;
            transition: transform 0.3s ease;
        }

        .fab-item:hover i {
            transform: scale(1.2);
        }

        .fab-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 9998;
            pointer-events: none;
        }

        .fab-overlay.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        /* Tooltip styles */
        .fab-item::before,
        .fab-main::before {
            content: attr(data-tooltip);
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            pointer-events: none;
        }

        .fab-item::after {
            content: '';
            position: absolute;
            right: 50px;
            top: 50%;
            transform: translateY(-50%);
            border: 5px solid transparent;
            border-left-color: rgba(0, 0, 0, 0.8);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .fab-item:hover::before,
        .fab-item:hover::after,
        .fab-main:hover::before {
            opacity: 1;
            visibility: visible;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            #fab-container {
                bottom: 20px;
                right: 20px;
            }

            .fab-main {
                width: 55px;
                height: 55px;
            }

            .fab-main i {
                font-size: 22px;
            }

            .fab-item {
                width: 45px;
                height: 45px;
            }

            .fab-item i {
                font-size: 18px;
            }

            .fab-item::before {
                font-size: 11px;
                padding: 6px 10px;
            }
        }

        /* Pulse animation for main button */
        .fab-main.pulse {
            animation: fabPulse 2s infinite;
        }

        @keyframes fabPulse {
            0% {
                box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
            }
            50% {
                box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4), 0 0 0 10px rgba(220, 20, 60, 0.1);
            }
            100% {
                box-shadow: 0 8px 25px rgba(220, 20, 60, 0.4);
            }
        }
    `;

    document.head.appendChild(fabStyles);
    document.body.appendChild(fabContainer);

    // Initialize FAB functionality
    initializeFAB();
}

function initializeFAB() {
    // Wait for elements to be fully rendered
    setTimeout(() => {
        const fabMain = document.getElementById('fab-main');
        const fabMenu = document.getElementById('fab-menu');
        const fabOverlay = document.getElementById('fab-overlay');
        const fabWhatsapp = document.getElementById('fab-whatsapp');
        const fabAI = document.getElementById('fab-ai');
        const fabWidgets = document.getElementById('fab-widgets');

        // Check if all elements exist
        if (!fabMain || !fabMenu || !fabOverlay || !fabWhatsapp || !fabAI || !fabWidgets) {
            console.error('FAB elements not found, retrying...');
            setTimeout(initializeFAB, 500);
            return;
        }

        console.log('FAB elements found, initializing...');

        let isOpen = false;

        // Add success message
        console.log('✅ FAB initialized successfully!');

    // Toggle FAB menu
    function toggleFAB() {
        isOpen = !isOpen;
        
        if (isOpen) {
            fabMain.classList.add('active');
            fabMenu.classList.add('active');
            fabOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
            fabOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Close FAB menu
    function closeFAB() {
        if (isOpen) {
            isOpen = false;
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
            fabOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Event listeners
    fabMain.addEventListener('click', toggleFAB);
    fabOverlay.addEventListener('click', closeFAB);

    // WhatsApp button - Enhanced functionality
    fabWhatsapp.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('WhatsApp button clicked!');
        const phoneNumber = "+962791234567"; // Jordan WhatsApp number
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPage.replace('.html', '').replace('&', ' and ');
        const message = `Hello! I'm interested in SKYLINE's services. I'm currently viewing the ${pageName} page. Can you help me with more information?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeFAB();
    });

    // AI Assistant button - Enhanced functionality
    fabAI.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('AI button clicked!');
        // Create AI Assistant modal
        createAIModal();
        closeFAB();
    });

    // Widgets button - Enhanced functionality
    fabWidgets.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Widgets button clicked!');
        // Create accessibility tools panel
        createAccessibilityPanel();
        closeFAB();
    });

    // Add additional event listeners for better compatibility
    fabWhatsapp.addEventListener('mousedown', function(e) {
        e.preventDefault();
        console.log('WhatsApp button mousedown!');
    });

    fabAI.addEventListener('mousedown', function(e) {
        e.preventDefault();
        console.log('AI button mousedown!');
    });

    fabWidgets.addEventListener('mousedown', function(e) {
        e.preventDefault();
        console.log('Widgets button mousedown!');
    });

    // Ensure buttons are clickable (CSS handles this now)
    console.log('FAB buttons ready for interaction');

    // Add pulse animation on page load
    setTimeout(() => {
        fabMain.classList.add('pulse');
        setTimeout(() => {
            fabMain.classList.remove('pulse');
        }, 4000);
    }, 2000);

    // Close FAB when clicking outside
    document.addEventListener('click', function(e) {
        if (isOpen && !e.target.closest('#fab-container')) {
            closeFAB();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isOpen) {
            closeFAB();
        }
    });

    }, 500); // Close setTimeout
}

// Initialize FAB when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if FAB already exists
    if (!document.getElementById('fab-container')) {
        createFloatingActionButton();
    }
});

// Also try to initialize after a delay to ensure everything is loaded
setTimeout(() => {
    if (!document.getElementById('fab-container')) {
        console.log('FAB not found, creating...');
        createFloatingActionButton();
    }
}, 1000);

// Enhanced AI Assistant Modal
function createAIModal() {
    // Remove existing modal if any
    const existingModal = document.getElementById('ai-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'ai-modal';
    modal.innerHTML = `
        <div class="ai-modal-overlay">
            <div class="ai-modal-content">
                <div class="ai-modal-header">
                    <h3><i class="fas fa-robot"></i> AI Assistant</h3>
                    <button class="ai-modal-close">&times;</button>
                </div>
                <div class="ai-modal-body">
                    <div class="ai-chat-container">
                        <div class="ai-message">
                            <div class="ai-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="ai-text">
                                <p>Hello! I'm SKYLINE's AI Assistant. How can I help you today?</p>
                            </div>
                        </div>
                    </div>
                    <div class="ai-input-container">
                        <input type="text" id="ai-input" placeholder="Ask me anything about our services...">
                        <button id="ai-send"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
                <div class="ai-modal-footer">
                    <div class="ai-quick-actions">
                        <button class="ai-quick-btn" data-query="Tell me about your services">Services</button>
                        <button class="ai-quick-btn" data-query="What are your prices?">Pricing</button>
                        <button class="ai-quick-btn" data-query="How can I contact you?">Contact</button>
                        <button class="ai-quick-btn" data-query="Show me your portfolio">Portfolio</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add AI modal styles
    const aiStyles = document.createElement('style');
    aiStyles.textContent = `
        .ai-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            animation: fadeIn 0.3s ease;
        }

        .ai-modal-content {
            background: white;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
        }

        .ai-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            color: white;
            border-radius: 15px 15px 0 0;
        }

        .ai-modal-header h3 {
            margin: 0;
            font-size: 1.2rem;
        }

        .ai-modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.3s ease;
        }

        .ai-modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        .ai-modal-body {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }

        .ai-chat-container {
            min-height: 200px;
            margin-bottom: 20px;
        }

        .ai-message {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 15px;
        }

        .ai-avatar {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex-shrink: 0;
        }

        .ai-text {
            background: #f5f5f5;
            padding: 12px 16px;
            border-radius: 15px;
            max-width: 80%;
        }

        .ai-text p {
            margin: 0;
            color: #333;
        }

        .ai-input-container {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        #ai-input {
            flex: 1;
            padding: 12px 16px;
            border: 2px solid #eee;
            border-radius: 25px;
            outline: none;
            font-size: 14px;
            transition: border-color 0.3s ease;
        }

        #ai-input:focus {
            border-color: #DC143C;
        }

        #ai-send {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
        }

        #ai-send:hover {
            transform: scale(1.1);
        }

        .ai-modal-footer {
            padding: 20px;
            border-top: 1px solid #eee;
        }

        .ai-quick-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .ai-quick-btn {
            padding: 8px 16px;
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 20px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .ai-quick-btn:hover {
            background: #DC143C;
            color: white;
            border-color: #DC143C;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 768px) {
            .ai-modal-content {
                width: 95%;
                margin: 20px;
            }
            
            .ai-quick-actions {
                justify-content: center;
            }
        }
    `;

    document.head.appendChild(aiStyles);
    document.body.appendChild(modal);

    // AI Modal functionality
    const closeBtn = modal.querySelector('.ai-modal-close');
    const overlay = modal.querySelector('.ai-modal-overlay');
    const input = modal.querySelector('#ai-input');
    const sendBtn = modal.querySelector('#ai-send');
    const quickBtns = modal.querySelectorAll('.ai-quick-btn');

    function closeAIModal() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            aiStyles.remove();
        }, 300);
    }

    function sendMessage(message) {
        const chatContainer = modal.querySelector('.ai-chat-container');
        const userMessage = document.createElement('div');
        userMessage.className = 'ai-message';
        userMessage.innerHTML = `
            <div class="ai-avatar" style="background: linear-gradient(135deg, #4ECDC4, #44A08D);">
                <i class="fas fa-user"></i>
            </div>
            <div class="ai-text">
                <p>${message}</p>
            </div>
        `;
        chatContainer.appendChild(userMessage);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = document.createElement('div');
            aiResponse.className = 'ai-message';
            aiResponse.innerHTML = `
                <div class="ai-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="ai-text">
                    <p>${getAIResponse(message)}</p>
                </div>
            `;
            chatContainer.appendChild(aiResponse);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);

        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function getAIResponse(message) {
        const responses = {
            'services': 'We offer comprehensive software solutions including web development, mobile apps, AI & Machine Learning, cybersecurity, and cloud infrastructure. Our team specializes in cutting-edge technologies to transform your business.',
            'pricing': 'Our pricing is customized based on your specific needs and project requirements. We offer competitive rates and flexible payment plans. Contact us for a detailed quote tailored to your project.',
            'contact': 'You can reach us through WhatsApp (click the green button), email us at info@skyline.com, or call us at +962 79 123 4567. We\'re available 24/7 to assist you.',
            'portfolio': 'Check out our latest projects and case studies on our website. We\'ve successfully delivered solutions for various industries including healthcare, finance, e-commerce, and more.'
        };

        const lowerMessage = message.toLowerCase();
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }

        return 'Thank you for your question! Our team will get back to you shortly. In the meantime, feel free to explore our services or contact us directly for immediate assistance.';
    }

    // Event listeners
    closeBtn.addEventListener('click', closeAIModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAIModal();
    });

    sendBtn.addEventListener('click', () => {
        const message = input.value.trim();
        if (message) {
            sendMessage(message);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = input.value.trim();
            if (message) {
                sendMessage(message);
                input.value = '';
            }
        }
    });

    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const query = btn.getAttribute('data-query');
            sendMessage(query);
        });
    });

    // Focus input
    setTimeout(() => input.focus(), 100);
}

// Enhanced Accessibility Tools Panel
function createAccessibilityPanel() {
    // Remove existing panel if any
    const existingPanel = document.getElementById('accessibility-panel');
    if (existingPanel) {
        existingPanel.remove();
    }

    const panel = document.createElement('div');
    panel.id = 'accessibility-panel';
    panel.className = 'accessibility-panel-overlay';
    panel.innerHTML = `
            <div class="accessibility-panel-content">
                <div class="accessibility-panel-header">
                    <h3><i class="fas fa-universal-access"></i> Accessibility Tools</h3>
                    <button class="accessibility-panel-close">&times;</button>
                </div>
                <div class="accessibility-panel-body">
                    <div class="accessibility-tabs">
                        <button class="tab-btn active" data-tab="tools">
                            <i class="fas fa-tools"></i> Tools
                        </button>
                        <button class="tab-btn" data-tab="profiles">
                            <i class="fas fa-user-cog"></i> Profiles
                        </button>
                        <button class="tab-btn" data-tab="translate">
                            <i class="fas fa-language"></i> Translate
                        </button>
                    </div>

                    <div class="tab-content active" id="tools-tab">
                        <div class="accessibility-grid">
                            <div class="accessibility-tool" data-tool="contrast">
                                <div class="tool-icon">☀️</div>
                                <div class="tool-title">Contrast</div>
                            </div>
                            <div class="accessibility-tool" data-tool="bigger-text">
                                <div class="tool-icon">T+</div>
                                <div class="tool-title">Bigger Text</div>
                            </div>
                            <div class="accessibility-tool" data-tool="simple-font">
                                <div class="tool-icon">Aa</div>
                                <div class="tool-title">Simple Font</div>
                            </div>
                            <div class="accessibility-tool" data-tool="highlight-links">
                                <div class="tool-icon">🔗</div>
                                <div class="tool-title">Links</div>
                            </div>
                            <div class="accessibility-tool" data-tool="pause-animation">
                                <div class="tool-icon">⏸️</div>
                                <div class="tool-title">Pause</div>
                            </div>
                            <div class="accessibility-tool" data-tool="hide-images">
                                <div class="tool-icon">🖼️</div>
                                <div class="tool-title">Images</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="profiles-tab">
                        <div class="profiles-list">
                            <div class="profile-item" data-profile="visually-impaired">
                                <div class="profile-icon">👁️</div>
                                <div class="profile-title">Visually Impaired</div>
                            </div>
                            <div class="profile-item" data-profile="dyslexia">
                                <div class="profile-icon">🧠</div>
                                <div class="profile-title">Dyslexia</div>
                            </div>
                            <div class="profile-item" data-profile="color-blind">
                                <div class="profile-icon">🌈</div>
                                <div class="profile-title">Color Blind</div>
                            </div>
                            <div class="profile-item" data-profile="impaired-mobility">
                                <div class="profile-icon">♿</div>
                                <div class="profile-title">Motor Impaired</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-content" id="translate-tab">
                        <div class="language-list">
                            <div class="language-item active" data-lang="en">
                                <div class="language-flag">🇺🇸</div>
                                <div class="language-title">English</div>
                            </div>
                            <div class="language-item" data-lang="ar">
                                <div class="language-flag">🇸🇦</div>
                                <div class="language-title">Arabic</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize the accessibility panel
    if (window.initializeAccessibilityPanel) {
        document.body.appendChild(panel);
        // Add active class after a small delay for animation
        setTimeout(() => {
            panel.classList.add('active');
        }, 10);
        window.initializeAccessibilityPanel(panel);
    } else {
        // Fallback if accessibility-pack.js is not loaded
        document.body.appendChild(panel);
        // Add active class after a small delay for animation
        setTimeout(() => {
            panel.classList.add('active');
        }, 10);
        const closeBtn = panel.querySelector('.accessibility-panel-close');
        const overlay = panel.querySelector('.accessibility-panel-overlay');
        
        function closeAccessibilityPanel() {
            panel.remove();
        }
        
        closeBtn.addEventListener('click', closeAccessibilityPanel);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeAccessibilityPanel();
        });
        
        // Enhanced accessibility functionality
        initializeAccessibilityFeatures(panel);
    }
}

// Enhanced Accessibility Features
function initializeAccessibilityFeatures(panel) {
    console.log('♿ Initializing Accessibility Features...');

    // Tab functionality
    const tabBtns = panel.querySelectorAll('.tab-btn');
    const tabContents = panel.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            console.log('📑 Tab clicked:', tabName);

            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            btn.classList.add('active');
            const targetTab = document.getElementById(tabName + '-tab');
            if (targetTab) {
                targetTab.classList.add('active');
                console.log('✅ Tab activated:', tabName);
            } else {
                console.log('❌ Tab not found:', tabName + '-tab');
            }
        });
    });

    // Accessibility Tools
    const tools = panel.querySelectorAll('.accessibility-tool');
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            const toolType = tool.getAttribute('data-tool');
            activateAccessibilityTool(toolType, tool);
        });
    });

    // Profile Items
    const profiles = panel.querySelectorAll('.profile-item');
    console.log('🔍 Found profiles:', profiles.length);
    profiles.forEach(profile => {
        profile.addEventListener('click', () => {
            const profileType = profile.getAttribute('data-profile');
            console.log('👤 Profile clicked:', profileType);
            activateAccessibilityProfile(profileType, profile);
        });
    });

    // Language Items
    const languages = panel.querySelectorAll('.language-item');
    console.log('🔍 Found languages:', languages.length);
    languages.forEach(lang => {
        lang.addEventListener('click', () => {
            const langType = lang.getAttribute('data-lang');
            console.log('🌐 Language clicked:', langType);
            activateLanguage(langType, lang);
        });
    });
}

// Activate Accessibility Tool
function activateAccessibilityTool(toolType, element) {
    console.log('🔧 Activating tool:', toolType);
    
    // Remove active state from all tools
    document.querySelectorAll('.accessibility-tool').forEach(t => t.classList.remove('active'));
    
    // Add active state to current tool
    element.classList.add('active');
    
    switch(toolType) {
        case 'contrast':
            toggleHighContrast();
            break;
        case 'bigger-text':
            increaseTextSize();
            break;
        case 'simple-font':
            toggleSimpleFont();
            break;
        case 'highlight-links':
            toggleLinkHighlighting();
            break;
        case 'pause-animation':
            togglePauseAnimations();
            break;
        case 'hide-images':
            toggleHideImages();
            break;
    }
    
    // Show feedback
    showToolFeedback(toolType, element);
}

// Activate Accessibility Profile
function activateAccessibilityProfile(profileType, element) {
    console.log('👤 Activating profile:', profileType);
    
    // Remove active state from all profiles
    document.querySelectorAll('.profile-item').forEach(p => p.classList.remove('active'));
    
    // Add active state to current profile
    element.classList.add('active');
    
    // Reset all accessibility features first
    resetAllAccessibilityFeatures();
    
    switch(profileType) {
        case 'visually-impaired':
            activateVisuallyImpairedProfile();
            break;
        case 'dyslexia':
            activateDyslexiaProfile();
            break;
        case 'color-blind':
            activateColorBlindProfile();
            break;
        case 'impaired-mobility':
            activateMotorImpairedProfile();
            break;
    }
    
    showProfileFeedback(profileType, element);
}

// Activate Language
function activateLanguage(langType, element) {
    console.log('🌐 Activating language:', langType);
    
    // Remove active state from all languages
    document.querySelectorAll('.language-item').forEach(l => l.classList.remove('active'));
    
    // Add active state to current language
    element.classList.add('active');
    
    // Change page language direction and text
    if (langType === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.classList.add('rtl-mode');
    } else {
        document.body.style.direction = 'ltr';
        document.body.classList.remove('rtl-mode');
    }
    
    showLanguageFeedback(langType, element);
}

// Accessibility Tool Functions
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function increaseTextSize() {
    const currentSize = parseInt(getComputedStyle(document.documentElement).fontSize);
    const newSize = currentSize + 2;
    document.documentElement.style.fontSize = newSize + 'px';
    
    // Store the size for reset functionality
    if (!window.accessibilitySettings) window.accessibilitySettings = {};
    window.accessibilitySettings.textSize = newSize;
}

function toggleSimpleFont() {
    document.body.classList.toggle('simple-font');
}

function toggleLinkHighlighting() {
    document.body.classList.toggle('highlight-links');
}

function togglePauseAnimations() {
    document.body.classList.toggle('pause-animations');
}

function toggleHideImages() {
    document.body.classList.toggle('hide-images');
}

// Profile Functions
function activateVisuallyImpairedProfile() {
    increaseTextSize();
    toggleLinkHighlighting();
    
    addAccessibilityStyle(`
        .visually-impaired {
            font-size: 1.2em !important;
            line-height: 1.6 !important;
        }
        .visually-impaired a {
            text-decoration: underline !important;
            font-weight: bold !important;
        }
    `);
}

function activateDyslexiaProfile() {
    document.body.classList.add('dyslexia-friendly');
    toggleSimpleFont();
    
    addAccessibilityStyle(`
        .dyslexia-friendly {
            font-family: 'OpenDyslexic', 'Comic Sans MS', cursive !important;
            letter-spacing: 0.1em !important;
            word-spacing: 0.2em !important;
            line-height: 1.8 !important;
        }
    `);
}

function activateColorBlindProfile() {
    document.body.classList.add('color-blind-friendly');
    
    addAccessibilityStyle(`
        .color-blind-friendly {
            filter: contrast(1.2) saturate(1.5);
        }
        .color-blind-friendly a {
            text-decoration: underline !important;
        }
    `);
}

function activateMotorImpairedProfile() {
    document.body.classList.add('mobility-friendly');
    toggleLinkHighlighting();
    
    addAccessibilityStyle(`
        .mobility-friendly a, .mobility-friendly button {
            padding: 15px 20px !important;
            margin: 10px !important;
            min-height: 44px !important;
            display: inline-block !important;
        }
    `);
}

// Utility Functions
function addAccessibilityStyle(css) {
    const styleId = 'accessibility-styles';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
    }
    
    styleElement.textContent += css;
}

function resetAllAccessibilityFeatures() {
    // Remove all accessibility classes
    const classesToRemove = [
        'high-contrast', 'simple-font', 'highlight-links', 
        'pause-animations', 'hide-images', 'visually-impaired',
        'dyslexia-friendly', 'color-blind-friendly', 'mobility-friendly'
    ];
    
    classesToRemove.forEach(className => {
        document.body.classList.remove(className);
    });
    
    // Reset text size
    if (window.accessibilitySettings && window.accessibilitySettings.textSize) {
        document.documentElement.style.fontSize = '16px';
        delete window.accessibilitySettings.textSize;
    }
    
    // Remove accessibility styles
    const styleElement = document.getElementById('accessibility-styles');
    if (styleElement) {
        styleElement.remove();
    }
}

// Feedback Functions
function showToolFeedback(toolType, element) {
    const feedback = document.createElement('div');
    feedback.textContent = `✅ ${toolType} activated!`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10001;
        font-weight: bold;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

function showProfileFeedback(profileType, element) {
    const feedback = document.createElement('div');
    feedback.textContent = `👤 ${profileType} profile activated!`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2196F3;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10001;
        font-weight: bold;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

function showLanguageFeedback(langType, element) {
    const feedback = document.createElement('div');
    feedback.textContent = `🌐 Language changed to ${langType}!`;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #FF9800;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 10001;
        font-weight: bold;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

// Export for use in other files
window.FloatingActionButton = {
    create: createFloatingActionButton,
    createWhatsAppModal: createWhatsAppModal,
    createAIModal: createAIModal,
    createAccessibilityPanel: createAccessibilityPanel
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createFloatingActionButton();
});
