(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('collections/SectionsCollection', ['collections/PaginatedCollection', 'models/SectionModel', 'helpers', 'underscore'], (function(_this) {
    return function(PaginatedCollection, SectionModel, helpers, _) {
      var SectionsCollection;
      SectionsCollection = (function(_super) {
        __extends(SectionsCollection, _super);

        function SectionsCollection() {
          return SectionsCollection.__super__.constructor.apply(this, arguments);
        }

        SectionsCollection.prototype.model = SectionModel;

        SectionsCollection.prototype.url = 'sections';

        SectionsCollection.prototype.initialize = function(o) {
          this.o = o != null ? o : {};
          if (this.o.pageNum) {
            this.page = this.o.pageNum;
          }
          this.isPaginated = this.o.paginated;
          this.on('afterFetch', _.bind(this.generateSvgData, this));
          SectionsCollection.__super__.initialize.apply(this, arguments);
          return this;
        };

        SectionsCollection.prototype.generateSvgData = function() {
          var shapes;
          shapes = '';
          this.each((function(_this) {
            return function(model) {
              var i, icon, isMulticolor, _i, _len, _ref, _results;
              isMulticolor = model.get('isMulticolor');
              _ref = model.get('icons');
              _results = [];
              for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                icon = _ref[i];
                icon = "<g id='" + icon.hash + "'>" + icon.shape + "</g>";
                _results.push(shapes += !isMulticolor ? icon.replace(/fill=\"\s?#[0-9A-Fa-f]{3,6}\s?\"/gi, '') : icon);
              }
              return _results;
            };
          })(this));
          return helpers.placeInSvg(shapes);
        };

        return SectionsCollection;

      })(PaginatedCollection);
      return SectionsCollection;
    };
  })(this));

}).call(this);
