import "./table.css";
import React, { useState, useEffect } from "react";
// import Button from "../button/Button";
import { ConfigProvider, Table, Popconfirm, Button } from "antd";

const TableComponent = ({
  columns,
  data,
  selectedRowKeys,
  onSelectChange,
  onDelete,
  onEdit,
  management,
}) => {
  const [columnsWithActions, setColumnsWithActions] = useState(columns);

  const DefinecolumnsWithActions = () => {
    let newcolumns = [...columnsWithActions];
    if (onEdit) {
      let newcolumns = [...columnsWithActions];
      newcolumns.push({
        title: "Edit Action",
        dataIndex: "Edit Action",
        render: (_, record) => (
          <Button color="primary" variant="filled" >
            Edit
          </Button>
        ),
      });

      // console.log("columns", columns);
      // console.log("data", data);
    }

    if (onDelete) {
      newcolumns.push({
        title: "Delete Action",
        dataIndex: "Delete Action",
        render: (_, record) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => onDelete(record.key)}
          >
            {/* <Button btnclassName="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
              Delete
            </Button> */}
            <Button color="danger" variant="filled">
              Delete
            </Button>
          </Popconfirm>
        ),
      });

      // console.log("columns", columns);
      // console.log("data", data);
    }

    setColumnsWithActions(newcolumns);
  };

  useEffect(() => {
    // console.log("Received data in TableComponent:", data);
    DefinecolumnsWithActions();
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#dcdcdc",
          },
        },
      }}
    >
      <Table
        rowSelection={management ? rowSelection : null}
        columns={columnsWithActions}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </ConfigProvider>
  );
};

export default TableComponent;
