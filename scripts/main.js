import { allBusinesses } from './BusinessProvider.js'
import { BusinessList } from './BusinessList.js'

const allTheBusinesses = allBusinesses();

for (const business of allTheBusinesses) {
    console.log(business)
}

BusinessList();