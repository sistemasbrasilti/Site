document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-sidebar');
    const links = document.querySelectorAll('.sidebar-menu a, a[href="#Form"]');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const pageName = href.substring(1);
                showpage(pageName);
            }
        });
    });

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

    if (pageName === 'Form' || pageName === 'Initial') {
        body.classList.add('form-active');
    } else {
        body.classList.remove('form-active');
    }
    if (pageName === 'Initial') {
        body.classList.add('initial-active');
        body.classList.remove('Initial-2')
    } else {
        body.classList.remove('initial-active');
        body.classList.add('Initial-2')
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

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});