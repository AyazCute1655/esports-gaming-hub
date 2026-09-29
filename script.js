const valorantCards = [
  {
    title: "Jett",
    tags: ["Duelist", "Yüksek Mobilite", "Entry"],
    text: "İçeri girmek için hızlı giriş sağlar. Kısa sürede kontrol alanı kurar."
  },
  {
    title: "Sova",
    tags: ["Initiator", "Recon", "Info"],
    text: "Harita kontrolü ve bilgi toplama için çok güçlü bir ajandır."
  },
  {
    title: "Killjoy",
    tags: ["Sentinel", "Utility", "Defense"],
    text: "Savunma alanını çok iyi güçlendirir. Saha kontrolünü artırır."
  },
  {
    title: "Omen",
    tags: ["Controller", "Utility", "Map Control"],
    text: "Haritayı kolay şekilde kontrol eder. Smoke ve ult ile rakip bilgisi alır."
  },
  {
    title: "Phoenix",
    tags: ["Duelist", "Aggressive", "Self-Sustain"],
    text: "Agresif oynayan ve solo kuvveti yüksek bir duelist karakteridir."
  },
  {
    title: "Sage",
    tags: ["Sentinel", "Support", "Heal"],
    text: "Heal ve revive ile takımı destekleyen en iyi support ajanı."
  },
  {
    title: "Raze",
    tags: ["Duelist", "Explosive", "Area Denial"],
    text: "Patlayıcı silahları ile alan kontrolü yapan güçlü duelist."
  },
  {
    title: "Viper",
    tags: ["Controller", "Poison", "Toxic"],
    text: "Zehir duvarları ile harita kontrolünü sağlayan koruma uzmanı."
  },
  {
    title: "Breach",
    tags: ["Initiator", "Stun", "Entry Support"],
    text: "Ütüler ile rakip pozisyonunu açan güvenli giriş sağlayıcısı."
  }
];

const valorantMaps = [
  {
    title: "Ascent",
    tags: ["2 Site", "Vertical", "Classic"],
    text: "İki siteye açılan, düşey unsurlar barındıran klasik harita."
  },
  {
    title: "Split",
    tags: ["2 Site", "Verticle Heavy", "Challenging"],
    text: "Düşey elemanlarla dolu, taktiksel olarak karmaşık bir harita."
  },
  {
    title: "Icebox",
    tags: ["2 Site", "Ice", "Unique"],
    text: "Buz temasında, özel mekaniklerle tasarlanan farklı bir ortam."
  },
  {
    title: "Breeze",
    tags: ["2 Site", "Long Range", "Open"],
    text: "Geniş alanlar ve uzun menzil duelolarına uygun harita."
  },
  {
    title: "Haven",
    tags: ["3 Site", "Unique", "Control"],
    text: "Üç sitenin olduğu tek harita, taktik olarak farklı dinamikler."
  },
  {
    title: "Lotus",
    tags: ["3 Site", "Complex", "New"],
    text: "Yeni eklenen, üç siteye ve özel mekaniklere sahip harita."
  }
];

const valorantWeapons = [
  {
    title: "Vandal",
    tags: ["Rifle", "Meta", "Damage"],
    text: "Yüksek hasar ve kullanım kolaylığı ile tercih edilen ana tüfek."
  },
  {
    title: "Phantom",
    tags: ["Rifle", "Spray", "Control"],
    text: "Kontrolü daha kolay, spray paterni uygun silah."
  },
  {
    title: "Operator",
    tags: ["Sniper", "One-Shot", "Expensive"],
    text: "Tek atışta vurma gücü ile en pahalı ama en güçlü silah."
  },
  {
    title: "Spectre",
    tags: ["SMG", "Close Range", "Cheap"],
    text: "Yakın menzilde etkili, uygun fiyatlı çelişki silahı."
  },
  {
    title: "Odin",
    tags: ["LMG", "Spray", "Suppressive"],
    text: "Yüksek ateş hızı ve hacim ile baskılayıcı silah."
  }
];

