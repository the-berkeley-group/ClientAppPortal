/**
 * @prop applicant - applicant to display
 */
class ApplicantCard extends React.Component {

    _renderInfo(label, attribute) {
        return (
            <div className="applicant-info">
                <label>{`${label}:`}</label>
                <span>{this.props.applicant[attribute]}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="applicant-card">
                <a href={`/applicants/${this.props.applicant.id}`}>
                    <div className="applicant-info-container">
                        { this._renderInfo("Name", "full_name") }
                        { this._renderInfo("Organization", "org") }
                        { this._renderInfo("Position", "position") }
                        { this._renderInfo("Website", "website") }
                    </div>
                </a>
            </div>
        );
    }
}

ApplicantCard.propTypes = { applicant : React.PropTypes.object.isRequired };
