import "./styles.css";
import { Tooltip } from "./components/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function App() {
  return (
    <div className="App">
      <h1>ReactでTooltip実装</h1>
      <Tooltip content="Tooltipに表示させたい内容をここに記述します">
        <HelpOutlineIcon />
      </Tooltip>
      <div>ここから文書は続きます。</div>
    </div>
  );
}
