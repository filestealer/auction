import React from 'react';
import { css } from 'react-emotion';
// // First way to import
// import { ClipLoader } from 'react-spinners';
// // Another way to import
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading
    }
  }
  render() {
    return (
      <div
        className='sweet-loading'
        style={{
          display: this.props.loading ? 'block' : 'none',
        }}
      >
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
export default Spinner;