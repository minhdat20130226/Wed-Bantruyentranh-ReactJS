import React, { Component } from 'react';
import { Navbar, Container, Dropdown, DropdownButton, Button, Stack, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import km from '../../assets/image/km.jpg'
import tow from '../../assets/image/tow.png'
import { PATH } from '../../utils/constant';

import { DANHMUC } from '../../servieces/data_example';

const positionTop = [0, -41, -82, -123];
class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            hoveredDanhMuc: null
        };
    }

    handleMouseEnter = (tenDanhMuc) => {
        // Khi di chuột vào, hiển thị menu và thay đổi nội dung hiển thị
        this.setState({
            showMenu: true,
            hoveredDanhMuc: tenDanhMuc // Lưu trữ tên danh mục hiện tại được di chuột
        });
    }
    handleMouseLeave = () => {
        // Khi di chuột ra khỏi, ẩn menu
        this.setState({
            showMenu: false,
            hoveredDanhMuc: null // Đặt lại tên danh mục hiện tại khi di chuột ra khỏi
        });
    }
    handleMenuItem = (tenDanhMuc) => {
        // Khi di chuột vào, hiển thị menu và thay đổi nội dung hiển thị
        this.setState({
            showMenu: true,
            hoveredDanhMuc: tenDanhMuc // Lưu trữ tên danh mục hiện tại được di chuột
        });
    }

    render() {
        const danh_muc = DANHMUC.danh_muc_truyen;

        return (
            <Navbar expand="lg" className="dropdown-header-bottom header-bottom">
                <Container className=''>
                    <div className='main-box-position'>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={<>
                                <i class="bi bi-list"></i>
                                <span className='title-dm'>Danh mục truyện</span>
                            </>}
                            //  show={this.state.showMenu}
                            show={true}
                            onMouseEnter={() => this.handleMouseEnter("TitleDM")}
                            onMouseLeave={this.handleMouseLeave}
                        >

                            {danh_muc.map((danh_muc, index) => (

                                <DropdownButton
                                    key={index}
                                    id={`dropdown-${danh_muc.ten}-buttodawwdan`}
                                    className="item"
                                    drop="end"
                                    as={Link} to={PATH.SEARCH}
                                    title={danh_muc.ten}
                                    show={this.state.showMenu && this.state.hoveredDanhMuc === danh_muc.ten}
                                    // show={true}
                                    onMouseEnter={() => this.handleMouseEnter(danh_muc.ten)}
                                    onMouseLeave={this.handleMouseLeave}

                                >
                                    <div className="menu-box-item" style={{ display: 'flex', top: `${positionTop[index]}px`}}>

                                        <div>
                                            <Dropdown.Header>Nổi bật</Dropdown.Header>
                                            {danh_muc.sach.map((sach, index) => (<Dropdown.Item eventKey={index}>{sach.tac_gia}</Dropdown.Item>))}
                                        </div>
                                        {/* top: -42px; */}
                                        <div>
                                            <Dropdown.Header>Các thể loại liên quan</Dropdown.Header>
                                            {danh_muc.sach.map((sach, index) => (<Dropdown.Item eventKey={index}>{sach.ten_sach}</Dropdown.Item>))}
                                        </div>
                                        {/* top: -84px; */}
                                        <div>
                                            <Dropdown.Header>Nhà xuất bản</Dropdown.Header>
                                            {danh_muc.sach.map((sach, index) => (<Dropdown.Item eventKey={index}>{sach.nha_xuat_ban}</Dropdown.Item>))}
                                        </div>
                                        {/* top: -124px; */}
                                        <div>
                                            <Dropdown.Header>Tá c giả</Dropdown.Header>
                                            {danh_muc.sach.map((sach, index) => (<Dropdown.Item eventKey={index}>{sach.tac_gia}</Dropdown.Item>))}
                                        </div>

                                    </div>


                                </DropdownButton>

                            ))}

                        </DropdownButton>
                    </div>
                    <Stack className='banner-header-bottom' direction="horizontal">
                        <Stack className='item-banner' direction="horizontal" >
                            <Button as="a" variant="" href={PATH.QUESTIONTG} target='blank'>
                                <Image src={tow} alt="Image 1" fluid />Giảm thêm 2%
                            </Button>
                        </Stack>
                        <Stack className='item-banner' direction="horizontal" >
                            <Button as="a" variant="" href={PATH.PROMOTIONPROGRAM} target='blank'>
                                <Image src={km} alt="Image 1" fluid />Chương Trình Khuyến Mãi
                            </Button>
                        </Stack>
                        <Stack className='item-banner'  >
                            <Link className="nav-link" to={PATH.SALE}>
                                <Button variant="danger">Sale Sốc Xả Kho</Button>
                            </Link>
                        </Stack>

                    </Stack>
                </Container >

            </Navbar>
        );
    }
}

export default HeaderBottom;
