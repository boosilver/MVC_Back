const db = require('./utils/mvc_db');

// var time = Date.now()
// var day = new Date();
// var all_Date = day.getFullYear()+"-"+(day.getMonth()+1) +"-"+ day.getDate()

/**
 * Parsing parameters from the object received
 * from client and using default values
 * where needed/possible
 * @function
 * @param {object} unparsedAttrs - New ServiceRequest Object

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'use strict';


/**
 * Creates a new ServiceRequest object.
 * @class
 */
class controller {
    /**
     * Create new serviceRequest.
     * @method
     * @param {object} unparsedAttrs - New ServiceRequest Object
     */

    join(unparsedAttrs) {
        var day = new Date();
        var CheckAccount = []
        var FinalCheck = []
        var come = ""
        var numtocome = ""
        return new Promise(async (resolve, reject) => {
            console.log(`accountID : ${unparsedAttrs.accountID || reject("account or password incorrect")} `)
            console.log(`password : ${unparsedAttrs.password || reject("account or password incorrect")} `)
            // if( CheckAccount < 0 ){
            //     reject("Money must no 0 Please try agian")
            // }
            try {
                CheckAccount = await db.MVC_DBread2('information', "data", unparsedAttrs.accountID || reject("name not found"))
                console.log('Check come data!!! :>>>>>>>>>>>>>>>> ', CheckAccount.come)
                if(CheckAccount.password  != unparsedAttrs.password){
                    reject("Password incorrect")
                }
                if (CheckAccount.come != 1) {
                    numtocome = 1
                    await db.DBdelete('information', "data", unparsedAttrs.accountID || reject("ACCOUNT not found3"))
                    await db.DBwrite3('information', "data", unparsedAttrs.accountID || reject("account not found"), unparsedAttrs.password || reject("password not found")
                        , numtocome || reject("numtocome not found"))
                }
                else {
                    reject("ลงทะเบียนไปแล้วไอ้โง่")
                }
                FinalCheck = await db.MVC_DBread2('information', "data", unparsedAttrs.accountID || reject("name not found"))
            }
            catch (error) {
                reject("User not found")
            }
            resolve({
                message: {
                    Result: FinalCheck,

                }
            });
        });
    }


    register(unparsedAttrs) {
        var day = new Date();
        var CheckAccount = ""
        var CheckPassword = ""
        return new Promise(async (resolve, reject) => {
            console.log(`accountID : ${unparsedAttrs.accountID || reject("name not found")} `)
            console.log(`password : ${unparsedAttrs.password || reject("DATA not found")} `)
            console.log(`numtocome : ${unparsedAttrs.numtocome || reject("DATA not found")} `)

            try {
                CheckAccount = await db.MVC_DBread('information', "data", unparsedAttrs.accountID || reject("name not found"))
                console.log('Check data!!! :>>>>>>>>>>>>>>>> ', CheckAccount)
                if (CheckAccount = unparsedAttrs.accountID) {
                    reject("User already exist")
                }
                // CheckAccount = "reject"
            }
            catch (create) {
                db.DBwrite3('information', "data", unparsedAttrs.accountID || reject("account not found"), unparsedAttrs.password || reject("password not found")
                    , unparsedAttrs.numtocome || reject("numtocome not found"))
            }

            resolve({
                message: {
                    accountID: unparsedAttrs.accountID,
                    password: unparsedAttrs.password,
                    numtocome: unparsedAttrs.numtocome,
                }
            });
        });
    }

    

    QueryAccount(unparsedAttrs) {
        var data = ""
        var Sort = unparsedAttrs.SORT
        return new Promise(async (resolve, reject) => {
            console.log('Sort : ' + Sort)
            if (Sort == "H") {
                data = await db.sortvalueH('information', "data")
            } else {
                if (Sort == "L") {
                    data = await db.sortvalueL('information', "data")
                } else {
                    reject("input H or L")
                }
            }
            console.log('result data : ' + data)
            resolve({
                message: {
                    data: data,
                }
            });
        });
    }

    test() {
        var data = ""
        var Sort = "L"
        return new Promise(async (resolve, reject) => {
            console.log('Sort : ' + Sort)
            if (Sort == "H") {
                data = await db.sortvalueH('information', "data")
            } else {
                if (Sort == "L") {
                    data = await db.sortvalueL('information', "data")
                } else {
                    reject("input H or L")
                }
            }
            console.log('result data : ' + JSON.stringify(data))
            resolve({
                message: {
                    data: data,
                }
            });
        });
    }

}
module.exports = controller
