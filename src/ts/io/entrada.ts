import promptSync from "prompt-sync";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        let prompt = promptSync();
        let valor = prompt(`${mensagem} `)
        let numero = new number(valor)
        return numero.valueOf()
    }
    public receberTexto(mensagem: string): string {
        let prompt = promptSync();
        let texto = prompt(`${mensagem} `)
        return texto
    }
    public receberData(mensagem: string): Date {
        let prompt = promptSync();
        let texto = prompt(`${mensagem}, no padrão dd/MM/yyyy: `)
        let partes = texto.split('/')
        let ano = new number(partes[2])
        let mes = new number(partes[1])
        let dia = new number(partes[0])
        let data = new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
        return data
    }
}