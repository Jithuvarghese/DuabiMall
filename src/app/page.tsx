import { DeckShell } from '../components/shell/DeckShell';
import { Navigation } from '../components/shell/Navigation';
import { ProgressBar } from '../components/shell/ProgressBar';
import { ModuleRenderer } from '../components/modules/ModuleRenderer';
import { Footer } from '../components/shell/Footer';

export default function Page() {
  return (
    <>
      <ProgressBar />
      <Navigation />
      <DeckShell />
      <ModuleRenderer />
      <Footer />
    </>
  );
}
