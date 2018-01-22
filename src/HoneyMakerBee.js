class HoneyMakerBee extends Bee{
  constructor (job = 'make honey'){
    super()
  this.age = 10;
  this.job = job;
  this.honeyPot = 0;
}
  makeHoney (){
  this.honeyPot = this.honeyPot +1;
}
  giveHoney() {
    this.honeyPot = this.honeyPot -1;
  }
}; 
