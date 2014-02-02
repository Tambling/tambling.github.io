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
(function() {
  var Conway;

  Conway = (function() {
    Conway.prototype.grid = [];

    function Conway(size) {
      var i, j, row, _i, _j;
      if (size == null) {
        size = 20;
      }
      for (i = _i = 0; 0 <= size ? _i < size : _i > size; i = 0 <= size ? ++_i : --_i) {
        row = [];
        this.grid.push(row);
        for (j = _j = 0; 0 <= size ? _j < size : _j > size; j = 0 <= size ? ++_j : --_j) {
          row.push(false);
        }
      }
    }

    Conway.prototype.setup = function() {
      var col, row, _i, _ref, _results;
      _results = [];
      for (row = _i = 0, _ref = this.grid.length; 0 <= _ref ? _i < _ref : _i > _ref; row = 0 <= _ref ? ++_i : --_i) {
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (col = _j = 0, _ref1 = this.grid[0].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; col = 0 <= _ref1 ? ++_j : --_j) {
            _results1.push(this.grid[row][col] = _.random(0, 9) < 4);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Conway.prototype.iterate = function() {
      var col, currentState, instructions, nextState, row, _i, _j, _ref, _ref1;
      instructions = [];
      for (row = _i = 0, _ref = this.grid.length; 0 <= _ref ? _i < _ref : _i > _ref; row = 0 <= _ref ? ++_i : --_i) {
        for (col = _j = 0, _ref1 = this.grid[0].length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; col = 0 <= _ref1 ? ++_j : --_j) {
          currentState = this.grid[row][col];
          nextState = this.nextState(currentState, row, col);
          if (currentState !== nextState) {
            instructions.push([row, col, nextState]);
          }
        }
      }
      this.executeInstructions(instructions);
      return ui.render(this.grid, instructions.length);
    };

    Conway.prototype.countLiveNeighbors = function(row, column) {
      var column_index, liveNeighbors, row_index, _i, _j, _ref, _ref1, _ref2, _ref3, _ref4;
      liveNeighbors = 0;
      for (row_index = _i = _ref = row - 1, _ref1 = row + 1; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; row_index = _ref <= _ref1 ? ++_i : --_i) {
        for (column_index = _j = _ref2 = column - 1, _ref3 = column + 1; _ref2 <= _ref3 ? _j <= _ref3 : _j >= _ref3; column_index = _ref2 <= _ref3 ? ++_j : --_j) {
          if ((_ref4 = this.grid[row_index]) != null ? _ref4[column_index] : void 0) {
            if (!(row_index === row && column_index === column)) {
              liveNeighbors += 1;
            }
          }
        }
      }
      return liveNeighbors;
    };

    Conway.prototype.nextState = function(initialState, row, col) {
      var liveNeighbors;
      liveNeighbors = this.countLiveNeighbors(row, col);
      switch (false) {
        case !(liveNeighbors < 2):
          return false;
        case liveNeighbors !== 2:
          return initialState;
        case liveNeighbors !== 3:
          return true;
        case !(liveNeighbors > 3):
          return false;
      }
    };

    Conway.prototype.executeInstructions = function(instructions) {
      var column, instr, row, state, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = instructions.length; _i < _len; _i++) {
        instr = instructions[_i];
        row = instr[0];
        column = instr[1];
        state = instr[2];
        _results.push(this.grid[row][column] = state);
      }
      return _results;
    };

    return Conway;

  })();

  window.conway = new Conway;

  conway.setup();

  ui.initialize(conway.grid);

  $('.reset').click(function() {
    return conway.setup();
  });

  setInterval(function() {
    return conway.iterate();
  }, 100);

}).call(this);
