import React, { Component } from 'react';
import { Navbar, Container, DropdownButton, Button, Stack, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import km from '../../assets/image/km.jpg'
import tow from '../../assets/image/tow.png'
import { PATH } from '../../utils/constant';


class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Navbar expand="lg" className="dropdown-header-bottom header-bottom">
                <Container className=''>
                    <div className='main-box-position'>
                        <DropdownButton
                            id="dropdown-basic-button"
                            href={PATH.SEARCHBOOKPAGE}
                            title={<>
                                <i className="bi bi-list"></i>
                                <span className='title-dm'>Danh mục truyện</span>
                            </>}
                        />
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

// function addHookTo(Component) {
//     function CompWithHook(props) {
//         const navigate = useNavigate();
//       return <Component {...props} navigate={navigate} />;
//     }
//     return CompWithHook;
//   }


export default HeaderBottom;