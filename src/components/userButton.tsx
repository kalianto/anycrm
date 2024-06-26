'use client';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarProps, Button, Dropdown } from 'rsuite';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function UserButton() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const userImage: string =
    session?.user?.image ||
    'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp';

  const userAvatar = () => {
    return <Avatar circle src={userImage} alt={session?.user?.name || ''} />;
  };

  return (
    <div className='user-button'>
      <Dropdown
        trigger={['click', 'hover']}
        placement='bottomEnd'
        renderToggle={userAvatar}
      >
        <Dropdown.Item panel style={{ padding: '15px 20px', width: 160 }}>
          <div className=''>
            <p>Signed in as</p>
            <strong>{session?.user?.name}</strong>
          </div>
        </Dropdown.Item>
        <Dropdown.Item icon={<FaUser />}>
          <Link href='/profile'>
            <span className='title'>Profile</span>
          </Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
