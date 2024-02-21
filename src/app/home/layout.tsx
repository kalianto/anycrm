import './home.css';
import AppHeader from './appHeader';
import AppSideNav from './appSideNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <AppSideNav />
      {children}
    </>
  );
}
