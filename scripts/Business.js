export const Company = (busObj) => {
    return `
        <section class="company">
            <h3 class="company__name">${busObj.companyName}</h3>
            <div class="company__address">
                 <p>${busObj.addressFullStreet}</p>
                 <p>${busObj.addressCity}, ${busObj.addressStateCode} ${busObj.addressZipCode}</p>
            </div>
        </section>
    `
}