import { DM_Sans } from 'next/font/google'
import ChakraWrapper from "../components/Chakra";

const dsSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={dsSans.className}>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
