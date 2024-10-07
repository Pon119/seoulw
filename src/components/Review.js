import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // FaStar를 사용하기 위한 import 추가
import reviewStyle from "@/styles/review.module.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Review() {
  // 별점 값
  const [value, setValue] = React.useState(1); // 리뷰 별점 부분

  // 별점 클릭 핸들러

  return (
    <>
      <div className={reviewStyle.review}>
        {/* // 나중에 {n}값으로 처리 */}
        <p>댓글 160개</p>
        <div className={reviewStyle.input}>
          <input type="text" placeholder="후기를 입력해 주세요."></input>
          <button onClick={() => console.log("리뷰 제출:", reviewText)}>
            입력
          </button>
        </div>
        {/* 리뷰 별점 작성 */}
        <div className={reviewStyle.starbox}>
          {/* star가 별점 주는 구간 */}
          <div className={reviewStyle.star}>
            <Box sx={{ "& > legend": { mt: -1 } }}>
              <Typography component="legend">별점을 선택해 주세요.</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <hr />
            <textarea
              defaultValue={`스토리 보고 갔다가 배우에 반했어요!!! 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게 간지 모르게 즐겁게 봤습니다. 진짜 대박이에요! 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게 간지 모르게 즐겁게 봤습니다. 진짜 대박이에요! 냉전과 스파이에 끌려서 삼만년 만에 보러 갔는데 진짜 대박 냉전과 스파이에 끌려서 삼만년 만에 보러 간 뮤지컬이었는데 와우 스토리가 진짜 탄탄하네 시간이 어떻게`}
            />
          </div>
          <div className={reviewStyle.text}>
            <p>텍스트 길이/280</p> {/* 현재 텍스트 길이 표시 */}
            <button onClick={() => setReviewText("")}>취소</button>
            <button onClick={() => setReviewText("")}>완료</button>
          </div>
        </div>
      </div>

      <button>리뷰 20개 더 보기</button>
    </>
  );
}

export default Review;
