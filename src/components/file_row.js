import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/style.css'
import logo_text from '../../images/logo-text.png'
import { connect } from "react-redux";
import { signIn, openRegistration, openProfile, showModal, hideModal } from "../modules/user/actions";
import { openLots, openCreateLot } from "../modules/lots/actions";
import FormErrors from "../components/formerrors";

class FileRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Загрузите файл',
    };
  }

  uploadFile = (e) => {
    this.props.onChange({file_id: this.props.id, file: e.target.files[0]});
    this.setState({text: e.target.files[0].name || ''});
  };
  delete = (e) => {
    this.props.removeFile(this.props.id);
  };

  render() {
    // let state = this.state;

    return <div style={{marginBottom: '15px'}}>
      <input type="file" id={"file_"+this.props.id} name={"file"} onChange={this.uploadFile} />
      {/*<label htmlFor={"file_"+this.props.id}>{this.state.text}</label>*/}

      <button onClick={this.delete}>x</button>
    </div>
  }
}


// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     email: state.user.profile.email || '',
//     token: state.user.token || '',
//     modalActive: state.user.modalActive || false,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   singIn: (data) => dispatch(signIn(data)),
//   openReg: () => dispatch(openRegistration()),
//   openLots: () => dispatch(openLots()),
//   openCreateLot: () => dispatch(openCreateLot()),
//   openProfile: () => dispatch(openProfile()),
//   showModal: () => dispatch(showModal()),
//   hideModal: () => dispatch(hideModal()),
//
// });
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FileRow);

export default FileRow;
