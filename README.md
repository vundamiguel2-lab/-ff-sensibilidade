# 🎮 FF Sensibilidade - Free Fire Sensitivity Calculator

Site profissional e completo para calcular e configurar sensibilidade no Free Fire para PC e Celular.

## ✨ Funcionalidades

- 🎯 **Gerador de Sensibilidade** - Cálculos precisos para PC e Celular
- 🔐 **Sistema de Autenticação** - Login/Registro com JWT
- 📱 **Responsivo** - Mobile, Tablet e Desktop
- 🌙 **Tema Dark Gamer** - Interface escura profissional
- 📊 **Calculadora Avançada** - Suporte para múltiplas armas
- 📚 **Guias Completos** - Tutoriais de configuração
- 👥 **Comunidade** - Sistema de comentários e discussões
- ⚡ **Performance** - Otimizado para velocidade

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI moderna
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Estilo responsivo
- **Vite** - Build tool rápido
- **React Router** - Navegação SPA
- **Axios** - HTTP Client

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados
- **JWT** - Autenticação segura
- **bcryptjs** - Hash de senhas
- **Socket.io** - Real-time communication

## 🚀 Começando

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- MongoDB (local ou Atlas)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/vundamiguel2-lab/-ff-sensibilidade.git
cd -ff-sensibilidade

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env

# Inicie em desenvolvimento
npm run dev
```

## 📁 Estrutura do Projeto

```
-ff-sensibilidade/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Serviços API
│   │   ├── hooks/         # Custom hooks
│   │   └── styles/        # Estilos globais
│   └── package.json
├── server/                # Backend Node.js
│   ├── src/
│   │   ├── models/        # Modelos MongoDB
│   │   ├── routes/        # Rotas da API
│   │   ├── controllers/   # Lógica de negócio
│   │   ├── middleware/    # Middlewares
│   │   └── config/        # Configurações
│   └── package.json
├── docs/                  # Documentação
├── .env.example           # Exemplo de variáveis
├── README.md              # Este arquivo
└── package.json           # Dependências raiz
```

## 🔑 Variáveis de Ambiente

```env
# Backend
MONGODB_URI=mongodb://localhost:27017/ff-sensibilidade
JWT_SECRET=sua_chave_secreta_aqui
PORT=5000
NODE_ENV=development

# Frontend
VITE_API_URL=http://localhost:5000
CORS_ORIGIN=http://localhost:5173
```

## 📖 Documentação

- [Guia de Configuração](docs/guia-configuracao.md)
- [API Reference](docs/api-reference.md)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**Desenvolvido por:** vundamiguel2-lab

## 🎯 Roadmap

- [x] Estrutura inicial do projeto
- [x] Setup de dependências
- [x] Configuração do banco de dados
- [ ] Frontend - Login/Registro
- [ ] Frontend - Página inicial
- [ ] Frontend - Calculadora de sensibilidade
- [ ] Frontend - Guias
- [ ] Backend - API de autenticação
- [ ] Backend - API de sensibilidade
- [ ] Sistema de comunidade
- [ ] Deploy em produção

## 💬 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Made with ❤️ for Free Fire players**
