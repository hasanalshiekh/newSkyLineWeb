// Navbar Include Script
// This script embeds the navbar content directly and includes it in the current page

function includeNavbar() {
    // Add Font Awesome CDN if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fontAwesomeLink = document.createElement('link');
        fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
        fontAwesomeLink.rel = 'stylesheet';
        fontAwesomeLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontAwesomeLink);
    }
    
    // Create a container for the navbar
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar-container';
    
    // Add the navbar styles to the head if they don't exist
    if (!document.querySelector('#navbar-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'navbar-styles';
        styleElement.textContent = getNavbarStyles();
        document.head.appendChild(styleElement);
    }
    
    // Create the navbar HTML
    const navbarHTML = getNavbarHTML();
    navbarContainer.innerHTML = navbarHTML;
    
    // Add the container to the body at the beginning
    document.body.insertBefore(navbarContainer, document.body.firstChild);
    
    // Initialize navbar functionality
    initializeNavbarFunctionality();
}

function getNavbarStyles() {
    return `
        /* Header - Same as index.html */
        .header {
            background: linear-gradient(135deg, #DC143C 0%, #B22222 30%, #B22222 70%, #DC143C 100%);
            backdrop-filter: blur(20px);
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 99999;
            box-shadow:
                0 8px 32px rgba(220, 20, 60, 0.3),
                0 0 20px rgba(220, 20, 60, 0.2);
            transition: all 0.4s ease;
            overflow: visible;
            display: block;
            visibility: visible;
            opacity: 1;
        }

        .header.scrolled {
            background: linear-gradient(135deg, rgba(220, 20, 60, 0.75) 0%, rgba(178, 34, 34, 0.75) 50%, rgba(220, 20, 60, 0.75) 100%) !important;
            backdrop-filter: blur(25px) !important;
            box-shadow: 0 8px 32px rgba(220, 20, 60, 0.25), 0 0 20px rgba(220, 20, 60, 0.15) !important;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        .header.scrolled .nav-menu a {
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }

        .header.scrolled .logo {
            opacity: 0.95;
            transition: opacity 0.3s ease;
        }

        .header.scrolled .portal-btn {
            opacity: 0.9;
            transition: opacity 0.3s ease;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg,
                    transparent,
                    rgba(255, 255, 255, 0.1),
                    transparent);
            animation: navbarShimmer 4s ease-in-out infinite;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg,
                    transparent,
                    #fff,
                    rgba(255, 255, 255, 0.5),
                    #fff,
                    transparent);
            animation: borderGlow 3s ease-in-out infinite;
        }

        @keyframes navbarShimmer {
            0% {
                left: -100%;
            }

            50% {
                left: 100%;
            }

            100% {
                left: 100%;
            }
        }

        @keyframes borderGlow {
            0%, 100% {
                opacity: 0.3;
            }

            50% {
                opacity: 1;
            }
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
            overflow: visible;
        }

        /* Portal Access Button */
        .portal-access {
            margin-left: 1rem;
        }

        .portal-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            border-radius: 50%;
            color: white !important;
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);
            position: relative;
            overflow: hidden;
        }

        .portal-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 50%;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s ease;
        }

        .portal-btn:hover {
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 25px rgba(196, 30, 58, 0.5);
            background: linear-gradient(135deg, #FF8E8E, #DC143C);
        }

        .portal-btn:hover::before {
            opacity: 1;
            transform: scale(1);
        }

        .portal-btn:active {
            transform: translateY(-1px) scale(1.05);
        }

        .portal-btn i {
            z-index: 2;
            position: relative;
        }

        /* Portal Mobile Link */
        .portal-mobile-link {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(139, 0, 0, 0.2)) !important;
            border: 2px solid rgba(196, 30, 58, 0.3) !important;
            border-radius: 15px !important;
            margin: 0.5rem 1rem !important;
        }

        .portal-mobile-link:hover {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.3), rgba(139, 0, 0, 0.3)) !important;
            border-color: rgba(196, 30, 58, 0.6) !important;
            transform: translateX(12px) scale(1.05) !important;
        }

        .portal-mobile-link .icon {
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(196, 30, 58, 0.4));
        }

        /* Mobile Menu Button - Same as index.html */
        .mobile-menu-btn {
            display: none !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
            padding: 8px;
            z-index: 10001;
            position: relative;
            border-radius: 8px;
            transition: all 0.3s ease;
            gap: 4px;
        }

        .mobile-menu-btn:hover {
            transform: scale(1.1);
        }

        .mobile-menu-btn span {
            width: 24px;
            height: 3px;
            background: white;
            border-radius: 2px;
            transition: all 0.3s ease;
            display: block;
            position: relative;
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Mobile Side Navigation - Same as index.html */
        .mobile-sidenav {
            display: none !important;
            position: fixed;
            top: 0;
            left: -280px;
            width: 280px;
            height: 100vh;
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%);
            backdrop-filter: blur(20px);
            z-index: 99998;
            transition: all 0.4s ease;
            padding-top: 80px;
            box-shadow: 2px 0 20px rgba(0, 0, 0, 0.5);
            overflow-y: auto;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav.active {
            left: 0 !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav li {
            margin: 0;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav a {
            display: flex !important;
            align-items: center;
            padding: 1.2rem 1.5rem;
            color: white;
            text-decoration: none;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            margin: 0.5rem 1rem;
            border-radius: 15px;
            border-left: 3px solid transparent;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .mobile-sidenav a::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .mobile-sidenav a:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateX(8px);
            border-left-color: #DC143C;
        }

        .mobile-sidenav a:hover::before {
            left: 100%;
        }

        .mobile-sidenav .icon {
            font-size: 1.8rem;
            width: 45px;
            text-align: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* تأثيرات hover للأيقونات في الموبايل مثل index.html */
        .mobile-sidenav a:hover .icon {
            transform: scale(1.2) rotate(5deg);
            filter: drop-shadow(0 4px 8px rgba(139, 0, 0, 0.4));
        }

        .mobile-sidenav .label {
            font-size: 1rem;
            font-weight: 700;
            margin-left: 0.8rem;
            opacity: 1;
            transform: translateX(0);
            transition: all 0.3s ease;
            white-space: nowrap;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block !important;
            visibility: visible !important;
        }

        /* تأثيرات hover للنصوص في الموبايل مثل index.html */
        .mobile-sidenav a:hover .label {
            background: linear-gradient(45deg, #fff, #DC143C, #fff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transform: translateX(3px);
        }

        /* Mobile Overlay - Same as index.html */
        .mobile-overlay {
            display: none !important;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            z-index: 99997;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .mobile-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .logo {
            font-size: 2rem;
            font-weight: 700;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            z-index: 3;
        }

        .logo-sky {
            color: #DC143C;
            font-weight: 800;
            font-size: 2.2rem;
            text-shadow:
                0 0 10px rgba(220, 20, 60, 0.5),
                0 0 20px rgba(220, 20, 60, 0.3),
                0 2px 4px rgba(0, 0, 0, 0.3);
            animation: logoGlow 2s ease-in-out infinite alternate;
        }

        .logo-yline {
            color: #fff;
            font-weight: 700;
            font-size: 2.2rem;
            text-shadow:
                0 0 10px rgba(255, 255, 255, 0.3),
                0 0 15px rgba(255, 255, 255, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
        }

        /* Header state when scrolled */
        .header.scrolled {
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 50%, rgba(139, 0, 0, 0.95) 100%) !important;
            box-shadow: 0 8px 32px rgba(139, 0, 0, 0.4), 0 0 20px rgba(139, 0, 0, 0.3) !important;
        }

        /* Logo state when scrolled */
        .header.scrolled .logo-yline {
            color: #000 !important;
            text-shadow:
                0 0 10px rgba(0, 0, 0, 0.3),
                0 0 15px rgba(0, 0, 0, 0.2),
                0 2px 4px rgba(0, 0, 0, 0.5) !important;
        }

        .logo-tagline {
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
            font-weight: 400;
            margin-left: 0.5rem;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            line-height: 1.2;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
        }

        @keyframes logoGlow {
            0% {
                text-shadow:
                    0 0 10px rgba(139, 0, 0, 0.5),
                    0 0 20px rgba(139, 0, 0, 0.3),
                    0 2px 4px rgba(0, 0, 0, 0.3);
            }

            100% {
                text-shadow:
                    0 0 15px rgba(139, 0, 0, 0.8),
                    0 0 25px rgba(139, 0, 0, 0.5),
                    0 2px 4px rgba(0, 0, 0, 0.3);
            }
        }

        .nav-menu {
            display: flex !important;
            list-style: none;
            gap: 0rem;
            position: relative;
            z-index: 3;
            overflow: visible;
            visibility: visible !important;
            opacity: 1 !important;
            align-items: center;
        }

        .nav-menu li {
            position: relative;
            overflow: visible;
            display: flex !important;
            align-items: center;
            visibility: visible !important;
            opacity: 1 !important;
        }

        .nav-menu a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
        }

        .nav-menu a::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
            border-radius: 25px;
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity, transform;
        }

        .nav-menu a:hover {
            color: #fff;
            transform: translateY(-2px);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
        }

        .nav-menu a:hover::before {
            opacity: 1;
            transform: scale(1);
        }

        /* تحسين رابط Home - Same as index.html */
        .home-link {
            background: none !important;
            border: none !important;
            font-weight: 700 !important;
            position: relative;
            overflow: hidden;
            display: inline-block !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: rgba(255, 255, 255, 0.9) !important;
            text-decoration: none !important;
            font-size: 1rem !important;
            padding: 0.5rem 1rem !important;
            border-radius: 25px !important;
            transition: all 0.4s ease !important;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
        }

        .home-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
        }

        .home-link:hover::before {
            left: 100%;
        }

        .home-link:hover {
            background: none !important;
            border: none !important;
            transform: translateY(-2px) scale(1.05) !important;
            box-shadow: none !important;
        }

        /* Dropdown Styles */
        .dropdown {
            position: relative;
            overflow: visible;
        }

        .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .dropdown-toggle i {
            font-size: 0.8rem;
            transition: transform 0.3s ease;
        }

        .dropdown:hover .dropdown-toggle {
            color: #fff;
            transform: translateY(-2px);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            box-shadow: none;
        }

        .dropdown:hover .dropdown-toggle i {
            transform: rotate(180deg);
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            padding: 1rem 0;
            margin: 0.5rem 0 0 0;
            min-width: 250px;
            box-shadow:
                0 10px 30px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(139, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 10005;
            border: 1px solid rgba(255, 255, 255, 0.1);
            pointer-events: none;
            list-style: none;
        }

        .dropdown:hover .dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
            pointer-events: auto !important;
        }

        .dropdown-menu li {
            margin: 0;
            list-style: none;
        }

        .dropdown-menu a {
            display: block;
            padding: 0.8rem 1.5rem;
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            border-radius: 0;
            position: relative;
            overflow: hidden;
            white-space: nowrap;
        }

        .dropdown-menu a:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            transform: translateX(5px);
            padding-left: 2rem;
            text-decoration: none;
        }

        .dropdown-menu a:hover::after {
            content: '→';
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #C41E3A;
            font-weight: bold;
        }


        /* Mobile Dropdown Styles */
        .mobile-dropdown {
            position: relative;
        }

        .mobile-dropdown-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0.2rem 0;
            cursor: default;
            position: relative;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: none;
            touch-action: manipulation;
            z-index: 10;
        }

        /* تأثيرات hover للأزرار المنسدلة في الموبايل مثل index.html */
        .mobile-dropdown-toggle:hover {
            background: rgba(255, 255, 255, 0.05);
        }

        .mobile-dropdown.active .mobile-dropdown-toggle {
            background: rgba(196, 30, 58, 0.1);
            color: #C41E3A;
        }
        
        .mobile-dropdown-toggle a {
            pointer-events: auto;
            flex: 1;
            text-decoration: none;
        }

        .dropdown-arrow {
            font-size: 0.8rem;
            transition: all 0.3s ease;
            cursor: pointer;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            pointer-events: auto;
            touch-action: manipulation;
            padding: 0.4rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.9);
            min-width: 32px;
            min-height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.2);
            position: relative;
            z-index: 10;
        }

        /* تأثيرات hover للأسهم المنسدلة في الموبايل مثل index.html */
        .dropdown-arrow:hover {
            background: rgba(255, 255, 255, 0.25);
            color: #C41E3A;
            transform: scale(1.1);
            border-color: rgba(196, 30, 58, 0.3);
        }

        .dropdown-arrow:active {
            transform: scale(0.95);
            background: rgba(196, 30, 58, 0.2);
        }

        .mobile-dropdown.active .dropdown-arrow {
            transform: rotate(180deg);
            color: #C41E3A;
            background: rgba(196, 30, 58, 0.2);
            border-color: rgba(196, 30, 58, 0.4);
        }

        .mobile-dropdown-menu {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            background: rgba(0, 0, 0, 0.25);
            margin: 0.5rem 1rem 0;
            border-radius: 10px;
            border-left: 3px solid #DC143C;
            opacity: 0;
            visibility: hidden;
            backdrop-filter: blur(15px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .mobile-dropdown.active .mobile-dropdown-menu {
            max-height: 300px;
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .mobile-dropdown-menu li {
            margin: 0;
        }

        .mobile-dropdown-menu a {
            padding: 0.8rem 1rem 0.8rem 2.5rem;
            margin: 0.2rem 0.5rem;
            border-radius: 8px;
            font-size: 0.85rem;
            background: rgba(255, 255, 255, 0.08);
            border-left: 3px solid transparent;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-height: 38px;
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            /* تحسينات للتفاعل مع اللمس */
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        /* تأثيرات hover للقوائم المنسدلة في الموبايل مثل index.html */
        .mobile-dropdown-menu a:hover {
            background: rgba(196, 30, 58, 0.1);
            border-left-color: #C41E3A;
            transform: translateX(3px);
            color: #C41E3A;
        }

        /* تحسين رابط Home في الموبايل - Same as index.html */
        .home-mobile-item .home-mobile-link {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(139, 0, 0, 0.2)) !important;
            border: 2px solid rgba(196, 30, 58, 0.3) !important;
            font-weight: 700 !important;
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            color: white !important;
            text-decoration: none !important;
            padding: 1.2rem 1.5rem !important;
            margin: 0.5rem 1rem !important;
            border-radius: 15px !important;
            border-left: 3px solid transparent !important;
            transition: all 0.4s ease !important;
        }

        /* تأثيرات hover لرابط Home في الموبايل مثل index.html */
        .home-mobile-item .home-mobile-link:hover {
            background: linear-gradient(135deg, rgba(196, 30, 58, 0.3), rgba(139, 0, 0, 0.3)) !important;
            border-color: rgba(196, 30, 58, 0.6) !important;
            transform: translateX(8px) scale(1.02) !important;
        }

        .home-mobile-item .home-mobile-link .icon {
            background: linear-gradient(135deg, #FF6B6B, #DC143C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 2px 4px rgba(196, 30, 58, 0.4));
        }

        /* Custom Scrollbar for Mobile Dropdown */
        .mobile-dropdown-menu::-webkit-scrollbar {
            width: 6px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-thumb {
            background: rgba(139, 0, 0, 0.6);
            border-radius: 3px;
        }

        .mobile-dropdown-menu::-webkit-scrollbar-thumb:hover {
            background: rgba(139, 0, 0, 0.8);
        }

        /* Large Desktop */
        @media (max-width: 1200px) {
            .nav-menu {
                gap: 1.5rem;
            }
            
            .nav-menu a {
                padding: 0.7rem 1.1rem;
                font-size: 0.95rem;
            }
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
            .nav-menu {
                gap: 1.2rem;
            }
            
            .nav-menu a {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
        }

        /* Small Tablet */
        @media (max-width: 900px) {
            .nav-menu {
                gap: 1rem;
            }
            
            .nav-menu a {
                padding: 0.5rem 0.8rem;
                font-size: 0.85rem;
            }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .nav-menu {
                display: none !important;
            }

            .mobile-menu-btn {
                display: flex !important;
            }

            .mobile-sidenav {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .mobile-overlay {
                display: block !important;
                pointer-events: auto;
            }

            .logo {
                font-size: 1.5rem;
            }

            .logo-sky, .logo-yline {
                font-size: 1.8rem;
            }

            .logo-tagline {
                display: none;
            }
            
            /* تحسينات إضافية للموبايل */
            .nav-container {
                padding: 0 1rem;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                width: 100% !important;
            }
            
            .header {
                display: block !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                z-index: 9999 !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* تحسين حجم زر الموبايل */
            .mobile-menu-btn {
                width: 35px;
                height: 30px;
            }
            
            .mobile-menu-btn span {
                height: 3px;
            }
            
            /* تقليل ارتفاع الهيدر الإجمالي */
            .header {
                min-height: 60px;
            }
        }
        
        /* تحسينات للشاشات الصغيرة جداً */
        @media (max-width: 480px) {
            .nav-container {
                padding: 0.2rem 0.6rem !important;
            }
            
            .logo {
                font-size: 1.1rem !important;
            }
            
            .logo-sky, .logo-yline {
                font-size: 1.3rem !important;
            }
            
            .mobile-sidenav {
                width: 260px !important;
                left: -260px !important;
                padding-top: 3px !important;
            }
            
            .mobile-menu-btn {
                width: 35px !important;
                height: 30px !important;
            }
            
            .mobile-menu-btn span {
                width: 18px !important;
                height: 2px !important;
            }
            
            /* تقليل المسافة العلوية أكثر للشاشات الصغيرة */
            body {
                padding-top: 50px !important;
            }
            
            .header {
                padding: 0.3rem 0 !important;
                min-height: 45px !important;
            }
        }
        
        /* تحسينات للشاشات المتوسطة (تابلت) */
        @media (min-width: 769px) and (max-width: 1024px) {
            .nav-menu {
                gap: 1.5rem;
            }
            
            .nav-menu a {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
            
            .logo {
                font-size: 1.8rem;
            }
            
            .logo-sky, .logo-yline {
                font-size: 2rem;
            }
        }

        /* Add padding to body to account for fixed header */
        body {
            padding-top: 80px;
        }

        /* Reduce top padding on mobile for better content visibility */
        @media (max-width: 768px) {
            body {
                padding-top: 60px !important;
            }
            
            .mobile-sidenav {
                padding-top: 5px !important;
            }
            
            /* تقليل ارتفاع الهيدر في الموبايل */
            .header {
                padding: 0.4rem 0 !important;
                min-height: 50px !important;
            }
            
            /* تقليل المسافة العلوية للكونتينر */
            .nav-container {
                padding: 0.3rem 1rem !important;
            }
            
            /* تحسين عرض المحتوى */
            .logo {
                font-size: 1.2rem !important;
            }
            
            .logo-sky, .logo-yline {
                font-size: 1.4rem !important;
            }
            
            /* تحسين زر الموبايل */
            .mobile-menu-btn {
                width: 40px !important;
                height: 35px !important;
            }
            
            .mobile-menu-btn span {
                width: 20px !important;
                height: 2px !important;
            }
        }
        
        /* تحسينات للشاشات التي تدعم اللمس */
        .touch-device .mobile-menu-btn {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        .touch-device .mobile-sidenav a {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        .touch-device .dropdown-arrow {
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
        }
        
        /* تحسينات للشاشات عالية الدقة */
        .high-dpi .mobile-menu-btn span {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        
        .high-dpi .mobile-sidenav {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
        
        /* تحسينات للأداء */
        .mobile-menu-btn,
        .mobile-sidenav,
        .mobile-overlay {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
    `;
}

