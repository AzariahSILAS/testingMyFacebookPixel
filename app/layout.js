import { FacebookPixel } from "./components";
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
