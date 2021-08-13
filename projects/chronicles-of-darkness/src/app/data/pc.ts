import { ICharacter, IData, IVirtueOrVice } from './data.models';

export class PlayerCharacter {
  meta: {
    age: number;
    name: string;
    portrait: string;
  };
  virtues: IVirtueOrVice[];
  vices: IVirtueOrVice[];
  attributes: {};
  skills: {};
  constructor(data: IData, options: ICharacter) {
    // this.virtues = options.virtues.map(id => data.virtues.find(i => i.id === id));
  }
}

// attributes:
// composure: 1
// dexterity: 2
// intelligence: 3
// manipulation: 1
// presence: 3
// resolve: 1
// stamina: 1
// strength: 3
// wits: 1
// __proto__: Object
// concept: "gfdgfg"
// equipment: [{…}]
// id: "kjpgil1qct"
// integrity: 7
// merits: (2) [{…}, {…}]
// meta: {age: 1}
// name: "TEST"
// size: 5
// skills: Array(25)
// 0: {id: 1, name: "academics", specialties: Array(1), value: 3, type: 1}
// 1: {type: 1, id: 2, name: "crafts", value: 2, specialties: Array(0)}
// 2: {type: 1, value: 2, specialties: Array(0), name: "enigmas", id: 3}
// 3: {specialties: Array(0), id: 4, value: 0, name: "investigation", type: 1}
// 4: {value: 2, specialties: Array(0), name: "medicine", type: 1, id: 5}
// 5: {id: 6, specialties: Array(0), value: 0, name: "occult", type: 1}
// 6: {name: "politics", specialties: Array(0), value: 0, id: 7, type: 1}
// 7: {type: 1, value: 0, name: "science", id: 8, specialties: Array(0)}
// 8: {name: "archery", id: 9, value: 0, type: 2, specialties: Array(0)}
// 9: {value: 0, id: 10, type: 2, name: "athletics", specialties: Array(0)}
// 10: {name: "brawl", id: 11, specialties: Array(0), type: 2, value: 0}
// 11: {specialties: Array(0), value: 0, type: 2, name: "firearms", id: 12}
// 12: {type: 2, id: 13, name: "larceny", value: 0, specialties: Array(0)}
// 13: {specialties: Array(0), id: 14, name: "ride", value: 0, type: 2}
// 14: {type: 2, specialties: Array(0), value: 5, id: 15, name: "stealth"}
// 15: {value: 0, id: 16, specialties: Array(0), name: "survival", type: 2}
// 16: {type: 2, name: "weaponry", value: 0, specialties: Array(0), id: 17}
// 17: {type: 3, id: 18, specialties: Array(0), name: "animal Ken", value: 0}
// 18: {specialties: Array(0), value: 0, id: 19, type: 3, name: "empathy"}
// 19: {specialties: Array(0), type: 3, value: 0, id: 20, name: "expression"}
// 20: {specialties: Array(0), name: "intimidation", value: 0, type: 3, id: 21}
// 21: {name: "persuasion", type: 3, value: 0, specialties: Array(0), id: 22}
// 22: {id: 23, type: 3, value: 0, specialties: Array(0), name: "socialize"}
// 23: {specialties: Array(0), value: 0, name: "streetwise", type: 3, id: 24}
// 24: {type: 3, name: "subterfuge", value: 4, id: 25, specialties: Array(0)}
// length: 25
// __proto__: Array(0)
// template: "dggdf"
// vice: 1606921445295
// virtue: 1606920493384
