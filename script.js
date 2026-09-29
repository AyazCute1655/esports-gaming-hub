const valorantAgents = [
  { title: "Jett", tags: ["Duelist", "Entry"], text: "Hızlı giriş, dash ve yüksek mobilite odaklı ajan.", detail: "Jett ile site girişinde dash + smoke kullan. Sova ve Omen ile birlikte kontrolü aç ve güvenli çıkışı hazırla." },
  { title: "Sova", tags: ["Initiator", "Recon"], text: "Recon Bolt ve drone ile bilgi toplayan ajan.", detail: "Recon Bolt açılarını haritaya göre çalıştır. Harita kontrolünü kurduktan sonra ultini post-plant ve retake için sakla." },
  { title: "Omen", tags: ["Controller", "Smoke"], text: "Görüş kesme ve sahte rotasyon için güçlü kontrol ajanı.", detail: "Round başında smoke ile kritik hatları kapat. Teleportu beklenmedik rota değişimi için kullan." },
  { title: "Sage", tags: ["Sentinel", "Support"], text: "Barrier, heal ve revive ile takımın güvenliğini sağlar.", detail: "Barrier ve heal'i sadece destek için değil, valorant'ta plant ve retake düzeni için stratejik kullan." },
  { title: "Killjoy", tags: ["Sentinel", "Defense"], text: "Turret ve Lockdown ile alanı kontrol eder.", detail: "Lockdown ile retake ve spike zamanı öncesi rakip hareketini yavaşlat. Turret'i düşüş noktasına değil, kontrol hattına yerleştir." },
  { title: "Raze", tags: ["Duelist", "Explosive"], text: "Patlayıcı ve agresif giriş için güçlü ajan.", detail: "Paint Shells ve satchel kullanımı için site açılışını planla. Arka duvardaki kaçış açılarını kontrol et." },
  { title: "Astra", tags: ["Controller", "Smoke"], text: "Kozmik kontrolle map kontrolünü sağlayan ajan.", detail: "Stelle yerleştir ve belirlediğin alanlara smoke, stun ve demir koy. Takımla koordine çalışmak zorunludur." },
  { title: "Chamber", tags: ["Sentinel", "Sniper"], text: "Sniper silahı ile savunma kuran ajan.", detail: "Tour De Force ultini kritik açılarda kullan. Ajan silahını erken almak için ekonomi planla." },
  { title: "Yoru", tags: ["Duelist", "Flanker"], text: "Kapı açarak alternatif rotaları olan ajan.", detail: "Fakeout ile sahte rotasyon yap. Rift Portal'ı takım arkadaşlarını gezdirip fırsat yarat." },
  { title: "Reyna", tags: ["Duelist", "Self-Sufficient"], text: "Kill almaya bağlı güç kazanan ajan.", detail: "Harvest ve Dismiss ability'sini kill sonrası kullan. Solo play yerine takımla koordineli oyun oyna." },
  { title: "Viper", tags: ["Controller", "Smoker"], text: "Zehir duvarıyla alan kontrol eden ajan.", detail: "Pit Viper ile duvarlar kur. Poison Cloud'u revolver kullan ve enemyi kısıtla." },
  { title: "Gekko", tags: ["Initiator", "Utility"], text: "Canlı istihbarat sağlayan ajan.", detail: "Wingman'ı harita kontrolü için gönder. Modular Payload'u site girişinde disrupt sağlamak için kullan." },
  { title: "Harbor", tags: ["Controller", "Smoke"], text: "Su dalgasıyla alan kontrol eden ajan.", detail: "Cascade ile duvarlar oluştur. Tidal Wave'i takım avansı için kullan." },
  { title: "Fade", tags: ["Initiator", "Info"], text: "Gözle bilgi toplayan ajan.", detail: "Seize ile düşman hareketini kısıtla. Haunt ile rotası tahmin etme imkanı yarat." },
  { title: "Phoenix", tags: ["Duelist", "Entry"], text: "Ateşle agresif giriş yapan ajan.", detail: "Blaze ile duvar kur ve ilerle. Curveball'ı düşmanları körletmek için flash tut." }
];

