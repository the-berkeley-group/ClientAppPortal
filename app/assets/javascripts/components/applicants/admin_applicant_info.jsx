/**
 * @prop applicant - the info about this applicant
 */
class AdminApplicantInfo extends React.Component {

    _renderInput(name, label) {
        return (
            <div className="applicant-details">
                <h4 className="detail-label">{label}</h4>
                <h3 className="detail">{this.props.applicant[name]}</h3>
            </div>
        );
    }

    render() {
        return (
            <div className="admin-applicant-info row">
                <div className="col-md-9 col-sm-9">
                    <h2 className="applicant-name">
                        {this.props.applicant.full_name}
                    </h2>
                    <div className="detail-container">
                        { this._renderInput("org", "Organization") }
                        { this._renderInput("position", "Position") }
                        { this._renderInput("mission", "Mission") }
                        { this._renderInput("email", "Email") }
                        { this._renderInput("website", "Website") }
                        { this._renderInput("phone", "Phone") }
                        { this._renderInput("address", "Address") }
                        { this._renderInput("city", "City") }
                        { this._renderInput("state", "State") }
                    </div>
                </div>
            </div>
        );
    }
}

AdminApplicantInfo.propTypes = { applicant : React.PropTypes.object.isRequired };
