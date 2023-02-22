import React from 'react';
import { Article } from '../../interface/interface';

interface Props {
    article: Article,
    bg?: boolean,

}

const classes = {
    article:    'card__article',
    articleBg:  'card__article card__article--bg',
    img:        'card__img',
    category:   'card__name-category',
    title:      'card__title',
}

export const Card: React.FC<Props> = ({article} , props) => {
    return (
        <article className={props.bg ? classes.articleBg : classes.article}>
            <img className={classes.img} src={article.url}/>
            <h1 className={classes.category}>{article.name}</h1>
            <h2 className={classes.title}>{article.title}</h2>
        </article>
    )
}