const valorantWeapons = [
  { title: "Vandal", tags: ["Rifle", "Meta"], text: "Yüksek hasar ve çok yönlülük sunan ana tüfek.", detail: "Uzun menzil için tap, yakın menzil için kontrollü spray. Harita ve duvar kontrolü için lineups hazırla." },
  { title: "Phantom", tags: ["Rifle", "Control"], text: "Daha düzenli spray yapısı ile ortalarda güçlü.", detail: "Kısa ve orta menzilde kullan. Ajanların utility sırası ile ilerle. Sessiz silah avantajını kullan." },
  { title: "Operator", tags: ["Sniper", "One Shot"], text: "Tek atışta öldüren ama riskli sniper.", detail: "Harita genişliği ve ayarlama gerektiren pozisyonlara uygun. Menzil ve kaçış rotası çok önemlidir." },
  { title: "Sheriff", tags: ["Pistol", "Eco"], text: "Eco roundlarda güçlü pistol seçeneği.", detail: "Kasıtlı kafa vuruşu ve doğru tracking ile pistol roundlarında avantaj elde et." },
  { title: "Ghost", tags: ["Pistol", "Secondary"], text: "Eco roundlarda hızlı silah seçeneği.", detail: "Yakın menzilde etkili ve sessiz. Buy roundlarında secondary olarak düşün." },
  { title: "Frenzy", tags: ["Machine Pistol", "Aggressive"], text: "Hızlı ateş oranı sunan oto pistol.", detail: "Eco roundlarda agresif oyun için kullan. Kısa menzilde spray ve pray taktiği çalışır." },
  { title: "Classic", tags: ["Pistol", "Default"], text: "Başlangıç silahı olarak verilen temel pistol.", detail: "Spike plant sırasında hedefe kapat. Malı ekonomik olarak ayarla." },
  { title: "Bulldog", tags: ["SMG", "Budget"], text: "Bütçe friendly oto silah.", detail: "Eco ve half buy roundlarında kullan. Yakın menzilde etkili ama spray kontrol zor." },
  { title: "Stinger", tags: ["SMG", "Budget"], text: "Hızlı ateş sunan ekonomik SMG.", detail: "Koridor ve kapalı alanlarda güçlü. Uzun menzilden keep distance koru." },
  { title: "Guardian", tags: ["Rifle", "Eco"], text: "Özel tomar hitbox ve single fire riflesi.", detail: "Orta buy roundlarında seç. Tap shoot disiplini geliştirir." },
  { title: "Spectre", tags: ["SMG", "Buy"], text: "Kısa-orta menzilde güçlü SMG.", detail: "Site girişinde ön hat kontrol için ideal. Spray pattern'i öğren." },
  { title: "Bucky", tags: ["Shotgun", "Budget"], text: "Erken buy shotgun seçeneği.", detail: "Koridor ve close quarter battle'larda kullan. Long range'de weak." },
  { title: "Judge", tags: ["Shotgun", "Buy"], text: "Orta buy shotgun seçeneği.", detail: "Site girişi sırasında setup yapmadan direkt aggro oyna. Spread'i kontrol et." },
  { title: "Ares", tags: ["Machine Gun", "Utility"], text: "Uzun menzili suppressive fire sunan oto silah.", detail: "Post-plant savunmada ve site holde etkili. Recoil pattern'i öğren." },
  { title: "Odin", tags: ["Machine Gun", "Utility"], text: "En yüksek magazine kapasiteli oto silah.", detail: "Full buy attack roundlarında multi-site kontrol için kullan. Zoom seçeneğini kullan." }
];

