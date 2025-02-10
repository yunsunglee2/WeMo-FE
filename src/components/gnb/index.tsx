import { PropsWithChildren } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import GNBHeader from '@/components/gnb/header';
import GNBFooter from '@/components/gnb/footer';
import useAuth from '@/hooks/useAuth';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
});

function GNB({ children }: PropsWithChildren) {
  useAuth();
  return (
    <main className={noto.className}>
      <GNBHeader />
      {children}
      <GNBFooter />
    </main>
  );
}

export default GNB;
