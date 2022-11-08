import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RoutesConstant from "../RoutesConstant";

const EditProduct = () => {
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Categories, setCategories] = useState("");
  const [Description, setDescription] = useState("");
  const [Disabled, setDisabled] = useState(true);
  const [Done, setDone] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const onblur = () => {
    if (
      Title == "" ||
      Image == "" ||
      Price == "" ||
      Category == "" ||
      Description == ""
    ) {
      setDisabled(true);
      console.log("object");
    } else {
      setDisabled(false);
    }
  };

  const submitHandle = (e) => {
    setDone("");
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: Title,
        image: Image,
        price: Price,
        description: Description,
        category: Category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setDone("done"));
    navigate(`/dashboard${RoutesConstant.ViewProduct}`);

    e.preventDefault();
  };
  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setImage(data.image);
        setPrice(data.price);
        setCategory(data.category);
        setDescription(data.description);
      });
  }, [Done]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <form id="quickForm" noValidate="novalidate">
              <div className="card-body">
                <div className="form-group">
                  <label>Product Title</label>
                  <input
                    onBlur={() => {
                      onblur();
                    }}
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter product title here"
                    value={Title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Product Image</label>
                  <input
                    onBlur={() => {
                      onblur();
                    }}
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Upolad product Images here"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    value={Image}
                  />
                </div>
                <label>Product Price</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">PKR </span>
                  </div>
                  <input
                    onBlur={() => {
                      onblur();
                    }}
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={Price}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
                <div className="form-group">
                  <label>Select Category</label>
                  <select
                    onBlur={() => {
                      onblur();
                    }}
                    multiple=""
                    className="form-control"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={Category}
                  >
                    {Categories &&
                      Categories.map((item, index) => (
                        <option key={index}>{item.categoryName}</option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Product Description</label>
                  <textarea
                    onBlur={() => {
                      onblur();
                    }}
                    rows="4"
                    style={{ width: "100%" }}
                    placeholder=" Enter product description here"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={Description}
                  ></textarea>
                </div>
              </div>
              <div className="card-footer">
                <button
                  disabled={Disabled}
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => submitHandle(e)}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
