<div align="center">

# 🛡️ Cybersecurity Roadmap BR

### Segurança, desenvolvimento e carreira — do primeiro conceito à prática documentada

**OPEN SOURCE · 100% PT-BR · SEM CADASTRO · CONTRIBUIÇÕES ABERTAS**

[![Docs](https://img.shields.io/badge/Study_OS-Dashboard-BAF568?style=flat-square&labelColor=0D121A)](site/README.md)
[![GitHub Actions](https://github.com/raphaelguterres/cybersecurity-roadmap-br/actions/workflows/quality.yml/badge.svg)](https://github.com/raphaelguterres/cybersecurity-roadmap-br/actions/workflows/quality.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-0D121A?style=flat-square)](LICENSE)
[![Contribuições](https://img.shields.io/badge/Contribuições-Bem--vindas-BAF568?style=flat-square&labelColor=0D121A)](CONTRIBUTING.md)

**[🚀 Comece aqui](START-HERE.md)** · **[🖥️ Dashboard Study OS](site/README.md)** · **[🗺️ Roadmap 24 semanas](ROADMAP.md)** · **[🤝 Comunidade](COMUNIDADE.md)**

</div>

---

## Aprenda, pratique, documente e compartilhe

**Cybersecurity Roadmap BR** é uma iniciativa comunitária gratuita para ajudar estudantes e profissionais a construir conhecimento em segurança digital e engenharia de software com **evidências reais de aprendizado**, sem promessas de emprego ou certificação.

```text
FUNDAMENTOS → REDES + SISTEMAS → PROGRAMAÇÃO
                              ├── SOC / BLUE TEAM / DETECTION
                              ├── APPSEC / PENTEST ÉTICO
                              ├── CLOUD / DEVSECOPS
                              ├── DFIR / THREAT INTELLIGENCE
                              ├── GRC / IAM
                              └── ENGENHARIA DEV / CARREIRA
                                      ↓
                      LABORATÓRIO → TESTES → RELATÓRIO
                                      ↓
                          COMUNIDADE + PORTFÓLIO
```

## Study OS — dashboard exclusivo de estudos

Uma aplicação web estática em `site/`, com **HTML, CSS e JavaScript puro**, sem dependência de banco, login, servidor próprio ou serviço pago. Quando publicado em GitHub Pages, será acessível pelo navegador.

**Inclui:** progresso por módulo e trilha, 24 semanas marcáveis, oito laboratórios, seis desafios, quiz com correção, pesquisa de fontes oficiais, referências de vídeos de desenvolvedores e backup JSON importável/exportável.

> **Privacidade:** o progresso permanece no `localStorage` do dispositivo; não é enviado a este projeto. Limpar os dados do navegador apaga o progresso se não houver backup. É um registro **autodeclarado**, não uma certificação.

**[Ver código do dashboard](site/)** · **[Executar localmente](site/README.md)** · **[Status de publicação](https://github.com/raphaelguterres/cybersecurity-roadmap-br/actions/workflows/deploy-pages.yml)**

## Trilhas organizadas por nível

| Trilha | Nível sugerido | Guia |
| --- | --- | --- |
| 00 · Fundamentos | Iniciante | [Estudar](trilhas/00-fundamentos.md) |
| 01 · Redes e sistemas | Iniciante | [Estudar](trilhas/01-redes-sistemas.md) |
| 02 · Programação | Iniciante | [Estudar](trilhas/02-programacao.md) |
| 03 · SOC / Blue Team | Intermediário | [Estudar](trilhas/03-soc-blue-team.md) |
| 04 · Application Security | Intermediário | [Estudar](trilhas/04-appsec.md) |
| 05 · Pentest ético | Intermediário | [Estudar](trilhas/05-pentest-etico.md) |
| 06 · Cloud / DevSecOps | Intermediário | [Estudar](trilhas/06-cloud-devsecops.md) |
| 07 · DFIR / Resposta a incidentes | Avançado | [Estudar](trilhas/07-dfir.md) |
| 08 · GRC / IAM | Iniciante | [Estudar](trilhas/08-grc-iam.md) |
| 09 · Threat Intelligence | Avançado | [Estudar](trilhas/09-threat-intelligence.md) |
| 10 · Carreira | Iniciante | [Estudar](trilhas/10-carreira.md) |
| 11 · Engenharia de software / Dev | Iniciante → Intermediário | [Estudar](trilhas/11-dev-engineering.md) |

**Os níveis são orientação de entrada**, não rótulos de senioridade profissional.

## Laboratórios, desafios e avaliações

- [8 laboratórios práticos](labs/README.md), com requisitos, escopo permitido, evidência e critérios.
- [6 desafios comunitários](challenges/README.md) para realizar de forma ética.
- [Quiz interativo](site/README.md) com perguntas de fundamentos, SOC, AppSec, DFIR e Cloud.
- [Modelo de relatório](labs/modelo-relatorio.md) para padronizar portfólio verificável.

## Fontes de estudo com autoria e contexto

Priorizamos documentação primária como **NIST, CISA, MITRE, OWASP, Wazuh, Microsoft Learn, Python, MDN, GitHub Skills e Wireshark**.

**[📚 Biblioteca curada](RECURSOS.md)** · **[🎬 Lucas Montano e Mano Deyvin: vídeos e exercícios](videos/README.md)**

Conteúdos em vídeo são **referências externas atribuídas**. As atividades propostas são do nosso projeto e não resumem vídeos sem verificação. Opiniões e tendências devem ser contrastadas com fontes técnicas.

## Comunidade

Contribuições simples são importantes: revisar link, explicar um conceito, traduzir termos respeitando direitos, propor laboratório ou adicionar fonte verificável.

**[💬 Discussions](https://github.com/raphaelguterres/cybersecurity-roadmap-br/discussions)** · **[🛠️ Issues](https://github.com/raphaelguterres/cybersecurity-roadmap-br/issues)** · **[🔀 Pull Requests](https://github.com/raphaelguterres/cybersecurity-roadmap-br/pulls)** · **[Como contribuir](CONTRIBUTING.md)**

Frequência dos desafios e revisões será definida pelos colaboradores; não afirmamos manter calendário automático enquanto não existir.

## Qualidade, segurança e execução

- GitHub Actions verifica sintaxe JavaScript, integridade do catálogo, links locais, estrutura e arquivos do portal.
- GitHub Pages publica somente conteúdo estático após merge em `main`, quando habilitado.
- Scripts de validação não executam exploits nem acessam infraestrutura de terceiros.
- Sem dados pessoais, credenciais, evidências privadas ou materiais sem licença em PRs.
- Política de reporte responsável: [SECURITY.md](SECURITY.md).

## Próximos passos

**[Plano da versão 2.0](ROADMAP_V2.md)** — documentação, labs, desafios, conteúdo, QA, acessibilidade, revisão humana e crescimento gradual da comunidade.

---

**Mantenedor inicial:** [Raphael Guterres](https://github.com/raphaelguterres) · [Código de conduta](CODE_OF_CONDUCT.md) · [Licença MIT](LICENSE)

**Aviso:** projeto independente. Não possui vínculo, patrocínio ou endosso das organizações e criadores mencionados.
