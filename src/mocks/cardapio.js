import Bacon from "../../assets/bacon.jpg";
import Picanha from "../../assets/picanha.jpg";
import Salmao from "../../assets/salmao.jpg";
import Salada from "../../assets/salada.jpg";

const cardapio = {
    titulo: {
        ti: "Cardápio",
    },  
    lanches: {
        lista: [
            {
                id: 1,
                nome: "Duplo Bacon",
                preco: "R$ 23,90- Combo R$ 33,90",
                ingredientes: "Pão da Casa, Molho de Queijo, Dois Hambúrguer de 100g cada, Queijo Prato, Ketchup Le Pinguê e Bacon",
                imagem: Bacon,
            },
            {
                id: 2,
                nome: "X-Salada",
                preco: "R$ 11,99",
                ingredientes: "Pão, Hambúrguer, Tomate, Alface, Queijo mussarela e Maionese",
                imagem: Salada,
            },
            {
                id: 3,
                nome: "Picanha",
                preco: "R$ 33,90- Combo R$ 53,90",
                ingredientes: "Pão da Casa, Molho de Tomate Le Pinguê, Hambúrguer 190g de Picanha,Catupiry e Alho tostado, queijo, mussarela e maionese",
                imagem: Picanha,
            },
            {
                id: 4,
                nome: "Salmão",
                preco: "R$ 25,90- Combo R$ 35,90",
                ingredientes: "Pão da casa, Maionese de Ervas Finas, Hambúrguer de 170g de Salmão, Molho Tarê, Cream Cheese e Cebolinha",
                imagem: Salmao,
            },
           
        ]
    },
} 

export default cardapio;