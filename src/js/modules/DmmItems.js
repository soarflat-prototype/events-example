function DmmItems(emitter) {
  this.emitter = emitter;
}

DmmItems.prototype.set = function (data) {
  this.items = data.result[this.category];
};

DmmItems.prototype.get = function () {
  return this.items;
};

DmmItems.prototype.updateCategory = function (category) {
  this.category = category;
};

module.exports = DmmItems;
