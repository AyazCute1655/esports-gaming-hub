const data = {
  valorant: {
    agents: [
      { id: 'VAL-AGENT-001', name: 'Astra', role: 'Controller', difficulty: 'Profesyonel', detail: 'Küresel yetenek kontrolüyle yönü değiştiren astral kontrol ajanı.', tags: ['Kontrol', 'Harita', 'Yetenek'] },
      { id: 'VAL-AGENT-002', name: 'Breach', role: 'Initiator', difficulty: 'Orta', detail: 'Flash ve stun ile girişleri kıran agresif giriş ajanı.', tags: ['Giriş', 'Flash', 'Stun'] },
      { id: 'VAL-AGENT-003', name: 'Brimstone', role: 'Controller', difficulty: 'Başlangıç', detail: 'İttifak ve ikaz yetenekleriyle site baskısını yöneten lider.', tags: ['Kontrol', 'Site', 'Açık alan'] },
      { id: 'VAL-AGENT-004', name: 'Chamber', role: 'Sentinel', difficulty: 'İleri', detail: 'Uzun menzil baskısı ve güvenlik düzeniyle kilitlenen ajan.', tags: ['Sniper', 'Güvenlik', 'Kontrol'] },
      { id: 'VAL-AGENT-005', name: 'Clove', role: 'Controller', difficulty: 'Orta', detail: 'İkili faydalar ve müdafaa yetenekleriyle denge kuran ajan.', tags: ['İkili', 'Savunma', 'Utility'] },
      { id: 'VAL-AGENT-006', name: 'Cypher', role: 'Sentinel', difficulty: 'Başlangıç', detail: 'İstihbarat ve kilitlenme kusursuzluk oluşturan bilgi ajanı.', tags: ['İstihbarat', 'Savunma', 'Kilit'] },
      { id: 'VAL-AGENT-007', name: 'Deadlock', role: 'Sentinel', difficulty: 'İleri', detail: 'Yüksek kontrol, kapama ve engelleme kale taşı.', tags: ['Engel', 'Kontrol', 'Açık alan'] },
      { id: 'VAL-AGENT-008', name: 'Fade', role: 'Initiator', difficulty: 'İleri', detail: 'Takip, flash ve şekil bozucu girişciliğin temsili.', tags: ['Tespit', 'Flash', 'Giriş'] },
      { id: 'VAL-AGENT-009', name: 'Gekko', role: 'Initiator', difficulty: 'Başlangıç', detail: 'Köpek arkadaşlarıyla agresif iş birlikçi giriş.', tags: ['İş birlik', 'Giriş', 'Harita'] },
      { id: 'VAL-AGENT-010', name: 'Harbor', role: 'Controller', difficulty: 'Orta', detail: 'Su kontrolü ve alan kısıtlamasıyla site baskısı kuran ajan.', tags: ['Su', 'Kontrol', 'Duraklatma'] },
      { id: 'VAL-AGENT-011', name: 'Iso', role: 'Duelist', difficulty: 'İleri', detail: 'Bireysel performans ve 1v1 üstünlüğünü ön plana çıkaran ajan.', tags: ['Duel', '1v1', 'Saldırı'] },
      { id: 'VAL-AGENT-012', name: 'Jett', role: 'Duelist', difficulty: 'İleri', detail: 'Hız, hareket ve çeviklik odaklı agresif temizlik ajanı.', tags: ['Çeviklik', 'Entry', 'Açık alan'] },
      { id: 'VAL-AGENT-013', name: 'KAY/O', role: 'Initiator', difficulty: 'Orta', detail: 'Sinyal ve kontrol odaklı giriş yetenekleriyle bölge baskısı kurar.', tags: ['Sinyal', 'Giriş', 'Kontrol'] },
      { id: 'VAL-AGENT-014', name: 'Killjoy', role: 'Sentinel', difficulty: 'Başlangıç', detail: 'Savunma mekanikleriyle site zaptı ve defansif kontrol sağlar.', tags: ['Savunma', 'Engel', 'Kontrol'] },
      { id: 'VAL-AGENT-015', name: 'Neon', role: 'Duelist', difficulty: 'İleri', detail: 'Hızlı baskı ve yüksek riskli temizleme operasyonları için ideal.', tags: ['Hız', 'Rush', 'Entry'] },
      { id: 'VAL-AGENT-016', name: 'Omen', role: 'Controller', difficulty: 'Orta', detail: 'Dikey çakışma ve görsel kontrolle site dışı baskı kurar.', tags: ['Dikey', 'Kontrol', 'Görsel'] },
      { id: 'VAL-AGENT-017', name: 'Phoenix', role: 'Duelist', difficulty: 'Başlangıç', detail: 'Kendi yarattığı alan ve hızlı giriş avantajı sunar.', tags: ['Açık alan', 'Duel', 'Giriş'] },
      { id: 'VAL-AGENT-018', name: 'Raze', role: 'Duelist', difficulty: 'Başlangıç', detail: 'Patlayıcı kontrollü ve hızlı site girişleri için tasarlanmış ajan.', tags: ['Patlayıcı', 'Entry', 'Saldırı'] },
      { id: 'VAL-AGENT-019', name: 'Reyna', role: 'Duelist', difficulty: 'İleri', detail: 'Kafayı doğru çeken ve tekli öldürmede uyum sağlayan agresif ajan.', tags: ['Kill', 'Duel', 'Aşırı baskı'] },
      { id: 'VAL-AGENT-020', name: 'Sage', role: 'Sentinel', difficulty: 'Başlangıç', detail: 'Can kurtarma, alan kontrolü ve savunma düzeni için temel ajan.', tags: ['Savunma', 'Can', 'Kontrol'] },
      { id: 'VAL-AGENT-021', name: 'Skye', role: 'Initiator', difficulty: 'Orta', detail: 'İnfo ve pozisyon baskısı sağlayan çok yönlü destek ajanı.', tags: ['Bilgi', 'Giriş', 'Pozisyon'] },
      { id: 'VAL-AGENT-022', name: 'Sova', role: 'Initiator', difficulty: 'Orta', detail: 'İstihbarat ve uzun menzil vurgu için profesyonel seçim.', tags: ['İstihbarat', 'Uzun menzil', 'Harita'] },
      { id: 'VAL-AGENT-023', name: 'Viper', role: 'Controller', difficulty: 'Profesyonel', detail: 'Zehir ve kontrol alanıyla site kapanı ve retake baskısı sağlar.', tags: ['Zehir', 'Kontrol', 'Retake'] },
      { id: 'VAL-AGENT-024', name: 'Waylay', role: 'Duelist', difficulty: 'İleri', detail: 'Hızlı noktaya konumlanma ve agresif çekiliş metası sunan ajan.', tags: ['Hız', 'Giriş', 'Duel'] },
      { id: 'VAL-AGENT-025', name: 'Yoru', role: 'Duelist', difficulty: 'Profesyonel', detail: 'Fake giriş, taktik sahte pozisyon ve pik kontrolü uzmanı.', tags: ['Fake', 'Taklit', 'Hareket'] }
    ],
    maps: [
      { id: 'VAL-MAP-001', name: 'Ascent', role: 'Harita', difficulty: 'Orta', detail: 'Açık üçgen ve uzun koridor düzeniyle site kontrolü odaklı harita.', tags: ['A Site', 'Mid', 'Dikey'] },
      { id: 'VAL-MAP-002', name: 'Bind', role: 'Harita', difficulty: 'Başlangıç', detail: 'Kısa ve dinamik rota planlaması gerektiren zıt harita.', tags: ['Short', 'Teleporter', 'A Site'] },
      { id: 'VAL-MAP-003', name: 'Haven', role: 'Harita', difficulty: 'İleri', detail: 'Üç siteyi aynı anda koruma ve kontrol etme gerektirir.', tags: ['3 Site', 'Rotasyon', 'Utility'] },
      { id: 'VAL-MAP-004', name: 'Icebox', role: 'Harita', difficulty: 'İleri', detail: 'Dikey geçişler ve derin kontrol için ideal harita.', tags: ['Dikey', 'A Site', 'Utility'] },
      { id: 'VAL-MAP-005', name: 'Lotus', role: 'Harita', difficulty: 'Profesyonel', detail: 'Mekik ve kontrol noktaları ile oyun akışı hızlı ilerler.', tags: ['A Site', 'B Site', 'Rotasyon'] },
      { id: 'VAL-MAP-006', name: 'Split', role: 'Harita', difficulty: 'Orta', detail: 'Merkez baskısı ve A/B dengelemesi gerektirir.', tags: ['Mid', 'A Site', 'B Site'] },
      { id: 'VAL-MAP-007', name: 'Sunset', role: 'Harita', difficulty: 'Başlangıç', detail: 'Yüksek kontrol ve kısa baskı stratejilerini ön plana çıkarır.', tags: ['A Site', 'B Site', 'Kontrol'] },
      { id: 'VAL-MAP-008', name: 'Breeze', role: 'Harita', difficulty: 'Orta', detail: 'Açık alan ve üstünlüklü kontrol odaklı harita.', tags: ['Açık alan', 'Menzil', 'Mid'] },
      { id: 'VAL-MAP-009', name: 'Abyss', role: 'Harita', difficulty: 'Profesyonel', detail: 'Yüksek riskli rota ve iletişim yoğunluğu gerektirir.', tags: ['Rotasyon', 'Dikey', 'Site'] }
    ],
    weapons: [
      { id: 'VAL-WEAPON-001', name: 'Classic', role: 'Sidearms', difficulty: 'Başlangıç', detail: 'Ana neden olarak ekonomik ve güvenli atış desteği sunar.', tags: ['Headshot', 'Ekonomi', 'Hızlı'] },
      { id: 'VAL-WEAPON-002', name: 'Ghost', role: 'Sidearms', difficulty: 'Başlangıç', detail: 'Dengeli atış ve doğru kontrol için uygun tarafsız silah.', tags: ['Ekonomi', 'Hızlı', 'Dengeli'] },
      { id: 'VAL-WEAPON-003', name: 'Sheriff', role: 'Sidearms', difficulty: 'İleri', detail: 'Yüksek hasar ve tekli temizlik için güçlü alternatif.', tags: ['Yüksek hasar', 'Risk', 'Güçlü'] },
      { id: 'VAL-WEAPON-004', name: 'Stinger', role: 'SMG', difficulty: 'Başlangıç', detail: 'Hızlı ve agresif girişlerde öne çıkar.', tags: ['Push', 'Hız', 'Kısa menzil'] },
      { id: 'VAL-WEAPON-005', name: 'Spectre', role: 'SMG', difficulty: 'Başlangıç', detail: 'Geniş kullanım ve dengeli kontrol sağlar.', tags: ['Genel kullanım', 'Kontrol', 'Dengeli'] },
      { id: 'VAL-WEAPON-006', name: 'Judge', role: 'Shotguns', difficulty: 'Orta', detail: 'Yüksek kapatma gücü ve saldırı anlarında kritik.', tags: ['Close range', 'Rush', 'Hızlı'] },
      { id: 'VAL-WEAPON-007', name: 'Bucky', role: 'Shotguns', difficulty: 'Başlangıç', detail: 'Ekonomi ve kararlı giriş için temel shotgun.', tags: ['Ekonomi', 'Push', 'Güvenli'] },
      { id: 'VAL-WEAPON-008', name: 'Bulldog', role: 'Rifles', difficulty: 'Orta', detail: 'Dengeli isabet ve saldırı kontrolü sunar.', tags: ['Dengeli', 'Kontrol', 'Saldırı'] },
      { id: 'VAL-WEAPON-009', name: 'Guardian', role: 'Rifles', difficulty: 'Orta', detail: 'Güvenilir menzil baskısı ve kontrol.', tags: ['Push', 'Sağlam', 'Dengeli'] },
      { id: 'VAL-WEAPON-010', name: 'Phantom', role: 'Rifles', difficulty: 'Başlangıç', detail: 'Yüksek kontrol ve genel kullanım için en stabil seçim.', tags: ['Dengeli', 'Kontrol', 'Uzun menzil'] },
      { id: 'VAL-WEAPON-011', name: 'Vandal', role: 'Rifles', difficulty: 'Başlangıç', detail: 'Yüksek hasar ve uzun menzil baskısı için çok güçlü.', tags: ['Yüksek hasar', 'Uzun menzil', 'Açık alan'] },
      { id: 'VAL-WEAPON-012', name: 'Operator', role: 'Sniper Rifles', difficulty: 'İleri', detail: 'Ultra uzun menzilli özel hedef ve site kontrolü.', tags: ['Sniper', 'A Site', 'Riskli'] },
      { id: 'VAL-WEAPON-013', name: 'Marshal', role: 'Sniper Rifles', difficulty: 'Başlangıç', detail: 'Ekonomik sniper ve hedef baskısı için güçlü seçenek.', tags: ['Ekonomi', 'Hedef', 'Kontrol'] },
      { id: 'VAL-WEAPON-014', name: 'Ares', role: 'Heavy Weapons', difficulty: 'Orta', detail: 'Açık alan kontrolü ve site baskısı için güvenilir ağır silah.', tags: ['Açık alan', 'Kontrol', 'Ağır'] },
      { id: 'VAL-WEAPON-015', name: 'Odin', role: 'Heavy Weapons', difficulty: 'İleri', detail: 'İleri seviye baskı ve kilitlenme gücü.', tags: ['Kontrol', 'Ağır', 'Site'] }
    ],
    modes: [
      { id: 'VAL-MODE-001', name: 'Competitive', role: 'Oyun modu', difficulty: 'Profesyonel', detail: 'En yüksek getirili ve en özenli stratejilerin yaşandığı mod.', tags: ['Rank', 'Round', 'Taktik'] },
      { id: 'VAL-MODE-002', name: 'Unrated', role: 'Oyun modu', difficulty: 'Başlangıç', detail: 'Rank kaygısı olmadan denemeler yapılabilecek serbest mod.', tags: ['Serbest', 'Oynama', 'Pratik'] },
      { id: 'VAL-MODE-003', name: 'Spike Rush', role: 'Oyun modu', difficulty: 'Başlangıç', detail: 'Hızlı round ve daha kısa oyun akışı sunan mod.', tags: ['Hızlı', 'Ekonomi', 'Rank dışı'] },
      { id: 'VAL-MODE-004', name: 'Escalation', role: 'Oyun modu', difficulty: 'Orta', detail: 'Aynı silahla ilerleme ve taktik çeviklik gerektiren mod.', tags: ['Sıra', 'Açık alan', 'Yetenek'] },
      { id: 'VAL-MODE-005', name: 'Deathmatch', role: 'Oyun modu', difficulty: 'Başlangıç', detail: 'Düşman temizleme odaklı hızlı görünüm; refleksler ve aim gelişimi için uygun.', tags: ['Aim', 'Hızlı', 'Pratik'] },
      { id: 'VAL-MODE-006', name: 'Premier', role: 'Oyun modu', difficulty: 'Profesyonel', detail: 'Takım yönetimi ve stratejik koordinasyon gerektiren yüksek seviyeli mod.', tags: ['Takım', 'Lig', 'Efektif'] }
    ],
    tactics: [
      { id: 'VAL-TACTIC-001', name: 'A Site Execute', role: 'Execute', difficulty: 'İleri', detail: 'A site girişinde utility kombinasyonu ile site kontrolü kazanılır.', tags: ['A Site', 'Execute', 'Utility'] },
      { id: 'VAL-TACTIC-002', name: 'Retake B Site', role: 'Retake', difficulty: 'Profesyonel', detail: 'Retake sırasında utility ve timing odaklı yeniden ele geçirme planı.', tags: ['B Site', 'Retake', 'Timing'] },
      { id: 'VAL-TACTIC-003', name: 'Post Plant Lotus', role: 'Post Plant', difficulty: 'İleri', detail: 'Spike sonrası alan kontrolü ve bölme mantığıyla kazanma.', tags: ['Post Plant', 'Lotus', 'Kontrol'] },
      { id: 'VAL-TACTIC-004', name: 'Default Mid Control', role: 'Default', difficulty: 'Orta', detail: 'Orta baskısı ile rotasyon ve site yönlendirme sistemi.', tags: ['Default', 'Mid', 'Rotasyon'] }
    ]
  },
  rocket: {
    arenas: [
      { id: 'RL-ARENA-001', name: 'Beckwith Park', role: 'Arena', difficulty: 'Orta', detail: 'Geniş alan ve merkez baskısıyla bilinen klasik aréna.', tags: ['Merkez', 'Koordinasyon', 'Kontrol'] },
      { id: 'RL-ARENA-002', name: 'Champions Field', role: 'Arena', difficulty: 'İleri', detail: 'Dengeli ve çok yönlü kullanım sunan profesyonel saha.', tags: ['Denge', 'Rotation', 'Pasuç'] },
      { id: 'RL-ARENA-003', name: 'Deadeye Canyon', role: 'Arena', difficulty: 'İleri', detail: 'Geniş alanlar ve beklenmedik köşe açıları içerir.', tags: ['Köşe', 'Koridor', 'Açılar'] },
      { id: 'RL-ARENA-004', name: 'DFH Stadium', role: 'Arena', difficulty: 'Başlangıç', detail: 'Merkez kontrol ve kısa paslaşma için uygun yapı.', tags: ['Merkez', 'Kontrol', 'Pasaç'] },
      { id: 'RL-ARENA-005', name: 'Forbidden Temple', role: 'Arena', difficulty: 'İleri', detail: 'Yüksek durum denge ve wall play gerektiren görünüm.', tags: ['Duvar', 'Dikey', 'Kontrol'] },
      { id: 'RL-ARENA-006', name: 'Mannfield', role: 'Arena', difficulty: 'Orta', detail: 'En dengeli ve oyuncu odaklı aréna yapılarından biri.', tags: ['Top', 'Akış', 'Denge'] },
      { id: 'RL-ARENA-007', name: 'Neo Tokyo', role: 'Arena', difficulty: 'İleri', detail: 'Hızlı rotasyon ve sahadaki konum kontrolünü öne çıkarır.', tags: ['Hız', 'Rotation', 'Boost'] },
      { id: 'RL-ARENA-008', name: 'Salty Shores', role: 'Arena', difficulty: 'Orta', detail: 'Kenar alanları ve kısa baskı geçişleri için uygun.', tags: ['Kenar', 'Pas', 'Açılar'] },
      { id: 'RL-ARENA-009', name: 'Starbase Arc', role: 'Arena', difficulty: 'İleri', detail: 'Yüksek mobil ve açık görüş alanıyla bilinmektedir.', tags: ['Mobil', 'Boost', 'Hız'] },
      { id: 'RL-ARENA-010', name: 'Utopia Coliseum', role: 'Arena', difficulty: 'Orta', detail: 'Orta alan etkisiyle ileri ve savunma dengesi gerektirir.', tags: ['Denge', 'Savunma', 'Akış'] },
      { id: 'RL-ARENA-011', name: 'Urban Central', role: 'Arena', difficulty: 'Orta', detail: 'Açı ve wall play hassasiyetini öne çıkaran sahadır.', tags: ['Wall', 'Açılar', 'Duvar'] },
      { id: 'RL-ARENA-012', name: 'Wasteland', role: 'Arena', difficulty: 'Profesyonel', detail: 'Boşluk ve momentum kontrolünde güçlü stratejiler üretir.', tags: ['Momentum', 'Boşluk', 'Boost'] }
    ],
    modes: [
      { id: 'RL-MODE-001', name: '1v1', role: 'Oyun modu', difficulty: 'İleri', detail: 'Tek oyuncu baskısı ve savunma çözümlemesi için en zorlu kısa mod.', tags: ['Boost', 'Savunma', 'Pozisyon'] },
      { id: 'RL-MODE-002', name: '2v2', role: 'Oyun modu', difficulty: 'Orta', detail: 'Takım koordinasyonu ve boost paylaşımı önemlidir.', tags: ['Takım', 'Rotasyon', 'Boost'] },
      { id: 'RL-MODE-003', name: '3v3', role: 'Oyun modu', difficulty: 'Orta', detail: 'En yaygın ve yüksek stratejik oyunda rotasyon ve geçiş kritiktir.', tags: ['Takım', 'Rotation', 'Transition'] },
      { id: 'RL-MODE-004', name: '4v4', role: 'Oyun modu', difficulty: 'Orta', detail: 'Oyun alanında verimlilik ve sahadaki alan kontrolü kritik olur.', tags: ['Alan', 'Boost', 'Takım'] },
      { id: 'RL-MODE-005', name: 'Hoops', role: 'Extra Modes', difficulty: 'Başlangıç', detail: 'Top ve basket için hızlı açı ve koordinasyon gerektirir.', tags: ['Açılar', 'İş birliği', 'Hız'] },
      { id: 'RL-MODE-006', name: 'Dropshot', role: 'Extra Modes', difficulty: 'İleri', detail: 'Top düşüş dinamiği ve stratejik car play ile kazanılır.', tags: ['Düşüş', 'Isabet', 'Açılar'] },
      { id: 'RL-MODE-007', name: 'Snow Day', role: 'Extra Modes', difficulty: 'Orta', detail: 'Slippery koşullar ve kontrolü zorlaştıran özel mod.', tags: ['Hız', 'Kontrol', 'Zor'] },
      { id: 'RL-MODE-008', name: 'Rumble', role: 'Extra Modes', difficulty: 'Başlangıç', detail: 'Açık kullanım ve farklı güç düzenleri ile hareketli mod.', tags: ['Power-up', 'Hızlı', 'Eğlenceli'] }
    ],
    mechanics: [
      { id: 'RL-MECHANIC-001', name: 'Dribbling', role: 'Mekanik', difficulty: 'Başlangıç', detail: 'Topu kontrol altında taşıma ve pozisyon tutma tekniği.', tags: ['Kontrol', 'Pozisyon', 'Top'] },
      { id: 'RL-MECHANIC-002', name: 'Flick', role: 'Mekanik', difficulty: 'Orta', detail: 'Yüksek hızla topa vurup etkili kısa vuruş yaratma.', tags: ['Top', 'Hız', 'Şut'] },
      { id: 'RL-MECHANIC-003', name: 'Air Dribble', role: 'Mekanik', difficulty: 'İleri', detail: 'Havada top kontrolünü artıran ileri seviye mekanik.', tags: ['Hava', 'Kontrol', 'İleri'] },
      { id: 'RL-MECHANIC-004', name: 'Fast Aerial', role: 'Mekanik', difficulty: 'İleri', detail: 'Hızlı havada boşluk oluşturma ve düzenli temas üretme.', tags: ['Hava', 'İleri', 'Pozisyon'] },
      { id: 'RL-MECHANIC-005', name: 'Double Tap', role: 'Mekanik', difficulty: 'Orta', detail: 'Ardışık iki vuruşla topu yönlendirme ve yön kaybı azaltma.', tags: ['Çift atış', 'Kontrol', 'Top'] },
      { id: 'RL-MECHANIC-006', name: 'Ceiling Shot', role: 'Mekanik', difficulty: 'İleri', detail: 'Tavan yönlü şut ve kafa üstü amaçlı atış tekniği.', tags: ['Şut', 'Yüksek açı', 'Top'] },
      { id: 'RL-MECHANIC-007', name: 'Flip Reset', role: 'Mekanik', difficulty: 'İleri', detail: 'Hızlı toplama ve pozisyon düzeni için kritik mekanik.', tags: ['Flip', 'Reset', 'Hız'] },
      { id: 'RL-MECHANIC-008', name: 'Musty Flick', role: 'Mekanik', difficulty: 'Profesyonel', detail: 'İleri düzleştirilmiş flick ve topa yerden enerjiyi ulaştırma.', tags: ['Flick', 'İleri düzlem', 'Şut'] },
      { id: 'RL-MECHANIC-009', name: 'Wave Dash', role: 'Mekanik', difficulty: 'İleri', detail: 'Darbe ve sprint kombinasyonuyla hareket hacmi artırır.', tags: ['Hareket', 'Boost', 'Hız'] },
      { id: 'RL-MECHANIC-010', name: 'Half Flip', role: 'Mekanik', difficulty: 'Orta', detail: 'Ana rotasyon ve yön değişikliği sonrası hız kazanımı sağlar.', tags: ['Rotasyon', 'Geri dönüş', 'Hız'] },
      { id: 'RL-MECHANIC-011', name: 'Speed Flip', role: 'Mekanik', difficulty: 'Orta', detail: 'Yüksek hızla pozisyon almada güçlü araçtır.', tags: ['Hız', 'Boost', 'Pozisyon'] },
      { id: 'RL-MECHANIC-012', name: 'Air Roll', role: 'Mekanik', difficulty: 'Başlangıç', detail: 'Havada yön kontrolü ve top kontrolü sağlar.', tags: ['Hava', 'Kontrol', 'Pozisyon'] },
      { id: 'RL-MECHANIC-013', name: 'Wall Play', role: 'Mekanik', difficulty: 'Orta', detail: 'Duvar üzerinde top kontrolü ve pozisyon almak için kullanılır.', tags: ['Duvar', 'Açı', 'Pozisyon'] },
      { id: 'RL-MECHANIC-014', name: 'Backboard', role: 'Mekanik', difficulty: 'İleri', detail: 'Arka üstten topu yönlendirerek pas ve şut fırsatı yaratır.', tags: ['Backboard', 'Şut', 'Pas'] },
      { id: 'RL-MECHANIC-015', name: 'Recovery', role: 'Mekanik', difficulty: 'Başlangıç', detail: 'Düşüş ve yeniden pozisyon alma mekanik düzenidir.', tags: ['Pozisyon', 'Kontrol', 'Recovery'] }
    ],
    tactics: [
      { id: 'RL-TACTIC-001', name: 'Kickoff 3v3', role: 'Kickoff', difficulty: 'Orta', detail: 'Kickoff süresinde top kontrolü ve başlangıç rotasyonu.', tags: ['Kickoff', '3v3', 'Top'] },
      { id: 'RL-TACTIC-002', name: 'Shadow Defense', role: 'Defense', difficulty: 'İleri', detail: 'Rakibin baskının dışında kalıp karşılama temelli savunma.', tags: ['Defense', 'Shadow', 'Pozisyon'] },
      { id: 'RL-TACTIC-003', name: 'Transition Press', role: 'Transition', difficulty: 'Orta', detail: 'Top kaybından sonra hızlı geçiş ve çoklu rotasyon baskısı.', tags: ['Transition', 'Pressure', 'Boost'] },
      { id: 'RL-TACTIC-004', name: 'Boost Stack Rotation', role: 'Boost Management', difficulty: 'Profesyonel', detail: 'Boost paylaşımı ile çoklu baskı önleme planı.', tags: ['Boost', 'Rotation', 'Takım'] }
    ],
    ranks: [
      { id: 'RL-RANK-001', name: 'Bronze', role: 'Rank Guide', difficulty: 'Başlangıç', detail: 'Temel hareket ve kontrol sistemi öğrenilir.', tags: ['Bronze', 'Temel', 'Konum'] },
      { id: 'RL-RANK-002', name: 'Silver', role: 'Rank Guide', difficulty: 'Başlangıç', detail: 'Ayrıt ve rotasyon mantığı kavranır.', tags: ['Silver', 'Rotasyon', 'Temel'] },
      { id: 'RL-RANK-003', name: 'Gold', role: 'Rank Guide', difficulty: 'Orta', detail: 'Boost kullanımı ve pas yönlendirmeleri önem kazanır.', tags: ['Gold', 'Boost', 'Pas'] },
      { id: 'RL-RANK-004', name: 'Platinum', role: 'Rank Guide', difficulty: 'Orta', detail: 'Modern oyun akışı ve baskı yönetimi geliştirilir.', tags: ['Platinum', 'Baskı', 'Oyun akışı'] },
      { id: 'RL-RANK-005', name: 'Diamond', role: 'Rank Guide', difficulty: 'İleri', detail: 'Teknik kararlar ve pozisyon kontrolü kritik hale gelir.', tags: ['Diamond', 'Karar', 'Pozisyon'] },
      { id: 'RL-RANK-006', name: 'Champion', role: 'Rank Guide', difficulty: 'İleri', detail: 'Konumlama, boost planı ve geçiş düzeni anahtar olmalıdır.', tags: ['Champion', 'Boost', 'Geçiş'] },
      { id: 'RL-RANK-007', name: 'Grand Champion', role: 'Rank Guide', difficulty: 'Profesyonel', detail: 'Profesyonel seviyede karar alma ve kendi oyun kalitesi gerektirir.', tags: ['Grand Champion', 'Karar', 'Kalite'] },
      { id: 'RL-RANK-008', name: 'Supersonic Legend', role: 'Rank Guide', difficulty: 'Profesyonel', detail: 'Toplam kontrol, boost ve olasılık yönetimi ön plandadır.', tags: ['Legend', 'Kontrol', 'Boost'] }
    ]
  }
};

