// Write an asynchronous function that accepts a message string and
// a delay time in milliseconds. The function should log the message 
// to the console after the specified delay time
async function introduction(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}
introduction("Hello,my name is Idaya", 3000);



// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data 
// for each user ID one by one, in sequence.
async function getUserData(ids) {
    for(const id of ids) {
      try {
        const userData = await getUserData(id);
        console.log(userData);
      } catch(error) {
        console.error(`Error fetching data for user ${id}:`, error);
      }
    }
  }
  
  const userId = [1, 2, 3, 4, 5];
  getUserData(userId);
  





// You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success
// message if the task is successful, and a custom error message if there's an error.
let performTask=true;
let promise=new Promise(function(reslove,reject){
    if (success){
        reslove('I have everything')
    }
    else{
        reject('I am still poor')
    }
}).then(()=>{console.log('Success');})
  .catch(()=>{console.log('Failed!');})
  