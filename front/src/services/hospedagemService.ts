export const hospedagemService = {
    registrarHospedagem: async (data: any) => {
        try {
            console.log(data)
            const response = await fetch('http://localhost:5000/hospedagens/registrar', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "content-type": "application/json; charset=UTF-8" }
            });
            const hospedagemRegistrada = await response.json();
            if (hospedagemRegistrada) {
                return hospedagemRegistrada;
            }
        } catch (error) {
            throw error;
        }
    },

    listarHospedagensAtivas: async () => {
        try {
            const response = await fetch('http://localhost:5000/hospedagens/listar-ativas');
            const hospedagensAtivas = await response.json();
            if (hospedagensAtivas) {
                return hospedagensAtivas;
            }
        } catch (error) {
            throw error;
        }
    },

    registrarCheckOut: async (data: any) => {
        try {
            const response = await fetch('http://localhost:5000/hospedagens/checkout', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "content-type": "application/json; charset=UTF-8" }
            });
            const checkOutRegistrado = await response.json();
            if (checkOutRegistrado) {
                return checkOutRegistrado;
            }
        } catch (error) {
            throw error;
        }
    }
}
