import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class ReactTable extends React.Component {
  // 生成表格
  getTable = () => {
    const { columns, dataSource } = this.props;
    return (
      <table className="rc-table">
        {this.getHeadTable(columns)}
        {this.getBodyTable(columns, dataSource)}
      </table>
    );
  };

  // 生成表头
  getHeadTable = (columns) => {
    console.log("columns", columns);
    return (
      <thead>
        <tr>
          {columns &&
            Array.isArray(columns) &&
            columns.length > 1 &&
            columns.map((item) => {
              return (
                <th className="rc-table-thead-th" key={item.key}>
                  {item.title}
                </th>
              );
            })}
        </tr>
      </thead>
    );
  };

  // 生成表体
  getBodyTable = (columns, dataSource) => {
    return (
      <tbody>
        {dataSource &&
          dataSource.length > 1 &&
          dataSource.map((item) => {
            return (
              <tr key={item.id}>
                {columns.map((colItem) => {
                  return (
                    <td
                      className="rc-table-tbody-td"
                      key={colItem.key + item.id}
                    >
                      {item[colItem.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    );
  };

  render() {
    return this.getTable();
  }
}

// 组件属性校验
React.propTypes = {
  dataSource: PropTypes.array.isRquired,
  columns: PropTypes.array.isRquired,
};

// 组件属性默认值
React.defaultProps = {
  dataSource: [],
  columns: [],
};

export default ReactTable;
