// parseJSON - If json is valid it gets returned, otherwise null gets returned
export function parseJSON(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        return null;
    }
}