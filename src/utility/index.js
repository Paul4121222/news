export const wrapPromise = (promise) => {
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
