// Get an audio component
// @input Component.AudioComponent audioComponent

// Get a list of audio files we want to play
// @input Asset.AudioTrackAsset[] items
// @input 

// We remember what item is currently visible.
// When we start it's the 0th item.
var currentItemIndex = 0;

// Play the first sound on initialize
script.audioComponent.audioTrack = script.items[currentItemIndex];
script.audioComponent.play(1);

// Define what happens when you tap.
function activateNextItem () {
 // Increment the current item index
 currentItemIndex += 1;

// We need the current item index to wrap around 
 // once it's higher than the number of items we have.
 currentItemIndex = currentItemIndex % script.items.length;

// Set the audio component to play the new audio file
 script.audioComponent.audioTrack = script.items[currentItemIndex];
 script.audioComponent.play(1);
}

// Bind the function to the touch event.
var touchEvent = script.createEvent("TapEvent");
touchEvent.bind(activateNextItem)// -----JS CODE-----
