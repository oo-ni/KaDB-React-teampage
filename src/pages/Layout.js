import { Outlet, } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./Home";
import Vision from "./Vision";
import Team from "./Team";
import Contact from "./Contact";

const Layout = () => {
    return (
        <>
            <Navbar expand="lg" className="homeNavbar" variant="light">
                <Container flui="lg">
                    <Navbar.Brand href="#page-top">KaDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Scrollspy className="navbar-nav" items={['section-1', 'section-2', 'section-3']} currentClassName="is-current" componentTag={"div"}>
                            <Nav.Link href="#section-1">Vision</Nav.Link>
                            <Nav.Link href="#section-2">Others</Nav.Link>
                            <Nav.Link href="#section-3">Mates</Nav.Link>
                        </Scrollspy>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <header id="page-top" className="sectionContent bg-warning">
                    <Home />
                </header>
                <section id="section-1" className="sectionContent">
                    <Vision />
                </section>
                <section id="section-2" className="sectionContent">
                    <Contact />
                </section>
                <section id="section-3" className="sectionContent">
                    <Team />
                </section>
            </div>
            <footer class="bg-warning text-center text-white">
                <div class="container">
                </div>
                <div class="text-center p-4">
                    <h5>© 2023 Copyright: KaDB</h5>
                    <a>Kakao Developer Buddies</a>
                </div>
            </footer>
            <Outlet />
        </>
    );
}
export default Layout