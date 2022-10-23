import { Card, Cascader, Input } from "antd";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

const options = [
    {
      value: 'demo',
      label: 'Net initial yield (Potential)',
    },
    {
      value: 'demo2',
      label: 'Jiangsu',
    },
  ];

function ExitValue() {
  return (
    <div>
      <Card bordered={false}>
        <div>
          <div
            className="d-flex justify-content-between"
          >
            <div>
              <h3 className="text-black">Exit Value</h3>
            </div>
            <div>
              <h3 className="sqm-text-color">5,600 € /sqm</h3>
            </div>
            <div>
              <h3 className="text-black">23,400,000 €</h3>
            </div>
          </div>
          <hr className="mt-0 border-top-0 border-2" />
        </div>
        <div className="row pt-2 d-flex justify-content-between">
          <div className="col-xs-8">
            <h4>Valuation by target value</h4>
            <div className="d-flex align-items-center">
              <div>
              <Cascader options={options} placeholder="Net initial yield (Potential)"/>
              </div>
            </div>
          </div>
          <div className="col-xs-8">
            <h4>Steps</h4>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <Input
                 className="bp-input" 
                />
              </div>
              <div>
                {" "}
                <p className="mb-0 pl-2">BP</p>
              </div>
            </div>
          </div>
          <div className="col-xs-8">
            <h4>Target Value %</h4>
            <div>
              <IncDecCounter />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ExitValue;
