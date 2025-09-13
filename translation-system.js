// Translation System for SKYLINE Innovation Software
// Comprehensive Arabic/English translation system

class TranslationSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-about': 'About Us',
                'nav-company-profile': 'Company Profile',
                'nav-vision-mission': 'Vision & Mission',
                'nav-leadership': 'Leadership Team',
                'nav-values': 'Our Values',
                'nav-partners': 'Strategic Partners',
                'nav-alliances': 'Strategic Alliances',
                'nav-clients': 'Our Clients',
                'nav-services': 'Services',
                'nav-products': 'Products & Solutions',
                'nav-portfolio': 'Portfolio',
                'nav-testimonials': 'Testimonials',
                'nav-events': 'Events & News',
                'nav-contact': 'Contact Us',
                'nav-download': 'Download Center',
                'nav-iso': 'ISO Consulting',
                'nav-saas': 'SaaS Programs',
                'nav-client-portal': 'Client Portal',
                
                // Common Elements
                'logo-tagline': 'Innovation Software',
                'get-started': 'Get Started',
                'learn-more': 'Learn More',
                'read-more': 'Read More',
                'contact-us': 'Contact Us',
                'call-us': 'Call Us',
                'email-us': 'Email Us',
                'follow-us': 'Follow Us',
                'subscribe': 'Subscribe',
                'submit': 'Submit',
                'send': 'Send',
                'cancel': 'Cancel',
                'close': 'Close',
                'back': 'Back',
                'next': 'Next',
                'previous': 'Previous',
                'loading': 'Loading...',
                'error': 'Error',
                'success': 'Success',
                'warning': 'Warning',
                'info': 'Information',
                
                // Home Page
                'hero-title': 'Welcome to SKYLINE Innovation Software',
                'hero-subtitle': 'Transforming Ideas into Digital Reality',
                'hero-description': 'We are a leading software development company specializing in innovative solutions that drive business growth and digital transformation.',
                'hero-cta': 'Explore Our Services',
                'hero-cta-secondary': 'View Portfolio',
                
                // About Page
                'about-title': 'About SKYLINE Innovation Software',
                'about-subtitle': 'Your Trusted Technology Partner',
                'about-description': 'With years of experience in software development, we have helped numerous businesses achieve their digital goals through cutting-edge technology solutions.',
                
                // Services
                'services-title': 'Our Services',
                'services-subtitle': 'Comprehensive Technology Solutions',
                'web-development': 'Web Development',
                'web-development-desc': 'Custom websites and web applications built with modern technologies',
                'mobile-apps': 'Mobile Applications',
                'mobile-apps-desc': 'Native and cross-platform mobile apps for iOS and Android',
                'ai-ml': 'AI & Machine Learning',
                'ai-ml-desc': 'Intelligent solutions powered by artificial intelligence',
                'cybersecurity': 'Cybersecurity',
                'cybersecurity-desc': 'Protect your business with advanced security solutions',
                'cloud-infrastructure': 'Cloud Infrastructure',
                'cloud-infrastructure-desc': 'Scalable cloud solutions for modern businesses',
                
                // Contact
                'contact-title': 'Contact Us',
                'contact-subtitle': 'Get in Touch',
                'contact-description': 'Ready to start your project? Contact us today for a free consultation.',
                'contact-form-title': 'Send us a Message',
                'contact-form-name': 'Full Name',
                'contact-form-email': 'Email Address',
                'contact-form-phone': 'Phone Number',
                'contact-form-company': 'Company Name',
                'contact-form-message': 'Message',
                'contact-form-submit': 'Send Message',
                'contact-info-title': 'Contact Information',
                'contact-address-title': 'Our Office',
                'contact-phone-title': 'Phone',
                'contact-email-title': 'Email',
                'contact-hours-title': 'Business Hours',
                'contact-main-office': 'Main Office',
                'contact-sales': 'Sales',
                'contact-general': 'General',
                'contact-support': 'Support',
                'contact-sunday-thursday': 'Sunday - Thursday',
                'contact-hours': '9:00 AM - 5:00 PM (EST)',
                
                // Footer
                'footer-company-desc': 'Leading software development company specializing in innovative solutions for modern businesses.',
                'footer-quick-links': 'Quick Links',
                'footer-services': 'Services',
                'footer-company': 'Company',
                'footer-support': 'Support',
                'footer-legal': 'Legal',
                'footer-privacy': 'Privacy Policy',
                'footer-terms': 'Terms of Service',
                'footer-cookies': 'Cookie Policy',
                'footer-newsletter': 'Newsletter',
                'footer-newsletter-desc': 'Subscribe to our newsletter for the latest updates',
                'footer-newsletter-placeholder': 'Enter your email',
                'footer-newsletter-subscribe': 'Subscribe',
                'footer-copyright': '© 2024 SKYLINE Innovation Software. All rights reserved.',
                
                // AI Assistant
                'ai-assistant-title': 'AI Assistant',
                'ai-assistant-placeholder': 'Ask me anything about our services...',
                'ai-services-btn': 'Services',
                'ai-pricing-btn': 'Pricing',
                'ai-contact-btn': 'Contact',
                'ai-location-btn': 'Location',
                'ai-portfolio-btn': 'Portfolio',
                
                // Accessibility
                'accessibility-title': 'Accessibility Tools',
                'accessibility-font-size': 'Font Size',
                'accessibility-simple-font': 'Simple Font',
                'accessibility-high-contrast': 'High Contrast',
                'accessibility-screen-reader': 'Screen Reader',
                'accessibility-keyboard-nav': 'Keyboard Navigation',
                
                // Language Switcher
                'language-switch': 'العربية',
                'language-current': 'English',
                
                // Cards and Content
                'projects-completed': 'Projects Completed',
                'happy-clients': 'Happy Clients',
                'years-experience': 'Years Experience',
                'team-members': 'Team Members',
                'custom-software': 'Custom Software Development',
                'custom-software-desc': 'Tailored solutions built to meet your specific business requirements',
                'web-applications': 'Web Applications',
                'web-applications-desc': 'Modern, responsive web applications with cutting-edge technology',
                'mobile-solutions': 'Mobile Solutions',
                'mobile-solutions-desc': 'Native and cross-platform mobile applications',
                'ai-integration': 'AI Integration',
                'ai-integration-desc': 'Intelligent automation and machine learning solutions',
                'cloud-services': 'Cloud Services',
                'cloud-services-desc': 'Scalable cloud infrastructure and deployment',
                'cybersecurity': 'Cybersecurity Solutions',
                'cybersecurity-desc': 'Advanced security measures to protect your business',
                'expert-team': 'Expert Team',
                'expert-team-desc': 'Our experienced developers deliver high-quality solutions',
                'cutting-edge': 'Cutting-Edge Technology',
                'cutting-edge-desc': 'We use the latest technologies and frameworks',
                '24-7-support': '24/7 Support',
                '24-7-support-desc': 'Round-the-clock technical support and maintenance',
                'proven-track': 'Proven Track Record',
                'proven-track-desc': 'Successfully delivered 500+ projects across various industries',
                'innovative-solutions': 'Innovative Solutions',
                'innovative-solutions-desc': 'Creative approaches to complex business challenges',
                'client-focused': 'Client-Focused Approach',
                'client-focused-desc': 'We prioritize your business goals and requirements',
                'quality-assurance': 'Quality Assurance',
                'quality-assurance-desc': 'Rigorous testing and quality control processes',
                'timely-delivery': 'Timely Delivery',
                'timely-delivery-desc': 'We meet deadlines without compromising on quality',
                'competitive-pricing': 'Competitive Pricing',
                'competitive-pricing-desc': 'Cost-effective solutions that provide excellent value',
                'scalable-solutions': 'Scalable Solutions',
                'scalable-solutions-desc': 'Solutions that grow with your business needs',
                'industry-expertise': 'Industry Expertise',
                'industry-expertise-desc': 'Deep knowledge across multiple industry verticals',
                'modern-frameworks': 'Modern Frameworks',
                'modern-frameworks-desc': 'Built with the latest and most reliable technologies',
                'responsive-design': 'Responsive Design',
                'responsive-design-desc': 'Perfect experience across all devices and screen sizes',
                'seamless-integration': 'Seamless Integration',
                'seamless-integration-desc': 'Easy integration with your existing systems',
                'data-security': 'Data Security',
                'data-security-desc': 'Enterprise-grade security for your sensitive data',
                'performance-optimization': 'Performance Optimization',
                'performance-optimization-desc': 'Optimized for speed, efficiency, and reliability',
                'user-experience': 'User Experience',
                'user-experience-desc': 'Intuitive and engaging user interfaces',
                'business-automation': 'Business Automation',
                'business-automation-desc': 'Streamline your processes with intelligent automation',
                'digital-transformation': 'Digital Transformation',
                'digital-transformation-desc': 'Transform your business for the digital age',
                'consultation': 'Free Consultation',
                'consultation-desc': 'Get expert advice on your project requirements',
                'project-management': 'Project Management',
                'project-management-desc': 'Professional project management and delivery',
                'maintenance-support': 'Maintenance & Support',
                'maintenance-support-desc': 'Ongoing support and maintenance services',
                'training': 'Training & Documentation',
                'training-desc': 'Comprehensive training and documentation provided',
                'updates': 'Regular Updates',
                'updates-desc': 'Keep your software up-to-date with latest features',
                'monitoring': 'Performance Monitoring',
                'monitoring-desc': 'Continuous monitoring and optimization',
                'backup-recovery': 'Backup & Recovery',
                'backup-recovery-desc': 'Secure backup and disaster recovery solutions',
                'compliance': 'Compliance',
                'compliance-desc': 'Ensure compliance with industry standards and regulations',
                
                // Additional translations for index.html
                'who-we-are': 'Who We Are?',
                'about-description': 'Skyline Innovation is a leading provider of Enterprise Resource Planning (ERP) and software solutions in Jordan, dedicated to empowering businesses through cutting-edge technology and digital transformation. With a commitment to excellence, innovation, and customer satisfaction, we deliver tailored software solutions that streamline operations, enhance decision-making, and drive sustainable growth.',
                'about-expertise': 'Our expertise spans across multiple industries, enabling organizations to automate workflows, integrate systems, and optimize business processes with efficiency and accuracy.',
                'trusted-businesses': 'Trusted by 500+ Businesses',
                'expert-level': 'Expert Level',
                'custom-built': 'Custom Built',
                'future-ready': 'Future Ready',
                'user-centric': 'User Centric',
                'enterprise-grade': 'Enterprise Grade',
                'always-available': 'Always Available',
                'deep-market-knowledge': 'Deep Market Knowledge',
                'tailored-solutions': 'Tailored Solutions',
                'scalable-systems': 'Scalable Systems',
                'ai-machine-learning': 'AI & Machine Learning',
                'cloud-computing': 'Cloud Computing',
                'intuitive-design': 'Intuitive Design',
                'maximum-efficiency': 'Maximum Efficiency',
                'high-end-encryption': 'High-End Encryption',
                'industry-compliance': 'Industry Compliance',
                'training-programs': 'Training Programs',
                
                // Featured Solutions Badges
                'popular-badge': 'Popular',
                'featured-badge': 'Featured',
                'trending-badge': 'Trending',
                
                // AI & Machine Learning Features
                'predictive-analytics': 'Predictive Analytics',
                'natural-language-processing': 'Natural Language Processing',
                'computer-vision': 'Computer Vision',
                'recommendation-systems': 'Recommendation Systems',
                'explore-ai-solutions': 'Explore AI Solutions',
                
                // Custom Software Features
                'desktop-software': 'Desktop Software',
                'api-development': 'API Development',
                'start-your-project': 'Start Your Project',
                
                // Cloud Infrastructure Features
                'cloud-migration': 'Cloud Migration',
                'devops-automation': 'DevOps Automation',
                'microservices-architecture': 'Microservices Architecture',
                'serverless-solutions': 'Serverless Solutions',
                'go-cloud-native': 'Go Cloud Native',
                
                // Industries Section
                'industries-title-prefix': 'Industries',
                'industries-title-main': 'We Serve',
                'industries-description-start': 'Our ERP and software solutions cater to a diverse range of industries,',
                'transforming-businesses': 'transforming businesses',
                'industries-description-end': 'through innovative technology.',
                'trusted-companies': 'Trusted by 200+ Companies',
                
                // Industry Titles
                'manufacturing-title': 'Manufacturing',
                'retail-title': 'Retail & E-commerce',
                'healthcare-title': 'Healthcare',
                'finance-title': 'Finance & Banking',
                'logistics-title': 'Logistics & Supply Chain',
                'education-title': 'Education & Government',
                
                // Industry Descriptions
                'manufacturing-description': 'Production planning, inventory management, and quality control solutions.',
                'retail-description': 'Sales tracking, POS integration, and customer engagement solutions.',
                'healthcare-description': 'Patient records management, billing, and compliance tracking solutions.',
                'finance-description': 'Accounting, risk management, and financial reporting solutions.',
                'logistics-description': 'Fleet tracking, warehouse management, and procurement solutions.',
                'education-description': 'Student information systems, HR, and administrative automation solutions.',
                
                // Industry Features
                'production-planning': 'Production Planning',
                'quality-control': 'Quality Control',
                'pos-integration': 'POS Integration',
                'customer-analytics': 'Customer Analytics',
                'patient-records': 'Patient Records',
                'compliance-tracking': 'Compliance Tracking',
                'risk-management': 'Risk Management',
                'financial-reporting': 'Financial Reporting',
                'fleet-tracking': 'Fleet Tracking',
                'warehouse-management': 'Warehouse Management',
                'student-systems': 'Student Systems',
                'hr-automation': 'HR Automation',
                
                // Industry Stats
                'efficiency': 'Efficiency',
                'growth': 'Growth',
                'accuracy': 'Accuracy',
                'security': 'Security',
                'cost-reduction': 'Cost Reduction',
                'automation': 'Automation',
                
                // CTA Section
                'cta-description-start': 'Let\'s discuss how our innovative solutions can drive your business forward.',
                'cta-description-end': 'Get in touch with our expert team today.',
                
                // Footer
                'office-details': 'Office details',
                'visit-office': 'VISIT OFFICE'
            },
            ar: {
                // Navigation
                'nav-home': 'الرئيسية',
                'nav-about': 'من نحن',
                'nav-company-profile': 'الملف التعريفي للشركة',
                'nav-vision-mission': 'الرؤية والرسالة',
                'nav-leadership': 'فريق القيادة',
                'nav-values': 'قيمنا',
                'nav-partners': 'الشركاء الاستراتيجيون',
                'nav-alliances': 'التحالفات الاستراتيجية',
                'nav-clients': 'عملاؤنا',
                'nav-services': 'الخدمات',
                'nav-products': 'المنتجات والحلول',
                'nav-portfolio': 'معرض الأعمال',
                'nav-testimonials': 'الشهادات',
                'nav-events': 'الأحداث والأخبار',
                'nav-contact': 'اتصل بنا',
                'nav-download': 'مركز التحميل',
                'nav-iso': 'استشارات الأيزو',
                'nav-saas': 'برامج الساس',
                'nav-client-portal': 'بوابة العملاء',
                
                // Common Elements
                'logo-tagline': 'برمجيات الابتكار',
                'get-started': 'ابدأ الآن',
                'learn-more': 'اعرف المزيد',
                'read-more': 'اقرأ المزيد',
                'contact-us': 'اتصل بنا',
                'call-us': 'اتصل بنا',
                'email-us': 'راسلنا',
                'follow-us': 'تابعنا',
                'subscribe': 'اشترك',
                'submit': 'إرسال',
                'send': 'إرسال',
                'cancel': 'إلغاء',
                'close': 'إغلاق',
                'back': 'رجوع',
                'next': 'التالي',
                'previous': 'السابق',
                'loading': 'جاري التحميل...',
                'error': 'خطأ',
                'success': 'نجح',
                'warning': 'تحذير',
                'info': 'معلومات',
                
                // Home Page
                'hero-title': 'مرحباً بك في سكايلاين برمجيات الابتكار',
                'hero-subtitle': 'تحويل الأفكار إلى واقع رقمي',
                'hero-description': 'نحن شركة رائدة في تطوير البرمجيات متخصصة في الحلول المبتكرة التي تدفع نمو الأعمال والتحول الرقمي.',
                'hero-cta': 'استكشف خدماتنا',
                'hero-cta-secondary': 'عرض معرض الأعمال',
                
                // About Page
                'about-title': 'حول سكايلاين برمجيات الابتكار',
                'about-subtitle': 'شريكك الموثوق في التكنولوجيا',
                'about-description': 'مع سنوات من الخبرة في تطوير البرمجيات، ساعدنا العديد من الشركات في تحقيق أهدافها الرقمية من خلال حلول تكنولوجية متطورة.',
                
                // Services
                'services-title': 'خدماتنا',
                'services-subtitle': 'حلول تكنولوجية شاملة',
                'web-development': 'تطوير المواقع',
                'web-development-desc': 'مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات',
                'mobile-apps': 'تطبيقات الهواتف',
                'mobile-apps-desc': 'تطبيقات محمولة أصلية ومتعددة المنصات لنظامي iOS و Android',
                'ai-ml': 'الذكاء الاصطناعي والتعلم الآلي',
                'ai-ml-desc': 'حلول ذكية مدعومة بالذكاء الاصطناعي',
                'cybersecurity': 'الأمن السيبراني',
                'cybersecurity-desc': 'احم عملك بحلول أمنية متقدمة',
                'cloud-infrastructure': 'البنية التحتية السحابية',
                'cloud-infrastructure-desc': 'حلول سحابية قابلة للتوسع للشركات الحديثة',
                
                // Contact
                'contact-title': 'اتصل بنا',
                'contact-subtitle': 'تواصل معنا',
                'contact-description': 'مستعد لبدء مشروعك؟ اتصل بنا اليوم للحصول على استشارة مجانية.',
                'contact-form-title': 'أرسل لنا رسالة',
                'contact-form-name': 'الاسم الكامل',
                'contact-form-email': 'عنوان البريد الإلكتروني',
                'contact-form-phone': 'رقم الهاتف',
                'contact-form-company': 'اسم الشركة',
                'contact-form-message': 'الرسالة',
                'contact-form-submit': 'إرسال الرسالة',
                'contact-info-title': 'معلومات الاتصال',
                'contact-address-title': 'مكتبنا',
                'contact-phone-title': 'الهاتف',
                'contact-email-title': 'البريد الإلكتروني',
                'contact-hours-title': 'ساعات العمل',
                'contact-main-office': 'المكتب الرئيسي',
                'contact-sales': 'المبيعات',
                'contact-general': 'عام',
                'contact-support': 'الدعم',
                'contact-sunday-thursday': 'الأحد - الخميس',
                'contact-hours': '9:00 ص - 5:00 م (بتوقيت الأردن)',
                
                // Footer
                'footer-company-desc': 'شركة رائدة في تطوير البرمجيات متخصصة في الحلول المبتكرة للشركات الحديثة.',
                'footer-quick-links': 'روابط سريعة',
                'footer-services': 'الخدمات',
                'footer-company': 'الشركة',
                'footer-support': 'الدعم',
                'footer-legal': 'قانوني',
                'footer-privacy': 'سياسة الخصوصية',
                'footer-terms': 'شروط الخدمة',
                'footer-cookies': 'سياسة ملفات تعريف الارتباط',
                'footer-newsletter': 'النشرة الإخبارية',
                'footer-newsletter-desc': 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات',
                'footer-newsletter-placeholder': 'أدخل بريدك الإلكتروني',
                'footer-newsletter-subscribe': 'اشترك',
                'footer-copyright': '© 2024 سكايلاين برمجيات الابتكار. جميع الحقوق محفوظة.',
                
                // AI Assistant
                'ai-assistant-title': 'المساعد الذكي',
                'ai-assistant-placeholder': 'اسألني أي شيء عن خدماتنا...',
                'ai-services-btn': 'الخدمات',
                'ai-pricing-btn': 'الأسعار',
                'ai-contact-btn': 'اتصل بنا',
                'ai-location-btn': 'الموقع',
                'ai-portfolio-btn': 'معرض الأعمال',
                
                // Accessibility
                'accessibility-title': 'أدوات إمكانية الوصول',
                'accessibility-font-size': 'حجم الخط',
                'accessibility-simple-font': 'خط بسيط',
                'accessibility-high-contrast': 'تباين عالي',
                'accessibility-screen-reader': 'قارئ الشاشة',
                'accessibility-keyboard-nav': 'التنقل بلوحة المفاتيح',
                
                // Language Switcher
                'language-switch': 'English',
                'language-current': 'العربية',
                
                // Cards and Content
                'projects-completed': 'مشاريع مكتملة',
                'happy-clients': 'عملاء راضون',
                'years-experience': 'سنوات خبرة',
                'team-members': 'أعضاء الفريق',
                'custom-software': 'تطوير برمجيات مخصصة',
                'custom-software-desc': 'حلول مصممة خصيصاً لتلبية متطلبات عملك المحددة',
                'web-applications': 'تطبيقات الويب',
                'web-applications-desc': 'تطبيقات ويب حديثة ومتجاوبة بأحدث التقنيات',
                'mobile-solutions': 'حلول الهواتف المحمولة',
                'mobile-solutions-desc': 'تطبيقات محمولة أصلية ومتعددة المنصات',
                'ai-integration': 'تكامل الذكاء الاصطناعي',
                'ai-integration-desc': 'حلول الأتمتة الذكية والتعلم الآلي',
                'cloud-services': 'الخدمات السحابية',
                'cloud-services-desc': 'بنية تحتية سحابية قابلة للتوسع والنشر',
                'cybersecurity': 'حلول الأمن السيبراني',
                'cybersecurity-desc': 'إجراءات أمنية متقدمة لحماية عملك',
                'expert-team': 'فريق خبير',
                'expert-team-desc': 'مطورونا ذوو الخبرة يقدمون حلولاً عالية الجودة',
                'cutting-edge': 'تقنيات متطورة',
                'cutting-edge-desc': 'نستخدم أحدث التقنيات والأطر',
                '24-7-support': 'دعم على مدار الساعة',
                '24-7-support-desc': 'دعم فني وصيانة على مدار الساعة',
                'proven-track': 'سجل حافل مثبت',
                'proven-track-desc': 'تم تسليم أكثر من 500 مشروع بنجاح عبر مختلف الصناعات',
                'innovative-solutions': 'حلول مبتكرة',
                'innovative-solutions-desc': 'نهج إبداعي للتحديات التجارية المعقدة',
                'client-focused': 'نهج يركز على العميل',
                'client-focused-desc': 'نعطي الأولوية لأهداف ومتطلبات عملك',
                'quality-assurance': 'ضمان الجودة',
                'quality-assurance-desc': 'عمليات اختبار ومراقبة جودة صارمة',
                'timely-delivery': 'تسليم في الوقت المحدد',
                'timely-delivery-desc': 'نلتزم بالمواعيد النهائية دون المساس بالجودة',
                'competitive-pricing': 'أسعار تنافسية',
                'competitive-pricing-desc': 'حلول فعالة من حيث التكلفة توفر قيمة ممتازة',
                'scalable-solutions': 'حلول قابلة للتوسع',
                'scalable-solutions-desc': 'حلول تنمو مع احتياجات عملك',
                'industry-expertise': 'خبرة صناعية',
                'industry-expertise-desc': 'معرفة عميقة عبر قطاعات صناعية متعددة',
                'modern-frameworks': 'أطر حديثة',
                'modern-frameworks-desc': 'مبني بأحدث وأكثر التقنيات موثوقية',
                'responsive-design': 'تصميم متجاوب',
                'responsive-design-desc': 'تجربة مثالية عبر جميع الأجهزة وأحجام الشاشات',
                'seamless-integration': 'تكامل سلس',
                'seamless-integration-desc': 'تكامل سهل مع أنظمتك الموجودة',
                'data-security': 'أمان البيانات',
                'data-security-desc': 'أمان على مستوى المؤسسات لبياناتك الحساسة',
                'performance-optimization': 'تحسين الأداء',
                'performance-optimization-desc': 'محسن للسرعة والكفاءة والموثوقية',
                'user-experience': 'تجربة المستخدم',
                'user-experience-desc': 'واجهات مستخدم بديهية وجذابة',
                'business-automation': 'أتمتة الأعمال',
                'business-automation-desc': 'تبسيط عملياتك بالأتمتة الذكية',
                'digital-transformation': 'التحول الرقمي',
                'digital-transformation-desc': 'حول عملك للعصر الرقمي',
                'consultation': 'استشارة مجانية',
                'consultation-desc': 'احصل على نصيحة خبير حول متطلبات مشروعك',
                'project-management': 'إدارة المشاريع',
                'project-management-desc': 'إدارة وتسليم مشاريع مهنية',
                'maintenance-support': 'الصيانة والدعم',
                'maintenance-support-desc': 'خدمات دعم وصيانة مستمرة',
                'training': 'التدريب والتوثيق',
                'training-desc': 'تدريب وتوثيق شامل مقدم',
                'updates': 'تحديثات منتظمة',
                'updates-desc': 'حافظ على برمجياتك محدثة بأحدث الميزات',
                'monitoring': 'مراقبة الأداء',
                'monitoring-desc': 'مراقبة وتحسين مستمر',
                'backup-recovery': 'النسخ الاحتياطي والاسترداد',
                'backup-recovery-desc': 'حلول نسخ احتياطي واسترداد آمنة من الكوارث',
                'compliance': 'الامتثال',
                'compliance-desc': 'ضمان الامتثال للمعايير واللوائح الصناعية',
                
                // Additional translations for index.html
                'who-we-are': 'من نحن؟',
                'about-description': 'سكايلاين للابتكار هي مزود رائد لحلول تخطيط موارد المؤسسات (ERP) والبرمجيات في الأردن، مكرسة لتمكين الشركات من خلال التكنولوجيا المتطورة والتحول الرقمي. مع التزام بالتميز والابتكار ورضا العملاء، نقدم حلول برمجية مخصصة تعمل على تبسيط العمليات وتحسين اتخاذ القرارات ودفع النمو المستدام.',
                'about-expertise': 'تمتد خبرتنا عبر صناعات متعددة، مما يمكن المنظمات من أتمتة سير العمل ودمج الأنظمة وتحسين العمليات التجارية بكفاءة ودقة.',
                'trusted-businesses': 'موثوق من قبل 500+ شركة',
                'expert-level': 'مستوى خبير',
                'custom-built': 'مبني مخصص',
                'future-ready': 'جاهز للمستقبل',
                'user-centric': 'مركز على المستخدم',
                'enterprise-grade': 'مستوى المؤسسات',
                'always-available': 'متاح دائماً',
                'deep-market-knowledge': 'معرفة عميقة بالسوق',
                'tailored-solutions': 'حلول مخصصة',
                'scalable-systems': 'أنظمة قابلة للتوسع',
                'ai-machine-learning': 'الذكاء الاصطناعي والتعلم الآلي',
                'cloud-computing': 'الحوسبة السحابية',
                'intuitive-design': 'تصميم بديهي',
                'maximum-efficiency': 'أقصى كفاءة',
                'high-end-encryption': 'تشفير عالي الجودة',
                'industry-compliance': 'امتثال صناعي',
                'training-programs': 'برامج التدريب',
                
                // Featured Solutions Badges
                'popular-badge': 'شائع',
                'featured-badge': 'مميز',
                'trending-badge': 'رائج',
                
                // AI & Machine Learning Features
                'predictive-analytics': 'التحليلات التنبؤية',
                'natural-language-processing': 'معالجة اللغة الطبيعية',
                'computer-vision': 'الرؤية الحاسوبية',
                'recommendation-systems': 'أنظمة التوصية',
                'explore-ai-solutions': 'استكشف حلول الذكاء الاصطناعي',
                
                // Custom Software Features
                'desktop-software': 'برامج سطح المكتب',
                'api-development': 'تطوير واجهات برمجة التطبيقات',
                'start-your-project': 'ابدأ مشروعك',
                
                // Cloud Infrastructure Features
                'cloud-migration': 'الانتقال إلى السحابة',
                'devops-automation': 'أتمتة DevOps',
                'microservices-architecture': 'هندسة الخدمات المصغرة',
                'serverless-solutions': 'الحلول الخادمية',
                'go-cloud-native': 'اذهب إلى السحابة الأصلية',
                
                // Industries Section
                'industries-title-prefix': 'الصناعات',
                'industries-title-main': 'التي نخدمها',
                'industries-description-start': 'حلولنا في تخطيط موارد المؤسسات والبرمجيات تخدم مجموعة متنوعة من الصناعات،',
                'transforming-businesses': 'تحويل الأعمال',
                'industries-description-end': 'من خلال التكنولوجيا المبتكرة.',
                'trusted-companies': 'موثوق من قبل 200+ شركة',
                
                // Industry Titles
                'manufacturing-title': 'التصنيع',
                'retail-title': 'التجارة الإلكترونية والتجزئة',
                'healthcare-title': 'الرعاية الصحية',
                'finance-title': 'المالية والمصرفية',
                'logistics-title': 'اللوجستيات وسلسلة التوريد',
                'education-title': 'التعليم والحكومة',
                
                // Industry Descriptions
                'manufacturing-description': 'حلول تخطيط الإنتاج وإدارة المخزون ومراقبة الجودة.',
                'retail-description': 'حلول تتبع المبيعات وتكامل نقاط البيع ومشاركة العملاء.',
                'healthcare-description': 'حلول إدارة سجلات المرضى والفواتير وتتبع الامتثال.',
                'finance-description': 'حلول المحاسبة وإدارة المخاطر والتقارير المالية.',
                'logistics-description': 'حلول تتبع الأسطول وإدارة المستودعات والمشتريات.',
                'education-description': 'حلول أنظمة معلومات الطلاب والموارد البشرية وأتمتة الإدارة.',
                
                // Industry Features
                'production-planning': 'تخطيط الإنتاج',
                'quality-control': 'مراقبة الجودة',
                'pos-integration': 'تكامل نقاط البيع',
                'customer-analytics': 'تحليلات العملاء',
                'patient-records': 'سجلات المرضى',
                'compliance-tracking': 'تتبع الامتثال',
                'risk-management': 'إدارة المخاطر',
                'financial-reporting': 'التقارير المالية',
                'fleet-tracking': 'تتبع الأسطول',
                'warehouse-management': 'إدارة المستودعات',
                'student-systems': 'أنظمة الطلاب',
                'hr-automation': 'أتمتة الموارد البشرية',
                
                // Industry Stats
                'efficiency': 'الكفاءة',
                'growth': 'النمو',
                'accuracy': 'الدقة',
                'security': 'الأمان',
                'cost-reduction': 'تقليل التكاليف',
                'automation': 'الأتمتة',
                
                // CTA Section
                'cta-description-start': 'دعنا نناقش كيف يمكن لحلولنا المبتكرة أن تدفع عملك إلى الأمام.',
                'cta-description-end': 'تواصل مع فريقنا الخبير اليوم.',
                
                // Footer
                'office-details': 'تفاصيل المكتب',
                'visit-office': 'زيارة المكتب'
            }
        };
        
        this.init();
    }
    
    init() {
        this.applyLanguage(this.currentLanguage);
        this.createLanguageSwitcher();
    }
    
    applyLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        
        // Set document direction and language
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        
        // Apply translations
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[language] && this.translations[language][key]) {
                element.textContent = this.translations[language][key];
            }
        });
        
        // Update placeholders
        const placeholders = document.querySelectorAll('[data-translate-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (this.translations[language] && this.translations[language][key]) {
                element.placeholder = this.translations[language][key];
            }
        });
        
        // Update language switcher
        this.updateLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        // Check if switcher already exists
        if (document.querySelector('.language-switcher')) {
            return;
        }
        
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="language-btn" id="language-switch-btn">
                <i class="fas fa-globe"></i>
                <span data-translate="language-switch">العربية</span>
            </button>
        `;
        
        // Add to navbar
        const navbar = document.querySelector('.navbar-nav') || document.querySelector('.nav-menu');
        if (navbar) {
            navbar.appendChild(switcher);
        }
        
        // Add event listener
        const btn = switcher.querySelector('#language-switch-btn');
        btn.addEventListener('click', () => {
            this.toggleLanguage();
        });
        
        // Add styles
        this.addLanguageSwitcherStyles();
    }
    
    addLanguageSwitcherStyles() {
        if (document.querySelector('#language-switcher-styles')) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = 'language-switcher-styles';
        style.textContent = `
            .language-switcher {
                margin-left: 20px;
            }
            
            .language-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                font-weight: 500;
            }
            
            .language-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.5);
                transform: translateY(-2px);
            }
            
            .language-btn i {
                font-size: 16px;
            }
            
            /* RTL Support */
            [dir="rtl"] .language-switcher {
                margin-left: 0;
                margin-right: 20px;
            }
            
            [dir="rtl"] .language-btn {
                flex-direction: row-reverse;
            }
            
            /* Mobile responsive */
            @media (max-width: 768px) {
                .language-switcher {
                    margin: 10px 0;
                    width: 100%;
                }
                
                .language-btn {
                    width: 100%;
                    justify-content: center;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    updateLanguageSwitcher() {
        const btn = document.querySelector('#language-switch-btn span');
        if (btn) {
            btn.textContent = this.currentLanguage === 'en' ? 'العربية' : 'English';
        }
    }
    
    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
        this.applyLanguage(newLanguage);
    }
    
    getTranslation(key, language = null) {
        const lang = language || this.currentLanguage;
        return this.translations[lang] && this.translations[lang][key] ? this.translations[lang][key] : key;
    }
}

// Initialize translation system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.translationSystem = new TranslationSystem();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationSystem;
}
