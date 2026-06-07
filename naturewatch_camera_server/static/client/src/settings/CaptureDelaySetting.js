import React from 'react';

class CaptureDelaySetting extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="capture-delay-hours">
                    Delay before capture starts
                </label>
                <br/>
                <input
                    type="number"
                    id="capture-delay-hours"
                    min="0"
                    step="1"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onChangeEnd}
                />
                <span> hours</span>
            </div>
        );
    }
}

export default CaptureDelaySetting;
