document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-sidebar');
    const links = document.querySelectorAll('.sidebar-menu a');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
    enableAutoGrow();
    showpage('Initial');
});

function showpage(pageName) {
    const pages = document.querySelectorAll('.page');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    pages.forEach(page => {
        page.classList.remove('active');
    });

    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    if (sidebar) {
        sidebar.classList.remove('open');
    }

    if (pageName === 'Initial') {
        body.classList.add('form-active');
    } else {
        body.classList.remove('form-active');
    }
}


function enableAutoGrow() {
    const textareas = document.querySelectorAll('textarea.auto-grow');

    textareas.forEach(textarea => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';

        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    });
}    
