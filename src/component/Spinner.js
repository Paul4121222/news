import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ddd",
          borderTop: "5px solid #ff0000",
          borderRadius: "50%",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Spinner;
