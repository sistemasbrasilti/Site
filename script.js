const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

function showpage(name) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    const selectedPage = document.getElementById(name);
    if (selectedPage) selectedPage.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showpage('Home');

    const links = document.querySelectorAll('.sidebar-menu a');
    links.forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = href.replace('#', '');
                if (target) showpage(target);
            }
        });
    });
});