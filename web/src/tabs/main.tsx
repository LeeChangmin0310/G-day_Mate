// Main.js
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.tsx";
import BottomInfo from "../components/bottomInfo.tsx";

export default function Main() {
  return (
    <div>
      <style>{`
        .cta-button {
          padding: 15px 35px;
          margin: 50px auto;
          font-family: Pretendard-SemiBold;
          font-size: 15px;
          color: #fff;
          background-color: #608BC1;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display:block;
        }
        .cta-button:hover {
          background-color: #005bb5;
        }

        .feature {
          text-align: left;
          max-width: 300px;
        }

        .feature h3 {
        font-family: Pretendard-SemiBold;
          font-size: 1.2rem;
          color: #333;
        }

        .feature p {
          font-family: Pretendard-Regular;
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>

      <Nav />

      <div className="home">
        <div
          style={{
            position: "relative",
            backgroundColor: "#f9f5ef",
            borderBottomLeftRadius: "150px",
            borderBottomRightRadius: "150px",
          }}
        >
          <img
            src="../img/main_logo.png"
            style={{ width: "800px", marginTop: "100px" }}
          />
          <div style={{ width: "100%", paddingBottom: "180px" }}>
            <button
              className="cta-button"
              onClick={() => (window.location = "/upload")}
            >
              시작하러 가기
            </button>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "-150px", // 위 div와 겹치는 부분 조정
            zIndex: 1, // 뒤로 배치
          }}
        >
          <img src="../img/main_img.png" style={{ width: "950px" }} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            padding: "40px 10px 100px",
          }}
        >
          <div className="feature">
            <h3>* 불필요한 주관적 요소 배제</h3>
            <p>감정적인 동료 평가를 배제한 평가 가능</p>
          </div>
          <div className="feature">
            <h3>* 정량적 데이터 사용</h3>
            <p>
              개인의 주관적 판단이 아닌 대화량, 대화 빈도,
              <br />
              응답 시간 등의 정량적 데이터로 평가
            </p>
          </div>
          <div className="feature">
            <h3>* 보조지표</h3>
            <p>
              기존 시스템과 함께 사용함으로써 더욱 신뢰할
              <br />수 있는 동료 평가 결과
            </p>
          </div>
        </div>
      </div>
      <BottomInfo />
    </div>
  );
}
