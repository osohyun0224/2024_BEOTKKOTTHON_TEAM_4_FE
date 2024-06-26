'use client';
import * as React from 'react';
import { HomeWrap } from './style';
import Image from 'next/image';
import { Colors, Icons, Images } from '@globalStyles';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LocalStorage } from '@/hooks/useUtil';

export default function Loading(): React.JSX.Element {
  const router = useRouter();

  useEffect(() => {
    LocalStorage.setItem('password', params.password);
    try {
      LocalStorage.setItem('type', 'loginEnd');
      router.push(`/signup/done`);
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  }, []);

  return (
    <HomeWrap>
      <div className="main">
        <div className="title">
          <Image src={Images.vacgom} alt={'백곰'} />
          <div className="sub_title">백신아, 곰아워!</div>
        </div>
      </div>
      <div className="splash_image">
        <Image
          className={'vacgom_icon'}
          src={Images.vacgom01}
          alt={'백곰 스플래시 이미지'}
        />
      </div>
    </HomeWrap>
  );
}
