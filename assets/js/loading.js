document.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.querySelector('.loading-page');
    
    // Show loading page initially
    showLoading();

    // Hide loading page after 2.5 seconds
    setTimeout(() => {
        hideLoading();
    }, 2500);

    // Handle all link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href && !link.target && !e.ctrlKey && !e.shiftKey) {
            e.preventDefault();
            showLoading();
            setTimeout(() => {
                window.location = link.href;
            }, 100);
        }
    });
});

function showLoading() {
    const loadingPage = document.querySelector('.loading-page');
    if (loadingPage) {
        loadingPage.classList.remove('hidden');
    }
}

function hideLoading() {
    const loadingPage = document.querySelector('.loading-page');
    if (loadingPage) {
        loadingPage.classList.add('hidden');
    }
}
