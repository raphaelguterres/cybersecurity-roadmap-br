"use strict";
/* Cybersecurity Roadmap BR Study OS v2 — progresso só neste navegador. */
(function () {
  const D = window.ROADMAP_DATA;
  if (!D || !Array.isArray(D.tracks) || !Array.isArray(D.weeks)) {
    document.getElementById("view-description").textContent = "Falha no catálogo. Atualize a página.";
    return;
  }
  const devTrack = {
    id:"dev",code:"11",name:"Engenharia de software & carreira dev",level:"Iniciante",tag:"Full Stack / Engenharia",
    description:"Da lógica e Git a arquitetura, testes, APIs, review, IA no fluxo e desenvolvimento seguro.",
    doc:"trilhas/11-dev-engineering.md",
    units:["Lógica, algoritmos, estruturas de dados e SQL","Git, Linux e fluxo de trabalho profissional","Frontend acessível e APIs HTTP","Backend, banco de dados e autenticação","Testes, CI/CD, revisão e observabilidade","System design, trade-offs, IA crítica e comunicação"]
  };
  if (!D.tracks.some(t=>t.id==="dev")) D.tracks.push(devTrack);
  const videoRefs = [
    {creator:"Lucas Montano",title:"10 dicas para se tornar um programador",url:"https://www.youtube.com/watch?v=sTkYv_6F-b0",kind:"Vídeo verificado",area:"Carreira",note:"Dicas de entrada na programação; depois da visualização, registre três ações práticas."},
    {creator:"Lucas Montano",title:"Começando 2021 com emprego novo (como Desenvolvedor)",url:"https://www.youtube.com/watch?v=LE_72-s7om4",kind:"Vídeo verificado",area:"Carreira",note:"Reflexões sobre transições profissionais e entrevistas, contextualizadas à época."},
    {creator:"Lucas Montano",title:"Canal oficial — @lucasmontano",url:"https://www.youtube.com/@lucasmontano",kind:"Canal oficial",area:"Engenharia",note:"Explore vídeos sobre arquitetura, engenharia, produtos, IA e carreira; selecione o que for relevante."},
    {creator:"Lucas Montano",title:"Site e projetos públicos de Lucas Montano",url:"https://lucasmontano.com/",kind:"Fonte do autor",area:"Engenharia",note:"Referência adicional para sistema design e perspectivas de engenharia."},
    {creator:"Mano Deyvin",title:"Canal oficial — @manodeyvin",url:"https://www.youtube.com/@manodeyvin",kind:"Canal oficial",area:"Carreira",note:"Vídeos e lives sobre cotidiano, carreira e mercado de desenvolvimento, com humor e opinião."},
    {creator:"Mano Deyvin",title:"Carreiras: De Deyvid Nascimento a Mano Deyvin — Hipsters #457",url:"https://www.hipsters.tech/carreiras-de-deyvid-nascimento-a-mano-deyvin-hipsters-ponto-tech-457/",kind:"Podcast com participação do autor",area:"Carreira",note:"Trajetória profissional, comunidade dev e experiências com Ruby on Rails."},
    {creator:"Mano Deyvin",title:"Publicações e comentários de mercado — site oficial",url:"https://manodeyvin.com.br/",kind:"Fonte do autor",area:"Mercado",note:"Conteúdo opinativo sobre mercado; compare com fontes técnicas e dados de vagas."}
  ];
  const STORE="cybersecurity-roadmap-br:study-os:v2";
  const views=["inicio","trilhas","roadmap","laboratorios","desafios","quiz","biblioteca","videos"];
  const titles={
    inicio:["Seu centro de comando","de estudos.","Um mapa para desenvolver competências reais em cibersegurança, programação e engenharia de software, com progresso privado.","VISÃO GERAL"],
    trilhas:["Estude com","direção.","Trilhas técnicas organizadas por nível e assunto; conclusão autodeclarada por você.","TRILHAS"],
    roadmap:["24 semanas.","Seu ritmo.","Seis ciclos e entregas objetivas. Marque etapas quando realizar a atividade.","ROADMAP"],
    laboratorios:["Aprenda","fazendo.","Exercícios autorizados, com evidências, análises e critérios de aprovação.","LABORATÓRIOS"],
    desafios:["Coloque seus","conhecimentos à prova.","Desafios éticos para praticar, documentar e compartilhar aprendizados.","DESAFIOS"],
    quiz:["Conhecimento se","constrói.","Avaliações formativas com correção comentada e exercícios de revisão.","QUIZ"],
    biblioteca:["Fontes confiáveis.","Estudo contínuo.","Documentações oficiais e plataformas reconhecidas de ensino técnico.","BIBLIOTECA"],
    videos:["Dev, carreira","e engenharia.","Curadoria de conteúdos públicos de Lucas Montano e Mano Deyvin com créditos e exercícios próprios.","CRIADORES DEV"]
  };
  const repoDoc="https://github.com/raphaelguterres/cybersecurity-roadmap-br/blob/main/";
  const valid=new Set();
  D.tracks.forEach(t=>t.units.forEach((_,i)=>valid.add("unit:"+t.id+":"+i)));
  D.weeks.forEach(w=>valid.add("week:"+w.id));
  D.labs.forEach(l=>valid.add("lab:"+l.id));
  D.challenges.forEach(c=>valid.add("challenge:"+c.id));
  valid.add("quiz:passed");
  function cleanState(raw) {
    const out={checks:{},quizScores:[]};
    if(raw&&typeof raw==="object"){
      if(raw.checks&&typeof raw.checks==="object")
        for(const key of valid)if(raw.checks[key]===true)out.checks[key]=true;
      if(Array.isArray(raw.quizScores))
        out.quizScores=raw.quizScores.filter(n=>Number.isInteger(n)&&n>=0&&n<=10).slice(-50);
    }
    return out;
  }
  let state;
  try{state=cleanState(JSON.parse(localStorage.getItem(STORE)||"{}"));}
  catch(_){state=cleanState({});}
  let level="Todas",area="Todas",search="",videoCreator="Todos",quiz=null,toastTimeout=null;
  const $=id=>document.getElementById(id);
  const checked=key=>state.checks[key]===true;
  const total=keys=>keys.filter(checked).length;
  const percent=(n,d)=>d?Math.round(100*n/d):0;
  const unitKeys=D.tracks.flatMap(t=>t.units.map((_,i)=>"unit:"+t.id+":"+i));
  const weekKeys=D.weeks.map(w=>"week:"+w.id);
  const labKeys=D.labs.map(l=>"lab:"+l.id);
  const challengeKeys=D.challenges.map(c=>"challenge:"+c.id);
  function save(){try{localStorage.setItem(STORE,JSON.stringify(state));return true;}catch(_){toast("Armazenamento indisponível. Exporte seus dados para backup.");return false;}}
  function toast(s){
    const o=$("toast");o.textContent=s;o.classList.add("visible");
    clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>o.classList.remove("visible"),3500);
  }
  function progress(n,d){
    return '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+percent(n,d)+'"><div class="progress-fill" style="width:'+percent(n,d)+'%"></div></div>';
  }
  function check(key,label){
    return '<label class="module"><input type="checkbox" data-check="'+key+'" '+(checked(key)?"checked":"")+'><span>'+label+'</span></label>';
  }
  function trackProgress(t){return [total(t.units.map((_,i)=>"unit:"+t.id+":"+i)),t.units.length];}
  function overall(){const keys=unitKeys.concat(weekKeys,labKeys,challengeKeys,["quiz:passed"]);return [total(keys),keys.length];}
  function overview(){
    const [n,d]=overall(),p=percent(n,d);
    $("total-percent").textContent=p;$("donut-percent").textContent=p+"%";
    $("overall-donut").style.setProperty("--pct",p);
    $("overall-donut").setAttribute("aria-label","Progresso "+p+" por cento");
    $("unit-count").textContent=total(unitKeys)+" / "+unitKeys.length;
    $("week-count").textContent=total(weekKeys)+" / "+weekKeys.length;
    $("lab-count").textContent=total(labKeys)+" / "+labKeys.length;
    $("challenge-count").textContent=total(challengeKeys)+" / "+challengeKeys.length;
    $("quiz-count").textContent=state.quizScores.filter(s=>s>=7).length;
    $("overall-caption").textContent=n===0?"Seu percurso começa aqui.":n===d?"Todas as atividades marcadas!":n+" de "+d+" marcos concluídos.";
    const next=D.weeks.find(w=>!checked("week:"+w.id));
    $("next-week-name").textContent=next?"Semana "+String(next.id).padStart(2,"0")+" — "+next.title:"Roadmap concluído";
    $("next-week-description").textContent=next?next.task:"Revise conteúdos e contribua para a comunidade.";
    const items=D.tracks.filter(t=>["fundamentos","redes","soc","appsec","cloud","dev"].includes(t.id));
    $("overview-tracks").innerHTML=items.map(t=>{
      const [a,b]=trackProgress(t);
      return '<a class="panel track-card" href="#trilhas"><div class="track-top"><span class="track-code">TRILHA '+t.code+'</span><span class="track-level">'+t.level+'</span></div><h3>'+t.name+'</h3><p>'+t.description+'</p>'+progress(a,b)+'<div class="track-progress-label"><span>'+a+' DE '+b+' MÓDULOS</span><span>'+percent(a,b)+'%</span></div></a>';
    }).join("");
  }
  function tracks(){
    const items=D.tracks.filter(t=>level==="Todas"||t.level===level);
    $("tracks-summary").textContent=items.length+" trilhas";
    $("track-filters").querySelectorAll("[data-level]").forEach(b=>b.classList.toggle("active",b.dataset.level===level));
    $("track-list").innerHTML=items.map(t=>{
      const [n,d]=trackProgress(t);
      return '<article class="panel track-detail"><div class="track-detail-header"><div><span class="track-code">TRILHA '+t.code+' / '+t.level.toUpperCase()+' · '+t.tag+'</span><h3>'+t.name+'</h3><p>'+t.description+'</p></div><div class="track-progress-label"><span>'+n+' / '+d+'</span><strong>'+percent(n,d)+'%</strong></div></div><div class="module-grid">'+t.units.map((u,i)=>check("unit:"+t.id+":"+i,u)).join("")+'</div>'+progress(n,d)+'<a class="read-more" href="'+repoDoc+t.doc+'" target="_blank" rel="noopener noreferrer">Guia completo no GitHub ↗</a></article>';
    }).join("");
  }
  function roadmap(){
    const n=total(weekKeys);$("roadmap-count").textContent=n+" / "+weekKeys.length;
    $("roadmap-progress-fill").style.width=percent(n,weekKeys.length)+"%";
    $("week-list").innerHTML=D.cycleNames.map((name,i)=>{
      const weeks=D.weeks.filter(w=>w.cycle===i+1);
      return '<section><div class="cycle-title">Ciclo '+String(i+1).padStart(2,"0")+" — "+name+'</div>'+weeks.map(w=>{
        const done=checked("week:"+w.id);
        return '<article class="week-card '+(done?"done":"")+'"><span class="week-number">'+String(w.id).padStart(2,"0")+'</span><div class="week-body"><h3>'+w.title+'</h3><p>'+w.task+'</p></div><input class="week-check" type="checkbox" data-check="week:'+w.id+'" aria-label="Marcar semana '+w.id+' concluída" '+(done?"checked":"")+'></article>';
      }).join("")+'</section>';
    }).join("");
  }
  function tasks(items,target,prefix){
    $(target).innerHTML=items.map(o=>
      '<article class="panel task-card"><span class="meta">'+(o.code?"LAB "+o.code:"DESAFIO")+' / '+o.level.toUpperCase()+' · '+o.area.toUpperCase()+'</span><h3>'+o.title+'</h3><p>'+o.description+'</p><div class="task-bottom">'+check(prefix+":"+o.id,checked(prefix+":"+o.id)?"Concluído":"Marcar concluído")+'<a href="'+repoDoc+o.doc+'" target="_blank" rel="noopener noreferrer">Guia ↗</a></div></article>'
    ).join("");
  }
  function resources(){
    const cats=["Todas",...new Set(D.resources.map(r=>r.area))].sort((a,b)=>a==="Todas"?-1:b==="Todas"?1:a.localeCompare(b,"pt-BR"));
    $("resource-filters").innerHTML=cats.map(c=>'<button type="button" class="filter '+(area===c?"active":"")+'" data-area="'+c+'">'+c+'</button>').join("");
    const term=search.trim().toLocaleLowerCase("pt-BR");
    const filtered=D.resources.filter(r=>(area==="Todas"||r.area===area)&&(!term||[r.name,r.source,r.description,r.area].join(" ").toLocaleLowerCase("pt-BR").includes(term)));
    $("resource-count").textContent=filtered.length+" fontes · conteúdos externos abrem em nova aba";
    $("resource-list").innerHTML=filtered.length?filtered.map(r=>
      '<article class="panel resource-card"><span class="category">'+r.area+' / '+r.level+'</span><h3>'+r.name+'</h3><p>'+r.description+'</p><small>'+r.source+' · '+r.access+'</small><a class="open-link" href="'+r.url+'" target="_blank" rel="noopener noreferrer">Estudar na fonte ↗</a></article>'
    ).join(""):'<div class="empty-state">Nenhum recurso encontrado. Experimente outro termo.</div>';
  }
  function videos(){
    const list=videoRefs.filter(v=>videoCreator==="Todos"||v.creator===videoCreator);
    $("video-filters").innerHTML=["Todos","Lucas Montano","Mano Deyvin"].map(c=>'<button type="button" class="filter '+(videoCreator===c?"active":"")+'" data-creator="'+c+'">'+c+'</button>').join("");
    $("video-list").innerHTML=list.map(v=>
      '<article class="panel resource-card"><span class="category">'+v.creator+' / '+v.area+'</span><h3>'+v.title+'</h3><p>'+v.note+'</p><small>'+v.kind+' · autoria externa respeitada</small><a class="open-link" href="'+v.url+'" target="_blank" rel="noopener noreferrer">Abrir conteúdo original ↗</a></article>'
    ).join("");
  }
  function renderAll(){overview();tracks();roadmap();tasks(D.labs,"lab-list","lab");tasks(D.challenges,"challenge-list","challenge");resources();videos();}
  function navigate(){
    const h=location.hash.slice(1),view=views.includes(h)?h:"inicio";
    document.querySelectorAll(".view").forEach(s=>s.hidden=s.dataset.view!==view);
    document.querySelectorAll("[data-nav]").forEach(link=>{
      const selected=link.dataset.nav===view;link.classList.toggle("selected",selected);
      if(selected)link.setAttribute("aria-current","page");else link.removeAttribute("aria-current");
    });
    $("view-title").innerHTML=titles[view][0]+"<br><em>"+titles[view][1]+"</em>";
    $("view-description").textContent=titles[view][2];
    $("page-label").textContent=titles[view][3];
    $("sidebar").classList.remove("open");
    $("menu-toggle").setAttribute("aria-expanded","false");
    window.scrollTo(0,0);
  }
  function startQuiz(){
    const pool=D.quiz.map((q,i)=>({q,i}));
    for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
    quiz={questions:pool.slice(0,10),index:0,answers:[],selected:null};
    $("quiz-intro").hidden=true;$("quiz-stage").hidden=false;
    showQuestion();
  }
  function showQuestion(){
    const idx=quiz.index,q=quiz.questions[idx].q;
    $("quiz-stage").innerHTML='<article class="panel padded"><div class="quiz-progress">QUESTÃO '+(idx+1)+' / '+quiz.questions.length+'</div><div class="roadmap-progress" style="margin-top:13px"><div style="width:'+percent(idx+1,quiz.questions.length)+'%"></div></div><h2 class="question-title">'+q.q+'</h2><div class="quiz-options">'+q.options.map((option,i)=>'<label class="quiz-option"><input name="quiz-choice" type="radio" value="'+i+'" '+(quiz.selected===i?"checked":"")+'><span>'+option+'</span></label>').join("")+'</div><button type="button" id="quiz-next" class="primary-button" '+(quiz.selected===null?"disabled":"")+'>'+(idx===9?"Concluir avaliação":"Próxima questão →")+'</button></article>';
  }
  function advanceQuiz(){
    if(!quiz||quiz.selected===null)return;
    quiz.answers.push(quiz.selected);
    quiz.selected=null;
    quiz.index++;
    if(quiz.index<quiz.questions.length){showQuestion();return;}
    const score=quiz.questions.reduce((n,o,i)=>n+(o.q.a===quiz.answers[i]?1:0),0);
    state.quizScores.push(score);state.quizScores=state.quizScores.slice(-50);
    if(score>=7)state.checks["quiz:passed"]=true;
    save();renderAll();
    $("quiz-stage").innerHTML='<article class="panel padded"><span class="section-kicker">RESULTADO / FEEDBACK</span><h2>Rodada concluída</h2><div class="quiz-result">'+score+'/10</div><div class="quiz-feedback '+(score>=7?"":"warning")+'">'+(score>=7?"Boa revisão. Você acertou pelo menos 70% das questões.":"Continue praticando. Revise as explicações e tente outra rodada.")+'</div>'+quiz.questions.map((o,i)=>{
      const ok=o.q.a===quiz.answers[i];
      return '<div class="quiz-review"><strong>'+(i+1)+'. '+o.q.q+' · '+(ok?"✓":"✗")+'</strong><p>Resposta correta: '+o.q.options[o.q.a]+'</p><p>'+o.q.why+'</p></div>';
    }).join("")+'<button type="button" class="primary-button" id="quiz-restart">Nova rodada →</button></article>';
    quiz=null;
  }
  // Estender interface estática com uma área própria de vídeos de dev.
  const videoNav=document.createElement("a");
  videoNav.className="nav-link";videoNav.href="#videos";videoNav.dataset.nav="videos";
  videoNav.innerHTML="<span>▷</span> Vídeos & carreira dev";
  const libNav=document.querySelector('[data-nav="biblioteca"]');
  libNav.parentElement.appendChild(videoNav);
  const section=document.createElement("section");
  section.className="view";section.id="view-videos";section.dataset.view="videos";section.hidden=true;
  section.innerHTML='<div class="intro-note"><strong>Crédito e contexto:</strong> conteúdo de criadores externos, com links para fontes originais. As propostas de atividades são da comunidade deste repositório. Não há transcrições copiadas, endosso ou vínculo com os canais. Vídeos de opinião e notícias não substituem documentação oficial.</div><div class="section-header"><div><div class="section-kicker">DEV / CURADORIA</div><h2>Lucas Montano & Mano Deyvin</h2></div><a class="text-link" href="'+repoDoc+'videos/README.md" target="_blank" rel="noopener noreferrer">Guia de estudos ↗</a></div><div class="filters" id="video-filters" role="group" aria-label="Filtrar por criador"></div><div class="resource-grid" id="video-list"></div><div class="panel padded" style="margin-top:18px"><h2>Como estudar vídeos sem consumir passivamente</h2><p class="subdued">Para cada vídeo: (1) anote a fonte, a data e a tese; (2) diferencie opinião de fato verificável; (3) implemente um microexercício no seu ambiente; (4) registre resultado, limitações e um próximo passo. Para segurança, valide os conceitos em fontes oficiais.</p></div>';
  const footer=document.querySelector("main .footer");footer.before(section);
  $("menu-toggle").addEventListener("click",()=>{
    const open=$("sidebar").classList.toggle("open");$("menu-toggle").setAttribute("aria-expanded",String(open));
  });
  document.addEventListener("change",event=>{
    const t=event.target;
    if(t.matches("[data-check]")){
      const key=t.dataset.check;
      if(!valid.has(key))return;
      if(t.checked)state.checks[key]=true;else delete state.checks[key];
      save();renderAll();toast(t.checked?"Progresso registrado no navegador.":"Marcação removida.");
    }else if(t.matches('input[name="quiz-choice"]')){
      if(!quiz)return;quiz.selected=Number(t.value);
      $("quiz-next").disabled=false;
    }
  });
  document.addEventListener("click",event=>{
    const button=event.target.closest("button");
    if(!button)return;
    if(button.dataset.level){level=button.dataset.level;tracks();}
    else if(button.dataset.area){area=button.dataset.area;resources();}
    else if(button.dataset.creator){videoCreator=button.dataset.creator;videos();}
    else if(button.id==="start-quiz"||button.id==="quiz-restart")startQuiz();
    else if(button.id==="quiz-next")advanceQuiz();
  });
  $("resource-search").addEventListener("input",event=>{search=event.target.value;resources();});
  $("export-btn").addEventListener("click",()=>{
    const payload={format:"cybersecurity-roadmap-br-study-os",version:2,exportedAt:new Date().toISOString(),checks:state.checks,quizScores:state.quizScores};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob);const a=document.createElement("a");
    a.href=url;a.download="cybersecurity-roadmap-br-progresso.json";a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    toast("Backup exportado. Guarde este arquivo em local privado.");
  });
  $("import-btn").addEventListener("click",()=>$("import-file").click());
  $("import-file").addEventListener("change",async event=>{
    const f=event.target.files&&event.target.files[0];event.target.value="";
    if(!f)return;
    if(f.size>100000){toast("Arquivo muito grande para um backup de progresso.");return;}
    try{
      const raw=JSON.parse(await f.text());
      if(raw.format!=="cybersecurity-roadmap-br-study-os"||raw.version!==2)throw Error("Formato inválido");
      const cleaned=cleanState(raw);
      if(!window.confirm("Substituir o progresso salvo neste navegador pelo backup selecionado?"))return;
      state=cleaned;save();renderAll();toast("Progresso importado com sucesso.");
    }catch(_){toast("Não foi possível importar. Use um backup JSON válido da versão 2.");}
  });
  window.addEventListener("hashchange",navigate);
  renderAll();navigate();
})();