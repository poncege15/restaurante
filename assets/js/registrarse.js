document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration");
    const emailInput = document.getElementById("email");
    const password1Input = document.getElementById("password1");
    const password2Input = document.getElementById("password2");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Validación de correo electrónico (puedes agregar más validaciones)
        if (!isValidEmail(emailInput.value)) {
            alert("Ingresa un correo electrónico válido.");
            return;
        }

        // Validación de contraseñas
        if (password1Input.value.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if (password1Input.value !== password2Input.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Si todo está correcto, puedes enviar el formulario o realizar otras acciones
        alert("Formulario válido. ¡Contraseña cambiada con éxito!");
        // Aquí puedes agregar lógica adicional (por ejemplo, enviar datos al servidor).
    });

    // Función para validar el formato del correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});

