// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const pages = document.querySelectorAll('.page');
    
    // Function to switch pages
    function switchPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(pageId).classList.add('active');
        
        // Update active states in navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Update active states in sidebar
        sidebarItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            }
        });
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
        });
    });
    
    // Add click event listeners to sidebar items
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
        });
    });
    
    // Initialize with analytics page
    switchPage('analytics');
    
    // Form submission for reports
    const reportForm = document.querySelector('#reports .btn-primary');
    if (reportForm) {
        reportForm.addEventListener('click', function() {
            alert('Report submitted successfully!');
            // In a real application, you would send the form data to a server here
        });
    }
    
    // Clear form functionality
    const clearFormBtn = document.querySelector('#reports .btn-secondary');
    if (clearFormBtn) {
        clearFormBtn.addEventListener('click', function() {
            const formInputs = document.querySelectorAll('#reports .form-input, #reports .form-textarea, #reports .form-select');
            formInputs.forEach(input => {
                input.value = '';
            });
            alert('Form cleared!');
        });
    }
    
    // File upload functionality
    const fileUploadBtn = document.querySelector('.file-upload-button');
    const fileUploadText = document.querySelector('.file-upload-text');
    
    if (fileUploadBtn && fileUploadText) {
        fileUploadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would trigger a file input dialog
            fileUploadText.textContent = '2 files selected';
        });
    }
    
    // Checklist functionality for resources page
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('.checkbox');
            const description = this.nextElementSibling;
            
            // Toggle checkbox
            if (checkbox.textContent === '✓') {
                checkbox.textContent = '';
            } else {
                checkbox.textContent = '✓';
            }
            
            // Toggle description visibility
            if (description && description.classList.contains('checklist-description')) {
                description.style.display = description.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
    
    // Search functionality for hotlines
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('#hotlines tbody tr');
            
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
    
    // Clear filters for heatmap
    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            const filterInputs = document.querySelectorAll('.filter-input, .search-barangay');
            filterInputs.forEach(input => {
                input.value = '';
            });
            alert('Filters cleared!');
        });
    }
    
    // Logout functionality
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logged out successfully!');
                // In a real application, this would redirect to a login page
            }
        });
    }
    
    // Settings form submission
    const saveSettingsBtn = document.querySelector('#settings .btn-primary');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            alert('Settings saved successfully!');
            // In a real application, this would send the settings to a server
        });
    }
});