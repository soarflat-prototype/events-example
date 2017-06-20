var EventEmitter = require('events').EventEmitter;
var JsonFetcher = require('./modules/JsonFetcher');
var DmmItems = require('./modules/DmmItems');
var DmmUi = require('./modules/DmmUi');
var SearchUi = require('./modules/SearchUi');
var Category = require('./modules/Category');

var emitter = new EventEmitter();
var jsonFetcher = new JsonFetcher(emitter);
var dmmItems = new DmmItems(emitter);
var dmmUi = new DmmUi(emitter);
var searchUi = new SearchUi(emitter);
var category = new Category(emitter);

var json = {
  series: '/json/dmmSeries.json',
  author: '/json/dmmAuthor.json'
};

function init() {
  attacheEvent();
}

function attacheEvent() {
  emitter.on('search.SearchUi', function (val) {
    if (category.match(val)) {
      dmmItems.updateCategory(val);
      fetch(json[val]);
    } else {
      console.log('not found');
    }
  });

  emitter.on('fetchJson.JsonFetcher', function (data) {
    dmmItems.set(data);
    dmmUi.render(dmmItems.get());
  });
}

function fetch(url) {
  jsonFetcher.fetch(url);
}

init();