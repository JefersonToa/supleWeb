function calcularPropina() {
            const montoInput = document.getElementById('monto');
            const porcentajeInput = document.getElementById('porcentaje');
            const resultadoCard = document.getElementById('resultado');
            const errorMonto = document.getElementById('errorMonto');

            const monto = parseFloat(montoInput.value);
            const porcentaje = parseFloat(porcentajeInput.value);

            // Validación
            if (isNaN(monto) || monto <= 0) {
                errorMonto.textContent = 'Por favor, ingresa un monto válido.';
                resultadoCard.style.display = 'none';
                return;
            } else {
                errorMonto.textContent = '';
            }

            const propina = monto * porcentaje;
            const total = monto + propina;

            document.getElementById('cuenta').textContent = monto.toFixed(2);
            document.getElementById('propina').textContent = propina.toFixed(2);
            document.getElementById('total').textContent = total.toFixed(2);

            resultadoCard.style.display = 'block';
        }