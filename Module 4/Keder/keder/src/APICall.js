import React from "react";
import Axios from "axios";
const APICall = React.createContext();

function APICallProvider(props) {
    let [activity, setActivity] = React.useState();
    let [type, setType] = React.useState();
    let [price, setPrice] = React.useState();
    let [people, setPeople] = React.useState();
    let [panel, setPanel] = React.useState(false);

    function request(query, queryType) {
        console.log(query, queryType);
        if (queryType === "people") {
            Axios.get(
                `https://www.boredapi.com/api/activity?participants=${query}`
            ).then((response) => {
                setActivity((prev) => (activity = response.data.activity));
                setType((prev) => (type = response.data.type));
                setPrice((prev) => (price = response.data.price));
                setPeople((prev) => (people = response.data.participants));
                setPanel((prev) => (panel = true));
            });
        } else if (query !== "") {
            Axios.get(
                `https://www.boredapi.com/api/activity?${queryType}=${query}`
            ).then((response) => {
                setActivity((prev) => (activity = response.data.activity));
                setType((prev) => (type = response.data.type));
                setPrice((prev) => (price = response.data.price));
                setPeople((prev) => (people = response.data.participants));
                setPanel((prev) => (panel = true));
            });
        } else {
            Axios.get("https://www.boredapi.com/api/activity").then(
                (response) => {
                    setActivity((prev) => (activity = response.data.activity));
                    setType((prev) => (type = response.data.type));
                    setPrice((prev) => (price = response.data.price));
                    setPeople((prev) => (people = response.data.participants));
                    setPanel((prev) => (panel = true));
                }
            );
        }
    }

    function close() {
        setPanel((prev) => (panel = false));
    }

    return (
        <APICall.Provider
            value={{
                request: request,
                activity: activity,
                type: type,
                price: price,
                people: people,
                panel: panel,
                close: close,
            }}
        >
            {props.children}
        </APICall.Provider>
    );
}

export { APICallProvider, APICall };
