(function(angular) {
  var MenuItem, TabItem;
  MenuItem = (function() {
    function MenuItem(dto) {
      this.title = dto.title;
      this.tabs = _.map(dto.tabItemInfos, (function(_this) {
        return function(dto) {
          return new TabItem(_this, dto);
        };
      })(this));
      this.submenu = _.map(dto.subMenus, function(dto) {
        return new MenuItem(dto);
      });
      this.dropDownMenu = dto.dropDownMenu;
      this.hasTabItems = dto.hasTabItems;
      this.selected = dto.selected;
    }

    return MenuItem;

  })();
  TabItem = (function() {
    function TabItem(menuItem, dto) {
      this.menuItem = menuItem;
      this.title = dto.title;
      this.selected = dto.selected;
      this.id = dto.id;
      this.url = dto.url;
    }

    TabItem.prototype.select = function() {
      this.selected = true;
      return this.menuItem.selected = true;
    };

    TabItem.prototype.unselect = function() {
      this.selected = false;
      return this.menuItem.selected = false;
    };

    return TabItem;

  })();
  angular.module('netcity.common.menu', []).directive("nsMenu", function() {
    return {
      restrict: 'A',
      link: function($scope, element, attrs, controller, transcludeFn) {
        $scope.menuCtx = {};
        $scope.$watch(attrs.menuCtx, function(menuCtx) {
          $scope.menuCtx = menuCtx;
          return $scope.menuCtx.items = _.map($scope.menuCtx.modelMenu, function(dto) {
            return new MenuItem(dto);
          });
        });
        $scope.selectTab = function(tabItem) {
          if ($scope.menuCtx.tabItem) {
            $scope.menuCtx.tabItem.unselect();
          }
          tabItem.select();
          return $scope.menuCtx.tabItem = tabItem;
        };
      },
      templateUrl: '/js/app/global/templates/menu.html',
      replace: true
    };
  });
})(window.angular);
