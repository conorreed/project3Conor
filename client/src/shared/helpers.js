// where logic will go for calculating damage done by attacks, magic attacks, and how much hp is healing
// function that waits a certain number of miliseconds
export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

  // function that calculates damage from attack or reciever, works for both the opponent and the PC
export const attack = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.attack - (attacker.level - receiver.level) * 1.25;

  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};
// calculates damage for a magic attack based on the level and magic attack
export const magic = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.magic - (attacker.level - receiver.level) * 1.25;

  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};
// calculates the amount of healing someone gets. Theres only one reciever
export const heal = ({ receiver }) => {
  return receiver.magic + receiver.level * 0.25;
};
