function displayData(event) {
               
                event.preventDefault();
                alert("hi")
             let name = document.getElementById("name").value;
             let age = document.getElementById("age").value;
             let email = document.getElementById("email").value;
            //  let gender = document.querySelector("input[name='gender']:checked")
            
            

             
            //  display name value
             console.log(name);
             
             document.getElementById("display-container").innerHTML=
             `<h3>Student List</h3>
             <p>Full Name:${name}</p>
             <p>Age:${age}</p>
             <p>Email:${email}</p> 
            //  if (check=radio1) {Gender:${value}
               
            //  }else(check=radio1){Gender:${value}
               
            //    }
           `;}
         