const valorantMaps = [
  { title: "Ascent", tags: ["A/B Site", "Mid Control"], text: "Mid kontrolünün round sonucunu doğrudan etkilediği harita.", detail: "Saldırıda mid kontrolüyle A veya B site rotasyonunu aç. Savunmada uzun koridor ve lane utility'sini retake için kullan." },
  { title: "Haven", tags: ["A/B/C Site", "3 Site"], text: "Üç site yapısıyla geniş rotasyon seçenekleri sunar.", detail: "Açığı erken kapatmak için C ve A yapısını koordine et. Saldırıda hızlı C veya A takımı kurup mid'i kontrol et." },
  { title: "Bind", tags: ["A/B Site", "Teleport"], text: "Teleport sistemiyle hızlı rotasyon ve baskı kuran harita.", detail: "Teleporti hızlı site dönüşü için kullan. Hookah ve Showers atak noktasını kontrol ederek baskı uygula." },
  { title: "Lotus", tags: ["A/B/C Site", "Doors"], text: "Kapılar ve çoklu site yapısıyla tempolu harita.", detail: "Door ve cam açılışlarını dikkatle izle. Root ve Rubble kontrolüyle C veya A açılışını kolaylaştır." },
  { title: "Icebox", tags: ["A/B Site", "Unique"], text: "Yükseklik seviyeli ve kompleks alanlı harita.", detail: "Bilevel gameplay'i anla. Micro rotasyonlarla rakibi oyun altına al." },
  { title: "Split", tags: ["A/B Site", "Vertical"], text: "Dikey hareket gerektiren dar harita.", detail: "Yetkisiz enerji ile yüksekliğe çık. Ropelines'ı defense olarak kullan." },
  { title: "Pearl", tags: ["A/B Site", "Water"], text: "Su teması ve açık ortamlar sunan harita.", detail: "Mid kontrolü çok değerli. Boostları taktiksel kullan." }
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
  { title: "Dominus", tags: ["Import", "Ground"], text: "Uzatılmış gövdesiyle güçlü flick ve kontrol sağlar.", detail: "Ground dribble ve flick için uygundur. Backboard ve wall play'de çok etkilidir." },
  { title: "Batmobile", tags: ["Exotic", "Aerial"], text: "Aerial ve uçuş odaklı bir araç.", detail: "Topa erken temas, hızlı yön değişimi ve aerial play için tercih edilir. Aerial drillerde çok etkili olur." },
  { title: "Dingo", tags: ["Import", "Hybrid"], text: "Denge odaklı kontrollü araç.", detail: "Orta seviye mekaniklerde güvenli his veren bir seçenektir. Recovery ve rotasyon için uygundur." },
  { title: "Breakout", tags: ["Import", "Speed"], text: "Sürüt ve hız odaklı araç.", detail: "Hızlı rotasyon için tercih ediliyor. Boost yönetimi kritik önemde." },
  { title: "Proteus", tags: ["Import", "Hybrid"], text: "Dinamik ve denge sağlayan araç.", detail: "Orta-üzeri seviyelerde iyi performans. Air kontrolü stabil." },
  { title: "Harbinger", tags: ["Import", "Control"], text: "İyi kontrol özellikleriyle bilinir.", detail: "Mekanik pratiği için iyi seçim. Positioning çalışması yapabilirsin." },
  { title: "Centio V17", tags: ["Import", "Unique"], text: "Benzersiz gövde tasarımı sunan araç.", detail: "Flick açısı farklı. Recovery özel çalışma gerektirir." },
  { title: "Mantis", tags: ["Import", "Hybrid"], text: "Hokey benzeri hitbox yapısı.", detail: "Duvar oyunları için özel avantaj. Takım koordinasyonunda güçlü." },
  { title: "Animus GP", tags: ["Import", "Speed"], text: "Hızlı akselerasyona sahip araç.", detail: "İlk temas için iyi seçim. Orta alan kontrolü yapmakta etkili." },
  { title: "Twinzer", tags: ["Import", "Hybrid"], text: "Kompakt ve hızlı araç.", detail: "Mekanik üstünlüğü olan oyuncular için. Air roll pratiğine yardımcı." },
  { title: "Jäger 619", tags: ["Import", "Speed"], text: "Diş çizgili gövde tasarımı sunan araç.", detail: "Estetik açıdan dikkat çekici. Performansta dengeli." },
  { title: "Samurai", tags: ["Import", "Control"], text: "Samurai temalı tasarımı sunan araç.", detail: "Asya inspirasyonlu görünüş. Kontrol özelliği iyi." },
  { title: "Type-S", tags: ["Import", "Hybrid"], text: "Balance ve kontrol sağlayan araç.", detail: "Başlangıç oyuncular için ideyal. Hitbox öğrenmeyi kolaylaştırır." }
];

