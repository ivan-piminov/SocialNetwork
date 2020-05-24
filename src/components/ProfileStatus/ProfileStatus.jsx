import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input type="text" value={this.props.status} onBlur={this.deActivateEditMode} autoFocus={true}/>
                </div>
                }
            </div>
        )
    };
}

export default ProfileStatus;
