import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './index.scss';
import { CloseOutlined, DownloadOutlined, CloudDownloadOutlined } from '@ant-design/icons';

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  }
];

export const ImagesFullScreen: React.FC = () => {

  return (
    <div className='images-full-screen'>
      <div className='images-full-screen__utils'>
        <CloudDownloadOutlined />
        <DownloadOutlined />
        <CloseOutlined />
      </div>
      <ImageGallery
        infinite={false}
        indexSeparator=" из "
        startIndex={0}
        showBullets
        thumbnailPosition="bottom"
        showFullscreenButton={false}
        showPlayButton={false}
        items={images}
      />
    </div>
  )
}
