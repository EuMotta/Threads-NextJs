
import '../styles/globals.css';
import Footer from './Footer';
import Navbar from './Navbar';
export const metadata = {
  title: 'ThreadWorld',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className='primary-color'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
