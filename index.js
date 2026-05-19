async function AddComponent(id,file) {
    const res = await fetch(file);
    const html = await res.text();

    document.getElementById(id).innerHTML=html
}

AddComponent("header", "./src/modules/header/header.html")
AddComponent("hero-section", "./src/modules/hero/hero.html")
AddComponent("special-section", "./src/modules/specializing/specializing.html")
AddComponent("about-section", "./src/modules/about/about.html")
AddComponent("pricing-section", "./src/modules/pricing/pricing.html")
AddComponent("contact-section", "./src/modules/contact/contact.js")
AddComponent("logos-section", "./src/modules/logos/logos.html")
AddComponent("footer", "./src/modules/footer/footer.html")