# Study OS — dashboard estático

Portal de estudos gratuito e privado. Interface feita com HTML/CSS/JavaScript puro; não há servidor de API, cadastro nem sincronização.

## Executar localmente

Na raiz do repositório:

~~~bash
python -m http.server 8000 --directory site
~~~

Acesse **http://localhost:8000**. Não exponha o servidor para Internet pública.

## Funcionalidades

- 12 trilhas (incluindo engenharia de software e carreira dev) com módulos e nível.
- Roadmap de 24 semanas e oito laboratórios.
- Seis desafios e quiz com banco de 24 questões de cibersegurança.
- Biblioteca filtrável com fontes oficiais e educacionais.
- Curadoria Lucas Montano e Mano Deyvin, com atribuição e links.
- Progresso autodeclarado salvo exclusivamente no `localStorage`, no navegador.
- Backup JSON por exportação/importação **manual**, com validação de chaves e tamanho.

## Comunidade aberta

A página [community.html](community.html) oferece acolhimento, orientações para grupos de estudo e desafios, primeiros PRs e governança. Ela compartilha a identidade visual do dashboard, mas não altera o progresso salvo dos estudantes.

## Privacidade e limites

Não há login, banco, cookie, rastreamento, telemetria ou coleta de IP do visitante implementados pelo portal. O provedor de hospedagem pode manter logs de acesso segundo suas políticas. Links externos abrem outros sites, sujeitos a políticas próprias.

O progresso é exclusivo daquele navegador e não sincroniza. Limpar os dados do site apaga o histórico salvo se não existir backup. O quiz não certifica competências e a nota não é compartilhada publicamente.

O catálogo é mantido em [data.js](data.js); as atualizações dependem de revisão e PR. O conteúdo de criadores é editorial e atribuído às fontes originais.

## Segurança

É um portal estático sem entrada de código, execução remota ou dados de produção. Nunca envie backup pessoal em Issue/PR. Veja [SECURITY.md](../SECURITY.md).

## Publicação

Workflow [deploy-pages.yml](../.github/workflows/deploy-pages.yml) publica **site/** via GitHub Pages após merge na main, quando Pages estiver configurado com fonte **GitHub Actions**. A versão da branch de PR não é automaticamente publicada.
