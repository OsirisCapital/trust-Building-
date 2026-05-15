import { useState } from "react";

// ─── PALETTE TBA ──────────────────────────────────────────────────────────────
const P = {
  red: "#A01515",
  redLight: "#C0392B",
  redDark: "#6B0D0D",
  gold: "#C9960A",
  goldLight: "#F0BE3A",
  blue: "#0F2D5E",
  blueLight: "#1A4A8A",
  brown: "#2C1503",
  cream: "#FAF6EF",
  white: "#FFFFFF",
  muted: "#8A7A6A",
  border: "#E8E0D0",
  dark: "#111111",
};

// ─── LIENS SOCIAUX (à compléter plus tard) ───────────────────────────────────
const SOCIAL = {
  facebook: "https://www.facebook.com/profile.php?id=61589543464774",
  whatsapp: "https://wa.me/+237694952656", // à configurer
  instagram: "https://instagram.com/trustbuildingacademy", // à configurer
  tiktok: "https://tiktok.com/@trustbuildingacademy", // à configurer
  youtube: "https://youtube.com/@trustbuildingacademy", // à configurer
  email: "mailto:contact@trustbuildingacademy.com", // à configurer
};

// ─── LOGO TBA SVG (recréé fidèlement depuis l'image) ─────────────────────────
function TBALogo({ size = 48, white = false }) {
  const color = white ? "#FFFFFF" : P.red;
  return (
    <img
      src="https://i.imgur.com/placeholder.png"
      alt="TBA Logo"
      style={{ width: size, height: size, objectFit: "contain" }}
      onError={(e) => {
        e.target.style.display = "none";
        e.target.parentNode.innerHTML += `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="35" width="60" height="45" rx="2" fill="none" stroke="${color}" stroke-width="6"/>
          <path d="M10 40 L50 10 L90 40" stroke="${color}" stroke-width="6" fill="none" stroke-linejoin="round"/>
          <rect x="38" y="60" width="24" height="20" rx="1" fill="${color}" opacity="0.3"/>
          <rect x="44" y="66" width="5" height="5" rx="0.5" fill="${color}"/>
          <rect x="51" y="66" width="5" height="5" rx="0.5" fill="${color}"/>
          <rect x="44" y="73" width="5" height="5" rx="0.5" fill="${color}"/>
          <rect x="51" y="73" width="5" height="5" rx="0.5" fill="${color}"/>
          <rect x="28" y="5" width="22" height="16" rx="8" fill="${color}"/>
          <rect x="18" y="17" width="42" height="5" rx="2.5" fill="${color}"/>
          <line x1="39" y1="22" x2="36" y2="35" stroke="${color}" stroke-width="3"/>
        </svg>`;
      }}
    />
  );
}

// Logo SVG inline fidèle au logo TBA
function TBALogoSVG({ size = 56, white = false }) {
  const c = white ? "#FFFFFF" : P.red;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Maison / bâtiment */}
      <path d="M20 55 L60 18 L100 55" stroke={c} strokeWidth="7" strokeLinejoin="round" fill="none"/>
      <rect x="26" y="54" width="68" height="52" rx="2" fill="none" stroke={c} strokeWidth="6"/>
      {/* Lettre T */}
      <rect x="36" y="65" width="20" height="5" rx="1" fill={c}/>
      <rect x="43" y="68" width="6" height="20" rx="1" fill={c}/>
      {/* Lettre B */}
      <rect x="60" y="65" width="5" height="28" rx="1" fill={c}/>
      <path d="M65 65 Q78 65 78 73 Q78 79 65 79" stroke={c} strokeWidth="4" fill="none" strokeLinejoin="round"/>
      <path d="M65 79 Q80 79 80 87 Q80 93 65 93" stroke={c} strokeWidth="4" fill="none" strokeLinejoin="round"/>
      {/* Fenêtre */}
      <rect x="53" y="72" width="6" height="6" rx="0.5" fill={c} opacity="0.5"/>
      {/* Toque diplôme */}
      <rect x="28" y="6" width="30" height="14" rx="12" fill={c}/>
      <rect x="16" y="17" width="54" height="6" rx="3" fill={c}/>
      <line x1="43" y1="23" x2="40" y2="40" stroke={c} strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="38" cy="41" r="3" fill={c}/>
    </svg>
  );
}

// ─── IMAGES PLACEHOLDER (brouillon portfolio) ────────────────────────────────
const PORTFOLIO_ITEMS = [
  {
    id: 1, categorie: "🤖 Digital & IA",
    titre: "Formation IA & Prompt Engineering",
    desc: "Atelier intensif : apprendre à dialoguer avec l'IA pour étudier mieux et travailler plus vite.",
    tags: ["Intelligence Artificielle", "Productivité", "Élèves"],
    gradient: `linear-gradient(135deg, #0F2D5E 0%, #1A4A8A 100%)`,
    emoji: "🧠", stat: "48 élèves formés",
  },
  {
    id: 2, categorie: "⚙️ Ingénierie",
    titre: "Atelier Robotique Arduino",
    desc: "Conception et programmation de robots autonomes avec kits Arduino. Du circuit à la logique.",
    tags: ["Arduino", "Robotique", "Électronique"],
    gradient: `linear-gradient(135deg, #1A6B3A 0%, #0D4A25 100%)`,
    emoji: "🤖", stat: "12 robots construits",
  },
  {
    id: 3, categorie: "🎬 Audiovisuel",
    titre: "Production Mini-Films",
    desc: "Réalisation complète : scénario, tournage, montage. Les élèves deviennent réalisateurs.",
    tags: ["Cinéma", "Montage", "Créativité"],
    gradient: `linear-gradient(135deg, #6B1A1A 0%, #A01515 100%)`,
    emoji: "🎬", stat: "6 films produits",
  },
  {
    id: 4, categorie: "🖨️ Fabrication",
    titre: "Impression 3D & Maquettes",
    desc: "De la conception numérique à l'objet physique. Tinkercad, impression 3D et maquettes architecturales.",
    tags: ["Impression 3D", "CAO", "Design"],
    gradient: `linear-gradient(135deg, #5A3A00 0%, #8B5E00 100%)`,
    emoji: "🏗️", stat: "30+ objets créés",
  },
  {
    id: 5, categorie: "📣 Marketing",
    titre: "Mini-Business & Réseaux Sociaux",
    desc: "Créer sa première source de revenus avec un smartphone. Du contenu à la monétisation.",
    tags: ["Business", "TikTok", "E-commerce"],
    gradient: `linear-gradient(135deg, #4A0A6B 0%, #7B2FA0 100%)`,
    emoji: "📱", stat: "15 mini-business lancés",
  },
  {
    id: 6, categorie: "✏️ Animation",
    titre: "Dessin Animé & Animation 2D/3D",
    desc: "Des principes Disney à Blender. Les élèves créent leurs propres dessins animés et animations numériques.",
    tags: ["Animation", "Blender", "Créativité"],
    gradient: `linear-gradient(135deg, #0A3A5E 0%, #C9960A 100%)`,
    emoji: "🎨", stat: "20+ animations finalisées",
  },
];

