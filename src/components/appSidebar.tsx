'use client';
import { useState } from 'react';
import { Sidebar, Sidenav, Nav } from 'rsuite';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

export default function AppSidebar() {
  const [expand, setExpand] = useState(true);
  return (
    <>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <div className='sidebar-header'>
            <h2 className='title'>AnyCRM</h2>
            <span className='subtitle'>Anything Goes</span>
          </div>
        </Sidenav.Header>
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance='subtle'>
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey='1' active icon={<DashboardIcon />}>
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey='2' icon={<GroupIcon />}>
                User Group
              </Nav.Item>
              <Nav.Menu
                eventKey='3'
                trigger='hover'
                title='Advanced'
                icon={<MagicIcon />}
                placement='rightStart'
              >
                <Nav.Item eventKey='3-1'>Geo</Nav.Item>
                <Nav.Item eventKey='3-2'>Devices</Nav.Item>
                <Nav.Item eventKey='3-3'>Brand</Nav.Item>
                <Nav.Item eventKey='3-4'>Loyalty</Nav.Item>
                <Nav.Item eventKey='3-5'>Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey='4'
                trigger='hover'
                title='Settings'
                icon={<GearCircleIcon />}
                placement='rightStart'
              >
                <Nav.Item eventKey='4-1'>Applications</Nav.Item>
                <Nav.Item eventKey='4-2'>Websites</Nav.Item>
                <Nav.Item eventKey='4-3'>Channels</Nav.Item>
                <Nav.Item eventKey='4-4'>Tags</Nav.Item>
                <Nav.Item eventKey='4-5'>Versions</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
    </>
  );
}
