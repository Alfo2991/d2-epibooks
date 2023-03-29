import Nav from 'react-bootstrap/Nav';

function MyNav() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Browse</Nav.Link>
        </Nav.Item>
        
      </Nav>
</>
  );
}

export default MyNav;