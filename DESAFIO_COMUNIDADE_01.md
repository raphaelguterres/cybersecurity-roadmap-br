# Desafio comunitário 01 — De logs sintéticos à investigação

**Edição de lançamento · Novembro de 2026**  
**Nível:** iniciante ou intermediário, com aprofundamento opcional.  
**Formato:** assíncrono, não competitivo e sem prazo obrigatório.

## Objetivo

Investigar eventos de autenticação completamente **fictícios** e produzir relatório claro que diferencie fato, hipótese, risco e limitação. Não é necessário instalar SIEM nem acessar máquinas de terceiros.

## Dados de exemplo

Todos os usuários, hosts e endereços são de treinamento. As faixas **192.0.2.0/24** e **198.51.100.0/24** são reservadas para documentação.

```text
2026-11-02T14:00:00Z app-lab login failed  user=ana  source=192.0.2.10
2026-11-02T14:00:07Z app-lab login failed  user=ana  source=192.0.2.10
2026-11-02T14:00:12Z app-lab login success user=ana  source=192.0.2.10
2026-11-02T14:01:00Z app-lab login success user=bruno source=198.51.100.8
2026-11-02T14:01:13Z app-lab login failed  user=bruno source=198.51.100.8
2026-11-02T14:02:21Z app-lab login failed  user=ana  source=192.0.2.10
```

## Nível 1 — Essencial

1. Conte falhas/sucessos por usuário e por origem.
2. Produza uma timeline resumida (horário e fuso UTC).
3. Formule duas hipóteses possíveis para as falhas (uma maliciosa e outra benigna).
4. Liste três informações faltantes antes de concluir se houve incidente.
5. Escreva resumo não técnico de cinco linhas.

## Nível 2 — Investigação e detecção

6. Defina uma detecção **conceitual** com janela temporal, limiar, campos essenciais e exceções.
7. Especifique teste positivo e negativo usando **apenas dados artificiais**.
8. Mapeie técnica do MITRE ATT&CK **somente quando o comportamento a justificar**; não declare técnica confirmada apenas por eventos de login.
9. Proponha procedimento de triagem e recomendações proporcionais ao cenário fictício.

## Critérios de revisão entre colegas

| Item | O que observar |
| --- | --- |
| Precisão | Contagens, sequência, fuso e fontes coerentes |
| Raciocínio | Fato, hipótese e incerteza separados |
| Segurança | Só dados fictícios e nenhuma ação em terceiros |
| Clareza | Resumo acessível e limitações explícitas |
| Reprodução | Outras pessoas conseguem repetir o procedimento |

Não há ranking, nota oficial, certificado nem premiação. Quem quiser receber comentários pode compartilhar **texto próprio ou link de repositório público com dados fictícios**, evitando dumps/PCAPs brutos.

## Recursos

[Lab 02 — Logs](labs/lab-02-logs.md) · [Modelo de relatório](labs/modelo-relatorio.md) · [MITRE ATT&CK](https://attack.mitre.org/) · [NIST CSF 2.0](https://www.nist.gov/cyberframework).

## Como participar

Abra uma publicação na [categoria Show and tell](https://github.com/raphaelguterres/cybersecurity-roadmap-br/discussions) com prefixo `[Desafio 01]` e seu resumo **anonimizado**, ou comente em uma discussão de abertura do desafio. Se houver erro no desafio, crie uma Issue. Não é preciso publicar solução completa para acompanhar o estudo.
