import Bacon from "../../assets/bacon.jpg";
import porcao from "../../assets/porcaobatata.jpg";
import Rodizio from "../../assets/rodizio.jpg";

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
                nome: "Rodízio Mini-Burguer R$ 79,99" ,
                imagem: Rodizio,
            },
            {
                nome: "Combo Bacon R$23,90",
                imagem: Bacon,
            },
            {
                nome: "Porção Batata Frita R$ 25,99",
                imagem: porcao,
            },
        ]
    }
} 

export default produto;