import fita_cetim from "../../assets/hamburgue.jpg";
import batata_frita from "../../assets/batata.jpg";


const produto = {
    topo: {
        titulo: "Detalhes do Produto",
    },
    detalhes: {
        nome: "Promoção Maluca",
        descricao: "Lanche Caseiro: Dois Hamburgues, Ovo, Cheddar, Alface, Tomate, Bacon e muito mais.",
        nome2: "Preço: R$39,99",
        botao: "Adicionar na Lista de Pedidos "
    },
    itens: {
        titulo: "Item do Kit",
        lista: [
            {
                nome: "X-Bacon",
                imagem: fita_cetim,
            },
            {
                nome: "Batata Frita",
                imagem: batata_frita,
            },
            {
                nome: "X-Picanha",
                imagem: fita_cetim,
            },
        ]
    }
} 

export default produto;