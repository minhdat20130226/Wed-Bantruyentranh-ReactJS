import React, { Component } from 'react';
import HeaderTop from './HeaderTop';
import HeaderCenter from './HeaderCenter';
import HeaderBottom from './HeaderBottom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const headerTopHeight = document.querySelector('.header-top').getBoundingClientRect().height;
        const headerSearchHeight = document.querySelector('.header-search').getBoundingClientRect().height;

        // Tính toán vị trí cần kiểm tra: chiều cao của header-top và header-search
        const positionToCheck = headerTopHeight + headerSearchHeight;
        const scrollPosition = window.scrollY;

        // Kiểm tra điều kiện khi scroll đến vị trí cụ thể
        if (scrollPosition <= positionToCheck) {
            this.setState({ isSticky: true });
        } else {
            this.setState({ isSticky: false });
        }
    }

    render() {
        const { isSticky } = this.state;

        return (
            <>
                <HeaderTop isSticky={isSticky} />
                <HeaderCenter />
                <HeaderBottom />
            </>
        );
    }
}

export default Header;
