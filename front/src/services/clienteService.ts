export const clienteService = {
    getClientes: async () => {
        try {
            const response = await fetch('http://localhost:5000/clientes/listar')
            const clientesFounded = await response.json()
            if(clientesFounded) {
                return clientesFounded
            }
        } catch (error) {
            throw error
        }
    },

    getCliente: async (id: number) => {
        try {
            const response = await fetch(`http://localhost:5000/clientes/${id}`)
            const clienteFounded = await response.json()
            if(clienteFounded) {
                return clienteFounded
            }
        } catch (error) {
            throw error
        }
    },

    cadastrarCliente: async(data: any) => {
        try {
            console.log(data)
            const response = await fetch(`http://localhost:5000/clientes/cadastrar`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {"content-type": "application/json; charset=UTF-8"}
            })
            const clienteFounded = await response.json()
            if(clienteFounded) {
                return clienteFounded
            }
        } catch (error) {
            throw error
        }
    },

    updateCliente: async(data: any) => {
        try {
            const response = await fetch(`http://localhost:5000/clientes/cadastrar`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {"content-type": "application/json; charset=UTF-8"}
            })
            const clienteFounded = await response.json()
            if(clienteFounded) {
                return clienteFounded
            }
        } catch (error) {
            throw error
        }
    },

    excluirCliente: async(id: any) => {
        try {
            const response = await fetch(`http://localhost:5000/clientes/excluir/${id}`, {
                method: 'DELETE',
                headers: {"content-type": "application/json; charset=UTF-8"}
            })
            const clienteFounded = await response.json()
            if(clienteFounded) {
                return clienteFounded
            }
        } catch (error) {
            throw error
        }
    }
}