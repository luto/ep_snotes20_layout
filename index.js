exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/ep_snotes20_layout/static/css/pad2.css' rel='stylesheet'>";
  return cb();
};
