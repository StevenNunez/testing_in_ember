# Testing In Ember

Ember uses QUnit, First thing we'll do though is change the testing framework
to something that looks more like Jasmine/RSpec. Mocha and Chai.

On a new project run `ember install ember-cli-mocha`. Override the test helper.

Also Update the version of Ember to 2.1 (The latest as of this Readme) by
editing the bower.json file and changing the version to ^2.1.0 for both Ember
and Ember-Data, then run `bower install`. You'll be asked to pick a version of
ember. Pick `2.1.0`, with and exclamation point. So if it's number 4, type !4.

# Hostility Notes
* When you load a module in Ember, it will replace your repo name's underscores with dashes when it's trying to find code to load. For example: Loading the file in `app/lib/basic-class-and-functions` in a project named `test_in_ember` requires an import statement like
`import Person from 'testing-in-ember/lib/basic-class-and-functions';` Also note that it removes `app` from the path. `#rage`
# Testing Plain Old JavaScript Objects
Testing Regular JavaScript Objects in Ember might be useful if you're trying to
teach ES6 features in isolation. I'd suggest using Ember Objects for all the
things.

There aren't any generators for POJOs so you'll have to create them manually.
Stick your files in lib and create a corresponding test in the `tests`
directory.

See the example in `app/lib` and `tests/unit/lib`. Test files should end in
`-test.js`
# Testing Ember Objects
# Testing Ember Components
# Testing Ember Controllers
# Testing Ember Routes
# Testing Ember Models

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`
* Run the server and visit
  [http://localhost:4200/tests](http://localhost:4200/tests)

### Resources
[Ember testing Guides](http://guides.emberjs.com/v2.1.0/testing)
