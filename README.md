# SMART RTT AUTHUSER ![license](https://img.shields.io/badge/license-Private-blue.svg) ![Java](https://img.shields.io/badge/Java%20Version-17.0.0-red.svg) ![Maven](https://img.shields.io/badge/Maven-4.0.0-green.svg)

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

**1.** Clone o projeto em sua maquina, direto do Git ou pelo comando abaixo:

   **Lembrando, é necessário abrir o terminal na pasta que você deseja clonar o repositório**
```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

**2.** Lembre-se de, depois que clonar todos os repositórios necessários, você deve trocar para a branch que usamos normalmente em desenvolvimento, em cada repositório. Use os seguintes comandos:
* Os pulls são só para ter certeza de estar sempre atualizado.
 
        git pull
        git checkout dev
        git pull
 
**3.** Por padrão, sempre que vamos fazer nossas tasks em algum repositório, criamos uma branch separada para essa task. Depois de testarmos e commitarmos o que foi feito para essa branch remota, nós fazemos um pull request para a dev.
Usamos o seguinte padrão para os nomes das branchs:
* feature/ - quando estamos fazendo uma task para adicionar um recurso novo. Ex:
        ```git checkout -b feature/swagger```
* hotfix/ - quando estamos fazendo uma task para corrigir ou modificar um recurso já existente. Ex:
        ```git checkout -b hotfix/swagger ```
 
**OBS:** sempre que for criar uma nova branch, crie a partir da dev atualizada, a não ser que você já tenha uma outra branch que foi feita a partir da dev e, por algum motivo, terá que criar a partir dela por conta de algumas modificações suas que ainda não estão na dev. Mas, sempre que possível, crie a nova branch a partir da dev (e lembre-se de mante-la atualizada com a remota).

**4.** é necessário criar os bancos: 

Bancos para criar:
* smartrtt-core-db
* smartrtt-analysis-db
* smartrtt-auth-db

pode ser pela interface PG admin ou direto no CLI com o comando abaixo:
```
createdb nome_do_banco
```

**5.** Agora abra todos os projetos smartrtt em sua IDE e execute-os na mesma ordem abaixo:

       1. smartrtt-service-registry
       2. smartrtt-authuser
       3. smartrtt-core
       4. smartrtt-analysis
       5. smartrtt-collector
       6. smartrtt-api-gateway

   **Se você estiver usando uma maneira mais antiga de executar os comandos são**
                               
    mvn spring-boot:run -> para executar.
    mvn clean -> para limpar o projeto (às vezes é nececessário limpar antes de executar).
    mvn verify -> para verificar a integridade e compilar o projeto.

Após completar os passos acima o projeto deve estar sendo executado em seu computador.

Utilize o Insomnia para acessar as rotas, lembrando que é necessária a autenticação para acessar as rotas faça o login no insomnia

**SWAGGER** -> Para acessar o swagger execute a aplicação e depois acesse o link: http://localhost:8080/webjars/swagger-ui/index.html

### 📦 Variáveis de Ambiente

As variáveis de ambiente podem ser utilizadas em todo escopo do ambiente de desenvolvimento.

Pode se observar as variáveis no arquivo application.yml de cada backend.

As seguintes variáveis são necessárias para a inicialização e funcionamento do projeto: (smartrtt-authuser)
       
       spring.datasource.url --> esta variável recebe a url do banco
    
       spring.datasource.username --> esta variável recebe o username do usuário do banco de dados

       spring.datasource.password --> esta variável recebe a senha do usuário do banco de dados

       profiles.active --> esta variável recebe o estado de execução do sistema entre desenvolvimento e producao

       spring.datasource.username --> esta variável recebe o username do usuário do banco de dados.

       security.oauth2.resourceserver.jwt.jwk-set-uri --> esta variável recebe a url do micro servico authuser.

       management.endpoints.web.exposure.include --> esta variável é responsável pela exposição da interface web

       smartrtt.ui-url --> esta variável guarda o endereço do frontend da aplicação

       smartrtt.redirect-auth-url --> esta variável guarda o endereço de redirecionamento do frontend     

       smartrtt.redirect-api-url --> esta variável guarda o endereço de redirecionamento da API

       service-registry.username --> esta variável guarda o valor do username do service-registry

       service-registry.password --> esta variável guarda o valor do password do service-registry

       eureka.instance.prefer-ip-address --> esta variável indica para o Eureka que é preferivel utilizar o ip

       eureka.client.service-url.defaultZone --> esta variável responsável pelo armazenamento da url do eureka


## ✒️ Autor: **Vertis Solutions**