// ─── DONNÉES PROGRAMME VACANCES ───────────────────────────────────────────────
const FORMATS = [
  { id: "decouverte", emoji: "🌱", nom: "Découverte", tag: "MOIS 1", duree: "4 semaines", rythme: "3 jours/semaine · 3h/jour", heuresTotal: "36h", couleur: P.blueLight,
    desc: "Tester, explorer, trouver sa passion. Ateliers courts, ambiance détendue, projets simples.",
    structure: [{semaine:"Sem 1",focus:"IA & Études intelligentes",icon:"🧠"},{semaine:"Sem 2",focus:"Découverte tech (Arduino / 3D)",icon:"⚙️"},{semaine:"Sem 3",focus:"Audiovisuel & Animation",icon:"🎬"},{semaine:"Sem 4",focus:"Mini-projet + présentation",icon:"🎯"}] },
  { id: "intensif", emoji: "⚡", nom: "Intensif", tag: "MOIS 2", duree: "4 semaines", rythme: "5 jours/semaine · 5h/jour", heuresTotal: "100h", couleur: P.red,
    desc: "Maîtriser un domaine en profondeur. Projets réels, encadrement serré, résultat concret.",
    structure: [{semaine:"Sem 1",focus:"Fondamentaux + spécialisation",icon:"📚"},{semaine:"Sem 2",focus:"Ateliers avancés + outils pro",icon:"🔧"},{semaine:"Sem 3",focus:"Projet personnel suivi",icon:"💼"},{semaine:"Sem 4",focus:"Pitch public + certificat",icon:"🏆"}] },
  { id: "masterclass", emoji: "🏅", nom: "Masterclass", tag: "MOIS 3", duree: "4 semaines", rythme: "6 jours/semaine · 6h/jour", heuresTotal: "144h", couleur: P.gold,
    desc: "Le programme premium. Multi-domaines, portfolio professionnel, préparation à l'insertion.",
    structure: [{semaine:"Sem 1",focus:"IA Stratégique + Orientation métier",icon:"🎯"},{semaine:"Sem 2",focus:"Domaine spécialisé choisi",icon:"⚡"},{semaine:"Sem 3",focus:"Marketing, Business & Revenus",icon:"📱"},{semaine:"Sem 4",focus:"Projet final + Portfolio + Cérémonie",icon:"🎓"}] },
];

