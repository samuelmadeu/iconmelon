(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('collectionViews/IconsCollectionView', ['collectionViews/ProtoCollectionView', 'views/IconView', 'jquery'], function(ProtoView, IconView, $) {
    var IconsCollectionView;
    IconsCollectionView = (function(_super) {
      __extends(IconsCollectionView, _super);

      function IconsCollectionView() {
        return IconsCollectionView.__super__.constructor.apply(this, arguments);
      }

      IconsCollectionView.prototype.itemView = IconView;

      IconsCollectionView.prototype.template = '#icons-collection-view-template';

      IconsCollectionView.prototype.initialize = function(o) {
        this.o = o != null ? o : {};
        this.collection.mode = this.o.mode;
        IconsCollectionView.__super__.initialize.apply(this, arguments);
        return this;
      };

      return IconsCollectionView;

    })(ProtoView);
    return IconsCollectionView;
  });

}).call(this);
