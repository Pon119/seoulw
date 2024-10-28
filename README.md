![seoulw_logo](https://github.com/user-attachments/assets/345224b4-4917-4c46-84f2-7eec5f876b4a)

## 🌱소개
서울 문화 공연 정보 PWA 사이트입니다.


## 🔗배포 URL
<https://seoulw.vercel.app/>


## 📑 개요
1. **주제**
   - 서울 문화 공연 정보 제공 모바일 사이트
     
2. **핵심 기능**
   - KOPIS 오픈 API 활용 
   - 로그인 (자체, sns) 
   - 리뷰 작성 및 북마크 등록/삭제
     
3. **개발 환경**
   - Next.js
   - DB : firebase
     
4. **기간**
   - 2024.09.30 ~ 2024.10.17 (18일)
     
5. **담당**
  
   | 이름   | GitHub                              | 담당              |
   |--------|---------------------------------------|-------------------|
   | 고유나 | [tolix-a](https://github.com/tolix-a) | 기능개발, API     |
   | 박지연 | [pjiyeon90](https://github.com/pjiyeon90) | 디자인, 로그인    |
   | 성주영 | [0011git](https://github.com/0011git) | 기획              |
   | 허다영 | [Pon119](https://github.com/Pon119) | 서버관리, 배포    |


## 📚 참고 URL
- 기획서 : 
[SeoulW Google Docs](<https://docs.google.com/document/d/1Ieh-tqHfDDQsXYfCo3cP_YHhUgt8ATDOMHSVXXcL5fs/edit?tab=t.0>)
- 화면 설계 : 
[SeoulW Figma](<https://www.figma.com/design/dDn9TXA4NRfNO3gDJMFwO1/%EA%B7%B8%EB%A6%B0-2%EC%B0%A8)%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&node-type=canvas&t=uCwArR6SShR2lg8n-0>)
- ppt : 
[SeoulW Canva](https://www.canva.com/design/DAGTt3bDvUE/-n3BoRlItJUojwIII0JnqQ/edit)


## 💼 폴더 구조
    📦seoulw
     ┣ 📂.next
     ┣ 📂public
     ┃ ┣ 📂assets
     ┃ ┃ ┣ 📂icons
     ┃ ┃ ┗ 📂images
     ┃ ┣ 📜sw.js            # PWA
     ┃ ┣ 📜sw.js.map        # PWA
     ┃ ┣ 📜workbox.js       # PWA
     ┃ ┣ 📜workbox.js.map   # PWA
     ┃ ┗ 📜manifest.json    # PWA
     ┣ 📂src
     ┃ ┣ 📂components       # 컴포넌트 폴더
     ┃ ┣ 📂lib
     ┃ ┃ ┗ 📜firebase.js    # DB
     ┃ ┣ 📂pages            # 페이지 폴더
     ┃ ┃ ┣ 📂api
     ┃ ┃ ┃ ┣ 📂auth
     ┃ ┃ ┃ ┃ ┗ 📜[...nextauth].js    # 로그인 관련 (Next Auth)
     ┃ ┃ ┃ ┣ 📜api.js       # KOPIS API
     ┃ ┃ ┃ ┗ 📜mapapi.js    # 카카오맵 API
     ┃ ┣ 📂store            # zustand 전역 상태 관리
     ┃ ┣ 📂styles           # scss
     ┃ ┗ 📂utils            # api 함수, xmlToJson변환 함수 등 공통 함수 폴더
     ┣ 📜.env
     ┗ 📜README.md


## 📱 스크린샷
![m1](https://github.com/user-attachments/assets/956cce3e-b1eb-40bf-b9de-ecd4c20f1bc5)
![m2](https://github.com/user-attachments/assets/8bc107b8-8a12-4606-859b-872b2938e101)
-----
![category1](https://github.com/user-attachments/assets/9f1efe2e-6033-42cb-acc2-154511850a27)
![d1](https://github.com/user-attachments/assets/191fc9ff-c65e-404c-9e9b-480b175aa100)
-----
![d2](https://github.com/user-attachments/assets/46e95e9a-3566-46ce-9f4b-0f5d01d198e3)
![d3](https://github.com/user-attachments/assets/462de894-6190-4622-834f-7824fe3dc2b9)
-----
![search1](https://github.com/user-attachments/assets/f0c0d637-ee2b-407d-92a2-364f4ccb0e8a)
![search2](https://github.com/user-attachments/assets/50069559-da9f-4a45-866b-eb94f241b379)
-----
![login1](https://github.com/user-attachments/assets/588463a2-8645-4871-a2af-d030eed1421a)
![login2](https://github.com/user-attachments/assets/68dfd6fc-ebea-4ed3-9c9d-5b073b7a9954)


## 🙋‍♀️ 개발 상세
- [고유나](https://github.com/tolix-a/next-seoulw) ([tolix-a](https://github.com/tolix-a))

- [박지연](개인 레포지토리 링크) ([pjiyeon90](https://github.com/pjiyeon90))

- [성주영](개인 레포지토리 링크) ([0011git](https://github.com/0011git))

- [허다영](https://github.com/Pon119/seoulw-dy) ([Pon119](https://github.com/Pon119))
