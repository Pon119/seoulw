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


## 🙋‍♀️ 개발 상세
| 이름   | Seoul,W GitHub                        |
|--------|---------------------------------------|
| 고유나 | [next-seoulw](https://github.com/tolix-a/next-seoulw) |
| 박지연 | [pjiyeon90]() |
| 성주영 | [0011git]() |
| 허다영 | [seoulw-dy](https://github.com/Pon119/seoulw-dy) |


## 📱 스크린샷
![t](https://github.com/user-attachments/assets/dd46735e-4f07-4ab9-9eb6-7377388ddaa3)


