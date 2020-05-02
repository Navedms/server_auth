const bcrypt = require('bcrypt');

// bcrypt.genSalt(10,(err,salt)=>{
// if (err) return next(err);
//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if (err) return next(err);
//         console.log(hash);
        
//     })

// })

// const secret = 'mysecretpassword';
// const secretSalt = 'kjvdklcdixjdjshfqckadxjshcdjf'

// const user = {
//     id:1,
//     token:MD5('FGFJDFK').toString() + secretSalt
// }

// console.log(user);

const id = '1000';
const secret = 'supersecret'

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';
const token = jwt.sign(id,secret);

console.log(token);



const decodeToken = jwt.verify(receivedToken,secret);
console.log(decodeToken);