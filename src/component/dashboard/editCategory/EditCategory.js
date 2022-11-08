import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RoutesConstant from "../RoutesConstant";

const EditCategory = () => {
  const [CategoryName, setCategoryName] = useState();
  const [DesCategory, setDesCategory] = useState();
  const [SubCategory, setSubCategory] = useState();
  const [Disabled, setDisabled] = useState(true);
  const [Done, setDone] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const validation = () => {
    if (CategoryName == "" || DesCategory == "" || SubCategory == "") {
      setDisabled(true);
      console.log("object");
    } else {
      setDisabled(false);
    }
  };

  const submitHandle = (e) => {
    setDone("");
    fetch(`http://localhost:3000/category/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        categoryName: CategoryName,
        categoryDescription: DesCategory,
        subcategory: SubCategory,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setDone("done"));
    navigate(`/dashboard${RoutesConstant.ViewCategories}`);
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`http://localhost:3000/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryName(data.categoryName);
        setDesCategory(data.categoryDescription);
        setSubCategory(data.subcategory);
        console.log(data);
      });
  }, [Done]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Category Name here"
                    value={CategoryName}
                    onBlur={() => {
                      validation();
                    }}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Category Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Description here"
                    value={DesCategory}
                    onChange={(e) => {
                      setDesCategory(e.target.value);
                    }}
                    onBlur={() => {
                      validation();
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Sub Category</label>
                  <select
                    className="form-control"
                    value={SubCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    onBlur={() => {
                      validation();
                    }}
                  >
                    <option
                      disabled
                      defaultValue={"select Category"}
                      onChange={(e) => setSubCategory(e.target.value)}
                    >
                      select Category
                    </option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>
              </div>

              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => submitHandle(e)}
                  disabled={Disabled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
