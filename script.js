Bydocument.addEventListener("DOMContentLoaded", function () {

    console.log("JS Running ✅");

    const button = document.getElementById("analyzeBtn");

    if (!button) {
        console.error("Button not found");
        return;
    }

    button.addEventListener("click", function () {
        alert("Button Click Working ✅");
    });

});
        
