import Navbar from '../components/Navbar';
import ToTop from '../components/ToTop';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <ToTop />
    </>
  );
}