const POLES = [
  { id:"ia", icon:"🧠", titre:"IA & Élève Stratège", couleur:P.blue, tag:"NOUVEAU", tagColor:P.goldLight,
    pitch:"Transformer l'élève de consommateur passif en utilisateur stratégique de l'IA.",
    modules:[
      {nom:"🎯 Prompter comme un expert", niveau:"Tous", duree:"3h", desc:"Techniques de prompt engineering adaptées aux élèves. Passer de la réponse médiocre à la réponse parfaite.", livrables:["Prompt book personnel","Fiches méthodes par matière"]},
      {nom:"📅 Mon coach IA d'études", niveau:"Tous", duree:"4h", desc:"Créer son plan d'études avec l'IA. Se faire interroger, tester ses connaissances, réviser plus vite.", livrables:["Plan d'études personnalisé","Bibliothèque de fiches"]},
      {nom:"🔥 Motivation & Méthode Rapide", niveau:"Tous", duree:"3h", desc:"Psychologie de la motivation scolaire. Pomodoro boostée à l'IA, gestion du temps, anti-procrastination.", livrables:["Routine d'étude quotidienne"]},
      {nom:"🚀 Explorer son futur métier", niveau:"Lycéens", duree:"5h", desc:"Simuler des entretiens professionnels, explorer des métiers d'avenir, s'y exercer dès maintenant.", livrables:["Carte des métiers d'avenir","Simulation d'entretien enregistrée"]},
      {nom:"📱 Mon téléphone = source de revenus", niveau:"Lycéens", duree:"5h", desc:"Générer un premier revenu avec un smartphone : services numériques, contenu monétisé, micro-missions.", livrables:["Plan d'action business mobile","Premier profil freelance créé"]},
    ]},
  { id:"ingenierie", icon:"⚙️", titre:"Ingénierie & Fabrication", couleur:"#1A6B3A", tag:"PRATIQUE", tagColor:"#A8E6C0",
    pitch:"Toucher, construire, programmer. L'ingénierie par les mains et le code.",
    modules:[
      {nom:"🤖 Robotique Arduino", niveau:"Tous", duree:"8h", desc:"Assembler un kit Arduino, programmer des comportements. Créer son premier robot fonctionnel.", livrables:["Robot assemblé et programmé","Code source commenté"]},
      {nom:"🖨️ Impression 3D", niveau:"Tous", duree:"6h", desc:"Concevoir un objet sur Tinkercad et le produire physiquement. La magie de créer du concret.", livrables:["Objet 3D conçu et imprimé"]},
      {nom:"🏛️ Maquettes Physiques", niveau:"Collégiens", duree:"5h", desc:"Construction de maquettes architecturales : bâtiments, ponts. Comprendre l'espace et la solidité.", livrables:["Maquette terminée","Fiche technique"]},
      {nom:"📐 CAO/DAO Fondamentaux", niveau:"Lycéens", duree:"6h", desc:"AutoCAD ou FreeCAD : dessiner des plans techniques, créer des vues 2D/3D, coter un plan.", livrables:["Plan technique finalisé"]},
      {nom:"⚡ Électronique Créative", niveau:"Collégiens", duree:"4h", desc:"Circuits simples, LED, capteurs. Comprendre l'électronique en construisant des montages ludiques.", livrables:["3 montages électroniques réalisés"]},
    ]},
  { id:"audiovisuel", icon:"🎬", titre:"Audiovisuel & Animation", couleur:"#6B1A1A", tag:"CRÉATIF", tagColor:"#FFD0A0",
    pitch:"Du dessin animé au mini-film. Créer, raconter, animer.",
    modules:[
      {nom:"🎥 Tournage Smartphone", niveau:"Tous", duree:"4h", desc:"Cadrage, lumière naturelle, son propre. Faire une vidéo pro avec un simple téléphone.", livrables:["Vidéo tournée et montée"]},
      {nom:"✂️ Montage Vidéo Pro", niveau:"Tous", duree:"5h", desc:"CapCut / DaVinci Resolve. Monter une vidéo qui capte l'attention dès les 3 premières secondes.", livrables:["Vidéo prête à publier"]},
      {nom:"✏️ Dessin Animé Classique", niveau:"Tous", duree:"6h", desc:"Les 12 principes Disney. Story-board, personnages, mouvement image par image. Court animé de 30s.", livrables:["Court dessin animé","Story-board"]},
      {nom:"🌀 Animation 2D Numérique", niveau:"Tous", duree:"6h", desc:"Animaker ou OpenToonz : animer des personnages numériques, créer des intro/outro YouTube.", livrables:["Animation 2D terminée"]},
      {nom:"🎲 Animation 3D Blender", niveau:"Lycéens", duree:"8h", desc:"Modélisation simple, rigging basique, rendu et première animation 3D. Pipeline production pro.", livrables:["Scène 3D animée et rendue"]},
      {nom:"🎞️ Réalisation Mini-Film", niveau:"Lycéens", duree:"10h", desc:"Scénario, casting, tournage, montage, générique, affiche. Un vrai mini-film présenté en cérémonie.", livrables:["Mini-film complet","Affiche officielle"]},
    ]},
  { id:"digital", icon:"💻", titre:"Digital & Développement", couleur:"#1A4A7A", tag:"TECH", tagColor:"#B0D4FF",
    pitch:"Du code au web, des apps à la cybersécurité.",
    modules:[
      {nom:"🌐 Mon Premier Site Web", niveau:"Collégiens", duree:"6h", desc:"HTML/CSS de zéro à un site personnel hébergé en ligne. Partager son lien à sa famille.", livrables:["Site web en ligne","Code source"]},
      {nom:"📲 App Mobile Sans Coder", niveau:"Tous", duree:"5h", desc:"Glide ou Adalo : concevoir et publier une vraie application mobile sans écrire de code.", livrables:["Application mobile publiée"]},
      {nom:"🔐 Cybersécurité pour Ados", niveau:"Tous", duree:"3h", desc:"Protéger ses données, reconnaître les arnaques, naviguer anonymement.", livrables:["Audit sécurité personnel","Guide bonnes pratiques"]},
      {nom:"⚙️ Développement Full-Stack", niveau:"Lycéens", duree:"8h", desc:"JavaScript, bases de données, API. Construire une application web complète front + back.", livrables:["Application web fonctionnelle","Code sur GitHub"]},
    ]},
  { id:"marketing", icon:"📣", titre:"Marketing & Business", couleur:"#5A1A6B", tag:"BUSINESS", tagColor:"#E0B0FF",
    pitch:"Transformer sa créativité en opportunités réelles.",
    modules:[
      {nom:"🎨 Visuels Pro avec Canva", niveau:"Tous", duree:"4h", desc:"Canva avancé : affiches, posts Instagram, logos, cartes de visite. Paraître pro dès le premier visuel.", livrables:["Kit visuel complet"]},
      {nom:"📊 Community Manager Junior", niveau:"Lycéens", duree:"4h", desc:"Calendrier éditorial, hashtags stratégiques, analyse statistiques, optimisation des publications.", livrables:["Calendrier de contenu 30 jours"]},
      {nom:"💰 Créer son Mini-Business", niveau:"Lycéens", duree:"5h", desc:"De l'idée au premier client. Niche rentable, offre de service, mise en vente sur plateformes.", livrables:["Business plan simplifié","Première offre en ligne"]},
      {nom:"🔥 Stratégie de Viralité", niveau:"Lycéens", duree:"3h", desc:"Anatomie d'une vidéo virale. Formules TikTok/Instagram. Hooks, storytelling court, publication en direct.", livrables:["Vidéo publiée en conditions réelles"]},
    ]},
];

// ─── COMPOSANTS UTILITAIRES ───────────────────────────────────────────────────

function SocialBtn({ href, icon, label, bg, color = "#fff", small = false }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: small ? 6 : 8,
      padding: small ? "8px 14px" : "13px 22px",
      borderRadius: 50,
      background: bg,
      color,
      textDecoration: "none",
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 700,
      fontSize: small ? 12 : 14,
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      transition: "transform 0.18s, box-shadow 0.18s",
      cursor: "pointer",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.28)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.2)"; }}
    >
      <span style={{ fontSize: small ? 16 : 18 }}>{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function ContactBar({ compact = false }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
      <SocialBtn href={SOCIAL.whatsapp} icon="💬" label="WhatsApp" bg="#25D366" small={compact} />
      <SocialBtn href={SOCIAL.facebook} icon="📘" label="Facebook" bg="#1877F2" small={compact} />
      <SocialBtn href={SOCIAL.instagram} icon="📸" label="Instagram" bg="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" small={compact} />
      <SocialBtn href={SOCIAL.tiktok} icon="🎵" label="TikTok" bg="#010101" small={compact} />
      <SocialBtn href={SOCIAL.youtube} icon="▶️" label="YouTube" bg="#FF0000" small={compact} />
      <SocialBtn href={SOCIAL.email} icon="✉️" label="Email" bg={P.blue} small={compact} />
    </div>
  );
}