const valorantStrategies = [
  {
    title: "Site Atak: 2-2-2 yapısı",
    text: "Öncelik: bilgi kazanmak, hızlı push ve hedef bölgede kontrol kurmak. Ajan seçimi: Jett, Phoenix ve bir Initiator."
  },
  {
    title: "Defans: Çift kontrol noktası",
    text: "İki ana nokta üzerinde kontrol kurarak rakibin sahanın ortasına girmesini engelle. Utility sırayla kullan."
  },
  {
    title: "Utility Sırası",
    text: "Flash ve smoke kullanımını toplam bilgi maliyeti düşecek şekilde planla. Timing çok önemli!"
  },
  {
    title: "Post-Plant Strateji",
    text: "Bomba yerleştirildikten sonra rakip yükselen oyununu engelleyen savunma pozisyonları kur."
  },
  {
    title: "Ekonomi Yönetimi",
    text: "Tura göre para başını ve silah yatırımını planla. Full buy, half buy ve full eco turları doğru kullan."
  }
];

const rocketCards = [
  {
    title: "Boost Tutma",
    tags: ["Mekanik", "Timing", "Kontrol"],
    text: "Boost'unuzu doğru sürelerde kullanarak topa en verimli açıdan müdahale edin."
  },
  {
    title: "Wall Play",
    tags: ["Savunma", "Pozisyon", "Taktik"],
    text: "Duvar üzerinden topa yaklaşmak, rakibin yönünü bozmak için çok etkilidir."
  },
  {
    title: "Rotation",
    tags: ["Takım", "Hız", "Pozisyon"],
    text: "Düzgün rotasyon, takımın topa erken erişmesini sağlar ve savunma hatlarını korur."
  },
  {
    title: "Aerial Play",
    tags: ["Mekanik", "Hava", "İleri"],
    text: "Havada topu kontrol etmek, oyunu taşıyan en önemli gelişmiş tekniklerden biridir."
  },
  {
    title: "Flip Reset",
    tags: ["Mekanik", "Advanced", "Styling"],
    text: "Topu takip ederek hava kütlesini sıfırlamak, sınırsız hava kontrol imkanı verir."
  },
  {
    title: "Ball Chasing",
    tags: ["Aggressive", "Positioning", "Timing"],
    text: "Topa hızlı erişmek, rakibi pasif bırakır. Ama takım oyunu unutma!"
  }
];

const rocketArenas = [
  {
    title: "DFH Stadium",
    tags: ["Classic", "Large", "Balanced"],
    text: "Klasik futbol stadyumu teması, dengeli oyun sunan standart arena."
  },
  {
    title: "Utopia Coliseum",
    tags: ["Futuristic", "Symmetrical", "Clean"],
    text: "Gelecekçi tasarım, simetrik yapı ile kompetitif oyun için ideal."
  },
  {
    title: "Neo Tokyo",
    tags: ["Urban", "Angled", "Unique"],
    text: "Japon şehrinden esinlenmiş, açılı platform ve özel tasarım sunar."
  },
  {
    title: "Mannfield",
    tags: ["Simple", "Beginner", "Classic"],
    text: "Basit ve anlaşılır yapı, yeni oyuncular için mükemmel başlangıç alanı."
  },
  {
    title: "Champions Field",
    tags: ["Modern", "Tournament", "Professional"],
    text: "Profesyonel turnuvaların oynandığı modern ve resmi arena."
  }
];

