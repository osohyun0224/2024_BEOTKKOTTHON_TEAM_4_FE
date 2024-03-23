import React, { useState, useEffect } from 'react';
import BackRouteHeader from '@/app/_component/atom/BackRouterHeader';
import styled from '@emotion/styled';
import { Images } from '@globalStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavigationFixed from '@/app/_component/organism/navigationFixed';

const DateText = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #191F28;
  padding: 14px 20px 6px 20px;
  opacity: 1;
`;

const AlarmItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #191F28;
  padding: 14px 20px;
  opacity: 1;
`;

const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


  export default function AlertPage() {
    const [alarms, setAlarms] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const router = useRouter(); // Next.js 라우터 훅 사용

    // 뒤로가기 버튼 클릭 핸들러
    const handleBackButtonClick = () => {
      router.back(); // 라우터의 back 메서드 호출
    };
  
    // 나머지 코드...
  
  
    const renderDate = () => {
      const today = new Date();
      const date = new Date();
      const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;
    
      return (today.getDate() === date.getDate() &&
              today.getMonth() === date.getMonth() &&
              today.getFullYear() === date.getFullYear()) ? "오늘" : formattedDate;
    };
    

    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNTAwOTIxYi0zNTdlLTQ1MDctODBhNC1lOWU2NDQyOGM5NTciLCJpYXQiOjE3MTExOTUwMzYsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MjAxOTUwMzZ9.nzcx7wNkUlo6JRAMOVkToTE1OQJh7pL6LErzyDB3r_A';
    useEffect(() => {
      fetch('https://api-dev.vacgom.co.kr/api/v1/notifications/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAlarms(data); 
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
    }, []);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
       <BackRouteHeader title="알람" onBack={handleBackButtonClick} />
        <DateText>{renderDate()}</DateText>
        <AlarmList>
          {alarms.map((alarm, index) => (
            <AlarmItem key={index}>
              <Image src={Images.ico_alert_vaccine} alt="Alert Icon" width={20} height={20} />
              <div>{alarm.content}</div>
            </AlarmItem>
          ))}
        </AlarmList>
        <NavigationFixed />
      </div>
    );
  }