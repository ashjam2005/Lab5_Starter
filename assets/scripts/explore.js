// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get reference to dropdown
    var voiceSelect = document.getElementById('voice-select');

    // Ensure voices are loaded before getting them
    window.speechSynthesis.onvoiceschanged = function() {
        // Get list of voices
        var voices = window.speechSynthesis.getVoices();

        // Populate dropdown
        voices.forEach(function(voice) {
            // Create new option element
            var option = document.createElement('option');
            option.textContent = voice.name;
            option.value = voice.name;

            // Append option to dropdown
            voiceSelect.appendChild(option);
        });
    };

    const talkButton = document.querySelector("button");
    var image = document.querySelector("img");
    var textArea = document.getElementById('text-to-speak');

    // Add a click event listener to button
    talkButton.addEventListener('click', function() {
        // Get selected voice and the text
        var selectedVoiceName = voiceSelect.value;
        var text = textArea.value;

        // Get selected voice object
        var voices = window.speechSynthesis.getVoices();
        var selectedVoice = voices.find(function(voice) {
            return voice.name === selectedVoiceName;
        });

        // Create new SpeechSynthesisUtterance object
        var utterance = new SpeechSynthesisUtterance(text);

        // Set voice of the utterance
        utterance.voice = selectedVoice;

        // Change image while talking
        utterance.onstart = function() {
            image.src = 'assets/images/smiling-open.png';
        };
        utterance.onend = function() {
            image.src = 'assets/images/smiling.png';
        };

        window.speechSynthesis.speak(utterance);
    });
}