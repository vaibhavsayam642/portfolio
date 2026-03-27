import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black z-[9999]">

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%"
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: "3rem",
            fontWeight: "bold",
            color: "white"
          }}
        >
          MY PORTFOLIO
        </h1>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ marginTop: "10px", color: "#9ca3af" }}
        >
          LOADING EXPERIENCE...
        </motion.p>

        <div style={{ marginTop: "20px" }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid cyan",
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              margin: "0 auto"
            }}
          />
        </div>

      </div>
    </div>
  );
}