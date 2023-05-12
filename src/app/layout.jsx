
import '../styles/globals.css';
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
        {children}
      </body>
    </html>
  );
}
