# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

| Informações Pessoais |                         |
| -------------------- | ----------------------- |
| Idade                | 38                      |
| Aplicativos          | Facebook, Instagram     |
| Nome                 | Rafael Ribeiro          |
| Ocupação             | Técnico em refrigeração |
| Motivações                 |                                                                                                                                                                                                                                                                                  |
| Como o sistema pode ajudar | Através do cadastro na plataforma, o sistema pode ajudá-lo a se conectar com possíveis clientes - pessoas físicas/ou jurídicas - para prestação de serviços pontuais. Isso pode ajudá-lo a aumentar sua base de clientes e a obter mais oportunidades de trabalho como autônomo. |
| Frustrações                | Não está satisfeito no atual emprego e gostaria de seguir profissionalmente como autônomo.                                                                                                                                                                                       |
| Projetos                   | Rafael sonha em empreender sem ter vínculo funcional com empresas, pois acredita que financeiramente será bem mais satisfatório.                                                                                                                                                 |

| Informações Pessoais |                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------- |
| Idade                | 40                                                                                    |
| Nome                 | Camila Ferraz                                                                         |
| Ocupação             | Fisioterapeuta e esteticista, sócia de clínica de estética de relaxamento e bem-estar |
| Aplicativos          | Instagram, LinkedIn, Facebook, aplicativos de bancos                                  |
| Motivações                 |                                                                                                                                                                                 |
|
| Frustrações                | Não tem conhecimento e receio de contratar profissionais sem experiência para o serviço pleiteado.                                                                              |
| Como o sistema pode ajudar | O sistema pode ajudá-la a encontrar um profissional que se adeque a qualquer prestação de serviço relacionado à área de manutenção, reforma e construção do seu empreendimento. |
| Projetos                   | Pretende fazer manutenção, reforma e ampliação da clínica de estética.                                                                                                          |

| Informações Pessoais |                                           |
| -------------------- | ----------------------------------------- |
| Idade                | 43                                        |
| Ocupação             | Arquiteto autônomo                        |
| Aplicativos          | Facebook, LinkedIn, aplicativos de bancos |
| Nome                 | Felipe Camargo                            |
| Motivações                   |                                                                                                                                                                                                                                                                                                            |
| Projetos                   | Ampliação de networking e novas experiências profissionais na área de arquitetura e design.                                                                                                                                                                                                                   |
| Como o sistema pode ajudar | Através do cadastro na plataforma, o sistema pode ajudá-lo a se conectar com possíveis clientes - pessoas físicas/ou jurídicas - para prestação de serviços pontuais, parcerias e/ou novas oportunidades de emprego. Isso pode ajudá-lo a expandir sua rede e a obter mais oportunidades de trabalho na área. |
| Frustrações                | Com apenas 3 anos de mercado, sente a necessidade de expandir sua rede e conhecimento interpessoal para possíveis novas oportunidades de trabalho.                                                                                                                                                            |



## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
| -------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Camila Ferraz        | Busco um site que proporcione facilidade na busca por prestadores de serviços   | Para realizar manutenção no meu equipamento de ar-condicionado. |
| Camila Ferraz        | Quero um site com sistema de classificação com base nas avaliações dos clientes | Para que eu possa contratar profissionais com mais segurança    |
| Rafael Ribeiro       | Ter uma plataforma para oferecer meu serviço                                    | Para conseguir me conectar a novos clientes                     |
| Rafael Ribeiro       | Quero uma plataforma que eu possa acessar do meu smartphone                     | Para que eu consiga mais praticidade no dia a dia               |
| Felipe Camargo       | Quero poder compartilhar meu portfólio com meus potenciais clientes             | Para que conheçam meus trabalhos anteriores                     |
| Camila Ferraz        | Buscar profissionais que estejam localizados próximo a mim                      | Para diminuir meu tempo de espera pelo serviço                  |
| Felipe Camargo       | Ter acesso ao perfil dos clientes que contratam meu serviço                     | Para expandir meu negócio                                       |
| Rafael Ribeiro       | Ter acesso as minhas métricas dos últimos 30 dias                               | Para acompanhar meu desempenho                                  |
| Felipe Camargo       | Quero compartilhar meu desempenho nas redes sociais                             | Para melhorar a divulgação do meu trabalho                      |
| Camila Ferraz        | Quero poder me comunicar com o prestador de serviço.                            | Para estabelecer detalhes e sanar dúvidas sobre o serviço       |


