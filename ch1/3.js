const URL = 'mongodb://localhost:27017/kundolapp'
const createConnection = url => ({"url" : url})    
class db {
    constructor(url) {
        if (!db.instance) { 
            db.instance = createConnection(url)
        }
        return db.instance
    }
    connect() {
        return this.instance
    }
}
const a = new db(URL)
const b = new db(URL) 
console.log(a === b) // true
