const valorantAgents = [
  { title: "Jett", tags: ["Duelist", "Entry"], text: "Hızlı giriş, dash ve yüksek mobilite odaklı ajan.", detail: "Jett ile site girişinde dash + smoke kullan. Tailwind ile güvenli çıkış hazırla; Sova, Omen ve Sage ile güçlü kombinasyon kur." },
  { title: "Sova", tags: ["Initiator", "Recon"], text: "Recon Bolt ve Drone ile bilgi toplayan ajan.", detail: "Recon Bolt açılarını haritaya göre çalış. Drone ile site girişini aç, ultini post-plant ve duvar arkası pozisyonlarda değerlendir." },
  { title: "Omen", tags: ["Controller", "Smoke"], text: "Smoke, blind ve teleport ile alan kontrolü sağlar.", detail: "Round başında kritik görüşleri kapat. Paranoia ile Jett girişini destekle, teleportu beklenmeyen off-angle pozisyonlar için kullan." },
  { title: "Sage", tags: ["Sentinel", "Support"], text: "Heal, Barrier Orb ve Resurrection ile takımı destekler.", detail: "Duvarı sadece kapatmak için değil, plant ve retake zamanlaması kazanmak için kullan. Resurrection öncesi alan güvenliği oluştur." },
  { title: "Killjoy", tags: ["Sentinel", "Defense"], text: "Turret, Alarmbot ve Lockdown ile bölgeyi kilitler.", detail: "Utility'yi aynı anda kaybetmemek için parçalı yerleştir. Lockdown ile retake veya site girişini zorla." },
  { title: "Raze", tags: ["Duelist", "Explosive"], text: "Paint Shells ve satchel ile agresif alan kontrolü.", detail: "Satchel hareketlerini antrenman alanında çalış. Boombot ile köşeleri temizle, nade'i rakibin kaçış rotasına bırak." }
];

const valorantMaps = [
  { title: "Ascent", tags: ["A/B Site", "Mid Control"], text: "Mid kontrolünün round sonucunu belirlediği klasik harita.", detail: "Saldırıda Mid kontrolü sonrası Market veya Catwalk split dene. Savunmada door ve lane utility'sini retake için sakla." },
  { title: "Haven", tags: ["A/B/C Site", "3 Site"], text: "Üç site yapısı sayesinde geniş rotasyon seçenekleri sunar.", detail: "Savunmada bilgi paylaşımı çok önemli. Saldırıda Garage kontrolü C split ve hızlı A rotasyonu için değerlidir." },
  { title: "Bind", tags: ["A/B Site", "Teleport"], text: "Teleport mekanikleriyle hızlı rotasyon yapılabilen harita.", detail: "Hookah ve Showers kontrolü saldırının temelidir. Teleport sesini sahte rotasyon ve hızlı site değişimi için kullan." },
  { title: "Lotus", tags: ["A/B/C Site", "Doors"], text: "Üç site ve döner kapılarla tempolu oyun alanı.", detail: "Kapı seslerini bilgi olarak kullan. Root ve Rubble kontrolü A girişini, Link kontrolü ise C rotasyonunu kolaylaştırır." }
];

const valorantWeapons = [
  { title: "Vandal", tags: ["Rifle", "2900 kredi"], text: "Her mesafede tek kafa vuruşu potansiyeli olan tüfek.", detail: "Uzun menzilde tap, yakın mesafede kontrollü burst kullan. Duvar arkası spam açılarını harita bazında öğren." },
  { title: "Phantom", tags: ["Rifle", "2900 kredi"], text: "Yüksek ateş hızı ve susturucu ile yakın-orta menzil uzmanı.", detail: "Smoke içi spray ve yakın mesafe çatışmalarında güçlüdür. Mermi izinin görünmemesi avantajını kullan." },
  { title: "Operator", tags: ["Sniper", "4700 kredi"], text: "Gövde vuruşunda bile öldüren yüksek riskli sniper.", detail: "Kaçış yeteneği olan ajanlarla birlikte kullan. Her round aynı açıyı tekrar tutma; pozisyonunu değiştir." },
  { title: "Sheriff", tags: ["Pistol", "800 kredi"], text: "Eco ve pistol roundlarında kafa vuruşu ödüllendiren tabanca.", detail: "Uzun menzilde tek tek ateş et. İlk mermiyi isabet ettirmek için crosshair yüksekliğini koru." }
];

