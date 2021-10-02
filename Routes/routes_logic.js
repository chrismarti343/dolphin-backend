
import Productdb from "../Database/product.js"
import Userdb from "../Database/user.js"
// This will be used to get all o four product
//HttpGet
export const product = async (req, res) => {
    try {
        const allItems = await Productdb.find()
        res.status(200).json(allItems)
    } catch (error) {
        res.status(400).send("Error")
        console.log(error.message)
    }
}


// This is used to get an product by Id
//HttpGet
export const find_by_product_id = async (req, res) => {
    res.status(200).send("You have reached the product id")
}

// This is used to add a product to the database
//HttpPost
export const addProduct = async (req, res) => {
    // res.status(200).send("You have reached the add product")

    const productInfo = req.body

    // we will pass the body request that 
    // came form the client to the database
    const myQue = Productdb(productInfo);
    try {
        // this will save the info into the database
        await myQue.save()

        res.status(201).json(myQue);
    } catch (error) {
        // send an error to the response 
        res.status(401).send({ message: error.message })
    }
}






// This is used to Remove a product from the database
export const remProduct = async (req, res) => {
    res.status(200).send("You have reached the remove product")
}


// This is used to register a user
export const register = async (req, res) => {
    res.status(200).send("You have reached the register")
}


// this is used to remove a a user from database
export const remUser = async (req, res) => {
    res.status(200).send("You have reached the remove user")
}