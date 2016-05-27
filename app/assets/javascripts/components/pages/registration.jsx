class RegistrationModal extends DefaultForm {

    _attemptSubmit = (e) => {
        this._attemptAction(APIConstants.sessions.sign_up,
            { applicant : this._formFields() });
    }

    render() {
        return (
            <div>
                <a onClick={this._focusInputField} data-toggle="modal"
                    className="register-link" data-target="#registrationModal">
                    Create an Account
                </a>
                <div className="modal fade" id="registrationModal" tabIndex={-1}
                        role="dialog" ref="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title">Create New Account</h1>
                            </div>
                            <div className="modal-body full-input-container">
                                { this._renderInput("email", "Email", "text", "email@berkeley.edu", "focus") }
                                { this._renderInput("password", "Password", "password") }
                                { this._renderInput("password_confirmation", "Confirm Password", "password") }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="button"
                                        data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" name="submit"
                                        className="button submit-button"
                                        onClick={this._attemptSubmit}>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
