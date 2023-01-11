function saveData() {
    // Récupère les données du formulaire
    var email = document.getElementById("email").value;
    var siteTitle = document.getElementById("site-title").value;
    var seoTitle = document.getElementById("seo-title").value;
    var metaDescription = document.getElementById("meta-description").value;
    var siteUrl = document.getElementById("site-url").value;
    var rssTitle = document.getElementById("rss-title").value;
    var rssUrl = document.getElementById("rss-url").value;
    var rssDescription = document.getElementById("rss-description").value;
    // Crée un objet pour stocker les données
    var data = {
        email: email,
        siteTitle: siteTitle,
        seoTitle: seoTitle,
        metaDescription: metaDescription,
        siteUrl: siteUrl,
        rssTitle: rssTitle,
        rssUrl: rssUrl,
        rssDescription: rssDescription,
    };
    // Enregistre les données dans le stockage local de Chrome
    chrome.storage.local.set(data, function() {
        console.log("Data saved successfully");
    });
}
