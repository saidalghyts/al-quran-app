import Navbar from '../components/Navbar';
import Wrp from '../components/Wrp';

export default function Layout({ children, open }) {
  return (
    <>
      <Wrp />
      <Navbar open={open} />
      {children}
    </>
  );
}
