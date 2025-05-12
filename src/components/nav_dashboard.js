import styles from '../styles/Home.module.css';


export function Nav_Dashboard() {
  return (
    <nav className="d-flex align-items-center justify-content-between p-2 border-bottom border-warning border-3">
      {/* Left-aligned logo */}
      <a className="p-2 ms-5" href="#">
        <img
          src="images/griffith_logo_modified.png"
          style={{ height: '50px' }}
          alt="Griffith Logo"
        />
      </a>

      {/* Right-aligned nav links */}
      <div className="nav nav-underline hstack gap-3 ms-auto me-5">
        <a className="nav-link text-dark fw-semibold" href="/index_loged">Home</a>



              
              <a className="nav-link text-dark fw-semibold "  href=""  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Dashboard</a>

              <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">DASHBOARD LANDLORD</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <p>Try scrolling the rest of the page to see this option in action.</p>
                  <h5>Welcome LandLord "Name of User"</h5>
                  <div className='container d-flex flex-column gap-4 mt-5 justify-content-center'>
                  <button type="button" class="btn btn-primary">My Properties</button>
                  <button type="button" class="btn btn-primary">View Properties</button>
                   <button type="button" class="btn btn-primary">My application</button>
                  </div>
                
                </div>
                   <div className='container d-flex flex-column gap-4 mt-5 mb-5 justify-content-center'>
    
                   <button type="button" class="btn btn-primary">Logout</button>
                  </div>
              </div>



        <a className="nav-link text-dark fw-semibold" href="/my_properties">My Properties</a>
        <a className="nav-link text-dark fw-semibold" href="/">Logout</a>
      </div>
    </nav>
  );
}



















