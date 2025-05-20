function submitData(userName, userEmail) { 
    
    const addUserData = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    }),
    };
    

return fetch("http://localhost:3000/users", addUserData)
   .then((res) => res.json())
   .then((user) => {
   const userID = user.id;
   document.querySelector("body").append(userID)
   })
  .catch(function (error) {
    const errorMessage = "FetchError: request to http://localhost:3000/users failed, reason: Unauthorized Access"
    document.querySelector("body").append(errorMessage)
  });

};
   
   







