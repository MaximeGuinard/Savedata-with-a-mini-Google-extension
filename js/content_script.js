// Récupère les données enregistrées à partir du stockage local
chrome.storage.local.get(null, function(data) {
    if (data) {
        // Récupère tous les éléments de formulaire de la page actuelle
        var formElements = document.querySelectorAll("input, textarea");
        formElements.forEach(function(element) {
            // Remplace les valeurs de l'élément par les données enregistrées si elles existent
            if (data[element.name]) {
                element.value = data[element.name];
            }
        });
    }
});