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

async function getCountryName() {
    try {
        const response = await fetch('https://api.bigdatacloud.net/data/client-ip');
        const data = await response.json();
        const countryName = data.countryName;
        return countryName;
    } catch (error) {
        return null;
    }
}
