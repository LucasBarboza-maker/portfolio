# SMART RTT ![license](https://img.shields.io/badge/license-Private-blue.svg) ![Java](https://img.shields.io/badge/Java%20Version-17.0.0-red.svg) ![Maven](https://img.shields.io/badge/Maven-4.0.0-green.svg)

Projeto de melhoria de exibição do Grafana e APP baseado em microserviços para encaminhamento de alertas com sua principal STACK de desenvolvimento sendo Java e Angular.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

1. Instalar o [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

2. Instalar uma IDE seja [Eclipse](https://spring.io/tools) ou [VS code](https://code.visualstudio.com/download).

       Caso utilize o VS Code serão necessárias as insatlaçoes de algumas extensões que são:
   
       * Maven for Java
       * Project Manager for Java
       * Java Language Support
       * Test Runner for Java
       * Spring Initializr Java Support
       * Extension Pack for Java
       * Debbuger Pack for Java

4. Instalar [Postgres 14.7](https://www.postgresql.org/download/).

5. Instalar [PG Admin](https://www.postgresql.org/download/). (não é necessário, mas altamente recomendável)

6. Instalar [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/).

7. Instalar o [Git](https://git-scm.com/downloads)

   
### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

1. Clone o projeto em sua maquina, direto do Git ou pelo comando abaixo:

   **Lembrando, é necessário abrir o terminal na pasta que você deseja clonar o repositório**
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

2. é necessário criar os bancos: 

Bancos para criar:
* smartrtt-core-db
* smartrtt-analysis-db
* smartrtt-auth-db

pode ser pela interface PG admin ou direto no CLI com o comando abaixo:
```
createdb nome_do_banco
```

3. Agora abra todos os projetos smartrtt em sua IDE e execute-os na mesma ordem abaixo:

       1. smartrtt-service-registry
       2. smartrtt-authuser
       3. smartrtt-core
       4. smartrtt-analysis
       5. smartrtt-collector
       6. smartrtt-api-gateway

   **Se você estiver usando uma maneira mais antiga de executar os comandos são**
   * mvn spring-boot:run -> para executar.
   * mvn clean -> para limpar o projeto (às vezes é nececessário limpar antes de executar).
   * mvn verify -> para verificar a integridade e compilar o projeto.

Após completar os passos acima o projeto deve estar sendo executado em seu computador.

Utilize o Insomnia para acessar as rotas, lembrando que é necessária a autenticação para acessar as rotas faça o login no insomnia

**SWAGGER** -> Para acessar o swagger execute a aplicação e depois acesse o link: http://localhost:8080/webjars/swagger-ui/index.html

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Um agradecimento publicamente 🫂;
* etc.


---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊
