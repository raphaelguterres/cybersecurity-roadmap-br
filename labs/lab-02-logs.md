# Lab 02 — Investigação de falhas de autenticação em logs sintéticos

**Nível:** iniciante/intermediário · **Escopo:** apenas eventos fictícios fornecidos abaixo.

## Hipótese

Um aumento de falhas de login pode indicar erro de configuração, teste interno ou tentativa de acesso indevido. **Não significa automaticamente ataque.**

## Eventos de exemplo (inventados)

~~~text
2026-11-01T12:00:00Z host-lab auth failed user=alice source=192.0.2.10
2026-11-01T12:00:08Z host-lab auth failed user=alice source=192.0.2.10
2026-11-01T12:00:18Z host-lab auth success user=alice source=192.0.2.10
2026-11-01T12:01:03Z host-lab auth failed user=bob source=192.0.2.11
2026-11-01T12:02:10Z host-lab auth success user=bob source=192.0.2.11
~~~

Os endereços do bloco **192.0.2.0/24** são reservados para documentação, não representam sistemas reais neste exercício.

## Atividades

1. Conte sucessos e falhas por usuário; identifique janela de tempo e fonte.
2. Escreva hipótese para eventos de Alice e para Bob.
3. Liste 2 contextos adicionais necessários antes de classificar risco.
4. Proponha regra de detecção conceitual com limiar e janela, incluindo falso positivo possível.
5. Escreva perguntas que faria a quem administra o sistema, sem inferir má-fé.

## Critérios

- [ ] Contagens corretas: Alice = 2 falhas + 1 sucesso; Bob = 1 falha + 1 sucesso.
- [ ] Hipótese, evidência e incerteza estão separados.
- [ ] Regra contém janela, limiar e condição de exclusão contextual.
- [ ] Relatório não identifica pessoas reais.

**Entregável:** tabela, hipótese e [relatório](modelo-relatorio.md).