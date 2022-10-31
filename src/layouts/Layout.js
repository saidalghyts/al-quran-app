import Navbar from '../components/Navbar';
import Wrp from '../components/Wrp';

export default function Layout({ children }) {
  return (
    <>
      <Wrp />
      <Navbar />
      <div className="max-w-8xl mx-auto px-8">
        <div className="tup">{children}</div>
      </div>
    </>
  );
}
