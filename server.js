var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
	sys.puts("Firing up http server...");  
	response.writeHeader(200, {"Content-Type": "text/plain"});  
	response.write("Hello World");  
	response.end();  
}).listen(8080);  
sys.puts("Server Running on 8080");   