function InscriptionBtn({ label = "S'inscrire maintenant", style = {} }) {
  return (
    <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "15px 32px",
      borderRadius: 50,
      background: `linear-gradient(135deg, ${P.red} 0%, ${P.redDark} 100%)`,
      color: "#fff",
      textDecoration: "none",
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 800, fontSize: 15, letterSpacing: 0.5,
      boxShadow: `0 6px 28px ${P.red}55`,
      cursor: "pointer",
      transition: "all 0.2s",
      ...style,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform="scale(1.04)"; e.currentTarget.style.boxShadow=`0 10px 36px ${P.red}77`; }}
    onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow=`0 6px 28px ${P.red}55`; }}
    >
      <span>💬</span> {label}
    </a>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "portfolio", label: "Portfolio" },
    { id: "vacances", label: "🌞 Summer Building" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 1000,
      background: "rgba(10,20,50,0.97)",
      backdropFilter: "blur(12px)",
      borderBottom: `2px solid ${P.red}44`,
      padding: "0 20px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => setPage("accueil")}>
          <TBALogoSVG size={42} white />
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 17, color: P.white, lineHeight: 1 }}>Trust Building</div>
            <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: 3, color: P.gold }}>ACADEMY</div>
          </div>
        </div>
        {/* Nav desktop */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setPage(item.id)} style={{
              padding: "8px 16px", borderRadius: 8, border: "none",
              background: page === item.id ? P.red : "transparent",
              color: page === item.id ? P.white : "rgba(255,255,255,0.75)",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700, fontSize: 13, cursor: "pointer",
              transition: "all 0.2s",
            }}>{item.label}</button>
          ))}
          <InscriptionBtn label="S'inscrire" style={{ padding: "8px 20px", fontSize: 13, marginLeft: 8 }} />
        </div>
      </div>
    </nav>
  );
}

// ─── PAGE ACCUEIL ─────────────────────────────────────────────────────────────
function PageAccueil({ setPage }) {
  return (
    <div>
      {/* HERO */}
      <div style={{
        background: `linear-gradient(155deg, ${P.dark} 0%, #1A0505 40%, #0F1A3A 100%)`,
        minHeight: "92vh",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "60px 20px",
        position: "relative", overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Cercles décoratifs */}
        <div style={{ position:"absolute", top:-100, right:-100, width:400, height:400, borderRadius:"50%", background:`radial-gradient(circle, ${P.red}22, transparent 70%)` }} />
        <div style={{ position:"absolute", bottom:-80, left:-80, width:300, height:300, borderRadius:"50%", background:`radial-gradient(circle, ${P.gold}18, transparent 70%)` }} />
        <div style={{ position:"absolute", top:"30%", left:"5%", width:2, height:120, background:`linear-gradient(${P.gold}, transparent)`, opacity:0.4 }} />
        <div style={{ position:"absolute", top:"20%", right:"8%", width:2, height:80, background:`linear-gradient(${P.red}, transparent)`, opacity:0.4 }} />

        <div style={{ position:"relative", zIndex:2, maxWidth:700 }}>
          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:50, padding:"6px 18px", marginBottom:32 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:P.goldLight, display:"inline-block" }} />
            <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, fontWeight:700, letterSpacing:3, color:"rgba(255,255,255,0.7)" }}>CONSTRUIRE L'AFRIQUE PAR LE SAVOIR</span>
          </div>

          {/* Logo grand */}
          <div style={{ marginBottom:24, display:"flex", justifyContent:"center" }}>
            <TBALogoSVG size={100} white />
          </div>

          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(32px, 7vw, 64px)", fontWeight:900, color:P.white, margin:"0 0 8px", lineHeight:1.1 }}>
            Trust Building<br /><span style={{ color:P.gold }}>Academy</span>
          </h1>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:"clamp(14px, 2.5vw, 18px)", color:"rgba(255,255,255,0.65)", margin:"16px 0 36px", lineHeight:1.7, maxWidth:560, marginLeft:"auto", marginRight:"auto" }}>
            Formation de haut niveau · Production intégrée · Entrepreneuriat
            <br />La startup qui forme les bâtisseurs de l'Afrique de demain.
          </p>

          {/* Chiffres */}
          <div style={{ display:"flex", gap:32, justifyContent:"center", marginBottom:40, flexWrap:"wrap" }}>
            {[["5+","Pôles d'expertise"],["3","Mois de vacances actives"],["∞","Possibilités créées"]].map(([val,lbl],i)=>(
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Playfair Display', serif", fontSize:36, fontWeight:900, color:P.gold }}>{val}</div>
                <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, color:"rgba(255,255,255,0.55)", letterSpacing:1 }}>{lbl}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <InscriptionBtn label="📋 Voir le programme vacances" style={{ background:`linear-gradient(135deg, ${P.gold} 0%, ${P.red} 100%)` }} />
            <button onClick={() => setPage("portfolio")} style={{
              padding:"15px 28px", borderRadius:50, border:`2px solid rgba(255,255,255,0.3)`,
              background:"transparent", color:P.white,
              fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:14,
              cursor:"pointer",
            }}>Voir nos réalisations →</button>
          </div>
        </div>
      </div>

      {/* DOMAINES */}
      <div style={{ background:P.cream, padding:"70px 20px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:50 }}>
            <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, fontWeight:700, letterSpacing:3, color:P.red, marginBottom:10 }}>NOS PÔLES D'EXCELLENCE</div>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(24px,4vw,38px)", fontWeight:900, color:P.blue, margin:0 }}>Ce que nous faisons</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:20 }}>
            {[
              { icon:"🧠", titre:"IA & Études", desc:"Maîtriser l'IA pour apprendre mieux et plus vite", bg:P.blue },
              { icon:"⚙️", titre:"Ingénierie", desc:"Arduino, 3D, maquettes, CAO", bg:"#1A6B3A" },
              { icon:"🎬", titre:"Audiovisuel", desc:"Films, animation, dessin animé", bg:P.redDark },
              { icon:"💻", titre:"Digital", desc:"Développement web, apps, cybersécurité", bg:"#1A4A7A" },
              { icon:"📣", titre:"Business", desc:"Marketing, réseaux sociaux, mini-business", bg:"#5A1A6B" },
            ].map((item, i) => (
              <div key={i} style={{
                background:item.bg, borderRadius:16, padding:"28px 20px",
                textAlign:"center", color:P.white,
                boxShadow:"0 4px 20px rgba(0,0,0,0.12)",
              }}>
                <div style={{ fontSize:36, marginBottom:12 }}>{item.icon}</div>
                <div style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:16, marginBottom:8 }}>{item.titre}</div>
                <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:12, opacity:0.8, lineHeight:1.4 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BANNIÈRE SUMMER BUILDING */}
      <div style={{
        background:`linear-gradient(135deg, ${P.red} 0%, ${P.redDark} 50%, ${P.blue} 100%)`,
        padding:"60px 20px", textAlign:"center", position:"relative", overflow:"hidden",
      }}>
        <div style={{ position:"absolute", top:-60, right:-60, width:250, height:250, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
        <div style={{ maxWidth:600, margin:"0 auto", position:"relative", zIndex:2 }}>
          <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, fontWeight:700, letterSpacing:3, color:"rgba(255,255,255,0.7)", marginBottom:10 }}>PROGRAMME VACANCES 2025</div>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:P.white, margin:"0 0 16px" }}>🌞 Summer Building</h2>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:16, color:"rgba(255,255,255,0.8)", marginBottom:30, lineHeight:1.6 }}>
            3 mois de formations intensives pendant les vacances. Découverte, Intensif ou Masterclass — ton niveau, ton rythme, tes projets.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <InscriptionBtn label="S'inscrire au programme" />
            <SocialBtn href={SOCIAL.facebook} icon="📘" label="En savoir plus" bg="rgba(255,255,255,0.15)" />
          </div>
        </div>
      </div>

      {/* CONTACT BAS */}
      <div style={{ background:P.dark, padding:"50px 20px", textAlign:"center" }}>
        <div style={{ fontFamily:"'Playfair Display', serif", fontSize:24, fontWeight:900, color:P.white, marginBottom:8 }}>Nous rejoindre</div>
        <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:"rgba(255,255,255,0.55)", marginBottom:28, fontSize:14 }}>Suivez-nous sur nos réseaux et contactez-nous directement</p>
        <ContactBar />
      </div>
    </div>
  );
}

