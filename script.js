// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const ctaSection = document.querySelector('.cta-section');
    const modal = document.getElementById('review-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    // Customer detailed reviews data
    const customerReviews = {
        '武重麻衣子さん（42歳）': {
            image: './customer-1-detail.jpg',
            title: '自然の力で健康に。その想いがLINK+Uにも通じます',
            content: `
                <p>家族の大病を機にジェモセラピー（植物幹細胞療法）に出合い、人事職のかたわらジェモセラピストとしても活動しています。ジェモセラピーは、植物の新芽の力を応用したフランス発祥の民間療法。LINK+Uを使ってみたのも、"自然の恵みを生かす"という部分に共感したから。</p>
                <p>化粧液が本当によくて、テクスチャーがとても好き! のびがいいし使い心地にも感動しました。香りも作られた香りじゃなく、ハーブっぽいというか…"よさそう"な感じ（笑）。</p>
                <p>仕事、育児に加えてジェモセラピーや趣味のフラダンス、ジム…と毎日忙しくて。正直美容に時間をかけていられない（笑）のですが、LINK+Uならそれでもしっとり、もっちり感が。助かっています。</p>
                <p><small>一般企業のキャリアコンサルタントとして働きながらジェモセラピストとしても活動。日々植物の力に助けられているそう。化粧液と乳液ののびのよさも好きと、武重さん。毎日首までたっぷり塗ってケアされています。</small></p>
            `
        },
        '葛巻美央さん（37歳）': {
            image: './customer-2-detail.jpg',
            title: '女性の葛藤に向き合い寄り添ってくれるのがうれしいですね',
            content: `
                <p>子どもが小さいうちは子どもを最優先に、と考えていると自分の時間ってほとんどないんですよね。さらにそこに仕事も加わるので、より一層自分のことが後まわしに…。でもキレイになりたいしちゃんとお手入れはしたい。</p>
                <p>そんな葛藤を感じていたので、LINK+Uの「無理しすぎない、でもキレイになりましょう」というメッセージはうれしかったです。プッシュ式で使いやすい点やすっきりとした香りもお気に入り。洗顔フォームのモチモチ泡も好き!</p>
                <p>今は週に1回、ダンスを娘と踊ったり、支援学級のダンスサークルのお手伝いをしたりするのを楽しみに、仕事と育児の両立に奮闘しています。そんな私にLINK+Uは寄り添ってくれているように感じます。</p>
                <p><small>義両親と同居し、家事は協力しながら皆さんで仲よく暮らしていらっしゃる葛巻さん。企業の成長をサポートする仕事に従事。フルリモートのため、自宅には仕事部屋を作って快適に。</small></p>
            `
        },
        '大澤真美さん（36歳）': {
            image: './customer-3-detail.jpg',
            title: '簡単だけど、ちゃんと"自分を大切にしている"感じがします',
            content: `
                <p>今は農業とデイサービス事業を夫婦で営んでいます。それに加えて上は9歳から下は2歳まで4人の子どもの世話も…。もう毎日が本当にてんやわんや（笑）。自分にかける時間なんてまったくない日々です。</p>
                <p>とはいえ年齢的にもお肌にもう少し気をつけないとな、と思っていたところ出合ったのがLINK+U。プッシュ式で使いやすいし、ラインナップがシンプルなので無理なく使える点が助かりました。ローションにとろみがあって手からこぼれないのが使いやすくてお気に入り。</p>
                <p>まだまだ自分の時間はあまりない生活が続くと思うけれど、LINK+Uで心地よくケアを続けられたらいいな。パパっと簡単だけど、ちゃんと自分を大切にしている感じって、実は大切ですよね。</p>
                <p><small>冬はハウスでトマトやきゅうりを栽培。デイサービス、育児、家事と多忙な日々を送られている大澤さん。デイサービスご利用者とは一緒に農作業をすることも。皆さんの笑顔が元気のもとだそう。</small></p>
            `
        },
        '高橋真弓さん（45歳）': {
            image: './customer-4-detail.jpg',
            title: '「これだけでいいの？」が今では「これだけでいい！」に',
            content: `
                <p>もともと美容には興味があり、いろいろな化粧品や美容法などを試していました。シワ用美容液、美白美容液、保湿美容液、アイクリームなどなど…。その中でLINK+Uは最初「これだけ?」と不安になったのが正直なところ（笑）。え、美容液は?アイクリームは?と半信半疑で使い始めたんです。</p>
                <p>それがいつの間にか「これだけでお手入れが完了するの、最高！」って（笑）。それだけ使い心地や使用感に満足しています。</p>
                <p>夫と始めた古本屋は、繁忙期には目が回るような忙しさ。ありがたいことではあるのですが、出荷や値付け作業が深夜に及ぶこともあり、スキンケアをする気力がない日もあります。そんな時もLINK+Uを顔にのせて香りを感じるとホッとして。私の大切な癒しタイムになっています。</p>
                <p><small>ご夫婦で古本屋『ROKUJO BOOKS』を営む高橋さん。多忙な時期は作業が深夜に及ぶこともある中、2匹の猫が癒しに。「職場と自宅が一緒なので、LINK+Uの香りがオフに切り替わるスイッチにもなっています」と高橋さん。</small></p>
            `
        }
    };
    
    // CTA Section visibility control
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    if (ctaSection) {
        ctaObserver.observe(ctaSection);
    }
    
    // Modal functionality
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.portrait-card');
            const customerName = card.querySelector('.portrait-name').textContent;
            const review = customerReviews[customerName];
            
            if (review) {
                modalBody.innerHTML = `
                    <div class="modal-review">
                        <img src="${review.image}" alt="${customerName}" class="modal-review-image">
                        <h3 class="modal-review-name">${customerName}</h3>
                        <h4 class="modal-review-title">${review.title}</h4>
                        <div class="modal-review-content">
                            ${review.content}
                        </div>
                    </div>
                `;
                
                modal.classList.add('show');
                modal.setAttribute('aria-hidden', 'false');
                modalClose.focus();
            }
        });
    });
    
    // Close modal
    const closeModal = () => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    };
    
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add styles for modal review
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal-review {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .modal-review-image {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: var(--spacing-lg);
        }
        
        .modal-review-name {
            font-size: 1.8rem;
            color: var(--primary-dark);
            margin-bottom: var(--spacing-sm);
        }
        
        .modal-review-title {
            font-size: 1.4rem;
            color: var(--text-dark);
            margin-bottom: var(--spacing-md);
            font-weight: 500;
        }
        
        .modal-review-content {
            line-height: 1.8;
            color: var(--text-light);
        }
        
        .modal-review-content p {
            margin-bottom: var(--spacing-md);
        }
        
        .modal-review-content small {
            display: block;
            margin-top: var(--spacing-lg);
            padding-top: var(--spacing-md);
            border-top: 1px solid var(--border-color);
            font-style: italic;
            color: var(--text-light);
        }
    `;
    document.head.appendChild(modalStyles);
    
    // Mobile-optimized Intersection Observer
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
                // Disconnect observer after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.portrait-card, .stat-item, .faq-item, .event-image-wrapper');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // CTA button click tracking (for analytics)
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Track the click for analytics
            console.log('CTA clicked:', button.textContent);
            
            // The link will now navigate to the actual purchase page
            // No need to prevent default
        });
    });
    
    // Testimonial Carousel Functionality
    const initCarousel = () => {
        const carouselTrack = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const dots = document.querySelectorAll('.dot');
        
        if (!carouselTrack || !slides.length) return;
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Show current slide
        const showSlide = (n) => {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Normalize slide index
            if (n >= totalSlides) currentSlide = 0;
            if (n < 0) currentSlide = totalSlides - 1;
            
            // Show current slide
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Move track
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update button states
            updateButtonStates();
        };
        
        const updateButtonStates = () => {
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        };
        
        // Next slide
        const nextSlide = () => {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        };
        
        // Previous slide
        const prevSlide = () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        };
        
        // Event listeners
        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
        
        // Touch/swipe support
        let startX = 0;
        let endX = 0;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carouselTrack.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
            }
        });
        
        // Auto-play (optional)
        let autoPlayInterval;
        const startAutoPlay = () => {
            autoPlayInterval = setInterval(() => {
                if (currentSlide < totalSlides - 1) {
                    nextSlide();
                } else {
                    currentSlide = 0;
                    showSlide(currentSlide);
                }
            }, 5000); // Change slide every 5 seconds
        };
        
        const stopAutoPlay = () => {
            clearInterval(autoPlayInterval);
        };
        
        // Pause autoplay on hover
        const carousel = document.querySelector('.testimonial-carousel');
        carousel?.addEventListener('mouseenter', stopAutoPlay);
        carousel?.addEventListener('mouseleave', startAutoPlay);
        
        // Initialize
        showSlide(0);
        // startAutoPlay(); // Uncomment to enable auto-play
    };
    
    // Initialize carousel
    initCarousel();

    // ===============================================
    // TIER 1: エントランスアニメーション強化
    // ===============================================

    // Trigger entrance animations on page load
    const initEntranceAnimations = () => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Enable animations on mobile (lightweight)
        // const isMobile = window.innerWidth <= 768;

        if (prefersReducedMotion) {
            // Show all elements immediately only if user prefers reduced motion
            document.querySelectorAll('.pr-label, .hero-title, .hero-product-image, .hero-description-simple').forEach(el => {
                el.style.opacity = '1';
            });
            return;
        }

        // Animate PR Label (0.3s delay)
        setTimeout(() => {
            const prLabel = document.querySelector('.pr-label');
            if (prLabel) {
                prLabel.classList.add('animate-fadeIn', 'delay-300');
            }
        }, 0);

        // Animate Hero Title (0.5s delay)
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                heroTitle.classList.add('animate-fadeInDown', 'delay-500');
            }
        }, 0);

        // Animate Product Image (0.7s delay)
        setTimeout(() => {
            const productImage = document.querySelector('.hero-product-image');
            if (productImage) {
                productImage.classList.add('animate-zoomIn', 'delay-700');
            }
        }, 0);

        // Animate Key Message (0.9s delay)
        setTimeout(() => {
            const keyMessage = document.querySelector('.hero-description-simple');
            if (keyMessage) {
                keyMessage.classList.add('animate-fadeInLeft', 'delay-900');
            }
        }, 0);
    };

    // Initialize entrance animations
    initEntranceAnimations();

    // ===============================================
    // TIER 1: プログレスインジケーター
    // ===============================================

    const initScrollProgress = () => {
        const progressBar = document.querySelector('.scroll-progress-bar');

        if (!progressBar) return;

        const updateProgress = () => {
            // Calculate scroll progress
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Calculate percentage (0-100)
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

            // Update progress bar width
            requestAnimationFrame(() => {
                progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
            });
        };

        // Update on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        // Initial update
        updateProgress();
    };

    // Initialize scroll progress
    initScrollProgress();

    // ===============================================
    // TIER 2: スクロールトリガーアニメーション強化
    // ===============================================

    const initScrollTriggerAnimations = () => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Enable animations on mobile (lightweight)
        // const isMobile = window.innerWidth <= 768;

        if (prefersReducedMotion) {
            // Show all elements immediately only if user prefers reduced motion
            document.querySelectorAll('.section-title, .testimonial-card, .features-image').forEach(el => {
                el.style.opacity = '1';
            });
            return;
        }

        // Enhanced Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                    requestAnimationFrame(() => {
                        entry.target.classList.add('animate-in');
                    });
                    // Disconnect after animation to improve performance
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe section titles
        document.querySelectorAll('.section-title').forEach(title => {
            scrollObserver.observe(title);
        });

        // Observe testimonial cards
        document.querySelectorAll('.testimonial-card').forEach(card => {
            scrollObserver.observe(card);
        });

        // Observe features image
        const featuresImage = document.querySelector('.features-image');
        if (featuresImage) {
            scrollObserver.observe(featuresImage);
        }
    };

    // Initialize scroll trigger animations
    initScrollTriggerAnimations();
});