import React from "react";
import "./App.css";
import ReactInput from "./ReactInput";
import ReactTable from "./ReactTable";
import { getName } from "test-node-gyj";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.getDataSource(),
    };
  }

  cacheDataSource = null;

  // 定义表结构
  columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "公司",
      dataIndex: "company",
      key: "company",
    },
  ];

  getDataSource = () => {
    let dataSource = [];
    let i = 0;
    while (i < 20) {
      dataSource.push({
        id: i,
        name: getName(),
        age: 20,
        address: `长春 ${i}区`,
        company: "一汽",
      });
      i++;
    }
    this.cacheDataSource = dataSource;
    return dataSource;
  };

  onSearch = (value) => {
    console.log("value", value);
    if (value) {
      const { dataSource } = this.state;
      let newDataSource = [];
      // 查询name
      for (let item of dataSource) {
        if (item.name.includes(value)) {
          newDataSource.push(item);
        }
      }
      this.setState({ dataSource: newDataSource });
    } else {
      this.setState({ dataSource: this.cacheDataSource });
    }
  };

  render() {
    return (
      <div>
        <ReactInput
          onSearch={this.onSearch}
          onClick={this.onSearch}
        ></ReactInput>
        <ReactTable
          dataSource={this.state.dataSource}
          columns={this.columns}
        ></ReactTable>
      </div>
    );
  }
}

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
