// Next.js 14 App Router 방식 (Edge API Route가 아님)

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { code } = await req.json()

  const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID!
  const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI!

  try {
    // 1. 인가 코드로 access token 요청
    const tokenRes = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: KAKAO_REDIRECT_URI,
        code,
      }),
    })

    const tokenData = await tokenRes.json()

    if (tokenData.error) {
      return NextResponse.json(
        { error: tokenData.error_description },
        { status: 400 }
      )
    }

    // 2. 사용자 정보 요청
    const userRes = await fetch('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    const userData = await userRes.json()

    // 원하는 사용자 정보 추출
    const user = {
      id: userData.id,
      nickname: userData.properties?.nickname,
      email: userData.kakao_account?.email,
    }

    return NextResponse.json({ user })
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