function getNavbarHTML() {
    return `
        <!-- Header -->
        <header class="header">
            <nav class="nav-container">
                <a href="index.html" class="logo">
                    <span class="logo-sky">SK</span><span class="logo-yline">YLINE</span>
                    <span class="logo-tagline">Innovation Software</span>
                </a>

                <ul class="nav-menu">
                    <li><a href="index.html" class="home-link">Home</a></li>
                    <li class="dropdown">
                        <a href="about.html" class="dropdown-toggle">About <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="about.html#company-profile">Company Profile</a></li>
                            <li><a href="about.html#vision-mission">Vision & Mission</a></li>
                            <li><a href="about.html#leadership">Leadership Team</a></li>
                            <li><a href="about.html#values">Our Values</a></li>
                            <li><a href="about.html#partners">Strategic Partners</a></li>
                            <li><a href="about.html#alliances">Strategic Alliances</a></li>
                            <li><a href="about.html#clients">Our Clients</a></li>
                            <li><a href="testimonials-case-studies.html">Testimonials & Case Studies</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="products&solutions.html" class="dropdown-toggle">Products & Solutions <i
                                class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="products&solutions.html">Our Products & Solutions</a></li>
                            <li><a href="products&solutions.html#software-solutions">Software Solutions</a></li>
                            <li><a href="saas-programs.html">SaaS Programs</a></li>
                            <li><a href="products&solutions.html#demo">Book Your Demo</a></li>
                            <li><a href="products&solutions.html#videos">Product Videos</a></li>
                            <li><a href="download-center.html">Download Center</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="iso-consulting.html" class="dropdown-toggle">ISO Consulting <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="iso-consulting.html">All ISO Standards</a></li>
                            <li><a href="iso-consulting.html#iso-9001">ISO 9001 - Quality Management</a></li>
                            <li><a href="iso-consulting.html#iso-27001">ISO 27001 - Information Security</a></li>
                            <li><a href="iso-consulting.html#iso-14001">ISO 14001 - Environmental</a></li>
                            <li><a href="iso-consulting.html#iso-45001">ISO 45001 - Health & Safety</a></li>
                            <li><a href="iso-consulting.html#contact">Get Consultation</a></li>
                        </ul>
                    </li>
                    <li><a href="events-news.html">Events & News</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li class="portal-access">
                        <a href="client-portal-access.html" class="portal-btn" title="Client Portal Access">
                            <i class="fas fa-user-shield"></i>
                        </a>
                    </li>
                </ul>

                <!-- Mobile Menu Button -->
                <div class="mobile-menu-btn" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>

        <!-- Mobile Side Navigation -->
        <aside class="mobile-sidenav" id="mobileSidenav">
            <ul>
                <li class="mobile-dropdown home-mobile-item">
                    <div class="mobile-dropdown-toggle">
                        <a href="index.html" class="dropdown-link home-mobile-link"><span class="icon">🏠</span><span
                                class="label">Home</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="index.html#industries"><span class="icon">🏢</span><span
                                    class="label">Industries</span></a></li>
                        <li><a href="index.html#services"><span class="icon">💡</span><span class="label">Why Choose
                                    Us</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="about.html" class="dropdown-link"><span class="icon">👥</span><span class="label">About</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="about.html#company-profile"><span class="icon">🏢</span><span class="label">Company Profile</span></a></li>
                        <li><a href="about.html#vision-mission"><span class="icon">🎯</span><span class="label">Vision & Mission</span></a></li>
                        <li><a href="about.html#leadership"><span class="icon">👑</span><span class="label">Leadership Team</span></a></li>
                        <li><a href="about.html#values"><span class="icon">💎</span><span class="label">Our Values</span></a></li>
                        <li><a href="about.html#partners"><span class="icon">🤝</span><span class="label">Strategic Partners</span></a></li>
                        <li><a href="about.html#alliances"><span class="icon">⚡</span><span class="label">Strategic Alliances</span></a></li>
                        <li><a href="about.html#clients"><span class="icon">👥</span><span class="label">Our Clients</span></a></li>
                        <li><a href="testimonials-case-studies.html"><span class="icon">⭐</span><span class="label">Testimonials & Case Studies</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown products-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="products&solutions.html" class="dropdown-link"><span class="icon">🛠️</span><span
                                class="label">Products & Solutions</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="products&solutions.html"><span class="icon">📦</span><span class="label">Our Products &
                                    Solutions</span></a></li>
                        <li><a href="products&solutions.html#software-solutions"><span class="icon">💻</span><span
                                    class="label">Software Solutions</span></a></li>
                        <li><a href="saas-programs.html"><span class="icon">☁️</span><span class="label">SaaS Programs</span></a></li>
                        <li><a href="products&solutions.html#demo"><span class="icon">🎬</span><span class="label">Book Your
                                    Demo</span></a></li>
                        <li><a href="products&solutions.html#videos"><span class="icon">🎥</span><span class="label">Product
                                    Videos</span></a></li>
                        <li><a href="download-center.html"><span class="icon">⬇️</span><span class="label">Download
                                    Center</span></a></li>
                    </ul>
                </li>
                <li class="mobile-dropdown">
                    <div class="mobile-dropdown-toggle">
                        <a href="iso-consulting.html" class="dropdown-link"><span class="icon">🏆</span><span class="label">ISO Consulting</span></a>
                        <span class="dropdown-arrow">▼</span>
                    </div>
                    <ul class="mobile-dropdown-menu">
                        <li><a href="iso-consulting.html"><span class="icon">📋</span><span class="label">All ISO Standards</span></a></li>
                        <li><a href="iso-consulting.html#iso-9001"><span class="icon">🥇</span><span class="label">ISO 9001 - Quality</span></a></li>
                        <li><a href="iso-consulting.html#iso-27001"><span class="icon">🔒</span><span class="label">ISO 27001 - Security</span></a></li>
                        <li><a href="iso-consulting.html#iso-14001"><span class="icon">🌱</span><span class="label">ISO 14001 - Environmental</span></a></li>
                        <li><a href="iso-consulting.html#iso-45001"><span class="icon">⛑️</span><span class="label">ISO 45001 - Safety</span></a></li>
                        <li><a href="iso-consulting.html#contact"><span class="icon">💬</span><span class="label">Get Consultation</span></a></li>
                    </ul>
                </li>
                <li><a href="events-news.html"><span class="icon">📰</span><span class="label">Events & News</span></a></li>
                <li><a href="contact-us.html"><span class="icon">📞</span><span class="label">Contact Us</span></a></li>
                <li><a href="client-portal-access.html" class="portal-mobile-link"><span class="icon">🔐</span><span class="label">Client Portal</span></a></li>
            </ul>
        </aside>

        <!-- Mobile Overlay -->
        <div class="mobile-overlay" id="mobileOverlay"></div>
    `;
}

