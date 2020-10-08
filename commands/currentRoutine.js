module.exports = {
    name: 'currentroutine',
    args: false,
    dontShow: true,
    description: 'shows the current accessed routine object',
    execute(message, args, bot) {
      var {info} = require('../info.js');
      info = info[message.guild.id];

      console.log(`Current server id: ${message.guild.id}`);
      console.log(info);
    }
  };
