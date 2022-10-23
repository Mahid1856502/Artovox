import { useState } from "react";
import { Card, Button } from "antd";
import { ImBin2 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import DataTable from "../../../../components/Theme/DataTable";

// const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       inputRef.current.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({ ...record, ...values });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   let childNode = children;

//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }

//   return <td {...restProps}>{childNode}</td>;
// };

function IncomeAndCost() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const groundRentColumns = [
    {
      title: "No.",
      children: [
        {
          title: "",
          dataIndex: "no",
          key: "no",
        },
      ],
    },

    {
      title: "Description",
      children: [
        {
          title: "Text",
          dataIndex: "desc",
          key: "desc",
        },
      ],
    },
    {
      title: "EUR/month",
      children: [
        {
          title: "EUR",
          dataIndex: "eur",
          key: "eur",
        },
      ],
    },
    {
      title: "Start",
      children: [
        {
          title: "MM.Y",
          dataIndex: "startMMY",
          key: "startMMY",
        },
      ],
    },
    {
      title: "End",

      children: [
        {
          title: "MM.Y",
          dataIndex: "endMMY",
          key: "endMMY",
        },
      ],
    },
    {
      title: "Index Cycle",

      children: [
        {
          title: "M",
          dataIndex: "indexCycle",
          key: "indexCycle",
        },
      ],
    },
    {
      title: "Factor",

      children: [
        {
          title: "%",
          dataIndex: "factor",
          key: "factor",
        },
      ],
    },
  ];

  const [groundRentDataSource, setGroundRentDataSource] = useState([
    {
      no: "1",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "50%",
    },
    {
      no: "2",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    },
    {
      no: "3",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "10%",
    },
    {
      no: "4",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    },
    {
      no: "5",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "10%",
    },
  ]);

  const [count, setCount] = useState(6);
  const otherCashFlowColumns = [
    {
      title: "No.",
      children: [
        {
          title: "",
          dataIndex: "no",
          key: "no",
        },
      ],
    },

    {
      title: "Description",
      children: [
        {
          title: "Text",
          dataIndex: "desc",
          key: "desc",
        },
      ],
    },
    {
      title: "EUR/month",
      children: [
        {
          title: "EUR",
          dataIndex: "eur",
          key: "eur",
        },
      ],
    },
    {
      title: "Start",
      children: [
        {
          title: "MM.Y",
          dataIndex: "startMMY",
          key: "startMMY",
        },
      ],
    },
    {
      title: "End",

      children: [
        {
          title: "MM.Y",
          dataIndex: "endMMY",
          key: "endMMY",
        },
      ],
    },
    {
      title: "Index Cycle",

      children: [
        {
          title: "M",
          dataIndex: "indexCycle",
          key: "indexCycle",
        },
      ],
    },
    {
      title: "Factor",

      children: [
        {
          title: "%",
          dataIndex: "factor",
          key: "factor",
        },
      ],
    },
  ];

  const [otherCashFlowDataSource, setOtherCashFlowDataSource] = useState([
    {
      no: "1",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "50%",
    },
    {
      no: "2",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    },
    {
      no: "3",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "10%",
    },
    {
      no: "4",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    },
    {
      no: "5",
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "10%",
    },
  ]);

  const timeExpenseColumns = [
    {
      title: "No.",
      children: [
        {
          title: "",
          dataIndex: "no",
          key: "no",
        },
      ],
    },

    {
      title: "Description",
      children: [
        {
          title: "Text",
          dataIndex: "desc",
          key: "desc",
        },
      ],
    },
    {
      title: "Total Amount",
      children: [
        {
          title: "EUR",
          dataIndex: "totalAmount",
          key: "totalAmount",
        },
      ],
    },
    {
      title: "Due Date",
      children: [
        {
          title: "MM.YYYY",
          dataIndex: "dueDate",
          key: "dueDate",
        },
      ],
    },
    {
      title: "Factor",

      children: [
        {
          title: "%",
          dataIndex: "factor",
          key: "factor",
        },
      ],
    },
  ];

  const [timeExpenseDataSource, settimeExpenseDataSource] = useState([
    {
      no: "1",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "50%",
    },
    {
      no: "2",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "40%",
    },
    {
      no: "3",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "10%",
    },
    {
      no: "4",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "40%",
    },
    {
      no: "5",
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "10%",
    },
  ]);

  // const defaultColumns = [
  //   {
  //     title: 'desc',
  //     dataIndex: 'desc',
  //     width: '30%',
  //     editable: true,
  //   },
  //   {
  //     title: 'EUR',
  //     dataIndex: 'eur',
  //   },
  //   {
  //     title: 'M.Y',
  //     dataIndex: 'startMMY',
  //   },
  //   {
  //     title: 'MM.Y',
  //     dataIndex: 'endMMY',
  //   },
  //   {
  //     title: 'M',
  //     dataIndex: 'indexCycle',
  //   },
  //   {
  //     title: '%',
  //     dataIndex: 'factor',
  //   },
  // ];

  const handleAdd = () => {
    const newData = {
      key: count,
      no: `${count}`,
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    };
    setGroundRentDataSource([...groundRentDataSource, newData]);
    setCount(count + 1);
  };

  const handleAddTwo = () => {
    const newData = {
      key: count,
      no: `${count}`,
      desc: "At praesent ac...",
      eur: "Netus in.",
      startMMY: "08/2022",
      endMMY: "12/2022",
      indexCycle: "Leo velit.",
      factor: "40%",
    };
    setOtherCashFlowDataSource([...otherCashFlowDataSource, newData]);
    setCount(count + 1);
  };

  const handleAddThree = () => {
    const newData = {
      key: count,
      no: `${count}`,
      desc: "In publishing and graphic design, Lorem ipsum is a placeholde..",
      totalAmount: "Netus in.",
      dueDate: "08/2022",
      factor: "40%",
    };
    settimeExpenseDataSource([...timeExpenseDataSource, newData]);
    setCount(count + 1);
  };

  // const handleSave = (row) => {
  //   const newData = [...groundRentDataSource];
  //   const index = newData.findIndex((item) => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, { ...item, ...row });
  //   setGroundRentDataSource(newData);
  // };

  // const components = {
  //   body: {
  //     row: EditableRow,
  //     cell: EditableCell,
  //   },
  // };
  // const columns = defaultColumns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }

  //   return {
  //     ...col,
  //     onCell: (record) => ({
  //       record,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       handleSave,
  //     }),
  //   };
  // });

  return (
    <div className="incomeAndCost site-card-border-less-wrapper">
      <Card bordered={false} className="pt-4">
        <div className="d-flex justify-content-between">
          <div>
            {" "}
            <h3>Ground Rents / Other Periodic Costs</h3>
          </div>

          <div>
            <Button className="-row-btn" onClick={handleAddThree}>
              <ImBin2 size={19} />
            </Button>
            <Button className="add-row-btn" onClick={handleAdd}>
              <AiOutlinePlus size={22} />
            </Button>
          </div>
        </div>
        <div className="two-header">
          <hr className="mx-2" />
          <DataTable
            rowClassName={() => "editable-row"}
            columns={groundRentColumns}
            dataSource={groundRentDataSource}
            pagination={false}
            className="antd-table-striped"
            rowSelection={rowSelection}
          />
        </div>
      </Card>

      <Card bordered={false} className="pt-4">
        <div className="d-flex justify-content-between">
          <h3>Other Cash Flow(s)</h3>
          <Button className="add-row-btn" onClick={handleAddTwo}>
            <AiOutlinePlus size={25} />
          </Button>
        </div>
        <div className="two-header">
          <hr className="mx-2" />
          <DataTable
            columns={otherCashFlowColumns}
            dataSource={otherCashFlowDataSource}
            pagination={false}
            className="antd-table-striped"
            rowSelection={rowSelection}
          />
        </div>
      </Card>

      <Card bordered={false} className="pt-2">
        <div className="d-flex justify-content-between">
          <h3>One - Time Expense(s) / Revenue</h3>
          <Button className="add-row-btn" onClick={handleAddThree}>
            <AiOutlinePlus size={25} />
          </Button>
        </div>
        <div className="two-header">
          <hr className="mx-2" />
          <DataTable
            columns={timeExpenseColumns}
            dataSource={timeExpenseDataSource}
            pagination={false}
            className="antd-table-striped"
            rowSelection={rowSelection}
          />
        </div>
      </Card>
    </div>
  );
}

export default IncomeAndCost;
