import { allBusinesses } from './BusinessProvider.js'
import { BusinessList, PurchaserList } from './BusinessList.js'
import { NewYorkBusinessList } from './BusinessList.js'
import { ManufacturingBusinessList } from './BusinessList.js'

const allTheBusinesses = allBusinesses();

for (const business of allTheBusinesses) {
    console.log(business)
}

// BusinessList();
// NewYorkBusinessList();
// ManufacturingBusinessList();
// PurchaserList();
