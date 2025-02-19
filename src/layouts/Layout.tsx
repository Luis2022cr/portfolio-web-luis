import { Outlet } from 'react-router-dom';

export default function Layout(){
 
  return (
    <div className="flex flex-col min-h-[100dvh] bg-cyan-100 dark:bg-cyan-900">
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
