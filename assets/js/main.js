/*==================== LOADING SCREEN ====================*/
/*==================== TYPING ANIMATION ====================*/
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const loadingBar = document.getElementById('loading-bar');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loading.classList.add('hidden');
                // Initialize typing animation after loading
                const homeTitle = document.querySelector('.home__title');
                if (homeTitle) {
                    const originalText = homeTitle.textContent;
                    typeWriter(homeTitle, originalText, 100);
                }
            }, 500);
        }
        loadingBar.style.width = progress + '%';
    }, 100);
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== ENHANCED BLOG FUNCTIONALITY ====================*/

// Global blog state
let currentBlogPosts = [];
let filteredPosts = [];
let currentPage = 1;
const postsPerPage = 6;

// Initialize blog system
document.addEventListener('DOMContentLoaded', async () => {
    // Load blog data if available
    if (typeof blogPosts !== 'undefined') {
        currentBlogPosts = [...blogPosts];
    } else {
        // Fallback to embedded posts if blog-data.js is not loaded
        currentBlogPosts = await loadEmbeddedBlogPosts();
    }
    
    // Initialize LinkedIn integration
    if (typeof initializeLinkedInIntegration === 'function') {
        initializeLinkedInIntegration();
    }
    
    // Render initial blog posts
    renderBlogPosts();
    initializeBlogControls();
    
    // Auto-refresh blog every 30 minutes to check for new LinkedIn posts
    setInterval(() => {
        if (typeof syncLinkedInPosts === 'function' && checkLinkedInAuth && checkLinkedInAuth()) {
            syncLinkedInPosts().then(() => {
                currentBlogPosts = [...blogPosts];
                renderBlogPosts();
            });
        }
    }, 1800000); // 30 minutes
});

