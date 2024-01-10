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
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        const country = data.country;
        return country;
    } catch (error) {}
}
