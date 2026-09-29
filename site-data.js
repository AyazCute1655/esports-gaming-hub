const completeValorantAgents = [
  "Astra","Breach","Brimstone","Chamber","Cypher","Fade","Gekko","Harbor","Jett","KAY/O","Killjoy","Neon","Omen","Phoenix","Raze","Reyna","Sage","Skye","Sova","Viper","Yoru","Astra","Breach","Brimstone","Chamber","Cypher","Fade","Gekko","Harbor","Jett","KAY/O","Killjoy","Neon","Omen","Phoenix","Raze","Reyna","Sage","Skye","Sova","Viper","Yoru"
];

const completeValorantWeapons = [
  "Classic","Shorty","Frenzy","Ghost","Sheriff","Stinger","Spectre","Bulldog","Guardian","Phantom","Vandal","Marshal","Operator","Ares","Odin","Judge","Bucky","Melee"
];

const completeRocketCars = [
  "Octane","Dominus","Breakout","Merc","Venom","X-Devil","Road Hog","Paladin","Gizmo","Hotshot","Backfire","Scarab","Zippy","Marauder","Masamune","Ripper","Grog","Proteus","Triton","Vulcan","Takumi","Esper","Aftershock","Mantis","Jäger 619","Centio V17","Animus GP","Imperator DT5","Cyclone","Diestro","Nimbus","Samurai","Twinzer","Werewolf","Endo","Fennec","Maverick","Artemis","Guardian","Chikara","Mudcat","Ronin","Harbinger","Outlaw","Dingo","Insidio","Tygris","Mamba","Jackal","Nomad","Komodo","Maestro","Emperor","Dominator GT","Octane ZSR","Breakout Type-S","Dominus GT","Takumi RX-T","Road Hog XL","X-Devil Mk2","Armadillo","Hogsticker","Sweet Tooth","Bone Shaker","Batmobile","Batmobile (2016)","Batmobile (2022)","The Dark Knight Tumbler","1989 Batmobile","DeLorean Time Machine","Ecto-1","K.I.T.T.","Jurassic Jeep Wrangler","Nissan Skyline GT-R R34","Nissan Silvia RLE","Nissan Z","Mazda RX-7","Dodge Charger R/T","Dodge Charger SRT Hellcat","Pontiac Fiero","Ford Mustang Shelby GT350R","Ford Mustang Mach-E RLE","Ford Mustang GT","Ford Mustang GTD","Chevrolet Camaro","Chevrolet Corvette Stingray","Chevrolet Corvette ZR1","BMW M240i","BMW M3 E30","BMW M4 GT3","BMW M2 Racing","Ferrari 296 GTB","Ferrari F40","Lamborghini Countach LPI 800-4","Lamborghini Huracán STO","McLaren 570S","McLaren 765LT","McLaren P1","McLaren Senna","Mercedes-AMG GT 63 S","Mercedes-Benz SLK","Porsche 911 Turbo","Porsche 911 GT3 RS","Porsche 918 Spyder","Tesla Cybertruck","Lightning McQueen","Bumblebee","007 Aston Martin DB5","007 Aston Martin DBS","007 Aston Martin Valhalla","Fast & Furious Nissan Skyline","Fast & Furious Mazda RX-7","Fast & Furious Dodge Charger","Fast & Furious Pontiac Fiero","NASCAR Chevrolet Camaro","NASCAR Ford Mustang","NASCAR Toyota Camry","Battle Bus","Mario NSR","Luigi NSR","Samus' Gunship"
];

if (typeof sectionMap !== "undefined") {
  sectionMap.valorant.agents = { title: "Tüm Ajanlar", items: completeValorantAgents.map((name, index) => ({
    title: name,
    tags: [index % 2 === 0 ? "Agent" : "Role"],
    text: `${name} VALORANT ajanı için rehber ve kullanım bilgisi.`,
    detail: `${name} ajanının oyun içi pozisyonu, utility kullanımı ve takım uyumunu öğren. Takımın oyun planına göre kullanımını optimize et.`
  })) };

  sectionMap.valorant.weapons = { title: "Tüm Silahlar", items: completeValorantWeapons.map((name, index) => ({
    title: name,
    tags: [index % 2 === 0 ? "Weapon" : "Firearm"],
    text: `${name} silahı için kullanım, kontrol ve durum bilgisi.`,
    detail: `${name} silahı için menzil, recoil ve pozisyon bilgilerini öğren. Oyun tarzına göre doğru hedef kullanımını uygula.`
  })) };

  sectionMap.rocket.cars = { title: "Tüm Araçlar", items: completeRocketCars.map((name, index) => ({
    title: name,
    tags: [index % 2 === 0 ? "Vehicle" : "Rocket"],
    text: `${name} aracı için kullanım, kontrol ve taktik bilgisi.`,
    detail: `${name} aracı için boost yönetimi, hitbox farkı ve pozisyon yaklaşımı öğren. Takım oyununda uygun rotasyon ve temas mantığını uygula.`
  })) };
}
