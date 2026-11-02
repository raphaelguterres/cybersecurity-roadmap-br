# 03 — SOC, Blue Team e Detection Engineering

**Objetivo:** transformar telemetria em detecções úteis, triagem confiável e investigação reproduzível.

## Conteúdo

1. Arquitetura: endpoint → agente/coletor → processamento/manager → indexador → dashboard.
2. Fontes: Sysmon, Windows Event Logs, logs Linux, DNS, proxy, firewall e aplicação.
3. SIEM e pipeline: parsing, normalização, atraso, perda de eventos e retenção.
4. MITRE ATT&CK: mapear técnica, hipótese, fonte de dados e observabilidade.
5. Regras: lógica, campos obrigatórios, severidade, falsos positivos e cobertura.
6. Operação SOC: triagem, contexto, escalonamento, contenção e comunicação.
7. Qualidade: testes positivos/negativos, regressão e evidência ponta a ponta.

## Laboratório recomendado

Faça o [Lab 03 — Detecção](../labs/lab-03-soc.md), com ambiente próprio. Não confunda alerta no Manager com indexação e visualização confirmadas: valide cada etapa separadamente.

## Exemplo de definição de pronto

- [ ] Hipótese documentada e técnica ATT&CK, se pertinente.
- [ ] Evento de teste controlado e campos esperados.
- [ ] Regra acionada em cenário positivo e não acionada no negativo.
- [ ] Evidência do destino (Manager, Indexer e Dashboard, quando disponíveis).
- [ ] Registro de falso positivo, limites, versão e procedimento de rollback.

**Referências:** [MITRE ATT&CK](https://attack.mitre.org/) · [Wazuh Docs](https://documentation.wazuh.com/current/) · [SigmaHQ](https://github.com/SigmaHQ/sigma).