# Bem vindo ao LEOTEMPO!

Olá, este é o LEOTEMPO! Um projeto feito com React, Styled-components e MobX utilizando a API aberta da [open-meteo](https://open-meteo.com). Aqui foi colocado alguns conhecimentos de padrões de códigos que costumo utilizar no meu dia a dia assim como a estrutura do projeto e componentização.


## Componentes

Geralmente aplico o conceito do [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) em meus projetos, mas como este é um projeto pequeno sem tantos componentes, dividi em duas partes:

 - Componentes (aqueles componentes que são genéricos, feitos para reutilização em massa)
 - Composições (aqueles componentes que são mais específicos e que geralmente dependem de *componentes*)

## Funcionalidades

O App é simples: de acordo com a latitude e a longitude fornecida, ele grava no **localStorage** informações enviadas pela API, tais como temperatura atual, se é dia e se chove.

Na rota */add-forecasts* adicionamos uma localização. O sistema consulta a API e grava esses dados no banco local.

Na rota */forecasts* ou apenas */*, o sistema lista esses dados gravados possibilitando atualizar card por card.

# Executando local

Após clonar o repositório, certifique-se que a versão do node esteja atualizada. Então, basta rodar:

    yarn start
  
  Ou se preferir:
  

    npm run start

# Compilando para produção

Rode o comando:

    yarn build
    
Ou se preferir:

    npm run build

## Produção

A aplicação se encontra hospedada na Netlify, e você pode acessar em https://leotempo.netlify.app