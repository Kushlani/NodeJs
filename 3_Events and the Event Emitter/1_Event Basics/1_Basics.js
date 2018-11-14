/*
Event:-
	Something that has happned in our app that we can respond to.
	In Node we actually talk about two different kinds of events
		1.System Events
			This comes from the C++ side of the Nodejs core due to a library called libuv
			Libuv is the library of C++ core and it's a part of a Nodejs that deals with the Events coming from the computer system
				ex: I finished reading a file
					The file is opened
					I received data from the internet
		
		2. Custom Events
			They are inside the javascript core
			Event Emitter inside the js core is the js library of events, deals with events that I can create by myself
			Event Emitter in Nodejs is, where we have custom events in Javascript

 */