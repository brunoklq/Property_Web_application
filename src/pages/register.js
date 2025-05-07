import {useState, useEffect} from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register(){


    return(

        <>
        
        <>
        
        <Nav />
        <>

        <div className="bg-dark min-vh-100">
        
            
            
            <form class=" d-flex flex-column container align-items-center w-50">
                    
              

                <div className="d-flex flex-column border border-1 border-warning mt-4 p-5 w-100 ">
                <h2 className="text-light text-left fw-bold">Register:</h2>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">First Name: </label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Last name: </label>
                    <input type="email" className="form-control" />
                </div>

                <div className="mb-3">

                <label className="form-label text-light fw-bold">Profile:</label>
                        <select className="w-100">
                            <option value="Refrigerator">LandLord</option>
                            <option value="Washing Machine">Tenants</option>
                        </select>
                </div>
                <div className="mb-3">
                    <label className="form-label text-light fw-bold">E-mail:</label>
                    <input type="password" className="form-control " />
                </div>

                <div className="mb-3">
                    <label className="form-label text-light fw-bold">Password:</label>
                    <input type="password" className="form-control " />
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