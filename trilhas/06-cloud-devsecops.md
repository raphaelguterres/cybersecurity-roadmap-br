# 06 — Cloud Security e DevSecOps

**Objetivo:** proteger configuração, identidades, aplicações e pipelines de ponta a ponta.

## Base

- Responsabilidade compartilhada e inventário de recursos.
- IAM: identidade federada, MFA, papéis, mínimo privilégio e revisão periódica.
- Redes: segmentação, grupos de segurança, exposição pública e criptografia.
- Contêineres: imagens atualizadas, permissões, segredos e execução sem privilégio.
- IaC e CI/CD: revisão de mudanças, checks, scan de dependências e rollback.
- Observabilidade: trilhas de auditoria, alertas e resposta a configuração insegura.

## Exercício

Desenhe arquitetura fictícia com repositório, pipeline, registry, aplicação, banco e logs. Marque controles preventivos/detectivos, segredos e responsáveis. Adicione uma checklist de aprovação antes do deploy.

## Critérios

- [ ] Explico o modelo de responsabilidade compartilhada.
- [ ] Defino controles para identidade, rede, armazenamento e CI/CD.
- [ ] Sei por que não se deve colocar chaves no código nem em screenshots.
- [ ] Tenho plano de atualização, backup e rollback.

**Recursos:** [Microsoft Learn](https://learn.microsoft.com/training/) · [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/).