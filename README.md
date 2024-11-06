# 두번째 팀프로젝트 : SEOUL-W
##### KOPIS 공연예술전산망 API를 기반으로 모바일 사이트 구현

### 🌈 프로젝트 배포 링크(vercel)
###### <https://seoulw-pj.vercel.app/>

### 💡 프로젝트소개
###### <https://www.canva.com/design/DAGPlU0-6ow/jtn9ibfQwajWRzBjK4CM8g/edit?utm_content=DAGPlU0-6ow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton](https://www.canva.com/design/DAGPlU0-6ow/jtn9ibfQwajWRzBjK4CM8g/edit?utm_content=DAGPlU0-6ow&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton>

KOPIS 공연예술전산망 API에서 제공하는 서울 문화 공연을 한 곳에서 쉽게 조회할 수 있는 모바일 웹 사이트


### ⏱ 개발 기간
2024.09.27(금) - 2024.10.16(수) (약 2주)

### 👊 팀원 소개
- 박지연: 메인디자인 및 로그인 개발 
- 성주영: 전체 기획 및 메인 개발
- 고유나: API 정리 및 관리
- 허다영: 디테일 페이지 및 배포 

### ⚙ 개발 환경
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white">

### 📍 주요 기능
1) 오픈 API 활용
2) 로그인 , 회원가입(자체 회원가입, sns 간편)
3) 리뷰 기능
4) 북마크 기능
5) 검색 기능
6) 공연 타입별 카테고리화


### 🎯 트러블 슈팅
* 소셜로그인(간편로그인) 후 회원 수정 과정
> 1)소셜로 간편 로그인 후 마이페이지에 회원 수정 클릭하면 유저를 찾을 수 없습니다라는 에러 메세지 발생
>
> 2)간편 로그인으로 들어오는 유저도 firebase에 유저 정보가 없으면 자동 회원 가입시켜 DB를 쌓고 그 DB를 기반으로 회원 수정 페이지에 값을 불러올 수 있도록 수정
>
