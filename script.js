const valorantAgents = [
  {
    id: 'VAL-AGENT-001',
    name: 'Astra',
    role: 'Controller',
    detail: 'Küresel yetenek kontrolüyle yönü değiştiren astral kontrol ajanı.',
    difficulty: 'Profesionel',
    tags: ['Kontrol', 'Yetenek', 'Harita']
  },
  {
    id: 'VAL-AGENT-002',
    name: 'Breach',
    role: 'Initiator',
    detail: 'Flash ve stun ile girişleri kıran agresif giriş ajanı.',
    difficulty: 'Orta',
    tags: ['Giriş', 'Stun', 'Flash']
  },
  {
    id: 'VAL-AGENT-003',
    name: 'Brimstone',
    role: 'Controller',
    detail: 'İttifak ve ikaz yetenekleriyle site baskısını yöneten lider.',
    difficulty: 'Başlangıç',
    tags: ['Kontrol', 'Açık alan', 'Orta']
  },
  {
    id: 'VAL-AGENT-004',
    name: 'Chamber',
    role: 'Sentinel',
    detail: 'Uzun menzil baskısı ve güvenlik düzeniyle kilitlenen ajan.',
    difficulty: 'İleri',
    tags: ['Sniper', 'Kontrol', 'Güvenlik']
  },
  {
    id: 'VAL-AGENT-005',
    name: 'Clove',
    role: 'Controller',
    detail: 'İkili faydalar ve müdafaa yetenekleriyle denge kuran ajan.',
    difficulty: 'Orta',
    tags: ['İkili', 'Savunma', 'Utility']
  },
  {
    id: 'VAL-AGENT-006',
    name: 'Cypher',
    role: 'Sentinel',
    detail: 'İstihbarat ve kilitlenme kusursuzluk oluşturan bilgi ajanı.',
    difficulty: 'Başlangıç',
    tags: ['İstihbarat', 'Kilit', 'Savunma']
  },
  {
    id: 'VAL-AGENT-007',
    name: 'Deadlock',
    role: 'Sentinel',
    detail: 'Yüksek kontrol, kapama ve engelleme kale taşı.',
    difficulty: 'İleri',
    tags: ['Engel', 'Kontrol', 'Açık alan']
  },
  {
    id: 'VAL-AGENT-008',
    name: 'Fade',
    role: 'Initiator',
    detail: 'Takip, flash ve şekil bozucu girişciliğin temsili.',
    difficulty: 'İleri',
    tags: ['Tespit', 'Flash', 'Giriş']
  },
  {
    id: 'VAL-AGENT-009',
    name: 'Gekko',
    role: 'Initiator',
    detail: 'Köpek arkadaşlarıyla agresif iş birlikçi giriş.',
    difficulty: 'Başlangıç',
    tags: ['İş birlik', 'Giriş', 'Harita']
  },
  {
    id: 'VAL-AGENT-010',
    name: 'Harbor',
    role: 'Controller',
    detail: 'Su kontrolü ve alan kısıtlamasıyla site baskısı oluşturan ajan.',
    difficulty: 'Orta',
    tags: ['Su', 'Kontrol', 'Duraklatma']
  },
  {
    id: 'VAL-AGENT-011',
    name: 'Iso',
    role: 'Duelist',
    detail: 'Bireysel performans ve 1v1 üstünlüğünü ön plana çıkaran ajan.',
    difficulty: 'İleri',
    tags: ['Duel', '1v1', 'Saldırı']
  },
  {
    id: 'VAL-AGENT-012',
    name: 'Jett',
    role: 'Duelist',
    detail: 'Hız, hareket ve çeviklik odaklı agresif temizlik ajanı.',
    difficulty: 'İleri',
    tags: ['Çeviklik', 'Açık alan', 'Entry']
  },
  {
    id: 'VAL-AGENT-013',
    name: 'KAY/O',
    role: 'Initiator',
    detail: 'Sinyal ve kontrol odaklı giriş yetenekleriyle bölge baskısı kurar.',
    difficulty: 'Orta',
    tags: ['Sinyal', 'Giriş', 'Kontrol']
  },
  {
    id: 'VAL-AGENT-014',
    name: 'Killjoy',
    role: 'Sentinel',
    detail: 'Savunma mekanikleriyle site zaptı ve defansif kontrol sağlar.',
    difficulty: 'Başlangıç',
    tags: ['Savunma', 'Engel', 'Alandaki kontrol']
  },
  {
    id: 'VAL-AGENT-015',
    name: 'Neon',
    role: 'Duelist',
    detail: 'Hızlı baskı ve yüksek riskli temizleme operasyonları için ideal.',
    difficulty: 'İleri',
    tags: ['Hız', 'Rush', 'Entry']
  },
  {
    id: 'VAL-AGENT-016',
    name: 'Omen',
    role: 'Controller',
    detail: 'Dikey çakışma ve görsel kontrolle site dışı baskı kurar.',
    difficulty: 'Orta',
    tags: ['Dikey', 'Kontrol', 'Görsel']
  },
  {
    id: 'VAL-AGENT-017',
    name: 'Phoenix',
    role: 'Duelist',
    detail: 'Kendi yarattığı alan ve hızlı giriş avantajı sunar.',
    difficulty: 'Başlangıç',
    tags: ['Açık alan', 'Duel', 'Giriş']
  },
  {
    id: 'VAL-AGENT-018',
    name: 'Raze',
    role: 'Duelist',
    detail: 'Patlayıcı kontrollü ve hızlı site girişleri için tasarlanmış ajan.',
    difficulty: 'Başlangıç',
    tags: ['Patlayıcı', 'Entry', 'Saldırı']
  },
  {
    id: 'VAL-AGENT-019',
    name: 'Reyna',
    role: 'Duelist',
    detail: 'Kafayı doğru çeken ve tekli öldürmede uyum sağlayan agresif ajan.',
    difficulty: 'İleri',
    tags: ['Kill', 'Duel', 'Aşırı baskı']
  },
  {
    id: 'VAL-AGENT-020',
    name: 'Sage',
    role: 'Sentinel',
    detail: 'Can kurtarma, alan kontrolü ve savunma düzeni için temel ajan.',
    difficulty: 'Başlangıç',
    tags: ['Savunma', 'Can', 'Kontrol']
  },
  {
    id: 'VAL-AGENT-021',
    name: 'Skye',
    role: 'Initiator',
    detail: 'İnfo ve pozisyon baskısı sağlayan çok yönlü duelist destek ajanı.',
    difficulty: 'Orta',
    tags: ['Bilgi', 'Giriş', 'Pozisyon']
  },
  {
    id: 'VAL-AGENT-022',
    name: 'Sova',
    role: 'Initiator',
    detail: 'İstihbarat ve uzun menzil vurgu için profesyonel seçim.',
    difficulty: 'Orta',
    tags: ['İstihbarat', 'Uzun menzil', 'Harita']
  },
  {
    id: 'VAL-AGENT-023',
    name: 'Viper',
    role: 'Controller',
    detail: 'Zehir ve kontrol alanıyla site kapanı ve retake baskısı sağlar.',
    difficulty: 'Profesyonel',
    tags: ['Zehir', 'Kontrol', 'Retake']
  },
  {
    id: 'VAL-AGENT-024',
    name: 'Waylay',
    role: 'Duelist',
    detail: 'Hızlı noktaya konumlanma ve agresif çekiliş metası sunan ajan.',
    difficulty: 'İleri',
    tags: ['Hız', 'Giriş', 'Duel']
  },
  {
    id: 'VAL-AGENT-025',
    name: 'Yoru',
    role: 'Duelist',
    detail: 'Fake giriş, taktik sahte pozisyon ve pik kontrolü uzmanı.',
    difficulty: 'Profesyonel',
    tags: ['Fake', 'Taklit', 'Hareket']
  }
];