// Load embedded blog posts as fallback
async function loadEmbeddedBlogPosts() {
    return [
        {
            id: 'ai-software-development-2024',
            title: 'The Future of AI in Software Development: Transforming Code Creation',
            category: 'ai-ml',
            date: '2024-08-10',
            author: 'Syed Mohsin',
            views: 1247,
            likes: 89,
            readTime: '12 min read',
            difficulty: 'Intermediate',
            tags: ['AI', 'Machine Learning', 'Software Development'],
            excerpt: 'Exploring how artificial intelligence is revolutionizing software development through automated code generation, intelligent debugging, and predictive analytics.',
            image: 'assets/img/about.jpg',
            fullContent: `
                
<h2>Abstract</h2>
<p>
Artificial Intelligence (AI) is rapidly transforming how software is designed, developed, tested, and maintained. 
Instead of replacing developers, AI is changing their responsibilities. Developers are moving from writing every line of code manually 
to supervising, validating, and designing systems that use AI to generate and optimize code. This shift is increasing productivity 
but also requires stronger fundamentals, critical thinking, and system-level understanding.
</p>

<h2>Introduction</h2>
<p>
Software development has gone through many evolutions, starting from machine-level programming to high-level programming languages, 
then moving to cloud computing and distributed systems. AI represents the next major shift. AI-powered tools are now embedded in development 
environments and help developers write code faster, detect errors earlier, and automate repetitive tasks. This transformation is not just 
technical — it is changing how developers think about problem solving and system design.
</p>

<h2>AI as a Development Multiplier</h2>
<p>
AI acts as a productivity multiplier by assisting developers during coding. Instead of spending time writing repetitive code, developers 
can focus on solving complex problems and designing better architectures.
</p>

<ul>
<li>
<b>Generating Boilerplate Code:</b>  
AI can quickly generate standard code structures like API templates, database models, and configuration files. 
This reduces development time and allows developers to focus on business logic instead of repetitive setup tasks.
</li>

<li>
<b>Providing Smart Code Suggestions:</b>  
AI tools analyze context and suggest code completions, improving coding speed and reducing syntax errors. 
They also recommend optimized coding patterns based on large training datasets.
</li>

<li>
<b>Translating Code Between Languages:</b>  
AI can convert code from one programming language to another, which helps when migrating legacy systems 
or working across multiple technology stacks.
</li>

<li>
<b>Explaining Legacy Code:</b>  
AI can analyze existing codebases and explain what the code does. This is useful for maintaining old systems 
where documentation is missing or outdated.
</li>

<li>
<b>Creating Documentation:</b>  
AI can automatically generate documentation, saving time and improving project maintainability.
</li>
</ul>

<h2>Natural Language Programming</h2>
<p>
Natural language programming allows developers to describe functionality using normal human language, and AI converts it into working code. 
This makes software development more accessible and faster, but it also introduces risks if developers rely on AI without understanding 
the generated logic.
</p>


<ul>
<li>
Developers can describe application features and generate prototype code instantly.
</li>
<li>
Developers can describe bugs and get debugging suggestions.
</li>
<li>
Developers can design system structure using prompts and receive architecture suggestions.
</li>
<li>
However, if developers skip learning fundamentals, they may create systems they cannot maintain or debug.
</li>
</ul>

<h2>Reduction of Repetitive Work</h2>
<p>
AI is automating repetitive development tasks. This changes the role of developers from code writers to system designers and decision makers.
</p>


<ul>
<li>
<b>CRUD Operations:</b>  
AI can generate Create, Read, Update, Delete operations automatically, which were previously time-consuming but low-complexity tasks.
</li>

<li>
<b>Unit Test Generation:</b>  
AI can generate test cases by analyzing code logic, helping developers improve code reliability.
</li>

<li>
<b>Documentation Writing:</b>  
AI can generate user manuals and developer documentation based on code structure.
</li>

<li>
<b>Basic Refactoring:</b>  
AI can improve code readability and performance by suggesting better structures.
</li>
</ul>

<h2>AI in Testing and Debugging</h2>
<p>
AI improves software reliability by identifying potential problems early and helping developers fix them faster.
</p>

<h3>Detailed Explanation</h3>
<ul>
<li>
<b>Predicting Bug-Prone Areas:</b>  
AI can analyze patterns and identify code sections likely to contain bugs.
</li>

<li>
<b>Generating Edge-Case Tests:</b>  
AI can create test cases that developers might overlook, improving software robustness.
</li>

<li>
<b>Log Analysis:</b>  
AI can analyze system logs and detect unusual patterns indicating failures.
</li>

<li>
<b>Root Cause Suggestions:</b>  
AI can suggest possible causes of errors, reducing debugging time.
</li>
</ul>

<h2>Future Skills for Developers</h2>

<h3>Technical Skills</h3>
<ul>
<li>
<b>System Design:</b>  
Developers must understand how to design scalable and maintainable systems.
</li>

<li>
<b>AI Integration:</b>  
Developers must know how to integrate AI models into real-world applications.
</li>

<li>
<b>Cloud and Distributed Systems:</b>  
Modern applications run on cloud infrastructure and distributed architectures.
</li>

<li>
<b>Security-Focused Development:</b>  
Developers must ensure AI-generated code is secure and follows best practices.
</li>
</ul>

<h3>Thinking Skills</h3>
<ul>
<li>
<b>Problem Solving:</b>  
Breaking complex problems into smaller manageable components.
</li>

<li>
<b>Critical Evaluation:</b>  
Verifying AI-generated code before production use.
</li>

<li>
<b>Risk Analysis:</b>  
Understanding trade-offs between speed, performance, and security.
</li>
</ul>

<h2>Challenges and Risks</h2>

<ul>
<li>
<b>Security Risks:</b>  
AI-generated code may introduce hidden vulnerabilities if not reviewed carefully.
</li>

<li>
<b>Legal Concerns:</b>  
Ownership of AI-generated code and training data sources is still unclear.
</li>

<li>
<b>Over-Dependence:</b>  
Developers may lose deep technical skills if they rely too much on AI tools.
</li>

<li>
<b>Skill Gap:</b>  
Highly skilled developers will benefit more, while others may struggle to keep up.
</li>
</ul>

<h2>Conclusion</h2>
<p>
AI is not replacing software developers. Instead, it is changing the definition of software engineering. 
The future developer will focus more on designing systems, validating AI outputs, and solving complex problems. 
The industry is moving from manual coding toward intelligent system design.
</p>

<p>
In the future, success will depend on how well developers can collaborate with AI rather than compete against it.
</p>
            `,
            isLinkedInPost: false
        }
    ];
}

