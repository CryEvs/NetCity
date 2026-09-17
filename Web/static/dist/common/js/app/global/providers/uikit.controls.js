angular.module('uikit.controls.controllers', ['ui.bootstrap', 'netcity.em.indicators.controllers']).controller('treeSelectCtrl', function($scope, $dialogs, $uibModal, $uibModalInstance, tree, header, treeCfg) {
  var mapParams, selectedNode, showNode, treeSearch;
  treeSearch = function(items, getChildList, searchCriteria) {
    var iterate, recurs;
    console.log("1,5");
    iterate = function(items) {
      var i, item, len, result;
      for (i = 0, len = items.length; i < len; i++) {
        item = items[i];
        result = recurs(item);
        if (result) {
          return result;
        }
      }
      return null;
    };
    recurs = function(item) {
      var childs, searchResult;
      childs = getChildList(item);
      if (!childs || !childs.length || childs.length < 1) {
        return;
      }
      searchResult = _.where(childs, searchCriteria);
      if (searchResult.length > 0) {
        return searchResult[0];
      }
      return iterate(childs);
    };
    return iterate(items);
  };
  showNode = function(node) {
    var parent;
    node.collapsed = false;
    parent = node.getParent();
    if (parent) {
      return showNode(parent);
    }
  };
  mapParams = function() {
    _.each(selectedNode.parameters, function(param) {
      var temp;
      temp = _.findWhere(treeCfg.parameters, {
        argId: param.id
      });
      return param.value = typeof temp === 'undefined' ? null : temp.value;
    });
  };
  if (treeCfg.Current) {
    selectedNode = treeSearch(tree, function(item) {
      return item[treeCfg.childrens];
    }, {
      Id: treeCfg.current
    });
    if (selectedNode) {
      tree.currentNode = selectedNode;
      selectedNode.selected = "selected";
      showNode(selectedNode);
    }
  }
  $.extend($scope, {
    tree: tree,
    header: header,
    language: language,
    treeCfg: treeCfg,
    ok: function(form) {
      var modalInstance;
      selectedNode = this.tree.currentNode;
      if (!selectedNode) {
        $dialogs.notify("Внимание", "Выберите элемент из списка.");
        return;
      }
      if (typeof selectedNode.parameters !== 'undefined' && selectedNode.parameters.length > 0) {
        if (selectedNode.id === treeCfg.current && typeof treeCfg.parameters !== 'undefined') {
          mapParams();
        }
        modalInstance = $uibModal.open({
          templateUrl: '/js/app/em/indicators/templates/enterParamValue.html',
          controller: 'Em.Indicators.EditIndicator.EnterParamValues',
          resolve: {
            calculator: function() {
              return selectedNode;
            }
          }
        });
        modalInstance.result.then(function(response) {
          selectedNode.parameters = response;
          return $uibModalInstance.close(selectedNode);
        });
        return;
      }
      return $uibModalInstance.close(selectedNode);
    },
    cancel: function() {
      return $uibModalInstance.dismiss('cancel');
    }
  });
});

angular.module('uikit.controls.services', ['ui.bootstrap.modal', 'uikit.controls.controllers']).factory('$uiControls', function($uibModal) {
  return {
    treeSelect: function(header, tree, treeCfg) {
      var cfg, defaultCfg, modalInstance;
      defaultCfg = {
        id: "id",
        label: "name",
        childrens: "childrens",
        noText: "Нет данных"
      };
      cfg = $.extend({}, defaultCfg, treeCfg);
      modalInstance = $uibModal.open({
        templateUrl: '/js/app/global/templates/treeSelect.html',
        controller: 'treeSelectCtrl',
        resolve: {
          tree: function() {
            return tree;
          },
          header: function() {
            return angular.copy(header);
          },
          treeCfg: function() {
            return cfg;
          }
        }
      });
      return modalInstance.result;
    }
  };
});

angular.module('uikit.controls', ['uikit.controls.services']);
