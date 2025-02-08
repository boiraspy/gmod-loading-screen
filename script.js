async function fetchSettings() {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/gmod-loading-screen/main/loading_screen_settings.json?timestamp=${new Date().getTime()}`);
        const data = await response.json();

        document.getElementById("background").style.backgroundImage = `url(${data.imgURL})`;
        document.getElementById("custom-text").innerText = data.customText;
        document.getElementById("bg-music").src = data.musicURL;
    } catch (error) {
        console.error("Failed to load settings:", error);
    }
}

// Auto-refresh every 10 seconds
setInterval(fetchSettings, 10000);
fetchSettings();

