module.exports = {
	name: 'announce',
	args: false,
	dontShow: true,
	description: 'Sends an announcement to all the servers!',
	execute(message, args, bot) {
		var {info:infos} = require('../info.js');
		console.log(args.join(' '));

		let logChannel;
		bot.channels.cache.map((channel) => {
		  if (channel.id == '763767420908732448') {
		    logChannel=channel;
		  }
		});

		for(const serverId in infos)
    {
      let info=infos[serverId];
      //console.log(info[property].channelId)
      bot.channels.cache.map((channel)=>{
      if(channel.id==info.channelId) {
      console.log(channel.name);
      //channel.send(" Sorry I was asleep :sweat_smile: I'm awake now !");
        try{
					channel.send(args.join(' '));
        }catch(e)
        {
          console.log(e);
          logChannel.send(`Error sending! in ${channel.guild.name}'s ${channel.name} :slight_smile:`);
        }
      }
    });
    }
	},
};
