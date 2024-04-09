import React, { Component } from 'react';
import { Dropdown, DropdownButton, Button, Stack, Image, Link } from 'react-bootstrap';
import km from '../../assets/image/km.jpg'
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

        return (
            <>
                <div className='dropdown-header-bottom'>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title={<>
                            <i class="bi bi-list"></i>
                            <span className='title-dm'>Danh mục truyện</span>
                        </>}
                        show={this.state.showMenu}
                        onMouseEnter={() => this.handleMouseEnter("TitleDM")}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        {Object.keys(data).map((category, index) => (
                            <DropdownButton
                                key={index}
                                id={`dropdown-${category}-button`}
                                className="item"
                                drop="end"
                                title={category}
                                show={"TitleDM" !== category ? true : false}
                                onMouseEnter={() => this.handleMouseEnter(category)}
                                onMouseLeave={this.handleMouseLeave}
                            >

                                {this.state.hoveredButton === category && (
                                    data[category].map((item, subIndex) => (
                                        <Dropdown.Item key={subIndex} href={`/${item}`}>{item}</Dropdown.Item>
                                    ))
                                )}
                            </DropdownButton>
                        ))}
                    </DropdownButton>
                    <Stack className='banner-header-bottom' direction="horizontal" gap={3}>
                        <Stack className='item-banner' direction="horizontal" >
                            <Button as="a" variant=""  href='/cau-hoi-thuong-gap'>
                                <Image src={km} alt="Image 1" fluid /> Button as link
                            </Button>
                        </Stack>
                        <Stack className='item-banner' direction="horizontal" >
                            <Button as="a" variant="" href='/chuong-trinh-khuyen-mai'>
                                <Image src={km} alt="Image 1" fluid /> Button as link
                            </Button>
                        </Stack>
                        <Stack className='item-banner' >
                            <a href="/sale-soc-xa-kho">
                                <Button variant="danger">Sale Sốc Xả Kho</Button>
                            </a>
                        </Stack>

                    </Stack>
                </div >

            </>
        );
    }
}

export default HeaderBottom;