const homeCollections = {
  recent: [
    { game: 'valorant', badge: 'VALORANT', title: 'Astra utility kontrol planı', meta: 'Yeni içerik', detail: 'Astra ile portal ve site kilidi için uygulamalı plan.', type: 'Ajan' },
    { game: 'rocket', badge: 'ROCKET', title: '3v3 kickoff rotasyonu', meta: 'Öne çıkan', detail: 'Oyun başında rahat ve kontrollü pozisyon kapatma sistemi.', type: 'Taktik' },
    { game: 'valorant', badge: 'VALORANT', title: 'Bind B Site retake', meta: 'Yeni içerik', detail: 'Rakip retake anında iletişim ve utility kombo sistemi.', type: 'Harita' },
    { game: 'rocket', badge: 'ROCKET', title: 'Wave Dash rehberi', meta: 'Mekanik', detail: 'Boost ile hareket açısı ve hız düzeni için pratik yöntemler.', type: 'Mekanik' },
    { game: 'valorant', badge: 'VALORANT', title: 'Lotus post plant planı', meta: 'Taktik', detail: 'Spike sonrası bekleme, safe zone ve utility yapısı.', type: 'Taktik' },
    { game: 'rocket', badge: 'ROCKET', title: 'Rank rehberi: Diamond', meta: 'Rehber', detail: 'Diamond seviyesinde kararlar, konum ve boost planlaması.', type: 'Rank' }
  ],
  tactics: [
    { title: 'A Site Execute', game: 'VALORANT', badge: 'VALORANT', detail: 'Timed utility, smoke ve peek planı.', type: 'Execute' },
    { title: 'Mid Control Split', game: 'VALORANT', badge: 'VALORANT', detail: 'Mid baskısı ile site elde tutma ve retake planı.', type: 'Default' },
    { title: 'Kickoff 3v3', game: 'ROCKET LEAGUE', badge: 'ROCKET', detail: 'Başlangıçta üçlü sıralama ve topla kontrol.', type: 'Kickoff' },
    { title: 'Rotation Pressure', game: 'ROCKET LEAGUE', badge: 'ROCKET', detail: 'Boost yönetimi ve geçiş baskısı oluşturma.', type: 'Pressure' }
  ],
  guides: [
    { id: 'GUIDE-001', title: 'Jett için girişi kıran 3 temel pozisyon', game: 'VALORANT', type: 'Rehber', detail: 'Fast entry ve flanking için düşük riskli pozisyon planı.' },
    { id: 'GUIDE-002', title: 'A Site retake düzeni', game: 'VALORANT', type: 'Rehber', detail: 'Retake sırasında utility ve pozisyon önceliğini belirleyen sistem.' },
    { id: 'GUIDE-003', title: 'Rocket League rank yükseltme sistemi', game: 'ROCKET LEAGUE', type: 'Rehber', detail: 'Bronze - Gold arası kısa hedefler ve oyun mantığı rehberi.' },
    { id: 'GUIDE-004', title: 'Speed Flip akışı', game: 'ROCKET LEAGUE', type: 'Rehber', detail: 'Boost yönetimiyle daha verimli palet ve rotation düzeni.' }
  ]
};

