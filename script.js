const photos=[
{t:"After Dark",c:"portrait",s:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=88"},
{t:"Concrete / Silk",c:"fashion",s:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=88"},
{t:"The Drive",c:"automotive",s:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=88"},
{t:"Quiet Vows",c:"wedding",s:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88"},
{t:"Noir Mood",c:"portrait",s:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=88"},
{t:"Studio 03",c:"fashion",s:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=88"},
{t:"Velocity",c:"automotive",s:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=88"},
{t:"Golden Hour",c:"wedding",s:"https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=88"},
{t:"Monochrome",c:"portrait",s:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=88"}
];
const names={portrait:"PORTRAIT",fashion:"FASHION",wedding:"WEDDING",automotive:"AUTOMOTIVE"};
const portfolio=document.querySelector("#portfolio");
function render(filter="all"){
 portfolio.innerHTML="";
 photos.filter(x=>filter==="all"||x.c===filter).forEach((p,i)=>{
  const el=document.createElement("article");el.className="card";el.innerHTML=`<img src="${p.s}" alt="${p.t}"><div class="card-info"><small>${names[p.c]} / 0${i+1}</small><strong>${p.t}</strong><span>VIEW ↗</span></div>`;
  el.onclick=()=>openLB(photos.indexOf(p));portfolio.appendChild(el);
 });
}
render();
document.querySelectorAll(".category-nav button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category-nav button").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)});

const menu=document.querySelector(".menu");document.querySelector(".menu-trigger").onclick=()=>menu.classList.add("open");document.querySelector(".menu-close").onclick=()=>menu.classList.remove("open");document.querySelectorAll(".menu a").forEach(a=>a.onclick=()=>menu.classList.remove("open"));

const cur=document.querySelector(".cursor");
if(matchMedia("(pointer:fine)").matches){
 let x=0,y=0,cx=0,cy=0;addEventListener("mousemove",e=>{x=e.clientX;y=e.clientY});function loop(){cx+=(x-cx)*.18;cy+=(y-cy)*.18;cur.style.left=cx+"px";cur.style.top=cy+"px";requestAnimationFrame(loop)}loop();
 document.querySelectorAll("a,button,.card,input,textarea,select").forEach(e=>{e.onmouseenter=()=>cur.classList.add("hover");e.onmouseleave=()=>cur.classList.remove("hover")});
}
document.querySelectorAll(".magnetic").forEach(el=>{el.onmousemove=e=>{let r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.16}px,${(e.clientY-r.top-r.height/2)*.16}px)`};el.onmouseleave=()=>el.style.transform=""});

let lbIndex=0;const lb=document.querySelector("#lightbox");
function openLB(i){lbIndex=i;updateLB();lb.classList.add("open");document.body.style.overflow="hidden"}
function updateLB(){let p=photos[lbIndex];document.querySelector("#lbImg").src=p.s;document.querySelector("#lbImg").alt=p.t;document.querySelector("#lbTitle").textContent=p.t;document.querySelector("#lbCat").textContent=names[p.c]}
function closeLB(){lb.classList.remove("open");document.body.style.overflow=""}
document.querySelector(".lb-close").onclick=closeLB;document.querySelector(".lb-prev").onclick=()=>{lbIndex=(lbIndex-1+photos.length)%photos.length;updateLB()};document.querySelector(".lb-next").onclick=()=>{lbIndex=(lbIndex+1)%photos.length;updateLB()};
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")closeLB();if(e.key==="ArrowRight"){lbIndex=(lbIndex+1)%photos.length;updateLB()}if(e.key==="ArrowLeft"){lbIndex=(lbIndex-1+photos.length)%photos.length;updateLB()}});

const form=document.querySelector("#contactForm");form.onsubmit=e=>{e.preventDefault();let d=new FormData(form);let sub=encodeURIComponent("Zapytanie — "+d.get("project"));let body=encodeURIComponent(`Imię / firma: ${d.get("name")}\nE-mail: ${d.get("email")}\nProjekt: ${d.get("project")}\n\n${d.get("message")}`);location.href=`mailto:hello@twojadomena.pl?subject=${sub}&body=${body}`;document.querySelector("#status").textContent="Otwieram aplikację pocztową…"};
