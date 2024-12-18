document.addEventListener("DOMContentLoaded", function() {
    const statesDropdown = document.getElementById('states');
    const postcard = document.getElementById('postcard');
    const stateHeading = document.getElementById('state-heading');
    const greeting = document.getElementById('greeting');
    const stateImage = document.getElementById('state-image');

    // Array of states with corresponding image paths for foreground and background
    const states = {
        "al": { name: "Alabama", image: "images/al.jpg", background: "img/al@2x.jpg" },
        "ak": { name: "Alaska", image: "images/ak.jpg", background: "img/ak@2x.jpg" },
        "az": { name: "Arizona", image: "images/az.jpg", background: "img/az@2x.jpg" },
        "ar": { name: "Arkansas", image: "images/ar.jpg", background: "images/ar-background.jpg" },
        "ca": { name: "California", image: "images/ca.jpg", background: "images/ca-background.jpg" },
        "co": { name: "Colorado", image: "images/co.jpg", background: "images/co-background.jpg" },
        "ct": { name: "Connecticut", image: "images/ct.jpg", background: "images/ct-background.jpg" },
        "de": { name: "Delaware", image: "images/de.jpg", background: "images/de-background.jpg" },
        "dc": { name: "District of Columbia", image: "images/dc.jpg", background: "images/dc-background.jpg" },
        "fl": { name: "Florida", image: "images/fl.jpg", background: "images/fl-background.jpg" },
        "ga": { name: "Georgia", image: "images/ga.jpg", background: "images/ga-background.jpg" },
        "hi": { name: "Hawaii", image: "images/hi.jpg", background: "images/hi-background.jpg" },
        "id": { name: "Idaho", image: "images/id.jpg", background: "images/id-background.jpg" },
        "il": { name: "Illinois", image: "images/il.jpg", background: "images/il-background.jpg" },
        "in": { name: "Indiana", image: "images/in.jpg", background: "images/in-background.jpg" },
        "ia": { name: "Iowa", image: "images/ia.jpg", background: "images/ia-background.jpg" },
        "ks": { name: "Kansas", image: "images/ks.jpg", background: "images/ks-background.jpg" },
        "ky": { name: "Kentucky", image: "images/ky.jpg", background: "images/ky-background.jpg" },
        "la": { name: "Louisiana", image: "images/la.jpg", background: "images/la-background.jpg" },
        "me": { name: "Maine", image: "images/me.jpg", background: "images/me-background.jpg" },
        "md": { name: "Maryland", image: "images/md.jpg", background: "images/md-background.jpg" },
        "ma": { name: "Massachusetts", image: "images/ma.jpg", background: "images/ma-background.jpg" },
        "mi": { name: "Michigan", image: "images/mi.jpg", background: "images/mi-background.jpg" },
        "mn": { name: "Minnesota", image: "images/mn.jpg", background: "images/mn-background.jpg" },
        "ms": { name: "Mississippi", image: "images/ms.jpg", background: "images/ms-background.jpg" },
        "mo": { name: "Missouri", image: "images/mo.jpg", background: "images/mo-background.jpg" },
        "mt": { name: "Montana", image: "images/mt.jpg", background: "images/mt-background.jpg" },
        "ne": { name: "Nebraska", image: "images/ne.jpg", background: "images/ne-background.jpg" },
        "nv": { name: "Nevada", image: "images/nv.jpg", background: "images/nv-background.jpg" },
        "nh": { name: "New Hampshire", image: "images/nh.jpg", background: "images/nh-background.jpg" },
        "nj": { name: "New Jersey", image: "images/nj.jpg", background: "images/nj-background.jpg" },
        "nm": { name: "New Mexico", image: "images/nm.jpg", background: "images/nm-background.jpg" },
        "ny": { name: "New York", image: "images/ny.jpg", background: "images/ny-background.jpg" },
        "nc": { name: "North Carolina", image: "images/nc.jpg", background: "images/nc-background.jpg" },
        "nd": { name: "North Dakota", image: "images/nd.jpg", background: "images/nd-background.jpg" },
        "oh": { name: "Ohio", image: "images/oh.jpg", background: "images/oh-background.jpg" },
        "ok": { name: "Oklahoma", image: "images/ok.jpg", background: "images/ok-background.jpg" },
        "or": { name: "Oregon", image: "images/or.jpg", background: "images/or-background.jpg" },
        "pa": { name: "Pennsylvania", image: "images/pa.jpg", background: "images/pa-background.jpg" },
        "ri": { name: "Rhode Island", image: "images/ri.jpg", background: "images/ri-background.jpg" },
        "sc": { name: "South Carolina", image: "images/sc.jpg", background: "images/sc-background.jpg" },
        "sd": { name: "South Dakota", image: "images/sd.jpg", background: "images/sd-background.jpg" },
        "tn": { name: "Tennessee", image: "images/tn.jpg", background: "images/tn-background.jpg" },
        "tx": { name: "Texas", image: "images/tx.jpg", background: "images/tx-background.jpg" },
        "ut": { name: "Utah", image: "images/ut.jpg", background: "images/ut-background.jpg" },
        "vt": { name: "Vermont", image: "images/vt.jpg", background: "images/vt-background.jpg" },
        "va": { name: "Virginia", image: "images/va.jpg", background: "images/va-background.jpg" },
        "wa": { name: "Washington", image: "images/wa.jpg", background: "images/wa-background.jpg" },
        "wv": { name: "West Virginia", image: "images/wv.jpg", background: "images/wv-background.jpg" },
        "wi": { name: "Wisconsin", image: "images/wi.jpg", background: "images/wi-background.jpg" },
        "wy": { name: "Wyoming", image: "images/wy.jpg", background: "images/wy-background.jpg" }
    };

    // Event listener for when a state is selected
    statesDropdown.addEventListener('change', function() {
        const selectedState = this.value;

        if (selectedState && selectedState !== 'empty-state') {
            // Update the postcard content with the state name
            const stateData = states[selectedState];
            stateHeading.textContent = `Welcome to ${stateData.name}!`;
            greeting.textContent = `Greetings from ${stateData.name}`;

            // Show the state image (foreground)
            stateImage.src = stateData.image;
            stateImage.style.display = "block";

            // Change background image for postcard
            postcard.style.backgroundImage = `url(${stateData.background})`;
            postcard.style.backgroundSize = "cover";  // Ensure the background covers the area
            postcard.style.backgroundPosition = "center";  // Center the background image
        } else {
            // Reset the postcard content if no state is selected
            stateHeading.textContent = "Choose a state";
            greeting.textContent = "To Generate a Postcard";
            stateImage.style.display = "none";  // Hide the image
            postcard.style.backgroundImage = "";  // Reset background image
        }
    });
});
