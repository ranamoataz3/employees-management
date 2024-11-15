import "./table.css";
import React, { useState } from "react";
import { Button, Flex, Table } from "antd";

const TableComponent = ({ columns, data,selectedRowKeys, onSelectChange,management }) => {

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <Table
        rowSelection={management ? rowSelection : null}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default TableComponent;
