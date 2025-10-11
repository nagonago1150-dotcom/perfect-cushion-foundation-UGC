// Mobile Performance Optimization Script
// Automatically detects mobile devices and applies performance improvements

(() => {
    'use strict';
    
    // Mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        // Add performance class to body
        document.body.classList.add('mobile-optimized');
        
        // Disable heavy animations on scroll
        let scrollTimer = null;
        let isScrolling = false;
        
        const handleScroll = () => {
            if (!isScrolling) {
                isScrolling = true;
                document.body.classList.add('scrolling');
                
                // Disable animations during scroll
                const style = document.createElement('style');
                style.id = 'scroll-performance';
                style.textContent = `
                    .scrolling * {
                        animation-duration: 0s !important;
                        transition-duration: 0s !important;
                    }
                `;
                document.head.appendChild(style);
            }
            
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                isScrolling = false;
                document.body.classList.remove('scrolling');
                
                // Re-enable animations after scroll
                const style = document.getElementById('scroll-performance');
                if (style) style.remove();
            }, 150);
        };
        
        // Use passive event listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Throttle resize events
        let resizeTimer = null;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Force reflow after resize
                document.body.style.transform = 'translateZ(0)';
            }, 100);
        };
        
        window.addEventListener('resize', handleResize, { passive: true });
        
        // Optimize image loading
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
        
        // Add CSS optimizations
        const mobileCSS = document.createElement('style');
        mobileCSS.textContent = `
            /* Mobile-specific performance optimizations */
            .mobile-optimized {
                -webkit-overflow-scrolling: touch;
                transform: translate3d(0, 0, 0);
            }
            
            /* Hide heavy effects on mobile */
            .mobile-optimized .floating-elements,
            .mobile-optimized .bubble-container,
            .mobile-optimized .ripple-container {
                display: none !important;
            }
            
            /* Simplify backgrounds */
            .mobile-optimized body::before {
                display: none !important;
            }
            
            /* Optimize transforms */
            .mobile-optimized * {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            
            /* Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01s !important;
                    transition-duration: 0.01s !important;
                }
            }
        `;
        document.head.appendChild(mobileCSS);
        
        console.log('🚀 Mobile performance optimizations applied');
    }
})();