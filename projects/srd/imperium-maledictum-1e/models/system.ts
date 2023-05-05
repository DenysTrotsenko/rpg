export class System {
  static getSystemProperties(system: System[]): System {
    return system.reduce((acc, cur) => {
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
