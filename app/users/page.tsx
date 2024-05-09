import PageHeading from '@/components/PageHeading';
import PeopleView from './view';

// function mockUsers(length: number): MockUsers[] {
//   const createRowData = (rowIndex: number): MockUsers => {
//     const firstName = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const gender = faker.person.sex() as SexType;
//     const name = faker.person.fullName({ firstName, lastName, sex: gender });
//     const avatar = faker.image.avatar();

//     const city = faker.location.city();
//     const street = faker.location.street();
//     const email = faker.internet.email();
//     const postcode = faker.location.zipCode();
//     const phone = faker.phone.number();
//     const amount = faker.finance.amount({ min: 1000, max: 90000 });
//     const company = faker.company.name();

//     const age = Math.floor(Math.random() * 30) + 18;
//     const stars = Math.floor(Math.random() * 10000);
//     const followers = Math.floor(Math.random() * 10000);
//     const rating = 2 + Math.floor(Math.random() * 3);
//     const progress = Math.floor(Math.random() * 100);
//     const status = Math.floor(Math.random() * 30) % 2 ? 'inactive' : 'active';

//     return {
//       id: rowIndex + 1,
//       name,
//       firstName,
//       lastName,
//       avatar,
//       city,
//       street,
//       postcode,
//       email,
//       phone,
//       gender,
//       age,
//       stars,
//       followers,
//       rating,
//       progress,
//       amount,
//       company,
//       status,
//     };
//   };

//   return Array.from({ length }).map((_, index) => {
//     return createRowData(index);
//   });
// }

export default function PeoplePage() {
  return (
    <>
      <div className='container mx-auto'>
        <PageHeading>People Page</PageHeading>
        <PeopleView />
      </div>
    </>
  );
}
