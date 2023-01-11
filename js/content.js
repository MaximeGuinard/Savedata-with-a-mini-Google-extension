chrome.storage.sync.get(['email', 'titre', 'seo_titre', 'meta_description', 'adresse', 'titre_flux', 'adresse_flux', 'description'], function(data) {
    var email = data.email;
    var titre = data.titre;
    var seo_titre = data.seo_titre;
    var meta_description = data.meta_description;
    var adresse = data.adresse;
    var titre_flux = data.titre_flux;
    var adresse_flux = data.adresse_flux;
    var description = data.description;
    // Afficher les informations sur la page web
    document.getElementById('email-display').innerHTML = email;
    document.getElementById('titre-display').innerHTML = titre;
    document.getElementById('seo_titre-display').innerHTML = seo_titre;
    document.getElementById('meta_description-display').innerHTML = meta_description;
    document.getElementById('adresse-display').innerHTML = adresse;
    document.getElementById('titre_flux-display').innerHTML = titre_flux;
    document.getElementById('adresse_flux-display').innerHTML = adresse_flux;
    document.getElementById('description-display').innerHTML = description;
  });