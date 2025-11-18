let sidebar; 

document.addEventListener('DOMContentLoaded', () => {
    sidebar = document.getElementById('sidebar'); 
    const toggleButton = document.getElementById('toggle-sidebar');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

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
    
    enableAutoGrow('.auto-grow');
});

function showpage(name) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const selectedPage = document.getElementById(name);
    
    const currentSidebar = document.getElementById('sidebar'); 
    
    if (selectedPage) {
        selectedPage.classList.add('active');
        if (currentSidebar) {
            currentSidebar.classList.remove('open'); 
        }
    }

    const body = document.body;
    
    if (name === 'Form') {
        body.classList.add('hide-sidebar'); 
    } else {
        body.classList.remove('hide-sidebar');
    }
}

function enableAutoGrow(selector) {
    const areas = document.querySelectorAll(selector);
    areas.forEach(area => {
        area.style.height = 'auto';
        area.style.height = area.scrollHeight + 'px';

        const onInput = e => {
            const ta = e.target;
            ta.style.height = 'auto';              
            ta.style.height = ta.scrollHeight + 'px';
        };
        area.addEventListener('input', onInput);
    });
}