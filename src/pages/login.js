import {useState, useEffect} from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// New!!
import { useRouter } from "next/router";


export default function login(){
  // The states holding our user info name

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // To programmatically change pages after submitting
  const router = useRouter();

  //  Note this is async
  async function handleLogin(event) {
    event.preventDefault();

    const res = await fetch("/api/login_api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    

    if (res.ok) {
      // This is useRouter changing to the dashboard after submitting
      router.push("/dashboard");
      
    } else {
      alert("Login failed!");
    }
  }

  // For updating the input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
 };



    return(
        <>
        <>   
        <Nav />
        <>

        <div className="bg-dark min-vh-100">
        
            <form class=" d-flex flex-column container align-items-center w-50" onSubmit={handleLogin}>
                    
              

                <div className="d-flex flex-column border border-1 border-warning mt-4 p-5 w-100 ">
                <h2 className="text-light text-left fw-bold">Login:</h2>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Email address: </label>
                    <input type="text"
                     className="form-control"
                     placeholder="Username"
                     value={email}
                     onChange={handleEmailChange}
                     
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Password</label>
                    <input type="text"
                     className="form-control"
                     placeholder="Password"
                     value={password}
                     onChange={handlePasswordChange}
                     
                     />
                </div>
                         <button type="submit" className="btn btn-primary w-50">Log in</button>
               
                </div>
            </form>
            </div>
            </>
            
            </>
            
            <Footer />
            </>


    );


}

