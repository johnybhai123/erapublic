import React,{useState} from 'react'
import { Dot3, Dot1, Dot2, Dots, H1, Main, P, Sub, Fac } from './Facilities.elements'

import Component from "./Component";
import { Link } from "react-router-dom";
function Facilities({ ChangeAnimation1, ChangeAnimation2, ChangeAnimation3 }) {
  const [color1, setColor1] = useState(1);
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();

  {
    color1 ? (ChangeAnimation1 = true) : (ChangeAnimation1 = false);
  }
  {
    color2 ? (ChangeAnimation2 = true) : (ChangeAnimation2 = false);
  }
  {
    color3 ? (ChangeAnimation3 = true) : (ChangeAnimation3 = false);
  }
  console.log(ChangeAnimation2);
  return (
    <Main>
      <P>WHAT WE PROVIDED</P>
      <H1>SCHOOL FACILITIES</H1>
      <Sub
        ChangeAnimation1={ChangeAnimation1}
        ChangeAnimation2={ChangeAnimation2}
        ChangeAnimation3={ChangeAnimation3}
      >
        <Fac>
          <Link to="/">
            <Component
              image="https://lh3.googleusercontent.com/roOYo12vlfhu6LWFUZcpRwosFe9Yb4g_AKz5nUOS0ll65Uz-UbxFJEhlz-8FUcUHeHt1IGxJLHt4NhF9wMIoq_H2yp-yBLi2YqTA0br83DLjM8PjUlapDwr7e0esxRc3T9W5x7Yj487CnGoZlQ-Yj7OhndM_LG3RStGi8BXSFGoEbqrIhf9mg1rF09xTwpfPKsTjPDgh3ii7S_fxZ1hFlSkl4uzDNdsnWYLAJwTW5a86VvLXqlJaFC3NC355teBl0RwJlP7byd9d7uKTK8i9Ds2gGTZYW9JFKAlaIDV4A9PaympkBamWADUQVtslkaHnPSM2QS4TH_YDkbeK4a_JB15khYuSrjCvTaDx1Nhtp1mYPJaDEFTXuZW3x421bzCDIKhWA8NXNCQiVS-dckDPAy9W2g6-dGmFcEoJ8qUkoLR3PNXwRzwSz646niYhkLbBukiTipYoRGYr1DEMSENTPG1qKK45zxg8KoRWnMRsjGnGzJUGRIrzmqQmhvApJ5X4eUNNC0VDhW3vJncNsV69lbkhmSVZq8j9oV2CcNWgpXkct5Yn2pgTv7zi-dNYh2NTYeXIL_kXd0uel4s216DWQeqREy1U6in2ElPX2sAFU27bP-qyzykqPlrvoTHiYDJY9lUevijZD3-Mf_Gym6ylKk2ncQJsx9lQJ3UVfytmILBtGuanl_mQRc4shLl-d5FI5qRvn0jxkAf7zhboLTPdNwRe=w1454-h969-no?authuser=0"
              heading="Campus"
              description="Four Acre Campus"
            />
          </Link>
          <Link to="/classroom">
            <Component
              image="https://lh3.googleusercontent.com/ArErIuqJP7eD3oEx_knePeBxpvhvQrTGP56meNaBMRsECUI1KctUMl_ZmY3QfALlGbpBBSBg_yrfJM8UaVTBAEdvFW4M8sGAtngZ23RaXSpLAFlXI06fg-q7hsusN-g0xmEqMPDUBU5_AVoG6dV3XhrSvuI3facIK4Mg9haKOF7HJIpT5JkizXiP1gklLei8q6sL9PDxKUlXnPhEVDLg1xP5f1jTriZKeuQfIcOI6TxGkUD5CiPWIvshAWBtTiLdUNvxXbPYmnUCPIHjkgoDoAfUb6BidER4wQNNohpFXcrnV7Ge0POSjOmyZNMyAIxwiofpKyCKLegUkn5VM3UvE-M-uvY9F1AYrlyEATZJAK3M1xCJeHye7hrpufUcPmC0nq5JMGJNgMw6Hfxek_VZx8yHsaVj8KzR9qmLYAWSfaQu1nqHL_bMLbEahmH0MLZE_zBt1xavHbz7iUAKzgw1p3rGb2mG8epQrgQr_1-EUJ-ktHitH8s4TCjVyS93NXAewp8OCoaQ3hm6wvUMY4ySh8a262xJMYIHQ3blGmzjqn5KLap2BEmgVO9Lea2Hn__gyBEqf4PcPNx4bwPmMgwhvXNuPF6q9o2hFumuE1rrEzMUPwwa5zrSMnKbZeGi5JwU-7msWDli8ERgfqwjXoNG4NlWaZwMELFz0V8UNQlWE-Z263fW1RkmD3fM48PSuTLeVFlEgKmbpjQ0jLnqaGY0LSVv=w1454-h969-no?authuser=0"
              heading=" Class Room "
              description=" Digital And Smart Class Room  "
            />
          </Link>
          <Link to="/library">
            <Component
              image="https://lh3.googleusercontent.com/UuQb-1N0R0FhI14jZ31zjYGPfZzKj-t2PquHK6Fb_bii2KJFkz76z-_PiFTpJnLzmhKNrvX0teCB-9eoKnvdInaqgNIyofxmp08CVBub1Fig4bF2KrtjZARVXeG8WQ9L5thBz2axEot8pWgeo1RLUW9raTChxYSB_fRzQ4I0POa7e61OmBf3mCYos-73dH3rEAnyRX0JectnVamgTAjF7StyOrRNVQB0lmTcejztEiebzCadmzBtrm2j9vMo7i-N8cVQ0xcWEgfBBl4VxCgSK_MWmKL3QjFkHdqeI1Hcdey0v4QcHy9demydDzK1P3wuJhrhK7djHPXz8u5mQJfUJq35Xo7cd_oP0UIBQKl3XHXDqoQvILnit2InVu_XoX_OuRmFSjb-Hb3ppiC2C_Avy6RixkzwVTi9JGkzgCJKYenHGay7nuCf8lDTxyWU6my2cFe7xm9nDSwjNa_ios6kn3O6t7T9YWrDoiVNMNB2PVHqDgn59OVyRcYljDA0C-aampVc9dEJXu-QmvWC9CKMHA0mkIJe_4kq0R_uMR_D7K4mMs10EehS1jkkshnT23yecfV2FM-bCUdRzJN-BDlTZHvBONV4wmq1iTVVAx7WjTtMCbxvjxzSw23dqsQmj8e3_zd1yYTRozQ2GsYNUScJW5E1VNl43k-SQRCn7LuhJHnLCZhQT_K_IZviRqI9u21vjc4Shjf3bipWSXkQLcZCLCCD=w334-h223-no?authuser=0"
              heading="Library"
              description="Well equipped Library "
            />
          </Link>
          <Link to="/lab">
            <Component
              image="https://lh3.googleusercontent.com/nsNr__n0NNlSDedRK6dPKyvlwYtiNxvi1hTn1jf1vyoYBwHxmPPh-Blce_YPCEQH7i8Z1FQ3oiED4r5Dz1rRl7RB6otj7_mnlZHHZ4YPq_s1qihVtsg7py9ysuppS9bvrI2Km-teZq_eYC5XzwHzhvDzREqJczYysW94_pXgHOqkmUq9O1VyoJDUylBRxKHAgrGq1aJWk5JUgsdzegJNy8iSLH6CNcPEgBiIoagAZFud5emZ8uDsyKJVirdUS5pe_8wUCurzV1Ju-26ZlkbKl6E9OEM2FNhuOaHuwBzc7rhK3sUMUKseZIh_UnX9ZJZZQsEX4MC55DO63FX9jVT3sSCGLMwsOM2k8IeEadhTLGFmEmwD_9iaDFZ-VX_OJcpM1hFoazcoTAgxrEj3AhSLYjrgByig0IdLOdL26ByrsVw53FclnCTxEJDSG18DiT3_-vnwaqojKPeMxafmXFQHCboVOY-jWNXuvdGovuMe7NUsDaZCISs85EPr5mD_Cw7ruznXqaUo7EIO9I_cTR61NPclWdghmbPEu_3KP3WaQRerN1d-0ZMU7hKcqtUWwQJ783-h5_N6tWQKw6mq6PbTvuqfTsh8eRn84bKZ-2tbcnSX7uuevqIJ8ugLM-sQ8QnZmBDSUUVxlJsXZt91MewR4SoUh8GaKrphCT3w2PvEvj7MNyeGgMIuxic2D3nMbByOHmwWLoxsMgCZu11sANvy2Y-Y=w1454-h969-no?authuser=0"
              heading="Laboratory "
              description="Science labs"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/activity">
            {" "}
            <Component
              image="https://lh3.googleusercontent.com/B24uT9x2rDc3ac-rbTBy7nsOoA9yC_T13enSULlHL6omwytvoedKG6HGgQfxniLrKhgP8_RPJDygebVYqJSb0UGx9URFMt_1dZFVdSHCOcn6NJl3P_nnlAKlcgDoEaKLR-Ti-QxKWJeGmiOstygIUEdDmWV2tLM1LEidHWRWYen2F4TthOiDm0W8cU9gcbRdFWGIGhdn1xus-h6FJmxG0oLv88uxnvWGeiGOwJoyXoFhJfbwh-1izWNiKLX9VSuBVmPFECCv8LvSzNpnxlkx9qRpX40y4e2s3g2RjT8lPXwPeznUoiG4xkzlLSP0MoL_d_3PmFSvlTTDoG1kb9mYiVPciQUn4Ls83FxIZVqtW6YJJXlJbdtR3eN5fViOw3guhms9BmlpleBciXpfvz5iJJM8htFtzloY9PZGThPtkWFLjVglCp1LftfD79uoHZLsGGTwDcNY65xRbK8I3m3lKImSkJsGqnJYarunuFS2G6LypIBxPqSztCNUQVpeof7gHLi0z0tRQjj9fyuuuyi4Z9S8tiZKUBcNx2Oor5Y1c2fz5f_cYQHjrNyuiXibFx6ADxm8y7KISIHyza7_QGJTmPNSisBodyWJoANBc-fDHUfHeNhGX3ZOd7r2qmJfUXHMsr6sJUOAzNGfNkHEmed1lVjqOYYszXDs0Lor6nEWyU7SC28v4QIAZgnmhO_Y4a4EFK22Em0W13vaDOXvNco3pHeZ=w1454-h969-no?authuser=0"
              heading="Activity Room"
              description="Kids Activity Room "
            />
          </Link>
          <Component
            heading=" Seminar "
            description="Auditorium & Audio Visual Room   "
          />
          <Link to="/activity">
            <Component
              image="https://lh3.googleusercontent.com/8hAOpEo0j_FvjymHCQ1XKklIocRQff2HNkmpCzJw1cu1DGGJ1qadh0Nd3ic0Aa4t6OpFokmWC-ySi_8y-AEEql9ZyObU2Ra1Nhq8Zbx22xCMyr4JIRxrrRa1B1fcNKT7-eua-GSGssaOS5gC9cjUMPEd48vZqGJGv77NWBL4qjQFzVHF-hn-7-qodxPR2fj4JqV7HZrPU4tGg1A8t3xBLG0HbRYkzVOcn27dsGnkXPfrAX4zg_OmMkF9_4rerthR40yulUTZtu1MDg4DIEt1uK47gwZnst-xCHpTzNLP-XSy8fRSPERzC29bopnDwbnWSTAknYole-t0U8Cj3BF9js8pU_dJOr7XrGpkWRaNhU_fd9_yX22U_WnZCzf9tQFQHHwUqVbW8DXbmLscATvs7o_uf5HKfcsw7lOQJfdIkJQ7gef3bfUoKV68WMbFnAi9I3-gOPeBVby1H2CmzMkMSj6f9O34S4Ydsen3Ax8dtLrljM7JyeC_4f8gMyFHUjlydq4CrSI6JC0w7sLbmlgv_9i-9qTnxTczvjI3YbOt1FPL3JpQrkjPSHkYebEdLjQK0v-itpUBR0p2HHEK3OQ2FsfFNjbdPDRyeFWh5RuE1aFCseS6xL-iycmm7Y_inkjheMgaw8ApgArVVTzqOJ-mOyg-TstbDfjpkGwznoYoszakNjnsEjqOcg5nzOkZuIKtVaoRvzDEENgQZFYF2wD8XJ7Z=w1454-h969-no?authuser=0"
              heading="Arts"
              description=" Art & Craft, Music and Dance "
            />
          </Link>
          <Link to="/transportation">
            <Component
              heading="Transportation Facility "
              description="Transportation Facility"
            />
          </Link>
        </Fac>
        <Fac>
          <Link to="/kinder">
            {" "}
            <Component
              image="https://lh3.googleusercontent.com/uyu0j0gwv8B3V4ETOde3HPUuymQ7rpZPggKLBfuTlswn9CS2iX9ibyGDort1XDckkFzQFyu6aza3lCU_ZWgl9pcMfeeGqdblt2IsgYWkH2GX1x0-jUXSm1eTOgnGlAPGs8gVgU-R2hoyw3u-Nxe5YSTl5QpCBCr7_aJ3SYcrxXEWjmRtdIT5WTynnl3sT8AEhmhdgWJ0bg4NLAawMN0wDV6P4MHlo-R4uHMs0Pwh6IPAhSIPDEe9qCa44Kv-GJ0eyuabfpNDs_RrY86XQ5A2ZrHQ_jVFc-gK98BWfUcNqbxOFEFbIQvxy0ReaHdkgVTWWHTuCgnG8wHsu_FmXxV25HKQFV0nzej0jXDdwY_c-SIVLnjhwVk8fZC6Ov9bHQZt96r3rPrJc5JFCB3gj20Pyln6poWeKKCbii6sQjKwaOKwoHoFpBkWlmRLdMmsDU8V3FY6HgqnMG5ic7nfqVGs0KMcme5Rum8bjpMkD4DL2KfyAQ71XRdnSy9P1rjuA_M4uPmltIIwjJW8oXUp4_AEPUMAqZ6pGOnthC48yVsWhJ_o6eA0EDCn7J5LxJC8b0-sQP-l9RpPDp3FJP6991EH9vYbbPphFZb1UVkfV02KH5aPo8i3zxATkToE_3wrN27iD2K51IDA6WE_7G2UEWMYisgn5W6hO9kB6RUiPVEnLeLE5P8L19htBqUc1rjU6Op9B9C62iAZ3eVurwGZ3Tc5SkvP=w1454-h969-no?authuser=0"
              heading="Ecofriendly Campus"
              description="Secure and Eco friendly Campus"
            />
          </Link>
          <Link to="/modern">
            <Component
              image="https://lh3.googleusercontent.com/K2tUb8wNmnPIYQdQ9Z9_Ioytsf8qGxeY4EalIcBusi9u-cw93dwo27xLuZL8GW3FCN04FrN92SfJlDf7bDxxK72nZnCy70hmp8VPFONbhqwVV2EHHolejoN6gzaqO7apgJcucpUNfIv2aVW5GY86zHmFQwMLAPLOryJ_BBa-glKCBd05P549GvkWYmp5Gc86UFpAHuKtedKfIJuCAWAOirle3u0c6X4ktOYstNLRhKPaHfdvvdSZ_CPaXVfJnnD5wOfoGEtwkM4d6jzDvPg1STM5udh7wzWYoMVkBtjsfdSH2UDqHiTE7W2VggxuDHpX9FyVOE3uwsHUElKSXK9YEHqaHSqAFlgdz6cgrIDFHkydfDFj6WeWABkmfdlD8VZbDCA_wts3IH3ztb5T3rHMwkH4_F6zqAU6Wbb94HQ5B8Mcngxy7eLRnEo-Oe1LOSKW0K414DoR9S8Nnwvd1KnwjARR3GU87SdqGRh-_e54temYP4qCr4hMTdqjY8XtQjv3ndmY77s7_gl-qqjVzQ5Y6XorQYEQpcbiPHg5re0MTfJ0dyRoIf2MosLQgf3mXgCxNW43fsbaDCOwfBBsZjf8KZ1n6MJVeVeGno-_wmKPOWqw_aiIqYgKtsvgdNQwOedxrInYmHlRN78RHyQZcw1fZI5yOWiIzKD7Bnlg-eE5xggQeolMDYv0_p3lz-lZkJJXpNdZbf1a2aVkUJHSnjww49NI=w1454-h969-no?authuser=0"
              heading=" Sports "
              description=" Well maintained Sports Complex  "
            />
          </Link>
          <Component
            heading="Environment"
            description="Motivating learning environment "
          />
          <Link to="/wifi">
            <Component
              image="https://lh3.googleusercontent.com/h4KlCXPHVb9x0xOOruwOo1t4Tl7osyRtsaVXj4v7BLoxjbH69ehI2n2RbzD15dm_gnmLjCFWy2eJOqLKHCuzfPYDg87UV0dXzC5BnaIK32WrKk9DMItfzDFoI-9ut_gJDljYcUGFlCSzoqahzumvBGQG5XGnMzj78C_hTjafgOjM_OqJRJkMzUl8JC20xIZwzYkxgv0sCJIWO8Rw3Whl4XOlM08np6FBawf1ZGWaUtcaQlrfBkMUFHVINLMsVoFl55dFLn9_Y8tzSHVzBcHMUoTfbyloaBawUn-dyLj6dMlEP_PdckcHdAInxL3K8ZCYVQjOUDHlnxB5fZ7e6oQ3Mc83iV05qc60PqP6jEHHoaDZq8NlkEEFeB_snR7t_2Er01ag8ANX7_KFn4ZUBmwkAOZ2pOI13WL4BdbF4eGhHuwnstUq0AKNorzN8Wy5PjrmOay5jp1VqSCvoCJhrTq-sHnR0kYFor-brk0yZ7yQtlUxL7EcxornEsVagVQhcy78kO_KiHMu9h_4IFcXeiZ-cww9DRm05PfsgxiS0MFdTe9VX8gcnx5s6V3Wui49BDXLQ9gN9iGDzYHw-_KXK_4prJWjq9v_aOz5qX0PA-Fi_qG8-mizya8LgOKcEQ5cawI2L3VvVzRwJaMNiNSThC4On4Gda63f8i0osJpOTtaXRHP58MhezYtLLSs8XHa25taKCHaqEPCt1INZynz1nDtnGtqF=w1454-h969-no?authuser=0"
              heading="Computer Lab "
              description="Computer & Secure Wifi for kids"
            />
          </Link>
        </Fac>
      </Sub>
      <Dots>
        <Dot1
          onClick={() => {
            setColor1(true);
            setColor2(false);
            setColor3(false);
          }}
        ></Dot1>
        <Dot2
          onClick={() => {
            setColor1(false);
            setColor2(true);
            setColor3(false);
          }}
        ></Dot2>
        <Dot3
          onClick={() => {
            setColor1(false);
            setColor2(false);
            setColor3(true);
          }}
        ></Dot3>
      </Dots>
    </Main>
  );
}

export default Facilities
