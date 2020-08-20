export const Company = (busObj) => {
    return `
        <section class="company">
            <h2 class="company__name">${busObj.companyName}</h2>
            <div class="company__address">
                 <p>${busObj.addressFullStreet}</p>
                 <p>${busObj.addressCity}, ${busObj.addressStateCode} ${busObj.addressZipCode}</p>
            </div>
        </section>
    `
}

export const Purchaser = (busObj) => {
    return `
    `
}