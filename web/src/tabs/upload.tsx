import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav.tsx";
import BottomInfo from "../components/bottomInfo.tsx";

export default function Upload() {
  const [fileName, setFileName] = useState(null); // 파일 이름을 저장할 상태

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 선택한 파일
    if (file) {
      setFileName(file.name); // 파일 이름 저장
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click(); // 숨겨진 파일 입력 클릭
  };

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
          Text File Upload
        </div>
        <div
          style={{
            width: "1100px",
            height: "650px",
            backgroundColor: "#fff",
            padding: "30px 10px 50px",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              width: "1080px",
              height: "570px",
              backgroundColor: "#EBF3FC",
              margin: "0 auto",
              borderRadius: "10px",
            }}
          >
            {fileName ? (
              <div
                style={{
                  textAlign: "center",
                  fontFamily: "Pretendard-SemiBold",
                  fontSize: "25px",
                  color: "#555",
                  paddingTop: "230px",
                }}
              >
                <img
                  src="../img/file_icon.png"
                  style={{ width: "50px", marginBottom: "20px" }}
                ></img>
                <br />
                {fileName}
              </div> // 파일 이름 표시
            ) : (
              <img
                src="../img/upload_icon.png"
                alt="Upload Icon"
                style={{ width: "480px", marginTop: "210px" }}
              />
            )}
          </div>
          <div>
            <button
              className="cta-button"
              style={{ marginRight: "300px" }}
              onClick={handleButtonClick}
            >
              파일 업로드
            </button>
            <button
              className="cta-button"
              onClick={() => (window.location = "/report")}
            >
              분석 시작
            </button>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <BottomInfo />
    </div>
  );
}
