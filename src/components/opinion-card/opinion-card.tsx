import React from 'react';
import { Article } from '../../interface/interface';

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

export const OpinionCard: React.FC<Props> = ({article} , props) => {
    return (
        <div className={classes.content}>
            <article className={classes.articleBg}>
                <img className={classes.img} src={article.url}/>
                <h1 className={classes.name}>{article.name}</h1>
                <h2 className={classes.title}>{article.title}</h2>
            </article>
        </div>
    )
}