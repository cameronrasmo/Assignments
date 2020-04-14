import React from "react";
import Menu from "./Menu.js";
import { APICall } from "./APICall.js";
import Activity from "./Activity.js";
import Select from "./Select.js";
import criteria from "./criteria.json";

function PriceSection() {
    const API = React.useContext(APICall);
    return (
        <div>
            <Select
                request={API.request}
                criteria={criteria.types.price}
                type='price'
            />
            <Menu selected='price' request={API.request} />
            <Activity
                activity={API.activity}
                type={API.type}
                price={API.price}
                people={API.people}
                panel={API.panel}
                close={API.close}
            />
        </div>
    );
}

export default PriceSection;
