const valorantAgents = [
  { title: "Jett", tags: ["Duelist", "Entry"], text: "Hızlı giriş, dash ve yüksek mobilite odaklı ajan.", detail: "Jett ile site girişinde dash + smoke kullan. Sova ve Omen ile birlikte kontrolü aç ve güvenli çıkışı hazırla." },
  { title: "Sova", tags: ["Initiator", "Recon"], text: "Recon Bolt ve drone ile bilgi toplayan ajan.", detail: "Recon Bolt açılarını haritaya göre çalıştır. Harita kontrolünü kurduktan sonra ultini post-plant ve retake için sakla." },
  { title: "Omen", tags: ["Controller", "Smoke"], text: "Görüş kesme ve sahte rotasyon için güçlü kontrol ajanı.", detail: "Round başında smoke ile kritik hatları kapat. Teleportu beklenmedik rota değişimi için kullan." },
  { title: "Sage", tags: ["Sentinel", "Support"], text: "Barrier, heal ve revive ile takımın güvenliğini sağlar.", detail: "Barrier ve heal'i sadece destek için değil, valorant'ta plant ve retake düzeni için stratejik kullan." },
  { title: "Killjoy", tags: ["Sentinel", "Defense"], text: "Turret ve Lockdown ile alanı kontrol eder.", detail: "Lockdown ile retake ve spike zamanı öncesi rakip hareketini yavaşlat. Turret'i düşüş noktasına değil, kontrol hattına yerleştir." },
  { title: "Raze", tags: ["Duelist", "Explosive"], text: "Patlayıcı ve agresif giriş için güçlü ajan.", detail: "Paint Shells ve satchel kullanımı için site açılışını planla. Arka duvardaki kaçış açılarını kontrol et." }
];

const valorantMaps = [
  { title: "Ascent", tags: ["A/B Site", "Mid Control"], text: "Mid kontrolünün round sonucunu doğrudan etkilediği harita.", detail: "Saldırıda mid kontrolüyle A veya B site rotasyonunu aç. Savunmada uzun koridor ve lane utility'sini retake için kullan." },
  { title: "Haven", tags: ["A/B/C Site", "3 Site"], text: "Üç site yapısıyla geniş rotasyon seçenekleri sunar.", detail: "Açığı erken kapatmak için C ve A yapısını koordine et. Saldırıda hızlı C veya A takımı kurup mid'i kontrol et." },
  { title: "Bind", tags: ["A/B Site", "Teleport"], text: "Teleport sistemiyle hızlı rotasyon ve baskı kuran harita.", detail: "Teleporti hızlı site dönüşü için kullan. Hookah ve Showers atak noktasını kontrol ederek baskı uygula." },
  { title: "Lotus", tags: ["A/B/C Site", "Doors"], text: "Kapılar ve çoklu site yapısıyla tempolu harita.", detail: "Door ve cam açılışlarını dikkatle izle. Root ve Rubble kontrolüyle C veya A açılışını kolaylaştır." }
];

const valorantWeapons = [
  { title: "Vandal", tags: ["Rifle", "Meta"], text: "Yüksek hasar ve çok yönlülük sunan ana tüfek.", detail: "Uzun menzil için tap, yakın menzil için kontrollü spray. Harita ve duvar kontrolü için lineups hazırla." },
  { title: "Phantom", tags: ["Rifle", "Control"], text: "Daha düzenli spray yapısı ile ortalarda güçlü.", detail: "Kısa ve orta menzilde kullan. Ajanların utility sırası ile ilerle. En verimli şekilde orta koridor savunmasında kullanılır." },
  { title: "Operator", tags: ["Sniper", "One Shot"], text: "Tek atışta öldüren ama riskli sniper.", detail: "Harita genişliği ve ayarlama gerektiren pozisyonlara uygun. Menzil ve kaçış rotası çok önemlidir." },
  { title: "Sheriff", tags: ["Pistol", "Eco"], text: "Eco'da güçlü pistol seçeneği.", detail: "Kasıtlı kafa vuruşu ve doğru tracking ile pistol roundlarında avantaj elde et." }
];

