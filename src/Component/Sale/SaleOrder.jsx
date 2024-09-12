import React, { useState } from "react";
import { Link } from "react-router-dom";

function SaleOrder() {
  const [isModalOpen, setModalOpen] = useState(false);
const[currentStatus,setCurrentPage]=useState(null)
  const openModal = async () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="big-containe bg-1">
        <div className="small-container">
          <div className="same-as-head">
            <ul>
              <li>
                <Link to="/sale">Quotation</Link>
              </li>
              <li>
                <Link to="/saleorder" className="activ">
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="work-flex">
          <div className="work">
            <h4>Orders</h4>
          </div>
          <div className="fields">
            <div className="" onclick="togglePopup('popup-1')">
              <a className="add" onClick={openModal}>
                <i className="fa-solid fa-plus" />
                &nbsp;&nbsp;Select Template
              </a>
            </div>
            <div className="input-1">
              <input type="text" placeholder="To Search" />
            </div>
            <div className="input-1">
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
            <div className="input-1">
              <input
                type="date"
                id="start"
                name="trip-start"
                defaultValue="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
            <div className="input-1">
              <select name="cars" id="cars">
                <option value="volvo">All Statuses</option>
                {/* <span>Concept</span> */}
                <option value="saab">Created</option>
                <option value="opel">In progress</option>
                <option value="audi">Extradited</option>
              </select>
            </div>
            <div className="input-1">
              <select>
                <option>All Responsibles</option>
                <option>Frmae Repair Alhra</option>
                <option>Jeffrey Casteleins</option>
                <option>Bjorn Goveia</option>
                <option>Alhra Frames</option>
                <option>Marcel ven dar vijin</option>
                <option>Philip ven dar vijin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <section className="intro mt-6">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card shadow-2-strong">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead className="my-thead-1">
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">Order date</th>
                              <th scope="col">Reference</th>
                              <th scope="col">Client</th>
                              <th scope="col">Project</th>
                              <th scope="col">Location</th>
                              <th scope="col">To be invoiced</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Status</th>
                              {/* <th scope="col">Status</th> */}
                            </tr>
                          </thead>
                          <tbody className="myies">
                            <tr className="cr-table-no-results">
                              <td colSpan={10}>
                                <p className="cr-p-l mb-0 cr-textcolor-darkgray">
                                  No order found
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*---------------------------15-modal-----------------*/}
        <div className="popup" id="popup-1">
          <div className="overlay" />
          <div className="content h-auto w-auto">
            <div className="close-btn" onclick="togglePopup('popup-1')">
              ×
            </div>
            <p className="">Choose a template</p>
            <hr />
            <p className="">No template created yet</p>
            <hr />
          </div>
        </div>
      </section>

      <div
        className={`modal ${isModalOpen ? "show" : ""}`}
        id="add-pdf-template"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="add-pdf-template"
        style={{ display: isModalOpen ? "block" : "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog pdfmodal">
          <div className="modal-content">
            <div className="modal-header border-0 gap-3">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              />
            </div>
            <div className="steps mb-4">
              {currentStatus === "concept" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                </React.Fragment>
              )}
              {currentStatus === "open" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Open</div>
                  </div>
                </React.Fragment>
              )}
              {currentStatus === "expire" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Open</div>
                  </div>
                  <div className="step">
                    <div className="step__title">expire</div>
                  </div>
                </React.Fragment>
              )}
              {currentStatus === "lose" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Open</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Expire</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Lose</div>
                  </div>
                </React.Fragment>
              )}
              {currentStatus === "incomplete" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Clanned</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Incomplete</div>
                  </div>
                </React.Fragment>
              )}
              {currentStatus === "won" && (
                <React.Fragment>
                  <div className="step">
                    <div className="step__title">Concept</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Open</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Expire</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Lose</div>
                  </div>
                  <div className="step">
                    <div className="step__title">Won</div>
                  </div>
                </React.Fragment>
              )}
            </div>
            <div className="big-containe bg-1">
              <div className="container">
                <div className="same-as-head d-flex justify-content-between align-items-center">
                  <ul className="maintabhead">
                    <li
                      className="tablink active"
                      onclick="openPage('Home', this, 'red')"
                      id="defaultOpen"
                      style={{ borderBottom: "2px solid rgb(240, 101, 34)" }}
                    >
                      Quotation
                    </li>
                    <li
                      className="tablink"
                      onclick="openPage('Documents', this, 'blue')"
                    >
                      Documents (0)
                    </li>
                  </ul>
                  <ul className="maintabhead">
                    {currentStatus === "Concept" && (
                      <>
                        <a className="add">Create Invoice</a>
                        <a className="add adda">Create WorkOrder</a>{" "}
                      </>
                    )}
                    {currentStatus === "In Progress" && (
                      <a className="add">Create Invoice</a>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-body ">
              <div className="row">
                <div className="col-md-8">
                  <div
                    id="Home"
                    className="tabcontentt"
                    style={{ display: "block" }}
                  >
                    <div className="row">
                      <div className="">
                        <div className="Institution-grid-2 bg">
                          <div className="compan compana ">
                            <a
                              href=""
                              className="btn-primary position-relative"
                            >
                              Download PDF
                            </a>
                            <a
                              href=""
                              className="btn-primary position-relative"
                            >
                              Duplicate
                            </a>
                            <a
                              href=""
                              className="btn-primary position-relative"
                            >
                              Create Template
                            </a>
                            <select className="no-select2 custom-select cr-select form-select">
                              <option>Prijzen weergave</option>
                              <option>Incl. BTW weergeven</option>
                              <option> Excl. BTW weergeven </option>
                            </select>
                            <select className="no-select2 custom-select cr-select form-select">
                              <option>Prijzen weergave</option>
                              <option>Incl. BTW weergeven</option>
                              <option> Excl. BTW weergeven </option>
                            </select>
                          </div>
                          <hr />
                          <div className="row">
                            <div className=" col-md-8">
                              <div className="">
                                <img
                                  src={`${process.env.PUBLIC_URL}/Image/logo.png`}
                                  className="w-100"
                                  alt="Company Logo"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="text-right">
                                <a href="#" className="Esined">
                                  Esined <i className="fa fa-pencil" />
                                </a>
                                <p>admin@crafter.com</p>
                              </div>
                            </div>
                            <div className="col-md-12 mt-5">
                              <div className="text-left">
                                <a href="#" className="Esined">
                                  Recipient <i className="fa fa-pencil" />
                                </a>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="text-left">
                                <h4>Offerte concept #000022</h4>
                                <hr />
                                <div className="justify-content-between">
                                  <p>Referentie: </p>
                                  {/* <p className="text-right">
                                <i className="fa fa-pencil" />
                              </p> */}
                                </div>
                                <div className="justify-content-between">
                                  <p>Delivery Method:</p>
                                  <p>
                                    Single Order{" "}
                                    {/* <span className="text-right float-end">
                                  <i className="fa fa-pencil " />
                                </span> */}
                                  </p>
                                </div>
                                <div className="justify-content-between">
                                  <p>Work location:</p>
                                  {/* <p className="text-right">
                                <i className="fa fa-pencil" />
                              </p> */}
                                </div>
                                <div className="justify-content-between">
                                  <p>Target date: - </p>
                                  {/* <p className="text-right">
                                <i className="fa fa-pencil" />
                              </p> */}
                                </div>
                                <div className="justify-content-between">
                                  <p>Responsible:</p>
                                  <p>
                                    Robert van Drechten{" "}
                                    {/* <span className="text-right float-end">
                                  <i className="fa fa-pencil " />
                                </span> */}
                                  </p>
                                </div>
                                <div className="justify-content-between">
                                  <p>Establishment/brand:</p>
                                  <p>
                                    Esined{" "}
                                    {/* <span className="text-right float-end">
                                  <i className="fa fa-pencil " />
                                </span> */}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5 mt-5">
                              <div className="text-left">
                                <div className="justify-content-between">
                                  <p> Quotation date: </p>
                                  <p>
                                    26-08-2024{" "}
                                    {/* <span className="text-right float-end">
                                  <i className="fa fa-pencil opendiv" />
                                </span> */}
                                  </p>
                                </div>
                                <div
                                  className="data form-field-open form-field-open1"
                                  style={{ display: "none" }}
                                >
                                  <form>
                                    <div className="fields  customer_records">
                                      <div className="justify-content-between">
                                        <p> Quotation date: </p>
                                        <p>26-08-2024</p>
                                      </div>
                                    </div>
                                    <div className="d-flex gap-3 justify-content-end">
                                      <a
                                        href=""
                                        className="add  btn-danger px-2"
                                      >
                                        Cancel
                                      </a>
                                      <a
                                        href=""
                                        className="add btn-success px-2"
                                      >
                                        Save
                                      </a>
                                    </div>
                                  </form>
                                </div>
                                <div className="justify-content-between">
                                  <p>Expiry date:</p>
                                  <p>
                                    26-08-2024{" "}
                                    {/* <span className="text-right float-end">
                                  <i className="fa fa-pencil " />
                                </span> */}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="header-note mt-5">
                              <div className="text-left">
                                <div className="justify-content-between">
                                  <p>
                                    Add a header <i className="fa fa-pencil" />{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="table-responsive mt-4">
                              <table className="table table-borderless mb-0">
                                <thead className="my-thead-1">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="pd-right my-padding"
                                    >
                                      Number
                                    </th>
                                    <th
                                      scope="col"
                                      className="pd-right my-padding"
                                      style={{ width: 300 }}
                                    >
                                      Description
                                    </th>
                                    <th
                                      scope="col"
                                      className="pd-right my-padding"
                                    >
                                      Amount
                                    </th>
                                    <th
                                      scope="col"
                                      className="pd-right my-padding"
                                    >
                                      Total
                                    </th>
                                    <th
                                      scope="col"
                                      className="pd-right my-padding"
                                    >
                                      €0.00
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="pt-4">
                                    <th scope="tr" className="pt-4" />
                                    <th scope="tr" className="pt-4" />
                                    <th scope="tr" className="pt-4">
                                      Subtotal
                                    </th>
                                    <th scope="tr" className="pt-4">
                                      €0.00
                                    </th>
                                    <th scope="tr" className="pt-4" />
                                  </tr>
                                  <tr className="pt-5">
                                    <th scope="tr" className="pt-5" />
                                    <th scope="tr" className="pt-5" />
                                    <th scope="tr" className="pt-5">
                                      <b> Total </b>
                                    </th>
                                    <th scope="tr" className="pt-5">
                                      €0.00
                                    </th>
                                    <th scope="tr" className="pt-5" />
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="header-note mt-4">
                              <div className="text-left">
                                <div className="justify-content-between">
                                  <p>
                                    Add a footer <i className="fa fa-pencil" />{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Documents"
                    className="tabcontentt"
                    style={{ display: "none" }}
                  >
                    <div className="row">
                      <div className="col-md-8">
                        <div className="Institution-grid-2 bg">
                          <div className="row">
                            <div className=" col-md-4">
                              <div className="">
                                <h5>Private Filename </h5>
                                <p>
                                  <span className="float-start">
                                    <i className="fa fa-eye" />
                                  </span>{" "}
                                  &nbsp;Offer varley roller
                                </p>
                              </div>
                            </div>
                            <div className=" col-md-4">
                              <div className="">
                                <h5>Date added </h5>
                                <p>26 october 2024 16:22</p>
                              </div>
                            </div>
                            <div className=" col-md-4">
                              <div className="">
                                <h5>By</h5>
                                <p>
                                  office user{" "}
                                  <span className="float-end">
                                    <i className="fa fa-trash" />
                                  </span>
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div className=" col-md-12">
                              <div className="file-upload">
                                <label
                                  htmlFor="upload"
                                  className="file-upload__label"
                                >
                                  + Drag/ select document
                                </label>
                                <input
                                  id="upload"
                                  className="file-upload__input"
                                  type="file"
                                  name="file-upload"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <label className="mb-2">
                                  Hyperlink text (Optional)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Hyperlink text"
                                  className="first-inp mt-0 mb-2 "
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="mb-2">Hyperlink URL </label>
                                <input
                                  type="text"
                                  placeholder="Hyperlink URL"
                                  className="first-inp mt-0 mb-2 "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div id="parent">
                    <div className="menu border">
                      <div className="d-flex gap-4 p-2 m-0">
                        <button className="active tablinks">
                          <i className="fa fa-book" /> Make note
                        </button>
                        <button className="tablinks">
                          <i className="fa fa-check-square" /> New action{" "}
                        </button>
                        <button className="tablinks">
                          <i className="fa fa-envelope" /> Send email
                        </button>
                      </div>
                    </div>
                    <div className="tabs">
                      <div className="tab tabv active">
                        <div className="input-1 pt-4 px-2">
                          <textarea
                            className="input-group"
                            rows={4}
                            defaultValue={""}
                          />
                        </div>
                        <div className="d-flex gap-3 pt-4 justify-content-end">
                          <a href="" className="add  btn-danger px-2">
                            Cancel
                          </a>
                          <a href="" className="add btn-success px-2">
                            Save
                          </a>
                        </div>
                      </div>
                      <div className="tab tabv ">
                        <div className="d-flex gap-3 pt-4 justify-content-end">
                          <a href="" className="add  btn-danger px-2">
                            Cancel
                          </a>
                          <a href="" className="add btn-success px-2">
                            Save
                          </a>
                        </div>
                      </div>
                      <div className="tab tabv ">
                        <div className="input-1 pt-4 px-2">
                          <input type="email" className="input-group" />
                        </div>
                        <div className="d-flex gap-3 pt-4 justify-content-end">
                          <a href="" className="add  btn-danger px-2">
                            Cancel
                          </a>
                          <a href="" className="add btn-success px-2">
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="same-as-head tabinner">
                    <ul className="tab">
                      <li
                        className="tablinks active"
                        onclick="openCity(event, 'Alles')"
                      >
                        Alles
                      </li>
                      <li
                        className="tablinks"
                        onclick="openCity(event, 'Updated')"
                      >
                        Updated
                      </li>
                      <li
                        className="tablinks"
                        onclick="openCity(event, 'Action')"
                      >
                        Action
                      </li>
                      <li
                        className="tablinks"
                        onclick="openCity(event, 'Notes')"
                      >
                        Notes
                      </li>
                      <li
                        className="tablinks"
                        onclick="openCity(event, 'Emails')"
                      >
                        Emails
                      </li>
                    </ul>
                  </div>
                  <div
                    id="Alles"
                    className="tabcontent"
                    style={{ display: "block" }}
                  >
                    <div className="Institution-grid-2 bg">
                      <div className="submenu">
                        <ul>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Status change: Work order scheduled</p>
                              <p>
                                On 2024-1-11 at 11:00-12:00 at Theo De Winter 07
                                January 2024 15:22
                              </p>
                            </div>
                          </li>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Work order WO00901 created</p>
                              <p>12 december 2023 10:18-jm Koelman</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="Updated" className="tabcontent">
                    <div className="Institution-grid-2 bg">
                      <div className="submenu" style={{ display: "block" }}>
                        <ul>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Status change: Work order scheduled</p>
                              <p>
                                On 2024-1-11 at 11:00-12:00 at Theo De Winter 07
                                January 2024 15:22
                              </p>
                            </div>
                          </li>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Work order WO00901 created</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="Action" className="tabcontent">
                    <div className="Institution-grid-2 bg">
                      <div className="submenu" style={{ display: "block" }}>
                        <ul>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Status change: Work order scheduled</p>
                              <p>
                                On 2024-1-11 at 11:00-12:00 at Theo De Winter 07
                                January 2024 15:22
                              </p>
                            </div>
                          </li>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Work order WO00901 created</p>
                              <p>12 december 2023 10:18-jm Koelman</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="Notes" className="tabcontent">
                    <div className="Institution-grid-2 bg">
                      <div className="submenu" style={{ display: "block" }}>
                        <ul>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Status change: Work order scheduled</p>
                              <p>
                                On 2024-1-11 at 11:00-12:00 at Theo De Winter 07
                                January 2024 15:22
                              </p>
                            </div>
                          </li>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Work order WO00901 created</p>
                              <p>12 december 2023 10:18-jm Koelman</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div id="Emails" className="tabcontent">
                    <div className="Institution-grid-2 bg">
                      <div className="submenu" style={{ display: "block" }}>
                        <ul>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Status change: Work order scheduled</p>
                              <p>
                                On 2024-1-11 at 11:00-12:00 at Theo De Winter 07
                                January 2024 15:22
                              </p>
                            </div>
                          </li>
                          <li className="border-inn">
                            <div className="roundd category-button">
                              <p>Work order WO00901 created</p>
                              <p>12 december 2023 10:18-jm Koelman</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleOrder;
