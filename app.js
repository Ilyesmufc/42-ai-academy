const paths=[
  {id:"fundamentals",icon:"✳",tone:"",number:"01",title:"Les fondamentaux de l’IA",description:"Distingue IA, machine learning et réseaux de neurones. Comprends les mots derrière la révolution.",level:"Débutant",duration:"25 min",category:"beginner",tip:"Un modèle apprend des régularités à partir d’exemples. Il ne « comprend » pas forcément comme une personne.",lesson:"Repère les différences entre un système à règles, un modèle entraîné et un grand modèle de langage. Puis trouve un exemple de chacun dans ton quotidien."},
  {id:"prompts",icon:"⌘",tone:"tone-green",number:"02",title:"L’art du prompt",description:"Formule des instructions claires, ajoute du contexte et évalue la qualité des réponses.",level:"Débutant",duration:"30 min",category:"beginner",tip:"Un bon prompt précise le but, le contexte, les contraintes et la forme de réponse attendue.",lesson:"Prends une consigne vague et améliore-la en ajoutant un rôle utile, le contexte nécessaire, des contraintes et un format de sortie."},
  {id:"llms",icon:"◉",tone:"tone-orange",number:"03",title:"Comprendre les LLM",description:"Explore tokens, fenêtres de contexte, génération et pourquoi un modèle peut se tromper.",level:"Intermédiaire",duration:"35 min",category:"builder",tip:"La génération de texte est probabiliste : une réponse qui semble convaincante doit tout de même être vérifiée.",lesson:"Compare deux formulations d’une même question. Observe ce qui change et note une limite liée aux données, au contexte ou à l’incertitude."},
  {id:"coding",icon:"{ }",tone:"tone-blue",number:"04",title:"Assistants de code IA",description:"Utilise un copilote pour lire, écrire et déboguer du code sans lui déléguer ton jugement.",level:"Intermédiaire",duration:"40 min",category:"builder",tip:"Tu restes responsable du code livré : lis les changements, lance les vérifications et protège tes secrets.",lesson:"Demande une explication d’un petit extrait de code. Compare-la à ton propre raisonnement, puis fais une modification minime et vérifie le résultat."},
  {id:"agents",icon:"⤳",tone:"tone-pink",number:"05",title:"Agents autonomes",description:"Découvre outils, mémoire et boucles d’action. Construis d’abord dans un cadre sûr.",level:"Avancé",duration:"45 min",category:"builder",tip:"Un agent qui agit a besoin de limites, d’outils autorisés et d’une personne qui supervise ses étapes.",lesson:"Dessine un agent simple : son objectif, les outils qu’il peut appeler, les actions interdites et le moment où il doit demander une validation humaine."}
];
const storageKey="42-ai-academy-progress-v1";
let completed=new Set(JSON.parse(localStorage.getItem(storageKey)||"[]"));
let activePath=null;
const grid=document.querySelector("#path-grid");
const dialog=document.querySelector("#lesson-dialog");
function renderPaths(filter="all"){
  grid.innerHTML="";
  paths.forEach((path,index)=>{
    const done=completed.has(path.id);
    const card=document.createElement("article");
    card.className=`path-card ${path.tone}`;
    card.hidden=filter!=="all"&&path.category!==filter;
    card.innerHTML=`<div class="path-top"><span class="path-icon" aria-hidden="true">${path.icon}</span><span class="path-number">${path.number} / 05</span></div><h3>${path.title}</h3><p>${path.description}</p><div class="path-meta"><span>${path.level}</span><span>·</span><span>${path.duration}</span></div><div class="path-progress"><div class="progress-track"><span style="width:${done?"100":"0"}%"></span></div><small>${done?"100%":"0%"}</small></div><button class="path-button" data-id="${path.id}">${done?"Revoir la leçon ↗":"Commencer la leçon ↗"}</button>`;
    grid.append(card);
  });
  grid.querySelectorAll(".path-button").forEach(button=>button.addEventListener("click",()=>openLesson(button.dataset.id)));
  updateProgress();
}
function updateProgress(){
  const percent=Math.round(completed.size/paths.length*100);
  document.querySelector("#progress-percent").textContent=percent+"%";
  document.querySelector("#overall-progress").style.width=percent+"%";
  document.querySelector("#completed-count").textContent=`${completed.size} leçon${completed.size>1?"s":""} terminée${completed.size>1?"s":""}`;
}
function openLesson(id){
  activePath=paths.find(path=>path.id===id);
  if(!activePath)return;
  document.querySelector("#dialog-title").textContent=activePath.title;
  document.querySelector("#dialog-text").textContent=activePath.lesson;
  document.querySelector("#dialog-tip").textContent=activePath.tip;
  const button=document.querySelector("#complete-lesson");
  const done=completed.has(id);
  button.innerHTML=done?'Leçon terminée <span>✓</span>':'Marquer comme terminé <span>✓</span>';
  button.disabled=done;
  button.style.opacity=done?".65":"1";
  dialog.showModal();
}
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(filter=>filter.classList.toggle("active",filter===button));
  renderPaths(button.dataset.filter);
}));
document.querySelector("#complete-lesson").addEventListener("click",()=>{
  if(!activePath)return;
  completed.add(activePath.id);
  localStorage.setItem(storageKey,JSON.stringify([...completed]));
  dialog.close();
  renderPaths(document.querySelector(".filter.active")?.dataset.filter||"all");
});
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
renderPaths();