const valorantTactics = [
  { title: "Site Girişi", tags: ["Attack", "Entry"], text: "Entry, flash ve smoke sırasını doğru planla.", detail: "Önce bilgi topla, sonra flashla ve site girişini aç. Takımın aynı anda girmesi trade ve imha riskini azaltır." },
  { title: "Retake Planı", tags: ["Defense", "Retake"], text: "Utility'yi erken tüketmeden takım halinde geri al.", detail: "Retake'de iki farklı açı oluştur. Spike taşıyıcısını hedef al ve kritik rotasyonda oyun kur." },
  { title: "Eco Round", tags: ["Economy", "Round"], text: "Düşük kredi turunda agresif ama dengeli davran.", detail: "Tek başına duel aramak yerine trade zinciri kur. Kısa menzilli silah ve komutla birlikte ilerle." },
  { title: "Ajan Kombinasyonu", tags: ["Composition", "Team"], text: "Duygu ve kontrol kombinasyonu kur.", detail: "Jett + Omen + Sova ağının kontrol güçlenir. Sage veya Killjoy eklenince site savunma daha güvenli olur." }
];

const rocketCars = [
  { title: "Octane", tags: ["Import", "Hitbox"], text: "Profesyonel seviyede en çok tercih edilen araç.", detail: "Dengeli hitbox ve recovery yeteneği sayesinde 1v1 ve takım oyununda güvenli bir seçimdir." },
  { title: "Fennec", tags: ["Import", "Hitbox"], text: "Kısa ve kompak gövdesiyle hızlı kontrol sağlar.", detail: "Flick ve air dribble için kısa hareket planı kur. Saha içindeki kontrolü kolaylaştırır." },
  { title: "Dominus", tags: ["Import", "Ground"], text: "Uzatılmış gövdesiyle güçlü flick ve kontrol sağlar.", detail: "Ground dribble ve flick için uygundur. Backboard, wall play ve sahip olma sırasında güçlü bir araçtır." },
  { title: "Batmobile", tags: ["Exotic", "Aerial"], text: "Aerial ve uçuş odaklı bir araç.", detail: "Topa erken temas, hızlı yön değişimi ve aerial play için tercih edilir. Aerial drilllerde çok etkili olur." },
  { title: "Dingo", tags: ["Import", "Hybrid"], text: "Denge odaklı kontrollü araç.", detail: "Orta seviye mekaniklerde güvenli his veren bir seçenektir. Recovery ve rotasyon için uygundur." }
];

const rocketArenas = [
  { title: "DFH Stadium", tags: ["Classic", "Balanced"], text: "Standart, dengeli ve öğretici arena.", detail: "Yeni başlayanlar için rotasyon ve pozisyon bilgisi öğrenmek için ideal bir arena." },
  { title: "Champions Field", tags: ["Professional", "Standard"], text: "Turnuva havası ve profesyonel kullanım için uygun arena.", detail: "Performans ve hareket uyumunu geliştirmek için çok uygun. 1v1 ve 2v2 için kontrol odaklı bir merkezdir." },
  { title: "Neo Tokyo", tags: ["Special", "Urban"], text: "Küçük detaylarla dolu, estetik ve özel görsel arena.", detail: "Görsel olarak farklıdır ama temel oyun mantığı aynıdır. Duvar ve boost için çok iyi uyum sağlar." },
  { title: "Utopia Coliseum", tags: ["Balanced", "Symmetric"], text: "Dengeli ve simetrik yapısıyla öğrenmeyi kolaylaştırır.", detail: "İkinci oyuncu ve takım kontrolü için uygun, rotasyon öğrenme için sağlam bir arena." }
];

