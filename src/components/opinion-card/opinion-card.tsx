import React from 'react';

const classes = {
    img: 'opinion-card__img',
    name: 'opinion-card__name',
    title: 'opinion-card__title',
    section: 'opinion-card__section'
}

export const OpinionCard = () => {
    return (
        <section className={classes.section}>
            <div>
                <img className={classes.img} src='https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw='/>
                <h3 className={classes.name}>Joan Josep Pallás</h3>
                <h1 className={classes.title}>El Barca y una mancha inexplicable</h1>
            </div>
            <div>
                <img className={classes.img} src='https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw='/>
                <h3 className={classes.name}>Joan Josep Pallás</h3>
                <h1 className={classes.title}>El Barca y una mancha inexplicable</h1>
            </div>
            <div>
                <img className={classes.img} src='https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=is&k=20&c=SFF1S8DtzxTf3a-EzfmQkNx6UVPZmEiOscShyN9S3cw='/>
                <h3 className={classes.name}>Joan Josep Pallás</h3>
                <h1 className={classes.title}>El Barca y una mancha inexplicable</h1>
            </div>
        </section>
    )
}