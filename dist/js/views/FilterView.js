(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('views/FilterView', ['views/ProtoView', 'models/FilterModel', 'underscore', 'jquery', 'helpers'], function(ProtoView, FilterModel, _, $, helpers) {
    var FilterView;
    FilterView = (function(_super) {
      __extends(FilterView, _super);

      function FilterView() {
        return FilterView.__super__.constructor.apply(this, arguments);
      }

      FilterView.prototype.model = FilterModel;

      FilterView.prototype.template = '#filter-view-template';

      FilterView.prototype.className = 'filter-b';

      FilterView.prototype.events = {
        'click': 'toggleSelected',
        'click #js-left': 'left',
        'click #js-right': 'right'
      };

      FilterView.prototype.initialize = function(o) {
        this.o = o != null ? o : {};
        this.bindModelEvents();
        FilterView.__super__.initialize.apply(this, arguments);
        return this;
      };

      FilterView.prototype.left = function(e) {
        e.stopPropagation();
        return this.model.set('iconHash', helpers.getFilterIcon('<'));
      };

      FilterView.prototype.right = function(e) {
        e.stopPropagation();
        return this.model.set('iconHash', helpers.getFilterIcon('>'));
      };

      FilterView.prototype.bindModelEvents = function() {
        return this.model.on('change', this.render);
      };

      FilterView.prototype.render = function() {
        FilterView.__super__.render.apply(this, arguments);
        this.$el.toggleClass('is-check', !!this.model.get('isSelected'));
        return this;
      };

      FilterView.prototype.toggleSelected = function() {
        this.model.toggleSelected();
        App.filtersSelected = helpers.toggleArray(App.filtersSelected, this.model.get('hash'));
        return App.vent.trigger('icon:select');
      };

      return FilterView;

    })(ProtoView);
    return FilterView;
  });

}).call(this);
