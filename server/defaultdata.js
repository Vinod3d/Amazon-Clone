const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata")

const DefaultData = async () => {
    try {
      // Delete all existing documents in the "Products" collection
      await Products.deleteMany({});
  
      // Insert data from the "productsdata" array into the "Products" collection
      const storeData = await Products.insertMany(productsdata);
  
    //   console.log(storeData);
    } catch (error) {
      console.log('Error in inserting data', error);
    }
  };
  

module.exports = DefaultData;