const state = {
  activeGame: 'valorant',
  activeCategory: 'agents',
  searchTerm: '',
  tag: 'all',
  miniSearch: '',
  difficulty: 'all'
};

const categoryMap = {
  valorant: [
    { key: 'agents', label: 'Ajanlar' },
    { key: 'maps', label: 'Haritalar' },
    { key: 'weapons', label: 'Silahlar' },
    { key: 'modes', label: 'Modlar' },
    { key: 'tactics', label: 'Taktikler' }
  ],
  rocket: [
    { key: 'arenas', label: 'Arenalar' },
    { key: 'modes', label: 'Modlar' },
    { key: 'mechanics', label: 'Mekanikler' },
    { key: 'tactics', label: 'Taktikler' },
    { key: 'ranks', label: 'Rank Rehberleri' }
  ]
};

function getGameData() {
  return data[state.activeGame];
}

function getCurrentList() {
  const gameData = getGameData();
  return gameData[state.activeCategory] || [];
}

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function applySearch(items, query) {
  if (!query) return items;
  const q = normalizeText(query);
  return items.filter((item) => {
    const haystack = [
      item.id,
      item.name,
      item.role,
      item.detail,
      item.title,
      item.type,
      item.game,
      item.meta,
      item.category,
      ...(item.tags || [])
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

function renderHomeCards() {
  const recent = applySearch(homeCollections.recent, state.searchTerm).filter((item) => {
    if (state.tag === 'all') return true;
    if (state.tag === 'valorant') return normalizeText(item.game) === 'valorant';
    if (state.tag === 'rocket') return normalizeText(item.game).includes('rocket');
    if (state.tag === 'tactic') return normalizeText(item.type).includes('taktik');
    if (state.tag === 'guide') return normalizeText(item.type).includes('rehber') || normalizeText(item.type).includes('rank');
    return true;
  });

  document.getElementById('recentContent').innerHTML = recent.slice(0, 6).map((item) => `
    <article class="content-card">
      <div class="card-header">
        <span class="card-badge ${normalizeText(item.game).includes('rocket') ? 'rl' : 'val'}">${item.badge}</span>
        <span class="card-meta">${item.meta}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
      <div class="card-footer">
        <span class="card-pill">${item.type}</span>
        <span>${normalizeText(item.game).includes('rocket') ? 'ROCKET LEAGUE' : 'VALORANT'}</span>
      </div>
    </article>
  `).join('');

  const tactics = applySearch(homeCollections.tactics, state.searchTerm);
  document.getElementById('popularTactics').innerHTML = tactics.slice(0, 4).map((item) => `
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
  `).join('');

  const guides = applySearch(homeCollections.guides, state.searchTerm);
  document.getElementById('featuredGuides').innerHTML = guides.slice(0, 4).map((item) => `
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
  `).join('');

  const guideGridItems = [
    ...homeCollections.guides,
    ...data.rocket.ranks.map((item) => ({
      title: `${item.name} Rank Rehberi`,
      game: 'ROCKET LEAGUE',
      type: 'Rank Guide',
      detail: item.detail
    }))
  ];

  document.getElementById('guideGrid').innerHTML = applySearch(guideGridItems, state.searchTerm).slice(0, 6).map((item) => `
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
  `).join('');
}

function renderDatabase() {
  const currentList = getCurrentList();
  const filtered = applySearch(currentList, state.miniSearch).filter((item) => {
    if (state.difficulty === 'all') return true;
    return normalizeText(item.difficulty) === normalizeText(state.difficulty);
  });

  document.getElementById('databaseTitle').textContent = state.activeGame === 'valorant' ? 'VALORANT Veritabanı' : 'Rocket League Veritabanı';

  const categoryOptions = categoryMap[state.activeGame];
  const select = document.getElementById('categorySelect');
  select.innerHTML = categoryOptions.map((option) => `<option value="${option.key}">${option.label}</option>`).join('');
  select.value = state.activeCategory;

  document.getElementById('databaseGrid').innerHTML = filtered.map((item) => {
    const tagList = (item.tags || []).slice(0, 3).map((tag) => `<span class="meta-tag">${tag}</span>`).join('');
    const badge = state.activeGame === 'valorant' ? 'VAL' : 'RL';
    return `
      <article class="database-card">
        <div class="card-header">
          <span class="card-badge ${state.activeGame === 'valorant' ? 'val' : 'rl'}">${badge}</span>
          <span class="card-meta">${item.difficulty || 'Orta'}</span>
        </div>
        <div class="meta-row">${tagList}</div>
        <h3>${item.name || item.title}</h3>
        <p>${item.detail || 'Profesyonel içerik açıklaması.'}</p>
        <div class="card-footer">
          <span class="card-pill">${categoryOptions.find((c) => c.key === state.activeCategory)?.label || 'Genel'}</span>
          <span>${item.role || item.type || 'Genel'}</span>
        </div>
      </article>
    `;
  }).join('');
}

function setGame(game) {
  state.activeGame = game;
  state.activeCategory = categoryMap[game][0].key;
  state.difficulty = 'all';
  document.querySelectorAll('.game-card').forEach((card) => card.classList.toggle('active', card.dataset.game === game));
  document.querySelectorAll('.game-tab').forEach((button) => button.classList.toggle('active', button.dataset.game === game));
  document.getElementById('difficultySelect').value = 'all';
  renderDatabase();
  renderHomeCards();
}

function attachEvents() {
  document.querySelectorAll('.game-card, .btn[data-game]').forEach((element) => {
    element.addEventListener('click', () => {
      const game = element.dataset.game;
      if (game) setGame(game);
    });
  });

  document.querySelectorAll('.game-tab').forEach((button) => {
    button.addEventListener('click', () => setGame(button.dataset.game));
  });

  document.getElementById('categorySelect').addEventListener('change', (event) => {
    state.activeCategory = event.target.value;
    renderDatabase();
  });

  document.getElementById('difficultySelect').addEventListener('change', (event) => {
    state.difficulty = event.target.value;
    renderDatabase();
  });

  document.getElementById('miniSearch').addEventListener('input', (event) => {
    state.miniSearch = event.target.value;
    renderDatabase();
  });

  document.getElementById('globalSearch').addEventListener('input', (event) => {
    state.searchTerm = event.target.value;
    renderHomeCards();
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    renderHomeCards();
  });

  document.querySelectorAll('.tag-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.tag-chip').forEach((item) => item.classList.toggle('active', item === chip));
      state.tag = chip.dataset.tag;
      renderHomeCards();
    });
  });

  document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('mobile-open');
  });
}

function init() {
  setGame('valorant');
  renderHomeCards();
  attachEvents();
}

init();
