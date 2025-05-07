import { Nav } from "./nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';


export function Home(){

return(



<div  class="d-flex flex-column justify-content-center align-items-center min-vh-100" >
    
<div  class="d-flex">
  
<Nav/>
 
</div>

<div className={styles.wrapper2}>
<div  class="d-flex justify-content-center align-items-center  p-5 border border-light border-4 " >
    

<div class="text-white"  >

<h1>Dublin Property Agency</h1>

</div>
   
</div>
</div>

</div>

    );

};