function SearchUi(emitter) {
  this.$input = $('.js-input');
  this.$button = $('.js-searchButton');
  this.emitter = emitter;

  this.onClickButton = this.onClickButton.bind(this);

  this.attacheEvent();
}

SearchUi.prototype.attacheEvent = function () {
  this.$button.on('click', this.onClickButton);
};

SearchUi.prototype.onClickButton = function () {
  var val = this.$input.val();

  if (val !== '') {
    this.emitter.emit('search.SearchUi', val);
  }
};

module.exports = SearchUi;
