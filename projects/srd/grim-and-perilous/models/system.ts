export class System {
  AGILITY_WEAPON_BONUS?: boolean;
  BRAWN_WEAPON_BONUS?: boolean;
  INEFFECTIVE_WEAPON?: boolean;

  static getSystemProperties(systems: System[]): System {
    return systems.reduce((acc, cur) => {
      const entries = Object.entries(cur);
      entries.forEach(entry => {
        if (!acc.hasOwnProperty(entry[0])) {
          acc[entry[0]] = entry[1];
        }
      });
      return acc;
    }, {} as System);
  }
}
