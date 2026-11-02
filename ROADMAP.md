# Roadmap de estudos — 24 semanas

> Proposta flexível para quem tem **6 a 8 horas por semana**. Não é prova de competência nem promessa de emprego: o objetivo é construir repertório, ética, prática e um portfólio verificável.

## Método semanal

- **2h:** teoria + documentação oficial.
- **3–4h:** laboratório próprio/ambiente expressamente autorizado.
- **1h:** escrever aprendizados, screenshots redigidas e problemas encontrados.
- **1h:** revisar e ajudar alguém na comunidade.

Aprovação de uma etapa: explicar **o que foi feito, por que, como validar, limitações e próximos passos**. Evite compartilhar dados pessoais, IPs de terceiros, tokens ou credenciais.

## Ciclo 1 — Fundamentos (semanas 1–4)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 01 | CIA, ameaças, vulnerabilidades, risco, controles e ética | Glossário de 20 conceitos e mapa pessoal |
| 02 | TCP/IP, DNS, portas, HTTP e TLS | Diagrama de uma requisição HTTPS |
| 03 | Linux, Windows, permissões, processos e serviços | Checklist de 10 verificações locais |
| 04 | Git, Markdown, documentação e arquitetura de laboratório | Primeiro repositório de anotações e topologia |

**Marco 1:** explicar com clareza o funcionamento de uma aplicação web e seus principais riscos.

## Ciclo 2 — Operação e automação (semanas 5–8)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 05 | Logs, timestamps, formatos e retenção | Dicionário de 8 campos de eventos |
| 06 | Análise de tráfego próprio com Wireshark | [Lab 01](labs/lab-01-rede.md) + relatório |
| 07 | Python ou shell básico para parsing | Script local para agregar logs sintéticos |
| 08 | IAM, autenticação, MFA e mínimo privilégio | Matriz de acessos para uma empresa fictícia |

**Marco 2:** coletar, interpretar e documentar eventos de um ambiente de teste.

## Ciclo 3 — Trilha defensiva (semanas 9–12)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 09 | SOC, SIEM, telemetria, severidade e triagem | Fluxograma de triagem de alertas |
| 10 | MITRE ATT&CK, hipóteses e cobertura de detecção | Mapa de 3 técnicas e fontes de logs |
| 11 | Logs de autenticação e falsos positivos | [Lab 02](labs/lab-02-logs.md) + análise |
| 12 | Wazuh/Sigma, testes de regra e evidências | [Lab 03](labs/lab-03-soc.md) ou equivalente |

**Marco 3:** descrever uma detecção testável e seus limites, sem alegar cobertura que não foi validada.

## Ciclo 4 — Aplicações e desenvolvimento seguro (semanas 13–16)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 13 | OWASP Top 10:2025 e princípios de autorização | Matriz risco → controle |
| 14 | Threat modeling e arquitetura segura | Diagrama de fluxo de dados + ameaças |
| 15 | SAST, SCA, segredos e dependências | Checklist de revisão de pipeline |
| 16 | Laboratório de aplicação intencionalmente vulnerável | [Lab 04](labs/lab-04-appsec.md) e relatório |

**Marco 4:** produzir uma recomendação técnica de correção com prioridade e validação.

## Ciclo 5 — Especialização (semanas 17–20)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 17 | Escolher: SOC, AppSec, Cloud, DFIR, Pentest ou GRC | Objetivo + justificativa da trilha |
| 18 | Aprofundar ferramentas e documentação da área | 1 miniestudo de caso |
| 19 | Reproduzir um cenário **somente autorizado** | Evidências anonimizadas e critérios |
| 20 | Revisar com um colega e corrigir problemas | PR, relatório revisado ou checklist |

**Marco 5:** um projeto reproduzível e bem explicado, não apenas um print de ferramenta.

## Ciclo 6 — Comunidade e portfólio (semanas 21–24)

| Semana | Estudo | Entrega mensurável |
| --- | --- | --- |
| 21 | Escrita técnica, impacto, métricas e limitações | README completo de projeto |
| 22 | Documentação, ética e comunicação executiva | Resumo técnico e não técnico |
| 23 | Contribuir com conteúdo ou revisão de recurso | 1 issue ou pull request de qualidade |
| 24 | Avaliar lacunas e planejar os próximos 90 dias | Portfólio organizado + novo plano |

**Marco 6:** pelo menos **2 relatórios de laboratório**, **1 projeto de especialidade** e **1 contribuição**. Qualidade importa mais que quantidade.

## Como acompanhar seu progresso

Copie este checklist para seu próprio projeto, sem enviar informações sensíveis.

- [ ] Entendo a teoria e consigo explicar sem copiar.
- [ ] Executei os exercícios apenas em ambiente permitido.
- [ ] Reproduzi os resultados e registrei limitações.
- [ ] Produzi material de estudo útil para outra pessoa.
- [ ] Revisei meu portfólio com base em feedback.

Explore as [trilhas](README.md#trilhas-de-estudo), a [biblioteca](RECURSOS.md) e os [laboratórios](labs/README.md).