import React from "react";
import "./MainAppContent.css";
import Container from "../../components/container/Container"
import LargeContainer from "../../components/LargeContainer/LargeContainer";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { GetBaseUnits, GetRequestTypesToUnit } from "../slices/mainSlice";

//Basic Modal
// import BasicModal from "../../components/BasicModal/BasicModal";
import Modal from "../../components/Modal/Modal";

var mainList = ["תיאום יום קבלה", "תיאום צוות כשירות","מענה אישי", "תיאום מופע הטמעה", "Beework"];
// console.log(mainList[0])

function CreateContainer(info, i){
    return <Container name={info} key={i + 1}/>
}

function MainAppContent(){

    // const main = useSelector((state) => state.mainSlice);
    // const dispatch = useDispatch();
    // console.log(main.baseUnits);
    // console.log(main.requestTypesToUnit)

    // useEffect(() => {
    //     console.log('mount');
    //     dispatch(GetBaseUnits())
    //     dispatch(GetRequestTypesToUnit())
    // }, [dispatch]); //First Render

    return(
        <div className="main-app-content">
            <div className="top-main-part">
                <h2>שלום, איתי חסון</h2>
                {/* <BasicModal /> */}
                <Modal />
                <div className="container-div">
                    {mainList.map(CreateContainer)}
                </div>
            </div>
            <div className="bottom-main-part">
                <div className="light-div"></div>
                <div className="under-main-div">
                    <div className="under-main-div-wrapper">
                        <h4>ימי קבלה שקבעתי</h4>
                        <LargeContainer firstTitle='בצ"פ דרום (379)' secondTitle="יום ג 23.2 בשעה 14:30"/>
                        <h4>פניות ודרישות</h4>
                        <LargeContainer firstTitle='בצ"פ דרום (379)' secondTitle="יום ג 23.2 בשעה 14:30"/>
                    </div>
                    <img alt="under-img" src="images/144_large.jpg"></img>
                </div>
            </div>
        </div>

    );
};

export default MainAppContent;