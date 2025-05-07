
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/Home.module.css'



export function Home(){

return(



<div className=" p-4 min-vh-100 d-flex flex-column align-items-center" >


<div className="d-flex flex-column align-items-center bg-secondary mb-4 ">
    
    <div  class="p-4 border border-light border-1 text-white" >

<h1>Dublin Property Agency</h1>


</div>

</div>
    
<div className="border p-2 rounded shadow-sm d-flex flex-column align-items-center" style={{ width: 'fit-content' }}>
  <img
    src="images/dublin_bridge.jpg"
    alt="Griffith Logo"
    className="img-fluid"
    style={{ Height: '100vw' }}
  />
</div>


<div className="text-white text-start container mt-4 "  >

<h1>Welcome to your new experience</h1>

    <ul>
        <li> <h5>Easy Property Management</h5></li>
        <li><h5>Fast Applications Lorem ipslum caracter</h5></li>


    </ul>


</div>



</div>


    );

};