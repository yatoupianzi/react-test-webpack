import React from "react";
import "./index.css";
import PropTypes from "prop-types";

class ReactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      console.log("回车");
      const { onSearch } = this.props;
      const { value } = this.state;
      if (onSearch) {
        onSearch(value);
      }
    }
  };

  onChangeEvent = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  onClickEvent = () => {
    const { value } = this.state;
    const { onClick } = this.props;
    if (onClick) {
      onClick(value);
    }
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <input
          className="rt-input"
          placeholder="请输入内容"
          type="text"
          value={value}
          onKeyDown={this.onKeyDownEvent}
          onChange={this.onChangeEvent}
        />
        <button className="rt-input-search-btn" onClick={this.onClickEvent}>
          搜 索
        </button>
        <span>{value}</span>
      </span>
    );
  }
}

// 组件属性校验
React.propTypes = {
  dataSource: PropTypes.func,
  columns: PropTypes.func,
};

export default ReactInput;