// Render blog posts dynamically
function renderBlogPosts() {
    const blogContainer = document.getElementById('blog-container') || document.querySelector('.blog__container');
    if (!blogContainer) return;
    
    // Apply current filters
    applyFilters();
    
    // Clear container
    blogContainer.innerHTML = '';
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, filteredPosts.length);
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    // Render each post
    postsToShow.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogContainer.appendChild(postElement);
    });
    
    // Update pagination
    updatePagination();
    
    // Update statistics
    updateBlogStatistics();
}

// Create individual blog post element
function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog__content';
    article.setAttribute('data-category', post.category);
    article.setAttribute('data-title', post.title);
    article.setAttribute('data-date', post.date);
    
    const categoryClass = post.category.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    const difficultyIcon = getDifficultyIcon(post.difficulty);
    const tagsHtml = post.tags.slice(0, 3).map(tag => `<span class="blog__tag">${tag}</span>`).join('');
    
    article.innerHTML = `
        <div class="blog__img-container">
            <img src="${post.image}" alt="${post.title}" class="blog__img" onerror="this.src='assets/img/about.jpg'">
            <div class="blog__overlay">
                <div class="blog__tags">
                    ${tagsHtml}
                </div>
            </div>
            ${post.isLinkedInPost ? '<div class="blog__linkedin-badge"><i class="uil uil-linkedin"></i></div>' : ''}
        </div>
        <div class="blog__data">
            <div class="blog__header">
                <span class="blog__date">
                    <i class="uil uil-calendar-alt"></i>
                    ${formatDate(post.date)}
                </span>
                <div class="blog__meta-info">
                    <span class="blog__author">
                        <i class="uil uil-user"></i>
                        ${post.author}
                    </span>
                    <span class="blog__views">
                        <i class="uil uil-eye"></i>
                        ${post.views} views
                    </span>
                </div>
            </div>
            <h3 class="blog__title">${post.title}</h3>
            <p class="blog__description">${post.excerpt}</p>
            <div class="blog__meta">
                <span class="blog__category ${categoryClass}">${getCategoryDisplayName(post.category)}</span>
                <span class="blog__read-time">
                    <i class="uil uil-clock"></i>
                    ${post.readTime}
                </span>
                <span class="blog__difficulty">
                    ${difficultyIcon}
                    ${post.difficulty}
                </span>
            </div>
            <div class="blog__actions">
                <button class="blog__button blog__read-btn" onclick="openFullBlogModal('${post.id}')">
                    Read More
                    <i class="uil uil-arrow-right button__icon"></i>
                </button>
                <div class="blog__social">
                    <button class="blog__social-btn" onclick="likeBlog(this)" data-action="like" data-post-id="${post.id}">
                        <i class="uil uil-heart"></i>
                        <span>${post.likes}</span>
                    </button>
                    <button class="blog__social-btn" onclick="shareBlog('${post.title}')" data-action="share">
                        <i class="uil uil-share-alt"></i>
                    </button>
                    <button class="blog__social-btn" onclick="bookmarkBlog(this)" data-action="bookmark">
                        <i class="uil uil-bookmark"></i>
                    </button>
                    ${post.isLinkedInPost ? `
                    <a href="${post.linkedinUrl}" target="_blank" class="blog__social-btn blog__linkedin-link">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    return article;
}

