function DmmUi(emitter) {
  this.$el = $('.js-dmm');
  this.emitter = emitter;
}

DmmUi.prototype.render = function (data) {
  var div = '';
  var name;
  var url;

  data.forEach(function (item) {
    name = item.name;
    url = item.list_url;
    div += '<div><a href="' + url + '">' + name + '</a></div>';
  });

  this.$el.append(div);
};

module.exports = DmmUi;
