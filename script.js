const sectionMap = {
  valorant: {
    home: {
      title: 'VALORANT Rehberi',
      text: 'Ajanlar, haritalar, silahlar ve taktikler.',
      items: [
        { title: 'Ajanlar', tags: ['Takım', 'Rol'], text: 'Controller, Initiator, Duelist.', detail: 'Ajanlar için temel kullanım ve pozisyon bilgisi.' },
        { title: 'Haritalar', tags: ['Kontrol', 'Rotasyon'], text: 'A/B site ve mid kontrolü.', detail: 'Harita okuma ve rotasyon mantığı.' },
        { title: 'Silahlar', tags: ['Menzil', 'Recoil'], text: 'Phantom, Vandal ve sniper seçimleri.', detail: 'Silah seçimi ve kullanım mantığı.' },
        { title: 'Taktikler', tags: ['Round', 'Plan'], text: 'Attack ve defense oyun planı.', detail: 'Retake ve site baskısı için planlama.' }
      ]
    },
    agents: {
      title: 'Ajanlar',
      items: [
        { title: 'Jett', tags: ['Duelist', 'Hız'], text: 'Hızlı giriş ve mobilite.', detail: 'Site girişlerinde agresif ama kontrollü oynama.' },
        { title: 'Sova', tags: ['Initiator', 'Intel'], text: 'Harita bilgisi ve kontrol.', detail: 'Giriş öncesi bilgi toplama ve takıma destek.' },
        { title: 'Killjoy', tags: ['Sentinel', 'Savunma'], text: 'Savunma ve kontrol.', detail: 'Retake ve site savunmasında çok güçlü.' }
      ]
    },
    maps: {
      title: 'Haritalar',
      items: [
        { title: 'Ascent', tags: ['A/B', 'Mid'], text: 'Mid kontrolü çok önemlidir.', detail: 'A ve B arasında denge kur.' },
        { title: 'Bind', tags: ['Teleport', 'Hız'], text: 'Hızlı rotasyonlu harita.', detail: 'Teleport ile baskı ve site dönüşü.' },
        { title: 'Lotus', tags: ['3 Site', 'Kontrol'], text: 'Çoklu site dinamiği.', detail: 'Kapı ve rota kontrolü önemlidir.' }
      ]
    },
    weapons: {
      title: 'Silahlar',
      items: [
        { title: 'Vandal', tags: ['Rifle', 'Meta'], text: 'Yüksek hasar ve kontrol.', detail: 'Orta ve uzun menzilde çok güçlü.' },
        { title: 'Phantom', tags: ['Rifle', 'Düzenli'], text: 'Düzenli ve kontrollü.', detail: 'Özellikle kısa ve orta menzilde iyi.' },
        { title: 'Operator', tags: ['Sniper', 'Risk'], text: 'Yüksek hasar ama yüksek risk.', detail: 'Doğru pozisyon ve nişan gerekir.' }
      ]
    },
    tactics: {
      title: 'Taktikler',
      items: [
        { title: 'Site Girişi', tags: ['Attack', 'Entry'], text: 'Entry, flash ve smoke sırası.', detail: 'Takımın aynı anda baskı kurması gerekir.' },
        { title: 'Retake', tags: ['Defense', 'Kontrol'], text: 'Utility ve pozisyon kontrolü.', detail: 'Retake öncesi düzenli plan şart.' },
        { title: 'Post-Plant', tags: ['Attack', 'Savunma'], text: 'Spike sonrası pozisyon okuma.', detail: 'En tehlikeli açıdan kaçın.' }
      ]
    },
    crosshair: {
      title: 'Crosshair',
      items: [
        { title: 'Temel Crosshair', tags: ['Stabil', 'Dengeli'], text: 'Net ve sabit nişan.', detail: 'Kurulum ve aim tutarlılığı için idealdir.' },
        { title: 'Agresif Crosshair', tags: ['Hızlı', 'Giriş'], text: 'Hızlı nişan ve kontrollü giriş.', detail: 'Kısa menzil için uygundur.' }
      ]
    },
    modes: {
      title: 'Oyun Modları',
      items: [
        { title: 'Competitive', tags: ['Ranked', 'Takım'], text: 'Rekabetçi oynanış.', detail: 'Süreklilik ve iletişim kritik.' }
      ]
    },
    updates: {
      title: 'Güncellemeler',
      items: [
        { title: 'Meta Takip', tags: ['Güncel', 'Meta'], text: 'En güçlü ajan akışı.', detail: 'Oyuncu mantığına göre güçlü kombinasyonlar.' }
      ]
    }
  },
  rocket: {
    home: {
      title: 'Rocket League Rehberi',
      text: 'Arabalar, aerial, boost ve takım oyunu.',
      items: [
        { title: 'Arabalar', tags: ['Hitbox', 'Kontrol'], text: 'Doğru araç seçimi.', detail: 'Hitbox ve boost yönetimi çok kritiktir.' },
        { title: 'Mekanikler', tags: ['Aerial', 'Boost'], text: 'Hava ve zemin teması.', detail: 'Timing ve boost kontrolü çok önemlidir.' },
        { title: 'Taktikler', tags: ['Takım', 'Rotasyon'], text: 'Top kontrolü ve pozisyon.', detail: 'En iyi rotasyon için takım koordinasyonu gerekir.' },
        { title: 'Antrenman', tags: ['Pratik', 'Tempo'], text: 'Kısa ve düzenli tekrar.', detail: 'Aerial ve flick çalışması yapılmalı.' }
      ]
    },
    cars: {
      title: 'Arabalar',
      items: [
        { title: 'Octane', tags: ['Popüler', 'Denge'], text: 'Profesyonel seviyede çok tercih edilir.', detail: 'Dengeli hitbox ve kontrolü iyi.' },
        { title: 'Dominus', tags: ['Güç', 'Kontrol'], text: 'Güçlü flick ve top kontrolü.', detail: 'Ground ve wall play için uygundur.' },
        { title: 'Breakout', tags: ['Denge', 'Kolay'], text: 'Kolay kullanılabilir ve dengeli.', detail: 'Yeni başlayanlar için güvenli seçim.' }
      ]
    },
    arenas: {
      title: 'Arenalar',
      items: [
        { title: 'Mekanik Arenalar', tags: ['Aerial', 'Boost'], text: 'Açık alan ve boost yönü.', detail: 'Açılardan kaçın ve boost kontrolünü önceden planla.' }
      ]
    },
    mechanics: {
      title: 'Mekanikler',
      items: [
        { title: 'Aerial', tags: ['Hava', 'Timing'], text: 'Hava temasını doğru zamanla yap.', detail: 'Topa en iyi temas için timing çok önemlidir.' },
        { title: 'Boost', tags: ['Hız', 'Kontrol'], text: 'Boost kullanımı ve yön kontrolü.', detail: 'Boost sonrası çizgi ve açı kritik.' }
      ]
    },
    tactics: {
      title: 'Taktikler',
      items: [
        { title: 'Takım Oynama', tags: ['Takım', 'Pozisyon'], text: 'Takım iletişimi ve rol dağılımı.', detail: 'Her oyuncunun görevi belirgindir.' },
        { title: 'Rotasyon', tags: ['Rota', 'Boost'], text: 'Topa hızlı ulaşmak.', detail: 'Rotasyon ve boost akışı çok önemlidir.' }
      ]
    },
    training: {
      title: 'Antrenman',
      items: [
        { title: 'Günlük Pratik', tags: ['Mekanik', 'Tempo'], text: 'Kısa ama düzenli pratik.', detail: 'Aerial ve boost tekrarları yapılmalı.' }
      ]
    },
    modes: {
      title: 'Modlar',
      items: [
        { title: 'Ranked', tags: ['Rank', 'Kompozisyon'], text: 'Takım oyunu ve pozisyon akışı.', detail: 'Kısa takım iletişimi ve net rol dağılımı.' }
      ]
    },
    aerial: {
      title: 'Aerial',
      items: [
        { title: 'Aerial Temel', tags: ['Hava', 'Timing'], text: 'Topa doğru time planı.', detail: 'Yüksek temasta net ve kontrollü öne geç.' }
      ]
    }
  }
};