const valorantTactics = [
  { title: "Site Girişi", tags: ["Attack", "Team Plan"], text: "Entry, flash ve smoke sırasını önceden belirle.", detail: "Önce bilgi, sonra görüş kesme, ardından flash ve entry. Takımın aynı anda siteye girmesi trade oranını yükseltir." },
  { title: "Retake Planı", tags: ["Defense", "Retake"], text: "Utility'yi erken tüketmeden takım halinde alanı geri al.", detail: "Spike zamanını takip et, rakip utility'sini bekle ve iki farklı açıdan eş zamanlı gir. İlk hedef spike taşıyıcısıdır." },
  { title: "Eco Round", tags: ["Economy", "Team"], text: "Düşük kredi turunda yakın mesafe ve birlikte oynama planı.", detail: "Tek başına duel aramak yerine trade zinciri kur. Short menzilli silahları dar koridorlarda ve trap pozisyonlarında kullan." },
  { title: "Ajan Kombinasyonu", tags: ["Composition", "Pro"], text: "Omen + Sova + Jett ile bilgi, görüş ve hızlı giriş zinciri.", detail: "Sova bilgiyi toplar, Omen görüşü keser, Jett ilk teması alır. Sage veya Killjoy post-plant güvenliği sağlar." }
];

const rocketCars = [
  { title: "Octane", tags: ["Import", "Octane Hitbox"], text: "Dengeli hitbox ve profesyonel seviyede en yaygın seçim.", detail: "Hava kontrolü, 50/50 ve recovery için güvenilir. Rekabetçi oyuncuların büyük bölümü Octane hitbox ailesini tercih eder." },
  { title: "Fennec", tags: ["Import", "Octane Hitbox"], text: "Köşeli gövdesiyle top temasını görsel olarak kolaylaştırır.", detail: "Octane ile aynı hitbox'a sahiptir. Dribble ve flick çalışmalarında gövde algısı net olduğu için tercih edilir." },
  { title: "Dominus", tags: ["Import", "Dominus Hitbox"], text: "Uzun gövde ve güçlü flick potansiyeli sunar.", detail: "Ground dribble, flick ve air dribble için güçlüdür. Uzun gövdeyi backboard oyunlarında avantaj olarak kullan." },
  { title: "Dingo", tags: ["Import", "Hybrid Hitbox"], text: "Kompakt ve dengeli bir araç seçeneği.", detail: "Hybrid hitbox ile savunma ve hızlı recovery durumlarında dengeli his verir." },
  { title: "Batmobile", tags: ["Premium", "Plank Hitbox"], text: "Plank hitbox ve güçlü hava oyunu ile ikonik araç.", detail: "Aerial ve air dribble odaklı oyuncular için geniş temas yüzeyi avantajı sağlar." },
  { title: "F1 Car", tags: ["Premium", "Unique"], text: "Hızlı görünüm ve özel gövde yapısına sahip araç.", detail: "Standart araçlara göre farklı his verir; rekabetçi seçimden önce freeplay'de alışma çalışması yap." }
];

const rocketArenas = [
  { title: "DFH Stadium", tags: ["Standard", "Classic"], text: "Dengeli, standart ve öğrenmesi kolay arena.", detail: "Yeni başlayanlar için pozisyon ve rotasyon öğrenmenin en iyi alanlarından biridir." },
  { title: "Champions Field", tags: ["Standard", "Competitive"], text: "Profesyonel turnuva atmosferine sahip standart arena.", detail: "Standart ölçüler sayesinde bütün 1v1, 2v2 ve 3v3 stratejileri için uygundur." },
  { title: "Neo Tokyo", tags: ["Special", "Urban"], text: "Şehir temalı, görsel olarak farklı özel arena.", detail: "Görsel detaylara rağmen standart oyun mantığı korunur; duvar oyunları için iyi pratik alanıdır." },
  { title: "Utopia Coliseum", tags: ["Standard", "Symmetric"], text: "Simetrik ve temiz çizgilere sahip klasik arena.", detail: "Köşe çıkışları ve orta saha kontrolü için net görüş sağlar." }
];

const rocketMechanics = [
  { title: "Fast Aerial", tags: ["Beginner", "Aerial"], text: "İki zıplama ve boost ile hızlı havalanma.", detail: "İlk zıplamadan hemen sonra ikinci zıplamayı kullan, burnu yukarı kaldır ve boost ile topa en yüksek noktadan yaklaş." },
  { title: "Half Flip", tags: ["Beginner", "Recovery"], text: "Geriye doğru dodge iptal ederek hızlı yön değiştirme.", detail: "Backflip sırasında air roll veya yön girdisiyle animasyonu iptal et. Duvar ve savunma dönüşlerinde tekrar et." },
  { title: "Air Dribble", tags: ["Intermediate", "Control"], text: "Topu havada araca yakın tutarak ilerleme.", detail: "Topu duvardan kontrollü çıkar, ilk temasta topun altına gir ve boost'u küçük darbeler halinde kullan." },
  { title: "Flip Reset", tags: ["Advanced", "Air"], text: "Topun altına dört tekerle temas ederek dodge hakkı kazanma.", detail: "Topa alttan yaklaş, dört tekeri topa değdir ve yeni dodge hakkını vuruş veya yön değiştirme için sakla." }
];

