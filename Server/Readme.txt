Description:
Files for the server

Installation and Use: 
Before you are able to use the server, you will need to install
MongoDB and Node.js. MongoDB should come with Compass, which I
used to create my database. If your instilation of MongoDB did
not come with Compass, you may need to download the community edition
of Compass seperately.

basic example database structure: 
database: music
collection: station

In the above example, music would represent the database and station
would represent the name of the station.

collection contents example:
_id:5cbbcb1abe935f01089c65a6
filename:"song.mp3"

Github doesnt like it when I try to put mongo stuff here,
so you should put your mongo database files into their own
folder.

For testing purposes, you will want to add music to the "music" folder,
which may need to be created, and also 

The database will contain only the filenames you will use for the music
for that station. The music files themselves will go into a seperate folder.

The music files should be in a Server/audio/*STATIONNAME*/ folder
where the Server folder is the folder that server.js is in. An example
would be Server/audio/*STATIONNAME*/*SONGNAME*.mp3

To start the server, navigate to the folder containing server.js using command
prompt or your machine's equivilent. After you have done this, use the command
"node server.js" (without the quotes) to start the server.

To connect to the server, open a browser and connect to http://localhost:8080/station
(Others may change this later, if so, please update the readme to include a propper
test link)

The server can also handle requests for album art. This will require a collection 
called art in the database, filled with the filenames of the album art. The art shold
be stored in the Server/audio/art/ folder.

You will need a seperate entry/doccument for every song. This may change in future versions.

_id:ObjectID("5cc8849ecef64c2784a9a483")
songname:"song1.mp3"
filename:"81efglR0ciL._SS500_.jpg"