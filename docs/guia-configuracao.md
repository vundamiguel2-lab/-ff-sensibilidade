# 📚 Guia de Configuração - FF Sensibilidade

## Instalação Completa

### 1. Clonar o Repositório

```bash
git clone https://github.com/vundamiguel2-lab/-ff-sensibilidade.git
cd -ff-sensibilidade
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

- `MONGODB_URI`: URL do seu banco MongoDB
- `JWT_SECRET`: Chave secreta para tokens JWT
- `PORT`: Porta do servidor (padrão: 5000)

### 4. Iniciar o Desenvolvimento

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Estrutura de Pastas

### Backend
- `models/`: Esquemas do Mongoose
- `routes/`: Rotas da API
- `controllers/`: Lógica de negócio
- `middleware/`: Autenticação, validação

### Frontend
- `components/`: Componentes React reutilizáveis
- `pages/`: Páginas da aplicação
- `services/`: Chamadas à API
- `hooks/`: Hooks customizados
