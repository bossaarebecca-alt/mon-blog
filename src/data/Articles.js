const articles = [
  {
    id: 1,
    titre: "Comment j'ai appris Git en une journée",
    categorie: "Git",
    date: "24 Avril 2026",
    resume: "Découvrez comment j'ai maîtrisé Git et GitHub en partant de zéro, avec les commandes essentielles et les erreurs à éviter.",
    contenu: "Git est un outil indispensable pour tout développeur. J'ai commencé par installer Git, configurer mon nom et email, puis j'ai appris le cycle add → commit → push. La notion de branches m'a permis de travailler sans risquer de casser mon code principal. GitHub Pages m'a permis de publier ma première page web en ligne gratuitement.",
    emoji: "🌿"
  },
  {
    id: 2,
    titre: "Mes premiers pas avec HTML et CSS",
    categorie: "HTML/CSS",
    date: "24 Avril 2026",
    resume: "Comment j'ai créé ma première page web avec HTML et CSS, en apprenant Flexbox, les animations et le responsive design.",
    contenu: "HTML est la structure de la page, CSS est le design. J'ai appris à créer des sections, styliser avec des couleurs, utiliser Flexbox pour aligner les éléments, et ajouter des animations CSS pour rendre la page vivante. Le responsive design avec les media queries permet d'adapter la page à tous les écrans.",
    emoji: "🎨"
  },
  {
    id: 3,
    titre: "JavaScript — rendre une page interactive",
    categorie: "JavaScript",
    date: "24 Avril 2026",
    resume: "J'ai découvert JavaScript en ajoutant des interactions à ma page : boutons, compteurs, mode sombre et navbar animée.",
    contenu: "JavaScript permet de manipuler le DOM — c'est-à-dire modifier ce qui s'affiche sur la page en temps réel. J'ai créé un bouton interactif, un compteur de clics, une navbar qui change de couleur au scroll, et un mode sombre qui bascule avec classList.toggle.",
    emoji: "⚡"
  },
  {
    id: 4,
    titre: "React — mon premier framework",
    categorie: "React",
    date: "24 Avril 2026",
    resume: "Découverte de React avec les composants, les props et useState pour créer une Todo List interactive.",
    contenu: "React m'a permis de créer des composants réutilisables. Avec useState je gère l'état de mon application — par exemple une liste de tâches qui se met à jour automatiquement quand j'ajoute ou supprime un élément. React Router permet de naviguer entre plusieurs pages sans recharger le navigateur.",
    emoji: "⚛️"
  },
  {
    id: 5,
    titre: "Déployer son app React avec Vercel",
    categorie: "Déploiement",
    date: "24 Avril 2026",
    resume: "Comment j'ai mis mon app React en ligne gratuitement avec Vercel en quelques clics.",
    contenu: "Vercel se connecte directement à GitHub. Il suffit d'importer ton dépôt, cliquer sur Deploy, et ton app est en ligne avec une vraie URL publique. Chaque git push met à jour automatiquement le site en production. J'ai appris à corriger les erreurs de build liées aux noms de fichiers sensibles à la casse sur Linux.",
    emoji: "🚀"
  },
  {
    id: 6,
    titre: "Créer une boutique en ligne avec React",
    categorie: "React",
    date: "25 Avril 2026",
    resume: "Mon prochain projet — construire une boutique en ligne complète avec panier d'achat en React.",
    contenu: "La boutique en ligne sera mon prochain grand projet. Elle contiendra une liste de produits, un système de filtrage par catégorie, un panier d'achat géré avec useState, et une page de commande. Ce projet va consolider toutes mes connaissances React.",
    emoji: "🛍️"
  },
]

export default articles