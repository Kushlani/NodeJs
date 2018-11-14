/*
Inside node we have V8 engine. And js is synchronous. So V8 runs one set of code at a time and finish it executing.
Also inside Node, a library called Libuv. This one written specifically to deal with things happening lower level. That means the 
events occuring in the operating system.
So libuv connects to request something from operating system. ex: download something from internet or to open a file..
And inside libuv has a Queue(a queue of events that have completed by OS). This may be happening simultaneously while V8 is running its code.
The most important part inside of libuv is Event Loop. Means libuv is constantly checking the queue that something has happened.
The event will get placed in the queue from the operating system. When while checking in that loop  libuv sees there is something 
is completed and it runs a callback.

With the Non-blocking approach in Node we can execute a code while some other codes are running without getting block.
 
SUMMARY......
1.Inside node there is a library called libuv
2.Libuv always request something from OS
3.There's a Queue inside the libuv. It stores the completed events sent by OS.
4.Queue connects to Event Loop. It always loop through the completed events.
5.When event loop pass a completed event then libuv pass a callback function to V8 engine.
6.Then V8 executes the callback function one after one.(synchronous).

 */