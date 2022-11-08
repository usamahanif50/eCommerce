import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutesConstant from "../RoutesConstant";

const AddCategory = () => {
  const [Category, setCategory] = useState("");
  const [CategoryDescription, setCategoryDescription] = useState("");
  const [SubCategory, setSubCategory] = useState("");
  const [Disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const submitHandle = (e) => {
    fetch(`http://localhost:3000/category`, {
      method: "POST",
      body: JSON.stringify({
        categoryName: Category,
        categoryDescription: CategoryDescription,
        subcategory: SubCategory,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(Category))
      .catch((err) => console.log(err));

    e.preventDefault();
    navigate(`/dashboard${RoutesConstant.ViewCategories}`)
  };

  const validation = (e) => {
    if (Category == "" || CategoryDescription == "" || SubCategory == "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

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
                    
                    onBlur={() => {
                      validation();
                    }}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Category Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Description here"
                    onChange={(e) => {
                      setCategoryDescription(e.target.value);
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

export default AddCategory;
