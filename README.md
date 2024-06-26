# Alle stappen om te namen voor het maken van een nuxt3 project

## Stap 1 - aanmaken
Voor het aanmaken van een nuxt3 project pak je de commandline/terminal nodig.

Vul hier het volgende in:\
`npx nuxi init project-name`

Hierna wordt je gevraagd of je npm, pnpm, yarn of bun wil gebruiken. Ik kies hier zelf altijd voor npm omdat dat veel voorkomend is.

Nu kan nuxt ook nog vragen of je de dependencies wilt downloaden. Kies ja, als je dat niet meteen laat doen moet je dat later nog doen doormiddel van `npm install` te typen.

Je krijgt ook de vragen of je een git repository wil initializen. Als je met github desktop samenwerkt hoeft dat niet zolang je het project in je github folded het staan.

## Stap 2 - Code aanpassen
Als je klaar ben met de installatie dan is het tijd voor het aanpassen van de code. Om meteen een beeld te krijgen van hoe je code eruit gaat zien start je je project doormiddel van **NPM SCRIPT** box op **dev** te klikken of `npm run dev` te typing in de terminal.

Open het `app.vue` bestand en pas de code tussen de <div> </div> tags aan.

## Stap 3 - Pagina's maken
Op een websit heb je te maken met verschillende pagina's. Met nuxt3 kun dat gemakkelijk.

Maak een map met genaamd *pages* in je hoofd folder. Maak een home component aan, *index.vue*. Hierna kun je de *app.vue* verwijderen.
In de *index.vue* type je [vbase-3-setup](##vbase-not-working). Nu heb je een template om te gebruiken voor je pagina.
Nu is het aan te raden om je *run dev* af te sluiten en opnieuw te openen. 

### Stap 3.2 - Sub pagina's maken
Als je een subpagina wil maken, voor bijvoorbeeld specifiek items van een andere pagina, kun je dat doen doormiddel van een sub folden in je pages folder.

## Stap 4


## Stap 5 - Tailwind toevoegen
Om te beginnen moet je tailwindcss toevoegen aan je project. Dit doen we door `npm install --save-dev @nuxtjs/tailwindcss` in de terminal te typen/plakken.

Hierna plak je `modules: ['@nuxtjs/tailwindcss']` in je *nuxt.config.ts* file.

Om extra tailwind/css toe te voegen kun je en extra bestand aanmaken. 

`folder/assets/css/tailwind.css` hierin komen de @ tags:\
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Daarna kun je de rest van je css netzetten die overal gebruiken kan worden.


# Extra info
Laat alsjeblieft de foldes `.nuxt`, `node_modules` en `.gitignore` alleen. Deze heeft nuxt nodig om je project te kunnen displayen of builden. De gitignore zorgt ervoor dat er geen overbodige bestanden op git belanden. Met andere woorden deze komen dus niet op je repository te staan. Mocht je je project hebben overgezet en toch de dependencies willen gebruiken open dan een nieuwe terminal en type `npm install`.

## vbase not working
Mocht je tegen het probleem aanlopen dat je geen opties krijgt wanneer je `vbase` type, dan kan het zijn dat je deze extensie moet downloaden. 
[Vue snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)