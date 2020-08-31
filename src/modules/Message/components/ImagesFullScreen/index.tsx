import React from 'react';
import classNames from 'classnames';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './index.scss';

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
      thumbnailClass : "TestClass"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
      thumbnailClass : "TestClass"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
      thumbnailClass : "TestClass"
    }
  ];

type TImagesFullScreen = {

}

export const ImagesFullScreen = ({}: TImagesFullScreen) => {
    const classes = classNames([
        'images-full-screen'
    ]);

    return (
        <div className={classes}>
            <ImageGallery
            infinite={false}
            showIndex
            lazyLoad
            thumbnailPosition="top"
            showFullscreenButton={false}
            showPlayButton={false}
            items={images}
        />
        </div>
    )
}
