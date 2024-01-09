export async function getNationIsAuthorized(nationNotAuthorized) {
    const userCountry = await getUserCountry();
    for (const nation of nationNotAuthorized) {
        const nationName = nation.toString().toLowerCase();
        if (userCountry && userCountry.toLowerCase() === nationName) {
            return false; 
        }
    }
    return true; 
}

async function getUserCountry() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                try {
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                    const data = await response.json();
                    const country = data.countryName.toString().toLowerCase();
                    resolve(country);
                } catch (error) {
                    reject(null);
                }
            });
        } else {
            reject(null);
        }
    });
}
