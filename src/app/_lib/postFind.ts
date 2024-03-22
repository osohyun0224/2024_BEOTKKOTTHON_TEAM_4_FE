import { apiUrl } from '@/hooks/api';
import { mapTelecom, parseIdentity } from '@/hooks/useUtil';

export async function postFind(userData) {
  const { userName, identity_first, identity_last, telecom, phoneNumber } =
    userData;

  const update_identity = parseIdentity(identity_first);
  const mappedTelecom = mapTelecom(telecom);

  const api_params = JSON.stringify({
    userName: userName,
    identity: update_identity.date + identity_last,
    telecom: mappedTelecom,
    phoneNumber: phoneNumber,
  });

  console.log(api_params);

  // const accessToken = localStorage.getItem('accessToken');
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0N2FmZmJkOC1hNDY1LTQyNjUtYjE3My1kZDk2YWM2MjNhYWQiLCJpYXQiOjE3MTExMTY0NTEsInJvbGUiOiJST0xFX1VTRVIiLCJleHAiOjE3MTExMjU0NTF9.0IQrGF-jrlfgTZGLOSGtpRVX5JRwVsI73LN6WJTE9fo';
  try {
    const res = await fetch(`${apiUrl}/reset-password`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: api_params,
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseData = await res.json();

    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}
