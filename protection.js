export function getNationIsAuthorized(nationNotAuthorized) {
    nationNotAuthorized.forEach(nation => {
        return nationIp.toString().toLowerCase() === nation.toString().toLowerCase() ? false : true; 
    }
}
