import React from 'react';
import { Article } from '../../interface/interface';
import { ImageGallery } from '../imageGallery/imageGallery';

interface Props {
    article: Article,
    bg?: boolean,

}

const classes = {
    content:    'opinion-card__article',
    img:        'opinion-card__img',
    name:       'opinion-card__name',
    title:      'opinion-card__title',
    articleBg:  'opinion-card__bg'
}

export const OpinionCard: React.FC<Props> = ({article}) => {
    return (
        <div className={classes.content}>
            <article className={classes.articleBg}>
                <ImageGallery url={article.url} variant='circular'/>
                <h1 className={classes.name}>{article.name}</h1>
                <h2 className={classes.title}>{article.title}</h2>
            </article>
        </div>
    )
}