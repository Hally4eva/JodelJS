import React, {PureComponent} from "react";
import Settings from "../app/settings";

export default class ColorPicker extends PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        color: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired,
    };

    render() {
        const {color, onChange, ...forwardProps} = this.props;
        const colorNodes = Settings.POST_COLORS.map((c) => {
            return <label  style={{backgroundColor: "#" + c}}>
                <input type="radio" value={c} checked={c === color} onChange={onChange}/>
                #{c}
            </label>
        });
        return (
            <div className="colorPicker">
                {colorNodes}
            </div>
        );
    }
};