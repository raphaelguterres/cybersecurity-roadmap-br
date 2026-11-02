# Lab 05 — Checklist de hardening Linux

**Nível:** iniciante · **Ambiente:** VM Linux própria, isolada e com snapshot.

## Objetivo
Documentar estado de serviços, permissões, atualização e configuração de acesso sem alterar produção.

## Passos
1. Faça snapshot ou backup da VM.
2. Registre a distribuição e a versão do sistema operacional.
3. Liste serviços ativos e identifique os necessários ao cenário fictício.
4. Verifique permissões de uma pasta de treinamento e descreva o princípio de menor privilégio.
5. Revise procedimentos de atualização a partir da documentação **da sua distribuição**.
6. Proponha três medidas de hardening, riscos e forma de rollback. A aplicação é opcional e somente na VM.
7. Revalide o funcionamento básico e escreva um relatório sem IPs/usuários reais.

## Critérios
- [ ] Estado inicial e escopo registrados.
- [ ] Três recomendações justificadas.
- [ ] Plano de rollback escrito e testado quando mudanças ocorreram.
- [ ] Nenhuma configuração publicada com segredos.

**Entregável:** [modelo de relatório](modelo-relatorio.md).
