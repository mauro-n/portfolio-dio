class Api {
    static url = "https://raw.githubusercontent.com/mauro-n/api-mauro-n/main/profile/profile.json"

    static async fetch() {
        const rawData = await fetch(this.url);
        const data = await rawData.json();
        return data;
    }
}

export default Api;