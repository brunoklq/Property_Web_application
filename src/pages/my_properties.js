import {useState, useEffect} from "react";
import { Nav_loged } from "@/components/nav_loged";
import { Footer } from "@/components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function my_property_list(){


    return(

        <>
        
        <>
        
        <Nav_loged />
        <>

        <div className="bg-dark min-vh-100">
        
        
            
            <form class=" d-flex flex-column container align-items-left w-50">

            <div className="text-white d-flex flex-column container mt-5 mb-4 "  >

            <h1 className="border-bottom w-50 pb-1 ">My Properties</h1>

            </div>
              <div className="d-flex flex-column border border-1 border-light mt-4  w-100 ">
                <table class="table table-striped table-dark">
                        <thead className="table-light">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Property Title</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>@social</td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>@social</td>
                            </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>John</td>
                            <td>@social</td>
                            </tr>
                        </tbody>
                        </table>
                </div>
            </form>
            
            </div>
            </>
            
            </>
            
            <Footer />
            </>


    );


}