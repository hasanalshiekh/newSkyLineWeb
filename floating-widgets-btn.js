// Floating Widgets Button
function createFloatingWidgetsButton() {
    // Create the floating button
    const floatingBtn = document.createElement('div');
    floatingBtn.id = 'floating-widgets-btn';
    floatingBtn.innerHTML = `
        <div class="floating-btn-content">
            <i class="fas fa-puzzle-piece"></i>
            <span class="floating-btn-text">Widgets</span>
        </div>
    `;

    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = `
        #floating-widgets-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #8B0000, #A52A2A);
            border-radius: 50%;
            box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
            cursor: pointer;
            z-index: 10000;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        #floating-widgets-btn:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 12px 35px rgba(139, 0, 0, 0.4);
        }

        #floating-widgets-btn:active {
            transform: translateY(-2px) scale(1.05);
        }

        .floating-btn-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            transition: all 0.3s ease;
        }

        .floating-btn-content i {
            font-size: 1.5rem;
            margin-bottom: 2px;
            transition: all 0.3s ease;
        }

        .floating-btn-text {
            font-size: 0.7rem;
            font-weight: 600;
            font-family: 'Inter', sans-serif;
            opacity: 0.9;
            transition: all 0.3s ease;
        }

        #floating-widgets-btn:hover .floating-btn-content i {
            transform: rotate(15deg) scale(1.1);
        }

        #floating-widgets-btn:hover .floating-btn-text {
            opacity: 1;
            transform: translateY(-1px);
        }

        /* Pulse animation */
        @keyframes pulse {
            0% {
                box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
            }
            50% {
                box-shadow: 0 8px 25px rgba(139, 0, 0, 0.5), 0 0 0 10px rgba(139, 0, 0, 0.1);
            }
            100% {
                box-shadow: 0 8px 25px rgba(139, 0, 0, 0.3);
            }
        }

        #floating-widgets-btn.pulse {
            animation: pulse 2s infinite;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            #floating-widgets-btn {
                bottom: 20px;
                right: 20px;
                width: 55px;
                height: 55px;
            }

            .floating-btn-content i {
                font-size: 1.3rem;
            }

            .floating-btn-text {
                font-size: 0.6rem;
            }
        }

        /* Hide on very small screens */
        @media (max-width: 480px) {
            #floating-widgets-btn {
                bottom: 15px;
                right: 15px;
                width: 50px;
                height: 50px;
            }

            .floating-btn-text {
                display: none;
            }

            .floating-btn-content i {
                font-size: 1.2rem;
                margin-bottom: 0;
            }
        }
    `;

    // Add styles to head
    document.head.appendChild(style);

    // Add click event
    floatingBtn.addEventListener('click', function() {
        // Open accessibility pack instead of navigating to widgets page
        if (window.showAccessibilityPack) {
            window.showAccessibilityPack();
        } else {
            // Fallback: navigate to widgets page if accessibility pack is not loaded
            window.location.href = 'widgets.html';
        }
    });

    // Add hover effects
    floatingBtn.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });

    floatingBtn.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });

    // Add to body
    document.body.appendChild(floatingBtn);

    // Add entrance animation
    setTimeout(() => {
        floatingBtn.style.opacity = '0';
        floatingBtn.style.transform = 'translateY(100px) scale(0.5)';
        floatingBtn.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            floatingBtn.style.opacity = '1';
            floatingBtn.style.transform = 'translateY(0) scale(1)';
        }, 100);
    }, 500);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingWidgetsButton);
} else {
    createFloatingWidgetsButton();
}
