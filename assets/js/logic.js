$(document).ready(function() {

    // Hover -------------------------------------------------------------------
    $("#mountains").hover(
        function() {
            $(this).text("| I come completely out of the mountains |");
        },
        function() {
            $(this).text("| Ég kem alveg af fjöllum |");
    });

    $("#resumeLink").hover(
        function() {
            $(this).text(" My Story");
        },
        function() {
            $(this).text(" Sagan Mín");
        }
    );

    $("#gitLink").hover(
        function() {
            $(this).text(" Bootcamp Projects");
        },
        function() {
            $(this).text(" Æfingabúðir Verkefni");
        }
    );

});