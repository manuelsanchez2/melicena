import React from 'react';

import styles from './Banner.module.scss';

import NextImage from '@/components/NextImage';

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  messageFirst: string;
  messageSecond?: string;
  isLinkAndroid?: boolean;
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <div className={`${styles['banner-wrapper']}`}>
      <div className={`${styles['banner-inner']} layout`}>
        <div className={styles['banner-text']}>
          <h1>{props.title}</h1>
          <p>{props.messageFirst}</p>
          <p>{props.messageSecond}</p>
          {props.isLinkAndroid && (
            <a href='https://play.google.com/store/apps/details?id=com.manusanchez.melicena'>
              <NextImage
                priority
                useSkeleton
                src='/images/badge-google-play.svg'
                alt='Google Play'
                width='160'
                height='80'
              />
            </a>
          )}
        </div>
        <div className={styles['banner-image']}>
          <NextImage
            priority
            useSkeleton
            src='/images/melicena-app.svg'
            alt='Melicena App'
            width='700'
            height='400'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
