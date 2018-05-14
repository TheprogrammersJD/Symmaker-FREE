
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  
  //socket.emit("mapsize", mapsize);
	
  socket.on('message name', function(parameter1, parameter2){
		
  });
	
  
	//setInterval(function(){
		//if(bugsliving < 10000){
			//socket.emit('bugs', buggeesx[bbuugg], buggeesy[bbuugg], buggeesalive[bbuugg]);
		//}
	//}, 100);
	
	
	
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
	
  
});



http.listen(port, function(){
  console.log('listening on *:' + port);
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
