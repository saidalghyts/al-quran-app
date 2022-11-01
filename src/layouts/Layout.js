import Navbar from '../components/Navbar';
import Wrp from '../components/Wrp';

export default function Layout({ children }) {
  return (
    <>
      <Wrp />
      <Navbar />
      {children}
    </>
  );
}
