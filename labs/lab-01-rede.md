# Lab 01 — Compreendendo tráfego DNS e HTTPS

**Nível:** iniciante · **Escopo:** exclusivamente o próprio computador/VM.

## Objetivo

Observar a diferença entre resolução de nome, transporte e estabelecimento de uma sessão protegida. Não é um exercício de interceptação de terceiros.

## Pré-requisitos

Wireshark (site oficial) ou ferramenta equivalente; navegação em ambiente de teste; permissão para capturar **apenas** sua interface e tráfego.

## Passos

1. Escolha a interface de rede correta e inicie uma captura curta.
2. Abra uma página pública conhecida no seu próprio navegador, sem inserir senhas nem dados privados.
3. Interrompa a captura após poucos segundos.
4. Filtre por **dns**, **tcp** ou **tls**, observando apenas metadados da sua sessão.
5. Identifique horários, protocolos, portas e o que não é possível inferir de conteúdo cifrado.
6. Remova/redija IPs, MACs, domínios internos e informações pessoais antes de compartilhar qualquer resultado.

## Critérios de aprovação

- [ ] Consigo distinguir consulta/resposta DNS de tráfego TCP.
- [ ] Identifiquei uma conexão TLS ou expliquei por que não apareceu na captura.
- [ ] Documento filtro, método e limitações sem divulgar o PCAP bruto.
- [ ] Encerrei a captura e removi arquivos sensíveis.

**Entregável:** tabela com 5 observações anonimizadas e [relatório](modelo-relatorio.md).