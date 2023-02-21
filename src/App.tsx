import { Card } from './components/card/card';
import { OpinionCard } from './components/opinion-card/opinion-card';

const classes = {
  title: 'main__title',
  content: 'main__content',
  opinion: 'main__title main__title--opinion',
}

function App() {
  return (
    <main className={classes.content}>
      <section>
        <h1 className={classes.title}>Más Deporte</h1>
        <Card/>
      </section>
      <section>
        <h1 className={classes.opinion}>Opinión</h1>
        <OpinionCard/>
      </section>
    </main>
  );
}

export default App;
