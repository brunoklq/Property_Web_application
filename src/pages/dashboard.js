import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav_Dashboard } from "@/components/nav_dashboard";
import { Footer } from '@/components/footer';
import '@/styles/Home.module.css'





export default function Dashboard() {



    return (

      <><><Nav_Dashboard />



        <div className="bg-dark min-vh-100">

       

          <form class=" d-flex flex-column container align-items-left w-50">

            <div className="text-white d-flex flex-column container mt-5 mb-4 ">

              <h1 className="border-bottom w-50 pb-1 ">DASHBOARD</h1>

              
            </div>
                
                <div className="d-flex flex-column mt-4  w-100 ">
                  <h4 className=" text-white w-50 pb-1 ">List of My Properties</h4>
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

        </div></>
        
        <Footer /></>

      );

    
};