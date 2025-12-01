import { BeatLoader } from "react-spinners";
import s from "./Spinner.module.scss";

const Spinner = ({ loading = true, color = "#FFB4F4", size = 12 }) => {
  return (
    <div className={s.loadingContainer}>
      <BeatLoader
        color={color}
        loading={loading}
        speedMultiplier={1}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
