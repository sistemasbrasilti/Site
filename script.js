document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-sidebar');
    const termos = document.getElementById('termos');
    const enviar = document.getElementById('enviar');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    enableAutoGrow();
    showpage('Initial');

    if (termos && enviar) {
        termos.addEventListener('change', function () { enviar.disabled = !this.checked; });

        enviar.form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Formulário enviado com sucesso!');
            enviar.form.reset();
            enviar.disabled = true;
        });
    }
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
        const resize = () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        };

        resize();
        textarea.addEventListener('input', resize);
    });
}