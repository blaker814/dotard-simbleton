import { allBusinesses } from "./BusinessProvider.js"
import { Company } from "./Business.js"

const contentTarget = document.querySelector("main")

export const BusinessList = () => {
    const businessArray = allBusinesses();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (busObj) => {
            contentTarget.innerHTML += Company(busObj);
        }
    );
}