function showLanding() {
  document.getElementById('landing').classList.remove('hidden');
  document.querySelectorAll('.game-app').forEach((app) => app.classList.add('hidden'));
}

function showGame(gameName) {
  const landing = document.getElementById('landing');
  const app = document.getElementById(`${gameName}-app`);
  if (!app) return;
  landing.classList.add('hidden');
  document.querySelectorAll('.game-app').forEach((item) => item.classList.add('hidden'));
  app.classList.remove('hidden');
  renderSection(gameName, 'home');
}

function renderSection(gameName, sectionName) {
  const main = document.getElementById(`${gameName}-main`);
  if (!main) return;

  const section = sectionMap[gameName]?.[sectionName] ?? sectionMap[gameName].home;
  const items = section.items || [];

  main.innerHTML = `
    <div class="detail-page">
      <section class="hero-page">
        <div class="eyebrow">${gameName === 'valorant' ? 'VALORANT' : 'ROCKET LEAGUE'}</div>
        <h1>${section.title}</h1>
        <p>${section.text}</p>
        <div class="quick-links">
          <button type="button" class="action-btn" data-section="home">Ana Sayfa</button>
          <button type="button" class="action-btn ghost" data-section="${sectionName === 'home' ? (gameName === 'valorant' ? 'agents' : 'cars') : 'home'}">${sectionName === 'home' ? 'İçeriğe Git' : 'Geri Dön'}</button>
        </div>
      </section>

      <div class="section-title">
        <h2>${section.title}</h2>
        <span>${items.length} içerik</span>
      </div>

      <div class="content-grid">
        ${items.map((item, index) => `
          <article class="guide-card" data-game="${gameName}" data-section="${sectionName}" data-index="${index}">
            <div class="card-tags">
              ${(item.tags || []).slice(0, 3).map((tag) => `<span>${tag}</span>`).join('')}
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <button type="button" class="read-btn">Oku</button>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderDetail(gameName, sectionName, itemIndex) {
  const section = sectionMap[gameName]?.[sectionName] ?? sectionMap[gameName].home;
  const item = section.items[itemIndex];
  const main = document.getElementById(`${gameName}-main`);
  if (!main || !item) return;

  main.innerHTML = `
    <div class="single-detail">
      <button type="button" class="back-content" data-section="${sectionName}">← Geri</button>
      <div class="eyebrow">${gameName === 'valorant' ? 'VALORANT' : 'ROCKET LEAGUE'}</div>
      <h1>${item.title}</h1>
      <div class="detail-tags">
        ${(item.tags || []).map((tag) => `<span>${tag}</span>`).join('')}
      </div>
      <p class="lead">${item.text}</p>
      <div class="detail-columns">
        <div>
          <h2>Detay</h2>
          <p>${item.detail || 'Bu içerik için açıklama eklenmemiş.'}</p>
        </div>
        <aside class="tip-box">
          <strong>İpucu</strong>
          <p>Oyun tarzına göre doğru konum ve zamanlamayı uygula.</p>
        </aside>
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll('.game-card').forEach((card) => {
    card.addEventListener('click', () => {
      const game = card.dataset.game;
      if (game === 'valorant' || game === 'rocket') {
        showGame(game);
      }
    });
  });

  document.querySelectorAll('.back-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.back === 'landing') {
        showLanding();
      }
    });
  });

  document.body.addEventListener('click', (event) => {
    const sectionTrigger = event.target.closest('[data-section]');
    if (sectionTrigger) {
      event.preventDefault();
      const sectionName = sectionTrigger.dataset.section;
      const app = document.querySelector('.game-app:not(.hidden)');
      if (!app) return;
      const gameName = app.id.replace('-app', '');
      const validSections = Object.keys(sectionMap[gameName] || {});
      if (validSections.includes(sectionName)) {
        renderSection(gameName, sectionName);
      }
    }

    const detailCard = event.target.closest('.guide-card');
    if (detailCard && event.target.closest('.read-btn')) {
      const gameName = detailCard.dataset.game;
      const sectionName = detailCard.dataset.section;
      const index = Number(detailCard.dataset.index);
      renderDetail(gameName, sectionName, index);
    }

    const backButton = event.target.closest('.back-content');
    if (backButton) {
      const app = document.querySelector('.game-app:not(.hidden)');
      const gameName = app?.id.replace('-app', '');
      const sectionName = backButton.dataset.section;
      if (gameName && sectionName) renderSection(gameName, sectionName);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showLanding();
  bindEvents();
});
