export class System {
  VALUE_REQUIRED: boolean;
  VALUE_TYPE: 'string' | 'number' | 'boolean';
  VALUE_PLACEHOLDER: string;

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
