# Code Leap Challenge 🚀

Uma aplicação fullstack desenvolvida como parte do desafio Code Leap, com backend Django REST API e frontend em React/TypeScript.

🔗 **Deploy:** [code-leap-chalenge.vercel.app](https://code-leap-chalenge.vercel.app)<br>
🔗 **API:** [https://codeleap-backend-43090959243.southamerica-east1.run.app/carrers/
](https://codeleap-backend-43090959243.southamerica-east1.run.app/carrers/
)


## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Prints](#prints)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [API Endpoints](#api-endpoints)
- [Deploy](#deploy)
- [Contato](#contato)

## 📖 Sobre o Projeto

Este projeto foi desenvolvido como solução para o Code Leap Challenge, demonstrando habilidades em desenvolvimento fullstack com Python/Django no backend e React/TypeScript no frontend. A aplicação permite criar, editar e deletar posts.

### Objetivos do Desafio

- Implementar uma API RESTful com Django
- Criar interface responsiva com React
- Aplicar boas práticas de desenvolvimento
- Demonstrar conhecimento em arquitetura de software

## 📷 Prints

| Login Screen | Feed View | Edit Post | Delete Post|
| :---: | :---: | :---: | :---: |
| ![login](./assets/prints/login.jpeg) | ![main screen](./assets/prints/mainscreen.jpeg) | ![edit](./assets/prints/updatemodal.jpeg) | ![delete](./assets/prints/deletemodal.jpeg) |


## 🚀 Tecnologias

### Backend

- **[Python](https://python.org)** - Linguagem de programação
- **[Django](https://www.djangoproject.com/)** - Framework web
- **[Django REST Framework](https://www.django-rest-framework.org/)** - Toolkit para construção de APIs
- **[Supabase](https://supabase.com/)** - Banco de dados relacional
- **[Docker](https://www.docker.com/)** - Containerização

### Frontend

- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[React](https://react.dev/)** - Biblioteca para construção de interfaces
- **[Tailwind](https://tailwindcss.com/)** - Estilização
- **[Axios](https://axios-http.com/)** - Biblioteca usada para fazer requisições HTTP 

### Ferramentas de Desenvolvimento

- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração de containers
- **[Git](https://git-scm.com/)** - Controle de versão
- **[Vercel](https://vercel.com/)** - Plataforma de deploy
- **[Google Cloud](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run?hl=pt-br)** - Plataforma de deploy da API


## 📝 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/) (versão 29.1.5 ou superior)
- [Docker Compose](https://docs.docker.com/compose/install/) (versão 5.0.1 ou superior)
- [Git](https://git-scm.com/downloads)

### Alternativa sem Docker

Se preferir executar sem Docker, você precisará:

- [Python 3.13+](https://www.python.org/downloads/)
- [Node.js 22.21+](https://nodejs.org/)


> ⚠️ **Importante:** Para o banco de dados Supabase, você **deve** utilizar a URL de conexão via **Session Pooler** (não a URL de conexão direta). Para obter a URL correta:
> 
> 1. Acesse o painel do Supabase
> 2. Vá em **Connect** na aba superior do painel
> 3. Na seção **Connect to your project**, selecione o método de conexão **Session Pooler**
> 4. Copie a URL no formato: 
<br>
`postgresql://postgres.****************:[YOUR-PASSWORD]@aws-1-sa-east-1.pooler.supabase.com:5432/postgres`
> 5. Substitua `[YOUR-PASSWORD]` pela senha do seu banco de dados

## 🔧 Instalação e Execução

### Opção 1: Usando Docker 

1. **Clone o repositório:**

```bash
git clone https://github.com/SidneyDaniel/code-leap-chalenge.git
cd code-leap-chalenge
```

2. **Inicie os containers:**

```bash
docker-compose up -d
```

Isso irá:
- Criar e iniciar o container do backend Django
- Criar e iniciar o container do frontend React
- Configurar a rede entre os containers

3. **Acesse a aplicação:**

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- Admin Django: http://localhost:8000/admin

### Opção 2: Executar Manualmente

#### Backend

1. **Navegue até a pasta do backend:**

```bash
cd backend
```

2. **Crie um ambiente virtual:**

```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. **Instale as dependências:**

Não se esqueça de adicionar o arquivo `env.` com a variável `DATABASE_URL`

```bash
pip install -r requirements.txt
```

4. **Configure o banco de dados:**

```bash
python manage.py migrate
```

5. **Crie um superusuário (opcional):**

```bash
python manage.py createsuperuser
```

6. **Inicie o servidor:**

```bash
python manage.py runserver
```

#### Frontend

1. **Em outro terminal, navegue até a pasta do frontend:**

```bash
cd frontend
cd codeleap-frontend
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

## 🔌 API Endpoints

Base URL: `http://localhost:8000/`

### Endpoints Disponíveis

```
GET    /careers/        # Lista todos os posts
POST   /careers/        # Cria um novo post
GET    /careers/{id}/   # Obtém um post específico
PUT    /careers/{id}/   # Atualiza um recurso
DELETE /careers/{id}/   # Deleta um recurso
```

### Exemplo de Requisição

```bash
curl -s http://localhost:8000/carrers/ | jq

[
  {
    "id": 01,
    "username": "Jorge",
    "created_datetime": "2026-01-17T14:21:59.573034Z",
    "title": "Hello",
    "content": "hello"
  },
]
```

## 🌐 Deploy

### Frontend (Vercel)

O frontend está hospedado na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push na branch main

### Backend

O backend pode ser deployado em plataformas como:

- [Google cloud](https://cloud.google.com/?hl=pt_br)
- [Railway](https://railway.app/)
- [Heroku](https://www.heroku.com/)
- [DigitalOcean](https://www.digitalocean.com/)
- [AWS](https://aws.amazon.com/)



## 👤 Contato

**Sidney Daniel**

- GitHub: [@SidneyDaniel](https://github.com/SidneyDaniel)
- LinkedIn: [@Sidney D. Lopes](https://www.linkedin.com/in/sidney-daniel-lopes-a514801b7/)
- Email: [sidneydaniel17@gmail.com]

---

⭐️ Desenvolvido como parte do Code Leap Challenge