const rocketMechanics = [
  {
    title: "Dodging (Kaçış)",
    tags: ["Temel", "Mobilite", "Kontrol"],
    text: "Hızlı yön değiştirme, momentum kaybetmeden hareket etme tekniği."
  },
  {
    title: "Double Jump",
    tags: ["Temel", "Air", "Timing"],
    text: "İki kere atlayarak havada daha yüksek ve daha iyi konumlar alabilirsin."
  },
  {
    title: "Air Roll",
    tags: ["Advanced", "Rotation", "Control"],
    text: "Havada araca rotasyon vererek topa hassas vuruşlar yapabilirsin."
  },
  {
    title: "Power Shot",
    tags: ["Mekanik", "Force", "Damage"],
    text: "Boost ile güçlendirilmiş vuruş, topu uzak ve hızlı gönderir."
  },
  {
    title: "Speed Flip",
    tags: ["Advanced", "Momentum", "Complex"],
    text: "Hızlı başlangıç ve momentum kazanma, ileri oyuncular için temel hareket."
  }
];

const rocketStrategies = [
  {
    title: "Boost + Flick Kombosu",
    text: "Boost'unuzu bitmeden önce topa vuruş açısı oluşturma mantığı ile çalış. Maç boyunca kullan!"
  },
  {
    title: "3. Bölge Savunma",
    text: "Rakibin en tehlikeli anlarında orta alanı kontrol etmek takımın oyununu çözer."
  },
  {
    title: "Takım Rotasyonu",
    text: "Rakibe gerekli anda baskı yaparak topu düşürmeden alan kapatma. Hiç bir zaman 3'e karşı 1 kalmayın!"
  },
  {
    title: "Pressure Defense",
    text: "Sürekli agresif savunma yaparak rakibi rahat oynatmamak, kendi oyunuzu başlatmak."
  },
  {
    title: "Kickoff Strategy",
    text: "Oyun başlangıcında doğru pozisyonlama ve boost dağılımı, turluyu belirleyen önemli an."
  }
];

const tacticsData = {
  valorant: valorantStrategies,
  rocket: rocketStrategies
};

const faqData = [
  {
    q: "VALORANT için en iyi başlangıç rehberi nedir?",
    a: "Önce temel agent seçimleri, harita odaklı pozisyon bilgisi, utility kullanımı ve site atak/defans mantığı öğrenilir. Bu temel üzerine daha sonra özel taktikler eklenir. Sova ve Sage ile başlamak önerilir."
  },
  {
    q: "Rocket League'de mekanik nasıl gelişir?",
    a: "Boost yönetimi, doğru top temas noktası, rotasyon ve flick pratiği önemlidir. Her gün kısa süreli tekrarlar, temel mekaniği çok hızlı geliştirir. Training modlarını mutlaka kullan!"
  },
  {
    q: "Taktikleri neden ayrı sayfa olarak tutmalıyız?",
    a: "Çünkü her oyun için hedef davranış ve pozisyon mantığı farklıdır. Bu yüzden kullanıcılar kendi oyununu kolayca filtreleyip gerekli içeriğe ulaşır."
  },
  {
    q: "SSS sayfası neden özel tasarım almalı?",
    a: "Soruların kolay bulunması, kategori bazlı ayrım ve mobil kullanım için accordion yapısı çok daha etkili olur. Hızlı bilgi erişimi sağlar."
  },
  {
    q: "VALORANT'ta ekonomi sistemi nasıl çalışır?",
    a: "Vuruş, ölüm ve tur başarısına göre puan kazanırsın. Bu puanlar silah satın almak için kullanılır. Full buy, half buy ve eco turları doğru zamanlamak kritiktir!"
  },
  {
    q: "Rocket League'de rank sistemi nedir?",
    a: "MMR (Matchmaking Rating) sistemi ile oyuncular eşleştirilir. Kazandıkça rank artar, kaybettikçe azalır. Bronze, Silver, Gold, Platinum, Diamond, Champion ve SSL seviyeleri vardır."
  },
  {
    q: "Hangi ajan en zor öğrenilir?",
    a: "Viper ve Omen gibi Controller ajanlar, site kontrol ve utility bilgisi gerektir. Ama mastered olunca çok güçlüdürler!"
  },
  {
    q: "Rocket League'de solo queue nasıl kütüphane?",
    a: "Pozisyonel disiplin, hata minimizasyonu ve takım oyununa odaklanmak önemli. Chat yerine oyuna konsantre ol ve stratejik oyna!"
  }
];

