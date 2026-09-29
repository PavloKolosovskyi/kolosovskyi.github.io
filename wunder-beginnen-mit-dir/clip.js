
'use strict';
const original=[
  {
    "t": 2.9,
    "end": 8.01,
    "text": "Ein leiser Traum, ein neuer Tag."
  },
  {
    "t": 8.01,
    "end": 12.9,
    "text": "Was tief in dir verborgen lag."
  },
  {
    "t": 12.9,
    "end": 15.63,
    "text": "Goldenes Licht fällt in den Raum,"
  },
  {
    "t": 15.63,
    "end": 18.81,
    "text": "Du hältst ihn fest, den einen Traum."
  },
  {
    "t": 18.81,
    "end": 21.72,
    "text": "So lange hat er dich begleitet,"
  },
  {
    "t": 21.72,
    "end": 24.99,
    "text": "Bis sich dein Blick nach vorne weitet."
  },
  {
    "t": 24.99,
    "end": 28.3,
    "text": "Du musst nicht wissen, wie es geht,"
  },
  {
    "t": 28.3,
    "end": 31.58,
    "text": "Wenn sich der Wind auf einmal dreht."
  },
  {
    "t": 31.58,
    "end": 34.76,
    "text": "Mach einen Schritt, so klein er scheint,"
  },
  {
    "t": 34.76,
    "end": 37.48,
    "text": "Du gehst ihn heute nicht allein."
  },
  {
    "t": 37.48,
    "end": 40.3,
    "text": "Du brauchst kein Zeichen, keinen Plan."
  },
  {
    "t": 40.3,
    "end": 43.94,
    "text": "Fang heute mit dem Träumen an."
  },
  {
    "t": 43.94,
    "end": 47.08,
    "text": "Aus einem Funken wird ein Licht,"
  },
  {
    "t": 47.08,
    "end": 49.95,
    "text": "Das leise durch die Zweifel bricht."
  },
  {
    "t": 49.95,
    "end": 51.31,
    "text": "Deine Magie,"
  },
  {
    "t": 51.31,
    "end": 54.26,
    "text": "Sie fängt mit einem Herzschlag an."
  },
  {
    "t": 54.26,
    "end": 55.63,
    "text": "Deine Magie,"
  },
  {
    "t": 55.63,
    "end": 58.35,
    "text": "Zeigt dir, was alles werden kann."
  },
  {
    "t": 58.35,
    "end": 60.17,
    "text": "Breite deine Flügel aus,"
  },
  {
    "t": 60.17,
    "end": 64.46,
    "text": "Trag dein Licht zur Welt hinaus."
  },
  {
    "t": 64.46,
    "end": 73.62,
    "text": "Was morgen wird, erschaffen wir —"
  },
  {
    "t": 73.62,
    "end": 75.44,
    "text": "Wunder beginnen mit dir."
  },
  {
    "t": 75.44,
    "end": 78.62,
    "text": "Nicht jeder Weg führt gleich ans Ziel,"
  },
  {
    "t": 78.62,
    "end": 81.8,
    "text": "Manchmal wird selbst ein Schritt zu viel."
  },
  {
    "t": 81.8,
    "end": 84.98,
    "text": "Dann ruh dich aus und atme ein,"
  },
  {
    "t": 84.98,
    "end": 87.71,
    "text": "Auch leise darfst du mutig sein."
  },
  {
    "t": 87.71,
    "end": 91.38,
    "text": "Ich kenn die Angst, ich kenn die Nacht,"
  },
  {
    "t": 91.38,
    "end": 94.66,
    "text": "Hab selbst zu oft zu klein gedacht."
  },
  {
    "t": 94.66,
    "end": 98.29,
    "text": "Doch heute zählt nicht, was mal war —"
  },
  {
    "t": 98.29,
    "end": 101.92,
    "text": "Wir sind noch hier, der Traum ist da."
  },
  {
    "t": 101.92,
    "end": 105.93,
    "text": "Du brauchst nicht immer stark zu sein."
  },
  {
    "t": 105.93,
    "end": 108.89,
    "text": "Wir tragen unsre Träume nicht allein."
  },
  {
    "t": 108.89,
    "end": 111.7,
    "text": "Aus einem Funken wird ein Licht,"
  },
  {
    "t": 111.7,
    "end": 114.52,
    "text": "Das leise durch die Zweifel bricht."
  },
  {
    "t": 114.52,
    "end": 115.93,
    "text": "Deine Magie,"
  },
  {
    "t": 115.93,
    "end": 118.66,
    "text": "Sie fängt mit einem Herzschlag an."
  },
  {
    "t": 118.66,
    "end": 120.02,
    "text": "Deine Magie,"
  },
  {
    "t": 120.02,
    "end": 123.94,
    "text": "Zeigt dir, was alles werden kann."
  },
  {
    "t": 123.94,
    "end": 125.99,
    "text": "Breite deine Flügel aus,"
  },
  {
    "t": 125.99,
    "end": 128.9,
    "text": "Trag dein Licht zur Welt hinaus."
  },
  {
    "t": 128.9,
    "end": 131.62,
    "text": "Was morgen wird, erschaffen wir —"
  },
  {
    "t": 131.62,
    "end": 133.48,
    "text": "Wunder beginnen mit dir."
  },
  {
    "t": 133.48,
    "end": 135.35,
    "text": "Wir lernen zu fallen."
  },
  {
    "t": 135.35,
    "end": 137.49,
    "text": "Wir lernen zu fliegen."
  },
  {
    "t": 137.49,
    "end": 139.3,
    "text": "Wir lassen die Zweifel"
  },
  {
    "t": 139.3,
    "end": 140.67,
    "text": "Nicht immer siegen."
  },
  {
    "t": 140.67,
    "end": 142.94,
    "text": "Wir müssen nicht perfekt sein,"
  },
  {
    "t": 142.94,
    "end": 146.71,
    "text": "Nur bereit, den nächsten Schritt zu gehn."
  },
  {
    "t": 146.71,
    "end": 149.4,
    "text": "Wir lassen unsre Lichter leuchten,"
  },
  {
    "t": 149.4,
    "end": 151.99,
    "text": "Bis wir neue Wege sehn."
  },
  {
    "t": 151.99,
    "end": 153.4,
    "text": "Deine Magie,"
  },
  {
    "t": 153.4,
    "end": 156.13,
    "text": "Sie fängt mit einem Herzschlag an."
  },
  {
    "t": 156.13,
    "end": 157.49,
    "text": "Deine Magie,"
  },
  {
    "t": 157.49,
    "end": 161.36,
    "text": "Zeigt dir, was alles werden kann."
  },
  {
    "t": 161.36,
    "end": 163.18,
    "text": "Breite deine Flügel aus,"
  },
  {
    "t": 163.18,
    "end": 167.52,
    "text": "Trag dein Licht zur Welt hinaus."
  },
  {
    "t": 167.52,
    "end": 172.13,
    "text": "Was morgen wird, erschaffen wir —"
  },
  {
    "t": 172.13,
    "end": 175.19,
    "text": "Wunder beginnen mit dir."
  },
  {
    "t": 175.19,
    "end": 177.46,
    "text": "Ein Licht in deinen Händen."
  },
  {
    "t": 177.46,
    "end": 181.48,
    "text": "Ein neuer Weg vor dir."
  },
  {
    "t": 181.48,
    "end": 191.01,
    "text": "Wir geben unsern Träumen Flügel —"
  },
  {
    "t": 191.01,
    "end": 193.2,
    "text": "Wunder beginnen mit dir."
  }
];let cues=structuredClone(original);const $=id=>document.getElementById(id),audio=$('audio'),canvas=$('film'),W=1920,H=1080;let g=canvas.getContext('2d');const transition=document.createElement('canvas');transition.width=W;transition.height=H;const tg=transition.getContext('2d');
let showText=true,ctx,analyser,bins,source,destination,recorder,recording=false,tapIndex=-1,lastRow=-1,energy=0;const image=new Image();image.src='couple.png';
try{const saved=JSON.parse(localStorage.getItem('wunder-cues-v1'));if(valid(saved))cues=saved}catch(e){}
function valid(a){return Array.isArray(a)&&a.length===original.length&&a.every((c,i)=>typeof c.text==='string'&&Number.isFinite(c.t)&&c.t>=0&&c.t<196&&(i===0||c.t>a[i-1].t))}
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,smooth=t=>{t=clamp(t);return t*t*(3-2*t)};
function rng(n){let s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function glow(x,y,r,color='255,204,112',alpha=.3){if(r<=0)return;const z=g.createRadialGradient(x,y,0,x,y,r);z.addColorStop(0,`rgba(${color},${alpha})`);z.addColorStop(1,`rgba(${color},0)`);g.fillStyle=z;g.fillRect(x-r,y-r,r*2,r*2)}
function line(points,color,width=1){g.beginPath();points.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.strokeStyle=color;g.lineWidth=width;g.stroke()}
function bird(x,y,size,t,alpha=1){g.save();g.translate(x,y);g.rotate(Math.sin(t*.6)*.06);g.scale(size,size);g.globalAlpha*=alpha;const flap=Math.sin(t*2.8)*.27;g.shadowColor='#ffc66d';g.shadowBlur=18;let polys=[[[0,8],[-88,-43-flap*70],[-39,35],[-4,23]],[[0,8],[83,-73+flap*65],[36,31],[-4,23]],[[0,8],[18,2],[30,8],[15,13],[2,32],[-4,23]],[[-4,23],[-35,42],[-14,17]]];polys.forEach((p,i)=>{g.beginPath();p.forEach(([a,b],j)=>j?g.lineTo(a,b):g.moveTo(a,b));g.closePath();g.fillStyle=['#e8c88e','#fff0ca','#fff7e6','#c38d4d'][i];g.fill();g.strokeStyle='#fff3c0';g.lineWidth=.8;g.stroke()});g.shadowBlur=0;line([[-88,-43-flap*70],[0,8],[-39,35]],'#a47746',.7);line([[83,-73+flap*65],[0,8],[36,31]],'#b38a50',.7);g.restore()}
function sky(t){let bg=g.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#050c20');bg.addColorStop(.55,'#14253f');bg.addColorStop(1,'#354657');g.fillStyle=bg;g.fillRect(0,0,W,H);glow(1450,210,460,'115,162,210',.15);for(let i=0;i<180;i++){const x=(rng(i)*W+t*(2+rng(i+4)*7))%W,y=rng(i+90)*H*.78;g.globalAlpha=.18+.55*(.5+.5*Math.sin(t*.5+i));g.fillStyle=i%5?'#c9dcf7':'#f8d293';g.beginPath();g.arc(x,y,.5+rng(i+24)*1.5,0,Math.PI*2);g.fill()}g.globalAlpha=1;for(let i=0;i<7;i++){glow((i*380-t*(9+i))%(W+700)+100,660+Math.sin(t*.15+i)*110,360,'133,165,190',.055)}}
function particles(t,strength=1){g.save();g.globalCompositeOperation='screen';for(let i=0;i<95;i++){const x=(rng(i+320)*W+Math.sin(t*.3+i)*35),y=(rng(i+420)*H-t*(10+rng(i)*18)%H+H)%H;let a=(.15+.5*rng(i+500))*strength;g.fillStyle=`rgba(255,215,146,${a})`;g.beginPath();g.arc(x,y,1+rng(i+90)*2,0,7);g.fill();}g.restore()}
function home(t,opacity=1){g.save();g.globalAlpha=opacity;if(image.complete&&image.naturalWidth){let z=1.025+.016*Math.sin(t*.11);let iw=W*z,ih=iw*image.height/image.width;g.drawImage(image,(W-iw)/2,(H-ih)/2,iw,ih)}glow(1000,635,170+energy*80,'255,203,90',.13+.04*Math.sin(t*2));particles(t,.6);g.restore()}
function ribbon(t,y,alpha=1){g.save();g.globalAlpha=alpha;g.shadowBlur=14;g.shadowColor='#f8c96e';for(let k=0;k<3;k++){let p=[];for(let x=0;x<=W;x+=12)p.push([x,y+Math.sin(x*.004+t*.5+k)*55+Math.sin(x*.009-t*.8)*12]);line(p,k===1?'#acdce3':'#eac77d',k===1?1.3:2)}g.restore()}
function bridge(t){sky(t);g.save();g.translate(960,410);for(let i=34;i>=0;i--){let z=i/34,depth=Math.pow(1-z,2),y=60+depth*680,w=22+depth*1600;g.globalAlpha=.18+depth*.5;g.fillStyle=i%2?'#69c2d2':'#edce88';g.beginPath();g.moveTo(-w/2,y);g.lineTo(w/2,y);g.lineTo(w*.48,y+4+depth*12);g.lineTo(-w*.48,y+4+depth*12);g.closePath();g.fill();glow(0,y,Math.max(15,w*.5),'130,204,214',.04)}g.restore();ribbon(t,560,.7);bird(960+Math.sin(t*.2)*110,365+Math.sin(t)*25,1.5,t);particles(t)}
function city(t,grand=false){sky(t);const lift=grand?smooth((t-153)/28):0;glow(960,340,650,'238,193,123',.08+lift*.16);g.save();g.translate(960,590-lift*100);g.scale(1-lift*.22,1-lift*.22);for(let layer=0;layer<3;layer++){for(let i=0;i<26;i++){let seed=i+layer*80;let x=(i-13)*91+Math.sin(layer)*30;let h=65+rng(seed+1000)*230;let base=110+layer*85+Math.sin(i*.5)*35;g.fillStyle=['#1a3148','#243e50','#284452'][layer];g.strokeStyle='rgba(224,192,139,.3)';g.lineWidth=1;g.fillRect(x,base-h,60,h);g.strokeRect(x,base-h,60,h);g.beginPath();g.moveTo(x-7,base-h);g.lineTo(x+30,base-h-30);g.lineTo(x+67,base-h);g.fill();for(let yy=base-h+16;yy<base-10;yy+=25){for(let xx=x+10;xx<x+55;xx+=17){let a=.2+.7*(.5+.5*Math.sin(t*.6+seed+yy));g.fillStyle=`rgba(255,214,135,${a})`;g.fillRect(xx,yy,6,11)}}}}g.restore();if(grand){g.save();g.globalCompositeOperation='screen';for(let side of [-1,1]){for(let i=0;i<34;i++){const p=i/34,x=960+side*(110+p*760),y=420-Math.sin(p*Math.PI)*240+Math.sin(t*.7+p*4)*20;line([[960,550],[x,y],[x+side*70,y-90-p*70]],`rgba(245,212,156,${.15+lift*.55})`,1.5);glow(x,y,18,'255,220,150',.25)}}g.restore();bird(960,430,2.6+lift,t)}else{bird(960+Math.sin(t*.13)*250,300,1.1,t)}particles(t);ribbon(t,710,.5)}
function flight(t){sky(t);let u=(t-128)/25;for(let i=0;i<24;i++){let a=i*2.399+t*.15,r=100+(i%8)*80;bird(960+Math.cos(a)*r*1.5,440+Math.sin(a)*r*.58,(.22+rng(i)*.45)*(1+u*.3),t+i,.25+rng(i)*.65)}bird(960,460+Math.sin(t)*20,2.4,t);glow(960,400,400,'221,205,167',.13);particles(t);ribbon(t,680,.6)}
const scenes=[{s:0,e:24,fn:home},{s:24,e:49,fn:bridge},{s:49,e:77,fn:(t)=>city(t)},{s:77,e:99,fn:home},{s:99,e:128,fn:(t)=>city(t)},{s:128,e:153,fn:flight},{s:153,e:180,fn:(t)=>city(t,true)},{s:180,e:196,fn:home}];
function scene(t){let i=scenes.findIndex(s=>t<s.e);if(i<0)i=scenes.length-1;scenes[i].fn(t);const remain=scenes[i].e-t;if(remain<2&&i<scenes.length-1){const screen=g;g=tg;g.clearRect(0,0,W,H);g.globalAlpha=1;scenes[i+1].fn(t);g=screen;g.save();g.globalAlpha=smooth(1-remain/2);g.drawImage(transition,0,0);g.restore()}let v=g.createRadialGradient(960,450,200,960,500,1100);v.addColorStop(0,'#0000');v.addColorStop(1,'#01030a99');g.fillStyle=v;g.fillRect(0,0,W,H)}
function cueAt(t){let i=-1;for(let j=0;j<cues.length;j++)if(cues[j].t<=t)i=j;else break;return i}
function captions(t){if(!showText)return;let i=cueAt(t);if(i<0||t>194.5)return;let c=cues[i],end=i+1<cues.length?cues[i+1].t:193.6;if(t>end+1)return;const p=clamp((t-c.t)/Math.max(.2,end-c.t));let grad=g.createLinearGradient(0,780,0,H);grad.addColorStop(0,'#02061200');grad.addColorStop(.45,'#020612c9');grad.addColorStop(1,'#020612f0');g.fillStyle=grad;g.fillRect(0,780,W,300);let size=50;g.font=`500 ${size}px Georgia`;while(g.measureText(c.text).width>1660&&size>28){size-=2;g.font=`500 ${size}px Georgia`};g.textAlign='left';let width=g.measureText(c.text).width,x=(W-width)/2;g.shadowColor='#000';g.shadowBlur=12;g.fillStyle='#c6cbd6';g.fillText(c.text,x,943);g.save();g.beginPath();g.rect(x-4,880,(width+8)*p,90);g.clip();g.fillStyle='#ffe3a5';g.fillText(c.text,x,943);g.restore();g.shadowBlur=0;g.fillStyle='#a4afc0';g.font='28px Georgia';g.textAlign='center';if(i+1<cues.length)g.fillText(cues[i+1].text,960,1000);g.fillStyle='#6c634e';g.fillRect(760,1034,400,2);g.fillStyle='#edce89';g.fillRect(760,1034,400*p,2);glow(760+400*p,1035,10,'255,217,150',.7)}
function audioSetup(){if(ctx)return;ctx=new AudioContext();source=ctx.createMediaElementSource(audio);analyser=ctx.createAnalyser();analyser.fftSize=256;bins=new Uint8Array(analyser.frequencyBinCount);destination=ctx.createMediaStreamDestination();source.connect(analyser);analyser.connect(ctx.destination);analyser.connect(destination)}
async function play(){try{audioSetup();await ctx.resume();await audio.play();$('status').textContent=''}catch(e){$('status').textContent='Не вдалося почати відтворення. Спробуй Chrome або Edge.'}}
audio.volume=.85;audio.onplay=()=>$('play').textContent='Ⅱ Пауза';audio.onpause=()=>$('play').textContent='▶ Відтворити';audio.onended=()=>{if(recording)stopRecording();$('play').textContent='▶ Відтворити'};
$('play').onclick=()=>audio.paused?play():audio.pause();$('restart').onclick=()=>{audio.currentTime=0};$('seek').oninput=e=>{audio.currentTime=+e.target.value};$('volume').oninput=e=>audio.volume=+e.target.value;$('full').onclick=()=>document.fullscreenElement?document.exitFullscreen():$('stage').requestFullscreen();$('textToggle').onclick=()=>{showText=!showText;$('textToggle').textContent='Текст: '+(showText?'увімкнено':'вимкнено')};
const clock=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');let prev=0;function frame(now){requestAnimationFrame(frame);if(now-prev<31)return;prev=now;let t=audio.currentTime||0;if(analyser){analyser.getByteFrequencyData(bins);energy=bins.slice(0,15).reduce((a,b)=>a+b,0)/15/255}g.globalAlpha=1;g.shadowBlur=0;scene(t);captions(t);$('seek').value=t;$('time').textContent=clock(t)+' / '+clock(Number.isFinite(audio.duration)?audio.duration:195.38);let i=cueAt(t);if(i!==lastRow){document.querySelector('.cue.active')?.classList.remove('active');$('row'+i)?.classList.add('active');lastRow=i}}
function persist(){try{localStorage.setItem('wunder-cues-v1',JSON.stringify(cues))}catch(e){$('status').textContent='Браузер не зберіг зміни. Завантаж розмітку JSON.'}}
function editor(){const root=$('editor');root.replaceChildren();cues.forEach((c,i)=>{let r=document.createElement('div');r.className='cue';r.id='row'+i;let n=document.createElement('span');n.textContent=i+1;let input=document.createElement('input');input.type='number';input.step='.05';input.min='0';input.value=c.t;input.setAttribute('aria-label','Час рядка '+(i+1));input.onchange=()=>{let a=structuredClone(cues);a[i].t=+input.value;if(valid(a)){cues=a;persist()}else{input.value=cues[i].t;$('status').textContent='Часи повинні зростати від рядка до рядка.'}};let text=document.createElement('span');text.textContent=c.text;r.append(n,input,text);root.append(r)})}
function mark(){if(tapIndex<0||tapIndex>=cues.length)return;let t=+audio.currentTime.toFixed(2);if(tapIndex>0&&t<=cues[tapIndex-1].t)return;cues[tapIndex].t=t;tapIndex++;if(valid(cues))persist();editor();$('nextCue').textContent=tapIndex<cues.length?'Наступний: '+cues[tapIndex].text:'Усі рядки розмічено.'}
$('tapStart').onclick=()=>{tapIndex=0;audio.currentTime=0;$('nextCue').textContent='Наступний: '+cues[0].text;play()};$('tap').onclick=mark;document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if(e.code==='Enter'&&tapIndex>=0){e.preventDefault();mark()}else if(e.code==='Space'){e.preventDefault();audio.paused?play():audio.pause()}});
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)}
$('saveTiming').onclick=()=>download(new Blob([JSON.stringify(cues,null,2)],{type:'application/json'}),'wunder-timing.json');$('importTiming').onchange=async e=>{try{let a=JSON.parse(await e.target.files[0].text());if(!valid(a))throw Error();cues=a;persist();editor();$('status').textContent='Розмітку завантажено.'}catch(err){$('status').textContent='Файл розмітки некоректний.'}e.target.value=''};$('resetTiming').onclick=()=>{cues=structuredClone(original);persist();editor()};
function stopRecording(){if(recorder?.state==='recording')recorder.stop();recording=false;$('export').textContent='Зберегти відео';$('seek').disabled=false;$('play').disabled=false;$('restart').disabled=false}
$('export').onclick=async()=>{if(recording){stopRecording();audio.pause();return}if(!window.MediaRecorder||!canvas.captureStream){$('status').textContent='Для запису відео відкрий файл у Chrome або Edge.';return}try{audio.pause();audio.currentTime=0;audioSetup();await ctx.resume();const stream=canvas.captureStream(30);for(const track of destination.stream.getAudioTracks())stream.addTrack(track);const mime=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].find(v=>MediaRecorder.isTypeSupported(v));if(!mime)throw Error();let parts=[];recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:8000000});recorder.ondataavailable=e=>{if(e.data.size)parts.push(e.data)};recorder.onstop=()=>{download(new Blob(parts,{type:mime}),'Wunder-beginnen-mit-dir.webm');stream.getVideoTracks().forEach(t=>t.stop());$('status').textContent='Відео збережено у WebM.'};recorder.start(1000);recording=true;$('export').textContent='Завершити запис';$('seek').disabled=true;$('play').disabled=true;$('restart').disabled=true;await audio.play();$('status').textContent='Запис триває в реальному часі. Залиш цю вкладку видимою до кінця пісні (3:15).'}catch(e){stopRecording();$('status').textContent='Не вдалося почати запис у цьому браузері.'}};
editor();requestAnimationFrame(frame);
