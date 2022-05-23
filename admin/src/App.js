import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, NavDropdown, Navbar, Container, Offcanvas, Form, FormControl, Card, Accordion } from 'react-bootstrap';
import './Admin.css';
<link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"></link>

function App() {
  return (
    <>
      <div className="App">
         {/* <Navbar bg="light" expand={false}>
        <Container fluid>
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
             <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img src={require('./img/AdminLTELogo (1).png')} />AdminLTE3</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link><img className='img1' src={require('./img/ap.jpg')} />Alexander Pierce</Nav.Link>

              </Nav> 
               <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body> 
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Dashboard</Accordion.Header>
              <Accordion.Body>
              <input type='radio' />Dashboard v1
              </Accordion.Body>
              <Accordion.Body>
              <input type='radio' />Dashboard v2
              </Accordion.Body>
              <Accordion.Body>
              <input type='radio' />Dashboard v3
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header></Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item> 
          </Accordion>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Brand href="#">Contact</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar"  />
          
        
        </Container>
      </Navbar> */}

<nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Never expand</a>
      

      <div class="collapse navbar-collapse" id="navbarsExample01">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown01">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form>
          {/* <input class="form-control" type="text" placeholder="Search" aria-label="Search"> */}
        </form>
      </div>
    </div>
  </nav>


    </div>
      <div style={{}}>
        <Card style={{ width: '18rem', float: 'left', height: '10rem', backgroundColor: '#17a2b8' }}>
          <h1>150</h1>
          <h5>new Orders</h5>
        </Card>

        <Card style={{ width: '18rem', float: 'left', height: '10rem', backgroundColor: '#28a745' }}>
          <h1>53%</h1>
          <h5>Bounce Rate</h5>
        </Card>

        <Card style={{ width: '18rem', float: 'left', height: '10rem', backgroundColor: 'orange' }}>
          <h1>44</h1>
          <h5>User Registration</h5>
        </Card>

        <Card style={{ width: '18rem', float: 'left', height: '10rem', backgroundColor: 'red' }}>
          <h1>65</h1>
          <h5>Unique Visitors</h5>
        </Card>
      </div>  
        {/* <div className="wrapper">
          <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src={require('./img/AdminLTELogo (1).png')} alt="AdminLTELogo" height="60" width="60" />
          </div>
          <nav class="main-header navbar navbar-expand navbar-white navbar-light">

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="index3.html" class="nav-link">Home</a>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <a href="#" class="nav-link">Contact</a>
              </li>
            </ul>


            <ul class="navbar-nav ml-auto">

              <li class="nav-item">
                <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                  <i class="fas fa-search"></i>
                </a>
                <div class="navbar-search-block">
                  <form class="form-inline">
                    <div class="input-group input-group-sm">
                      <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                      <div class="input-group-append">
                        <button class="btn btn-navbar" type="submit">
                          <i class="fas fa-search"></i>
                        </button>
                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
        </div> */}
      
    </>
  );
}
export default App;