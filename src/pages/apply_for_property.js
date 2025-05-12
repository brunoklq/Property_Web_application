import {useState, useEffect} from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Apply_Property_list(){


    return(

        <>
        
        <>
        
        <Nav />
        <>

        <div className="bg-dark min-vh-100">
        
        
            
            <form class=" d-flex flex-column container align-items-left w-50">

            <div className="text-white d-flex flex-column container mt-5 mb-4 "  >

            <h1 className="border-bottom w-50 pb-1 ">Apply for Property</h1>

            </div>
                <div className="d-flex flex-row container w-100 justify-content-center"> 
                            <div class="mb-3 w-100"> 
                            <label for="exampleFormControlTextarea1" class="form-label text-white">Message:</label>
                            <textarea class="form-control w-100" id="exampleFormControlTextarea1" rows="8"></textarea>
                                </div>

                    
                    </div>
                    


                 <button type="submit" className="btn btn-primary w-50 ms-3 fw-bold">Confirm</button>
            </form>
            
            </div>
            </>
            
            </>
            
            <Footer />
            </>


    );


}