const valorantMaps = [
  {
    id: 'VAL-MAP-001',
    name: 'Ascent',
    type: 'Attack / Defense',
    detail: 'Açık üçgen ve uzun koridor düzeniyle site kontrolü odaklı harita.',
    difficulty: 'Orta',
    tags: ['A Site', 'Mid', 'Dikey']
  },
  {
    id: 'VAL-MAP-002',
    name: 'Bind',
    type: 'Attack / Defense',
    detail: 'Kısa ve dinamik rota planlaması gerektiren zıt harita.',
    difficulty: 'Başlangıç',
    tags: ['Short', 'Teleporter', 'A Site']
  },
  {
    id: 'VAL-MAP-003',
    name: 'Haven',
    type: 'Attack / Defense',
    detail: 'Üç siteyi aynı anda koruma ve kontrol etme gerektirir.',
    difficulty: 'İleri',
    tags: ['3 Site', 'Rotasyon', 'Utility']
  },
  {
    id: 'VAL-MAP-004',
    name: 'Icebox',
    type: 'Attack / Defense',
    detail: 'Dikey geçişler ve derin kontrol için ideal harita.',
    difficulty: 'İleri',
    tags: ['Dikey', 'A Site', 'Utility']
  },
  {
    id: 'VAL-MAP-005',
    name: 'Lotus',
    type: 'Attack / Defense',
    detail: 'Mekik ve kontrol noktaları ile oyun akışı hızlı ilerler.',
    difficulty: 'Profesyonel',
    tags: ['A Site', 'B Site', 'Rotasyon']
  },
  {
    id: 'VAL-MAP-006',
    name: 'Split',
    type: 'Attack / Defense',
    detail: 'Merkez baskısı ve A/B dengelemesi gerektirir.',
    difficulty: 'Orta',
    tags: ['Mid', 'A Site', 'B Site']
  },
  {
    id: 'VAL-MAP-007',
    name: 'Sunset',
    type: 'Attack / Defense',
    detail: 'Yüksek kontrol ve kısa baskı stratejilerini ön plana çıkarır.',
    difficulty: 'Başlangıç',
    tags: ['A Site', 'B Site', 'Kontrol']
  },
  {
    id: 'VAL-MAP-008',
    name: 'Breeze',
    type: 'Attack / Defense',
    detail: 'Açık alan ve üstünlüklü kontrol odaklı harita.',
    difficulty: 'Orta',
    tags: ['Açık alan', 'Menzil', 'Mid']
  },
  {
    id: 'VAL-MAP-009',
    name: 'Abyss',
    type: 'Attack / Defense',
    detail: 'Yüksek riskli rota ve iletişim yoğunluğu gerektirir.',
    difficulty: 'Profesyonel',
    tags: ['Rotasyon', 'Dikey', 'Site']
  }
];

