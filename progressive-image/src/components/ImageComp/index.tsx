import React, {memo} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
  src: string;
  alt?: string;
  isProgressive?: boolean;
}

const ImageComp: React.FC<Props> = ({
  src,
  alt = '이미지',
  isProgressive
}) => {
  return (
    <div>
      {isProgressive ? (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect="blur"
          width={800}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          style={{width: '800px'}}
        />
      )}
    </div>
  );
};

ImageComp.displayName = 'ImageComp';

export default memo(ImageComp);
