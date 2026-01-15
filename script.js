document.addEventListener('DOMContentLoaded', () => {
    
    // Função Copiar Email
    const btnEmail = document.getElementById('btn-email');
    if(btnEmail) {
        btnEmail.addEventListener('click', () => {
            const email = "assessoria@donnagency.com";
            
            navigator.clipboard.writeText(email).then(() => {
                showToast();
            }).catch(() => {
                alert("E-mail: " + email);
            });
        });
    }

    function showToast() {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    // Animação de Entrada (Efeito Cascata)
    const cards = document.querySelectorAll('.link-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Pequeno atraso para cada cartão
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});