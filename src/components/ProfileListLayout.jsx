import { Box, LinearProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProfileListLayout() {
  const [product, setProduct] = useState([]);
  const [fetch, setFetch] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      )
      .then((data) => setProduct(data.data), setFetch(false));
  }, []);
  console.log("@SN ", product);
  console.log("@SN ", fetch);
  return (
    <>
      {fetch && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ padding: "50px" }}
      >
        {product.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card h-100">
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={item.jetpack_featured_media_url}
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.2)",
                      }}
                    ></div>
                  </a>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{item.primary_category.name}</h5>
                  <button type="button" class="btn btn-success">
                    Add to cart
                  </button>
                  <p>{}</p>
                  <p className="card-text">
                    {item.primary_category.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProfileListLayout;
