//Here we are going to make an event module like the real modules in Nodejs

function Emitter() {
	this.events = {};

}

//it's very common to use the phrase '.on' when adding listeners to events and programming because it reads really nicely. 
//When I call the method I might say on this happening or upon this happening do this.
Emitter.prototype.on = function(type,listener) {
	this.events[type] = this.events[type] || [];//here we say if the property(type)is already exists and make sure it's an array. then add listeners to that. Otherwise create a new array.
	this.events[type].push(listener);
};

//now i want to say that something happened. So i wanna say emit. It just means hey something happened and im emitting an event. 
//So whoever listening for it can respond.
Emitter.prototype.emit = function(type) {
	if(this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
};

module.exports = Emitter;