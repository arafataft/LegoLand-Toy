import  { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';

const ByCategory = () => {
  const [selectedTab, setSelectedTab] = useState('Math Toys');

  const handleTabClick = (category) => {
    setSelectedTab(category);
  };

  return (
    <div>
      <Tab.Container activeKey={selectedTab}>
        <Nav variant="tabs" onSelect={handleTabClick}>
          <Nav.Item>
            <Nav.Link eventKey="Math Toys">Math Toys</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Language Toys">Language Toys</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Engineering Toys">Engineering Toys</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="Math Toys">
            {/* Render toys for Math Toys category */}
          </Tab.Pane>
          <Tab.Pane eventKey="Language Toys">
            {/* Render toys for Language Toys category */}
          </Tab.Pane>
          <Tab.Pane eventKey="Engineering Toys">
            {/* Render toys for Engineering Toys category */}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ByCategory;
