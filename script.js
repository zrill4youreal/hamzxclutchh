document.addEventListener('DOMContentLoaded', function() {
    const linkButtons = document.querySelectorAll('.link-button');

    linkButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
