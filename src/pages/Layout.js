import { Outlet, } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { Container, Nav, Navbar } from "react-bootstrap";
import Vision from "./Vision";


const Layout = () => {
    return (
        <>
            <Navbar expand="lg" className="homeNavbar" variant="dark">
                <Container flui="lg">
                    <Navbar.Brand href="#page-top">KaDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Scrollspy className="navbar-nav" items={['section-1', 'section-2', 'section-3']} currentClassName="is-current" componentTag={"div"}>
                            <Nav.Link href="#section-1">Vision</Nav.Link>
                            <Nav.Link href="#section-2">Mates</Nav.Link>
                            <Nav.Link href="#section-3">Others</Nav.Link>
                        </Scrollspy>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <header id="page-top" className="sectionContent">
                    <div style={{ height: 500 }}>소개문</div>
                </header>
                <section id="section-1" className="sectionContent">
                    <Vision/>
                </section>
                <section id="section-2" className="sectionContent">
                    <div style={{ height: 500 }}>c</div>
                </section>
                <section id="section-3" className="sectionContent">
                    <div style={{ height: 500 }}>d</div>
                </section>
            </div>
            <Outlet />
        </>
    );
}
export default Layout