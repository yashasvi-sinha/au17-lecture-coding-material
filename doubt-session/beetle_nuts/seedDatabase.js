const csv = require('csvtojson')
const {connect} = require('mongoose')
const BranchModel = require('./models/Branch')


async function importData() {

    const branchArray = await csv({ ignoreEmpty: true }).fromFile('BeetleNut_Data.csv')

    // const formattedBranchArray = []

    // for (let index = 0; index < branchArray.length; index++) {
    //     const element = branchArray[index];

    //     formattedBranchArray.push({
    //         institutionName: element["Insitution Name"]
    //     })

    // }


    const formattedBranchArray = branchArray.map(branch => {
        return {
            institutionName: branch["Insitution Name"],
            branchName: branch["Branch Name"],
            branchIncharge: branch["Branch Incharge"],
            address: branch["Address"],
            city: branch["City"],
            contactNumber: branch["Contact Number"],
            pincodeCovered: branch["Pincode covered"],
        }
    })
    
    
    //view format
    // console.log(`🚀 ~ importData ~ branchArray`, branchArray[0])
    // console.log(`🚀 ~ importData ~ formattedBranchArray`, formattedBranchArray[0])



    const DB_URL = "mongodb+srv://superprocure:<CHANGE WITH YOUR PASSWORD>@cluster0.mps8w.mongodb.net/beetle_nut?retryWrites=true&w=majority"

    await connect(DB_URL)


    const deletedResult = await BranchModel.deleteMany()
    console.log(`🚀 ~ importData ~ deletedResult`, deletedResult.deletedCount)

    const insertedResult = await BranchModel.insertMany(formattedBranchArray)
    console.log(`🚀 ~ importData ~ insertedResult`, insertedResult.length)

    
}


importData()