// Validação do formulário
document.querySelector("#formCadastro").addEventListener("submit", function (e) {
    if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
    this.classList.add("was-validated");
});

// Máscara de CPF
cpfInput.addEventListener("input", function () {
    let cpf = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cpf.length > 11) cpf = cpf.slice(0, 11); // Limita o CPF a 11 dígitos
    if (cpf.length <= 3) {
        this.value = cpf;
    } else if (cpf.length <= 6) {
        this.value = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    } else if (cpf.length <= 9) {
        this.value = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else {
        this.value = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    }
});

