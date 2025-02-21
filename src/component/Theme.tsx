import React, { useMemo ,FC} from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import background from "../assets/background.jpg";
import { wrapPromise } from "../utility";
import { TRootState } from "../reducer";

interface IContent {
  searchWord: string,
  data: IPromiseData
}

const Content: FC<IContent> = ({ data, searchWord }) => {
  const response = data.read();
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
          Keywords: {searchWord}
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
        {response.map((theme: ITheme, index: number) => (
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

const Theme = () => {
  const searchWord = useSelector((state: TRootState) => state.searchWord);
  const newTheme = useSelector((state: TRootState) => state.newTheme);

  const data = useMemo(():IPromiseData => {
    return wrapPromise(
      new Promise((resolve) => {
        if (newTheme.length) {
          setTimeout(() => {
            resolve(newTheme);
          }, 3000);
        }
      })
    );
  }, [newTheme]);

  return <Content data={data} searchWord={searchWord} />;
};

export default Theme;
