# Lab 04 — Análise de segurança de uma aplicação de treinamento

**Nível:** intermediário · **Escopo:** aplicação local própria ou plataforma que **autorize expressamente** o exercício.

## Objetivo

Identificar um risco de aplicação, explicar a causa, propor correção e documentar como verificar a mitigação. O foco é método, não volume de achados.

## Segurança do laboratório

A aplicação de treinamento pode conter falhas deliberadas. Execute-a somente em ambiente isolado, **sem exposição à Internet**, sem dados reais e sem compartilhar conta com outros usuários. Encerre e descarte o ambiente depois.

## Passos

1. Selecione uma aplicação de treinamento (por exemplo, ambiente oficialmente documentado da OWASP).
2. Desenhe uma rota de autenticação ou um fluxo de operação fictício.
3. Escolha **um** risco relevante do [OWASP Top 10:2025](https://top10.owasp.org/2025/pt-BR/).
4. Documente os controles esperados e observe o comportamento **apenas dentro do escopo autorizado**.
5. Proponha correção, testes positivos/negativos e critérios de reteste.
6. Preencha relatório sem divulgar contas, cookies, payloads arriscados ou endereços sensíveis.

## Critérios

- [ ] Escopo de treinamento claramente autorizado.
- [ ] Relação entre causa, impacto, controle e teste documentada.
- [ ] Recomendações proporcionais ao risco.
- [ ] Limitações e resultados não confirmados identificados.

**Referência de estudo:** [OWASP WebGoat](https://owasp.org/www-project-webgoat/).