const rocketMechanics = [
  { title: "Fast Aerial", tags: ["Beginner", "Aerial"], text: "En hızlı şekilde topa havada ulaşma mekanikleri.", detail: "İlk zıplamayı hızla kullan, boost ile yön değiştir ve teması erken tamamla." },
  { title: "Half Flip", tags: ["Beginner", "Recovery"], text: "Dodge sonrası hızlı dönüş ve yön kontrolü.", detail: "Topa temas anında aracın önünü tekrar yönlendir. Yalnızca hareket değil, kontrol temposu gerektirir." },
  { title: "Air Dribble", tags: ["Intermediate", "Control"], text: "Topu havada kontrollü şekilde taşıma.", detail: "Topu gerekli açıdan kontrol et. Aracın gövdesini hafifçe çevirerek doğruluğu artır." },
  { title: "Flip Reset", tags: ["Advanced", "Air"], text: "Hava kontrolünü sıfırla ve tekrar yön al.", detail: "Topa alt açıdan yaklaş, vuruş sonra yeniden ayrı bir hava hareketi planla." }
];

const rocketTactics = [
  { title: "Back Post Rotation", tags: ["Defense", "Rotation"], text: "Savunma için back post pozisyonu.", detail: "Dizilişin sadece savunma değil, topa erken tepki verme amacı taşımalıdır." },
  { title: "2v2 Passing Play", tags: ["Attack", "Passing"], text: "Takımın pas oyunu ve orta alan kontrolü.", detail: "İki oyuncu pass akışı kurarken üçüncü oyuncu boşa girmemeli. Orta alan temiz tutulmalı." },
  { title: "Kickoff Planı", tags: ["Kickoff", "Setup"], text: "Kickoff sonrası pozisyon ve boost planı.", detail: "Kickoff'i sadece gol için değil, takımın ikinci aşama pozisyonunu korumak için kullan." },
  { title: "Boost Management", tags: ["Control", "Pro"], text: "Boost kullanımının doğru zamanlaması.", detail: "Dürüst, kontrollü boost kullanımı her seviyede daha iyi yatırımlı pozisyon üretir." }
];

const sectionMap = {
  valorant: {
    agents: { title: "Ajanlar", items: valorantAgents },
    maps: { title: "Haritalar", items: valorantMaps },
    weapons: { title: "Silahlar", items: valorantWeapons },
    tactics: { title: "Taktikler", items: valorantTactics }
  },
  rocket: {
    cars: { title: "Arabalar", items: rocketCars },
    arenas: { title: "Arenalar", items: rocketArenas },
    mechanics: { title: "Mekanikler", items: rocketMechanics },
    tactics: { title: "Taktikler", items: rocketTactics }
  }
};

let currentGame = null;
let currentSection = "home";

function setApp(game) {
  currentGame = game;
  currentSection = "home";
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("valorant-app").classList.toggle("hidden", game !== "valorant");
  document.getElementById("rocket-app").classList.toggle("hidden", game !== "rocket");
  renderSection("home");
}

function goToLanding() {
  document.getElementById("landing").classList.remove("hidden");
  document.getElementById("valorant-app").classList.add("hidden");
  document.getElementById("rocket-app").classList.add("hidden");
  currentGame = null;
}

