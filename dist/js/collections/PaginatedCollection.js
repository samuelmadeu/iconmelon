(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('collections/PaginatedCollection', ['backbone', 'helpers'], (function(_this) {
    return function(B, helpers) {
      var PaginatedCollection;
      PaginatedCollection = (function(_super) {
        __extends(PaginatedCollection, _super);

        function PaginatedCollection() {
          return PaginatedCollection.__super__.constructor.apply(this, arguments);
        }

        PaginatedCollection.prototype.page = 1;

        PaginatedCollection.prototype.initialize = function() {
          this.perPage = (function() {
            if (helpers.isMobile()) {
              return 3;
            } else {
              return 5;
            }
          })();
          this.options = {
            page: this.page,
            perPage: this.perPage,
            total: 10
          };
          this.o.isPaginated && (this.fetch = this.fetchFun);
          this.o.isPaginated && (this.parse = this.parseFun);
          PaginatedCollection.__super__.initialize.apply(this, arguments);
          return this;
        };

        PaginatedCollection.prototype.fetchFun = function(options) {
          this.loadFromFile = (options != null ? options.sectionNames : void 0) ? true : false;
          return Backbone.Collection.prototype.fetch.call(this, {
            data: $.extend(this.options, options || {})
          });
        };

        PaginatedCollection.prototype.parseFun = function(resp) {
          if (resp.total) {
            this.options.total = resp.total;
          }
          return resp.models;
        };

        PaginatedCollection.prototype.pageInfo = function() {
          var info, max;
          info = {
            total: this.options.total,
            page: this.options.page,
            perPage: this.options.perPage,
            pages: Math.ceil(this.options.total / this.options.perPage),
            prev: false,
            next: false
          };
          max = Math.min(this.options.total, this.options.page * this.options.perPage);
          if (this.options.total === this.options.pages * this.options.perPage) {
            max = this.options.total;
          }
          info.range = [(this.options.page - 1) * this.options.perPage + 1, max];
          if (this.options.page > 1) {
            info.prev = this.options.page - 1;
          }
          if (this.options.page < info.pages) {
            info.next = this.options.page + 1;
          }
          return info;
        };

        PaginatedCollection.prototype.nextPage = function() {
          this.loadFromFile && this.clearSelectedIcons();
          if (!this.pageInfo().next) {
            return false;
          }
          this.options.page++;
          return this.fetch().then((function(_this) {
            return function() {
              return !_this.isClosed && _this.trigger('afterFetch');
            };
          })(this));
        };

        PaginatedCollection.prototype.prevPage = function() {
          if (!this.pageInfo().prev) {
            return false;
          }
          this.options.page--;
          return this.fetch().then((function(_this) {
            return function() {
              return !_this.isClosed && _this.trigger('afterFetch');
            };
          })(this));
        };

        PaginatedCollection.prototype.loadPage = function(n) {
          if (n === this.options.page) {
            return false;
          }
          this.options.page = n;
          return this.fetch().then((function(_this) {
            return function() {
              return !_this.isClosed && _this.trigger('afterFetch');
            };
          })(this));
        };

        PaginatedCollection.prototype.clearSelectedIcons = function() {
          return App.vent.trigger('icon:deselect');
        };

        return PaginatedCollection;

      })(B.Collection);
      return PaginatedCollection;
    };
  })(this));

}).call(this);
