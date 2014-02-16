(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('views/pages/support', ['views/pages/PageView'], function(PageView) {
    var Support;
    Support = (function(_super) {
      __extends(Support, _super);

      function Support() {
        return Support.__super__.constructor.apply(this, arguments);
      }

      Support.prototype.template = '#support-page-template';

      Support.prototype.className = 'support-p';

      Support.prototype.render = function() {
        Support.__super__.render.apply(this, arguments);
        this.$monthly = this.$('.js-monthly');
        this.$budget = this.$('.js-budget');
        this.$timeLeft = this.$('.js-time-left');
        this.setCounters();
        _.defer((function(_this) {
          return function() {
            return _this.addShareWidget();
          };
        })(this));
        return this;
      };

      Support.prototype.setCounters = function() {
        return $.ajax({
          type: 'get',
          url: '/budget-counters',
          success: (function(_this) {
            return function(data) {
              var timeLeft;
              _this.$budget.text(data.budget);
              _this.$monthly.text(data.monthly);
              timeLeft = ~~data.budget / ~~data.monthly;
              return _this.$timeLeft.text(~~(timeLeft < 0 ? 0 : timeLeft));
            };
          })(this),
          error: function(e) {
            return console.error(e);
          }
        });
      };

      Support.prototype.addShareWidget = function() {
        return $(document.head).append('<script type="text/javascript">var switchTo5x=true;</script><script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script><script type="text/javascript">stLight.options({publisher: "183e364f-5cd1-4e73-bfd9-939e94de67a5", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>');
      };

      return Support;

    })(PageView);
    return Support;
  });

}).call(this);
