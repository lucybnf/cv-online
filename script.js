<script>
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica si hay un tema preferido en el almacenamiento local
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }

    // Función para alternar entre los temas
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');  // Guardar la preferencia del tema
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light'); // Guardar la preferencia del tema
        }
    });
</script>
