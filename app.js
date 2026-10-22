(function(){
"use strict";
document.documentElement.classList.remove("no-js");
const $=id=>document.getElementById(id);
const C=CONFIG;
const sinMov=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}

function imagen(src,alt){
  const marco=el("div","marco");
  const img=new Image();img.alt=alt;img.loading="lazy";
  img.onerror=()=>{marco.textContent="";const v=el("div","vacio");v.append(el("b",null,"💙"),
    el("span",null,"Aquí va una foto"),el("small",null,"Pon el archivo: "+src));marco.append(v);};
  img.src=src;marco.append(img);return marco;
}

/* Entrada en dos pasos */
$("entrada-msg").textContent=C.mensajeEntrada;
$("sorpresa-foto").append(imagen(C.sorpresa.foto,"Foto de "+C.tuNombre));
$("sorpresa-titulo").textContent=C.sorpresa.titulo;
$("sorpresa-texto").textContent=C.sorpresa.texto;
$("btn-entrar").textContent=C.sorpresa.boton;
$("btn-descubrir").onclick=()=>{$("paso1").hidden=true;$("paso2").hidden=false;corazones(16);$("btn-entrar").focus();};
$("btn-entrar").onclick=()=>{
  $("principal").classList.remove("oculto");
  $("entrada").classList.add("sale");
  setTimeout(()=>$("entrada").remove(),sinMov?0:800);
};

$("nombres").textContent=C.tuNombre+" & "+C.ellaNombre;
$("frase").textContent=C.frasePortada;
$("marco-portada").replaceWith(imagen(C.fotoPortada,"Foto principal de la pareja"));
$("marco-carino").replaceWith(imagen(C["cariño"].foto,"Foto de "+C["cariño"].nombre));
$("carino-texto").textContent=C["cariño"].texto;
$("carino-firma").textContent=C["cariño"].firma;

/* Contador */
const aviso=$("contador-aviso"),caja=$("contador-caja");
function tick(){
  const ini=new Date(C.fechaInicio);
  if(!C.fechaInicio||isNaN(ini)){aviso.textContent="La fecha en config.js no es válida.";caja.textContent="";return;}
  const ms=Date.now()-ini.getTime();
  if(ms<0){aviso.textContent="La fecha de inicio está en el futuro. Revisa config.js.";caja.textContent="";return;}
  aviso.textContent="";
  const s=Math.floor(ms/1000),v=[[Math.floor(s/86400),"días"],[Math.floor(s%86400/3600),"horas"],[Math.floor(s%3600/60),"min"],[s%60,"seg"]];
  caja.textContent="";
  v.forEach(([n,l])=>{const d=el("div");d.append(el("strong",null,String(n)),el("span",null,l));caja.append(d);});
}
tick();setInterval(tick,1000);

/* Ruleta */
const rueda=$("rueda"),N=C.ruleta.length,seg=360/N;let giro=0,actual=0;
const NS="http://www.w3.org/2000/svg";
C.ruleta.forEach((r,i)=>{
  const a0=(i*seg-90)*Math.PI/180,a1=((i+1)*seg-90)*Math.PI/180;
  const p=document.createElementNS(NS,"path");
  p.setAttribute("d",`M0 0 L${95*Math.cos(a0)} ${95*Math.sin(a0)} A95 95 0 0 1 ${95*Math.cos(a1)} ${95*Math.sin(a1)}Z`);
  p.setAttribute("fill",i%2?"#f4a6c0":"#8fbbea");p.setAttribute("stroke","#fff");rueda.append(p);
  const t=document.createElementNS(NS,"text");t.textContent=r.texto;
  t.setAttribute("transform",`rotate(${i*seg+seg/2-90}) translate(58 0)`);
  t.setAttribute("text-anchor","middle");t.setAttribute("font-size","10");t.setAttribute("fill","#12335f");
  t.setAttribute("dominant-baseline","middle");rueda.append(t);
});
const c=document.createElementNS(NS,"circle");c.setAttribute("r","12");c.setAttribute("fill","#fff");rueda.append(c);
$("btn-girar").onclick=function(){
  this.disabled=true;
  giro+=1440+Math.floor(Math.random()*360);
  rueda.style.transform=`rotate(${giro}deg)`;
  setTimeout(()=>{
    actual=Math.floor(((360-giro%360)%360)/seg)%N;
    $("pregunta").textContent=C.ruleta[actual].pregunta;
    $("resultado").hidden=false;
    const no=$("btn-no");no.style.left="55%";no.style.top="";
    this.disabled=false;
  },sinMov?100:4100);
};
function huir(e){
  if(e)e.preventDefault();
  const z=$("zona-botones"),no=$("btn-no");
  no.style.left=Math.random()*(z.clientWidth-no.offsetWidth)+"px";
  no.style.top=Math.random()*(z.clientHeight-no.offsetHeight)+"px";
}
["pointerenter","touchstart","focus","click"].forEach(ev=>$("btn-no").addEventListener(ev,huir));
/* "Sí" abre plan.html con el plan elegido */
$("btn-si").onclick=()=>{ location.href="plan.html?p="+actual; };

/* Modales */
let ultimoFoco=null;
function abrir(m){ultimoFoco=document.activeElement;m.hidden=false;m.querySelector("[data-cerrar]").focus();}
function cerrar(m){m.querySelectorAll("video").forEach(v=>v.pause());m.hidden=true;if(ultimoFoco)ultimoFoco.focus();}
document.querySelectorAll(".modal").forEach(m=>{
  m.addEventListener("click",e=>{if(e.target===m||e.target.hasAttribute("data-cerrar"))cerrar(m);});
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal").forEach(m=>{if(!m.hidden)cerrar(m);});});

/* Galería con filtros */
let filtro="Todas";const extras=[];
function medio(f,grande){
  if(f.tipo==="video"){
    const m=el("div","marco");
    const v=document.createElement("video");
    v.src=f.src;v.preload="metadata";v.playsInline=true;v.setAttribute("aria-label",f.titulo);
    if(grande){v.controls=true;}else{v.muted=true;}
    v.onerror=()=>{m.textContent="";const x=el("div","vacio");
      x.append(el("b",null,"🎬"),el("span",null,"Aquí va un video"),el("small",null,"Pon el archivo: "+f.src));m.append(x);};
    m.append(v);if(!grande)m.append(el("span","play","▶"));
    return m;
  }
  return imagen(f.src,f.titulo);
}
function tarjeta(f){
  const b=el("button","polaroid");b.type="button";b.setAttribute("aria-label","Ver: "+f.titulo);
  b.append(medio(f,false),el("h3",null,f.titulo));
  b.onclick=()=>{const g=$("foto-grande");g.textContent="";g.append(medio(f,true));
    $("foto-titulo").textContent=f.titulo;$("foto-desc").textContent=f.descripcion||"";abrir($("foto-modal"));};
  $("galeria-grid").append(b);
}
function pintar(){
  $("galeria-grid").textContent="";
  C.fotos.concat(extras).filter(f=>filtro==="Todas"||f.categoria===filtro).forEach(tarjeta);
  document.querySelectorAll(".filtros button").forEach(b=>b.setAttribute("aria-pressed",String(b.textContent===filtro)));
}
["Todas"].concat(C.categorias).forEach(cat=>{
  const b=el("button","chip",cat);b.type="button";b.onclick=()=>{filtro=cat;pintar();};$("filtros").append(b);
});
pintar();
$("subir").onchange=e=>{[...e.target.files].forEach(f=>extras.push({categoria:filtro==="Todas"?"Juntos":filtro,
  src:URL.createObjectURL(f),titulo:f.name.replace(/\.[^.]+$/,""),descripcion:"Foto añadida desde tu dispositivo."}));pintar();};

/* Línea de tiempo y carta */
C.recuerdos.forEach(r=>{
  const li=el("li");li.append(el("small",null,r.etiqueta),el("h3",null,r.titulo));
  if(r.foto){const f=el("figure","polaroid recuerdo-foto");f.append(imagen(r.foto,r.titulo));li.append(f);}
  li.append(el("p",null,r.texto));$("linea").append(li);
});
$("carta-titulo").textContent=C.carta.titulo;
C.carta.parrafos.forEach(p=>$("carta-texto").append(el("p",null,p)));
$("carta-texto").append(el("p","final",C.carta.cierre));
$("btn-carta").onclick=()=>abrir($("carta-modal"));

function corazones(n){
  if(sinMov)return;
  for(let i=0;i<n;i++){const s=el("span",null,i%2?"💙":"💗");
    s.style.left=Math.random()*95+"vw";s.style.fontSize=(1+Math.random()*1.5)+"rem";
    s.style.animationDelay=Math.random()*1.2+"s";$("corazones").append(s);setTimeout(()=>s.remove(),5000);}
}
$("btn-final").onclick=function(){this.disabled=true;$("msg-final").textContent=C.mensajeFinal;corazones(30);};

/* Música manual */
let audio=null;const bm=$("btn-musica"),mm=$("msg-musica");
bm.onclick=()=>{
  if(!audio){audio=new Audio(C.musica);audio.loop=true;
    audio.onerror=()=>{mm.textContent="No encontré la canción. Copia un MP3 en "+C.musica+" 🎶";bm.setAttribute("aria-pressed","false");audio=null;};}
  if(audio.paused){audio.play().then(()=>{bm.textContent="⏸ Pausar música";bm.setAttribute("aria-pressed","true");mm.textContent="";})
    .catch(()=>{if(audio)mm.textContent="Tu navegador bloqueó el audio. Permite el sonido para este sitio y vuelve a pulsar.";});}
  else{audio.pause();bm.textContent="🎵 Activar música";bm.setAttribute("aria-pressed","false");}
};
})();