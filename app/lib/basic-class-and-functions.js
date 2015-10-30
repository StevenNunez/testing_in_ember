export default class Person{
  constructor(name){
    this.name = name;
  }
  greet(){
    return `Hey, ${this.name}!`;
  }
}


export function double(num){
  return num * 2;
}
