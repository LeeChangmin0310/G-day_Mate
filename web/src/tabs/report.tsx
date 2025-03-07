// Main.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.tsx";
import BottomInfo from "../components/bottomInfo.tsx";

export default function Report() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  // 5초 후 로딩 상태를 false로 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  if (isLoading) {
    // 로딩 화면
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#f9f5ef",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid rgba(0, 0, 0, 0.2)",
              borderTop: "5px solid black",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <p style={{ fontFamily: "Pretendard-Bold", marginTop: "20px" }}>
            로딩 중입니다...
          </p>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style>{`
        .cta-button {
          padding: 10px 30px;
          margin: 40px auto;
          font-family: Pretendard-SemiBold;
          font-size: 20px;
          color: #000;
          background-color: #fff;
          border: 2px solid black;
          border-radius: 10px;
          cursor: pointer;
        }
        .cta-button:hover {

        .feature {
          text-align: left;
          max-width: 200px;
        }

        .feature h3 {
          font-size: 1.2rem;
          color: #333;
        }

        .feature p {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
      <Nav />
      <div style={{ backgroundColor: "#f9f5ef", padding: "100px 0" }}>
        <div
          style={{
            fontFamily: "Pretendard-Bold",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Report
        </div>
        <div
          style={{
            width: "1100px",
            backgroundColor: "#fff",
            padding: "30px 10px 50px",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src="../img/graph1.png" style={{ width: "1000px" }} />
        </div>
      </div>
      <BottomInfo />
    </div>
  );
}
