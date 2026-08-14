function openLicense(type, price) {

    const popup = document.getElementById("license-popup");

    const title = document.getElementById("license-title");

    const priceText = document.getElementById("license-price");

    const features = document.getElementById("license-features");


    title.textContent = type + " License";

    priceText.textContent = "$" + price;


    if (type === "Personal") {

        features.innerHTML = `
            <p>✓ Personal projects</p>
            <p>✓ Social media</p>
            <p>✓ Full track download</p>
            <p>✕ Commercial advertising</p>
        `;

    }


    if (type === "Creator") {

        features.innerHTML = `
            <p>✓ YouTube</p>
            <p>✓ TikTok & social media</p>
            <p>✓ Monetized content</p>
            <p>✓ Full track download</p>
        `;

    }


    if (type === "Commercial") {

        features.innerHTML = `
            <p>✓ Advertising</p>
            <p>✓ Business campaigns</p>
            <p>✓ Commercial videos</p>
            <p>✓ Full track download</p>
            <p>✓ Commercial usage</p>
        `;

    }


    popup.style.display = "flex";

requestAnimationFrame(() => {
    popup.classList.add("active");
});
}


function closeLicense() {

    const popup = document.getElementById("license-popup");

    popup.classList.remove("active");

    setTimeout(() => {
        popup.style.display = "none";
    }, 250);

}


function continueLicense() {

    const title = document.getElementById("license-title").textContent;
    const price = document.getElementById("license-price").textContent;

    const subject = encodeURIComponent(
        "Silvertone 13 — " + title
    );

    const body = encodeURIComponent(
        "Hi DYLN,\n\n" +
        "I'd like to purchase a license for Silvertone 13.\n\n" +
        "License: " + title + "\n" +
        "Price: " + price + "\n\n" +
        "Thanks!"
    );

    window.location.href =
        "mailto:dylnmusic.licensing@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
}
function contactMe() {

    const subject = encodeURIComponent(
        "DYLN — Music Enquiry"
    );

    const body = encodeURIComponent(
        "Hi DYLN,\n\n" +
        "I'd like to get in touch about:\n\n" +
        "\n\n" +
        "Thanks!"
    );

    window.location.href =
        "mailto:dylnmusic.licensing@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
}
function openCustomMusic() {

    const popup = document.getElementById("custom-music-popup");

    popup.style.display = "flex";

    requestAnimationFrame(() => {
        popup.classList.add("active");
    });

}


function closeCustomMusic() {

    const popup = document.getElementById("custom-music-popup");

    popup.classList.remove("active");

    setTimeout(() => {
        popup.style.display = "none";
    }, 250);

}


function submitCustomMusic() {

    const form = document.getElementById("custom-music-form");

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }

    alert("Your request is ready to send!");

}