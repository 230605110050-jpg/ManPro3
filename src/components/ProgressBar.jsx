import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, showLabel = true, height = "h-2" }) => {
  return (
    <div className="w-full">
      <div className={`w-full bg-muted rounded-full overflow-hidden ${height}`}>
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <p className="text-sm text-muted-foreground mt-1 font-medium">{progress}%</p>
      )}
    </div>
  );
};

export default ProgressBar;