'use client';
import { useState, useEffect, SetStateAction } from 'react';
import { useSession } from 'next-auth/react';
import {
  Table,
  Popover,
  Whisper,
  Checkbox,
  Dropdown,
  IconButton,
  Progress,
  Pagination,
  Loader,
} from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import { faker } from '@faker-js/faker/locale/en';
import { SexType } from '@faker-js/faker';

type MockUsers = {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  avatar: string;
  city: string;
  street: string;
  postcode: string;
  email: string;
  phone: string;
  gender: string;
  age: number;
  stars: number;
  followers: number;
  rating: number;
  progress: number;
  amount: string;
  company: string;
};

function mockUsers(length: number): MockUsers[] {
  const createRowData = (rowIndex: number): MockUsers => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const gender = faker.person.sex() as SexType;
    const name = faker.person.fullName({ firstName, lastName, sex: gender });
    const avatar = faker.image.avatar();

    const city = faker.location.city();
    const street = faker.location.street();
    const email = faker.internet.email();
    const postcode = faker.location.zipCode();
    const phone = faker.phone.number();
    const amount = faker.finance.amount({ min: 1000, max: 90000 });
    const company = faker.company.name();

    const age = Math.floor(Math.random() * 30) + 18;
    const stars = Math.floor(Math.random() * 10000);
    const followers = Math.floor(Math.random() * 10000);
    const rating = 2 + Math.floor(Math.random() * 3);
    const progress = Math.floor(Math.random() * 100);

    return {
      id: rowIndex + 1,
      name,
      firstName,
      lastName,
      avatar,
      city,
      street,
      postcode,
      email,
      phone,
      gender,
      age,
      stars,
      followers,
      rating,
      progress,
      amount,
      company,
    };
  };

  return Array.from({ length }).map((_, index) => {
    return createRowData(index);
  });
}

const { Column, HeaderCell, Cell } = Table;

export default function PeoplePage() {
  const limitOptions: number[] = [15, 30, 50];
  const { data: session } = useSession();
  const [limit, setLimit] = useState(limitOptions[0]);
  const [page, setPage] = useState(1);
  const [defaultData, setDefaultData] = useState<MockUsers[]>([]);

  const [checkedKeys, setCheckedKeys] = useState([]);

  let checked = false;
  let indeterminate = false;

  const handleCheckAll = (_, checked: boolean) => {
    const keys = checked ? data.map((item) => item.id) : [];
    setCheckedKeys(keys);
  };

  useEffect(() => {
    setDefaultData(mockUsers(150));
  }, []);

  const handleChangeLimit = (dataKey: SetStateAction<number>) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div className='main'>
      <Table
        data={data}
        loading={data.length === 0}
        autoHeight
        affixHeader
        affixHorizontalScrollbar
      >
        <Column width={50} align='center' fixed>
          <HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: '40px' }}>
              <Checkbox
                inline
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
            </div>
          </HeaderCell>
          <Cell style={{ padding: 0 }}>
            <div style={{ lineHeight: '46px' }}>
              <Checkbox inline checked={checked} onChange={handleCheckAll} />
            </div>
          </Cell>
        </Column>
        <Column width={50} align='center' fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey='id' />
        </Column>

        <Column width={100} fixed>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey='firstName' />
        </Column>

        <Column width={100}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey='lastName' />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey='city' />
        </Column>
        <Column width={200} flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey='email' />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size='xs'
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={defaultData.length}
          limitOptions={limitOptions}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
}
