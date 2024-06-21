import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "../../../components/NavbarComponents/NavbarComponent";
import CardProduct from "../../../components/CardProduct/CardProduct";
import { useEffect, useState } from "react";
import { getListBooks, getPage } from "../../../services/BookService";
import ReactPaginate from "react-paginate";
const TypeProductPage = () => {
  const pageSize = 12;
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(1);
  const [dataProduct, setDataProduct] = useState([]);
  const [checkGenres, setCheckGenres] = useState();

  console.log("checkGenres", checkGenres);

  const fetchPage = async () => {
    try {
      const response = await getPage(limit, pageSize);
      console.log("response", response);
      setTotalPage(response.totalPages);
      setDataProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageClick = (event) => {
    setLimit(event.selected + 1);
  };

  useEffect(() => {
    fetchPage();
  }, [limit, checkGenres]);

  const getAllProduct = async () => {
    const product = await getListBooks();
    setDataProduct(product.data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="type-product-container">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="type-product-navbar">
              <NavbarComponent setCheckGenres={setCheckGenres} />
            </div>
          </Col>
          <Col lg={9}>
            <div className="type-product-content">
              <Row>
                {dataProduct &&
                  dataProduct.map((product, index) => {
                    console.log("product", product?.genresId);
                    if (checkGenres === product?.genresId) {
                      return (
                        <Col lg={3} key={index + 1}>
                          <CardProduct product={product} />
                        </Col>
                      );
                    }
                  })}
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <>
                  <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={totalPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                  />
                </>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypeProductPage;
