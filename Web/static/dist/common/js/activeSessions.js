var UpdateWorkInSystemCnt;

UpdateWorkInSystemCnt = function() {
  var context, source, template;
  source = '{{#ifCond data.activeSessions.length "<" 20}} <table class="table table-bordered table-hover table-condensed"> {{else}} <table class="table table-xs table-bordered table-hover table-condensed"> {{/ifCond}} <thead> <th>№</th> {{#if data.activeSessions.0.eoName}} <th>{{context.kEO}}</th> {{/if}} <th>{{context.kDisplayName}}</th> {{#if data.activeSessions.0.ip}} <th>{{context.kUserName}}</th> <th>{{context.kLoginTime}}</th> <th>ip</th> {{/if}} <th>{{context.kRoles}}</th> </thead> {{#if data.activeSessions}} {{#if data.activeSessions.0.eoName}} {{#each data.activeSessions}} <tr> <td class="text-right">{{match @index}}</td> <td>{{eoName}}</td> <td>{{nickName}}</td> <td>{{loginName}}</td> <td>{{currentDate loginTime}}</td> <td>{{ip}}</td> <td>{{roles}}</td> </tr> {{/each}} {{else}} {{#if data.activeSessions.0.ip}} {{#each data.activeSessions}} <tr> <td class="text-right">{{match @index}}</td> <td>{{nickName}}</td> <td>{{loginName}}</td> <td>{{currentDate loginTime}}</td> <td>{{ip}}</td> <td>{{roles}}</td> </tr> {{/each}} {{else}} {{#each data.activeSessions}} <tr> <td class="text-right">{{match @index}}</td> <td>{{nickName}}</td> <td>{{roles}}</td> </tr> {{/each}} {{/if}} {{/if}} {{else}} <tr><td colspan="8" class="body" align="center">Нет пользователей в системе Сетевой Город. Образование</td></tr> {{/if}} </table>';
  template = Handlebars.compile(source);
  jsSubmit({
    action: "/webapi/context/activeSessions",
    method: "get",
    showProcessing: true,
    onSuccess: function(activeSessions) {
      var activeSessionCount, container;
      container = $("<div class=\"table-responsive\" style=\"max-height: 600px;\"></div>");
      container.html(template({
        context: context,
        data: {
          activeSessions: activeSessions
        }
      }));
      activeSessionCount = activeSessions != null ? activeSessions.length : void 0;
      $('#WorkingInSystemCnt').text(activeSessionCount);
      return $.show.dialog({
        title: 'Список пользователей в сети',
        message: container,
        size: BootstrapDialog.SIZE_WIDE
      });
    }
  });
  return context = {
    kEO: language.Generic.Common.kEO,
    kDisplayName: language.Generic.Common.kDisplayName,
    kUserName: language.Generic.Common.kUserName,
    kLoginTime: language.Generic.ServAdmin.kLoginTime,
    kRoles: language.Generic.Common.kRoles
  };
};
