export const API_URI = "";

class api {

    async call(url, method, body) {

        var params = {};
        url = API_URI + url;
        if (method === "GET") {
            params = {
                headers: {
                    "Content-Type": "application/json"

                },
                method: "GET"
            }

            url = url + "?" + this.getQueryString(body)
        } else if (method === "POST") {
            params = {
                headers: {
                    "Content-Type": "application/json"

                },
                method: "POST",
                body: JSON.stringify(body)
            }
        }

        return fetch(url, params
        ).then(
            response => response.json()
        ).then( (json) => {
            return json;
        }).catch(
            error => {
                console.log(error)
            }
        )
    }

    getQueryString = (object) => {
        var query = [];
        Object.keys(object).forEach((k) => {
            query.push(k + "=" + object[k]);
        });
        return query.join("&");
    }
}

export default new api();