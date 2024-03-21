'use client';

import * as React from 'react';
import { VerificationWrap } from './style';
import Image from 'next/image';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@globalStyles';
import { Fragment, useEffect, useState } from 'react';
import VerificationInput from '../../_component/atom/verificationInput';
import BackHeader from '@/app/_component/molecule/BackHeader';
import BottomButton from '@/app/_component/atom/BottomButton';
import { useRouter } from 'next/navigation';

export default function Verification(): React.JSX.Element {
  const [password, setPassword] = useState('');
  const [filled, setFilled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (password.length >= 6) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [password]);

  console.log(filled);
  const handleNextButtonClick = () => {
    if (filled) {
      router.push('/signup/done');
      // @Todo 여기에 api 호출
    }
  };
  return (
    <VerificationWrap>
      <BackHeader title={'본인인증'} url={'/signup'} />
      <div className="top">
        문자로 전송받은 <br />
        인증번호 6자리를 입력해 주세요.
        <div className="time_count">남은 시간</div>
      </div>
      <div className="wrap">
        <VerificationInput
          inputLength={6}
          password={password}
          setPassword={setPassword}
        />
        <a className="not">문자가 오지 않아요</a>
      </div>
      <BottomButton
        filled={filled}
        handleNextButtonClick={handleNextButtonClick}
      />
    </VerificationWrap>
  );
}