// Open full blog modal with complete content
function openFullBlogModal(postId) {
    const post = currentBlogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('blog-modal') || createBlogModal();
    const modalContent = modal.querySelector('.blog__modal-content') || modal.querySelector('#blog-modal-content');
    
    let fullContentHtml = '';
    
    if (post.content && post.content.sections) {
        // Full structured content
        fullContentHtml = `
            <div class="blog__modal-header">
                <span class="blog__modal-close" onclick="closeBlogModal()">&times;</span>
                <h1 class="blog__modal-title">${post.title}</h1>
                <div class="blog__modal-meta">
                    <span class="blog__modal-author">By ${post.author}</span> • 
                    <span class="blog__modal-date">${formatDate(post.date)}</span> • 
                    <span class="blog__modal-category">${getCategoryDisplayName(post.category)}</span>
                    ${post.isLinkedInPost ? ' • <i class="uil uil-linkedin"></i> LinkedIn Post' : ''}
                </div>
                <div class="blog__modal-tags">
                    ${post.tags.map(tag => `<span class="blog__modal-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog__modal-stats">
                    <span><i class="uil uil-eye"></i> ${post.views} views</span>
                    <span><i class="uil uil-heart"></i> ${post.likes} likes</span>
                    <span><i class="uil uil-clock"></i> ${post.readTime}</span>
                </div>
            </div>
            <div class="blog__modal-body">
                ${post.content.introduction || ''}
                ${post.content.sections.map(section => `
                    <h2>${section.title}</h2>
                    ${section.content}
                `).join('')}
                ${post.content.conclusion || ''}
                
                ${post.isLinkedInPost ? `
                    <div class="blog__linkedin-cta">
                        <h3>Engage on LinkedIn</h3>
                        <p>This content was originally shared on LinkedIn. Join the conversation!</p>
                        <a href="${post.linkedinUrl}" target="_blank" class="button">
                            <i class="uil uil-linkedin"></i>
                            View on LinkedIn
                        </a>
                    </div>
                ` : ''}
                
                <div class="blog__modal-social">
                    <h3>Share this article</h3>
                    <div class="blog__modal-social-buttons">
                        <button onclick="shareBlog('${post.title}')" class="button button--small">
                            <i class="uil uil-share-alt"></i> Share
                        </button>
                        <button onclick="likeBlogModal('${post.id}')" class="button button--small">
                            <i class="uil uil-heart"></i> Like
                        </button>
                        <button onclick="bookmarkBlogModal('${post.id}')" class="button button--small">
                            <i class="uil uil-bookmark"></i> Bookmark
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (post.fullContent) {
        // Simple full content
        fullContentHtml = `
            <div class="blog__modal-header">
                <span class="blog__modal-close" onclick="closeBlogModal()">&times;</span>
                <h1 class="blog__modal-title">${post.title}</h1>
                <div class="blog__modal-meta">
                    <span class="blog__modal-author">By ${post.author}</span> • 
                    <span class="blog__modal-date">${formatDate(post.date)}</span>
                </div>
            </div>
            <div class="blog__modal-body">
                ${post.fullContent}
            </div>
        `;
    }
    
    modalContent.innerHTML = fullContentHtml;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Update view counter
    updateViewCounter(postId);
}

// Initialize blog controls
function initializeBlogControls() {
    // Search functionality
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            currentPage = 1; // Reset to first page
            renderBlogPosts();
        });
    }
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.blog__filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPage = 1; // Reset to first page
            renderBlogPosts();
        });
    });
    
    // Newsletter subscription
    const subscribeForm = document.querySelector('.blog__subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', handleNewsletterSubscription);
    }
}

// Apply current filters
function applyFilters() {
    const searchTerm = document.getElementById('blog-search')?.value.toLowerCase() || '';
    const activeFilter = document.querySelector('.blog__filter-btn.active')?.dataset.filter || 'all';
    
    filteredPosts = currentBlogPosts.filter(post => {
        // Search filter
        const matchesSearch = !searchTerm || 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Category filter
        const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
        
        return matchesSearch && matchesCategory;
    });
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginationContainer = document.querySelector('.blog__pagination');
    
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';
    paginationContainer.innerHTML = `
        <button class="blog__pagination-btn" onclick="changeBlogPage(-1)" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="uil uil-angle-left"></i> Previous
        </button>
        <div class="blog__pagination-numbers">
            ${Array.from({length: totalPages}, (_, i) => `
                <button class="blog__pagination-number ${i + 1 === currentPage ? 'active' : ''}" 
                        onclick="goToBlogPage(${i + 1})">${i + 1}</button>
            `).join('')}
        </div>
        <button class="blog__pagination-btn" onclick="changeBlogPage(1)" ${currentPage === totalPages ? 'disabled' : ''}>
            Next <i class="uil uil-angle-right"></i>
        </button>
    `;
}

// Pagination functions
function changeBlogPage(direction) {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderBlogPosts();
        scrollToBlogSection();
    }
}

function goToBlogPage(page) {
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderBlogPosts();
        scrollToBlogSection();
    }
}

