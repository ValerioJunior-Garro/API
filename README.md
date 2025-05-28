# API
# 🏗️ Materiais de Construção API

Esta é uma API RESTful desenvolvida em ASP.NET Core para gerenciar materiais de construção. Ela permite realizar operações CRUD (Create, Read, Update, Delete) sobre os materiais cadastrados em um banco de dados.

## 🚀 Tecnologias Utilizadas

- [.NET 6 ou superior](https://dotnet.microsoft.com/)
- ASP.NET Core
- Entity Framework Core
- SQLite (ou substituível por outro banco via EF Core)
- Swagger (para documentação da API)

## 📁 Estrutura do Projeto

- `Controllers/MaterialController.cs`: Controlador com os endpoints da API.
- `Models/Material.cs`: Modelo que representa um material de construção.
- `Data/AppDbContext.cs`: Contexto de banco de dados com EF Core.
- `Program.cs`: Configuração e inicialização da aplicação.
- `MateriaisConstrucao.csproj`: Arquivo de projeto do .NET.

## 📦 Endpoints da API

| Método | Rota                  | Descrição                          |
|--------|-----------------------|-------------------------------------|
| GET    | `/api/material`       | Lista todos os materiais           |
| GET    | `/api/material/{id}`  | Retorna um material específico     |
| POST   | `/api/material`       | Cria um novo material              |
| PUT    | `/api/material/{id}`  | Atualiza os dados de um material   |
| DELETE | `/api/material/{id}`  | Remove um material do sistema      |

## 🛠️ Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone [https://seu-repo.git](https://github.com/ValerioJunior-Garro/API.git)
   cd MateriaisConstrucao
