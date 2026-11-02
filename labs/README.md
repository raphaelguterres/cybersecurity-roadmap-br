# Laboratórios práticos

> Trabalhe **somente em sua máquina, em VMs isoladas ou em plataformas com autorização explícita para treinamento**. Nada aqui autoriza testes contra terceiros.

| Lab | Área | Duração indicativa | Resultado |
| --- | --- | --- | --- |
| [01 — Rede](lab-01-rede.md) | Redes e observabilidade | 60–90 min | Interpretar DNS/TCP/TLS |
| [02 — Logs](lab-02-logs.md) | Blue Team | 60–90 min | Formular e testar hipótese |
| [03 — SOC](lab-03-soc.md) | Detection Engineering | 2–4h | Validar regra ponta a ponta |
| [04 — AppSec](lab-04-appsec.md) | Segurança de aplicações | 2–3h | Achado, correção e reteste |

## Estrutura padrão

1. Objetivo e hipótese.
2. Ambiente e escopo autorizado.
3. Procedimento reproduzível sem divulgar credenciais.
4. Critério de sucesso e de falha.
5. Evidência mínima, **sem IP público, dados privados ou tokens**.
6. Limitações, falso positivo/negativo e lições aprendidas.
7. Limpeza/desmontagem do ambiente.

Use o [modelo de relatório](modelo-relatorio.md) em cada entrega.

Se um lab exigir instalar algo ou executar um contêiner vulnerável, **isole-o** da rede pública, revise as portas expostas e remova-o após concluir.