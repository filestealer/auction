import React, { Component } from 'react';
import { connect } from "react-redux";
import FileRow from './file_row';
import {fileUpload, deleteFile} from "../modules/user/actions";
import styles from '../../css/style.css';
class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [{file_id: 1, file: ''}],
      filesCount: 1,

    };
  }

  addFile = () => {
    this.setState({filesCount:  this.state.filesCount + 1, files: this.state.files.concat({file_id: this.state.filesCount + 1, file: ''})});
  };

  removeFile = (file_id) => {
    let files = this.state.files.filter(e => {return e.file_id != file_id});
    // delete files[file_id];
    this.setState({files: files});
    this.props.deleteFile({file_id})
  };


  render() {
    let state = this.state;

    return <div>
      {state.files.map((e)=>
        <FileRow
          onChange={this.props.fileUpload}
          removeFile={this.removeFile}
          key={e.file_id}
          id={e.file_id} />
      )}

      {/*<div onClick={this.addFile}>Добавить еще файл</div>*/}
      <div onClick={this.addFile} className={styles.fields} style={{cursor: 'pointer'}}>
        <div className={styles.order_address}>
          <span>Загрузить еще файлы</span>
          <a className={styles.delete_node} />
        </div>
      </div>
    </div>
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    files: state.user.files,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fileUpload: (data) => dispatch(fileUpload(data)),
  deleteFile: (data) => dispatch(deleteFile(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploader);

// export default Header;
