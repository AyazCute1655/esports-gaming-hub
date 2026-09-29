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
  }
];

const rocketCards = [
  {
    title: "Boost Tutma",
    tags: ["Mekanik", "Timing", "Kontrol"],
    text: "Boost’unuzu doğru sürelerde kullanarak topa en verimli açıdan müdahale edin."
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
  }
];

const tacticsData = {
  valorant: [
    {
      title: "Site Atak: 2-2-2 yapısı",
      text: "Öncelik: bilgi kazanmak, hızlı push ve hedef bölgede kontrol kurmak."
    },
    {
      title: "Defans: Çift kontrol noktası",
      text: "İki ana nokta üzerinde kontrol kurarak rakibin sahanın ortasına girmesini engelle."
    },
    {
      title: "Utility Sırası",
      text: "Flash ve smoke kullanımını toplam bilgi maliyeti düşecek şekilde planla."
    }
  ],
  rocket: [
    {
      title: "Boost + Flick Kombosu",
      text: "Boost’unuzu bitmeden önce topa vuruş açısı oluşturma mantığı ile çalış."
    },
    {
      title: "3. Bölge Savunma",
      text: "Rakibin en tehlikeli anlarında orta alanı kontrol etmek takımın oyununu çözer."
    },
    {
      title: "Takım Rotasyonu",
      text: "Rakibe gerekli anda baskı yaparak topu düşürmeden alan kapatma."
    }
  ]
};

const faqData = [
  {
    q: "VALORANT için en iyi başlangıç rehberi nedir?",
    a: "Önce temel agent seçimleri, harita odaklı pozisyon bilgisi, utility kullanımı ve site atak/defans mantığı öğrenilir. Bu temel üzerine daha sonra özel taktikler eklenir."
  },
  {
    q: "Rocket League’de mekanik nasıl gelişir?",
    a: "Boost yönetimi, doğru top temas noktası, rotasyon ve flick pratiği önemlidir. Her gün kısa süreli tekrarlar, temel mekaniği çok hızlı geliştirir."
  },
  {
    q: "Taktikleri neden ayrı sayfa olarak tutmalıyız?",
    a: "Çünkü her oyun için hedef davranış ve pozisyon mantığı farklıdır. Bu yüzden kullanıcılar kendi oyununu kolayca filtreleyip gerekli içeriğe ulaşır."
  },
  {
    q: "SSS sayfası neden özel tasarım almalı?",
    a: "Soruların kolay bulunması, kategori bazlı ayrım ve mobil kullanım için accordion yapısı çok daha etkili olur."
  }
];

function renderCards(targetId, data, accent) {
  const root = document.getElementById(targetId);
  root.innerHTML = data.map(item => `
    <div class="card">
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
  root.innerHTML = tacticsData[game].map(item => `
    <div class="strategy-card">
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function renderFaq() {
  const root = document.getElementById("faq-list");
  root.innerHTML = faqData.map((item, index) => `
    <div class="faq-item ${index === 0 ? "active" : ""}">
      <div class="faq-q">
        <span>${item.q}</span>
        <span>${index === 0 ? "−" : "+"}</span>
      </div>
      <div class="faq-a">${item.a}</div>
    </div>
  `).join("");

  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      parent.classList.toggle("active");
      btn.querySelector("span:last-child").textContent = parent.classList.contains("active") ? "−" : "+";
    });
  });
}

document.querySelectorAll(".tab-btn[data-game]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn[data-game]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTactics(btn.dataset.game);
  });
});

renderCards("valorant-content", valorantCards, "rgba(255,70,85,0.5)");
renderCards("rocket-content", rocketCards, "rgba(47,155,255,0.5)");
renderTactics("valorant");
renderFaq();
