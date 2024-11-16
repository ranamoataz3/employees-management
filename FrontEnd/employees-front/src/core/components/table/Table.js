import "./table.css";
import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";

const TableComponent = ({
  columns,
  data,
  selectedRowKeys,
  onSelectChange,
  management,
}) => {
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
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </ConfigProvider>
  );
};

export default TableComponent;
