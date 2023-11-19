import { Providers } from './providers';

export const metadata = {
  title: 'Play with ELO',
  description: 'Create a league on Play with ELO and outplay your friends!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head>

      <body style={{ height: '100vh' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}