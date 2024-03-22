'use client';

import * as React from 'react';
import { HelperLoginWrapper } from './style';
import { css } from '@emotion/react';

import { Colors, Icons, Images } from '@/styles';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BackHeader from '@/app/_component/molecule/BackHeader';
import InputForm from '@/app/_component/atom/InputForm';
import FilterModal from '@/app/_component/organism/filterModal';
import { agencyRanges, ageRanges, situationRanges } from '@/constants';
import { OnChangeValueType, ParamsType } from '@/types/globalType';
import {
  parseIdentity,
  filterNumericInput,
  checkParamsFilled,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import Link from 'next/link';

export default function HelperLogin(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    id: '',
    password: '',
  });
  const router = useRouter();
  console.log(params);
  const onChangeValue: OnChangeValueType = (field, value) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleNextButtonClick = () => {
    if (checkParamsFilled(params)) {
      router.push(`/signup/more?type=loginDone}`);
      // @Todo 여기에 api 호출
    }
  };

  return (
    <HelperLoginWrapper>
      <BackHeader title={'예방접종도우미 로그인'} url={'/signup/terms'} />
      <div className="top">정보를 입력해 주세요</div>
      <div className="container">
        <div className="item">
          <InputForm
            placeholder="아이디를 입력해 주세요"
            value={params.id}
            descriptionTop={'예방접종도우미 아이디'}
            type="text"
            onChange={(e) => {
              onChangeValue('id', e.target.value);
            }}
          />
        </div>
        <div className="item">
          <InputForm
            placeholder="비밀번호를 입력해 주세요"
            value={params.password}
            descriptionTop={'예방접종도우미 비밀번호'}
            rightIcon={Icons.eyeSlash}
            type="password"
            customStyle={css`
              & > .input__content > .input__content--right__icon > img {
                width: 20px;
                height: 20px;
              }
            `}
            onChange={(e) => {
              onChangeValue('password', e.target.value);
            }}
          />
        </div>
        <Link href={'/login/find'} className={'password'}>
          아이디/비밀번호 찾기
        </Link>
      </div>

      <BottomButton
        filled={checkParamsFilled(params)}
        handleNextButtonClick={handleNextButtonClick}
      />
    </HelperLoginWrapper>
  );
}