function scrollToBlogSection() {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update blog statistics
function updateBlogStatistics() {
    const statsElements = {
        totalPosts: document.querySelector('#total-posts') || document.querySelector('.blog__stats-number'),
        totalReaders: document.querySelectorAll('.blog__stats-number')[1],
        totalCategories: document.querySelectorAll('.blog__stats-number')[2]
    };
    
    if (statsElements.totalPosts) {
        statsElements.totalPosts.textContent = currentBlogPosts.length;
    }
    
    if (statsElements.totalReaders) {
        const totalViews = currentBlogPosts.reduce((sum, post) => sum + post.views, 0);
        statsElements.totalReaders.textContent = Math.floor(totalViews / 10) + '+'; // Estimate readers from views
    }
    
    if (statsElements.totalCategories) {
        const uniqueCategories = [...new Set(currentBlogPosts.map(post => post.category))];
        statsElements.totalCategories.textContent = uniqueCategories.length;
    }
}

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function getDifficultyIcon(difficulty) {
    const icons = {
        'Beginner': '<i class="uil uil-signal-alt-3"></i>',
        'Intermediate': '<i class="uil uil-signal-alt"></i>',
        'Advanced': '<i class="uil uil-signal"></i>',
        'Expert': '<i class="uil uil-signal"></i>'
    };
    return icons[difficulty] || '<i class="uil uil-signal-alt"></i>';
}

function getCategoryDisplayName(category) {
    const names = {
        'ai-ml': 'AI/ML',
        'iot': 'IoT',
        'embedded': 'Embedded',
        'web-dev': 'Web Dev',
        'tutorials': 'Tutorials'
    };
    return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

function updateViewCounter(postId) {
    const postIndex = currentBlogPosts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        currentBlogPosts[postIndex].views += 1;
        // Update display if post is visible
        renderBlogPosts();
    }
}

// Social interaction functions
function likeBlog(button) {
    const postId = button.dataset.postId;
    const counter = button.querySelector('span');
    const isLiked = button.classList.toggle('liked');
    
    let count = parseInt(counter.textContent) || 0;
    
    if (isLiked) {
        count++;
        button.style.animation = 'pulse 0.3s ease';
        showNotification('Post liked! ❤️');
    } else {
        count--;
        showNotification('Like removed');
    }
    
    counter.textContent = count;
    setTimeout(() => button.style.animation = '', 300);
    
    // Update post data
    const postIndex = currentBlogPosts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        currentBlogPosts[postIndex].likes = count;
    }
}

function shareBlog(title) {
    const url = window.location.href;
    const text = `Check out this blog post: ${title}`;
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: url
        }).then(() => {
            showNotification('Post shared successfully! 📤');
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(title, url);
        });
    } else {
        fallbackShare(title, url);
    }
}

function fallbackShare(title, url) {
    const shareText = `${title} - ${url}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Link copied to clipboard! 📋');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Link copied to clipboard! 📋');
    }
}

function bookmarkBlog(button) {
    const isBookmarked = button.classList.toggle('bookmarked');
    
    if (isBookmarked) {
        showNotification('Post bookmarked! 🔖');
        button.style.animation = 'pulse 0.3s ease';
    } else {
        showNotification('Bookmark removed');
    }
    
    setTimeout(() => button.style.animation = '', 300);
}

// Modal functions
function createBlogModal() {
    const modal = document.createElement('div');
    modal.id = 'blog-modal';
    modal.className = 'blog__modal';
    modal.innerHTML = `
        <div class="blog__modal-content">
            <div id="blog-modal-content"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBlogModal();
        }
    });
    
    return modal;
}