## Requisitos do Projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues. 

| ID    | Descrição                                                                                                                                                                                   | Persona                    | Prioridade |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| RF-01 | A plataforma deve permitir que profissionais se cadastrem, informando seus dados pessoais, habilidades, especializações e experiências.                                                     | Profissional               | Alta       |
| RF-02 | A plataforma deve oferecer uma ferramenta de busca que permita as pessoas contratantes encontrarem profissionais de acordo com sua localização, habilidades, especializações, etc.          | Contratante                | Alta       |
| RF-03 | A plataforma deve permitir que as pessoas contratantes avaliem os profissionais e vice-versa.                                                                                               | Profissional e Contratante | Média      |
| RF-04 | A plataforma deve oferecer uma ferramenta que permita as pessoas contratantes solicitarem um serviço específico, informando suas necessidades, localização e outras informações relevantes. | Contratante                | Alta       |
| RF-05 | A plataforma deve permitir que profissionais ofereçam seus serviços, informando suas habilidades, especializações e preços.                                                                 | Profissional               | Alta       |
| RF-06 | A plataforma deve oferecer um sistema de comunicação entre profissional e pessoa contratante, seja para tirar dúvidas ou combinar detalhes do serviço.                                      | Profissional e Contratante | Baixa      |
| RF-07 | A plataforma deve oferecer uma ferramenta que as pessoas contratantes acompanhem o andamento dos serviços contratados.                                                                      | Contratante                | Baixa      |
| RF-08 | A plataforma deve permitir que as pessoas contratantes se cadastrem, informando seus dados pessoais.                                                                                        | Contratante                | Média      |
| RF-09 | A plataforma deve oferecer uma ferramenta que permita aos profissionais compartilharem seus perfis.                                                                                         | Profissional               | Baixa      |
| RF-10 | A plataforma deve oferecer uma ferramenta de relatórios referente às avaliações dos serviços prestados afim de validar seu desempenho.                                                      | Profissional               | Média      |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 

| ID     | Descrição                                                                                                                                                                  | Prioridade |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);                                                               | Baixa      |
| RNF-02 | A plataforma deve ser rápida e responsiva, garantindo que os usuários possam acessar rapidamente as informações e os serviços de que precisam.                             | Alta       |
| RNF-03 | A plataforma deve ser fácil de usar e intuitiva, com interface amigável, para que os usuários possam navegar facilmente e encontrar as informações que precisam.           | Média      |
| RNF-04 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)                                                               | Média      |
| RNF-05 | A plataforma deve ser confiável e segura, garantindo a privacidade dos dados dos usuários, a proteção contra ataques cibernéticos e a estabilidade do sistema.             | Alta       |
| RNF-06 | A plataforma deve ser escalável para lidar com um grande número de usuários e serviços, sem comprometer a qualidade do serviço ou a velocidade de resposta.                | Média      |
| RNF-07 | A plataforma deve estar disponível 24 horas por dia, 7 dias por semana, sem interrupções programadas ou não programadas.                                                   | Alta       |
| RNF-08 | A plataforma deve ser fácil de manter e atualizar, com uma estrutura bem organizada e documentada, para facilitar a correção de erros e a implementação de novos recursos. | Alta       |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

| ID    | Descrição                                                                                                                     |
| ----- | ----------------------------------------------------------------------------------------------------------------------------- |
| RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data a definir (data de entrega etapa 5). |
| RE-02 | O aplicativo deve se restringir às tecnologias básicas da Web no Frontend                                                     |
| RE-03 | A equipe não pode subcontratar o desenvolvimento do trabalho                                                                  |
