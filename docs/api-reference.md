# 📖 Referência da API

## Base URL

```
http://localhost:5000/api
```

## Endpoints

### Health Check
- **GET** `/health` - Verifica se o servidor está ativo

### Autenticação (em desenvolvimento)
- **POST** `/auth/register` - Registrar novo usuário
- **POST** `/auth/login` - Login
- **POST** `/auth/logout` - Logout

### Sensibilidade (em desenvolvimento)
- **GET** `/configs` - Listar todas as configurações
- **POST** `/configs` - Criar nova configuração
- **GET** `/configs/:id` - Obter configuração específica
- **PUT** `/configs/:id` - Atualizar configuração
- **DELETE** `/configs/:id` - Deletar configuração

### Comunidade (em desenvolvimento)
- **GET** `/comments` - Listar comentários
- **POST** `/comments` - Criar comentário
