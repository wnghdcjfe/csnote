const mongoose = require('mongoose')  
const Schema = mongoose.Schema
const PhotoSchema = new Schema({
	albumId: Number,
	id: Number,
    title: String, 
    url : String, 
    thumbnailUrl : String
})  
 
 
const fs = require('fs')
const path = require('path')
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database' 
const pt = path.join(__dirname, './photos.json')  

const main = async()=>{ 
    await mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err))
 
 
    const Photo = mongoose.model('Photo', PhotoSchema)  

    let ret = await Photo.countDocuments()
    if(ret){
        await mongoose.connection.db.dropCollection('photos') 
    }  
    // // 인덱스 적용 후
    PhotoSchema.index({ id: 1})
    await Photo.createIndexes()
      
    const t = JSON.parse(fs.readFileSync(pt).toString()) 
    let a = []
    for(let i = 0; i < 20; i++){
        a.push(...t)  
    } 
    await Photo.insertMany(a) 
    ret = await Photo.countDocuments()
    
    console.log(`${ret}건이 저장되었습니다. `)
    console.time('id를 오름차순으로 찾기')
    await Photo.find().sort({"id" : 1}).limit(100)
    console.timeEnd('id를 오름차순으로 찾기')
}  
main()  