# Lab 03 — Validação de detecção em um SOC de laboratório

**Nível:** intermediário · **Stack possível:** Wazuh ou plataforma SIEM equivalente.

## Escopo e objetivo

No seu **próprio ambiente de laboratório**, validar um evento benigno de teste, a lógica de uma detecção e a propagação entre coletor, processador/Manager, indexador e visualização.

## Preparação segura

- Não use credenciais pessoais ou ambiente de produção.
- Verifique versões, snapshots/backups e procedimento de rollback.
- Se tiver apenas ambiente offline, realize validação de parser/regra e marque o fluxo completo como **não verificado**.
- Mantenha logs e prints originais privados; publique apenas resultados anonimizados.

## Procedimento conceitual

1. Defina um evento de teste **não destrutivo**, como um marcador de log criado localmente.
2. Declare os campos e valores que a regra espera.
3. Registre a regra, sua versão e a hipótese; se necessário, aplique-a com rollback preparado.
4. Injete o evento em fonte **autorizada**, dentro do lab.
5. Confira separadamente: recepção, parse, regra, alerta, indexação e visualização.
6. Faça um teste negativo para verificar que um evento não correspondente não aciona a regra.
7. Registre atrasos, perdas, falsos positivos e as limitações observadas.

## Critérios de aprovação

- [ ] Evento controlado gerado e confirmado na fonte.
- [ ] Regra acionou no positivo e não acionou no negativo.
- [ ] Status explícito para Manager, Indexer e Dashboard: aprovado, falhou ou não testado.
- [ ] Procedimento de rollback e evidências descritos.
- [ ] Sem segredos, identificadores privados ou dados de terceiros no PR.

**Entregável:** [relatório](modelo-relatorio.md) e matriz de resultados por etapa. Não afirmar validação ponta a ponta caso alguma etapa esteja não testada.