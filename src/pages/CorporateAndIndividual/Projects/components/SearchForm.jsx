import { Modal, Col, Row, Input, Cascader, Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import PATH from "../../../../utils/path";

function SearchForm(props) {
  const { visible, handleCancel } = props;
  const { Search } = Input;
  const options = [];

  return (
    <Modal 
      visible={visible}
      handleCancel={handleCancel}
      width={1250}
      style={{
        top: 80,
        left: 115,
      }}
      footer={[
        <Link to={PATH} className="btn-cancel">
          Cancel
        </Link>,
        <Button key="submit" type="default" className="btn-primary"> 
          Search
        </Button>
      ]}
    >
      <Row>
        <Col span={24} xs={24}>
            <span className="searchbar-icon">
              <FiSearch size={20} />
            </span>
            <Search placeholder="Search a project" />
        </Col>
      </Row>
      <br />

      <div className="row d-flex search-form-filter-row">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Cascader
          className="w-100"
            options={options}
            placeholder="Project ID"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Input
            placeholder="Project Name"
             className="w-100"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Input
            placeholder="Client Name"
            className="w-100"
          />
        </div>

        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Cascader
           className="w-100"
            options={options}
            placeholder="Project Country"
          />
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
          <Cascader
          className="w-100"
            options={options}
            placeholder="Project State"
          />
        </div>
      </div>
    </Modal>
  );
}

export default SearchForm;
SearchForm.propTypes = {
  visible: PropTypes.node.isRequired,
  handleCancel: PropTypes.node.isRequired,
};
