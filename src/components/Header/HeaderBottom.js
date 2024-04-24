import React, { Component } from 'react';
import { Navbar, Container, Dropdown, DropdownButton, Button, Stack, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import km from '../../assets/image/km.jpg'
import tow from '../../assets/image/tow.png'
import { PATH } from '../../utils/constant';
import categoryService from '../../servieces/categoryService';

const positionTop = [0, -41, -82, -123,-164,-205,-246,-287];

class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            hoveredDanhMuc: null,
            categoryGenresData: {}
        };
    }

    handleMouseEnter = (tenDanhMuc) => {
        this.setState({
            showMenu: true,
            hoveredDanhMuc: tenDanhMuc
        });
    }

    handleMouseLeave = () => {
        this.setState({
            showMenu: false,
            hoveredDanhMuc: null
        });
    }

    async componentDidMount() {
        try {
            const responseData = await categoryService.getCategoryGenres();
            this.setState({ categoryGenresData: responseData });
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    render() {
        const { categoryGenresData } = this.state;
        const danh_muc = Object.keys(categoryGenresData);

        return (
            <Navbar expand="lg" className="dropdown-header-bottom header-bottom">
                <Container className=''>
                    <div className='main-box-position'>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={<>
                                <i className="bi bi-list"></i>
                                <span className='title-dm'>Danh mục truyện</span>
                            </>}
                            show={true}
                            onMouseEnter={() => this.handleMouseEnter("TitleDM")}
                            onMouseLeave={this.handleMouseLeave}
                        >
                            {danh_muc.map((danh_muc, index) => (
                                <DropdownButton
                                    key={index}
                                    id={`dropdown-${danh_muc}-button`}
                                    className="item"
                                    drop="end"
                                    as={Link} to={PATH.SEARCH}
                                    title={danh_muc}
                                    show={this.state.showMenu && this.state.hoveredDanhMuc === danh_muc}
                                    onMouseEnter={() => this.handleMouseEnter(danh_muc)}
                                    onMouseLeave={this.handleMouseLeave}
                                >
                                    <div className="menu-box-item" style={{ display: 'flex', top: `${positionTop[index]}px`}}>
                                        <div>
                                            <Dropdown.Header>Nổi bật</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                                                <Dropdown.Item key={index}  as={Link} to={PATH.SEARCH}>{item.storyAuthorName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Dịch giả</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                                                <Dropdown.Item key={index} as={Link} to={PATH.SEARCH}>{item.storyTranslatorName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Nhà xuất bản</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                                                <Dropdown.Item key={index} as={Link} to={PATH.SEARCH}>{item.placePublicationName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Tác giả</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                                                <Dropdown.Item key={index} as={Link} to={PATH.SEARCH}>{item.storyAuthorName}</Dropdown.Item>
                                            ))}
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
                </Container>
            </Navbar>
        );
    }
}

export default HeaderBottom;
