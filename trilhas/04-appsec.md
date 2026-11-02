# 04 — Application Security (AppSec)

**Objetivo:** integrar segurança ao desenvolvimento e priorizar riscos verificáveis.

## Estudo

- HTTP, sessões, cookies, autenticação e autorização.
- [OWASP Top 10:2025](https://top10.owasp.org/2025/pt-BR/): foco em riscos, causas e controles, não apenas nomes de vulnerabilidades.
- Modelagem de ameaças: ativos, fronteiras de confiança, fluxo de dados e abuso.
- Revisão de código: controle de acesso, injeção, validação, logging seguro e tratamento de erros.
- SAST, SCA, DAST em ambiente permitido, secrets scanning e gestão de dependências.
- SDLC/SSDLC: critérios de aceitação, pull requests e verificações em CI.

## Projeto

Escolha uma aplicação pequena **sua ou criada para treinamento**. Faça um diagrama de fluxo de dados, selecione 3 riscos, proponha mitigação e valide os controles em ambiente isolado. Use o [Lab 04](../labs/lab-04-appsec.md).

## Critérios para avançar

- [ ] Diferencio achado de scanner e vulnerabilidade confirmada.
- [ ] Registro impacto, evidência e mitigação sem publicar dados privados.
- [ ] Consigo propor testes de regressão.
- [ ] Tenho um modelo de ameaça e plano de priorização.

**Referências:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) · [PortSwigger Web Security Academy](https://portswigger.net/web-security).