// ─── PAGE PORTFOLIO ───────────────────────────────────────────────────────────
function PagePortfolio({ setPage }) {
  const [filtre, setFiltre] = useState("Tout");
  const categories = ["Tout", "🤖 Digital & IA", "⚙️ Ingénierie", "🎬 Audiovisuel", "🖨️ Fabrication", "📣 Marketing", "✏️ Animation"];
  const items = filtre === "Tout" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.categorie === filtre);

  return (
    <div style={{ background:P.cream, minHeight:"100vh" }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(135deg, ${P.blue} 0%, ${P.dark} 100%)`, padding:"50px 20px 40px", textAlign:"center" }}>
        <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, letterSpacing:3, color:P.gold, marginBottom:12 }}>NOS RÉALISATIONS</div>
        <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,5vw,42px)", fontWeight:900, color:P.white, margin:"0 0 16px" }}>Portfolio TBA</h1>
        <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:"rgba(255,255,255,0.65)", fontSize:15, maxWidth:500, margin:"0 auto 28px" }}>
          Des projets réels réalisés par nos élèves et nos équipes. Chaque projet est une preuve concrète.
        </p>
        <InscriptionBtn label="Rejoindre l'aventure" />
      </div>

      <div style={{ maxWidth:1000, margin:"0 auto", padding:"40px 20px" }}>
        {/* Filtres */}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:36, justifyContent:"center" }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFiltre(cat)} style={{
              padding:"8px 16px", borderRadius:50, border:"none", cursor:"pointer",
              fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:12,
              background: filtre===cat ? P.red : P.white,
              color: filtre===cat ? P.white : P.muted,
              boxShadow: filtre===cat ? `0 4px 14px ${P.red}44` : "0 2px 6px rgba(0,0,0,0.08)",
              transition:"all 0.2s",
            }}>{cat}</button>
          ))}
        </div>

        {/* Grille */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(290px, 1fr))", gap:24 }}>
          {items.map(item => (
            <div key={item.id} style={{
              borderRadius:18, overflow:"hidden",
              boxShadow:"0 4px 24px rgba(0,0,0,0.1)",
              background:P.white,
              transition:"transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,0.16)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(0,0,0,0.1)"; }}
            >
              {/* Image brouillon */}
              <div style={{
                background: item.gradient,
                height:180, display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center",
                position:"relative", overflow:"hidden",
              }}>
                {/* Motif brouillon */}
                <div style={{ position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)", backgroundSize:"14px 14px" }} />
                <span style={{ fontSize:56, zIndex:2 }}>{item.emoji}</span>
                <div style={{ position:"absolute", bottom:10, right:14, background:"rgba(255,255,255,0.15)", borderRadius:20, padding:"3px 10px", fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.85)", letterSpacing:1 }}>BROUILLON</div>
              </div>

              <div style={{ padding:"20px 20px 22px" }}>
                <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, letterSpacing:2, color:P.muted, marginBottom:6 }}>{item.categorie}</div>
                <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:18, fontWeight:700, color:P.brown, margin:"0 0 8px" }}>{item.titre}</h3>
                <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:13, color:P.muted, lineHeight:1.5, margin:"0 0 14px" }}>{item.desc}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:14 }}>
                  {item.tags.map(t => (
                    <span key={t} style={{ background:P.cream, color:P.brown, fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:12, fontWeight:700, color:P.red }}>✅ {item.stat}</span>
                  <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily:"'Source Sans 3', sans-serif", fontSize:12, fontWeight:700,
                    color:P.blue, textDecoration:"none",
                  }}>En savoir + →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div style={{ textAlign:"center", marginTop:56, padding:"40px 20px", background:P.blue, borderRadius:20 }}>
          <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:26, fontWeight:900, color:P.white, margin:"0 0 12px" }}>Vous voulez un projet comme ça ?</h3>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:"rgba(255,255,255,0.65)", marginBottom:24, fontSize:14 }}>Contactez-nous pour discuter de votre projet ou inscrire vos élèves.</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <InscriptionBtn label="Nous contacter sur WhatsApp" />
            <SocialBtn href={SOCIAL.facebook} icon="📘" label="Page Facebook" bg="#1877F2" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE PROGRAMME VACANCES ──────────────────────────────────────────────────
function PageVacances() {
  const [selectedFormat, setSelectedFormat] = useState("intensif");
  const [selectedPoles, setSelectedPoles] = useState(["ia","ingenierie"]);
  const [expandedPole, setExpandedPole] = useState("ia");
  const [expandedModule, setExpandedModule] = useState(null);
  const [view, setView] = useState("builder");

  const togglePole = id => setSelectedPoles(prev => prev.includes(id) ? prev.filter(p=>p!==id) : [...prev, id]);
  const format = FORMATS.find(f=>f.id===selectedFormat);
  const polesActifs = POLES.filter(p=>selectedPoles.includes(p.id));
  const totalModules = polesActifs.reduce((a,p)=>a+p.modules.length,0);
  const totalHeures = polesActifs.reduce((a,p)=>a+p.modules.reduce((b,m)=>b+parseInt(m.duree),0),0);

  return (
    <div style={{ background:P.cream, minHeight:"100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@400;600;700&display=swap');`}</style>

      {/* Header programme */}
      <div style={{ background:`linear-gradient(150deg, ${P.red} 0%, ${P.redDark} 50%, ${P.blue} 100%)`, padding:"48px 20px 36px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:280, height:280, borderRadius:"50%", background:"rgba(255,255,255,0.05)" }} />
        <div style={{ position:"relative", zIndex:2, maxWidth:700, margin:"0 auto" }}>
          <div style={{ display:"inline-flex", gap:8, alignItems:"center", background:"rgba(255,255,255,0.12)", borderRadius:50, padding:"6px 18px", marginBottom:16 }}>
            <span style={{ fontSize:18 }}>🌞</span>
            <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontWeight:800, fontSize:11, letterSpacing:3, color:P.white }}>SUMMER BUILDING · ÉTÉ 2025</span>
          </div>
          <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,5vw,44px)", fontWeight:900, color:P.white, margin:"0 0 12px" }}>Programme Vacances<br /><span style={{ color:P.goldLight }}>3 Mois · Entièrement Modulable</span></h1>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:"rgba(255,255,255,0.75)", marginBottom:28, fontSize:15 }}>Construire l'avenir de l'Afrique par le savoir et l'action.</p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <InscriptionBtn label="S'inscrire maintenant" />
            <SocialBtn href={SOCIAL.whatsapp} icon="💬" label="Renseignements WhatsApp" bg="rgba(255,255,255,0.15)" />
          </div>
        </div>
      </div>

      <div style={{ maxWidth:860, margin:"0 auto", padding:"0 16px 120px" }}>

        {/* TABS */}
        <div style={{ display:"flex", gap:8, margin:"28px 0 0", flexWrap:"wrap" }}>
          {[["builder","🛠️ Construire mon programme"],["recap","📋 Mon programme actuel"]].map(([id,lbl])=>(
            <button key={id} onClick={()=>setView(id)} style={{
              padding:"10px 20px", borderRadius:8, border:"none", cursor:"pointer",
              fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:13,
              background:view===id ? P.blue : P.white,
              color:view===id ? P.white : P.muted,
              boxShadow:view===id ? `0 4px 16px ${P.blue}44` : "0 1px 4px rgba(0,0,0,0.08)",
            }}>{lbl}</button>
          ))}
        </div>

        {view==="builder" && <>
          {/* FORMATS */}
          <ProgramSection titre="① Choisissez votre format" sous="Modifiable à tout moment selon la progression des élèves.">
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16 }}>
              {FORMATS.map(f => {
                const actif = selectedFormat===f.id;
                return (
                  <div key={f.id} onClick={()=>setSelectedFormat(f.id)} style={{
                    border:`2.5px solid ${actif ? f.couleur : P.border}`,
                    borderRadius:12, padding:"20px 18px",
                    background:actif ? `${f.couleur}12` : P.white,
                    cursor:"pointer", position:"relative",
                    boxShadow:actif ? `0 6px 24px ${f.couleur}33` : "0 2px 8px rgba(0,0,0,0.05)",
                    transition:"all 0.2s",
                  }}>
                    {actif && <div style={{ position:"absolute", top:-1, right:14, background:f.couleur, color:P.white, fontSize:9, fontWeight:700, letterSpacing:1.5, padding:"2px 8px", borderRadius:"0 0 6px 6px", fontFamily:"'Source Sans 3', sans-serif" }}>SÉLECTIONNÉ</div>}
                    <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:10 }}>
                      <span style={{ fontSize:26 }}>{f.emoji}</span>
                      <div>
                        <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:9, fontWeight:700, letterSpacing:2.5, color:f.couleur }}>{f.tag}</div>
                        <div style={{ fontFamily:"'Playfair Display', serif", fontSize:19, fontWeight:700 }}>{f.nom}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:8 }}>
                      {[[f.duree,"📅"],[f.rythme,"⏱"],[f.heuresTotal,"📊"]].map(([v,ic],i)=>(
                        <span key={i} style={{ background:`${f.couleur}18`, color:f.couleur, fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:600, padding:"2px 7px", borderRadius:4 }}>{ic} {v}</span>
                      ))}
                    </div>
                    <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:12, color:P.muted, lineHeight:1.5, margin:"0 0 10px" }}>{f.desc}</p>
                    <div style={{ borderTop:`1px solid ${P.border}`, paddingTop:8 }}>
                      {f.structure.map((s,i)=>(
                        <div key={i} style={{ display:"flex", gap:8, marginBottom:4, fontFamily:"'Source Sans 3', sans-serif", fontSize:11 }}>
                          <span style={{ minWidth:48, color:f.couleur, fontWeight:700 }}>{s.semaine}</span>
                          <span>{s.icon} {s.focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </ProgramSection>

          {/* PÔLES */}
          <ProgramSection titre="② Sélectionnez les pôles" sous="Activez ou désactivez librement selon les ressources disponibles.">
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:20 }}>
              {POLES.map(p => {
                const actif = selectedPoles.includes(p.id);
                return (
                  <button key={p.id} onClick={()=>{ togglePole(p.id); setExpandedPole(p.id); }} style={{
                    display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:8,
                    border:`2px solid ${actif ? p.couleur : P.border}`,
                    background:actif ? p.couleur : P.white,
                    color:actif ? P.white : P.muted,
                    fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:12,
                    cursor:"pointer", transition:"all 0.2s",
                  }}>
                    <span>{p.icon}</span>
                    <span>{p.titre.split(" ").slice(0,2).join(" ")}</span>
                    {actif && <span>✓</span>}
                  </button>
                );
              })}
            </div>

            {selectedPoles.length===0 && (
              <div style={{ textAlign:"center", padding:"40px", color:P.muted, fontFamily:"'Source Sans 3', sans-serif", fontSize:14 }}>
                👆 Sélectionnez au moins un pôle pour construire votre programme.
              </div>
            )}

            {POLES.filter(p=>selectedPoles.includes(p.id)).map(pole => (
              <div key={pole.id} style={{ border:`2px solid ${pole.couleur}30`, borderRadius:14, overflow:"hidden", marginBottom:16, boxShadow:"0 3px 12px rgba(0,0,0,0.06)" }}>
                <div onClick={()=>setExpandedPole(expandedPole===pole.id ? null : pole.id)} style={{ background:`linear-gradient(135deg, ${pole.couleur} 0%, ${pole.couleur}CC 100%)`, color:P.white, padding:"18px 20px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                      <span style={{ fontSize:24 }}>{pole.icon}</span>
                      <div>
                        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                          <span style={{ fontFamily:"'Playfair Display', serif", fontSize:18, fontWeight:700 }}>{pole.titre}</span>
                          {pole.tag && <span style={{ background:pole.tagColor, color:P.brown, fontFamily:"'Source Sans 3', sans-serif", fontSize:9, fontWeight:800, letterSpacing:2, padding:"2px 7px", borderRadius:3 }}>{pole.tag}</span>}
                        </div>
                        <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:12, opacity:0.85, marginTop:2 }}>{pole.pitch}</div>
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize:16, marginLeft:10 }}>{expandedPole===pole.id?"▲":"▼"}</span>
                </div>
                {expandedPole===pole.id && (
                  <div style={{ background:P.white, padding:"16px" }}>
                    <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, letterSpacing:2, color:P.muted, marginBottom:12 }}>{pole.modules.length} MODULES · {pole.modules.reduce((a,m)=>a+parseInt(m.duree),0)}H</div>
                    {pole.modules.map((mod,i) => {
                      const key=`${pole.id}-${i}`;
                      const open=expandedModule===key;
                      return (
                        <div key={i} onClick={()=>setExpandedModule(open?null:key)} style={{ border:`1px solid ${P.border}`, borderRadius:10, marginBottom:10, overflow:"hidden", cursor:"pointer" }}>
                          <div style={{ padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                            <div style={{ flex:1 }}>
                              <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                                <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:14, color:P.brown }}>{mod.nom}</span>
                                <span style={{ background:`${pole.couleur}18`, color:pole.couleur, fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, padding:"2px 7px", borderRadius:4 }}>⏱ {mod.duree}</span>
                                <span style={{ background:P.cream, color:P.muted, fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:600, padding:"2px 7px", borderRadius:4 }}>👥 {mod.niveau}</span>
                              </div>
                              {!open && <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:12, color:P.muted, margin:"4px 0 0", lineHeight:1.4 }}>{mod.desc.slice(0,80)}…</p>}
                            </div>
                            <span style={{ color:P.muted, marginLeft:10 }}>{open?"▲":"▼"}</span>
                          </div>
                          {open && (
                            <div style={{ padding:"0 16px 14px", borderTop:`1px solid ${P.border}`, paddingTop:12 }}>
                              <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:13, color:P.brown, lineHeight:1.6, margin:"0 0 10px" }}>{mod.desc}</p>
                              {mod.livrables && <div>
                                <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:800, letterSpacing:2, color:pole.couleur, marginBottom:6 }}>LIVRABLES</div>
                                {mod.livrables.map((l,j)=>(
                                  <div key={j} style={{ display:"flex", gap:8, fontFamily:"'Source Sans 3', sans-serif", fontSize:12, color:P.brown, marginBottom:4 }}>
                                    <span style={{ color:"#1A6B3A" }}>✓</span>{l}
                                  </div>
                                ))}
                              </div>}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </ProgramSection>
        </>}

        {view==="recap" && <RecapVacances format={format} poles={polesActifs} totalModules={totalModules} totalHeures={totalHeures} onEdit={()=>setView("builder")} />}

        {/* BARRE INSCRIPTION FLOTTANTE */}
        <div style={{ position:"fixed", bottom:0, left:0, right:0, background:`linear-gradient(90deg, ${P.redDark} 0%, ${P.blue} 100%)`, padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10, zIndex:999, boxShadow:"0 -4px 24px rgba(0,0,0,0.3)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <TBALogoSVG size={32} white />
            <div>
              <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:13, color:P.white }}>Summer Building 2025</div>
              {selectedPoles.length>0 && <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, color:"rgba(255,255,255,0.6)" }}>{format?.nom} · {selectedPoles.length} pôle{selectedPoles.length>1?"s":""} · {totalHeures}h</div>}
            </div>
          </div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <SocialBtn href={SOCIAL.whatsapp} icon="💬" label="Infos WhatsApp" bg="#25D366" small />
            <InscriptionBtn label="S'inscrire" style={{ padding:"9px 22px", fontSize:13 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramSection({ titre, sous, children }) {
  return (
    <div style={{ marginTop:32 }}>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:700, color:P.blue, margin:"0 0 4px" }}>{titre}</h2>
      {sous && <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:13, color:P.muted, margin:"0 0 16px", fontStyle:"italic" }}>{sous}</p>}
      {children}
    </div>
  );
}

