import {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register(){

  // The state holding our user info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // To programmatically change pages after submitting
  const router = useRouter();

  //Add a NEW user
  async function handleAdd(event) {
    //Prevents automatic default actions
    event.preventDefault();

    // Send the listed data to the API
    const res = await fetch("/api/register_api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName,lastName,email, password, role }),
    });

    // UseRouter can then send the user direct to dashboard
    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  }

  /// For updating the input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
 };

const handleFirstName = (event) => {
  setFirstName(event.target.value);
};

 const handleLastName = (event) => {
    setLastName(event.target.value);
 };
 const handleRoleChange = (event) =>{
    setRole(event.target.value);
 };



    return(

        <>
        
        <>
        
        <Nav />
        <>

        <div className="bg-dark min-vh-100">
        
            
            
            <form class=" d-flex flex-column container align-items-center w-50" onSubmit={handleAdd}>
                    
              

                <div className="d-flex flex-column border border-1 border-warning mt-4 p-5 w-100 ">
                <h2 className="text-light text-left fw-bold">Register:</h2>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">First Name: </label>
                    <input 
                      type="firstName"
                      className="form-control"
                      placeholder="Set Email"
                      value={firstName}
                      onChange={handleFirstName}
                     />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Last name: </label>
                    <input
                    type="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={handleLastName}
                    placeholder="setLastName"
                     />
                </div>

                <div className="mb-3">

                <label className="form-label text-light fw-bold">Profile:</label>
                        <select 
                        className="w-100" onChange={handleRoleChange}>
                          <option value="">--Please choose an option--</option>
                            <option value="landlord">LandLord</option>
                            <option value="tenant">Tenants</option>
                            <option value="admin">Admin</option>
                        </select>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">E-mail:</label>
                    <input 
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email set"
                    
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Password:</label>
                    <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="password set"
                    
                    />
                </div>
              

               
                <button type="submit" className="btn btn-primary w-50">Register</button>
          
                </div>
      
               
            </form>
            
            </div>
            </>
            
            </>
            
            <Footer />
            </>


    );


}