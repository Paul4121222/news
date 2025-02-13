import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import background from "../assets/background.jpg";

//封裝promise，原因是普通的promise會立即返回promise，react不知道狀態，導致不知道怎麼處理
//告訴suspense 如果資料還沒回來，丟出promise，資料若回來，正常顯示內容
const wrapPromise = (promise) => {
  let status = "pending";
  let result;

  let suspender = promise
    .then((r) => {
      status = "success";
      result = r;
    })
    .catch((e) => {
      status = "error";
      result = e;
    });

  return {
    read: () => {
      if (status === "pending") {
        throw suspender; // 🚀 讓 Suspense 停止渲染，直到 Promise 完成
      } else if (status === "error") {
        throw result; // 🚨 發生錯誤時拋出錯誤
      }
      return result; // ✅ 只有成功時才返回資料
    },
  };
};

const Theme = () => {
  const searchWord = useSelector((state) => state.searchWord);
  const newTheme = useSelector((state) => state.newTheme);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "45px", fontWeight: 700, color: "#ffd231" }}
        >
          搜尋詞: {searchWord}
        </motion.h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 250px)",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {newTheme.map((theme, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <motion.div
              variants={{
                initial: {
                  scale: 1,
                },
                hover: {
                  scale: 1.02,
                },
              }}
              initial="initial"
              whileHover="hover"
              style={{
                backgroundImage: `url(${theme.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "250px",
                position: "relative",
              }}
            >
              <motion.div
                style={{
                  color: "#fff",
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  padding: "10px",
                }}
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1, transition: { duration: 0.3 } },
                }}
              >
                {theme.title}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="theme-desc"
              style={{
                flex: 1,
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: 1.6,
                color: "#333",
                overflow: "hidden",
                display: "-webkit-box",
              }}
            >
              {theme.description}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theme;
