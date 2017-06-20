function JsonFetcher(emitter) {
  this.emitter = emitter;
}

JsonFetcher.prototype.fetch = function (url) {
  var self = this;

  $.ajax({
    url: url,
  }).done(function (data) {
    self.emitter.emit('fetchJson.JsonFetcher', data);
  });
};

module.exports = JsonFetcher;