function RecapVacances({ format, poles, totalModules, totalHeures, onEdit }) {
  if (!format) return null;
  return (
    <div style={{ marginTop:24 }}>
      <div style={{ background:`linear-gradient(135deg, ${format.couleur} 0%, ${format.couleur}CC 100%)`, borderRadius:14, padding:"24px", color:P.white, marginBottom:20 }}>
        <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, letterSpacing:3, opacity:0.75, marginBottom:6 }}>FORMAT SÉLECTIONNÉ</div>
        <div style={{ fontFamily:"'Playfair Display', serif", fontSize:28, fontWeight:900, marginBottom:6 }}>{format.emoji} {format.nom}</div>
        <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:14, opacity:0.85, margin:"0 0 16px" }}>{format.desc}</p>
        <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
          {format.structure.map((s,i)=>(
            <div key={i} style={{ background:"rgba(255,255,255,0.15)", borderRadius:8, padding:"8px 12px", fontFamily:"'Source Sans 3', sans-serif", fontSize:12 }}>
              <div style={{ fontWeight:700 }}>{s.semaine}</div>
              <div style={{ opacity:0.9 }}>{s.icon} {s.focus}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:20 }}>
        {[["🎯",poles.length,"Pôles"],["📚",totalModules,"Modules"],["⏱",totalHeures+"h","Formation"]].map(([ic,val,lbl],i)=>(
          <div key={i} style={{ background:P.white, borderRadius:12, padding:"16px", textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize:22 }}>{ic}</div>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:26, fontWeight:900, color:P.blue }}>{val}</div>
            <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, color:P.muted }}>{lbl}</div>
          </div>
        ))}
      </div>
      {poles.map(pole=>(
        <div key={pole.id} style={{ background:P.white, borderRadius:14, overflow:"hidden", marginBottom:14, boxShadow:"0 2px 10px rgba(0,0,0,0.06)" }}>
          <div style={{ background:`linear-gradient(135deg, ${pole.couleur} 0%, ${pole.couleur}BB 100%)`, padding:"12px 18px", display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:20 }}>{pole.icon}</span>
            <span style={{ fontFamily:"'Playfair Display', serif", fontSize:17, fontWeight:700, color:P.white }}>{pole.titre}</span>
            <span style={{ marginLeft:"auto", fontFamily:"'Source Sans 3', sans-serif", fontSize:11, color:"rgba(255,255,255,0.8)" }}>{pole.modules.length} modules · {pole.modules.reduce((a,m)=>a+parseInt(m.duree),0)}h</span>
          </div>
          <div style={{ padding:"12px 18px" }}>
            {pole.modules.map((mod,i)=>(
              <div key={i} style={{ display:"flex", gap:10, padding:"7px 0", borderBottom:i<pole.modules.length-1?`1px solid ${P.border}`:"none" }}>
                <span style={{ color:"#1A6B3A" }}>✓</span>
                <div>
                  <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:13, color:P.brown }}>{mod.nom}</div>
                  <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:11, color:P.muted }}>{mod.duree} · {mod.niveau}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ textAlign:"center", marginTop:20, marginBottom:20 }}>
        <InscriptionBtn label="S'inscrire à ce programme" />
      </div>
      <button onClick={onEdit} style={{ display:"block", width:"100%", padding:"14px", borderRadius:10, border:`2px solid ${P.blue}`, background:"transparent", color:P.blue, fontFamily:"'Source Sans 3', sans-serif", fontWeight:700, fontSize:14, cursor:"pointer" }}>✏️ Modifier le programme</button>
    </div>
  );
}

