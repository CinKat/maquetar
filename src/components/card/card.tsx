import React from 'react';

const classes = {
    section: 'card__section',
    content: 'card__content',
    img:     'card__img',
    category: 'card__name-category',
    title: 'card__title',
}

export const Card = () => {
    return (
        <section className={classes.section}>
            <div className={classes.content}>
                <img className={classes.img} src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                <h3 className={classes.category}>Futbol</h3>
                <h1 className={classes.title}>Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier</h1>
            </div>
            <div className={classes.content}>
                <img className={classes.img} src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                <h3 className={classes.category}>Futbol</h3>
                <h1 className={classes.title}>Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier</h1>
            </div>
            <div className={classes.content}>
                <img className={classes.img} src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                <h3 className={classes.category}>Futbol</h3>
                <h1 className={classes.title}>Javi Garcia ficha por el Leeds y ya son seis los entrenadores españoles en la Premier</h1>
            </div>
        </section>
    )
}