import React from 'react';
import { Article } from '../../interface/interface';
import { ImageGallery } from '../imageGallery/imageGallery';

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
            <ImageGallery url={article.url} variant='rectangular'/>
            <h1 className={classes.category}>{article.name}</h1>
            <h2 className={classes.title}>{article.title}</h2>
        </article>
    )
}