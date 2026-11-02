# 07 — DFIR: resposta a incidentes e forense

**Objetivo:** responder de forma metódica e preservar a integridade das evidências.

## Ciclo de resposta

1. Preparação: papéis, playbooks, contatos, fontes de logs e backups.
2. Detecção e análise: sinais, hipótese, linha do tempo e validação.
3. Contenção: avaliar impacto operacional antes da ação.
4. Erradicação e recuperação: remover causa, restaurar, validar.
5. Pós-incidente: lições aprendidas, métricas, recomendações e melhoria de detecções.

## Boas práticas de evidência

- Documentar relógio/fuso, origem, autorização, responsável e método de coleta.
- Preservar originais; analisar cópias controladas sempre que aplicável.
- Registrar hashes e movimentação das evidências, com acesso restrito.
- Redigir relatórios sem dados pessoais ou identificadores sensíveis.

## Exercício

Monte um incidente fictício de login suspeito usando dados **sintéticos**. Gere linha do tempo, hipótese, ações de contenção simuladas como plano (não em produção) e revisão retrospectiva.

## Critérios

- [ ] Distingo evidência, indício e hipótese.
- [ ] Consigo produzir cronologia e declarar incertezas.
- [ ] Justifico a contenção e descrevo riscos da ação.
- [ ] Registro cadeia de custódia quando aplicável.

**Referência:** [NIST incident response](https://csrc.nist.gov/pubs/sp/800/61/r3/final).