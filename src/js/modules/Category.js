function Category(emitter) {
  this.categry = ['series', 'author'];
  this.emitter = emitter;
}

Category.prototype.match = function (val) {
  if (this.categry.indexOf(val) !== -1) {
    return true;
  }

  return false;
};

module.exports = Category;
