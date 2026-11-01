export interface Area {
  code?: string;
  name?: string;
  geojson: string;
  numberObjective?: number;
  visited: boolean;
  km?: number;
  days?: number;
  stages?: number;
}

export interface TrekCard {
  id: number;
  country: string;
  description: string;
  distanceTravelled: number;
  areas: Area[];
}

export const cards: TrekCard[] = [
  {
    id: 1,
    country: "France",
    description: "Tour de France",
    distanceTravelled: 1250,
    areas: [
      {
        code: "01",
        name: "Ain",
        geojson:
          "/assets/data/geojson/country/france/departements/01-ain/departement-01-ain.geojson",
        visited: false,
      },
      {
        code: "02",
        name: "Aisne",
        geojson:
          "/assets/data/geojson/country/france/departements/02-aisne/departement-02-aisne.geojson",
        visited: false,
      },
      {
        code: "03",
        name: "Allier",
        geojson:
          "/assets/data/geojson/country/france/departements/03-allier/departement-03-allier.geojson",
        visited: false,
      },
      {
        code: "04",
        name: "Alpes-de-Haute-Provence",
        geojson:
          "/assets/data/geojson/country/france/departements/04-alpes-de-haute-provence/departement-04-alpes-de-haute-provence.geojson",
        visited: false,
      },
      {
        code: "05",
        name: "Hautes-Alpes",
        geojson:
          "/assets/data/geojson/country/france/departements/05-hautes-alpes/departement-05-hautes-alpes.geojson",
        visited: false,
      },
      {
        code: "06",
        name: "Alpes-Maritimes",
        geojson:
          "/assets/data/geojson/country/france/departements/06-alpes-maritimes/departement-06-alpes-maritimes.geojson",
        visited: false,
      },
      {
        code: "07",
        name: "Ardèche",
        geojson:
          "/assets/data/geojson/country/france/departements/07-ardeche/departement-07-ardeche.geojson",
        visited: false,
      },
      {
        code: "08",
        name: "Ardennes",
        geojson:
          "/assets/data/geojson/country/france/departements/08-ardennes/departement-08-ardennes.geojson",
        visited: false,
      },
      {
        code: "09",
        name: "Ariège",
        geojson:
          "/assets/data/geojson/country/france/departements/09-ariege/departement-09-ariege.geojson",
        visited: false,
      },
      {
        code: "10",
        name: "Aube",
        geojson:
          "/assets/data/geojson/country/france/departements/10-aube/departement-10-aube.geojson",
        visited: false,
      },
      {
        code: "11",
        name: "Aude",
        geojson:
          "/assets/data/geojson/country/france/departements/11-aude/departement-11-aude.geojson",
        visited: false,
      },
      {
        code: "12",
        name: "Aveyron",
        geojson:
          "/assets/data/geojson/country/france/departements/12-aveyron/departement-12-aveyron.geojson",
        visited: false,
      },
      {
        code: "13",
        name: "Bouches-du-Rhône",
        geojson:
          "/assets/data/geojson/country/france/departements/13-bouches-du-rhone/departement-13-bouches-du-rhone.geojson",
        visited: false,
      },
      {
        code: "14",
        name: "Calvados",
        geojson:
          "/assets/data/geojson/country/france/departements/14-calvados/departement-14-calvados.geojson",
        visited: false,
      },
      {
        code: "15",
        name: "Cantal",
        geojson:
          "/assets/data/geojson/country/france/departements/15-cantal/departement-15-cantal.geojson",
        visited: false,
      },
      {
        code: "16",
        name: "Charente",
        geojson:
          "/assets/data/geojson/country/france/departements/16-charente/departement-16-charente.geojson",
        visited: false,
      },
      {
        code: "17",
        name: "Charente-Maritime",
        geojson:
          "/assets/data/geojson/country/france/departements/17-charente-maritime/departement-17-charente-maritime.geojson",
        visited: false,
      },
      {
        code: "18",
        name: "Cher",
        geojson:
          "/assets/data/geojson/country/france/departements/18-cher/departement-18-cher.geojson",
        visited: false,
      },
      {
        code: "19",
        name: "Corrèze",
        geojson:
          "/assets/data/geojson/country/france/departements/19-correze/departement-19-correze.geojson",
        visited: false,
      },
      {
        code: "21",
        name: "Côte-d'Or",
        geojson:
          "/assets/data/geojson/country/france/departements/21-cote-d-or/departement-21-cote-d-or.geojson",
        visited: false,
      },
      {
        code: "22",
        name: "Côtes-d'Armor",
        geojson:
          "/assets/data/geojson/country/france/departements/22-cotes-d-armor/departement-22-cotes-d-armor.geojson",
        numberObjective: 1,
        visited: true,
        km: 150,
        days: 2,
        stages: 10,
      },
      {
        code: "23",
        name: "Creuse",
        geojson:
          "/assets/data/geojson/country/france/departements/23-creuse/departement-23-creuse.geojson",
        visited: false,
      },
      {
        code: "24",
        name: "Dordogne",
        geojson:
          "/assets/data/geojson/country/france/departements/24-dordogne/departement-24-dordogne.geojson",
        visited: false,
      },
      {
        code: "25",
        name: "Doubs",
        geojson:
          "/assets/data/geojson/country/france/departements/25-doubs/departement-25-doubs.geojson",
        visited: false,
      },
      {
        code: "26",
        name: "Drôme",
        geojson:
          "/assets/data/geojson/country/france/departements/26-drome/departement-26-drome.geojson",
        visited: false,
      },
      {
        code: "27",
        name: "Eure",
        geojson:
          "/assets/data/geojson/country/france/departements/27-eure/departement-27-eure.geojson",
        visited: false,
      },
      {
        code: "28",
        name: "Eure-et-Loir",
        geojson:
          "/assets/data/geojson/country/france/departements/28-eure-et-loir/departement-28-eure-et-loir.geojson",
        visited: false,
      },
      {
        code: "29",
        name: "Finistère",
        geojson:
          "/assets/data/geojson/country/france/departements/29-finistere/departement-29-finistere.geojson",
        numberObjective: 4,
        visited: true,
        km: 400,
        days: 20,
        stages: 50,
      },
      {
        code: "2A",
        name: "Corse-du-Sud",
        geojson:
          "/assets/data/geojson/country/france/departements/2A-corse-du-sud/departement-2A-corse-du-sud.geojson",
        visited: false,
      },
      {
        code: "2B",
        name: "Haute-Corse",
        geojson:
          "/assets/data/geojson/country/france/departements/2B-haute-corse/departement-2B-haute-corse.geojson",
        visited: false,
      },
      {
        code: "30",
        name: "Gard",
        geojson:
          "/assets/data/geojson/country/france/departements/30-gard/departement-30-gard.geojson",
        visited: false,
      },
      {
        code: "31",
        name: "Haute-Garonne",
        geojson:
          "/assets/data/geojson/country/france/departements/31-haute-garonne/departement-31-haute-garonne.geojson",
        visited: false,
      },
      {
        code: "32",
        name: "Gers",
        geojson:
          "/assets/data/geojson/country/france/departements/32-gers/departement-32-gers.geojson",
        visited: false,
      },
      {
        code: "33",
        name: "Gironde",
        geojson:
          "/assets/data/geojson/country/france/departements/33-gironde/departement-33-gironde.geojson",
        visited: false,
      },
      {
        code: "34",
        name: "Hérault",
        geojson:
          "/assets/data/geojson/country/france/departements/34-herault/departement-34-herault.geojson",
        visited: false,
      },
      {
        code: "35",
        name: "Ille-et-Vilaine",
        geojson:
          "/assets/data/geojson/country/france/departements/35-ille-et-vilaine/departement-35-ille-et-vilaine.geojson",
        visited: false,
      },
      {
        code: "36",
        name: "Indre",
        geojson:
          "/assets/data/geojson/country/france/departements/36-indre/departement-36-indre.geojson",
        visited: false,
      },
      {
        code: "37",
        name: "Indre-et-Loire",
        geojson:
          "/assets/data/geojson/country/france/departements/37-indre-et-loire/departement-37-indre-et-loire.geojson",
        visited: false,
      },
      {
        code: "38",
        name: "Isère",
        geojson:
          "/assets/data/geojson/country/france/departements/38-isere/departement-38-isere.geojson",
        visited: false,
      },
      {
        code: "39",
        name: "Jura",
        geojson:
          "/assets/data/geojson/country/france/departements/39-jura/departement-39-jura.geojson",
        visited: false,
      },
      {
        code: "40",
        name: "Landes",
        geojson:
          "/assets/data/geojson/country/france/departements/40-landes/departement-40-landes.geojson",
        visited: false,
      },
      {
        code: "41",
        name: "Loir-et-Cher",
        geojson:
          "/assets/data/geojson/country/france/departements/41-loir-et-cher/departement-41-loir-et-cher.geojson",
        visited: false,
      },
      {
        code: "42",
        name: "Loire",
        geojson:
          "/assets/data/geojson/country/france/departements/42-loire/departement-42-loire.geojson",
        visited: false,
      },
      {
        code: "43",
        name: "Haute-Loire",
        geojson:
          "/assets/data/geojson/country/france/departements/43-haute-loire/departement-43-haute-loire.geojson",
        visited: false,
      },
      {
        code: "44",
        name: "Loire-Atlantique",
        geojson:
          "/assets/data/geojson/country/france/departements/44-loire-atlantique/departement-44-loire-atlantique.geojson",
        visited: false,
      },
      {
        code: "45",
        name: "Loiret",
        geojson:
          "/assets/data/geojson/country/france/departements/45-loiret/departement-45-loiret.geojson",
        visited: false,
      },
      {
        code: "46",
        name: "Lot",
        geojson:
          "/assets/data/geojson/country/france/departements/46-lot/departement-46-lot.geojson",
        visited: false,
      },
      {
        code: "47",
        name: "Lot-et-Garonne",
        geojson:
          "/assets/data/geojson/country/france/departements/47-lot-et-garonne/departement-47-lot-et-garonne.geojson",
        visited: false,
      },
      {
        code: "48",
        name: "Lozère",
        geojson:
          "/assets/data/geojson/country/france/departements/48-lozere/departement-48-lozere.geojson",
        visited: false,
      },
      {
        code: "49",
        name: "Maine-et-Loire",
        geojson:
          "/assets/data/geojson/country/france/departements/49-maine-et-loire/departement-49-maine-et-loire.geojson",
        visited: false,
      },
      {
        code: "50",
        name: "Manche",
        geojson:
          "/assets/data/geojson/country/france/departements/50-manche/departement-50-manche.geojson",
        visited: false,
      },
      {
        code: "51",
        name: "Marne",
        geojson:
          "/assets/data/geojson/country/france/departements/51-marne/departement-51-marne.geojson",
        visited: false,
      },
      {
        code: "52",
        name: "Haute-Marne",
        geojson:
          "/assets/data/geojson/country/france/departements/52-haute-marne/departement-52-haute-marne.geojson",
        visited: false,
      },
      {
        code: "53",
        name: "Mayenne",
        geojson:
          "/assets/data/geojson/country/france/departements/53-mayenne/departement-53-mayenne.geojson",
        visited: false,
      },
      {
        code: "54",
        name: "Meurthe-et-Moselle",
        geojson:
          "/assets/data/geojson/country/france/departements/54-meurthe-et-moselle/departement-54-meurthe-et-moselle.geojson",
        visited: false,
      },
      {
        code: "55",
        name: "Meuse",
        geojson:
          "/assets/data/geojson/country/france/departements/55-meuse/departement-55-meuse.geojson",
        visited: false,
      },
      {
        code: "56",
        name: "Morbihan",
        geojson:
          "/assets/data/geojson/country/france/departements/56-morbihan/departement-56-morbihan.geojson",
        visited: false,
      },
      {
        code: "57",
        name: "Moselle",
        geojson:
          "/assets/data/geojson/country/france/departements/57-moselle/departement-57-moselle.geojson",
        visited: false,
      },
      {
        code: "58",
        name: "Nièvre",
        geojson:
          "/assets/data/geojson/country/france/departements/58-nievre/departement-58-nievre.geojson",
        visited: false,
      },
      {
        code: "59",
        name: "Nord",
        geojson:
          "/assets/data/geojson/country/france/departements/59-nord/departement-59-nord.geojson",
        visited: false,
      },
      {
        code: "60",
        name: "Oise",
        geojson:
          "/assets/data/geojson/country/france/departements/60-oise/departement-60-oise.geojson",
        visited: false,
      },
      {
        code: "61",
        name: "Orne",
        geojson:
          "/assets/data/geojson/country/france/departements/61-orne/departement-61-orne.geojson",
        visited: false,
      },
      {
        code: "62",
        name: "Pas-de-Calais",
        geojson:
          "/assets/data/geojson/country/france/departements/62-pas-de-calais/departement-62-pas-de-calais.geojson",
        visited: false,
      },
      {
        code: "63",
        name: "Puy-de-Dôme",
        geojson:
          "/assets/data/geojson/country/france/departements/63-puy-de-dome/departement-63-puy-de-dome.geojson",
        visited: false,
      },
      {
        code: "64",
        name: "Pyrénées-Atlantiques",
        geojson:
          "/assets/data/geojson/country/france/departements/64-pyrenees-atlantiques/departement-64-pyrenees-atlantiques.geojson",
        visited: false,
      },
      {
        code: "65",
        name: "Hautes-Pyrénées",
        geojson:
          "/assets/data/geojson/country/france/departements/65-hautes-pyrenees/departement-65-hautes-pyrenees.geojson",
        visited: false,
      },
      {
        code: "66",
        name: "Pyrénées-Orientales",
        geojson:
          "/assets/data/geojson/country/france/departements/66-pyrenees-orientales/departement-66-pyrenees-orientales.geojson",
        visited: false,
      },
      {
        code: "67",
        name: "Bas-Rhin",
        geojson:
          "/assets/data/geojson/country/france/departements/67-bas-rhin/departement-67-bas-rhin.geojson",
        visited: false,
      },
      {
        code: "68",
        name: "Haut-Rhin",
        geojson:
          "/assets/data/geojson/country/france/departements/68-haut-rhin/departement-68-haut-rhin.geojson",
        visited: false,
      },
      {
        code: "69",
        name: "Rhône",
        geojson:
          "/assets/data/geojson/country/france/departements/69-rhone/departement-69-rhone.geojson",
        visited: false,
      },
      {
        code: "70",
        name: "Haute-Saône",
        geojson:
          "/assets/data/geojson/country/france/departements/70-haute-saone/departement-70-haute-saone.geojson",
        visited: false,
      },
      {
        code: "71",
        name: "Saône-et-Loire",
        geojson:
          "/assets/data/geojson/country/france/departements/71-saone-et-loire/departement-71-saone-et-loire.geojson",
        visited: false,
      },
      {
        code: "72",
        name: "Sarthe",
        geojson:
          "/assets/data/geojson/country/france/departements/72-sarthe/departement-72-sarthe.geojson",
        visited: false,
      },
      {
        code: "73",
        name: "Savoie",
        geojson:
          "/assets/data/geojson/country/france/departements/73-savoie/departement-73-savoie.geojson",
        visited: false,
      },
      {
        code: "74",
        name: "Haute-Savoie",
        geojson:
          "/assets/data/geojson/country/france/departements/74-haute-savoie/departement-74-haute-savoie.geojson",
        visited: false,
      },
      {
        code: "75",
        name: "Paris",
        geojson:
          "/assets/data/geojson/country/france/departements/75-paris/departement-75-paris.geojson",
        visited: false,
      },
      {
        code: "76",
        name: "Seine-Maritime",
        geojson:
          "/assets/data/geojson/country/france/departements/76-seine-maritime/departement-76-seine-maritime.geojson",
        visited: false,
      },
      {
        code: "77",
        name: "Seine-et-Marne",
        geojson:
          "/assets/data/geojson/country/france/departements/77-seine-et-marne/departement-77-seine-et-marne.geojson",
        visited: false,
      },
      {
        code: "78",
        name: "Yvelines",
        geojson:
          "/assets/data/geojson/country/france/departements/78-yvelines/departement-78-yvelines.geojson",
        visited: false,
      },
      {
        code: "79",
        name: "Deux-Sèvres",
        geojson:
          "/assets/data/geojson/country/france/departements/79-deux-sevres/departement-79-deux-sevres.geojson",
        visited: false,
      },
      {
        code: "80",
        name: "Somme",
        geojson:
          "/assets/data/geojson/country/france/departements/80-somme/departement-80-somme.geojson",
        visited: false,
      },
      {
        code: "81",
        name: "Tarn",
        geojson:
          "/assets/data/geojson/country/france/departements/81-tarn/departement-81-tarn.geojson",
        visited: false,
      },
      {
        code: "82",
        name: "Tarn-et-Garonne",
        geojson:
          "/assets/data/geojson/country/france/departements/82-tarn-et-garonne/departement-82-tarn-et-garonne.geojson",
        visited: false,
      },
      {
        code: "83",
        name: "Var",
        geojson:
          "/assets/data/geojson/country/france/departements/83-var/departement-83-var.geojson",
        visited: false,
      },
      {
        code: "84",
        name: "Vaucluse",
        geojson:
          "/assets/data/geojson/country/france/departements/84-vaucluse/departement-84-vaucluse.geojson",
        visited: false,
      },
      {
        code: "85",
        name: "Vendée",
        geojson:
          "/assets/data/geojson/country/france/departements/85-vendee/departement-85-vendee.geojson",
        visited: false,
      },
      {
        code: "86",
        name: "Vienne",
        geojson:
          "/assets/data/geojson/country/france/departements/86-vienne/departement-86-vienne.geojson",
        visited: false,
      },
      {
        code: "87",
        name: "Haute-Vienne",
        geojson:
          "/assets/data/geojson/country/france/departements/87-haute-vienne/departement-87-haute-vienne.geojson",
        visited: false,
      },
      {
        code: "88",
        name: "Vosges",
        geojson:
          "/assets/data/geojson/country/france/departements/88-vosges/departement-88-vosges.geojson",
        visited: false,
      },
      {
        code: "89",
        name: "Yonne",
        geojson:
          "/assets/data/geojson/country/france/departements/89-yonne/departement-89-yonne.geojson",
        visited: false,
      },
      {
        code: "90",
        name: "Territoire de Belfort",
        geojson:
          "/assets/data/geojson/country/france/departements/90-territoire-de-belfort/departement-90-territoire-de-belfort.geojson",
        visited: false,
      },
      {
        code: "91",
        name: "Essonne",
        geojson:
          "/assets/data/geojson/country/france/departements/91-essonne/departement-91-essonne.geojson",
        visited: false,
      },
      {
        code: "92",
        name: "Hauts-de-Seine",
        geojson:
          "/assets/data/geojson/country/france/departements/92-hauts-de-seine/departement-92-hauts-de-seine.geojson",
        visited: false,
      },
      {
        code: "93",
        name: "Seine-Saint-Denis",
        geojson:
          "/assets/data/geojson/country/france/departements/93-seine-saint-denis/departement-93-seine-saint-denis.geojson",
        visited: false,
      },
      {
        code: "94",
        name: "Val-de-Marne",
        geojson:
          "/assets/data/geojson/country/france/departements/94-val-de-marne/departement-94-val-de-marne.geojson",
        visited: false,
      },
      {
        code: "95",
        name: "Val-d'Oise",
        geojson:
          "/assets/data/geojson/country/france/departements/95-val-d-oise/departement-95-val-d-oise.geojson",
        visited: false,
      },
    ],
  },
  {
    id: 2,
    country: "Angleterre",
    description: "Description de la carte 2",
    distanceTravelled: 250,
    areas: [
      {
        code: "ENG",
        name: "England",
        geojson: "/assets/data/geojson/country/united-kingdom/json/eurostat/ew/nuts1.json",
        visited: false,
      },
      {
        code: "SCO",
        name: "Scotland",
        geojson: "/assets/data/geojson/country/united-kingdom/json/eurostat/sco/nuts2.json",
        visited: true,
        km: 150,
        days: 2,
        stages: 10,
      },
    ],
  },

  {
    id: 3,
    country: "Allemagne",
    description: "Description de la carte 3",
    distanceTravelled: 2500,
    areas: [
      {
        code: "DE",
        name: "Allemagne",
        geojson: "/assets/data/geojson/country/germany/3_regierungsbezirke/2_hoch.geo.json",
        visited: false,
      },
    ],
  },
  {
    id: 4,
    country: "Italie",
    description: "Description de la carte 4",
    distanceTravelled: 652,
    areas: [],
  },
];
