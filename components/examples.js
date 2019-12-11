import { useSelector } from "react-redux";
import Clock from "./clock";
import Counter from "./counter";

export default () => {
  const lastUpdate = useSelector(state => state.index.lastUpdate);
  const light = useSelector(state => state.index.light);

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
};
