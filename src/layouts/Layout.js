import Navbar from '../components/Navbar';
import ToTop from '../components/ToTop';
import Wrp from '../components/Wrp';

export default function Layout({ children }) {
  return (
    <>
      <Wrp />
      <Navbar />
      {children}
      <ToTop />
    </>
  );
}
