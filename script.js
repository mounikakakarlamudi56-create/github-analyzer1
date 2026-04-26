document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("analyzeBtn");
    const input = document.getElementById("inputText");

    const charCount = document.getElementById("charCount");
    const wordCount = document.getElementById("wordCount");
    const sentenceCount = document.getElementById("sentenceCount");

    // Safety check (prevents errors if HTML IDs are missing)
    if (!button || !input || !charCount || !wordCount || !sentenceCount) {
        console.error("HTML elements not found. Check your IDs.");
        return;
    }

    button.addEventListener("click", function () {

        let text = input.value.trim();

        // If empty input
        if (text.length === 0) {
            charCount.innerText = "Characters: 0";
            wordCount.innerText = "Words: 0";
            sentenceCount.innerText = "Sentences: 0";
            return;
        }

        // Character count
        let characters = text.length;

        // Word count
        let words = text.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;

        // Sentence count
        let sentences = text.split(/[.!?]+/).filter(function(s) {
            return s.trim().length > 0;
        }).length;

        // Display results
        charCount.innerText = "Characters: " + characters;
        wordCount.innerText = "Words: " + words;
        sentenceCount.innerText = "Sentences: " + sentences;

        console.log("Analysis complete:", characters, words, sentences);
    });

});
