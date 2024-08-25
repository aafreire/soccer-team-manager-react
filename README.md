```markdown
# Soccer Team Manager - Frontend

Este é o frontend do projeto Soccer Team Manager, uma aplicação desenvolvida em React que interage com a API do backend para gerenciar times de futebol. A aplicação permite listar jogadores, cadastrar novos jogadores, atualizar informações dos jogadores existentes e gerar times de forma equilibrada.

## Tecnologias Utilizadas

- React
- Axios (para requisições HTTP)
- Docker (para o ambiente de desenvolvimento)
- AWS (para hospedagem em produção)

## Requisitos

Antes de começar, certifique-se de ter o backend configurado e rodando. Você pode encontrar o código e as instruções do backend no seguinte repositório:

[Backend do Soccer Team Manager](https://github.com/aafreire/soccer_team_manager.git)

## Configuração do Ambiente

1. Clone este repositório:

   ```bash
   git clone <url_deste_repositorio>
   cd soccer_team_manager_frontend
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure a URL da API do backend:

   ```env
   REACT_APP_API_URL=http://localhost:8080/api
   ```

   > **Nota**: Certifique-se de que o backend esteja rodando no `localhost` na porta `8080` ou ajuste a URL de acordo com sua configuração.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   Isso irá iniciar a aplicação no modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

5. Para construir o projeto para produção:

   ```bash
   npm run build
   ```

   Esse comando irá criar uma versão otimizada do projeto na pasta `build`.

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e o desenvolvimento contínuo, seguindo boas práticas de desenvolvimento em React:

- **components/**: Contém os componentes reutilizáveis da aplicação.
- **pages/**: Contém as páginas principais da aplicação.
- **services/**: Contém a configuração dos serviços, como as requisições à API utilizando o Axios.
- **styles/**: Contém os arquivos CSS globais.
- **.env**: Arquivo de configuração das variáveis de ambiente.

## Integração com o Backend

Esta aplicação está completamente integrada com o backend desenvolvido em Laravel. Certifique-se de seguir as instruções no repositório do backend para configurar e rodar a API antes de iniciar o frontend.

Você pode clonar o repositório do backend utilizando o seguinte comando:

```bash
git clone https://github.com/aafreire/soccer_team_manager.git
```

## Deploy

Para fazer o deploy do frontend em produção, você pode utilizar serviços como AWS S3 e CloudFront, ou qualquer outro serviço de hospedagem estática.

1. Construa a aplicação para produção:

   ```bash
   npm run build
   ```

2. Faça o upload do conteúdo da pasta `build/` para o serviço de hospedagem de sua escolha.

## Notas

- Certifique-se de que o backend esteja rodando e acessível a partir da URL configurada no `.env` para que o frontend funcione corretamente.
- Customize o arquivo `.env` de acordo com o ambiente de produção ou desenvolvimento.

```
