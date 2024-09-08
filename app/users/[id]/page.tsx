export type UserPageProps = {
  params: {
    id: number;
  };
};

export default function UserPage({ params }: UserPageProps) {
  return <div>This is a user page {`${params.id}`} </div>;
}