const rocketTactics = [
  { title: "Back Post Rotation", tags: ["Defense", "Rotation"], text: "Savunmaya uzak direkten girerek kaleyi doğru açıyla kapat.", detail: "Topa düz koşmak yerine back post'a dön, kaleye yüzünü çevir ve takım arkadaşının clear açısını kapatma." },
  { title: "2v2 Passing Play", tags: ["Attack", "Teamwork"], text: "İkinci oyuncuyu oyuna sokan kontrollü orta ve pas planı.", detail: "İlk oyuncu topu rakip köşesine taşıyıp pas açısı arar; ikinci oyuncu acele etmeden orta alanı takip eder." },
  { title: "Kickoff Planı", tags: ["Kickoff", "2v2"], text: "Kickoff sonrası boost ve ikinci top pozisyonlarını önceden paylaş.", detail: "Kickoff yapan oyuncu topun yönünü takım arkadaşına bildirir. Diğer oyuncu orta çizgiyi ve olası clear'ı takip eder." },
  { title: "Boost Management", tags: ["Pro", "Position"], text: "100 boost aramak yerine doğru pozisyonu koru.", detail: "Küçük pad zincirlerini ezberle. 30 boost ile doğru açıda kalmak, 100 boost için kaleden çıkmaktan daha değerlidir." }
];

const data = { valorant: { agents: valorantAgents, maps: valorantMaps, weapons: valorantWeapons, tactics: valorantTactics }, rocket: { cars: rocketCars, arenas: rocketArenas, mechanics: rocketMechanics, tactics: rocketTactics } };

let currentGame = null;
let currentSection = "home";

const esc = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));

function showGame(game) {
  currentGame = game;
  currentSection = "home";
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("valorant-app").classList.toggle("hidden", game !== "valorant");
  document.getElementById("rocket-app").classList.toggle("hidden", game !== "rocket");
  document.body.className = `${game}-mode`;
  renderSection("home");
}

function goToLanding() {
  document.getElementById("landing").classList.remove("hidden");
  document.getElementById("valorant-app").classList.add("hidden");
  document.getElementById("rocket-app").classList.add("hidden");
  document.body.className = "";
  currentGame = null;
}

window.goToLanding = goToLanding;

function renderHome() {
  const isVal = currentGame === "valorant";
  const content = isVal ? valorantAgents.slice(0, 4) : rocketCars.slice(0, 4);
  return `<section class="detail-page hero-page"><span class="eyebrow">${isVal ? "TACTICAL INTELLIGENCE" : "PLAY WITH MOMENTUM"}</span><h1>${isVal ? "VALORANT Rehber Merkezi" : "Rocket League Arena"}</h1><p>${isVal ? "Ajanlardan harita planlarına kadar her şeyi keşfet." : "Mekaniklerini geliştir, rotasyonunu düzelt ve sahaya hükmet."}</p><div class="quick-links"><button class="action-btn" data-section="${isVal ? "agents" : "cars"}">Keşfetmeye Başla</button><button class="action-btn ghost" data-section="${isVal ? "tactics" : "training"}">${isVal ? "Taktikleri Gör" : "Antrenmana Git"}</button></div></section><section class="content-section"><div class="section-title"><h2>Öne Çıkanlar</h2><span>${content.length} rehber</span></div><div class="content-grid">${content.map(cardTemplate).join("")}</div></section>`;
}

function cardTemplate(item, index = 0) {
  return `<article class="guide-card" data-detail="${esc(item.title)}" style="--delay:${index * 70}ms"><div class="card-glow"></div><div class="card-tags">${item.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><button class="read-btn">Detayları Gör →</button></article>`;
}

function renderListing(section) {
  const items = data[currentGame][section] || [];
  const titleMap = { agents: "Ajanlar", maps: "Haritalar", weapons: "Silahlar", tactics: "Taktikler", cars: "Arabalar", arenas: "Arenalar", mechanics: "Mekanikler" };
  return `<section class="detail-page"><span class="eyebrow">${currentGame === "valorant" ? "VALORANT DATABASE" : "ROCKET LEAGUE DATABASE"}</span><h1>${titleMap[section] || section}</h1><p class="page-intro">Bir karta tıklayarak ayrı detay sayfasını aç.</p><div class="content-grid">${items.map(cardTemplate).join("")}</div></section>`;
}

