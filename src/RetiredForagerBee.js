class RetiredForagerBee extends ForagerBee{
   constructor (job = 'gamble'){
  super()
  this.age = 40;
  this.job = job;
  this.canFly = false;
  this.color = 'grey';
}
  forage (){
  return ('I am too old, let me play cards instead');
  }
  gamble (tresure){
  this.treasureChest.push(tresure);
  }
};
