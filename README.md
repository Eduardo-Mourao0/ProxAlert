# ProxAlert

ProxAlert e um aplicativo mobile de alarme por proximidade geografica.

A ideia principal e ajudar pessoas que usam transporte publico, metro, onibus, viagens urbanas ou interestaduais a nao perderem o ponto de descida. O usuario define um destino, escolhe um raio de ativacao e recebe um alerta quando estiver proximo do local.

## Proposta

O ProxAlert resolve um problema simples e comum: estar em deslocamento, dormir ou se distrair, e passar do destino.

Em vez de depender de atencao constante, o app monitora a aproximacao do ponto definido e dispara um alarme quando o usuario entra no raio configurado.

## Modos do Produto

### Modo pessoal

O proprio dispositivo do usuario e monitorado.

O usuario pode:

- escolher um destino no mapa;
- configurar o raio de ativacao;
- salvar pontos frequentes;
- ativar ou desativar alarmes;
- receber alerta sonoro, vibracao e notificacoes.

### Modo terceiro

O usuario gera um link temporario para outra pessoa compartilhar a localizacao pelo navegador, sem precisar criar conta ou instalar o app.

Esse modo foi pensado para acompanhar chegadas, encontros, corridas, viagens ou deslocamentos de terceiros com privacidade e tempo limitado.

## Privacidade

Privacidade e uma regra central do ProxAlert.

No modo terceiro, a localizacao deve ser usada apenas em tempo real para acionar o alerta de proximidade. Apos o encerramento da sessao, expiracao ou revogacao do link, o sistema nao deve armazenar historico de localizacao do terceiro.

## Monetizacao

O produto tera dois planos:

- **Free**: limite de alarmes ativos e foco no modo pessoal.
- **Premium**: alarmes ilimitados, modo terceiro completo e recursos avancados.

## Stack Planejada

- **Mobile**: React Native + Expo
- **Backend**: NestJS
- **Banco de dados**: PostgreSQL + PostGIS
- **ORM**: Prisma
- **Notificacoes push**: FCM
- **Assinaturas**: RevenueCat
- **Comunicacao em tempo real no MVP**: HTTP polling

## Status

Projeto em fase inicial.

O foco atual e estruturar a base mobile, organizar as telas e transformar o conceito visual em uma experiencia funcional.
