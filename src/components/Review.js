import React, { useState } from "react";
import reviewStyle from "@/styles/review.module.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../lib/firebase"

function Review() {
  // 더미 임시 데이터
  const reviewDummyData = [
    {
      index: 0,
      mt20id: "PF000000",
      userid: "exid000@gmail.com",
      prfnm: "국립심포니오케스트라 실내악 시리즈 Ⅱ, 정화된 밤",
      star: 10,
      review:
        "스토리 보고 갔다가 배우에 반했어요!!! 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게 간지 모르게 즐겁게 봤습니다.",
      postdate: "2024.10.07",
      poster: "/assets/images/poster_01.jpg",
    },
    {
      index: 1,
      mt20id: "PF000001",
      userid: "exid001@gmail.com",
      prfnm: "비 오는 날의 인터뷰",
      star: 2,
      review:
        "나만 기다린게 아니었구나.. 관객 모두가 미쳐버림 ㅋㅋ커튼콜때 관객들의 미친 환호에 배우들의 놀라면서 행복해 하는 모습 +뒤로 관객들 구경하는 재미가 쏠쏠.",
      postdate: "2024.10.07",
      poster: "/assets/images/poster_02.jpg",
    },
  ];

  // 별점 모양 커스텀
  const StyledRating = styled(Rating)({
    "& .MuiRating-icon": {
      fontSize: "2rem",
    },
    "& .MuiRating-iconFilled": {
      color: "#FFCC00",
    },
    "& .MuiRating-iconHover": {
      color: "#FFCC00",
    },
  });

  // ▼인풋 박스 상태
  const [isInputVisible, setInputVisible] = useState(true);

  // ▼후기 280자 제한
  const maxLength = 280;
  const [reviewText, setReviewText] = useState("");
  const [starValue, setStarValue] = useState(0);

  // ▼리뷰 더미데이터 관리
  const [reviews, setReviews] = useState(reviewDummyData);
  const [moreButton, setMoreButton] = useState({}); // 각 리뷰의 "더 보기" 상태 관리
  
  const handleMoreToggle = (index) => {
    setMoreButton((prev) => ({ ...prev, [index]: !prev[index] })); // 클릭한 리뷰의 상태 토글
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setReviewText(newText);
    } else {
      alert("최대 글자수는 280자 입니다.");
    }
  };

  const handleSubmit = async () => {   
    try {
      const docRef = await addDoc(collection(db, "review"), {
        mt20id :"PF000001",
        userid :"userid",
        prfnm :"prfnm",
        star :starValue,
        review :reviewText,
        postdate : "postdate",
        poster :"poster"
      });
      console.log(docRef);
      console.log("Document written with ID: ", docRef.review);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

   
    // if (starValue > 0 && reviewText) {
    //   const newReview = {

    //     index: reviews.length,
    //     userid: "currentUser@example.com", // 현재 사용자 아이디
    //     star: starValue,
    //     review: reviewText,
    //     postdate: new Date().toLocaleDateString(),
    //   };
    //   setReviews([...reviews, newReview]);
    //   setReviewText("");
    //   setStarValue(0);
    // }
  };

  const handleInputClick = () => {
    setInputVisible(false); // 인풋 박스를 클릭하면 숨김
  };

  const loadMoreReviews = () => {
    const additionalReviews = [
      {
        index: reviews.length, // 기존 리뷰 길이에 따라 인덱스 설정
        userid: "exid002@gmail.com",
        star: 8,
        review: "정말 기대 이상이었어요!",
        postdate: "2024.10.08",
      },
      {
        index: reviews.length + 1, // 다음 인덱스
        userid: "exid003@gmail.com",
        star: 4,
        review: "다시 보고 싶어요!",
        postdate: "2024.10.08",
      },
    ];
    setReviews((prevReviews) => [...prevReviews, ...additionalReviews]);
  };

  return (
    <>
      <div className={reviewStyle.review}>
        <div className={reviewStyle.reviewinfo}>
          {isInputVisible ? (
            <div className={reviewStyle.input}>
              <p>댓글 {reviews.length}개</p>
              <div className={reviewStyle.inputtext}>
                <input
                  type="text"
                  placeholder="후기를 입력해 주세요."
                  onClick={handleInputClick}
                />
                <button onClick={handleSubmit}>입력</button>
              </div>
            </div>
          ) : (
            // 인풋 박스 클릭 시 활성화 되는 창 -> 리뷰 별점 작성
            <div className={reviewStyle.rating}>
              <div className={reviewStyle.star}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography
                    component="legend"
                    sx={{ fontSize: "0.8rem", margin: 0 }}
                  >
                    별점을 선택해 주세요.
                  </Typography>
                  <StyledRating
                    value={starValue}
                    onChange={(event, newValue) => setStarValue(newValue)}
                  />
                </Box>
                <hr />
                <textarea
                  value={reviewText}
                  onChange={handleChange}
                  rows={5}
                  style={{ resize: "none", overflow: "hidden" }}
                />
              </div>
              <div className={reviewStyle.text}>
                <p>
                  {reviewText.length}/{maxLength}
                </p>
                <div className={reviewStyle.textinfo}>
                  <button onClick={() => setReviewText("")}>취소</button>
                  <button onClick={handleSubmit}>완료</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 리뷰 리스트 */}
        <div className={reviewStyle.list}>
          {reviews.map((review, index) => (
            <div key={`${review.userid}-${index}`}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <StyledRating value={review.star} readOnly />
                <Typography
                  component="span"
                  sx={{ marginLeft: 1 }}
                  className={reviewStyle.starValue}
                >
                  {review.star / 2} {/* 별점 표시 */}
                </Typography>
                <div className={reviewStyle.edit}>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              </Box>

              {/* 제목 */}
              <p
                style={{
                  backgroundColor: moreButton[index]
                    ? "#cbcbcb"
                    : "transparent",
                }}
              >
                {moreButton[index] || review.review.length <= 20
                  ? review.review
                  : `${review.review.substring(0, 20)}...`}
             </p>
              {/* 더 보기 버튼 */}
              <div className={reviewStyle.moretext}>
                <p>
                  {review.userid.slice(0, -3) + "***"} {/* 아이디 표시 */}
                </p>
                <button onClick={() => handleMoreToggle(index)}>
                  <img src="/assets/icons/arrow_more.svg" alt="더 보기" />
                </button>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <button className={reviewStyle.buttonmore} onClick={loadMoreReviews}>
          리뷰 20개 더보기
        </button>
      </div>
    </>
  );
}

export default Review;