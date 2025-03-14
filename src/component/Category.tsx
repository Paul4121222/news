import React, { FC, useEffect, useMemo } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { getNewsList } from "../action";
import { motion } from "framer-motion";
import { wrapPromise } from "../utility";
import { TRootState } from "../reducer";
import {ThunkDispatch} from 'redux-thunk';
import {IGetNewsList} from '../action/interface';

interface IContentProps {
  data: IPromiseData
} 
interface ICategoryProps extends RouteComponentProps {
  newTheme: ITheme,
  getNewsList(val: string): void,
}

const Content:FC<IContentProps> = ({ data }) => {
  const response = data.read();
  return (
    <div style={{ padding: "20px" }}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `url(${response[0].image}) center/cover no-repeat`,
          height: "300px",
          display: "flex",
          alignItems: "flex-end",
          padding: "20px",
          color: "white",
          textShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      >
        {response[0].title}
      </motion.div>

      {response.slice(1).map((news: ITheme, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          style={{
            display: "flex",
            gap: "10px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
            marginTop: "15px",
          }}
        >
          <img src={news.image} alt="" width="100" height="70" />
          <div style={{ flexGrow: 1 }}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <div style={{ marginTop: "4px" }}>
              <button
                style={{
                  display: "block",
                  marginLeft: "auto",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(news.url, "_target");
                }}
              >
                more
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Category: FC<ICategoryProps> = ({ getNewsList, newTheme, match }) => {
  const data = useMemo(() => {
    const response: IPromiseData = wrapPromise(
      new Promise((resolve) => {
        if (newTheme.length) {
          setTimeout(() => {
            resolve(newTheme);
          }, 3000);
        }
      })
    );

    return response;
  }, [newTheme]);

  useEffect(() => {
    const searchWord = match.path.split("/")[1];
    getNewsList(searchWord);
  }, [match.path]);

  return <Content data={data} />;
};

const mapStateToProps = (state: TRootState) => {
  return {
    newTheme: state.newTheme,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<TRootState, string, IGetNewsList>) => {
  return {
    getNewsList: (val: string) => dispatch(getNewsList(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Category));
