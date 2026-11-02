# Lab 08 — Modelagem de ameaças em aplicação fictícia

**Nível:** intermediário · **Escopo:** design de uma aplicação de tarefas inventada.

## Arquitetura
Navegador → API → banco de dados, com autenticação e equipe administrativa separadas.

## Atividades
1. Faça diagrama de fluxo de dados e delimite fronteiras de confiança.
2. Escolha 5 ativos e associe riscos plausíveis.
3. Descreva três cenários de abuso **sem payloads de exploração**.
4. Defina controles preventivos, detectivos e de recuperação.
5. Crie testes de aceitação para dois controles, incluindo casos negativos.
6. Priorize pelo impacto, não apenas pelo nome do risco.

## Critérios
- [ ] Diagrama legível.
- [ ] Três ameaças justificadas e controles rastreáveis.
- [ ] Dois testes verificáveis.
- [ ] Nenhum dado de serviço real ou credencial.

**Referências:** [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling) e [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).
