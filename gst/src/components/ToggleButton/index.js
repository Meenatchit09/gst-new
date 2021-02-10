//scss
import "./index.scss";

const ToggleSwitch = (props) => {
  const { name, checked, onToggleChange } = props;
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={(e) => onToggleChange(e.target.checked)}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
  //}
};

export default ToggleSwitch;
