'use client';

import * as React from 'react';
import { SignupWrapper } from './style';
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
  isAllConditionsTrue,
} from '@/hooks/useUtil';
import BottomButton from '@/app/_component/atom/BottomButton';
import ValidateCheck from '@/app/_component/atom/ValidateCheck';

export default function Signup(): React.JSX.Element {
  const [params, setParams] = useState<ParamsType>({
    password: '',
    password_check: '',
  });

  const [validate, setValidate] = useState<ParamsType>({
    password: { condition1: 'default', condition2: 'default' },
    password_check: { condition1: 'default' },
  });

  const router = useRouter();
  const allConditionsTrue = isAllConditionsTrue(validate);

  const onChangeValue: OnChangeValueType = (field, value, type) => {
    setParams((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    updateValidation(field, value);
  };

  const handleNextButtonClick = () => {
    if (allConditionsTrue) {
      router.push('/login/captcha');

      // @Todo secureLocalStorage 저장 로직 필요
    }
  };

  const updateValidation = (field: string, value: string) => {
    switch (field) {
      case 'password':
        const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(
          value,
        );
        const isPasswordLengthValid = value.length >= 9;
        console.log(isPasswordLengthValid);
        setValidate((prevValidate) => ({
          ...prevValidate,
          password: {
            condition1: isPasswordValid ? 'true' : 'false',
            condition2: isPasswordLengthValid ? 'true' : 'false',
          },
        }));
        break;
      case 'password_check':
        const isPasswordMatched = value === params.password;
        setValidate((prevValidate) => ({
          ...prevValidate,
          password_check: {
            condition1: isPasswordMatched ? 'true' : 'false',
          },
        }));
        break;
      default:
        break;
    }
  };

  return (
    <SignupWrapper>
      <BackHeader title={'아이디/비밀번호 찾기'} url={''} />
      <div className="top">
        비밀번호를 변경하면 <br />
        아이디를 자동을 조회할 수 있어요
      </div>
      <div className="container">
        <div className="item">
          <InputForm
            placeholder="영문, 숫자, 특수문자 조합 9자 이상"
            value={params.password}
            descriptionTop={'예방접종도우미 비밀번호 변경'}
            type="text"
            variant={
              validate.password.condition1 === 'false' ||
              validate.password.condition2 === 'false'
                ? 'error'
                : 'default'
            }
            onChange={(e) => {
              onChangeValue('password', e.target.value);
            }}
          />
          <div className="wrap">
            <ValidateCheck
              label={'영문, 숫자, 특수문자(!@#$%^&*) 포함'}
              status={validate.password.condition1}
            />
            <ValidateCheck
              label={'9자 이상'}
              status={validate.password.condition2}
            />
          </div>
        </div>
        <div className="item">
          <InputForm
            placeholder="비밀번호를 다시 입력해 주세요"
            value={params.password_check}
            descriptionTop={'비밀번호 확인'}
            type="text"
            variant={
              validate.password_check.condition1 === 'false'
                ? 'error'
                : 'default'
            }
            onChange={(e) => {
              onChangeValue('password_check', e.target.value);
            }}
          />
          <ValidateCheck
            label={'비밀번호 일치'}
            status={validate.password_check.condition1}
          />
        </div>
      </div>

      <BottomButton
        filled={allConditionsTrue}
        handleNextButtonClick={handleNextButtonClick}
      />
    </SignupWrapper>
  );
}