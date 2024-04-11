import React, { Component } from 'react';
import {Navbar, Container,Dropdown, DropdownButton, Button, Stack, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import km from '../../assets/image/km.jpg'
import tow from '../../assets/image/tow.png'
import { PATH } from '../../utils/constant';

import {DANHMUC} from '../../servieces/data_example';

class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            hoveredButton: null
        };
    }

    handleMouseEnter = (category) => {
        this.setState({ showMenu: true, hoveredButton: category });
    };

    handleMouseLeave = () => {
        this.setState({ showMenu: false, hoveredButton: null });
    };
    render() {
        const data = {
     
            Danhmuc: ['A', 'B', 'C'],
            Noixuatban: ['D', 'E', 'F'],
            Tacgia: ['A', 'G', 'C']
        };
        const danh_muc = DANHMUC.danh_muc_truyen;   
        
        return (
            <Navbar expand="lg" className="dropdown-header-bottom header-bottom">
                <Container className=''>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={<>
                            <i class="bi bi-list"></i>
                            <span className='title-dm'>Danh mục truyện</span>
                        </>}
                        // show={this.state.showMenu}
                        show={true}
                        onMouseEnter={() => this.handleMouseEnter("TitleDM")}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        {danh_muc.map((danh_muc, index) => (
                        
                            <DropdownButton
                                key={index}
                                id={`dropdown-${danh_muc.ten}-button`}
                                className="item"
                                drop="end"          
                                as={Link} to={PATH.SEARCH} 
                                title={danh_muc.ten}
                                show={"TitleDM" !== danh_muc.ten ? true : false}
                                onMouseEnter={() => this.handleMouseEnter(danh_muc.ten)}
                                onMouseLeave={this.handleMouseLeave}
                            >

                                {this.state.hoveredButton === danh_muc.ten && (
                                    danh_muc.sach.map((item, subIndex) => (
                                        <Dropdown.Item 
                                        key={subIndex} 
                                        as={Link} to={PATH.SEARCH}
                                     >
                                        {item.ten_sach}</Dropdown.Item>
                                        
                                    ))
                                )}
                            </DropdownButton>
                        ))}
                    </DropdownButton>
                    <Stack className='banner-header-bottom' direction="horizontal">
                        <Stack className='item-banner' direction="horizontal" >
                            <Button as="a" variant=""  href={PATH.QUESTIONTG} target='blank'>
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
