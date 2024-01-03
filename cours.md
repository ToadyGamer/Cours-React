# React

Pourquoi utiliser React ?
React = Biliotheque JS pour faire une interface utilisateur. Fait par facebook et la commu.

Le React retourne une fonction qui retourne du JSX.

Tout ce passe dans une seul et même page.

## Ressources 
- React : https://fr.react.dev
- Pour des projets js : Eslint

## Commencer un projet REACT

Création d'un projet Next.js : ```npm create vite@latest my-react-app --template``` 
Mettre a jour tout :  ```npm install```  
Lancer l'app : ```npm run dev```  

## Définition
Hook : Type de Valeurs
SPA : Single Page Application
UseEffect : On met tous les events à l'interieur
UseState : Valeur que l'on peut modifier pour la page (modification dynamique)
UseReducer : Pareil que UseState mais fait des DeepUpdate (plus optimisé) ainsi que de voir la validité des valeurs
API Context : Partage une variable dans toute l'application
Combinaison de UseReducer + API Context = Store
Hook : UseState & UseReducer

## Fonctionnement

Props :
    Dans la function parent =
    '<'NomDuTSX LeNomUtiliserPourAppelerLaValeur={InformationADonnerSeTrouvantDansLeParant} LeNomUtiliserPourAppelerLaFonction={InformationADonnerSeTrouvantDansLeParant}'/>'

    Dans la function enfant =
    function NomDeLaFonctionPrincipale(props : {LeNomUtiliserPourAppelerLaValeur : (string),
                                                LeNomUtiliserPourAppelerLaFonction : () => void})

    Pour utiliser les données récupéré : props.LeNomUtiliserPourAppelerLaValeur;

useReducer :
  const [state, dispatch] = useReducer(counterReducer, { count: 0, bis:3 });

  function counterReducer(state : any, action : any) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1};
      case 'DECREMENT':
        return { ...state , count: state.count - action.amount };
        default:
        throw new Error();
    }
  }

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'DECREMENT', amount: 2 })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', amount: 1 })}>+</button>
    </>
}

# Next js
Next est un framework react qui permet de créer des applications Wen. L'interface se compose de composants react et le framework se charge d'apporter tous les outils de bundling, complications et bien plus...

## Fonctionnalités

- Systeme de routage : Next.js utilise un system de routage direcement base sur le susteme de fichier
- Rendu performant : Next.js permet de faire du rendu server (SSR), du SSG(Static Size Generation) et du rendu client.
- Data fetching: Next.js facilite l'utilisation d'async/await pour faire des appels API.
- CSS : Next.js permet d'utiliser CSS, Sass, Less, Stylus et CSS-In-JS. Et surtout tailwindcss.
- Optilisation : Next.js permet de faire de l'optimisation d'image, de code splitting, de prefectching, de lazy loading et bien plus.
- Typescript : Next.js permet d'utiliser Typescript

## Installation

Pre requis :  - Node.js 18.17 ou plus
              - Github compte
              - Versel