function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Newsletter subscription
function handleNewsletterSubscription(e) {
    e.preventDefault();
    const email = e.target.querySelector('.blog__subscribe-input').value;
    
    if (validateEmail(email)) {
        // Here you would typically send the email to your backend
        showNotification('Thank you for subscribing! 📧 Welcome to the newsletter!');
        e.target.reset();
        
        // You could also trigger a welcome email or add to your mailing list
        console.log('New subscriber:', email);
    } else {
        showNotification('Please enter a valid email address');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? 'var(--first-color)' : 
                            type === 'error' ? '#e74c3c' : 
                            type === 'warning' ? '#f39c12' : 
                            type === 'info' ? '#3498db' : 'var(--first-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Make showNotification globally available
window.showNotification = showNotification;

// LinkedIn integration functions
window.refreshLinkedInPosts = async function() {
    if (typeof manualLinkedInSync === 'function') {
        return await manualLinkedInSync();
    } else if (typeof syncLinkedInPosts === 'function') {
        try {
            showNotification('Syncing LinkedIn posts... ⏳');
            const newPosts = await syncLinkedInPosts();
            currentBlogPosts = [...blogPosts];
            renderBlogPosts();
            showNotification(`Synced ${newPosts.length} LinkedIn posts! 🔄`);
        } catch (error) {
            console.error('Error refreshing LinkedIn posts:', error);
            showNotification('Error syncing LinkedIn posts. Please try again later.', 'error');
        }
    }
};
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)  =>{
    el.addEventListener('click', toggleSkills)

})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.projects__modal'),
      modalBtns = document.querySelectorAll('.projects__button'),
      modalCloses = document.querySelectorAll('.projects__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPaper = new Swiper('.paper__container', {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[data-id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('data-id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    const progressCircle = document.querySelector('.scrollup__progress-circle');
    
    // Calculate scroll progress
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    // Update progress circle
    if (progressCircle) {
        const offset = 157 - (scrollPercent / 100) * 157;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    // Show/hide scroll up button
    if(scrollTop >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== CONTACT FORM VALIDATIONS ====================*/ 
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName(){
    var name = document.getElementById('fullName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Full name is required!';
        return false;
    }
    if( !name.match(/[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?/) ){
        nameError.innerHTML = 'Enter full name!';
        return false;
    }
    nameError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email_id').value;

    if(email.length == 0){
        emailError.innerHTML = 'A valid email address is required!';
        return false;
    }
    // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
        emailError.innerHTML = 'Invalid email!';
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left>0){
        messageError.innerHTML = left + ' more characters are required!';
        return false;
    }
    messageError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
    return true;
}

/*==================== EMAIL SERVICE ====================*/ 
function SendMail(){

    if(!validateName() || !validateEmail() || !validateMessage() ){
        // alert("Please fix the errors to send a message!");
        swal("Sorry!", "Please fix the errors to send a message!", "warning");
        return false;
    }

    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_4ajtfo5", "template_ryff15a", params).then(function (res){
        // alert("Success! " + res.status);
        // alert("Your message has been sent successfully!");
        swal("Success!", "Your message has been sent!", "success");
    })
}

/*==================== SERVICES MODAL ====================*/
const servicesModalViews = document.querySelectorAll('.services__modal'),
      servicesModalBtns = document.querySelectorAll('.services__button'),
      servicesModalCloses = document.querySelectorAll('.services__modal-close')

let servicesModal = function(modalClick){
    servicesModalViews[modalClick].classList.add('active-modal')
}

servicesModalBtns.forEach((servicesModalBtn, i) => {
    servicesModalBtn.addEventListener('click', () =>{
        servicesModal(i)
    })
})

servicesModalCloses.forEach((servicesModalClose) => {
    servicesModalClose.addEventListener('click', () =>{
        servicesModalViews.forEach((servicesModalView) =>{
            servicesModalView.classList.remove('active-modal')
        })
    })
})

/*==================== FAQ TOGGLE ====================*/
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const faqContent = faqItem.querySelector('.faq__content');
    const faqIcon = element.querySelector('.faq__icon');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq__item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq__content').classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
    faqContent.classList.toggle('active');
}

/*==================== NEWSLETTER FORM ====================*/
const newsletterForm = document.querySelector('.newsletter__form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        
        if (email) {
            // You can integrate with your email service here
            swal("Success!", "Thank you for subscribing to our newsletter!", "success");
            newsletterForm.reset();
        } else {
            swal("Error!", "Please enter a valid email address.", "error");
        }
    });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

/*==================== STATISTICS COUNTER ANIMATION ====================*/
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 20);
}

// Intersection Observer for statistics
const statisticsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numbers = entry.target.querySelectorAll('.statistics__number');
            numbers.forEach(number => {
                const target = parseInt(number.textContent);
                animateCounter(number, target);
            });
            statisticsObserver.unobserve(entry.target);
        }
    });
});

const statisticsSection = document.querySelector('.statistics');
if (statisticsSection) {
    statisticsObserver.observe(statisticsSection);
}

/*==================== RESUME MODAL ====================*/
function openResumeModal() {
    document.getElementById('resume-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    document.getElementById('resume-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('resume-modal');
    if (event.target === modal) {
        closeResumeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResumeModal();
    }
});

/*==================== SMOOTH SCROLLING FOR ANCHOR LINKS ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});