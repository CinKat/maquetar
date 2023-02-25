import React from 'react';

interface Props {
    url: string,
    variant: 'rectangular' | 'circular',
}

export const ImageGallery: React.FC<Props> = ({url, variant}) => {

    const classes = {
        image:       'image-gallery',
        imageType:   `image-gallery__${variant}`,
    }

    return (
        <div className={classes.image}>
            <img src={url} className={classes.imageType}/>
        </div>
    )
}