const valorantWeapons = [
  { id: 'VAL-WEAPON-001', name: 'Classic', category: 'Sidearms', price: 0, damage: 26, range: 'Kısa', fireRate: 'Yüksek', reload: 'Hızlı', difficulty: 'Başlangıç', tags: ['Headshot', 'Ekonomi'] },
  { id: 'VAL-WEAPON-002', name: 'Ghost', category: 'Sidearms', price: 500, damage: 30, range: 'Orta', fireRate: 'Yüksek', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Ekonomi', 'Hızlı'] },
  { id: 'VAL-WEAPON-003', name: 'Sheriff', category: 'Sidearms', price: 800, damage: 55, range: 'Orta', fireRate: 'Düşük', reload: 'Orta', difficulty: 'İleri', tags: ['Düşük mermi', 'Patlama'] },
  { id: 'VAL-WEAPON-004', name: 'Stinger', category: 'SMG', price: 1100, damage: 27, range: 'Kısa', fireRate: 'Yüksek', reload: 'Kısa', difficulty: 'Başlangıç', tags: ['Hız', 'Push'] },
  { id: 'VAL-WEAPON-005', name: 'Spectre', category: 'SMG', price: 1600, damage: 26, range: 'Orta', fireRate: 'Yüksek', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Genel kullanım', 'Kontrol'] },
  { id: 'VAL-WEAPON-006', name: 'Judge', category: 'Shotguns', price: 1850, damage: 16, range: 'Kısa', fireRate: 'Yüksek', reload: 'Orta', difficulty: 'Orta', tags: ['Close range', 'Rush'] },
  { id: 'VAL-WEAPON-007', name: 'Bucky', category: 'Shotguns', price: 850, damage: 11, range: 'Kısa', fireRate: 'Orta', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Ekonomi', 'Push'] },
  { id: 'VAL-WEAPON-008', name: 'Bulldog', category: 'Rifles', price: 2050, damage: 35, range: 'Orta', fireRate: 'Orta', reload: 'Orta', difficulty: 'Orta', tags: ['Dengeli', 'Kontrol'] },
  { id: 'VAL-WEAPON-009', name: 'Guardian', category: 'Rifles', price: 2250, damage: 35, range: 'Orta', fireRate: 'Orta', reload: 'Orta', difficulty: 'Orta', tags: ['Push', 'Sade'] },
  { id: 'VAL-WEAPON-010', name: 'Phantom', category: 'Rifles', price: 2900, damage: 39, range: 'Uzun', fireRate: 'Orta', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Dengeli', 'Zamanlı atış'] },
  { id: 'VAL-WEAPON-011', name: 'Vandal', category: 'Rifles', price: 2900, damage: 40, range: 'Uzun', fireRate: 'Orta', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Yüksek hasar', 'Uzun menzil'] },
  { id: 'VAL-WEAPON-012', name: 'Operator', category: 'Sniper Rifles', price: 4700, damage: 120, range: 'Uzun', fireRate: 'Düşük', reload: 'Yavaş', difficulty: 'İleri', tags: ['Sniper', 'A Site'] },
  { id: 'VAL-WEAPON-013', name: 'Marshal', category: 'Sniper Rifles', price: 950, damage: 101, range: 'Uzun', fireRate: 'Orta', reload: 'Orta', difficulty: 'Başlangıç', tags: ['Ekonomi', 'Yavaş döngü'] },
  { id: 'VAL-WEAPON-014', name: 'Ares', category: 'Heavy Weapons', price: 1600, damage: 36, range: 'Uzun', fireRate: 'Yüksek', reload: 'Yavaş', difficulty: 'Orta', tags: ['İçeriye baskı', 'Açık alan'] },
  { id: 'VAL-WEAPON-015', name: 'Odin', category: 'Heavy Weapons', price: 3200, damage: 38, range: 'Uzun', fireRate: 'Yüksek', reload: 'Yavaş', difficulty: 'İleri', tags: ['Kontrol', 'Sohbet'] }
];

const valorantModes = [
  {
    id: 'VAL-MODE-001',
    name: 'Competitive',
    detail: 'En yüksek getirili ve en özenli stratejilerin yaşandığı mod.',
    difficulty: 'Profesyonel',
    tags: ['Rank', 'Round', 'Taktik']
  },
  {
    id: 'VAL-MODE-002',
    name: 'Unrated',
    detail: 'Rank kaygısı olmadan denemeler yapılabilecek serbest mod.',
    difficulty: 'Başlangıç',
    tags: ['Serbest', 'Oynama']
  },
  {
    id: 'VAL-MODE-003',
    name: 'Spike Rush',
    detail: 'Hızlı round ve daha kısa oyun akışı sunan mod.',
    difficulty: 'Başlangıç',
    tags: ['Hızlı', 'Ekonomi', 'Rank dışı']
  },
  {
    id: 'VAL-MODE-004',
    name: 'Escalation',
    detail: 'Aynı silahla ilerleme ve taktik çeviklik gerektiren mod.',
    difficulty: 'Orta',
    tags: ['Sıra', 'Açık alan', 'Yetenek']
  },
  {
    id: 'VAL-MODE-005',
    name: 'Deathmatch',
    detail: 'Düşman temizleme odaklı hızlı görünüm; reflekler ve aim gelişimi için uygun.',
    difficulty: 'Başlangıç',
    tags: ['Aim', 'Hızlı', 'Pratik']
  },
  {
    id: 'VAL-MODE-006',
    name: 'Premier',
    detail: 'Takım yönetimi ve stratejik koordinasyon gerektiren yüksek seviyeli mod.',
    difficulty: 'Profesyonel',
    tags: ['Takım', 'Lig', 'Efektif']
  }
];

const valorantTactics = [
  {
    id: 'VAL-TACTIC-001',
    title: 'A Site Execute',
    map: 'Ascent',
    side: 'Attack',
    site: 'A',
    detail: 'A site girişinde utility kombinasyonu ile site kontrolü kazanılır.',
    difficulty: 'İleri',
    tags: ['Execute', 'A Site']
  },
  {
    id: 'VAL-TACTIC-002',
    title: 'Retake B Site',
    map: 'Bind',
    side: 'Defense',
    site: 'B',
    detail: 'Retake sırasında utility ve timing odaklı yeniden ele geçirme planı.',
    difficulty: 'Profesyonel',
    tags: ['Retake', 'B Site']
  },
  {
    id: 'VAL-TACTIC-003',
    title: 'Post Plant Lotus',
    map: 'Lotus',
    side: 'Attack',
    site: 'A',
    detail: 'Spike sonrası alan kontrolü ve bölme mantığıyla kazanma.',
    difficulty: 'İleri',
    tags: ['Post Plant', 'Lotus']
  },
  {
    id: 'VAL-TACTIC-004',
    title: 'Default Mid Control',
    map: 'Split',
    side: 'Attack',
    site: 'Mid',
    detail: 'Orta baskısı ile rotasyon ve site yönlendirme sistemi.',
    difficulty: 'Orta',
    tags: ['Default', 'Mid']
  }
];

const rocketArenas = [
  { id: 'RL-ARENA-001', name: 'Beckwith Park', type: 'Klasik', detail: 'Geniş alan ve merkez baskısıyla bilinen aréna.', difficulty: 'Orta', tags: ['Merkez', 'Koordinasyon'] },
  { id: 'RL-ARENA-002', name: 'Champions Field', type: 'Profesyonel', detail: 'Dengeli ve çok yönlü kullanım sunan mekan odaklı alan.', difficulty: 'İleri', tags: ['Denge', 'Rotation'] },
  { id: 'RL-ARENA-003', name: 'Deadeye Canyon', type: 'Açık', detail: 'Geniş alanlar ve beklenmedik köşe açıları içerir.', difficulty: 'İleri', tags: ['Köşe', 'Koridor'] },
  { id: 'RL-ARENA-004', name: 'DFH Stadium', type: 'Modern', detail: 'Merkez kontrol ve kısa paslaşma için uygun yapı.', difficulty: 'Başlangıç', tags: ['Merkez', 'Kontrol'] },
  { id: 'RL-ARENA-005', name: 'Forbidden Temple', type: 'Dikey', detail: 'Yüksek durum denge ve wall play gerektiren görünüm.', difficulty: 'İleri', tags: ['Duvar', 'Dikey', 'Kontrol'] },
  { id: 'RL-ARENA-006', name: 'Mannfield', type: 'Klasik', detail: 'En dengeli ve oyuncu odaklı aréna yapılarından biri.', difficulty: 'Orta', tags: ['Top', 'Oyun akışı'] },
  { id: 'RL-ARENA-007', name: 'Neo Tokyo', type: 'Modern', detail: 'Hızlı rotasyon ve sahadaki konum kontrolünü öne çıkarır.', difficulty: 'İleri', tags: ['Hız', 'Rotation'] },
  { id: 'RL-ARENA-008', name: 'Salty Shores', type: 'Açık', detail: 'Kenar alanları ve kısa baskı geçişleri için uygun.', difficulty: 'Orta', tags: ['Kenar', 'Pas'] },
  { id: 'RL-ARENA-009', name: 'Starbase Arc', type: 'Uzay', detail: 'Yüksek mobil ve açık görüş alanıyla bilinmektedir.', difficulty: 'İleri', tags: ['Mobil', 'Boost'] },
  { id: 'RL-ARENA-010', name: 'Utopia Coliseum', type: 'Modern', detail: 'Orta alan etkisiyle ileri ve savunma dengesi gerektirir.', difficulty: 'Orta', tags: ['Denge', 'Savunma'] },
  { id: 'RL-ARENA-011', name: 'Urban Central', type: 'Şehir', detail: 'Açı ve wall play hassasiyetini öne çıkaran arena.', difficulty: 'Orta', tags: ['Wall', 'Açılar'] },
  { id: 'RL-ARENA-012', name: 'Wasteland', type: 'Çorak', detail: 'Boşluk ve momentum kontrolünde güçlü stratejiler üretir.', difficulty: 'Profesyonel', tags: ['Momentum', 'Boşluk'] }
];

const rocketModes = [
  { id: 'RL-MODE-001', name: '1v1', detail: 'Tek oyuncu baskısı ve savunma çözümlemesi için en zorlu kısa mod.', difficulty: 'İleri', tags: ['Boost', 'Düşman', 'Savunma'] },
  { id: 'RL-MODE-002', name: '2v2', detail: 'Takım koordinasyonu ve boost paylaşımı önemlidir.', difficulty: 'Orta', tags: ['Takım', 'Rotasyon', 'Boost'] },
  { id: 'RL-MODE-003', name: '3v3', detail: 'En yaygın ve yüksek stratejik oyunda rotasyon ve geçiş kritiktir.', difficulty: 'Orta', tags: ['Takım', 'Rotation', 'Transition'] },
  { id: 'RL-MODE-004', name: '4v4', detail: 'Oyun alanında verimlilik ve sahadaki alan kontrolü kritik olur.', difficulty: 'Orta', tags: ['Alan', 'Boost', 'Takım'] },
  { id: 'RL-MODE-005', name: 'Hoops', detail: 'Top ve basket için hızlı açı ve koordinasyon gerektirir.', difficulty: 'Başlangıç', tags: ['Açılar', 'İş birlik'] },
  { id: 'RL-MODE-006', name: 'Dropshot', detail: 'Top düşüş dinamiği ve stratejik car play ile kazanılır.', difficulty: 'İleri', tags: ['Düşüş', 'Isabet'] },
  { id: 'RL-MODE-007', name: 'Snow Day', detail: 'Slippery koşullar ve kontrolü zorlaştıran özel mod.', difficulty: 'Orta', tags: ['Hız', 'Control'] },
  { id: 'RL-MODE-008', name: 'Rumble', detail: 'Açık kullanım ve farklı güç düzenleri ile hareketli mod.', difficulty: 'Başlangıç', tags: ['Power-up', 'Hızlı'] }
];

const rocketMechanics = [
  { id: 'RL-MECHANIC-001', name: 'Dribbling', detail: 'Topu kontrol altında taşıma ve pozisyon tutma tekniği.', difficulty: 'Başlangıç', tags: ['Kontrol', 'Pozisyon'] },
  { id: 'RL-MECHANIC-002', name: 'Flick', detail: 'Yüksek hızla topa vurup etkili kısa vuruş yaratma.', difficulty: 'Orta', tags: ['Top', 'Hız'] },
  { id: 'RL-MECHANIC-003', name: 'Air Dribble', detail: 'Havada top kontrolünü artıran ileri seviye mekanik.', difficulty: 'İleri', tags: ['Hava', 'Kontrol'] },
  { id: 'RL-MECHANIC-004', name: 'Fast Aerial', detail: 'Hızlı havada boşluk oluşturma ve düzenli temas üretme.', difficulty: 'İleri', tags: ['Havada', 'İleri'] },
  { id: 'RL-MECHANIC-005', name: 'Double Tap', detail: 'Ardışık iki vuruşla topu yönlendirme ve yön kaybı azaltma.', difficulty: 'Orta', tags: ['Çift atış', 'Kontrol'] },
  { id: 'RL-MECHANIC-006', name: 'Ceiling Shot', detail: 'Tavan yönlü şut ve kafa üstü amaçlı atış tekniği.', difficulty: 'İleri', tags: ['Şut', 'Yüksek açı'] },
  { id: 'RL-MECHANIC-007', name: 'Flip Reset', detail: 'Hızlı toplama ve pozisyon düzeni için kritik mekanik.', difficulty: 'İleri', tags: ['Flip', 'Reset'] },
  { id: 'RL-MECHANIC-008', name: 'Musty Flick', detail: 'İleri düzleştirilmiş flick ve topa yerden enerjiyi ulaştırma.', difficulty: 'Profesyonel', tags: ['Flick', 'İleri düzlem'] },
  { id: 'RL-MECHANIC-009', name: 'Wave Dash', detail: 'Darbe ve sprint kombinasyonuyla hareket hacmi artırır.', difficulty: 'İleri', tags: ['Hareket', 'Boost'] },
  { id: 'RL-MECHANIC-010', name: 'Half Flip', detail: 'Ana rotasyon ve yön değişikliği sonrası hız kazanımı sağlar.', difficulty: 'Orta', tags: ['Rotasyon', 'Geri dönüş'] },
  { id: 'RL-MECHANIC-011', name: 'Speed Flip', detail: 'Yüksek hızla pozisyon almada güçlü araçtır.', difficulty: 'Orta', tags: ['Hız', 'Boost'] },
  { id: 'RL-MECHANIC-012', name: 'Air Roll', detail: 'Havada yön kontrolü ve top kontrolü sağlar.', difficulty: 'Başlangıç', tags: ['Hava', 'Kontrol'] },
  { id: 'RL-MECHANIC-013', name: 'Wall Play', detail: 'Duvar üzerinde top kontrolü ve pozisyon almak için kullanılır.', difficulty: 'Orta', tags: ['Duvar', 'Açı'] },
  { id: 'RL-MECHANIC-014', name: 'Backboard', detail: 'Arka üstten topu yönlendirerek pas ve şut fırsatı yaratır.', difficulty: 'İleri', tags: ['Backboard', 'Şut'] },
  { id: 'RL-MECHANIC-015', name: 'Recovery', detail: 'Düşüş ve yeniden pozisyon alma mekanik düzenidir.', difficulty: 'Başlangıç', tags: ['Pozisyon', 'Kontrol'] }
];

const rocketTactics = [
  { id: 'RL-TACTIC-001', title: 'Kickoff 3v3', map: 'DFH Stadium', side: 'Attack', detail: 'Kickoff süresinde top kontrolü ve başlangıç rotasyonu.', difficulty: 'Orta', tags: ['Kickoff', '3v3'] },
  { id: 'RL-TACTIC-002', title: 'Shadow Defense', map: 'Neo Tokyo', side: 'Defense', detail: 'Rakibin baskının dışında kalıp karşılama temelli savunma.', difficulty: 'İleri', tags: ['Defense', 'Shadow'] },
  { id: 'RL-TACTIC-003', title: 'Transition Press', map: 'Mannfield', side: 'Attack', detail: 'Top kaybından sonra hızlı geçiş ve çoklu rotasyon baskısı.', difficulty: 'Orta', tags: ['Transition', 'Pressure'] },
  { id: 'RL-TACTIC-004', title: 'Boost Stack Rotation', map: 'Beckwith Park', side: 'Defense', detail: 'Boost paylaşımı ile çoklu baskı önleme planı.', difficulty: 'Profesyonel', tags: ['Boost', 'Rotation'] }
];

const rankGuides = [
  { id: 'RL-RANK-001', name: 'Bronze', detail: 'Temel hareket ve kontrol sistemi öğrenilir.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-002', name: 'Silver', detail: 'Ayrıt ve rotasyon mantığı kavranır.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-003', name: 'Gold', detail: 'Boost kullanımı ve pas yönlendirmeleri önem kazanır.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-004', name: 'Platinum', detail: 'Modern oyun akışı ve baskı yönetimi geliştirilir.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-005', name: 'Diamond', detail: 'Teknik kararlar ve pozisyon kontrolü kritik hale gelir.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-006', name: 'Champion', detail: 'Konumlama, boost planı ve geçiş düzeni anahtar olmalıdır.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-007', name: 'Grand Champion', detail: 'Profesyonel seviyede karar alma ve kendi oyun kalitesi gerektirir.', type: 'Rank Guide', game: 'Rocket League' },
  { id: 'RL-RANK-008', name: 'Supersonic Legend', detail: 'Toplam kontrol, boğa sürüş ve olasılık yönetimi ön plandadır.', type: 'Rank Guide', game: 'Rocket League' }
];

const guideList = [
  { id: 'GUIDE-001', title: 'Jett için girişi kıran 3 temel pozisyon', game: 'VALORANT', type: 'Rehber', detail: 'Fast entry ve flanking işe yaraması için düşük riskli pozisyon planı.' },
  { id: 'GUIDE-002', title: 'A Site retake düzeni', game: 'VALORANT', type: 'Rehber', detail: 'Retake sırasında utility ve pozisyon önceliğini belirleyen sistem.' },
  { id: 'GUIDE-003', title: 'Rocket League rank yükseltme sistemi', game: 'ROCKET LEAGUE', type: 'Rehber', detail: 'Bronze - Gold arası kısa hedefler ve oyun mantığı rehberi.' },
  { id: 'GUIDE-004', title: 'Speed Flip akışı', game: 'ROCKET LEAGUE', type: 'Rehber', detail: 'Boost yönetimiyle daha verimli palet ve rotation düzeni.' }
];

const recentContent = [
  { game: 'valorant', badge: 'VALORANT', title: 'Astra utility kontrol planı', meta: 'Yeni içerik', detail: 'Astra ile 3 fonksiyonlu portal ve site kilidi için uygulamalı plan.', type: 'Ajan' },
  { game: 'rocket', badge: 'ROCKET', title: '3v3 kickoff rotasyonu', meta: 'Öne çıkan', detail: 'Oyun başında rahat ve kontrollü pozisyon kapatma sistemi.', type: 'Taktik' },
  { game: 'valorant', badge: 'VALORANT', title: 'Bind B Site retake', meta: 'Yeni içerik', detail: 'Rakip retake anında iletişim ve utility kombo sistemi.', type: 'Harita' },
  { game: 'rocket', badge: 'ROCKET', title: 'Wave Dash rehberi', meta: 'Mekanik', detail: 'Boost ile hareket açısı ve hız düzeni için pratik yöntemler.', type: 'Mekanik' },
  { game: 'valorant', badge: 'VALORANT', title: 'Lotus post plant planı', meta: 'Taktik', detail: 'Spike sonrası bekleme, safe zone ve utility yapısı.', type: 'Taktik' },
  { game: 'rocket', badge: 'ROCKET', title: 'Rank rehberi: Diamond', meta: 'Rehber', detail: 'Diamond seviyesinde bilginin ötesinde kararlar ve pozisyon.' , type: 'Rank' }
];

const popularTactics = [
  { title: 'A Site Execute', game: 'VALORANT', badge: 'VALORANT', detail: 'Timed utility, smoke ve peek planı.', type: 'Execute' },
  { title: 'Mid Control Split', game: 'VALORANT', badge: 'VALORANT', detail: 'Mid baskısı ile site elde tutma ve retake planı.', type: 'Default' },
  { title: 'Kickoff 3v3', game: 'ROCKET LEAGUE', badge: 'ROCKET', detail: 'Başlangıçta üçlü sıralama ve top kontrolü.', type: 'Kickoff' },
  { title: 'Rotation Pressure', game: 'ROCKET LEAGUE', badge: 'ROCKET', detail: 'Boost yönetimi ve geçiş baskısı oluşturma.', type: 'Pressure' }
];

const state = {
  activeGame: 'valorant',
  activeCategory: 'Ajanlar',
  currentTag: 'all',
  searchTerm: '',
  miniSearch: ''
};

function getGameCategories(game) {
  if (game === 'valorant') {
    return ['Ajanlar', 'Haritalar', 'Silahlar', 'Modlar', 'Taktikler'];
  }

  return ['Arenalar', 'Modlar', 'Mekanikler', 'Taktikler', 'Rank Rehberleri'];
}

function getGameData(game, category) {
  if (game === 'valorant') {
    if (category === 'Ajanlar') return valorantAgents;
    if (category === 'Haritalar') return valorantMaps;
    if (category === 'Silahlar') return valorantWeapons;
    if (category === 'Modlar') return valorantModes;
    if (category === 'Taktikler') return valorantTactics;
  }

  if (game === 'rocket') {
    if (category === 'Arenalar') return rocketArenas;
    if (category === 'Modlar') return rocketModes;
    if (category === 'Mekanikler') return rocketMechanics;
    if (category === 'Taktikler') return rocketTactics;
    if (category === 'Rank Rehberleri') return rankGuides;
  }

  return [];
}

function renderRecentContent() {
  const items = recentContent.filter((item) => {
    if (state.currentTag === 'all') return true;
    if (state.currentTag === 'valorant') return item.game === 'valorant';
    if (state.currentTag === 'rocket') return item.game === 'rocket';
    if (state.currentTag === 'tactic') return item.type.toLowerCase().includes('taktik') || item.title.toLowerCase().includes('taktik');
    if (state.currentTag === 'guide') return item.type.toLowerCase().includes('rehber') || item.type === 'Rank';
    return true;
  });

  const filtered = applyGlobalSearch(items);
  document.getElementById('recentContent').innerHTML = filtered
    .slice(0, 6)
    .map(
      (item) => `
        <article class="content-card">
          <div class="card-header">
            <span class="card-badge ${item.game === 'valorant' ? 'val' : 'rl'}">${item.badge}</span>
            <span class="card-meta">${item.meta}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <div class="card-footer">
            <span class="card-pill">${item.type}</span>
            <span>${item.game === 'valorant' ? 'VALORANT' : 'ROCKET LEAGUE'}</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderPopularTactics() {
  const filtered = applyGlobalSearch(popularTactics);
  document.getElementById('popularTactics').innerHTML = filtered
    .slice(0, 4)
    .map(
      (item) => `
        <article class="content-card">
          <div class="card-header">
            <span class="card-badge ${item.game === 'VALORANT' ? 'val' : 'rl'}">${item.badge}</span>
            <span class="card-meta">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <div class="card-footer">
            <span class="card-pill">${item.game}</span>
            <span>Profesyonel</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderFeaturedGuides() {
  const filtered = applyGlobalSearch(guideList);
  document.getElementById('featuredGuides').innerHTML = filtered
    .slice(0, 4)
    .map(
      (item) => `
        <article class="content-card">
          <div class="card-header">
            <span class="card-badge ${item.game === 'VALORANT' ? 'val' : 'rl'}">${item.game}</span>
            <span class="card-meta">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <div class="card-footer">
            <span class="card-pill">${item.type}</span>
            <span>Güncel</span>
          </div>
        </article>
      `
    )
    .join('');
}

function renderGuideGrid() {
  const filtered = applyGlobalSearch(guideList.concat(rankGuides.map((item) => ({ ...item, game: 'ROCKET LEAGUE', type: 'Rank Guide', title: `${item.name} Rank Rehberi`, detail: item.detail }))))
  document.getElementById('guideGrid').innerHTML = filtered
    .slice(0, 6)
    .map(
      (item) => `
        <article class="content-card">
          <div class="card-header">
            <span class="card-badge ${item.game === 'VALORANT' ? 'val' : 'rl'}">${item.game}</span>
            <span class="card-meta">${item.type}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
          <div class="card-footer">
            <span class="card-pill">${item.type}</span>
            <span>Akış</span>
          </div>
        </article>
      `
    )
    .join('');
}

function applyGlobalSearch(items) {
  const query = (state.searchTerm || '').trim().toLowerCase();
  if (!query) return items;

  return items.filter((item) => {
    const haystack = [
      item.name,
      item.title,
      item.role,
      item.map,
      item.type,
      item.category,
      item.game,
      item.detail,
      item.tags,
      item.side,
      item.site,
      item.meta
    ]
      .flat()
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}

function renderDatabase() {
  const categories = getGameCategories(state.activeGame);
  const categorySelect = document.getElementById('categorySelect');
  categorySelect.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');
  categorySelect.value = state.activeCategory;

  const items = getGameData(state.activeGame, state.activeCategory);
  const filtered = applyDatabaseSearch(items);

  document.getElementById('databaseTitle').textContent =
    state.activeGame === 'valorant' ? 'VALORANT Veritabanı' : 'Rocket League Veritabanı';

  document.getElementById('databaseGrid').innerHTML = filtered
    .map((item) => {
      const tags = Array.isArray(item.tags) ? item.tags : []; 
      const tagHtml = tags.slice(0, 3).map((tag) => `<span class="meta-tag">${tag}</span>`).join('');

      return `
        <article class="database-card">
          <div class="card-header">
            <span class="card-badge ${state.activeGame === 'valorant' ? 'val' : 'rl'}">${state.activeGame === 'valorant' ? 'VAL' : 'RL'}</span>
            <span class="card-meta">${item.difficulty || 'Orta'}</span>
          </div>

          <div class="meta-row">
            ${tagHtml}
          </div>

          <h3>${item.name || item.title}</h3>
          <p>${item.detail || item.description || 'Profesyonel içerik açıklaması.'}</p>

          <div class="card-footer">
            <span class="card-pill">${state.activeCategory}</span>
            <span>${item.role || item.type || item.category || 'Genel'}</span>
          </div>
        </article>
      `;
    })
    .join('');
}

function applyDatabaseSearch(items) {
  const query = (state.miniSearch || '').trim().toLowerCase();
  const difficulty = document.getElementById('difficultySelect').value;

  return items.filter((item) => {
    const matchesQuery = !query || [item.name, item.title, item.detail, item.role, item.map, item.type, item.category, ...(item.tags || [])].join(' ').toLowerCase().includes(query);
    const matchesDifficulty = difficulty === 'all' || (item.difficulty || 'Orta') === difficulty;
    return matchesQuery && matchesDifficulty;
  });
}

function attachEvents() {
  document.querySelectorAll('.game-card').forEach((card) => {
    card.addEventListener('click', () => {
      const game = card.dataset.gameSelect;
      state.activeGame = game;
      document.querySelectorAll('.game-card').forEach((el) => el.classList.toggle('active', el.dataset.gameSelect === game));
      document.querySelectorAll('.game-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.game === game));
      const defaultCategory = getGameCategories(game)[0];
      state.activeCategory = defaultCategory;
      renderDatabase();
      document.getElementById('database').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-game-select]').forEach((element) => {
    element.addEventListener('click', () => {
      const game = element.dataset.gameSelect;
      if (game === 'valorant') {
        document.getElementById('database').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        document.getElementById('database').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      state.activeGame = game;
      document.querySelectorAll('.game-card').forEach((card) => card.classList.toggle('active', card.dataset.gameSelect === game));
      document.querySelectorAll('.game-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.game === game));
      state.activeCategory = getGameCategories(game)[0];
      renderDatabase();
    });
  });

  document.querySelectorAll('.game-tab').forEach((button) => {
    button.addEventListener('click', () => {
      const game = button.dataset.game;
      state.activeGame = game;
      state.activeCategory = getGameCategories(game)[0];
      document.querySelectorAll('.game-card').forEach((card) => card.classList.toggle('active', card.dataset.gameSelect === game));
      document.querySelectorAll('.game-tab').forEach((btn) => btn.classList.toggle('active', btn.dataset.game === game));
      renderDatabase();
    });
  });

  document.getElementById('categorySelect').addEventListener('change', (event) => {
    state.activeCategory = event.target.value;
    renderDatabase();
  });

  document.getElementById('difficultySelect').addEventListener('change', () => {
    renderDatabase();
  });

  document.getElementById('miniSearch').addEventListener('input', (event) => {
    state.miniSearch = event.target.value;
    renderDatabase();
  });

  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.searchTerm = event.target.value;
    renderRecentContent();
    renderPopularTactics();
    renderFeaturedGuides();
    renderGuideGrid();
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    renderRecentContent();
    renderPopularTactics();
    renderFeaturedGuides();
    renderGuideGrid();
  });

  document.querySelectorAll('.tag-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.tag-chip').forEach((item) => item.classList.toggle('active', item === chip));
      state.currentTag = chip.dataset.tag;
      renderRecentContent();
      renderPopularTactics();
      renderFeaturedGuides();
      renderGuideGrid();
    });
  });

  document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('mobile-open');
  });
}

function init() {
  renderRecentContent();
  renderPopularTactics();
  renderFeaturedGuides();
  renderGuideGrid();
  renderDatabase();
  attachEvents();
}

init();
