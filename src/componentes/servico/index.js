import { jogosExclusivos } from "../data";

export const retornarJogos = () => {
    return jogosExclusivos
}

export const buscarJogo = (textoDigitado) => {
    return jogosExclusivos.filter((jogo) => jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase())) || jogosExclusivos.filter((jogo) => jogo.plataforma.toLowerCase().includes((textoDigitado.toLowerCase)))
}

export const filtrarJogo = (plataforma) => {
    return jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma);
} 