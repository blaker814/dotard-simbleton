import { allBusinesses, purchaserNames } from "./BusinessProvider.js"
import { newYorkBusinesses } from "./BusinessProvider.js"
import { manufacturingBusinesses } from "./BusinessProvider.js"
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

export const NewYorkBusinessList = () => {
    const newYorkArray = newYorkBusinesses;
    contentTarget.innerHTML = "<h2>New York Businesses</h2>"

    newYorkArray.forEach(
        (busObj) => {
            contentTarget.innerHTML += `<article class="businessList--newYork">
            ${Company(busObj)}
        </article>`
        }
    );
}

export const ManufacturingBusinessList = () => {
    const manufacturingArray = manufacturingBusinesses;
    contentTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"

    manufacturingArray.forEach(
        (busObj) => {
            contentTarget.innerHTML += `<article class="businessList--manufacturing">
            ${Company(busObj)}
        </article>`
        }
    );
}

export const PurchaserList = () => {
    const purchaserArray = purchaserNames;
    contentTarget.innerHTML = "<h2>Purchasing Agents</h2>"

    purchaserArray.forEach(
        (purchaser) => {
            contentTarget.innerHTML += `<article class="agents">
            <h3>${purchaser.fullName}</h3>
                <p>${purchaser.company}</p>
                <p>${purchaser.phoneNumber}</p>
        </article>`
        }
    );
}
