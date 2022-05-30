import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        V
                        <img src={'https://i.pinimg.com/736x/fa/43/63/fa4363c81477be44722e219be98f8dd9.jpg'} width={"24px"} alt=""/>
                        sic
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;