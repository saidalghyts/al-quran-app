import ToTop from '../components/ToTop';
import Navbar from '../components/layouts/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <ToTop />
    </>
  );
}
