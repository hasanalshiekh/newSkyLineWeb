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
            <div class="fab-item" id="fab-call" data-tooltip="Call Action">
                <i class="fas fa-phone"></i>
            </div>
            <div class="fab-item" id="fab-instagram" data-tooltip="Instagram">
                <i class="fab fa-instagram"></i>
            </div>
            <div class="fab-item" id="fab-linkedin" data-tooltip="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </div>
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

        #fab-call {
            background: linear-gradient(135deg, #007bff, #0056b3);
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
        }

        #fab-call:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(0, 123, 255, 0.6);
        }

        #fab-instagram {
            background: linear-gradient(135deg, #E4405F, #C13584, #833AB4, #F56040, #F77737);
            box-shadow: 0 6px 20px rgba(225, 48, 108, 0.4);
        }

        #fab-instagram:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(225, 48, 108, 0.6);
        }

        #fab-linkedin {
            background: linear-gradient(135deg, #0077B5, #005885);
            box-shadow: 0 6px 20px rgba(0, 119, 181, 0.4);
        }

        #fab-linkedin:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(0, 119, 181, 0.6);
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
            pointer-events: none;
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
        const fabCall = document.getElementById('fab-call');
        const fabInstagram = document.getElementById('fab-instagram');
        const fabLinkedin = document.getElementById('fab-linkedin');
        const fabWhatsapp = document.getElementById('fab-whatsapp');
        const fabAI = document.getElementById('fab-ai');
        const fabWidgets = document.getElementById('fab-widgets');

        // Check if all elements exist
        if (!fabMain || !fabMenu || !fabOverlay || !fabCall || !fabInstagram || !fabLinkedin || !fabWhatsapp || !fabAI || !fabWidgets) {
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

    // Call Action button
    fabCall.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Call Action button clicked!');
        const phoneNumber = "+962786669911"; // Jordan phone number
        const telUrl = `tel:${phoneNumber}`;
        window.location.href = telUrl;
        closeFAB();
    });

    // Instagram button
    fabInstagram.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Instagram button clicked!');
        const instagramUrl = 'https://www.instagram.com/skyline.i.s?igsh=Mjh1ZGFlenI4bXFo';
        window.open(instagramUrl, '_blank');
        closeFAB();
    });

    // LinkedIn button
    fabLinkedin.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('LinkedIn button clicked!');
        const linkedinUrl = 'https://www.linkedin.com/in/skyline-innovation-software-139248378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
        window.open(linkedinUrl, '_blank');
        closeFAB();
    });

    // WhatsApp button - Enhanced functionality
    fabWhatsapp.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('WhatsApp button clicked!');
        const phoneNumber = "+962771600663"; // Jordan WhatsApp number
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
        console.log('🤖 AI button clicked! Opening AI Assistant...');
        
        // Ensure FAB is closed first
        closeFAB();
        
        // Small delay to ensure FAB is closed before opening modal
        setTimeout(() => {
            // Create AI Assistant modal
            createAIModal();
            console.log('🤖 AI Modal created successfully');
        }, 100);
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
        console.log('🤖 AI button mousedown!');
    });
    
    // Additional touch support for AI button
    fabAI.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log('🤖 AI button touchstart!');
    });
    
    fabAI.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🤖 AI button touched! Opening AI Assistant...');
        
        // Ensure FAB is closed first
        closeFAB();
        
        // Small delay to ensure FAB is closed before opening modal
        setTimeout(() => {
            // Create AI Assistant modal
            createAIModal();
            console.log('🤖 AI Modal created successfully from touch');
        }, 100);
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
    console.log('🤖 Creating AI Modal...');
    
    // Remove existing modal if any
    const existingModal = document.getElementById('ai-modal');
    if (existingModal) {
        console.log('🤖 Removing existing AI modal...');
        existingModal.remove();
    }
    
    // Remove existing styles if any
    const existingStyles = document.querySelector('#ai-modal-styles');
    if (existingStyles) {
        existingStyles.remove();
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
    aiStyles.id = 'ai-modal-styles';
    aiStyles.textContent = `
        .ai-modal-overlay {
            position: fixed !important;
            top: 20px;
            right: -380px;
            width: 360px;
            height: 380px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            z-index: 10001 !important;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            overflow-y: auto;
            border: 1px solid rgba(0, 0, 0, 0.1);
            animation: slideInFromRight 0.3s ease;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            will-change: transform;
        }

        .ai-modal-overlay.active {
            right: 20px;
        }

        .ai-modal-content {
            background: transparent;
            border-radius: 0;
            width: 100%;
            max-width: none;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            animation: none;
            box-shadow: none;
            border: none;
            overflow-y: auto;
            position: relative;
        }

        .ai-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem;
            border-bottom: 1px solid #eee;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            color: white;
            border-radius: 12px 12px 0 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .ai-modal-header h3 {
            margin: 0;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
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

        @keyframes slideInFromRight {
            from { 
                transform: translateX(100%); 
                opacity: 0; 
            }
            to { 
                transform: translateX(0); 
                opacity: 1; 
            }
        }

        /* Tablet and Medium Screens */
        @media (max-width: 1024px) {
            .ai-modal-overlay {
                width: 350px;
                height: 370px;
                top: 15px;
                right: -370px;
            }
            
            .ai-modal-overlay.active {
                right: 15px;
            }
        }

        /* Mobile Screens */
        @media (max-width: 768px) {
            .ai-modal-overlay {
                width: 320px;
                height: 350px;
                top: 10px;
                right: -340px;
            }
            
            .ai-modal-overlay.active {
                right: 10px;
            }
            
            .ai-quick-actions {
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .ai-quick-btn {
                font-size: 0.75rem;
                padding: 0.4rem 0.6rem;
            }
        }

        /* Small Mobile Screens */
        @media (max-width: 480px) {
            .ai-modal-overlay {
                width: 300px;
                height: 320px;
                top: 5px;
                right: -320px;
            }
            
            .ai-modal-overlay.active {
                right: 5px;
            }
            
            .ai-modal-header h3 {
                font-size: 0.8rem;
            }
            
            .ai-input-container {
                padding: 0.8rem;
            }
            
            .ai-input-container input {
                font-size: 0.9rem;
                padding: 0.6rem;
            }
            
            .ai-quick-actions {
                padding: 0.6rem;
                gap: 0.4rem;
            }
            
            .ai-quick-btn {
                font-size: 0.7rem;
                padding: 0.3rem 0.5rem;
                flex: 1;
                min-width: 60px;
            }
        }

        /* Extra Small Mobile Screens */
        @media (max-width: 360px) {
            .ai-modal-overlay {
                width: 280px;
                height: 300px;
                top: 5px;
                right: -300px;
            }
            
            .ai-modal-overlay.active {
                right: 5px;
            }
            
            .ai-modal-header {
                padding: 0.6rem;
            }
            
            .ai-modal-header h3 {
                font-size: 0.75rem;
            }
            
            .ai-chat-container {
                padding: 0.6rem;
                max-height: 180px;
            }
            
            .ai-input-container {
                padding: 0.6rem;
            }
            
            .ai-input-container input {
                font-size: 0.85rem;
                padding: 0.5rem;
            }
            
            .ai-quick-actions {
                padding: 0.5rem;
                gap: 0.3rem;
            }
            
            .ai-quick-btn {
                font-size: 0.65rem;
                padding: 0.25rem 0.4rem;
            }
        }

        /* Ensure AI modal is always visible and accessible */
        .ai-modal-overlay {
            max-width: 95vw;
            max-height: 95vh;
        }

        /* Prevent AI modal from being hidden behind other elements */
        .ai-modal-overlay {
            z-index: 10001 !important;
        }
        
        /* Ensure no other elements interfere with AI modal */
        #fab-container {
            z-index: 10000 !important;
        }
        
        .accessibility-panel-overlay {
            z-index: 10000 !important;
        }

        /* Ensure proper positioning on all screen orientations */
        @media (orientation: landscape) and (max-height: 500px) {
            .ai-modal-overlay {
                height: 90vh;
                top: 5vh;
            }
        }

        /* High DPI displays support */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .ai-modal-overlay {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
            .ai-modal-overlay {
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            }
            
            .ai-quick-btn, .ai-modal-close, #ai-send {
                min-height: 44px;
                min-width: 44px;
            }
        }

        /* Ensure visibility on all browsers */
        .ai-modal-overlay {
            visibility: visible !important;
            opacity: 1 !important;
            display: block !important;
            position: fixed !important;
            z-index: 10001 !important;
        }

        .ai-modal-overlay.active {
            visibility: visible !important;
            opacity: 1 !important;
            display: block !important;
            position: fixed !important;
            z-index: 10001 !important;
            right: 20px !important;
            top: 20px !important;
        }

        /* Fallback for older browsers */
        .ai-modal-overlay {
            display: block;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }
        
        /* CSS Variables for Font Control */
        
        /* Accessibility Tools CSS */
        .simple-font {
            font-family: Arial, Helvetica, sans-serif !important;
        }
        
        .simple-font * {
            font-family: Arial, Helvetica, sans-serif !important;
        }
        
        /* Bigger Text CSS - Force all text to be bigger */
        .bigger-text * {
            font-size: 1.2em !important;
        }
        
        .bigger-text h1 {
            font-size: 3em !important;
        }
        
        .bigger-text h2 {
            font-size: 2.5em !important;
        }
        
        .bigger-text h3 {
            font-size: 2.2em !important;
        }
        
        .bigger-text h4 {
            font-size: 2em !important;
        }
        
        .bigger-text h5 {
            font-size: 1.8em !important;
        }
        
        .bigger-text h6 {
            font-size: 1.6em !important;
        }
        
        .bigger-text p, .bigger-text span, .bigger-text div {
            font-size: 1.4em !important;
        }
        
        .bigger-text a, .bigger-text button {
            font-size: 1.3em !important;
        }
        
        .bigger-text input, .bigger-text textarea, .bigger-text select {
            font-size: 1.3em !important;
        }
        
        .bigger-text strong, .bigger-text em, .bigger-text b, .bigger-text i {
            font-size: 1.4em !important;
        }
        
        .bigger-text small {
            font-size: 1.2em !important;
        }
        
        .bigger-text big {
            font-size: 1.6em !important;
        }
        
        .bigger-text blockquote {
            font-size: 1.4em !important;
        }
        
        .bigger-text cite {
            font-size: 1.3em !important;
        }
        
        .bigger-text code {
            font-size: 1.3em !important;
        }
        
        .bigger-text pre {
            font-size: 1.3em !important;
        }
        
        .bigger-text nav, .bigger-text header, .bigger-text footer {
            font-size: 1.3em !important;
        }
        
        .bigger-text main, .bigger-text section, .bigger-text article {
            font-size: 1.3em !important;
        }
        
        .bigger-text aside, .bigger-text details, .bigger-text summary {
            font-size: 1.3em !important;
        }
        
        .bigger-text figcaption, .bigger-text caption {
            font-size: 1.3em !important;
        }
        
        .bigger-text legend, .bigger-text fieldset {
            font-size: 1.3em !important;
        }
        
        .bigger-text optgroup, .bigger-text option {
            font-size: 1.3em !important;
        }
        
        .bigger-text li {
            font-size: 1.4em !important;
        }
        
        .bigger-text td, .bigger-text th {
            font-size: 1.3em !important;
        }
        
        .bigger-text label {
            font-size: 1.3em !important;
        }
        
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 4px rgba(220, 20, 60, 0.5);
            }
            50% {
                transform: scale(1.2);
                box-shadow: 0 0 8px rgba(220, 20, 60, 0.8);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 4px rgba(220, 20, 60, 0.5);
            }
        }
        
        @keyframes ripple {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
        
        @keyframes screenShake {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-2px); }
            20% { transform: translateX(2px); }
            30% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            50% { transform: translateX(-2px); }
            60% { transform: translateX(2px); }
            70% { transform: translateX(-2px); }
            80% { transform: translateX(2px); }
            90% { transform: translateX(-2px); }
        }
        
        
        .high-contrast {
            filter: contrast(150%) !important;
        }
        
        .highlight-links a {
            background-color: yellow !important;
            color: black !important;
            padding: 2px 4px !important;
            text-decoration: underline !important;
        }
        
        
        .pause-animations * {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
        }
        
        .hide-images img {
            display: none !important;
        }
        
        /* Reset Button Styles */
        .accessibility-reset {
            padding: 1rem;
            text-align: center;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .reset-btn {
            background: linear-gradient(135deg, #DC143C, #B22222);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .reset-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(220, 20, 60, 0.4);
        }
        
        .reset-btn:active {
            transform: translateY(0);
        }
    `;

    document.head.appendChild(aiStyles);
    document.body.appendChild(modal);

    // Force immediate visibility
    const overlay = modal.querySelector('.ai-modal-overlay');
    if (overlay) {
        overlay.style.display = 'block';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        overlay.style.position = 'fixed';
        overlay.style.zIndex = '10001';
        overlay.style.right = '20px';
        overlay.style.top = '20px';
        console.log('🤖 AI Modal overlay created and visible');
    }

    // Add active class after a small delay for animation
    setTimeout(() => {
        if (overlay) {
            overlay.classList.add('active');
            console.log('🤖 AI Modal opened successfully with animation');
            
            // Ensure visibility after animation
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
        }
    }, 10);

    // Ensure AI modal is properly positioned on all screen sizes
    function adjustAIModalPosition() {
        const overlay = modal.querySelector('.ai-modal-overlay');
        if (overlay) {
            // Force reflow to ensure proper positioning
            overlay.style.display = 'none';
            overlay.offsetHeight; // Trigger reflow
            overlay.style.display = 'block';
            
            // Ensure it's visible and on top
            overlay.style.zIndex = '10001';
            overlay.style.position = 'fixed';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            
        // Ensure no other elements interfere
        const fabContainer = document.getElementById('fab-container');
        if (fabContainer) {
            fabContainer.style.zIndex = '10000';
        }
        
        // Ensure AI modal is always on top
        overlay.style.zIndex = '10001';
        overlay.style.position = 'fixed';
        overlay.style.display = 'block';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
            
            console.log('🤖 AI Modal position adjusted for screen size:', window.innerWidth + 'x' + window.innerHeight);
        }
    }

    // Function to prevent interference from other elements
    function preventInterference() {
        const overlay = modal.querySelector('.ai-modal-overlay');
        if (overlay) {
            // Check for any elements that might interfere
            const interferingElements = document.querySelectorAll('[style*="z-index"]');
            interferingElements.forEach(el => {
                const zIndex = parseInt(el.style.zIndex) || 0;
                if (zIndex >= 10001 && el !== overlay) {
                    el.style.zIndex = '10000';
                    console.log('🤖 Lowered z-index of interfering element:', el.tagName);
                }
            });
            
            // Force AI modal to top
            overlay.style.zIndex = '10001';
            overlay.style.position = 'fixed';
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
        }
    }
    
    // Call preventInterference immediately
    preventInterference();

    // Adjust position on load and resize
    adjustAIModalPosition();
    
    // Force visibility after a short delay
    setTimeout(() => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
            console.log('🤖 AI Modal forced to be visible');
            
            // Ensure no other elements interfere
            const fabContainer = document.getElementById('fab-container');
            if (fabContainer) {
                fabContainer.style.zIndex = '10000';
            }
        }
    }, 100);
    
    // Listen for window resize to adjust position
    window.addEventListener('resize', adjustAIModalPosition);
    
    // Listen for orientation change on mobile
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustAIModalPosition, 500);
    });

    // AI Modal functionality
    const closeBtn = modal.querySelector('.ai-modal-close');
    const aiOverlay = modal.querySelector('.ai-modal-overlay');
    const input = modal.querySelector('#ai-input');
    const sendBtn = modal.querySelector('#ai-send');
    const quickBtns = modal.querySelectorAll('.ai-quick-btn');
    
    // Ensure all elements are found
    if (!closeBtn || !aiOverlay || !input || !sendBtn || !quickBtns.length) {
        console.error('🤖 AI Modal elements not found, retrying...');
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
            createAIModal();
        }, 500);
        return;
    }
    
    // Ensure AI modal is visible immediately
    if (overlay) {
        overlay.style.display = 'block';
        overlay.style.visibility = 'visible';
        overlay.style.opacity = '1';
        overlay.style.position = 'fixed';
        overlay.style.zIndex = '10001';
        overlay.style.right = '20px';
        overlay.style.top = '20px';
        overlay.classList.add('active');
        console.log('🤖 AI Modal elements found and made visible');
    }

    function closeAIModal() {
        console.log('🤖 Closing AI Modal...');
        overlay.classList.remove('active');
        
        // Remove event listeners to prevent memory leaks
        window.removeEventListener('resize', adjustAIModalPosition);
        window.removeEventListener('orientationchange', adjustAIModalPosition);
        
        // Clear the interval
        if (typeof keepModalOnTop !== 'undefined' && keepModalOnTop) {
            clearInterval(keepModalOnTop);
        }
        if (window.aiModalInterval) {
            clearInterval(window.aiModalInterval);
            window.aiModalInterval = null;
        }
        
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
            if (aiStyles.parentNode) {
                aiStyles.remove();
            }
            console.log('🤖 AI Modal closed and cleaned up');
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
            'contact': 'You can reach us through WhatsApp (click the green button), email us at info@skyline.com, or call us at +962 78 666 9911. We\'re available 24/7 to assist you.',
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
    aiOverlay.addEventListener('click', (e) => {
        if (e.target === aiOverlay) closeAIModal();
    });
    
    // Prevent event bubbling
    aiOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Ensure AI modal stays on top
    let keepModalOnTop = setInterval(() => {
        if (overlay && overlay.parentNode) {
            overlay.style.zIndex = '10001';
            overlay.style.position = 'fixed';
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            
            // Ensure no other elements interfere
            const fabContainer = document.getElementById('fab-container');
            if (fabContainer) {
                fabContainer.style.zIndex = '10000';
            }
        } else {
            clearInterval(keepModalOnTop);
        }
    }, 1000);
    
    // Store interval reference for cleanup
    window.aiModalInterval = keepModalOnTop;
    
    // Ensure AI modal is visible on page load
    window.addEventListener('load', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
            console.log('🤖 AI Modal made visible on page load');
        }
    });
    
    // Ensure AI modal is visible on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
            console.log('🤖 AI Modal made visible on DOM ready');
        }
    });
    
    // Ensure AI modal is visible on window focus
    window.addEventListener('focus', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
            console.log('🤖 AI Modal made visible on window focus');
        }
    });
    
    // Ensure AI modal is visible on scroll
    window.addEventListener('scroll', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on mouse move
    document.addEventListener('mousemove', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on click
    document.addEventListener('click', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on touch
    document.addEventListener('touchstart', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on keydown
    document.addEventListener('keydown', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on resize
    window.addEventListener('resize', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on orientation change
    window.addEventListener('orientationchange', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
    });
    
    // Ensure AI modal is visible on visibility change
    document.addEventListener('visibilitychange', () => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
        }
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
    setTimeout(() => {
        if (input) {
            input.focus();
        }
    }, 100);
    
    // Final check to ensure AI modal is visible
    setTimeout(() => {
        if (overlay) {
            overlay.style.display = 'block';
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
            overlay.style.position = 'fixed';
            overlay.style.zIndex = '10001';
            overlay.style.right = '20px';
            overlay.style.top = '20px';
            overlay.classList.add('active');
            console.log('🤖 AI Modal final visibility check completed');
            
            // Ensure no other elements interfere
            const fabContainer = document.getElementById('fab-container');
            if (fabContainer) {
                fabContainer.style.zIndex = '10000';
            }
            
            // Check for any interfering elements
            const interferingElements = document.querySelectorAll('[style*="z-index"]');
            interferingElements.forEach(el => {
                const zIndex = parseInt(el.style.zIndex) || 0;
                if (zIndex >= 10001 && el !== overlay) {
                    el.style.zIndex = '10000';
                    console.log('🤖 Lowered z-index of interfering element:', el.tagName);
                }
            });
        }
    }, 200);
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
                                <div class="tool-title" data-translate="accessibility.contrast">Contrast</div>
                            </div>
                            <div class="accessibility-tool" data-tool="simple-font">
                                <div class="tool-icon">Aa</div>
                                <div class="tool-title" data-translate="accessibility.simple-font">Simple Font</div>
                            </div>
                            <div class="accessibility-tool" data-tool="font-control" id="font-control-tool">
                                <div class="tool-icon">A</div>
                                <div class="tool-title">Font Size</div>
                            </div>
                            <div class="accessibility-tool" data-tool="highlight-links">
                                <div class="tool-icon">🔗</div>
                                <div class="tool-title" data-translate="accessibility.highlight-links">Highlight Links</div>
                            </div>
                            <div class="accessibility-tool" data-tool="pause-animation">
                                <div class="tool-icon">⏸️</div>
                                <div class="tool-title" data-translate="accessibility.pause-animation">Pause Animation</div>
                            </div>
                            <div class="accessibility-tool" data-tool="hide-images">
                                <div class="tool-icon">🖼️</div>
                                <div class="tool-title" data-translate="accessibility.hide-images">Hide Images</div>
                            </div>
                        </div>
                        <div class="accessibility-reset">
                            <button class="reset-btn" onclick="resetAllAccessibilityFeatures()">
                                <i class="fas fa-undo"></i> Reset All
                            </button>
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
        console.log('🔧 Initializing accessibility features...');
        initializeAccessibilityFeatures(panel);
        
        // Initialize font size counter
        if (!window.fontSizeCounter) {
            window.fontSizeCounter = 0;
        }
        
        // Initialize font control system
        window.fontControl = {
            currentScale: 1.0,
            minScale: 0.8,
            maxScale: 2.0,
            step: 0.1,
            storageKey: 'skyline_font_scale'
        };
        
        // Load saved font scale
        const savedScale = parseFloat(localStorage.getItem(window.fontControl.storageKey));
        if (savedScale && !isNaN(savedScale)) {
            window.fontControl.currentScale = Math.max(window.fontControl.minScale, Math.min(window.fontControl.maxScale, savedScale));
            applyFontScale(window.fontControl.currentScale);
        }
        
        
        
        
        
    
    
    // Add direct test button for simple font
    const testFontBtn = document.createElement('button');
    testFontBtn.textContent = 'TEST SIMPLE FONT';
    testFontBtn.style.cssText = `
        position: fixed;
        top: 150px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10002;
    `;
    testFontBtn.addEventListener('click', () => {
        console.log('🧪 TEST FONT BUTTON CLICKED - Calling toggleSimpleFont()');
        toggleSimpleFont();
    });
    document.body.appendChild(testFontBtn);
    
    // Add direct test button for reset
    const testResetBtn = document.createElement('button');
    testResetBtn.textContent = 'TEST RESET';
    testResetBtn.style.cssText = `
        position: fixed;
        top: 200px;
        right: 20px;
        background: #FF9800;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10002;
    `;
    testResetBtn.addEventListener('click', () => {
        console.log('🧪 TEST RESET BUTTON CLICKED - Calling resetAllAccessibilityFeatures()');
        resetAllAccessibilityFeatures();
    });
    document.body.appendChild(testResetBtn);
    }
}

// Enhanced Accessibility Features
function initializeAccessibilityFeatures(panel) {
    console.log('♿ Initializing Accessibility Features...');
    console.log('🔧 Panel HTML:', panel.innerHTML.substring(0, 200) + '...');

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
    console.log('🔧 Found accessibility tools:', tools.length);
    console.log('🔧 Tools found:', Array.from(tools).map(t => t.getAttribute('data-tool')));
    
    tools.forEach(tool => {
        const toolType = tool.getAttribute('data-tool');
        console.log('🔧 Adding event listener to tool:', toolType);
        
        tool.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔧 Tool clicked:', toolType, tool);
            console.log('🔧 Event details:', e);
            activateAccessibilityTool(toolType, tool);
        });
        
        // Add visual feedback on hover
        tool.addEventListener('mouseenter', () => {
            console.log('🔧 Tool hovered:', toolType);
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
    console.log('🔧 Element:', element);
    
    // Remove active state from all tools
    document.querySelectorAll('.accessibility-tool').forEach(t => t.classList.remove('active'));
    
    // Add active state to current tool
    element.classList.add('active');
    
    switch(toolType) {
        case 'contrast':
            console.log('🔧 Calling toggleHighContrast()');
            toggleHighContrast();
            break;
        case 'bigger-text':
            console.log('🔧 Processing bigger-text tool');
            console.log('🔧 Element classList:', element.classList);
            console.log('🔧 Element data-tool:', element.getAttribute('data-tool'));
            
            // Check if text is already enlarged
            const currentSize = parseInt(getComputedStyle(document.documentElement).fontSize) || 16;
            console.log('🔧 Current font size:', currentSize);
            
            if (currentSize > 16) {
                console.log('🔧 Calling resetTextSize()');
                resetTextSize();
            } else {
                console.log('🔧 Calling increaseTextSize()');
                increaseTextSize();
            }
            break;
        case 'simple-font':
            toggleSimpleFont();
            break;
        case 'font-control':
            openFontControlPage();
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

// Font Control Functions
function applyFontScale(scale) {
    const clampedScale = Math.max(window.fontControl.minScale, Math.min(window.fontControl.maxScale, scale));
    
    // Apply to document root
    document.documentElement.style.fontSize = `${clampedScale * 16}px`;
    
    // Apply to body
    document.body.style.fontSize = `${clampedScale * 16}px`;
    
    // Apply to all elements
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element !== document.documentElement && element !== document.body) {
            const computedStyle = getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            if (currentFontSize && !isNaN(currentFontSize)) {
                element.style.fontSize = `${currentFontSize * clampedScale}px`;
            }
        }
    });
    
    // Update display
    const scaleDisplay = document.getElementById('font-scale-display');
    if (scaleDisplay) {
        scaleDisplay.textContent = `${Math.round(clampedScale * 100)}%`;
    }
    
    // Save to localStorage
    localStorage.setItem(window.fontControl.storageKey, clampedScale.toString());
    
    // Update current scale
    window.fontControl.currentScale = clampedScale;
    
    console.log('📏 Applied font scale:', clampedScale);
}

function increaseFontSize() {
    const newScale = window.fontControl.currentScale + window.fontControl.step;
    if (newScale <= window.fontControl.maxScale) {
        applyFontScale(newScale);
        showToolFeedback(`Font size increased to ${Math.round(newScale * 100)}%`);
    } else {
        showToolFeedback('Maximum font size reached');
    }
}

function decreaseFontSize() {
    const newScale = window.fontControl.currentScale - window.fontControl.step;
    if (newScale >= window.fontControl.minScale) {
        applyFontScale(newScale);
        showToolFeedback(`Font size decreased to ${Math.round(newScale * 100)}%`);
    } else {
        showToolFeedback('Minimum font size reached');
    }
}

function resetFontSize() {
    applyFontScale(1.0);
    showToolFeedback('Font size reset to 100%');
}

function openFontControlPage() {
    console.log('🔤 Opening font control page...');
    
    // Open font control page in new tab
    const fontControlUrl = 'font-control.html';
    window.open(fontControlUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    
    // Show feedback
    showToolFeedback('Font control page opened in new tab');
    
    console.log('✅ Font control page opened successfully');
}




function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function increaseTextSize() {
    console.log('📏 increaseTextSize() function called!');
    console.log('📏 Document element:', document.documentElement);
    console.log('📏 Body element:', document.body);
    
    // Initialize font size counter if not exists
    if (!window.fontSizeCounter) {
        window.fontSizeCounter = 0; // 0 = default, 1 = +4px, 2 = +8px, etc.
    }
    
    // Increment counter
    window.fontSizeCounter++;
    
    // Calculate new font size based on counter
    const baseSize = 16;
    const increment = 4;
    const maxCounter = 4; // Maximum 4 increments (16px + 16px = 32px)
    
    if (window.fontSizeCounter > maxCounter) {
        window.fontSizeCounter = 0; // Reset to default
    }
    
    const newSize = baseSize + (window.fontSizeCounter * increment);
    const currentSize = parseInt(getComputedStyle(document.documentElement).fontSize) || 16;
    
    console.log('📏 Font size counter:', window.fontSizeCounter);
    console.log('📏 Current size:', currentSize, 'New size:', newSize);
    
    // Apply to document element (root) - this affects all rem units
    document.documentElement.style.fontSize = newSize + 'px';
    
    // Apply to body
    document.body.style.fontSize = newSize + 'px';
    
    // Add bigger-text class to body for CSS-based scaling
    document.body.classList.add('bigger-text');
    
    // Get ALL elements in the page
    const allElements = document.querySelectorAll('*');
    let processedElements = 0;
    
    allElements.forEach(element => {
        const computedStyle = getComputedStyle(element);
        const currentFontSize = parseInt(computedStyle.fontSize);
        
        // Increase font size for ALL elements that have text content
        if (currentFontSize > 0 && currentFontSize < 100) {
            const elementNewSize = Math.min(currentFontSize + 4, 40);
            element.style.fontSize = elementNewSize + 'px';
            processedElements++;
        }
    });
    
    // Force increase for specific text elements regardless of current size
    const textSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
        'p', 'span', 'div', 'a', 'li', 'td', 'th', 
        'label', 'button', 'input', 'textarea', 'select',
        'strong', 'em', 'b', 'i', 'u', 'small', 'big',
        'blockquote', 'cite', 'code', 'pre', 'kbd',
        'nav', 'header', 'footer', 'main', 'section', 'article',
        'aside', 'details', 'summary', 'figcaption', 'caption',
        'legend', 'fieldset', 'optgroup', 'option'
    ];
    
    textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const computedStyle = getComputedStyle(element);
            const currentFontSize = parseInt(computedStyle.fontSize);
            
            if (currentFontSize > 0) {
                const elementNewSize = Math.min(currentFontSize + 4, 42);
                element.style.fontSize = elementNewSize + 'px';
            }
        });
    });
    
    // Force increase for any element with text content
    const textNodes = document.querySelectorAll('*');
    textNodes.forEach(element => {
        if (element.textContent && element.textContent.trim().length > 0) {
            const computedStyle = getComputedStyle(element);
            const currentFontSize = parseInt(computedStyle.fontSize);
            
            if (currentFontSize > 0 && currentFontSize < 50) {
                const elementNewSize = Math.min(currentFontSize + 4, 38);
                element.style.fontSize = elementNewSize + 'px';
            }
        }
    });
    
    // Store the size for reset functionality
    if (!window.accessibilitySettings) window.accessibilitySettings = {};
    window.accessibilitySettings.textSize = newSize;
    window.accessibilitySettings.originalSizes = window.accessibilitySettings.originalSizes || {};
    
    // Force increase for any remaining text elements
    setTimeout(() => {
        const remainingElements = document.querySelectorAll('*');
        remainingElements.forEach(element => {
            if (element.textContent && element.textContent.trim().length > 0) {
                const computedStyle = getComputedStyle(element);
                const currentFontSize = parseInt(computedStyle.fontSize);
                
                if (currentFontSize > 0 && currentFontSize < 30) {
                    const elementNewSize = Math.min(currentFontSize + 4, 36);
                    element.style.fontSize = elementNewSize + 'px';
                }
            }
        });
        console.log('📏 Applied delayed text increase to remaining elements');
    }, 100);
    
    // Update counter in accessibility panel
    updateFontSizeCounter();
    
    // Add visual feedback
    const counterText = window.fontSizeCounter === 0 ? 'Default' : `Level ${window.fontSizeCounter}`;
    console.log('📢 Calling showToolFeedback with:', `Text size: ${counterText} (${newSize}px)`);
    showToolFeedback(`Text size: ${counterText} (${newSize}px)`);
    
    console.log('📏 Text size increased from', currentSize + 'px to', newSize + 'px');
    console.log('📏 Processed', processedElements, 'elements');
    console.log('📏 Applied to', allElements.length, 'total elements');
    console.log('📏 Added bigger-text class to body');
    console.log('📏 Body classes after:', document.body.classList.toString());
    console.log('📏 Document element font size after:', getComputedStyle(document.documentElement).fontSize);
    console.log('📏 Body font size after:', getComputedStyle(document.body).fontSize);
}