// ─── PAGE CONTACT ─────────────────────────────────────────────────────────────
function PageContact() {
  return (
    <div style={{ background:P.cream, minHeight:"100vh" }}>
      <div style={{ background:`linear-gradient(135deg, ${P.blue} 0%, ${P.dark} 100%)`, padding:"50px 20px 40px", textAlign:"center" }}>
        <div style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, fontWeight:700, letterSpacing:3, color:P.gold, marginBottom:12 }}>NOUS TROUVER</div>
        <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(26px,5vw,40px)", fontWeight:900, color:P.white, margin:"0 0 12px" }}>Contact & Inscription</h1>
        <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:"rgba(255,255,255,0.65)", fontSize:15, maxWidth:450, margin:"0 auto" }}>Rejoignez Trust Building Academy. Contactez-nous sur vos plateformes préférées.</p>
      </div>

      <div style={{ maxWidth:700, margin:"0 auto", padding:"50px 20px 80px" }}>

        {/* Inscription principale */}
        <div style={{ background:P.white, borderRadius:20, padding:"36px 28px", marginBottom:24, boxShadow:"0 4px 24px rgba(0,0,0,0.08)", textAlign:"center" }}>
          <div style={{ fontSize:40, marginBottom:16 }}>📋</div>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:26, fontWeight:900, color:P.brown, margin:"0 0 10px" }}>S'inscrire au programme</h2>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:P.muted, fontSize:14, lineHeight:1.6, marginBottom:28 }}>
            Pour toute inscription au programme vacances <strong>Summer Building</strong>, contactez-nous directement sur WhatsApp. Nous vous répondons rapidement avec toutes les informations.
          </p>
          <InscriptionBtn label="💬 Inscription via WhatsApp" />
          <div style={{ marginTop:14, fontFamily:"'Source Sans 3', sans-serif", fontSize:12, color:P.muted }}>Réponse sous 24h · Inscription simple et rapide</div>
        </div>

        {/* Réseaux sociaux */}
        <div style={{ background:P.white, borderRadius:20, padding:"32px 28px", marginBottom:24, boxShadow:"0 4px 24px rgba(0,0,0,0.08)" }}>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:900, color:P.brown, margin:"0 0 8px", textAlign:"center" }}>Nos réseaux sociaux</h2>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", color:P.muted, fontSize:13, textAlign:"center", marginBottom:24 }}>Suivez-nous pour voir nos projets, nos formations et nos actualités.</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:12 }}>
            {[
              { href:SOCIAL.facebook, icon:"📘", label:"Facebook", sub:"Page officielle TBA", bg:"#1877F2" },
              { href:SOCIAL.whatsapp, icon:"💬", label:"WhatsApp", sub:"Contact direct", bg:"#25D366" },
              { href:SOCIAL.instagram, icon:"📸", label:"Instagram", sub:"À configurer", bg:"linear-gradient(135deg,#f09433,#dc2743,#bc1888)" },
              { href:SOCIAL.tiktok, icon:"🎵", label:"TikTok", sub:"À configurer", bg:"#010101" },
              { href:SOCIAL.youtube, icon:"▶️", label:"YouTube", sub:"À configurer", bg:"#FF0000" },
              { href:SOCIAL.email, icon:"✉️", label:"Email", sub:"À configurer", bg:P.blue },
            ].map((s,i)=>(
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                gap:6, padding:"20px 14px", borderRadius:14,
                background:s.bg, color:"#fff", textDecoration:"none",
                boxShadow:"0 4px 14px rgba(0,0,0,0.15)",
                transition:"transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(0,0,0,0.22)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 14px rgba(0,0,0,0.15)";}}>
                <span style={{ fontSize:28 }}>{s.icon}</span>
                <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontWeight:800, fontSize:14 }}>{s.label}</span>
                <span style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:10, opacity:0.75 }}>{s.sub}</span>
              </a>
            ))}
          </div>
        </div>

        {/* À propos */}
        <div style={{ background:`linear-gradient(135deg, ${P.blue} 0%, ${P.dark} 100%)`, borderRadius:20, padding:"32px 28px", color:P.white, textAlign:"center" }}>
          <TBALogoSVG size={60} white />
          <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:22, fontWeight:900, margin:"16px 0 8px" }}>Trust Building Academy</h3>
          <p style={{ fontFamily:"'Source Sans 3', sans-serif", fontSize:13, color:"rgba(255,255,255,0.65)", lineHeight:1.7, marginBottom:0 }}>
            Formation de haut niveau · Production intégrée · Entrepreneuriat africain<br />
            <em style={{ opacity:0.5 }}>Construire l'avenir de l'Afrique par le savoir et l'action.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("accueil");

  return (
    <div style={{ fontFamily:"'Palatino Linotype', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FAF6EF; }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      {page==="accueil" && <PageAccueil setPage={setPage} />}
      {page==="portfolio" && <PagePortfolio setPage={setPage} />}
      {page==="vacances" && <PageVacances />}
      {page==="contact" && <PageContact />}
    </div>
  );
}
