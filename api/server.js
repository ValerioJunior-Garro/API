const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const dados = {
 "cimento": [
    {
        nome: "Cimento CP II",
        imagem: "https://pbs.twimg.com/media/E46zt4RXwAMPl7w.jpg",
        descricao: "Cimento Portland ideal para obras gerais."
      },
      {
        nome: "Cimento Branco",
        imagem: "https://images.tcdn.com.br/img/img_prod/1111274/cimento_branco_estrutural_1kg_cola_bem_4895_1_b7fb0ab3f73b578be43b1e738d9d4d68.png",
        descricao: "Usado em acabamentos finos e decorativos."
      }
],

  "tijolos": [
    {
      nome: "Tijolo Baiano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHCm8P4Cbv2S5HsitXZ8QauwFwPUSj6GUlQ&s",
      descricao: "Tijolo leve e fácil de assentar."
    },
    {
      nome: "Tijolo Maciço",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19x3iOPRKb4uTUTnjFBieXDoZFBNS7xXzPA&s",
      descricao: "Mais resistente, ideal para estruturas de apoio."
    }
  ],
  "ferragens": [
    {
      nome: "Verga de Aço 8mm",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1uOxzL_l0dO8GH95fMvJtkkXTfmuzQpXsw&s",
      descricao: "Para reforço estrutural."
    },
    {
      nome: "Tela Soldada",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3KFBSNTyZ4eTX-i-WwW8dAj7qTQ2lHw1CA&s",
      descricao: "Usada para lajes e contrapiso."
    }
  ],
  "areia": [
    {
      nome: "Areia Grossa",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSFRLWmPlj3J8m6WlgQ_a5c8tUBsgApXiuQ&s",
      descricao: "Para concreto e reboco grosso."
    },
    {
      nome: "Areia Fina",
      imagem: "https://images.tcdn.com.br/img/img_prod/1209337/areia_fina_a_granel_923_1_f666cc5fb7c7426236c7e3f5e23eab78.jpg",
      descricao: "Ideal para acabamento e argamassa fina."
    }
  ],
  "tintas": [
    {
      nome: "Tinta Acrílica Fosca",
      imagem: "https://cdn.awsli.com.br/600x450/25/25795/produto/274179442/screenshot-2024-06-14-131522-h0lgemiv3a.png",
      descricao: "Secagem rápida e lavável."
    },
    {
      nome: "Tinta Esmalte Sintético",
      imagem: "https://telhanorte.vtexassets.com/arquivos/ids/341408/Esmalte-sintetico-alto-brilho-Coralit-Ultraresistencia-branco-900ml-Coral-51.jpg?v=637000073821330000",
      descricao: "Para metais e madeiras, acabamento brilhante."
    }
  ]
};

app.get('/api/materiais', (req, res) => {
  res.json(dados);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}/api/materiais`);
});
