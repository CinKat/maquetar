import { Card } from './components/card/card';
import { LayoutCard } from './components/layout/layout-card';
import { OpinionCard } from './components/opinion-card/opinion-card';
import { Title } from './components/title/title';

const data = [
  {
      "url": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "name": "Futbol",
      "title": "Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier"
  },
  {
      "url": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "name": "Futbol",
      "title": "Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier"
  },
  {
      "url": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "name": "Futbol",
      "title": "Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier"
  }
]

const dataOpinion = [
    {
        "url": "https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw=",
        "name": "Joan Josep Pallás",
        "title": "El Barca y una mancha inexplicable"
    },
    {
        "url": "https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw=",
        "name": "Joan Josep Pallás",
        "title": "El Barca y una mancha inexplicable"
    },
    {
        "url": "https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw=",
        "name": "Joan Josep Pallás",
        "title": "El Barca y una mancha inexplicable"
    }
]

const classes = {
  title: 'main__title',
  content: 'main__content',
  opinion: 'main__title main__title--opinion',
}

function App() {
  return (
    <main className={classes.content}>
        <section>
            <Title >Más Deporte</Title>
            <LayoutCard>
                {data.map((article) => <Card article={article}/>)}
            </LayoutCard>
        </section>
        <section>
            <Title type='opinion'>Opinión</Title>
            <LayoutCard>
                {dataOpinion.map((article) => <OpinionCard article={article}/>)}
            </LayoutCard>
        </section>
    </main>
  );
}

export default App;
