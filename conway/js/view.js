(function() {
  window.ui = {
    cols: [],
    initialize: function(matrix) {
      var i, _i, _ref;
      for (i = _i = 1, _ref = matrix[0].length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        this.cols.push(0);
      }
      return this.render(matrix);
    },
    render: function(matrix, delta) {
      var col, output, row, _i, _j, _len, _len1;
      if (delta == null) {
        delta = 0;
      }
      output = '';
      for (_i = 0, _len = matrix.length; _i < _len; _i++) {
        row = matrix[_i];
        for (_j = 0, _len1 = row.length; _j < _len1; _j++) {
          col = row[_j];
          if (col) {
            output += '<span class="full">[]</span>';
          } else {
            output += '<span class="empty">..</span>';
          }
        }
        output += '<br>';
      }
      $('.board').html(output);
      return this.renderGraph(delta);
    },
    renderGraph: function(delta) {
      var output, val, _i, _len, _ref;
      output = '';
      this.cols.push(delta);
      this.cols.splice(1, 1);
      _ref = this.cols;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        val = _ref[_i];
        output += "" + val + " ";
      }
      return $('.graph').html(output);
    },
    testRender: function() {
      return this.render([[0, 0, 0], [1, 1, 1], [0, 0, 0]]);
    }
  };

}).call(this);