function renderSpecial(section) {
  const isVal = currentGame === "valorant";
  const titles = { modes: "Oyun Modları", crosshair: "Crosshair Oluşturucu", updates: "Güncellemeler", aerial: "Aerial Sistemi", training: "Antrenman Merkezi" };
  const blocks = {
    modes: isVal ? ["Dereceli", "Derecesiz", "Swiftplay", "Spike Rush", "Özel Oyun"] : ["1v1 Duel", "2v2 Doubles", "3v3 Standard", "4v4 Chaos", "Extra Modes"],
    crosshair: ["Hazır Profesyonel Crosshair", "Crosshair Kopyala", "Renk ve merkez nokta ayarları", "Hareket hatası seçenekleri"],
    updates: ["Yeni rehberler", "Meta notları", "Harita değişiklikleri", "Topluluk duyuruları"],
    aerial: ["Fast Aerial", "Air Roll Left / Right", "Air Dribble", "Double Tap", "Redirect"],
    training: ["Shooting", "Dribbling", "Aerial", "Defense", "Wall Play", "Recovery", "Flip Reset"]
  };
  return `<section class="detail-page"><span class="eyebrow">${isVal ? "VALORANT TOOLS" : "ROCKET TRAINING"}</span><h1>${titles[section] || "Rehber"}</h1><p class="page-intro">Bu bölümdeki her başlık ayrı rehber olarak açılır.</p><div class="content-grid">${(blocks[section] || []).map((name, index) => cardTemplate({ title: name, tags: [isVal ? "VALORANT" : "ROCKET LEAGUE", "Rehber"], text: "Detaylı açıklama, kullanım adımları ve profesyonel öneriler.", detail: `${name} için adım adım çalışma planı, pratik önerileri ve maç içi kullanım bilgileri burada yer alır.` }, index)).join("")}</div></section>`;
}

function renderSection(section) {
  currentSection = section;
  const main = document.getElementById(`${currentGame}-main`);
  main.innerHTML = section === "home" ? renderHome() : (data[currentGame][section] ? renderListing(section) : renderSpecial(section));
  main.querySelectorAll("[data-section]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); renderSection(link.dataset.section); }));
  main.querySelectorAll(".guide-card").forEach(card => card.addEventListener("click", () => openDetail(card.dataset.detail)));
  syncActiveLinks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(title) {
  const item = Object.values(data[currentGame]).flat().find(entry => entry.title === title) || { title, tags: [currentGame === "valorant" ? "VALORANT" : "ROCKET LEAGUE"], text: "Profesyonel rehber", detail: "Bu içerik için detaylı açıklama, kontrol adımları, kullanım önerileri ve antrenman planı hazırlanmıştır." };
  const main = document.getElementById(`${currentGame}-main`);
  main.innerHTML = `<section class="detail-page single-detail"><button class="back-content" id="detail-back">← Listeye dön</button><span class="eyebrow">DETAYLI REHBER</span><h1>${esc(item.title)}</h1><div class="detail-tags">${item.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div><p class="lead">${esc(item.text)}</p><div class="detail-columns"><div><h2>Nasıl kullanılır?</h2><p>${esc(item.detail)}</p><h2>Profesyonel öneri</h2><p>Haritaya ve oyun moduna göre pozisyonunu değiştir. Güvenli tekrarlar yap, takım iletişimini koru ve bu rehberi antrenman alanında uygula.</p></div><aside class="tip-box"><strong>Hızlı not</strong><p>Bu rehberi favorilerine ekleyip tekrar ziyaret edebilirsin.</p></aside></div></section>`;
  document.getElementById("detail-back").addEventListener("click", () => renderSection(currentSection));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncActiveLinks() {
  document.querySelectorAll(`#${currentGame}-app [data-section]`).forEach(link => link.classList.toggle("active", link.dataset.section === currentSection));
}

document.querySelectorAll("[data-game]").forEach(card => card.addEventListener("click", () => showGame(card.dataset.game)));
document.querySelectorAll("[data-back]").forEach(button => button.addEventListener("click", goToLanding));
document.querySelectorAll(".game-app [data-section]").forEach(link => link.addEventListener("click", event => { event.preventDefault(); if (link.dataset.section) renderSection(link.dataset.section); }));
