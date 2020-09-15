# RoutineyBot
A Discord Bot for notifying of routines

## Version History
### Alpha
- Created the Bot
### v1.0
- Heroku procfile and npm audit fixes
- created rt!current, rt!tomorrow, rt!day commands
- created info.json for database storage
### v1.1
- created rt!help, rt!setChannel, rt!notifications commands
- changed output from simple text to Discord Embeds
- created 'commands' folder
- moved all commands out of bot.js into their own files in 'commands' folder
### v1.2
- created 'functions' folder
- replaced all redundant lines of code in all commands with specific functions and defined those functions in files inside 'functions' folder
- finished scheduling system
### v2 - The Big One
- changed info.json into info.js and rewrote all hardcoded database info, replacing it with variables for easier changing of database
- destructured lots of functions and commands further into smaller modules
- implemented the database into scheduling system for:
- New feature: Routine notifications (Currently only works in one server at a time)
- created 'sendCurrent' and 'createMessage' commands to easily create and post Embeds
- collected all time functions into file 'timeConvert.js'
- Deployed the bot to Heroku 🎉
#### v2 patch1
- fixed Heroku's deployment problems
#### v2 patch2
- thought I fixed Heroku's deployment problems
#### v2 patch3
- third time's the charm?
#### v2 patch4
- nope
#### v2 patch5
- FIXED HEROKU'S FRIGGIN DEPLOYMENT PROBLEMS
#### v2 patch6
- Fixed Heroku's timezone issue
#### v2 patch7
- did u really expect me to do it in one try?
#### v2 patch8
- fixed Heroku's timezone issue
### v2.1
- fixed Heroku's wrong date issue
- added a notification for today's routine everyday
- fixed wrong timing on Saturday notifications
- standardized 'info.js' to contain different data by server(Notifications now work on all servers)
- modified all code to adapt to new database changes
- added commands to the 'howru' command
- rt! next command added
- rt! setchannel and rt! args  made dev-only commands
- subscribed 3 new servers to the bot
