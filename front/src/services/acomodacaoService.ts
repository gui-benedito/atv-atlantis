export const acomodacaoService = {
    listarAcomodacoes: async () => {
        try {
            const response = await fetch('http://localhost:5000/acomodacoes/listar');
            const acomodacoes = await response.json();
            if (acomodacoes) {
                return acomodacoes;
            }
        } catch (error) {
            throw error;
        }
    }
}
