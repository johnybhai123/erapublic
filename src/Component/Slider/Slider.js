import React from "react";

import { Carouselcaption, Img } from "./Slider.elements";
function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/1cUFBXjMJa52pKGBh6Y8ploGbRDPPloFuNIcxg_mvqrszoC4GI19IBqgniv3K5mpUbzKPPAKpkY06byqNKcNf5WZcTSYCIA-2NyvcpUwM4zdwokXkAFQQBGV5mI-Y6vLEUacfP2CCSrmDU6W92y5koNtc8g7h_Gng_XJBuhniHf6aGSfH8FQyxIu6K06dm8kTe1s0kdn3kFfHc_Ezs9D6GqAaWFtkwdwEJ_jbSA9S9d7ISXIxS-GWuS7fJw4xFxTM76iPxwKggwjWOV9vQhHOfyqDaHTwYWFeIOaCgbDmTvebRPpr4-C50J_fowmyFk9UPdKTAzeGE80Yf27ylNTohb3eMGwPnu4gJd6p2IflO3zsF2qoSEQxDgVqKZQsY3jrbFs3SIk-ZuOF8ucPzHzzA3302tiKj1D7gAVWUnTIMuC6PCIBtmZhLrMPGBC33835WWq2LlAmKo84FaxG6Hj6ai2rzv1qF8vL5jLOQW_MDwrqfA8ZxEe0gz52Xuz8Ko6Wn5qOU5E1i0MF1xcG3-u9VN_MU6QY2bQ16QnurbFBeHNXVNQLH-TcFo0dBxWd1WqOdjahExeTwD5nGoq7EFfsmGSuhB_2A94LFkxh4fzcnb2X6Aj9vP8xd2PKL0HeDxc1QrDzWiOZ-gfAyE4Q8jVbLspHqtCKokowSqldCse156Qnoox2AH0zwF9xTaInzoRszK9tsFttIA6GQHM1RJJLbaz=w1454-h969-no?authuser=0"
            alt="First slide"
          />
          {/* <Carouselcaption>
            <h2 style={{color:'blue',textShadow:'1px 1px white'}}>Be able to work independently and with others</h2>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/4brikfsqcW1IEFftuLpAe-2Q_WricyVcg_5DK4JX9nFf46cB87FZcC7oIfI6uXTHT0GvP5RZb1BH6aVJJfBibu7BxaCjfMd2d8N3Z-4-T2ACMW7RRHzTAnidTqTxYlDBuZjttAxwFA9nLvjLqh391mw3m2JJlqYdnOoeQV7Ev_zyeEON3-Ho8WKRWo2UXUhnv-hUzDguzAMVrEjMwFTJ0lyu21vrcPJwCvxLz9z1OfpC9KZtQGskefpvHVlkA2NBss94U6LXawUQtqQsmxx0b5k5kMwrxmcFA4dnHScWGxmwIeO1gXzeAgsPmOk1NB6njtp-yhLx35lxpvbVjFPxYWaAGYly4kvGMsMmj5v4BNVNjCo1quy3XUZbd5G1H-60Kpwqy6w5hX-UUrOOHf6xgUpntASYL3zMXTi22bsatyaaY8Z-latpCdY_77k91Eltin-WL9c0YMo-FJbRtzOKjnr5gAevVUlXdVFuhVRkmachu1m4UyQbn0ygoWc1EJfE0yv6V5rXe3XNkrmSFub4Fi0tPrs_MWZr1qbQYliNuliktCPrkW1XwnD17Yn0LNcfgFz_06TVTz-Y-3A4JL1pCBTTkCQ7tUQAkXEG4Rai7xtijRmo5oDp-ZmRCeF_otALFeNJZkC2Q11hJBhnpLWTvhWDHci-Br7cFPVvEtcj-8NzAMaJlHL_hevCz8fwM7qoHzlC0Py6o0x_w0rDPBqmTukC=w2001-h955-no?authuser=0"
            alt="Second slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/roOYo12vlfhu6LWFUZcpRwosFe9Yb4g_AKz5nUOS0ll65Uz-UbxFJEhlz-8FUcUHeHt1IGxJLHt4NhF9wMIoq_H2yp-yBLi2YqTA0br83DLjM8PjUlapDwr7e0esxRc3T9W5x7Yj487CnGoZlQ-Yj7OhndM_LG3RStGi8BXSFGoEbqrIhf9mg1rF09xTwpfPKsTjPDgh3ii7S_fxZ1hFlSkl4uzDNdsnWYLAJwTW5a86VvLXqlJaFC3NC355teBl0RwJlP7byd9d7uKTK8i9Ds2gGTZYW9JFKAlaIDV4A9PaympkBamWADUQVtslkaHnPSM2QS4TH_YDkbeK4a_JB15khYuSrjCvTaDx1Nhtp1mYPJaDEFTXuZW3x421bzCDIKhWA8NXNCQiVS-dckDPAy9W2g6-dGmFcEoJ8qUkoLR3PNXwRzwSz646niYhkLbBukiTipYoRGYr1DEMSENTPG1qKK45zxg8KoRWnMRsjGnGzJUGRIrzmqQmhvApJ5X4eUNNC0VDhW3vJncNsV69lbkhmSVZq8j9oV2CcNWgpXkct5Yn2pgTv7zi-dNYh2NTYeXIL_kXd0uel4s216DWQeqREy1U6in2ElPX2sAFU27bP-qyzykqPlrvoTHiYDJY9lUevijZD3-Mf_Gym6ylKk2ncQJsx9lQJ3UVfytmILBtGuanl_mQRc4shLl-d5FI5qRvn0jxkAf7zhboLTPdNwRe=w1454-h969-no?authuser=0"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/TxK96_GgayZegAm__lNZjKD_di-Cjvb9qknLGC4DDj-ncqlxtjYIFtSleImcIyLAOM-mZ7G0FhZ0qZEyhtCVz-snETa6Ablj9j9Ja9vCtoy46ix8hP54nIJcDwCAm4ZSrGpsVi1-m4ueMPI8S7ZXTXh_1PRM_QdrK09kkG7jEiL-5ZmX70WZvRyiX80W_aXapGqQelploDu8mVHkUWbxvranZ-_0GwPjF5DXsPMHMQyp_s4CkW0uIChgtbxjMEeKLKJWmLgoVRkMrHbJBpWhP1vW6ma0_PZ0ikKvw69e15HcHhB6_SaIXTqtcGpwaGPG67ZrHLcj6ssBBTifedlA2Gg3CfT32uXtgM7Zp5VD0-mbm6aOwq1s5F8zNX7YGa3WHO8oWkGAcPLNOayVPTAcAXizgwtA91ZWgO7PLNuVoWdVVsd3SaKa7-9A1OtXhsxCIFZ7m1mbcHJQKT3NHwGuBBM0aq6jbBVIcFL3-C441Ly_4yI4tePYDERLWiBgDSu4qzdE8wjy0ceTAfd411Tbok1nrKMH4Jv5Yky8FZ_KmUhIG0xSEgXQYxlpIMNYBB1fEug1VuRVPth8XHaMyLSE6tDNd0U7k_b1azms9UO4cAelS5-0VEveeudCYRY6u79QQCA-5FlWeUTp2kqe9glSNNcy05fQplk7UFcEMhXS-7fJGDjLUwftdJwsCq74eKPjiy06eUTYhHXidtPPLcAorJLe=w1452-h969-no?authuser=0"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/9AbpNofIIannQ3p9QleaE2JzKxxPlDcxr2VtotEcrdUofSqOri4TibUpg-QEZsck9JqtEe51omfkMpQlqEb6oCCw2Sye987cpZ0mHl-rbmb0pTTEoGYq23SDlfazJaoIfBnpU-gG86kqruo2uBec9VciIxWN1umB1WgJaHNUDUjYZ9rX6HWaEXR_xHVTH9lHCZ1AtuJOLtmQzh9Io_1tEIYk7Du7I8YEsqUQ_R6BOu09MeNQOh1TKpOxc6UMb31r3V-G7JSfZx4d_nzqQ_H4CFxiFcE0CjMew-5CDIcGOCQS94pwxscsWaUQq4aLvEugRJk2VbP668pMIxnPtRSQD7vDaqKni4tE6K8ZBhOHIoGAgiMX7wo_ZDGUbGP90pn9Jam3PgsmOw53JE-lKPiUklQF8401KH0JVgILEu39Kw3NmM0KqKKrUJmSeAJgSJAYiI_xnIKvpMppkl8lg5xXIICtR6KOZpP1t-7ZPs2gRH8OH8COyI9v2iD-bRRLHd7Xk4ZOuuoXUF0tv3xL5bHMSbsu80FpCsvigW8k8WeOILSlVvcokf0p-gGA2rptTfVyJEIwUlRpYoe3KgYaKnyQPR7my5bz4O9qj0wPy9plb0iznTWsvAlgD2aAo80tIo7xpG95r142SeJ-aZOKdXuju4-BIX2T0PlpLan4LJOIgflfFXirO7Cg3sJjlRkzaVt_e-MLe4f_gS_IYXTwWhxIYfOL=w1452-h969-no?authuser=0"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>School Heading</h1>
            <p style={{color:'white'}}>School Description</p>
          </Carouselcaption> */}
        </div>
        <div className="carousel-item">
          <Img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/Mt6KM8vL9EiucZrFWWB6Ff-P029YrnLIZsSbB9t5vMQM3RVaz6wprE99_2nYPKfE6ZHVciGcCww849LCdEEW8-4JLwgF3r-8lHESC1i7sjQJOESjRd4xdPhMtJ3MMBHDlpZkxdHAsbvTLVEnIrn4H_8hDtJ17t6yq_bMx8xFe12mzmhsvcNyLMNv8hkD-AAQq7FLO7g0Wmfk3tJG1m961PGajtzRdm8XvDrHxM-D-YYftkCaHYA3cBDod6Zw5JTZdkd-tEthCq2PPZb9TPqGRV8tiMBrqBNJhO0SCHW3mHHsIs079sVEIAOpz38HrEPJqHCPGzyLJaib9EUyrNUYwe6tH1jeQ-zfw33ypPCWwn9U-CRd5xq385D_vIrjUC4Rc4U3P275vJ7kEGhkOovuBPTjzfihIv9FGB4WIpOZMK4Ayb3SG7AbpJ0oqZ9OiM5ML2u0nLGRlMMBvtSQns2l2Vz0HdIht32vYF2V70weCcYlJYLKxTIiPJgeEwFPWqi-pCgouKbIMcYPUGYzZRug_SujzeiE2uQqJKgVgyKfhDX4hTJqt0Zq_4FZ3UxOKyvRqxs2lbbKLCJ_U_1-V0B9pG-rvuJd--0hCawseSjKXluCzhGsDnuxmp5Djx8Claqi28tNcZLTFN00eF2jFE6QM3tDHrcWS95EJvXBq1JZakpzQwDdyGHyr5tfU388BIwl1qNFSgUlHn0NDopEGTjueEl6=w1454-h969-no?authuser=0"
            alt="Third slide"
          />
          {/* <Carouselcaption>
            <h1 style={{color:'black',textShadow:'1px 1px white'}}>Goals of education  </h1>
            <p style={{color:'white'}}>Be able to work independently and with others</p>
          </Carouselcaption> */}
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
