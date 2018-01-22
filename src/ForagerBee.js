class ForagerBee extends Bee{
  // TODO..
  constructor (job = 'find pollen'){
    super()
  this.age = 10;
  this.job = job;
  this.canFly = true;
  this.treasureChest = [];
}
  forage (treasure){
  this.treasureChest.push(treasure);
  }
};
