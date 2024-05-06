import React, { Component } from 'react';
import { Navbar, Container, Dropdown, DropdownButton, Button, Stack, Image } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
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
            showNavbar: true,
            hoveredDanhMuc: null,
            categoryGenresData: {},
            dataGenre:{},       
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
        const currentPath = window.location.pathname;
        const showNavbar = currentPath === PATH.HOME;
        this.setState({ showNavbar });
        try {
            const responseData = await categoryService.getCategoryGenres();
            this.setState({ categoryGenresData: responseData });
        } catch (error) {
            console.error('Service Error:', error);
        }
    }

    handleItemClick =  (genre) => {
        try {
            const pathSub = genre.replace(/\s+/g, "-");
            const navigate = this.props.navigate;
            navigate(`${PATH.SEARCHBOOKPAGE}/${pathSub}`, { state: {dataGenre:"qưe"} });
        } catch (error) {
            console.error('Error data:', error)
        }
    }

    renderCategory(danh_muc,categoryGenresData){
        return(
            <>
             {danh_muc.map((danh_muc, index) => (
                                <DropdownButton
                                    key={index}
                                    id={`dropdown-${danh_muc}-button`}
                                    className="item"
                                    drop="end"
                                     href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}`}
                                    title={danh_muc}
                                    show={this.state.showMenu && this.state.hoveredDanhMuc === danh_muc}
                                    onMouseEnter={() => this.handleMouseEnter(danh_muc)}
                                    onMouseLeave={this.handleMouseLeave}
                                    // onClick={() => this.handleItemClick(danh_muc)}
                                >
                                    <div className="menu-box-item" style={{ display: 'flex', top: `${positionTop[index]}px`}}>
                                        <div>
                                            <Dropdown.Header>Nổi bật</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                                                <Dropdown.Item key={index} as='a' href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyAuthorName.replace(/\s+/g, "-")}`}>{item.storyAuthorName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Dịch giả</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                                                <Dropdown.Item key={index} as='a'  href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyTranslatorName.replace(/\s+/g, "-")}`}>{item.storyTranslatorName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Nhà xuất bản</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 7).map((item, index) => (
                                                <Dropdown.Item key={index} as='a'  href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.placePublicationName.replace(/\s+/g, "-")}`}>{item.placePublicationName}</Dropdown.Item>
                                            ))}
                                        </div>
                                        <div>
                                            <Dropdown.Header>Tác giả</Dropdown.Header>
                                            {categoryGenresData[danh_muc].slice(0, 6).map((item, index) => (
                                                <Dropdown.Item key={index} as='a'  href={`${PATH.SEARCHBOOKPAGE}/${danh_muc.replace(/\s+/g, "-")}/${item.storyAuthorName.replace(/\s+/g, "-")}`}>{item.storyAuthorName}</Dropdown.Item>
                                            ))}
                                        </div>
                                    </div>
                                </DropdownButton>
            ))}
            </>
        )
    }

    render() {
        const { categoryGenresData } = this.state;
        const { showNavbar } = this.state;
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
                            show={showNavbar}
                            onMouseEnter={() => this.handleMouseEnter("TitleDM")}
                            onMouseLeave={this.handleMouseLeave}
                        >
                            {this.renderCategory(danh_muc,categoryGenresData)}
                            


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

// function addHookTo(Component) {
//     function CompWithHook(props) {
//         const navigate = useNavigate();
//       return <Component {...props} navigate={navigate} />;
//     }
//     return CompWithHook;
//   }
  

export default HeaderBottom;