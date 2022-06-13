export default class Team {
  constructor() {
    this.team = new Set();
  }

  addInTeam(person) {
    this.team.add(person);
  }

  creatArray() {
    return Array.from(this.team);
  }

  [Symbol.iterator]() {
    let current = 0;
    const arrTeam = this.creatArray();
    return {
      next() {
        if (current <= arrTeam.length) {
          const value = arrTeam[current];
          current += 1;
          return {
            done: false,
            value,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
