document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-login, .btn-cta'); // Updated to target new class names

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            button.classList.add('hover-scale');
        });

        button.addEventListener('mouseout', function() {
            button.classList.remove('hover-scale');
        });
    });
});
