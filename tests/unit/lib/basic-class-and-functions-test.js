/* jshint expr:true */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Person from 'testing-in-ember/lib/basic-class-and-functions';
import {double} from 'testing-in-ember/lib/basic-class-and-functions';

describe('Person Class', function() {
  it('takes a name on initialization', function() {
    var person = new Person("Bob");
    expect(person.name).to.eq("Bob");
  });

  it("greets a person", function(){
    var person = new Person("Bob");
    expect(person.greet()).to.eq("Hey, Bob!");
  });
});

describe("Double Function", function(){
  it("doubles a number", function(){
    expect(double(7)).to.eq(14);
  });
});