function resetTextSize() {
    // Reset font size counter
    window.fontSizeCounter = 0;
    
    // Reset to default size
    document.documentElement.style.fontSize = '16px';
    document.body.style.fontSize = '16px';
    
    // Remove bigger-text class from body
    document.body.classList.remove('bigger-text');
    
    // Reset all elements to their original font sizes
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        // Remove inline font-size styles to restore original CSS
        if (element.style.fontSize) {
            element.style.fontSize = '';
        }
    });
    
    // Clear stored size
    if (window.accessibilitySettings) {
        delete window.accessibilitySettings.textSize;
        delete window.accessibilitySettings.originalSizes;
    }
    
    // Update counter in accessibility panel
    updateFontSizeCounter();
    
    console.log('📢 Calling showToolFeedback with:', 'Text size reset to default');
    showToolFeedback('Text size reset to default');
    console.log('📏 Text size reset to default');
    console.log('📏 Font size counter reset to:', window.fontSizeCounter);
    console.log('📏 Reset', allElements.length, 'elements');
    console.log('📏 Removed bigger-text class from body');
}

function toggleSimpleFont() {
    const isActive = document.body.classList.contains('simple-font');
    
    if (isActive) {
        // Remove simple font
        document.body.classList.remove('simple-font');
        console.log('📢 Calling showToolFeedback with:', 'Simple font disabled');
        showToolFeedback('Simple font disabled');
        console.log('🔤 Simple font disabled');
    } else {
        // Add simple font
        document.body.classList.add('simple-font');
        console.log('📢 Calling showToolFeedback with:', 'Simple font enabled');
        showToolFeedback('Simple font enabled');
        console.log('🔤 Simple font enabled');
    }
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
    // Reset font size counter
    window.fontSizeCounter = 0;
    
    // Remove all accessibility classes
    const classesToRemove = [
        'high-contrast', 'simple-font', 'highlight-links', 
        'pause-animations', 'hide-images', 'visually-impaired',
        'dyslexia-friendly', 'color-blind-friendly', 'mobility-friendly',
        'bigger-text'
    ];
    
    classesToRemove.forEach(className => {
        document.body.classList.remove(className);
    });
    
    // Reset all elements to their original font sizes
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        // Remove inline font-size styles to restore original CSS
        if (element.style.fontSize) {
            element.style.fontSize = '';
        }
    });
    
    // Clear accessibility settings
    if (window.accessibilitySettings) {
        delete window.accessibilitySettings.textSize;
        delete window.accessibilitySettings.originalSizes;
    }
    
    // Remove accessibility styles
    const styleElement = document.getElementById('accessibility-styles');
    if (styleElement) {
        styleElement.remove();
    }
    
    // Reset any inline styles
    document.body.style.filter = '';
    document.body.style.cursor = '';
    document.body.style.letterSpacing = '';
    document.body.style.wordSpacing = '';
    
    // Update counter in accessibility panel
    updateFontSizeCounter();
    
    console.log('📢 Calling showToolFeedback with:', 'All accessibility features reset');
    showToolFeedback('All accessibility features reset');
    console.log('♿ All accessibility features reset');
    console.log('♿ Font size counter reset to:', window.fontSizeCounter);
    console.log('♿ Reset', allElements.length, 'elements');
    console.log('♿ Removed all accessibility classes');
}

// Feedback Functions
function showToolFeedback(toolType, element) {
    console.log('📢 Showing tool feedback:', toolType);
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
