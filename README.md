# API Test Automation with Jest and PactumJS

> Automação de testes de API utilizando JestJS e PactumJS.

## GitHub Actions

[![Node.js CI](https://github.com/dauaneneves/Dauane-Turma01-ApiTest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/dauaneneves/Dauane-Turma01-ApiTest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dauaneneves_Dauane-Turma01-ApiTest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dauaneneves_Dauane-Turma01-ApiTest)

## Getting Started

### Pactum Docs:

- [PactumJS](https://pactumjs.github.io/)

### Pré-requisitos:

- Node.js `v20` ou superior
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/dauaneneves/Dauane-Turma01-ApiTest.git
cd Dauane-Turma01-ApiTest
npm install
```

## Como executar os testes

Execute os testes com:

```bash
npm test
```

Ou, para rodar o pipeline completo (incluindo lint e prettier):

```bash
npm run ci
```

📂 Após a execução, os relatórios de testes estarão na pasta `./output`.

## Endpoints Testados

Este projeto realiza testes automatizados de integração para a API [FakeRestAPI](https://fakerestapi.azurewebsites.net/index.html), com foco nos endpoints relacionados a **Users**:

- `GET /api/v1/Users` – Lista todos os usuários
- `POST /api/v1/Users` – Cria um novo usuário
- `GET /api/v1/Users/{id}` – Busca um usuário pelo ID
- `PUT /api/v1/Users/{id}` – Atualiza um usuário pelo ID
- `DELETE /api/v1/Users/{id}` – Remove um usuário pelo ID

A documentação completa da API está disponível [aqui](https://fakerestapi.azurewebsites.net/index.html).

## Padronização de Código

- Para formatar o código:  
  `npm run format`

- Para checar problemas de lint:  
  `npm run lint`

## Análise de Qualidade

A análise de qualidade do código é realizada com SonarCloud. Acompanhe os status no badge acima ou acesse o [relatório detalhado](https://sonarcloud.io/summary/new_code?id=dauaneneves_Dauane-Turma01-ApiTest).

## Referências

- [Jest Docs](https://jestjs.io/docs/getting-started)
- [PactumJS Docs](https://pactumjs.github.io/)
- [FakeRestAPI Swagger](https://fakerestapi.azurewebsites.net/index.html)
- [SonarCloud](https://sonarcloud.io/)
- [GitHub Actions](https://github.com/features/actions)
