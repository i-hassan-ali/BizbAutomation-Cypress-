import 'cypress-file-upload';
import SellerloginPage from "../fixtures/SellerloginPage";
import UploadProduct from '../fixtures/UploadProduct';


//Seller Log in page
//******************************************************************** */
// describe('Seller LogIn', () => {

// it('Valid Login', () => {

//     SellerloginPage.Valid_Login()
   
// });

// it('Invalid Email', () => {

//     SellerloginPage.Invalid_Email()

// });

// it('Invalid Password', () => {
    
//     SellerloginPage.Invalid_Password()
   
// });

// it('Empty Fields', () => {

//     SellerloginPage.Empty_Fields()

// });

// it('Missing Email', () => {

//     SellerloginPage.Missing_Email()
   
// });

// it('Missing Password', () => {

//     SellerloginPage.Missing_Password()

// });

// it('Invalid Login', () => {
    
//     SellerloginPage.Invalid_Login()
   
// });

// it('Missing Email Invalid Password', () => {

//     SellerloginPage.Missing_Email_Invalid_Password()

// });

// it('Missing Password Invalid Email', () => {

//     SellerloginPage.Missing_Password_Invalid_Email()

// });

// });

//Seller Log in page end
//********************************************************* */



//Upload Product page
//********************************************************* */

describe('Upload Product', () => {
    it('Valid Product Upload', () => {
        
        SellerloginPage.Valid_Login()
        UploadProduct.Valid_Product_Upload()    
        
    });

    it.only('Minimum Valid Data', () => {
        
        SellerloginPage.Valid_Login()
        UploadProduct.Minimum_Valid_Data()
        
        
    });

    it('Maximum Image Size', () => {
        
        SellerloginPage.Valid_Login()
        UploadProduct.Maximum_Image_Size()
        
        
    });
    
});


//Upload Product page end
//********************************************************* */