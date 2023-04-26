import { PatronFaction } from '../models/common';

export const PATRON_FACTIONS: PatronFaction[] = [
  {
    id: 'pfc_adeptus_astra_telepathica',
    name: 'Adeptus Astra Telepathica',
    influence: {
      fc_adeptus_astra_telepathica: 2
    },
    duties: ['pdt_astropath', 'pdt_sister_of_silence'],
    labels: {
      description: 'Your Patron is a member of the Adeptus Astra Telepathica, the Faction responsible for the capture and containment of psykers in the Imperium. Some are trained and deployed to serve as sanctioned psykers, while most are offered up as sacrifices for the Astronomican. They are likely a psyker themself, using their anomalous abilities to assist another Faction in communication or combat, or perhaps someone who hunts and captures rogue psykers.'
    }
  },
  {
    id: 'pfc_adeptus_mechanicus',
    name: 'Adeptus Mechanicus',
    influence: {
      pfc_adeptus_mechanicus: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_adeptus_administratum',
    name: 'Adeptus Administratum',
    influence: {
      pfc_adeptus_administratum: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_astra_militarum',
    name: 'Astra Militarum',
    influence: {
      fc_astra_militarum: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_adeptus_ministorum',
    name: 'Adeptus Ministorum',
    influence: {
      fc_adeptus_ministorum: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_inquisition',
    name: 'Inquisition',
    influence: {
      fc_inquisition: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_imperial_fleet',
    name: 'Imperial Fleet',
    influence: {
      fc_imperial_fleet: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_rogue_trader_dynasty',
    name: 'Rogue Trader Dynasty',
    influence: {
      fc_rogue_trader_dynasty: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  },
  {
    id: 'pfc_infractionists',
    name: 'Infractionists',
    influence: {
      fc_infractionists: 2
    },
    duties: [],
    labels: {
      description: ''
    }
  }
];
