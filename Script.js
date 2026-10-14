const TX={
en:{title:'Pujo Metro Route',by:"Sanjib Ghosh's Pujo Guide",sub:'Dakshineswar → Kavi Subhash · Blue Line',safe:'Safety first — read before you go',ph:'Search pandal or station…',hint:'Tap pandals to add them to your trip, then press Start Guide. 📍 opens one place in Google Maps.',trip:'My Pujo Trip',stops:'stops',clear:'Clear',ord:'North → South order',go:'Start Guide',max:'Max 10 stops per route.',rem:'Stay in a group · use main roads · no pushing · emergency 112',none:'No listed pandal near this station',foot:'Made with ❤️ by Sanjib Ghosh for friends & family',disc:'Pandal–station mapping is approximate. Check latest metro timings.',stn:'stations',pan:'pandals',match:'matches',walk:'🚶 Walking',drive:'🚗 Driving',bike:'🚲 Cycling',
chk:['📱 Phone charged','👥 Group together','📍 Meeting point set','🚇 Last metro checked'],
tips:['Stay in a group and fix a meeting point (e.g. a metro station gate).','Charge your phone, carry a power bank and share live location with friends.','Keep bags in front and zipped. Carry little cash. Beware of pickpockets.','Check the last metro time and plan your return before it gets late.','Don\'t push in crowds; follow the one-way flow. Ashtami/Nabami nights are busiest, so go early evening or on a weekday.','Stay away from decorations, loose wires and generators. Note the emergency exits.','Hold children\'s and elders\' hands; put your phone number in a child\'s pocket.','At night choose main roads over empty lanes, even if Maps shows a shortcut. Follow police and volunteers.','Wear comfy shoes, carry water, and eat street food only from clean, fresh stalls.']},
bn:{title:'পুজো মেট্রো রুট',by:'সঞ্জীব ঘোষের পুজো গাইড',sub:'দক্ষিণেশ্বর → কবি সুভাষ · ব্লু লাইন',safe:'আগে নিরাপত্তা — বেরোনোর আগে পড়ুন',ph:'প্যান্ডেল বা স্টেশন খুঁজুন…',hint:'প্যান্ডেলে ট্যাপ করে ট্রিপে যোগ করুন, তারপর "গাইড শুরু" চাপুন। 📍 দিয়ে একটি জায়গা গুগল ম্যাপে খুলবে।',trip:'আমার পুজো ট্রিপ',stops:'টি স্টপ',clear:'মুছুন',ord:'উত্তর → দক্ষিণ ক্রমে',go:'গাইড শুরু',max:'একটি রুটে সর্বোচ্চ ১০টি স্টপ।',rem:'দলে থাকুন · বড় রাস্তা ধরুন · ঠেলাঠেলি নয় · জরুরি ১১২',none:'এই স্টেশনের কাছে তালিকাভুক্ত পুজো নেই',foot:'সঞ্জীব ঘোষের তরফ থেকে বন্ধু ও পরিবারের জন্য ❤️',disc:'প্যান্ডেল–স্টেশন মিল আনুমানিক। মেট্রোর সময় আগে দেখে নিন।',stn:'টি স্টেশন',pan:'টি প্যান্ডেল',match:'টি মিল',walk:'🚶 হেঁটে',drive:'🚗 গাড়িতে',bike:'🚲 সাইকেলে',
chk:['📱 ফোন চার্জ করা','👥 দল একসঙ্গে','📍 মিটিং পয়েন্ট ঠিক','🚇 শেষ মেট্রোর সময় দেখা'],
tips:['দলবদ্ধ থাকুন এবং একটি মিটিং পয়েন্ট ঠিক করুন (যেমন মেট্রো স্টেশনের গেট)।','ফোন চার্জ করে নিন, পাওয়ার ব্যাংক রাখুন এবং বন্ধুদের সঙ্গে লাইভ লোকেশন শেয়ার করুন।','ব্যাগ সামনে রাখুন, চেন বন্ধ রাখুন। কম টাকা সঙ্গে নিন, পকেটমার থেকে সাবধান।','শেষ মেট্রোর সময় আগে দেখে নিন এবং দেরি হওয়ার আগেই ফেরার পরিকল্পনা করুন।','ভিড়ে ঠেলাঠেলি করবেন না, একমুখী লাইন মেনে চলুন। অষ্টমী-নবমীর রাতে ভিড় সবচেয়ে বেশি, তাই সন্ধ্যার শুরুতে বা কাজের দিনে যান।','সাজসজ্জা, ঝুলন্ত তার ও জেনারেটর থেকে দূরে থাকুন। জরুরি বেরোনোর পথ দেখে নিন।','শিশু ও বয়স্কদের হাত ধরে চলুন; শিশুর পকেটে আপনার ফোন নম্বর লিখে রাখুন।','রাতে ফাঁকা গলির বদলে বড় রাস্তা বেছে নিন, ম্যাপ শর্টকাট দেখালেও। পুলিশ ও স্বেচ্ছাসেবকদের কথা মানুন।','আরামদায়ক জুতো পরুন, জল সঙ্গে রাখুন; রাস্তার খাবার শুধু পরিষ্কার ও টাটকা জায়গা থেকে খান।']}};
const EM=[['112','Emergency','জরুরি'],['100','Police','পুলিশ'],['101','Fire','দমকল'],['102 / 108','Ambulance','অ্যাম্বুলেন্স'],['1091','Women Helpline','মহিলা হেল্পলাইন']];
const S=[
["দক্ষিণেশ্বর","Dakshineswar",[]],
["বরানগর","Baranagar",["নেতাজী কলোনী লো ল্যান্ড|Netaji Colony Low Land"]],
["নোয়াপাড়া","Noapara",["নোয়াপাড়া দাদাভাই সংঘ|Noapara Dadabhai Sangha"]],
["দমদম","Dum Dum",["১৪ পল্লী সার্বজনীন|14 Palli Sarbojanin","সিঁথি সার্বজনীন|Sinthi Sarbojanin"]],
["বেলগাছিয়া","Belgachia",["টালা পার্ক প্রত্যয়|Tala Park Pratyay","ভারতচক্র|Bharatchakra","তরুণ দল|Tarun Dal","শ্রীভূমি|Sribhumi","টালা বারোয়ারি|Tala Barowari"]],
["শ্যামবাজার","Shyambazar",["বাগবাজার|Baghbazar","শ্যাম স্কোয়ার|Shyam Square","ফ্রেন্ডস ইউনিয়ন|Friends Union","জগৎ মুখার্জি পার্ক|Jagat Mukherjee Park"]],
["শোভাবাজার সুতানুটি","Sovabazar Sutanuti",["আহিরীটোলা|Ahiritola","বেনিয়াটোলা|Beniatola","কুমারটুলি পার্ক|Kumartuli Park","শোভাবাজার রাজবাড়ি|Sovabazar Rajbari","হাতিবাগান সার্বজনীন|Hatibagan Sarbojanin","তেলেঙ্গাবাগান|Telengabagan","কাশি বোস লেন|Kashi Bose Lane"]],
["গিরিশ পার্ক","Girish Park",["বিডন স্কোয়ার|Beadon Square","চালতাবাগান|Chaltabagan","বিবেকানন্দ স্পোর্টিং|Vivekananda Sporting","শিমলা ব্যায়াম সমিতি|Simla Byayam Samiti","৩৭ পল্লী|37 Palli","রবীন্দ্র কানন|Rabindra Kanan"]],
["এম. জি. রোড","M.G. Road",["মহম্মদ আলি পার্ক|Mohammad Ali Park","কলেজ স্কোয়ার|College Square","শিয়ালদহ রেলওয়ে অ্যাথলেটিক ক্লাব|Sealdah Railway Athletic Club"]],
["সেন্ট্রাল","Central",["সন্তোষ মিত্র স্কোয়ার|Santosh Mitra Square","সুবোধ মল্লিক স্কোয়ার|Subodh Mullick Square","কাপালিতলা|Kapalitola"]],
["চাঁদনি চক","Chandni Chowk",["জানবাজার তালতলা সার্বজনীন|Janbazar Taltala Sarbojanin"]],
["এসপ্ল্যানেড","Esplanade",[]],
["ময়দান","Maidan",[]],
["পার্ক স্ট্রিট","Park Street",[]],
["রবীন্দ্র সদন","Rabindra Sadan",["গোখেল স্পোর্টিং|Gokhale Sporting","চক্রবেড়িয়া সার্বজনীন|Chakraberia Sarbojanin"]],
["নেতাজী ভবন","Netaji Bhavan",["পদ্মপুকুর ইয়ুথ এসোসিয়েশন|Padmapukur Youth Assoc.","হরিশ পার্ক ২২ পল্লী|Harish Park 22 Palli","ভবানীপুর মুক্তদল|Bhowanipore Muktodal","৭৫ পল্লী|75 Palli","৭৬ পল্লী|76 Palli"]],
["যতীন দাস পার্ক","Jatin Das Park",["ম্যাডক্স স্কোয়ার|Maddox Square","২৩ পল্লী|23 Palli","বাসকুল বাগান|Baskul Bagan","কালীঘাট মিলন সংঘ|Kalighat Milan Sangha"]],
["কালীঘাট","Kalighat",["বালিগঞ্জ কালচারাল|Ballygunge Cultural","একডালিয়া এভারগ্রীন|Ekdalia Evergreen","সিঁথী পার্ক|Sinthee Park","চেতলা|Chetla","দেশপ্রিয় পার্ক|Deshapriya Park","ত্রিধারা|Tridhara","হিন্দুস্থান পার্ক সার্বজনীন|Hindustan Park Sarbojanin"]],
["রবীন্দ্র সরোবর","Rabindra Sarobar",["নবপল্লী সংঘ|Nabapalli Sangha","সুরুচি সংঘ|Suruchi Sangha","মুদিয়ালি|Mudiali","শিব মন্দির|Shib Mandir","তরুণ সংঘ|Tarun Sangha"]],
["মহানায়ক উত্তম কুমার","Mahanayak Uttam Kumar",["অশোকনগর|Ashoknagar","অজেয় সংহতি|Ajeya Sanhati","বড়িশা ক্লাব|Barisha Club","হরিদেবপুর ৪১ পল্লী ক্লাব|Haridevpur 41 Palli Club"]],
["নেতাজী","Netaji",["পল্লী উন্নয়ন সমিতি|Palli Unnayan Samiti","নেতাজী নগর সার্বজনীন|Netaji Nagar Sarbojanin"]],
["মাস্টারদা সূর্য সেন","Masterda Surya Sen",["রায়নগর উন্নয়ন সমিতি|Raynagar Unnayan Samiti","মৈত্রী পার্ক|Maitri Park"]],
["গীতাঞ্জলি","Gitanjali",["নাকতলা উদয়ন সংঘ|Naktala Udayan Sangha"]],
["কবি নজরুল","Kavi Nazrul",["পঞ্চদুর্গা সার্বজনীন|Panchadurga Sarbojanin","নবদুর্গা সার্বজনীন|Navadurga Sarbojanin","যাত্রা শুরু সংঘ|Jatra Suru Sangha"]],
["শহীদ ক্ষুদিরাম","Shahid Khudiram",["পাটুলী সেন্ট্রাল ক্লাব|Patuli Central Club"]],
["কবি সুভাষ","Kavi Subhash",[]]
];
const $=id=>document.getElementById(id),R=$('route'),Q=$('q'),sel=[];
const M=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
let L='en',total=0;
try{L=localStorage.getItem('pl')||(navigator.language||'').startsWith('bn')?'bn':'en';const s=localStorage.getItem('pl');if(s)L=s}catch(e){}
function render(){
  const t=TX[L];total=0;let ci=0;
  document.documentElement.lang=L;
  document.querySelectorAll('[data-k]').forEach(e=>e.textContent=t[e.dataset.k]);
  document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l===L));
  Q.placeholder=t.ph;
  [t.walk,t.drive,t.bike].forEach((x,i)=>$('mode').options[i].text=x);
  $('chk').innerHTML=t.chk.map(c=>`<label><input type="checkbox"> ${c}</label>`).join('');
  $('tips').innerHTML=t.tips.map(x=>`<li>${x}</li>`).join('');
  $('emg').innerHTML=EM.map(e=>`<span>${e[0]} ${L=='bn'?e[2]:e[1]}</span>`).join('');
  R.innerHTML=S.map(s=>{
    total+=s[2].length;
    const ch=s[2].length?s[2].map(p=>{const[b,e]=p.split('|'),i=ci++;
      return `<span class="chip${sel.some(x=>x.i===i)?' on':''}" role="button" tabindex="0" data-i="${i}" data-q="${e}" data-t="${(b+e).toLowerCase()}"><span>${L=='bn'?b:e}</span><a class="loc" target="_blank" rel="noopener" title="Google Maps" href="${M(e+' Durga Puja pandal Kolkata')}">📍</a></span>`}).join(''):`<span class="none">${t.none}</span>`;
    return `<section class="st${s[2].length?' has':''}" data-t="${(s[0]+s[1]).toLowerCase()}"><a class="stn" target="_blank" rel="noopener" href="${M(s[1]+' Metro Station Kolkata')}">🚇 ${L=='bn'?s[0]:s[1]}</a><div class="box">${ch}</div></section>`}).join('');
  f();upd();
}
function f(){
  const v=Q.value.trim().toLowerCase(),t=TX[L];let n=0;
  document.querySelectorAll('.st').forEach(st=>{
    if(!v){st.classList.remove('hide');st.querySelectorAll('.chip').forEach(c=>c.classList.remove('hide'));return}
    const sm=st.dataset.t.includes(v);let any=false;
    st.querySelectorAll('.chip').forEach(c=>{const m=sm||c.dataset.t.includes(v);c.classList.toggle('hide',!m);if(m){any=true;n++}});
    st.classList.toggle('hide',!(sm||any));
  });
  $('stat').textContent=v?n+' '+t.match:S.length+' '+t.stn+' · '+total+' '+t.pan;
}
function upd(){
  const a=$('ord').checked?[...sel].sort((x,y)=>x.i-y.i):sel;
  $('tray').classList.toggle('hide',!a.length);
  $('cnt').textContent=a.length;
  $('lst').textContent=a.map((s,k)=>(k+1)+'. '+s.e).join('  →  ');
  if(!a.length)return;
  const qs=a.map(s=>s.e+' Durga Puja pandal Kolkata'),w=qs.slice(0,-1);
  let u='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(qs[qs.length-1])+'&travelmode='+$('mode').value;
  if(w.length)u+='&waypoints='+encodeURIComponent(w.join('|'));
  $('go').href=u;
}
function tg(c){
  const i=+c.dataset.i,k=sel.findIndex(s=>s.i===i);
  if(k>-1){sel.splice(k,1);c.classList.remove('on');$('msg').textContent=''}
  else if(sel.length>=10){$('msg').textContent=TX[L].max;return}
  else{sel.push({i,e:c.dataset.q});c.classList.add('on')}
  upd();
}
R.addEventListener('click',ev=>{if(ev.target.closest('.loc'))return;const c=ev.target.closest('.chip');if(c)tg(c)});
R.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){const c=ev.target.closest('.chip');if(c&&ev.target===c){ev.preventDefault();tg(c)}}});
$('mode').onchange=$('ord').onchange=upd;
$('clr').onclick=()=>{sel.length=0;document.querySelectorAll('.chip.on').forEach(c=>c.classList.remove('on'));$('msg').textContent='';upd()};
document.querySelectorAll('.lang button').forEach(b=>b.onclick=()=>{L=b.dataset.l;try{localStorage.setItem('pl',L)}catch(e){}render()});
Q.addEventListener('input',f);
render();
