const fs= require('fs');


// //writing new file.
// //Sync... if we change the content and run the code again it will overwrite the current content to the new one
// fs.writeFileSync("file.txt","This is the file created by ankush");

// //Async ie it consists of a callback function as well
// fs.writeFile("file.txt","This is async the file created by ankush", (err)=>{});

//reading a existing file
//Sync...
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// Async... it doesnt return anything like sync. it just gives a callback function
// fs.readFile("./contact.txt", "utf-8", (err, result)=> {
//     if(err){
//         console.log('Errorr',err)
//     }
//     else{
//         console.log(result)
//     }
// });

//append data in a file using appendFileSync and appendFile
// fs.appendFileSync("./file.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./file.txt", `Hey there ${Date.now()}\n`);

//copying data from a file and pasting it in a new file
// fs.copyFileSync("./file.txt", "./file2.txt");

//deleting a file
fs.unlinkSync("./file2.txt");
