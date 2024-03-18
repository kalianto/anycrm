'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Sidebar, Sidenav, Nav } from 'rsuite';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import UserIcon from '@rsuite/icons/legacy/User';

export default function AppSideNav() {
  const [active, setActive] = useState('/');
  const { data: session } = useSession();

  return (
    <nav>
      <div className='nav-body'>
        <div className='nav-header'>
          <div className='nav-header-body'>
            <h2>AnyCRM</h2>
            {/* <div className='nav-subtitle'>Anything Goes</div> */}
          </div>
        </div>
        <div className='nav-menu'>
          <Nav
            vertical
            activeKey={active}
            onSelect={setActive}
            className='nav-menu-item'
          >
            <Nav.Item eventKey='home' href='/' icon={<DashboardIcon />}>
              Home
            </Nav.Item>
            <Nav.Item eventKey='news' href='/people' icon={<UserIcon />}>
              People
            </Nav.Item>
            <Nav.Item eventKey='solutions' href='/groups' icon={<GroupIcon />}>
              Groups
            </Nav.Item>
            <Nav.Item
              eventKey='settings'
              href='/settings'
              icon={<GearCircleIcon />}
            >
              Settings
            </Nav.Item>
            <Nav.Item
              eventKey='materials'
              href='/materials'
              icon={<MagicIcon />}
            >
              Materials
            </Nav.Item>
          </Nav>
        </div>
        {/* <div className='nav-footer'>
          <div className='nav-footer-body'>
            <SignOut />
          </div>
        </div> */}
      </div>
    </nav>
  );
}