const rocketArenas = [
  { title: "DFH Stadium", tags: ["Classic", "Balanced"], text: "Standart, dengeli ve öğretici arena.", detail: "Yeni başlayanlar için rotasyon ve pozisyon bilgisi öğrenmek için ideal bir arenedir." },
  { title: "Champions Field", tags: ["Professional", "Standard"], text: "Turnuva havası ve profesyonel kullanım için uygun arena.", detail: "Performans ve hareket uyumunu geliştirmek için çok uygun. Kompetitif oyunlar burada oynanır." },
  { title: "Neo Tokyo", tags: ["Special", "Urban"], text: "Küçük detaylarla dolu, estetik ve özel görsel arena.", detail: "Görsel olarak farklıdır ama temel oyun mantığı aynıdır. Duvar ve boost kullanımında zorlanabilirsin." },
  { title: "Utopia Coliseum", tags: ["Balanced", "Symmetric"], text: "Dengeli ve simetrik yapısıyla öğrenmeyi kolaylaştırır.", detail: "İkinci oyuncu ve takım kontrolü için uygun, rotasyon öğrenme için sağlam bir arenedir." },
  { title: "American Airlines Center", tags: ["Special", "NBA"], text: "NBA basketbol sahası temalı arena.", detail: "Simetrik yapısı öğrenmeye yardımcı. Mid field kontrol önemlidir." },
  { title: "Mannfield", tags: ["Classic", "Standard"], text: "Klasik çadır temalı arena.", detail: "Oyunun başlangıcından beri var olan nostalji arena. Dengeli oyun sunumu." },
  { title: "Urban Central", tags: ["Special", "City"], text: "Şehir temasıyla tasarlanmış arena.", detail: "Görsel açıdan ilginç detaylar. Oyunabilirlik standart." },
  { title: "Sovereign", tags: ["Special", "Royal"], text: "Kraliyet temalı tasarıma sahip arena.", detail: "Premium görünüm. Oyun mekanikleri dengeli." }
];

const rocketMechanics = [
  { title: "Fast Aerial", tags: ["Beginner", "Aerial"], text: "En hızlı şekilde topa havada ulaşma mekanikleri.", detail: "İlk zıplamayı hızla kullan, boost ile yön değiştir ve teması erken tamamla." },
  { title: "Half Flip", tags: ["Beginner", "Recovery"], text: "Dodge sonrası hızlı dönüş ve yön kontrolü.", detail: "Topa temas anında aracın önünü tekrar yönlendir. Recovery için kritik beceridir." },
  { title: "Air Dribble", tags: ["Intermediate", "Control"], text: "Topu havada kontrollü şekilde taşıma.", detail: "Topu gerekli açıdan kontrol et. Aracın gövdesini hafifçe çevirerek doğruluğu artır." },
  { title: "Flip Reset", tags: ["Advanced", "Air"], text: "Hava kontrolünü sıfırla ve tekrar yön al.", detail: "Topa alt açıdan yaklaş, vuruş sonra yeniden ayrı bir hava hareketi planla." },
  { title: "Wall Play", tags: ["Intermediate", "Wall"], text: "Duvar oyunları ve duvardan atış teknikleri.", detail: "Duvar üzerinde pozisyon koru. Momentum koruyarak hava yolu bulun." },
  { title: "Ground Dribble", tags: ["Beginner", "Ground"], text: "Topu yerde kontrol ederek hareket ettirme.", detail: "Kleine tap'larla topu takip et. Duvar ve air dribble'a geçiş yapabilir." },
  { title: "Double Tap", tags: ["Advanced", "Air"], text: "Hava içinde iki kez topu vurarak gol atma.", detail: "İlk vuruş yükseklik, ikinci vuruş gol. Timing ve açı çok önemlidir." },
  { title: "Ceiling Shot", tags: ["Advanced", "Air"], text: "Tavanı kullanarak yapılan yüksek atış.", detail: "Tavan temas sonrası immediate air dribble başlat. Rakip beklemiyor." },
  { title: "Air Roll", tags: ["Intermediate", "Air"], text: "Hava içinde aracı çevirme ve kontrol.", detail: "Left/Right air roll tercih et. Konsisten kullanım kontrol geliştirir." },
  { title: "Boost Management", tags: ["Beginner", "Utility"], text: "Boost harcamasını akıllıca yönetme.", detail: "Pad lokasyonlarını ezberle. Boost olmadan pozisyon koru." },
  { title: "Shadow Defense", tags: ["Intermediate", "Defense"], text: "Rakip oyuncuyu zıt tarafta takip etme.", detail: "Boş alan kapatma. Hızlı yön değişimleri yap." },
  { title: "Kickoff Setup", tags: ["Beginner", "Kickoff"], text: "Kickoff sonrası doğru pozisyonlamayı yapma.", detail: "3 konumu öğren. Boost route planlaması yapabilir." }
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
    weapons: { title: "Silahlar", items: valorantWeapons },
    maps: { title: "Haritalar", items: valorantMaps },
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
    const desc = currentGame === "valorant" ? "Ajanlar, silahlar, haritalar ve taktikler tek panelde." : "Arabalar, mekanikler ve takım rotasyonlarını optimize et.";

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