function renderCards(targetId, data, accent, currentTab = null) {
  const root = document.getElementById(targetId);
  if (!root) return;
  
  root.innerHTML = data.map((item, index) => `
    <div class="card" style="animation-delay: ${index * 0.05}s">
      <div class="card-visual" style="background: linear-gradient(135deg, ${accent}, rgba(255,255,255,0.05));"></div>
      <div class="card-content">
        <div class="tag-row">
          ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </div>
  `).join("");
}

function renderTactics(game) {
  const root = document.getElementById("tactics-content");
  if (!root) return;
  
  root.innerHTML = tacticsData[game].map((item, index) => `
    <div class="strategy-card" style="animation-delay: ${index * 0.05}s">
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function renderFaq() {
  const root = document.getElementById("faq-list");
  if (!root) return;
  
  root.innerHTML = faqData.map((item, index) => `
    <div class="faq-item ${index === 0 ? "active" : ""}">
      <div class="faq-q">
        <span>${item.q}</span>
        <span class="faq-toggle">${index === 0 ? "−" : "+"}</span>
      </div>
      <div class="faq-a">${item.a}</div>
    </div>
  `).join("");

  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", function() {
      const parent = this.parentElement;
      const wasActive = parent.classList.contains("active");
      
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-toggle").textContent = "+";
      });
      
      if (!wasActive) {
        parent.classList.add("active");
        this.querySelector(".faq-toggle").textContent = "−";
      }
    });
  });
}

// Tab switcher for Valorant section
document.querySelectorAll(".tabbar").forEach((tabbar, index) => {
  const tabs = tabbar.querySelectorAll(".tab-btn");
  
  if (index === 0) { // Valorant tabs
    tabs.forEach(btn => {
      btn.addEventListener("click", function() {
        tabs.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        
        const tabText = this.textContent.trim().toLowerCase();
        let data, accent;
        
        if (tabText.includes("ajan")) {
          data = valorantCards;
          accent = "rgba(255,70,85,0.5)";
        } else if (tabText.includes("harita")) {
          data = valorantMaps;
          accent = "rgba(255,70,85,0.5)";
        } else if (tabText.includes("silah")) {
          data = valorantWeapons;
          accent = "rgba(255,70,85,0.5)";
        } else if (tabText.includes("taktik")) {
          data = valorantStrategies;
          accent = "rgba(255,70,85,0.5)";
        }
        
        renderCards("valorant-content", data, accent);
      });
    });
  } else if (index === 1) { // Rocket League tabs
    tabs.forEach(btn => {
      btn.addEventListener("click", function() {
        tabs.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        
        const tabText = this.textContent.trim().toLowerCase();
        let data, accent;
        
        if (tabText.includes("arena")) {
          data = rocketArenas;
          accent = "rgba(47,155,255,0.5)";
        } else if (tabText.includes("mod")) {
          data = rocketCards;
          accent = "rgba(47,155,255,0.5)";
        } else if (tabText.includes("mekanik")) {
          data = rocketMechanics;
          accent = "rgba(47,155,255,0.5)";
        } else if (tabText.includes("taktik")) {
          data = rocketStrategies;
          accent = "rgba(47,155,255,0.5)";
        }
        
        renderCards("rocket-content", data, accent);
      });
    });
  } else if (index === 2) { // Tactics game switcher
    tabs.forEach(btn => {
      btn.addEventListener("click", function() {
        tabs.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        renderTactics(this.dataset.game);
      });
    });
  }
});

// Initialize
renderCards("valorant-content", valorantCards, "rgba(255,70,85,0.5)");
renderCards("rocket-content", rocketCards, "rgba(47,155,255,0.5)");
renderTactics("valorant");
renderFaq();