import { Card, Checkbox, Input } from "antd";
import IncDecCounter from "../../DataTableComponents/IncDecCounter";

function AssetValue() {
  return (
    <div>
      <Card bordered={false}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="text-black">Asset Value</h3>
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
          <div className="col-xs-5">
            <h4>Steps</h4>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <Input className="bp-input" />
              </div>
              <div>
                {" "}
                <p className="mb-0 pl-2">BP</p>
              </div>
            </div>
          </div>
          <div className="col-xs-5">
            <h4>Discount rate %</h4>
            <IncDecCounter />
          </div>
          <div className="col-xs-5">
            <h4>Spread</h4>
            <div className="d-flex align-items-center">
              <div>
                <Input className="bp-input" />
              </div>
              <div>
                <p className="mb-0 ml-2">BP</p>
              </div>
            </div>
          </div>
          <div className="col-xs-5">
            <h4>Exit cap rate %</h4>
            <IncDecCounter />
          </div>
          <div className="col-xs-4 d-flex align-items-center mt-4">
            <Checkbox>Lock</Checkbox>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AssetValue;