function renderSection(section) {
  if (!currentGame) return;
  currentSection = section;
  const main = document.getElementById(`${currentGame}-main`);

  if (section === "home") {
    const featured = currentGame === "valorant" ? valorantAgents.slice(0, 4) : rocketCars.slice(0, 4);
    const eyebrow = currentGame === "valorant" ? "TACTICAL INTELLIGENCE" : "SPORTIVE MOMENTUM";
    const title = currentGame === "valorant" ? "VALORANT Rehber Merkezi" : "Rocket League Arena";
    const desc = currentGame === "valorant" ? "Ajanlar, haritalar, silahlar ve taktikler tek panelde." : "Aerial, mekanik ve takım rotasyonlarını optimize et.";

    main.innerHTML = `
      <section class="detail-page hero-page">
        <span class="eyebrow">${eyebrow}</span>
        <h1>${title}</h1>
        <p>${desc}</p>
        <div class="quick-links">
          <button class="action-btn" data-section="${currentGame === "valorant" ? "agents" : "cars"}">Keşfet</button>
          <button class="action-btn ghost" data-section="tactics">Taktikler</button>
        </div>
      </section>
      <section class="content-section">
        <div class="section-title">
          <h2>Öne Çıkanlar</h2>
          <span>${featured.length} içerik</span>
        </div>
        <div class="content-grid">
          ${featured.map((item, index) => cardTemplate(item, index)).join("")}
        </div>
      </section>
    `;
  } else if (sectionMap[currentGame][section]) {
    const config = sectionMap[currentGame][section];
    const eyebrow = currentGame === "valorant" ? "VALORANT DATABASE" : "ROCKET DATABASE";
    
    main.innerHTML = `
      <section class="detail-page">
        <span class="eyebrow">${eyebrow}</span>
        <h1>${config.title}</h1>
        <p class="page-intro">Kartlara tıklayarak detay sayfasına geç.</p>
        <div class="content-grid">
          ${config.items.map((item, index) => cardTemplate(item, index)).join("")}
        </div>
      </section>
    `;
  }

  attachCardEvents();
  attachSectionClicks();
  syncActiveLinks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cardTemplate(item, index = 0) {
  return `
    <article class="guide-card" data-detail="${encodeURIComponent(item.title)}" style="animation-delay:${index * 70}ms">
      <div class="card-glow"></div>
      <div class="card-tags">
        ${(item.tags || []).map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <button class="read-btn">Detayları Gör →</button>
    </article>
  `;
}

function attachCardEvents() {
  document.querySelectorAll(".guide-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = decodeURIComponent(card.dataset.detail);
      openDetail(title);
    });
  });
}

function attachSectionClicks() {
  document.querySelectorAll("[data-section]").forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      renderSection(link.dataset.section);
    });
  });
}

function openDetail(title) {
  const allItems = Object.values(sectionMap[currentGame]).flatMap(section => section.items || []);
  const item = allItems.find(entry => entry.title === title) || {
    title,
    tags: [currentGame === "valorant" ? "VALORANT" : "ROCKET LEAGUE"],
    text: "Yapılandırılmış detay rehberi.",
    detail: "Bu içerik için detaylı kullanım adımları, profesyonel öneriler ve pratik notlar hazırlanmıştır."
  };

  const main = document.getElementById(`${currentGame}-main`);
  main.innerHTML = `
    <section class="detail-page single-detail">
      <button class="back-content" id="detail-back">← Listeye dön</button>
      <span class="eyebrow">DETAYLI REHBER</span>
      <h1>${item.title}</h1>
      <div class="detail-tags">
        ${(item.tags || []).map(tag => `<span>${tag}</span>`).join("")}
      </div>
      <p class="lead">${item.text}</p>
      <div class="detail-columns">
        <div>
          <h2>Nasıl kullanılır?</h2>
          <p>${item.detail}</p>
          <h2>Profesyonel öneri</h2>
          <p>Bu rehberi maç öncesi, antrenman sırasında ve oyun içi gözlem yaparken kullan. Takım düzeni ve pozisyon anlaşması için her adımı aynı sırayla uygula.</p>
        </div>
        <aside class="tip-box">
          <strong>Hızlı Not</strong>
          <p>İçeriği öğrenirken aynı anda egzersiz yap; teorik bilgi tek başına yeterli olmaz.</p>
        </aside>
      </div>
    </section>
  `;

  document.getElementById("detail-back").addEventListener("click", () => renderSection(currentSection));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncActiveLinks() {
  document.querySelectorAll(`#${currentGame}-app [data-section]`).forEach(link => {
    const active = link.dataset.section === currentSection;
    link.classList.toggle("active", active);
  });
}

document.querySelectorAll("[data-game]").forEach(card => {
  card.addEventListener("click", () => setApp(card.dataset.game));
});

document.querySelectorAll("[data-back]").forEach(button => {
  button.addEventListener("click", () => goToLanding());
});

window.goToLanding = goToLanding;