function initializeNavbarFunctionality() {
    // Mobile navigation functionality
    const mobileSidenav = document.getElementById('mobileSidenav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    function toggleMobileSidenav() {
        if (!mobileSidenav || !mobileOverlay || !mobileMenuBtn) {
            console.error('Mobile menu elements not found');
            console.log('mobileSidenav:', mobileSidenav);
            console.log('mobileOverlay:', mobileOverlay);
            console.log('mobileMenuBtn:', mobileMenuBtn);
            return;
        }

        const isActive = mobileSidenav.classList.contains('active');
        console.log('Toggling mobile menu. Current state:', isActive ? 'open' : 'closed');

        if (isActive) {
            // Close menu
            mobileSidenav.classList.remove('active');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
            
            // Force hide
            mobileSidenav.style.visibility = 'hidden';
            mobileSidenav.style.opacity = '0';
            mobileSidenav.style.left = '-280px';
            
            // Close all mobile dropdowns when closing menu
            mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            console.log('Mobile menu closed');
        } else {
            // Open menu
            mobileSidenav.classList.add('active');
            mobileOverlay.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.classList.add('mobile-menu-open');
            
            // Force visibility
            mobileSidenav.style.visibility = 'visible';
            mobileSidenav.style.opacity = '1';
            mobileSidenav.style.left = '0';
            
            console.log('Mobile menu opened');
        }
    }

    // Mobile menu button click
    if (mobileMenuBtn) {
        console.log('Mobile menu button found, adding event listeners');
        
        // إضافة مستمعي الأحداث للتفاعل مع اللمس والنقر
        mobileMenuBtn.addEventListener('click', function(e) {
            console.log('Mobile menu button clicked');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
        
        // إضافة دعم للتفاعل مع اللمس
        mobileMenuBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        
        mobileMenuBtn.addEventListener('touchend', function(e) {
            console.log('Mobile menu button touched');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
        
        // منع التمرير عند الضغط على الزر
        mobileMenuBtn.addEventListener('touchmove', function(e) {
            e.preventDefault();
        });
        
        // إضافة دعم للماوس
        mobileMenuBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        
        mobileMenuBtn.addEventListener('mouseup', function(e) {
            console.log('Mobile menu button mouse up');
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
    } else {
        console.error('Mobile menu button not found');
    }

    // Mobile overlay click - close menu when clicking on overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidenav();
        });
    }

    // Mobile dropdown functionality
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    mobileDropdowns.forEach((dropdown, index) => {
        const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
        if (toggle) {
            // Allow the link to navigate normally when clicking on the link text
            const link = toggle.querySelector('a');
            if (link) {
                link.addEventListener('click', function(e) {
                    // Allow normal navigation - don't prevent default
                    // Just close any open dropdowns
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            }
            
            // Only add click listener to the arrow specifically
            const arrow = toggle.querySelector('.dropdown-arrow');
            if (arrow) {
                // Define the event handlers
                const handleArrowClick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns when opening a new one
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                };
                
                const handleArrowTouch = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns when opening a new one
                    mobileDropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                };
                
                // Remove any existing event listeners first
                arrow.removeEventListener('click', handleArrowClick);
                arrow.removeEventListener('touchstart', handleArrowTouch);
                
                // Add event listeners
                arrow.addEventListener('click', handleArrowClick);
                arrow.addEventListener('touchstart', handleArrowTouch);
                
                // Also add mousedown for better mobile support
                arrow.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            }
        }
    });

    // Close mobile menu when clicking navigation links
    if (mobileSidenav) {
        const sidenavLinks = mobileSidenav.querySelectorAll('a');
        sidenavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileSidenav.classList.remove('active');
                mobileOverlay.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            });
        });
    }

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileSidenav && mobileSidenav.classList.contains('active')) {
            toggleMobileSidenav();
        }
    });

    // Close mobile menu when clicking outside (but not on the hamburger)
    document.addEventListener('click', function(e) {
        if (mobileSidenav && mobileSidenav.classList.contains('active')) {
            // Check if click is outside the mobile menu and not on the hamburger button
            if (!mobileSidenav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMobileSidenav();
            }
        }
    });

    // Header scroll effect with performance optimization
    const header = document.querySelector('.header');
    if (header) {
        let ticking = false;
        
        function updateHeader() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                header.style.background = 'linear-gradient(135deg, rgba(220, 20, 60, 0.75) 0%, rgba(178, 34, 34, 0.75) 50%, rgba(220, 20, 60, 0.75) 100%)';
                header.style.boxShadow = '0 8px 32px rgba(220, 20, 60, 0.25), 0 0 20px rgba(220, 20, 60, 0.15)';
                header.style.backdropFilter = 'blur(25px)';
            } else {
                header.classList.remove('scrolled');
                header.style.background = 'linear-gradient(135deg, #DC143C 0%, #B22222 30%, #B22222 70%, #DC143C 100%)';
                header.style.boxShadow = '0 8px 32px rgba(220, 20, 60, 0.3), 0 0 20px rgba(220, 20, 60, 0.2)';
                header.style.backdropFilter = 'blur(20px)';
            }
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // Debug function to check mobile menu elements
    function debugMobileMenu() {
        console.log('Mobile Menu Debug:');
        console.log('Mobile Menu Button:', mobileMenuBtn);
        console.log('Mobile Sidenav:', mobileSidenav);
        console.log('Mobile Overlay:', mobileOverlay);
        console.log('Mobile Dropdowns:', mobileDropdowns.length);
        console.log('Window width:', window.innerWidth);
        console.log('Is mobile breakpoint:', window.innerWidth <= 768);
        console.log('User Agent:', navigator.userAgent);
        console.log('Touch Support:', 'ontouchstart' in window);
    }
    
    // Run debug on mobile devices
    if (window.innerWidth <= 768) {
        debugMobileMenu();
    }
    
    // إضافة دعم للشاشات التي تدعم اللمس
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // إضافة دعم للشاشات عالية الدقة
    if (window.devicePixelRatio > 1) {
        document.body.classList.add('high-dpi');
    }
    
    console.log('Navbar loaded successfully');
}

// Auto-include navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    includeNavbar();
});
