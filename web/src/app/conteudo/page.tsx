import { Suspense } from 'react';
import ContainerScreen from './container-screen';

export default function ContentPage() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <ContainerScreen />
    </Suspense>
  );
}
