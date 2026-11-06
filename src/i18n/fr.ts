// Textes FR — repris mot pour mot de bestcall.pt (novembre 2026).
// Temporaires : seront remplacés par les textes définitifs rédigés avec Marta.
// Dans les chaînes HTML, {services} {why} {compare} {jobs} {quote} {legal}
// sont remplacés automatiquement par l'URL de la page dans la bonne langue.

const fr = {
  nav: {
    home: "Accueil",
    services: "Services & Solutions",
    why: "Pourquoi nous ?",
    compare: "Ressources",
    jobs: "Recrutement",
    quote: "Demander un devis",
    menu: "Menu",
    close: "Fermer",
    skip: "Aller au contenu",
    language: "Langue",
  },
  footer: {
    rights: "BestCall 2026 • Tous droits réservés",
    company: "Unipessoal, Lda. Portugal",
    legal: "Mentions légales",
  },
  languages: ["Français", "Español", "English", "Deutsch", "Türkçe", "Português"],
  form: {
    name: "Votre nom et prénom",
    email: "Votre e-mail",
    phone: "Votre téléphone",
    company: "Nom de votre société",
    project: "Votre projet en quelques mots",
    job: "Poste recherché",
    cv: "Votre CV",
    cover: "Lettre de motivation",
    message: "Un petit mot à ajouter ?",
    optional: "(optionnel)",
    consent:
      "Vos données sont traitées afin de répondre à vos demandes d'information. Pour plus d'informations sur le traitement de vos données et l'exercice de vos droits, reportez-vous aux <a href=\"{legal}\">Conditions Générales d'Utilisation</a>.",
    sendQuote: "Envoyer votre demande",
    sendJob: "Envoyer votre candidature",
  },
  pages: {
    home: {
      title: "BestCall | centre d'appel francophone au Portugal",
      description:
        "BestCall, centre d'appel francophone au Portugal : votre partenaire pour booster votre service client, en 7 langues.",
      welcome: "Bienvenue chez BestCall !",
      h1: "BestCall, centre d'appel francophone au Portugal",
      partner: "Votre partenaire pour booster votre service client, en 7 langues.",
      pill: "7 langues · disponible 24h/24",
      heroA: "Faites vibrer",
      heroB: "votre relation client.",
      script: "Des voix qui comptent, dans 7 langues",
      intro:
        "Derrière chaque appel, une personne formée à votre marque. Une équipe hybride, multilingue et disponible, qui transforme vos conversations en croissance.",
      ctaWho: "Qui sommes-nous ?",
      ctaQuote: "Devis gratuit",
      languagesTitle: "Nos conseillers parlent votre langue",
      techTitle: "Notre technologie",
      graamTagline: ", le centre d’appels nouvelle génération",
      graamText: [
        "Chez BestCall, notre mission est de révolutionner l'expérience client grâce à Graam, <strong>une solution de téléphonie cloud de référence.</strong>",
        "Reconnue pour sa fiabilité, sa sécurité et son efficacité exceptionnelle, Graam nous permet d'assurer une qualité de service inégalée, facilitant une communication fluide et de haute qualité.",
      ],
      graamLink: "En savoir plus sur Graam",
      whoEyebrow: "Qui sommes-nous ?",
      whoTitle: "Une équipe humaine, un modèle hybride",
      whoText:
        "BestCall Unipessoal, Lda accompagne des entreprises de toutes tailles depuis le Portugal, avec des conseillers natifs dans 7 langues. Notre modèle hybride nous permet de recruter les meilleurs talents où qu’ils soient et d’assurer une continuité de service 24h/24.",
      stats: [
        { value: "+7", label: "langues maîtrisées" },
        { value: "24/7", label: "continuité de service" },
        { value: "Hybride", label: "plateau & télétravail" },
      ],
      servicesEyebrow: "Nos services",
      servicesTitle: "Ce qu'on fait, on le fait à fond",
      services: [
        { title: "Restructuration commerciale", text: "Une équipe qui s'adapte vite à vos besoins." },
        { title: "Recouvrement amiable", text: "Écoute active, résolution constructive." },
        { title: "Support client", text: "Réactif, fluide, disponible en continu." },
        { title: "Prospection multilingue", text: "Des leads qualifiés, dans 7+ langues." },
      ],
      testimonialsTitle: "Ce qu'en disent nos clients",
      trustTitle: "Ils nous font confiance",
      quote: "« On ne parle plus à un prestataire, mais à une extension de notre propre équipe. »",
      ctaTitle: "Parlons de votre projet.",
      ctaText: "Un devis gratuit, une réponse sous 48h — par une vraie personne.",
      ctaBtn: "Obtenir un devis gratuit",
    },

    services: {
      title: "Externalisation service client multilingue | BestCall",
      description:
        "BestCall externalise votre service client, prospection et recouvrement en 7 langues. Modèle hybride, facturation transparente à l'heure de production.",
      h1: "Externalisation du service client multilingue",
      sub: "Des expertises humaines et technologiques pour renforcer votre relation client et faire de chaque contact une opportunité.",
      btn: "Explorer nos solutions",
      servicesTitle: "Nos services",
      items: [
        {
          title: "Restructuration & optimisation commerciale",
          text: "Optimisez vos processus et redéfinissez votre organisation pour booster votre performance commerciale. Nous savons que chaque entreprise est unique. Avec notre modèle flexible, nous adaptons rapidement notre équipe pour répondre à vos besoins en constante évolution.",
        },
        {
          title: "Recouvrement",
          text: "Privilégiez la résolution constructive avec notre service de recouvrement amiable. Notre approche repose sur une écoute active et une médiation professionnelle, visant à régulariser vos impayés sans rompre le lien de confiance avec vos clients.",
        },
        {
          title: "Support client & gestion des opérations",
          text: "Offrez un service réactif et fluide à vos clients, tout en libérant du temps pour votre entreprise. Que ce soit pour augmenter ou réduire votre équipe rapidement, nous avons la capacité de nous adapter en fonction des périodes de forte ou faible demande.",
        },
        {
          title: "Prospection & télévente multilingue",
          text: "Générez des leads qualifiés grâce à notre réseau d’opérateurs multilingues (portugais, anglais, espagnol, italien, allemand, turc). Grâce au télétravail, nous recrutons des talents où qu'ils soient. Cela nous permet de vous offrir un service multilingue de haute qualité avec des conseillers natifs pour chaque marché.",
        },
      ],
      whyTitle: "Pourquoi nous sommes efficace ?",
      why: [
        { value: "+7", title: "7 langues, un seul interlocuteur", text: "Nous accompagnons vos clients de la bonne manière et dans leur propre langue." },
        { value: "Agilité", title: "Un modèle hybride et agile", text: "Grâce à notre modèle hybride, nous adaptons nos solutions à vos besoins." },
        { value: "24h/7j", title: "Une continuité de service 24h/7j", text: "Nos collaborateurs assurent une continuité de service, même en situation de crise" },
      ],
      compareText:
        "Vous hésitez encore entre une équipe interne et l’externalisation ? <a href=\"{compare}\">Comparez les deux modèles de centre d’appel</a>.",
      quoteBtn: "Obtenir un devis gratuit",
      faqTitle: "Vous vous demandez peut-être…",
      faq: [
        {
          q: "Comment démarrer avec BestCall ?",
          a: [
            "C’est simple et rapide. Nous commençons par comprendre vos besoins : volume d’appels, langues nécessaires, horaires, outils utilisés et objectifs de performance. Ensuite, nous mettons en place une équipe dédiée, formée à vos produits, à votre ton de marque et à vos procédures internes. En quelques jours, votre service client ou votre cellule de prospection est opérationnelle — prête à représenter votre entreprise avec excellence.",
          ],
        },
        {
          q: "Quels types d’entreprises accompagnons-nous ?",
          a: [
            "BestCall collabore avec des entreprises de toutes tailles, des startups en croissance rapide aux groupes internationaux. Nos clients évoluent dans des secteurs variés :",
          ],
          list: ["E-commerce et retail", "Tourisme et hôtellerie", "Services financiers", "Technologies et logiciels", "Énergie et télécoms", "Santé et bien-être"],
          after: "Notre force : adapter notre approche à la culture et aux exigences de chaque marque.",
        },
        {
          q: "Nos collaborateurs travaillent-ils à distance ou en centre physique ?",
          a: [
            "Les deux ! Nous adoptons un modèle hybride qui allie performance et flexibilité. Nos agents peuvent travailler depuis nos centres situés au Portugal, un hub multilingue reconnu pour la qualité de son service client ou à distance, selon le projet et les besoins du client. Dans tous les cas, nous garantissons un suivi de qualité et un encadrement quotidien.",
          ],
        },
        {
          q: "Peut-on gérer plusieurs marchés en même temps ?",
          a: [
            "Absolument. Notre équipe est composée de conseillers natifs ou parfaitement bilingues dans plus de 10 langues (français, anglais, espagnol, italien, allemand, portugais, néerlandais, etc.). Cela nous permet de gérer vos opérations sur plusieurs pays et fuseaux horaires, depuis une seule plateforme, avec des indicateurs unifiés et une coordination fluide.",
          ],
        },
        {
          q: "Peut-on intégrer vos solutions à nos systèmes internes ? (ERP, helpdesk, etc.)",
          a: [
            "Oui, sans difficulté. Nos solutions sont compatibles avec la plupart des outils du marché : Salesforce, Zendesk, HubSpot, Freshdesk, Odoo, Zoho CRM, et bien d’autres. Nous adaptons nos flux de travail à vos processus internes, pour que vos équipes et les nôtres travaillent comme un seul service intégré.",
          ],
        },
      ],
      moreBtn: "Vous avez d’autres question ?",
    },

    why: {
      title: "Pourquoi choisir BestCall pour votre centre d'appel ?",
      description:
        "Pourquoi choisir BestCall : conseillers natifs en 7 langues, équipes ajustées à vos pics d’activité et facturation à l’heure de production.",
      h1: "Un service flexible, réactif et sur mesure",
      sub: "Une alliance unique entre talents multilingues, technologie avancée et service humain",
      btn: "Découvrez nos atouts",
      cards: [
        { title: "Approche sur mesure humaine & technologique", text: "Nous combinons l’humain expert et la technologie pour des solutions efficaces et adaptées." },
        { title: "Accès au meilleur talent, partout", text: "Le télétravail nous permet de recruter des conseillers multilingues natifs, n’importe où. Il favorise aussi un meilleur équilibre, et donc des conseillers plus engagés." },
        { title: "Flexibilité & Réactivité", text: "Nous ajustons nos équipes selon vos pics d’activité : nous pouvons faire évoluer rapidement nos équipes dédiées." },
        { title: "Économie, efficacité & continuité de services", text: "Pas d’infrastructure lourde, des coûts optimisés que nous répercutons sur vous. Nous assurons une continuité de services à tout moment, même en cas d’imprévu." },
        { title: "Service client de qualité", text: "On ne se contente pas de répondre : on écoute, on comprend, on fidélise !" },
      ],
      philoTitle: "Notre philosophie",
      philoLead: "Chaque interaction avec vos clients est une opportunité de créer de la confiance et renforcer la loyauté envers votre marque.",
      philo: [
        "Un service client de qualité fait partie intégrante du succès d’une entreprise. Il repose sur la capacité à <strong>surprendre positivement les clients</strong> grâce à une combinaison d’efficacité, d’empathie et de savoir‑faire.",
        "Aller au delà de la résolution de problèmes : notre objectif est d’anticiper et de dépasser les besoins de nos clients.",
        "Comprendre et répondre avec sincérité permet de tisser une relation personnelle avec chaque client, pour mettre nos facultés d’écoute et d’empathie à votre service.",
      ],
      compareText:
        "Vous hésitez encore entre une équipe interne et l’externalisation ? <a href=\"{compare}\">Comparez les deux modèles de centre d’appel</a>.",
      quoteBtn: "Obtenir un devis gratuit",
      testiTitle: "Ils témoignent leur confiance",
      testiSub: "Ces marques utilisent nos services pour leur relation client et gestion commerciale",
      testimonial: [
        "“Marta et son équipe travaillent pour nous depuis 2 ans, sur tous les métiers de la relation client - acquisition, rétention, service, recouvrement.",
        "Le service client c'est un levier de développement de chiffre d'affaires ! Chez BestCall vous aurez des profils passionnés, curieux et agiles. Vous voulez plus d'info ? N'hésitez pas !”",
      ],
      author: "@Anne-Fleur - Directrice MyBestPro",
      finalBtn: "Obtenir un devis gratuit",
    },

    compare: {
      title: "Centre d'appel traditionnel ou externalisé : que choisir ?",
      description:
        "Centre d'appel traditionnel ou externalisation nearshore ? Comparez coûts, délais, langues, technologie et conformité RGPD pour choisir votre modèle.",
      eyebrow: "Comparatif",
      h1: "BestCall face au centre d’appel traditionnel : quel modèle choisir ?",
      summaryLabel: "En résumé",
      summary:
        "Un centre d’appel traditionnel repose sur une équipe interne : contrôle direct, mais coûts fixes élevés et mise en route longue. Le modèle nearshore de BestCall externalise la relation client depuis le Portugal, avec une facturation horaire, un démarrage en quelques jours, sept langues et une couverture 24h/7j. Le bon choix dépend surtout de vos volumes d’appels, de vos besoins linguistiques et de votre tolérance aux coûts fixes.",
      tocTitle: "Sommaire",
      toc: [
        "Deux modèles pour une même mission",
        "Tableau comparatif, critère par critère",
        "Ce que change réellement chaque critère",
        "Quand chaque modèle est le bon choix",
        "5 questions à se poser",
        "Questions fréquentes",
      ],
      intro: [
        "La relation client (support, prospection, recouvrement, restructuration commerciale) peut se gérer de deux façons : en interne, avec un centre d’appel traditionnel, ou en confiant l’activité à un prestataire externe.",
        "En France, la relation client reste majoritairement gérée en interne : l’externalisation représente environ un quart de l’activité des centres de contacts (Xerfi, 2023). Les deux modèles coexistent, et le bon choix dépend du contexte de chaque entreprise.",
        "Les deux approches répondent au même besoin, mais leur structure de coûts, leur rapidité de déploiement et leur souplesse n’ont rien de comparable. Cette page compare les deux modèles, sans citer de prestataire concurrent : la comparaison porte sur deux modes d’organisation, pas sur des entreprises. Découvrez le détail de <a href=\"{services}\">nos solutions de relation client externalisée</a>.",
      ],
      models: [
        {
          title: "Le centre d’appel traditionnel",
          text: [
            "Une structure interne : l’entreprise recrute ses conseillers, les forme, loue des locaux, finance son infrastructure téléphonique et assure elle-même l’encadrement. Le contrôle hiérarchique est direct et l’intégration à la culture de l’entreprise totale. En contrepartie, des coûts fixes importants restent dus quel que soit le volume réel.",
          ],
        },
        {
          title: "L’externalisation nearshore",
          text: [
            "Confier la relation client à un prestataire proche géographiquement et culturellement. BestCall opère depuis le Portugal (Amora, Seixal), sur un modèle hybride. Plus de coûts fixes d’équipe interne : un tarif horaire indexé sur l’activité réelle, sur une infrastructure et un encadrement déjà en place.",
            "Le nearshore se situe entre deux extrêmes : le centre d’appel national, proche mais coûteux, et l’offshore lointain, économique mais éloigné culturellement et hors UE. Le Portugal réunit proximité européenne et un coût de main-d’œuvre (coût employeur) inférieur à celui de la France dans les services administratifs et de soutien, dont relèvent notamment les centres d’appels (Eurostat, 2025).",
            "Pour comprendre notre philosophie, consultez <a href=\"{why}\">pourquoi choisir BestCall</a>.",
          ],
        },
      ],
      tableEyebrow: "Tableau comparatif",
      tableTitle: "Les deux modèles, critère par critère",
      tableHead: ["Critère", "Centre d’appel traditionnel", "Externalisation nearshore (BestCall)"],
      rows: [
        ["Modèle de coût", "Coûts fixes élevés : recrutement, formation, locaux, encadrement, technologie, charges sociales", "Facturation horaire, coûts variables indexés sur l’activité réelle"],
        ["Délai de mise en route", "Plusieurs semaines à plusieurs mois", "Opérationnel en quelques jours"],
        ["Scalabilité", "Lente : chaque montée en charge suppose un nouveau cycle de recrutement", "Rapide, à la hausse comme à la baisse, sans réorganisation interne"],
        ["Langues couvertes", "Généralement 1 à 2 langues, limitées au bassin d’emploi local", "7 langues : français, portugais, anglais, espagnol, italien, allemand, turc"],
        ["Canaux", "Souvent centrés sur la voix", "Téléphone (entrant / sortant), e-mail, chat en direct et réseaux sociaux"],
        ["Horaires", "Amplitude limitée par l’organisation interne et le coût des équipes de nuit", "24h/7j"],
        ["Technologie", "À financer et maintenir en interne (téléphonie, supervision, reporting)", "Infrastructure cloud incluse, avec le standard téléphonique cloud Graam"],
        ["Intégration aux outils", "Dépend du système d’information interne ; projets d’intégration souvent lourds", "Compatible avec la plupart des CRM du marché : Salesforce, Zendesk, HubSpot, Freshdesk, Odoo, Zoho CRM ; flux de travail adaptés aux processus du client"],
        ["Cadre juridique", "Sous la responsabilité pleine et entière de l’entreprise", "Prestataire établi dans l’UE (Portugal)"],
        ["Localisation", "Dans les locaux de l’entreprise, sur le territoire national", "Au Portugal (Amora, Seixal), modèle hybride"],
        ["Engagement contractuel", "Structure durable : CDI, baux, matériel amortis sur plusieurs années", "Modèle flexible, sans engagement long terme imposé"],
        ["Pilotage et contrôle", "Contrôle direct, supervision de proximité", "Encadrement assuré par le prestataire, avec reporting et adaptation des process au client"],
        ["Expérience", "Variable selon l’entreprise", "Équipe dirigée par des professionnels cumulant plus de 25 ans d’expérience en relation client"],
      ],
      analysisEyebrow: "Analyse",
      analysisTitle: "Ce que change réellement chaque critère",
      analysis: [
        {
          title: "Coûts : fixes contre variables",
          text: [
            "C’est la différence structurante. Un centre d’appel interne transforme la relation client en centre de coûts fixes : les salaires et les charges tombent chaque mois, que le téléphone sonne ou non. L’externalisation horaire convertit ces coûts fixes en coûts variables, alignés sur les volumes réels. Pour une activité saisonnière ou en croissance, l’écart de risque financier est important.",
            "Le mode de facturation compte autant que le montant. Un tarif horaire indexé sur le temps de production réel des conseillers, l’Heure de Production de l’Agent (HPA), se vérifie ligne à ligne, là où un forfait mensuel global rend la dépense difficile à rattacher à l’activité. BestCall facture à l’heure de production, sans forfait opaque.",
          ],
          note: "Avec une équipe interne, la masse salariale et les charges sont dues même quand le volume baisse. Avec la facturation horaire, la dépense suit l’activité réelle, à la hausse comme à la baisse.",
        },
        {
          title: "Délai de mise en route",
          text: [
            "Monter une équipe interne demande de recruter, former, équiper et roder les conseillers : un cycle qui se compte en semaines, souvent en mois. Un prestataire disposant déjà des équipes, de la technologie et des procédures rend un service opérationnel en quelques jours. Cette rapidité compte lors d’un lancement de produit, d’un pic d’activité imprévu ou d’une reprise d’un service défaillant.",
          ],
        },
        {
          title: "Couverture linguistique",
          text: [
            "Un centre d’appel interne est limité par son bassin d’emploi local : recruter des conseillers natifs dans cinq ou six langues au même endroit est difficile et coûteux. Le modèle nearshore de BestCall couvre sept langues (français, portugais, anglais, espagnol, italien, allemand, turc) depuis un même dispositif, ce qui permet d’adresser plusieurs marchés européens sans multiplier les implantations.",
          ],
        },
        {
          title: "Technologie et intégration",
          text: [
            "Avec un centre d’appel traditionnel, la téléphonie, la supervision et le reporting sont à financer et à maintenir en interne. Le modèle externalisé inclut cette infrastructure : BestCall s’appuie sur le standard téléphonique cloud Graam et est compatible avec les principaux CRM du marché (Salesforce, Zendesk, HubSpot, Freshdesk, Odoo, Zoho CRM). Les équipes internes et externes travaillent sur les mêmes outils, comme un seul service.",
          ],
        },
        {
          title: "Conformité et sécurité",
          text: [
            "La protection des données reste un enjeu dans les deux modèles. En interne, l’entreprise en porte seule la responsabilité. En externalisation, elle la partage avec son prestataire, encadré par un contrat de sous-traitance conforme au RGPD.",
            "Un prestataire établi au Portugal relève directement du RGPD, puisque le pays fait partie de l’Union européenne. Avec un centre d’appel offshore hors UE, tout transfert de données vers un pays tiers doit en plus être encadré.",
          ],
        },
      ],
      midCta: "Vous voulez estimer le coût d’un service externalisé pour votre activité ?",
      ctaBtn: "Demander un devis gratuit",
      decisionEyebrow: "Aide à la décision",
      decisionTitle: "Quand chaque modèle est le bon choix",
      tradTitle: "Le traditionnel reste pertinent si…",
      trad: [
        "vos volumes d’appels sont très faibles et stables ;",
        "votre activité est mono-langue, sur un seul fuseau horaire ;",
        "vous avez besoin d’un contrôle hiérarchique direct au quotidien ;",
        "vos conseillers doivent être physiquement intégrés aux autres équipes ;",
        "des contraintes réglementaires internes imposent un traitement sur site.",
      ],
      nearTitle: "L’externalisation nearshore l’emporte si…",
      near: [
        "vos volumes sont variables, saisonniers ou en forte croissance ;",
        "vous avez besoin de plusieurs langues européennes ;",
        "vous voulez convertir des coûts fixes en coûts variables ;",
        "vous devez être opérationnel rapidement ;",
        "vous cherchez une couverture horaire étendue (soirée, week-end, 24h/7j) ;",
        "vous ne voulez pas investir dans une infrastructure téléphonique.",
      ],
      bothTitle: "Et si la réponse était les deux ?",
      both: "De nombreuses entreprises ne tranchent pas : elles gardent une petite équipe interne pour les appels à forte valeur (clients stratégiques, dossiers techniques, sujets sensibles) et confient à un prestataire le premier niveau, les débordements et les pics saisonniers. Ce modèle hybride associe le contrôle sur les cas critiques et la souplesse de coûts sur le volume. BestCall intervient aussi dans cette configuration, en complément d’une équipe interne.",
      methodEyebrow: "Méthode",
      methodTitle: "Comment choisir : 5 questions à se poser",
      questions: [
        { q: "Mes volumes sont-ils stables ou variables ?", a: "Plus ils varient, plus le modèle horaire est avantageux." },
        { q: "Ai-je besoin de plusieurs langues ?", a: "Au-delà de deux langues, l’interne devient vite difficile à staffer." },
        { q: "Quelle part de coûts fixes suis-je prêt à porter ?", a: "L’externalisation les réduit, au prix d’un contrôle moins direct." },
        { q: "Dans quel délai dois-je être opérationnel ?", a: "Quelques jours en externalisé, plusieurs semaines en interne." },
        { q: "L’infrastructure téléphonique fait-elle partie de mon cœur de métier ?", a: "Si non, la maintenir en interne est rarement rentable." },
      ],
      methodOutro:
        "Quel que soit le modèle retenu, sa réussite tient surtout au pilotage : des indicateurs définis dès le départ, des réécoutes régulières et un interlocuteur dédié côté prestataire.",
      methodologyEyebrow: "Méthodologie",
      methodology:
        "Ce comparatif s’appuie sur les pratiques courantes du secteur de la relation client et sur le modèle opérationnel de BestCall : facturation horaire, implantation au Portugal, sept langues, infrastructure cloud. Aucun prestataire concurrent n’est cité nommément : la comparaison porte sur deux modèles d’organisation. Les éléments propres à BestCall sont vérifiables sur nos pages <a href=\"{services}\">Nos Services & Solutions</a> et <a href=\"{legal}\">Mentions légales</a>.",
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Ce que les entreprises nous demandent",
      faq: [
        { q: "Quelle est la différence entre un centre d’appel traditionnel et un centre d’appel externalisé ?", a: "Un centre d’appel traditionnel est géré en interne : l’entreprise recrute, forme et encadre ses conseillers et finance son infrastructure. Un centre d’appel externalisé confie cette activité à un prestataire, avec une facturation indexée sur l’activité réelle plutôt que sur des coûts fixes." },
        { q: "L’externalisation d’un centre d’appel est-elle conforme au RGPD ?", a: "Elle peut l’être : l’entreprise qui externalise reste responsable du traitement et doit encadrer son prestataire par un contrat de sous-traitance conforme au RGPD. Un prestataire établi dans l’Union européenne, comme au Portugal, relève directement du RGPD ; avec un prestataire hors UE, tout transfert de données doit en plus être encadré." },
        { q: "Combien de temps faut-il pour lancer un service externalisé ?", a: "En quelques jours. Le prestataire dispose déjà des équipes, de la technologie et des procédures ; il n’y a pas de cycle de recrutement ni de mise en place technique à la charge du client." },
        { q: "Peut-on intégrer un centre d’appel externalisé à son CRM ?", a: "Oui, sans difficulté. Les solutions BestCall sont compatibles avec la plupart des outils du marché : Salesforce, Zendesk, HubSpot, Freshdesk, Odoo, Zoho CRM, et bien d’autres. Les flux de travail sont adaptés aux processus internes du client." },
        { q: "Dans quelles langues BestCall assure-t-il la relation client ?", a: "En sept langues : français, portugais, anglais, espagnol, italien, allemand et turc." },
        { q: "Qu’est-ce que l’externalisation nearshore ?", a: "C’est le fait de confier la relation client à un prestataire situé dans un pays proche géographiquement et culturellement. BestCall opère depuis le Portugal, au sein de l’Union européenne. Dans les services administratifs et de soutien, dont relèvent notamment les centres d’appels, le coût de main-d’œuvre (coût employeur) au Portugal est inférieur à celui de la France (Eurostat, 2025)." },
      ],
      finalTitle: "Un doute sur le modèle adapté à votre activité ?",
    },

    jobs: {
      title: "Recrutement centre d'appel Portugal | Rejoignez BestCall",
      description:
        "Rejoignez BestCall : centre d'appel externalisé humain et flexible. Découvrez nos offres d'emploi et postulez dès aujourd'hui pour intégrer notre équipe.",
      h1a: "Hey !",
      h1b: "Vous tombez bien",
      sub: "BestCall est toujours à la recherche de talents motivés pour renforcer notre équipe.",
      count: "1",
      countLabel: "offre(s) d’emploi à pourvoir",
      offer: {
        date: "Publié le 13 octobre 2025",
        title: "Opérateur/opératrice de centre d'appels (entrants/sortants)",
        facts: [
          ["Lieu de travail", "Télétravail"],
          ["Type de contrat", "Temps partiel ou plein temps"],
          ["Disponibilité", "Immédiate"],
        ],
        more: "En savoir plus",
        less: "Réduire",
        intro: "BestCall recherche des opérateurs de centre d'appels pour renforcer son équipe de service clientèle entrant et sortant.",
        profileTitle: "Profil",
        profile: "Si tu as un profil commercial / communicatif et que tu maîtrises plusieurs langues, cette opportunité est faite pour toi !",
        reqTitle: "Exigences :",
        req: [
          "Maîtrise obligatoire de l'italien, de l'espagnol, du français ou du turc.",
          "Bonnes aptitudes commerciales / communicationnelles et capacité à travailler en équipe (même à distance)",
          "Connaissances informatiques de base du point de vue de l'utilisateur",
        ],
        condTitle: "Conditions:",
        cond: [
          "Travail 100 % à distance (télétravail)",
          "Horaires : du lundi au vendredi",
          "Nous prêtons des ordinateurs portables et le matériel nécessaire.",
          "Régime du contrat initial : Prestation de services",
        ],
        outro:
          "Si vous remplissez les conditions requises et souhaitez rejoindre une équipe dynamique, remplissez le formulaire ou envoyez votre CV à <a href=\"mailto:contacto@bestcall.pt\">contacto@bestcall.pt</a>. Suivez aussi nos offres sur <a href=\"https://www.instagram.com/bestcallpt/\" target=\"_blank\" rel=\"noopener\">Instagram</a>.",
        apply: "Postuler maintenant",
      },
      formTitle: "Postuler dès maintenant",
      spontTitle: "Candidature spontanée",
      spontSub: "Tu veux rejoindre une équipe dynamique ?",
      spontBtn: "Envoyez votre CV",
    },

    quote: {
      title: "Demander un devis centre d'appel | BestCall",
      description:
        "Obtenez un devis personnalisé pour l'externalisation de votre service client : facturation à l'heure de production, sans engagement de longue durée.",
      h1: "Demandez un devis pour votre centre d'appel",
      sub: "Besoin de réponse ou d’un devis pour votre entreprise ? Nous sommes à votre écoute.",
      intro:
        "Chaque devis BestCall est personnalisé et sans engagement de longue durée : la facturation se fait à l’heure de production réelle, ajustée à votre volume et à vos langues. Après réception de votre demande, notre équipe vous contacte rapidement pour clarifier vos besoins et vous proposer une offre chiffrée.",
      nextTitle: "Comment se passe la suite ?",
      next: [
        "Après l’envoi du formulaire, notre équipe revient vers vous pour préciser votre volume d’appels, vos langues de travail, vos horaires et vos outils, puis construit une offre adaptée. Une idée approximative de votre volume mensuel et des langues concernées aide à aller plus vite, sans être indispensable.",
        "Vos clients sont ensuite pris en charge par des conseillers formés à vos langues de travail.",
      ],
      recruitTitle: "Nous recrutons aussi !",
      recruitText: "BestCall est toujours à la recherche de talents motivés pour renforcer notre équipe.",
      recruitSub: "Tu veux rejoindre une équipe dynamique ?",
      recruitBtn: "Déposer votre candidature",
    },

    legal: {
      title: "Mentions légales - BestCall",
      description: "Mentions légales du site bestcall.pt, édité par BestCall Unipessoal, Lda.",
      h1: "Mentions légales",
      sections: [
        {
          text: [
            "Le présent site, accessible à l’URL bestcall.pt (le « Site »), est édité par BestCall Unipessoal, domicilié à Rua 1º de Maio, nº 101 – 1º C, 2845-125 Amora – Seixal – Setúbal, Portugal.",
            "N° d’enregistrement au Portugal (NIPC) : PT517355817",
            // ⚠️ À METTRE À JOUR lors de la mise en ligne : le nouvel hébergeur (ex. Netlify) remplacera GANDI.
            "Hébergement du site : GANDI SAS, société par actions simplifiée au capital de 630 000 €, dont le siège social est situé 63-65 boulevard Masséna, 75013 Paris, France, immatriculée au RCS de Paris sous le numéro 423 093 459.",
            "Téléphone : (+33)6 20 17 54 31<br>E-mail : <a href=\"mailto:contacto@bestcall.pt\">contacto@bestcall.pt</a>",
          ],
        },
        {
          title: "Propriété intellectuelle",
          text: [
            "L’ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive de BestCall Unipessoal, Lda., sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, de ces contenus, par quelque procédé que ce soit, sans autorisation écrite préalable de BestCall, est interdite et constitutive d’une contrefaçon.",
          ],
        },
        {
          title: "Collecte des données",
          text: [
            "Dans le cadre de l’utilisation de ce site, BestCall est susceptible de collecter des données à caractère personnel via ses formulaires :",
            "— <em>Formulaire de contact / demande de devis</em> : nom, prénom, adresse e-mail, numéro de téléphone. Ces données sont traitées dans le seul but de répondre à votre demande d’information.",
            "— <em>Formulaire de candidature (recrutement)</em> : nom, prénom, e-mail, téléphone, poste souhaité, CV et lettre de motivation. Ces données sont traitées dans le cadre de nos processus de recrutement et sont conservées pendant la durée du processus, puis pendant une durée maximale de 2 ans en l’absence de suite donnée, sauf opposition de votre part.",
            "Dans tous les cas, vos données sont collectées avec votre consentement et conservées pendant la durée nécessaire au traitement de votre demande, conformément aux obligations légales applicables. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement et d’opposition au traitement de vos données. Pour exercer ces droits, vous pouvez nous contacter à l’adresse <a href=\"mailto:contacto@bestcall.pt\">contacto@bestcall.pt</a>.",
          ],
        },
        {
          title: "Cookies",
          text: [
            "Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.",
          ],
        },
      ],
    },
  },
};

export default fr;
export type Content = typeof fr;
