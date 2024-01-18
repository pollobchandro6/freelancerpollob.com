swal("Welcome", "I hope you like my website", "success");


function send(){
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var contact = document.getElementById("Contact").value;
    var subject = document.getElementById("Subject").value;
    var message = document.getElementById("Message").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact: " + contact + "<br/> Subject: " + subject + "<br/> Message: " + message;
    
    Email.send({
      SecureToken : "6f7f4ec9-ab96-4588-b0df-fe21332f65fe",
      To : 'mrpollob019@gmail.com',
      From : "mrpollob019@gmail.com",
      Subject : subject,
      Body : body,
     })
     .then(
      message =>{
          if(message=='OK'){ 
            swal("Successfull", "Your Data Successfull Received", "success");
          }
          else { 
            swal ("Something Wrong", "Your Data Is Not Correct!", "error");
          }
      }
    )
  }

  
